// app/ads.txt/route.ts

export async function GET() {
  const content = `google.com, pub-3077714211582326, DIRECT, f08c47fec0942fa0`;
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
