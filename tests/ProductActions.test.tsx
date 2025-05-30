import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ProductActions } from '@/components/ProductActions';

vi.mock('react-toastify', () => ({ toast: vi.fn() }));

test('button text restores after addToCart completes', async () => {
  const onAdd = vi.fn();
  render(<ProductActions onAddToCart={onAdd} />);
  const button = screen.getByRole('button', { name: /add to cart/i });

  await userEvent.click(button);
  expect(onAdd).toHaveBeenCalled();
  expect(button).toHaveTextContent(/added!/i);

  await waitFor(() => expect(button).toHaveTextContent(/add to cart/i), {
    timeout: 2000,
  });
});
