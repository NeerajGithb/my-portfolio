// app/sitemap.xml/route.js
export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://my-portfolio-n.vercel.app";
  const routes = [
    "", "projects", "contact", "about", "resume", "skills",
    "facebook", "music-web", "netfkix", "portfolio", "todo",
    "twitter", "url-shortner"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>${baseUrl}/${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`).join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
    status: 200,
  });
}
