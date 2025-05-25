import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory } from '@/services/forumPostService';
import type { ForumPost } from '@/types/community';

export function usePostsByCategory(slug?: string) {
  return useQuery<ForumPost[]>({
    queryKey: ['posts', 'category', slug],
    queryFn: () => (slug ? fetchPostsByCategory(slug) : Promise.resolve([])),
    enabled: !!slug,
    suspense: true,
    initialData: [],
  });
}
