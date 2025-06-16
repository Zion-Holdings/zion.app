export async function fetchRecommendations(
  userId: string,
  type: string = 'equipment'
): Promise<unknown> {
  const params = new URLSearchParams({ userId });
  if (type) params.append('type', type);
  const res = await fetch(`/api/recommendations?${params.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recommendations');
  }
  return res.json();
}
