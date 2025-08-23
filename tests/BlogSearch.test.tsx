import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '@/pages/Blog';

it('filters posts when typing in search', async () => {
  render(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );
  const initial = await screen.findAllByText('Read More →');
  const input = screen.getByPlaceholderText('Search articles...');
  fireEvent.change(input, { target: { value: 'AI' } });
  const filtered = screen.getAllByText('Read More →');
  expect(filtered.length).toBeLessThan(initial.length);
});
