export async function fetchRecommendations(userId) {
  const res = await fetch(`/api/v1/recommendations?userId=${encodeURIComponent(userId)}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recommendations');
  }
  return res.json();
}
