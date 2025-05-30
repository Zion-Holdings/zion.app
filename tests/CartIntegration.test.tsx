import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EquipmentDetail from '@/pages/EquipmentDetail';
import CartPage from '@/pages/Cart';
import { CartProvider } from '@/context';
import * as router from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ isAuthenticated: true, user: { id: '1' } })
}));

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof router>();
  return {
    ...actual,
    useParams: () => ({ id: 'pro-camera-x1000' }),
  };
});

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </CartProvider>
  );
}

describe('cart integration', () => {
  it('shows item in cart after adding', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      status: 200,
      json: async () => [
        { id: 'pro-camera-x1000', name: 'Pro Camera X1000', price: 6999, quantity: 1 }
      ],
    });

    const { rerender } = render(<EquipmentDetail />, { wrapper: Wrapper });

    fireEvent.click(screen.getByText(/add to cart/i));

    await vi.waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    rerender(<CartPage />);

    expect(await screen.findByText(/pro camera x1000/i)).toBeInTheDocument();
  });
});
