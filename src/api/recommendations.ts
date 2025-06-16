import type { ProductListing } from '@/types/listings';
<<<<<<< HEAD
=======

>>>>>>> 15994bbe0c35c2d9d9fc06a593e6159ea10417bd
export async function fetchRecommendations(
  userId: string,
  type: string = 'equipment'
): Promise<ProductListing[]> {
  const params = new URLSearchParams({ userId });
  if (type) params.append('type', type);
  const res = await fetch(`/api/recommendations?${params.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recommendations');
  }
  return res.json() as Promise<ProductListing[]>;
}
