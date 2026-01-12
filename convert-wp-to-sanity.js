const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const { JSDOM } = require("jsdom");
const axios = require("axios");

/* ================== SANITY CLIENT ================== */
const client = createClient({
  projectId: "tygmtn6b",
  dataset: "production",
  apiVersion: "2026-01-10",
  token: "sk8XZwKXEHluuXXPZQH7Dk8Q28W4CaX0pi5nqIytlMKhy3ag1GWpf01p7K24ZwiBXMLLIX54TUClyJPl5OVnmpbk0liEk4Lxe8vsnKNb7NXWz7BUJkhpJrtfVXrH5lrahrWNOoSk9iSEpkKc8ulAGlPKsyA7FCIVZPlwBie9XOS0kVmb1tji",
  useCdn: false,
});

/* ================== CONSTANTS ================== */
const WP_XML_FILE = path.join(__dirname, "ict.WordPress.2026-01-09.xml");
const WP_SITE_URL = "https://ict.net.pk"; // 🔴 CHANGE THIS
const randomKey = () => Math.random().toString(36).substring(2, 10);

/* ================== IMAGE HELPERS ================== */
function getImageUrl(img) {
  return (
    img.getAttribute("data-src") ||
    img.getAttribute("data-lazy-src") ||
    img.getAttribute("data-original") ||
    img.getAttribute("srcset")?.split(",").pop()?.trim()?.split(" ")[0] ||
    img.getAttribute("src") ||
    null
  );
}

function normalizeUrl(url) {
  if (!url) return null;
  if (url.startsWith("//")) return "https:" + url;
  if (url.startsWith("/")) return WP_SITE_URL + url;
  return url;
}

/* ================== IMAGE UPLOADER ================== */
async function uploadToSanity(url) {
  try {
    const finalUrl = normalizeUrl(url);
    if (!finalUrl) return null;

    const response = await axios.get(finalUrl, {
      responseType: "arraybuffer",
      timeout: 20000,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const buffer = Buffer.from(response.data);
    const filename = finalUrl.split("/").pop().split("?")[0];

    const asset = await client.assets.upload("image", buffer, {
      filename,
      contentType: response.headers["content-type"],
    });

    console.log("📸 Image uploaded:", filename);

    // 🛑 Rate-limit safety
    await new Promise((r) => setTimeout(r, 300));

    return {
      _type: "image",
      _key: randomKey(),
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.error("❌ Image failed:", url);
    return null;
  }
}

/* ================== INLINE TEXT ================== */
function parseInline(element, markDefs = []) {
  const children = [];

  element.childNodes.forEach((node) => {
    if (node.nodeType === 3) {
      if (!node.textContent.trim()) return;
      children.push({
        _type: "span",
        _key: randomKey(),
        text: node.textContent,
        marks: [],
      });
    } else if (node.nodeName === "STRONG" || node.nodeName === "B") {
      children.push({
        _type: "span",
        _key: randomKey(),
        text: node.textContent || "",
        marks: ["strong"],
      });
    } else if (node.nodeName === "A") {
      const linkKey = randomKey();
      markDefs.push({
        _key: linkKey,
        _type: "link",
        href: node.getAttribute("href"),
      });
      children.push({
        _type: "span",
        _key: randomKey(),
        text: node.textContent || "",
        marks: [linkKey],
      });
    }
  });

  return children;
}

/* ================== HTML → PORTABLE TEXT ================== */
async function processHtmlContent(html) {
  if (!html) return [];

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const blocks = [];

  const elements = document.body.querySelectorAll(
    "h1,h2,h3,h4,p,ul,ol,img"
  );

  for (const node of elements) {
    if (node.nodeName === "IMG") {
      const src = getImageUrl(node);
      const uploaded = await uploadToSanity(src);
      if (uploaded) blocks.push(uploaded);
      continue;
    }

    const style =
      node.nodeName === "P" ? "normal" : node.nodeName.toLowerCase();

    const markDefs = [];
    const children = parseInline(node, markDefs);

    if (children.length) {
      blocks.push({
        _type: "block",
        _key: randomKey(),
        style,
        children,
        markDefs,
      });
    }
  }

  return blocks;
}

/* ================== MAIN IMPORT ================== */
async function importPosts() {
  console.log("🚀 WordPress → Sanity Import Started");

  const parser = new xml2js.Parser({ explicitArray: false });
  const xmlData = fs.readFileSync(WP_XML_FILE, "utf-8");
  const result = await parser.parseStringPromise(xmlData);

  const items = Array.isArray(result.rss.channel.item)
    ? result.rss.channel.item
    : [result.rss.channel.item];

  for (const item of items) {
    if (item["wp:post_type"] !== "post") continue;
    if (item["wp:status"] !== "publish") continue;

    console.log("📦 Post:", item.title);

    const bodyBlocks = await processHtmlContent(
      item["content:encoded"]
    );

    const featuredImage = bodyBlocks.find(
      (b) => b._type === "image"
    );

    const doc = {
      _type: "post",
      title: item.title,
      slug: {
        _type: "slug",
        current: item["wp:post_name"] || randomKey(),
      },
      publishedAt: new Date(item.pubDate).toISOString(),
      body: bodyBlocks,
      image: featuredImage
        ? { _type: "image", asset: featuredImage.asset }
        : null,
    };

    try {
      await client.create(doc);
      console.log("✅ Imported:", item.title);
    } catch (err) {
      console.error("❌ Post failed:", item.title, err.message);
    }
  }

  console.log("🎉 IMPORT COMPLETED SUCCESSFULLY");
}

importPosts().catch(console.error);
