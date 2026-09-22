import { getAllPosts } from "@/lib/posts";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const base = "https://aungbobokyaw.com";
  const posts = getAllPosts();

  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid>${base}/blog/${p.slug}</guid>
      <pubDate>${p.date ? new Date(p.date).toUTCString() : ""}</pubDate>
      <description>${escapeXml(p.summary)}</description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Aung Bo Bo Kyaw</title>
    <link>${base}</link>
    <description>Writing on the path from electronics repair technician to product builder.</description>
    <language>en</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
