import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '@/context/CartContext';

test('add, remove and clear items', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CartProvider>{children}</CartProvider>
  );

  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.addItem({ id: '1', quantity: 1 });
  });

  expect(result.current.items).toHaveLength(1);

  act(() => {
    result.current.addItem({ id: '1', quantity: 2 });
  });
  expect(result.current.items[0].quantity).toBe(3);

  act(() => {
    result.current.removeItem('1');
  });
  expect(result.current.items).toHaveLength(0);

  act(() => {
    result.current.addItem({ id: '2', quantity: 1 });
    result.current.clear();
  });
  expect(result.current.items).toHaveLength(0);
});
