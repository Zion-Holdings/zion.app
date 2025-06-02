import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory } from '@/services/forumPostService';
import type { ForumPost } from '@/types/community';

export function usePostsByCategory(categoryId?: string, cursor?: string) {
  return useQuery({
    queryKey: ['posts', 'category', categoryId, cursor],
    queryFn: () =>
      categoryId
        ? fetchPostsByCategory(categoryId, cursor)
        : Promise.resolve({ posts: [] as ForumPost[] }),
    enabled: !!categoryId,
    suspense: true,
    initialData: { posts: [] as ForumPost[] },
    select: data => data.posts,
  }) as {
    data: ForumPost[] | undefined;
    isPending: boolean;
    error: unknown;
  };
}
