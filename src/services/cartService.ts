export async function mergeGuestCart(items: any[]) {
  const API_URL = import.meta.env.VITE_API_URL || '';
  const res = await fetch(`${API_URL}/cart/merge`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ items }),
  });
  if (!res.ok) {
    throw new Error('Failed to merge cart');
  }
  return res.json().catch(() => ({}));
}
