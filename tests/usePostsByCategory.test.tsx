import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePostsByCategory } from '@/hooks/usePostsByCategory';
import * as forumService from '@/services/forumPostService';
import { vi, it, expect } from 'vitest';

it('returns posts for slug', async () => {
  vi.spyOn(forumService, 'fetchPostsByCategory').mockResolvedValue([
    {
      id: '1',
      title: 'Test',
      content: 'c',
      authorId: '1',
      authorName: 'Test',
      categoryId: 'getting-hired',
      tags: [],
      createdAt: '',
      updatedAt: '',
      upvotes: 0,
      downvotes: 0,
      replyCount: 0,
    },
  ]);

  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => usePostsByCategory('getting-hired', 1), { wrapper });

  await waitFor(() => expect(result.current.data?.length).toBeGreaterThan(0));
});
