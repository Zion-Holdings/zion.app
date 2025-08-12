import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductActions } from '@/components/ProductActions';

function setup() {
  const addToCart = vi.fn().mockResolvedValue(undefined);
  render(<ProductActions productId="1" addToCart={addToCart} />);
  const button = screen.getByRole('button', { name: /add to cart/i });
  return { addToCart, button };
}

describe('ProductActions', () => {
  it('resets label after mutation success', async () => {
    vi.useFakeTimers();
    const { addToCart, button } = setup();

    fireEvent.click(button);

    await waitFor(() => expect(addToCart).toHaveBeenCalled());
    expect(button).toHaveTextContent('Added!');

    vi.advanceTimersByTime(1500);
    expect(button).toHaveTextContent('Add to Cart');
    vi.useRealTimers();
  });
});
