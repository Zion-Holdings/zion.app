import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from '@/pages/CategoryPage';
import { vi } from 'vitest';

// Simplify page dependencies
jest.mock('@/components/header/Header', () => ({ Header: () => <div /> }));
jest.mock('@/components/Footer', () => ({ Footer: () => <div /> }));

it('category "services" renders list length >0', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      category: { name: 'Services', slug: 'services', description: 'desc' },
      items: [
        { id: '1', title: 'Sample Service', description: 'd', category: 'Services', createdAt: '2020-01-01' },
      ],
    }),
  }) as any;

  render(
    <MemoryRouter initialEntries={['/category/services']}>
      <Routes>
        <Route path='/category/:slug' element={<CategoryPage />} />
      </Routes>
    </MemoryRouter>
  );

  const listing = await screen.findByText(/sample service/i);
  expect(listing).toBeInTheDocument();
});
