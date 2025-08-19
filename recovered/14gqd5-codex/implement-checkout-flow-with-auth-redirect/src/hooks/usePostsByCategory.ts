import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory } from '@/services/forumPostService';
import type { ForumPost } from '@/types/community';

export function usePostsByCategory(slug?: string) {
  return useQuery({
    queryKey: ['posts', 'category', slug],
    queryFn: () =>
      slug ? fetchPostsByCategory(slug) : Promise.resolve([] as ForumPost[]),
    enabled: !!slug,
    suspense: true,
    initialData: [] as ForumPost[],
  }) as {
    data: ForumPost[] | undefined;
    isPending: boolean;
    error: unknown;
  };
}
