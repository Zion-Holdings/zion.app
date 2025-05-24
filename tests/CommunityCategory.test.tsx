import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ForumCategoryPage from '@/pages/ForumCategoryPage';

it('loads posts for category', async () => {
  render(
    <MemoryRouter initialEntries={['/community/category/getting-hired']}>
      <Routes>
        <Route path='/community/category/:categoryId' element={<ForumCategoryPage />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/getting hired/i)).toBeInTheDocument();
});
