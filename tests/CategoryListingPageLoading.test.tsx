import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { CategoryListingPage } from '@/components/CategoryListingPage';

const listings = [
  {
    id: '1',
    title: 'Item 1',
    description: 'desc',
    category: 'test',
    createdAt: '2020-01-01'
  }
];

test('spinner disappears after loading', async () => {
  vi.useFakeTimers();
  const { container } = render(
    <MemoryRouter>
      <CategoryListingPage
        title="t"
        description="d"
        listings={listings}
        categoryFilters={[]}
      />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText(/search listings/i), { target: { value: 'a' } });

  expect(container.querySelector('.animate-spin')).toBeInTheDocument();

  vi.advanceTimersByTime(300);
  await waitFor(() => {
    expect(container.querySelector('.animate-spin')).toBeNull();
  });
  vi.useRealTimers();
});
