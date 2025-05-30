import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CategoryDetail from '@/pages/CategoryDetail';

// Simplify page dependencies
jest.mock('@/components/header/Header', () => ({ Header: () => <div /> }));
jest.mock('@/components/Footer', () => ({ Footer: () => <div /> }));

it('category "services" renders list length >0', async () => {
  render(
    <MemoryRouter initialEntries={['/category/services']}>
      <Routes>
        <Route path='/category/:slug' element={<CategoryDetail />} />
      </Routes>
    </MemoryRouter>
  );

  // Expect at least one listing from services category
  const listing = await screen.findByText(/Custom Machine Learning Model Development/i);
  expect(listing).toBeInTheDocument();
});
