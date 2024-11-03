import { getAllPosts } from '../lib/posts';

export async function GET() {
  const baseUrl = 'https://maxlk.com'; // Your actual domain

  const posts = getAllPosts();

  // Generate the XML for each blog post
  const sitemapEntries = posts.map((post) => {
    return `
      <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${post.date}</lastmod>
      </url>
    `;
  }).join('');

  // Complete the XML structure for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
