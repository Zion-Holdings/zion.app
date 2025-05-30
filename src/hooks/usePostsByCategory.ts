import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory } from '@/services/forumPostService';
import type { ForumPost } from '@/types/community';

export function usePostsByCategory(slug?: string, page = 1) {
  return useQuery({
    queryKey: ['posts', 'category', slug, page],
    queryFn: () =>
      slug ? fetchPostsByCategory(slug, page) : Promise.resolve([] as ForumPost[]),
    enabled: !!slug,
    suspense: true,
    initialData: [] as ForumPost[],
  }) as {
    data: ForumPost[] | undefined;
    isPending: boolean;
    error: unknown;
  };
}
