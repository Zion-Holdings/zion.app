import { cart, CartItem } from './store';

interface Req { method?: string; body?: any; }
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

export default function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { id, name, price, quantity } = req.body || {};
  if (!id || !name || typeof price !== 'number') {
    res.status(400).json({ error: 'Invalid item' });
    return;
  }
  const qty = typeof quantity === 'number' && quantity > 0 ? quantity : 1;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ id, name, price, quantity: qty } as CartItem);
  }

  res.status(200).json(cart);
}
