import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import CartPage from '@/pages/Cart';
import { CartProvider } from '@/context/CartContext';
import { AuthContext } from '@/context/auth/AuthContext';
import { safeStorage } from '@/utils/safeStorage';

const item = { id: '1', name: 'Test Item', price: 10, quantity: 1 };

function renderCart(user: any) {
  return render(
    <AuthContext.Provider value={{ user, isLoading: false } as any}>
      <CartProvider>
        <MemoryRouter initialEntries={['/cart']}>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    </AuthContext.Provider>
  );
}

describe('cart persistence', () => {
  it('shows item added before login after logging in', () => {
    safeStorage.setItem('guestCart', JSON.stringify([item]));
    const { rerender } = renderCart(null);
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();

    rerender(
      <AuthContext.Provider value={{ user: { id: 'u1' }, isLoading: false } as any}>
        <CartProvider>
          <MemoryRouter initialEntries={['/cart']}>
            <Routes>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<div>Login Page</div>} />
            </Routes>
          </MemoryRouter>
        </CartProvider>
      </AuthContext.Provider>
    );

    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
  });
});
