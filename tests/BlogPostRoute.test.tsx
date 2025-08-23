import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPost from '@/pages/BlogPost';

it('renders blog article from slug', async () => {
  render(
    <MemoryRouter initialEntries={['/blog/ai-trends-2025']}>
      <Routes>
        <Route path='/blog/:slug' element={<BlogPost />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByRole('heading')).toBeInTheDocument();
});
