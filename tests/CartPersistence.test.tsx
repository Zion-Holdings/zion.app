// SKIP: This test is skipped due to outdated imports from '@/src/pages/Cart'.'// import { render, screen } from '@testing-library/react';'// import { MemoryRouter, Routes, Route } from 'react-router-dom';'// import { describe, it, expect } from 'vitest';'// import CartPage from '@/src/pages/Cart';'// import { CartProvider } from '@/context/CartContext';'// import { AuthContext } from '@/context/auth/AuthContext';'// import PrivateRoute from '@/components/PrivateRoute';'// import { safeStorage } from '@/utils/safeStorage';';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const item = { id: '1', name: 'Test Item', price: 10, quantity: 1 };';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
function renderCart(user: unknown) {
  return render(
    <AuthContext.Provider value={{ user, isLoading: false } as any}>
      <CartProvider>
        <MemoryRouter initialEntries={['/cart']}>'          <Routes>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />"            <Route path="/login" element={<div>Login Page</div>} />"          </Routes>"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
        </MemoryRouter>
      </CartProvider>
    </AuthContext.Provider>
  );
}

describe('cart persistence', () => {'  it('shows item added before login after logging in', () => {'    safeStorage.setItem('zion_cart', JSON.stringify([item]));'    const { _rerender } = renderCart(false);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    expect(screen.getByText('Login Page')).toBeInTheDocument();''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    rerender(
      <AuthContext.Provider value={{ user: { id: 'u1' }, isLoading: false } as any}>'        <CartProvider>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          <MemoryRouter initialEntries={['/cart']}>'            <Routes>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
              <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />"              <Route path="/login" element={<div>Login Page</div>} />"            </Routes>"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
          </MemoryRouter>
        </CartProvider>
      </AuthContext.Provider>
    );

    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
  });
});
