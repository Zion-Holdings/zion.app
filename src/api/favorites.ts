export async function toggleFavorite(
  productId: string | number
): Promise<unknown> {
  const res = await fetch('/api/v1/favorites/toggle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId })
  });
  if (!res.ok) {
    throw new Error('Failed to toggle favorite');
  }
  try {
    return await res.json();
  } catch {
    return {};
  }
}
