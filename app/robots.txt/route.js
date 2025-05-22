export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://my-portfolio-n.vercel.app/sitemap.xml
  `;
  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
