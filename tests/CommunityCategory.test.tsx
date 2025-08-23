import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ForumCategoryPage from '@/pages/ForumCategoryPage';
import * as forumService from '@/services/forumPostService';

it('loads posts for category', async () => {
  jest.spyOn(forumService, 'fetchPostsByCategory').mockResolvedValue([
    {
      id: '1',
      title: 'Sample post',
      content: 'Content',
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
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/community/category/getting-hired']}>
        <Routes>
          <Route path='/community/category/:categoryId' element={<ForumCategoryPage />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect(await screen.findByText(/getting hired/i)).toBeInTheDocument();
});

it('shows message when no posts', async () => {
  jest.spyOn(forumService, 'fetchPostsByCategory').mockResolvedValue([]);
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/community/category/project-help']}>
        <Routes>
          <Route path='/community/category/:categoryId' element={<ForumCategoryPage />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect(await screen.findByText(/no posts yet/i)).toBeInTheDocument();
});
