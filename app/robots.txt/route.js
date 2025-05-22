// app/robots.txt/route.js
export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://my-portfolio-n.vercel.app/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
