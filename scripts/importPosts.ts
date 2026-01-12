// scripts/importPosts.ts

const { client } = require("./sanity/lib/sanityClient");
import { htmlToPortableText } from "../sanity/lib/htmlToPortableText";
import fetch from "node-fetch"; // npm install node-fetch@2

// -----------------------------
// Types
// -----------------------------
type TextBlock = {
  _type: "block";
  style?: string;
  children: { _type: "span"; text: string }[];
};

type ImageBlock = {
  _type: "image";
  asset: { _type: "reference"; _ref: string };
  alt?: string;
};

type MyPortableTextBlock = TextBlock | ImageBlock;

// -----------------------------
// Upload image to Sanity
// -----------------------------
async function uploadImage(url: string): Promise<ImageBlock> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
  const buffer = await res.arrayBuffer();

  const filename = url.split("/").pop() || "image.jpg";

  const asset = await client.assets.upload("image", Buffer.from(buffer), {
    filename,
  });

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

// -----------------------------
// Convert HTML → blocks + upload images
// -----------------------------
async function convertHtmlWithImages(html: string): Promise<MyPortableTextBlock[]> {
  const blocks = htmlToPortableText(html);

  const newBlocks: MyPortableTextBlock[] = [];

  for (const block of blocks) {
    if (block._type === "image" && block.url) {
      const uploadedImage = await uploadImage(block.url);
      newBlocks.push(uploadedImage);
    } else {
      // TypeScript-safe text block
      newBlocks.push(block as TextBlock);
    }
  }

  return newBlocks;
}

// -----------------------------
// Create Sanity post
// -----------------------------
export async function createPost(htmlContent: string, title: string) {
  const blocks = await convertHtmlWithImages(htmlContent);

  const doc = {
    _type: "post",
    title,
    slug: { current: title.toLowerCase().replace(/\s+/g, "-") },
    publishedAt: new Date().toISOString(),
    body: blocks,
  };

  const result = await client.create(doc);
  console.log("✅ Post created with ID:", result._id);
}

// -----------------------------
// Example usage
// -----------------------------
(async () => {
  const sampleHtml = `
    <h1>My Imported Post</h1>
    <p>This is a paragraph.</p>
    <img src="https://ict.net.pk/wp-content/uploads/image.jpg" alt="Demo Image" />
  `;

  await createPost(sampleHtml, "My Imported Post");
})();
