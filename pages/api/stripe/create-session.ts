export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { productId } = req.body as { productId?: string };
  if (!productId) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Missing productId' }));
    return;
  }

  // In this demo environment we return a mock session id
  const sessionId = `sess_${productId}`;
  res.statusCode = 200;
  res.end(JSON.stringify({ sessionId }));
}
