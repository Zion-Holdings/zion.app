export const runtime = 'edge';
export const dynamic = 'force-static';

export async function GET() {
  return new Response('ok', {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-cache, no-store, must-revalidate',
    },
  });
}
