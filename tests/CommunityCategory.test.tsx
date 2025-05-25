import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ForumCategoryPage from '@/pages/ForumCategoryPage';
import * as forumService from '@/services/forumPostService';
import { vi } from 'vitest';

it('loads posts for category', async () => {
  vi.spyOn(forumService, 'fetchPostsByCategory').mockResolvedValue([
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
    <MemoryRouter initialEntries={['/community/category/getting-hired']}>
      <Routes>
        <Route path='/community/category/:categoryId' element={<ForumCategoryPage />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/getting hired/i)).toBeInTheDocument();
});

it('shows message when no posts', async () => {
  vi.spyOn(forumService, 'fetchPostsByCategory').mockResolvedValue([]);
  render(
    <MemoryRouter initialEntries={['/community/category/project-help']}>
      <Routes>
        <Route path='/community/category/:categoryId' element={<ForumCategoryPage />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/no posts yet/i)).toBeInTheDocument();
});
