// Generic request/response types so this can run outside Next.js
type Req = { method?: string; body?: any };
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { productId } = req.body as { productId?: string };
  if (!productId) {
    res.status(400).json({ error: 'Missing productId' });
    return;
  }

  // In this demo environment we return a mock session id
  const sessionId = `sess_${productId}`;
  res.status(200).json({ sessionId });
}
