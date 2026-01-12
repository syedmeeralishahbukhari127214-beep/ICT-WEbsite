import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-01',
});

export async function GET() {
  const baseUrl = 'http://localhost:3000';

  // 1. Sanity Data (Dynamic)
  const query = `*[_type in ["course", "post", "mentors"]] {
    "slug": slug.current,
    "type": _type,
    "updatedAt": _updatedAt
  }`;
  const sanityData = await client.fetch(query);

  // 2. Manual Pages (Static - Jo aapke code mein hain)
  const manualPages = [
    { path: '', priority: '1.0', freq: 'daily' },
    { path: '/verify-certificate', priority: '0.9', freq: 'monthly' },
    { path: '/about', priority: '0.8', freq: 'monthly' },
    { path: '/contact', priority: '0.8', freq: 'monthly' },
    { path: '/courses', priority: '0.9', freq: 'weekly' },
    { path: '/blogs', priority: '0.9', freq: 'weekly' },
  ];

  // 3. XML String Start
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Manual Pages Loop
  manualPages.forEach((page) => {
    xml += `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.freq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
  });

  // Sanity Dynamic Data Loop
  sanityData.forEach((item: any) => {
    let folder = '';
    if (item.type === 'post') folder = 'blogs';
    else if (item.type === 'course') folder = 'courses';
    else if (item.type === 'mentors') folder = 'mentors';

    const fullPath = `/${folder}/${item.slug}`;

    xml += `
    <url>
      <loc>${baseUrl}${fullPath}</loc>
      <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;
  });

  xml += `\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}