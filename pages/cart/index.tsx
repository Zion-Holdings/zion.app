import Cart from '@/pages/Cart';
import { CartProvider } from '@/context/CartContext';

export default function CartPage() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}
