import { jsx as _jsx } from "react/jsx-runtime";
import Cart from '@/pages/Cart';
import { CartProvider } from '@/context/CartContext';
export default function CartPage() {
    return (_jsx(CartProvider, { children: _jsx(Cart, {}) }));
}
