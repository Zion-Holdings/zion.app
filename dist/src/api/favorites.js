export async function toggleFavorite(productId) {
    const res = await fetch('/api/v1/favorites/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
    });
    if (!res.ok) {
        throw new Error('Failed to toggle favorite');
    }
    return res.json().catch(() => ({}));
}
