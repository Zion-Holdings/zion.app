// Minimal request and response types to avoid Next.js dependency
interface Request {
  method?: string;
  body?: any;
}

interface Response {
  status(code: number): this;
  setHeader(name: string, value: string): this;
  json(body: unknown): void;
  end(msg?: string): void;
}
export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.status(405).setHeader('Allow', 'POST').end('Method Not Allowed');
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
