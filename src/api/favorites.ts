export async function toggleFavorite(
  productId: string | number
): Promise<unknown | { needsAuth: true }> {
  const res = await fetch('/api/v1/favorites/toggle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId })
  });

  if (res.status === 401 || res.status === 403) {
    return { needsAuth: true };
  }

  if (!res.ok) {
    throw new Error('Failed to toggle favorite');
  }

  try {
    return await res.json();
  } catch {
    return {};
  }
}
