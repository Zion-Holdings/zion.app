import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory } from '@/services/forumPostService';
import type { ForumPost } from '@/types/community';

export function usePostsByCategory(slug?: string, page = 1) {
  return useQuery<ForumPost[], unknown>({
    queryKey: ['posts', 'category', slug, page],
    queryFn: () =>
      slug
        ? fetchPostsByCategory(slug, page).then((res) => res.posts)
        : Promise.resolve([] as ForumPost[]),
    enabled: !!slug,
    suspense: true,
    initialData: [] as ForumPost[],
  });
}
