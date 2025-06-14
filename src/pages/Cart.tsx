import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import type { RootState, AppDispatch } from '@/store';
import {
  removeItem as removeItemAction,
  updateQuantity as updateQuantityAction,
  setItems as setItemsAction,
} from '@/store/cartSlice';
import { CartItem as CartItemComponent } from '@/components/cart/CartItem';
import { CartItem as CartItemType } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';

export default function CartPage() {
  const router = useRouter();
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();

  useEffect(() => {
    const load = async () => {
      if (user) {
        try {
          const res = await fetch('/api/cart');
          if (res.ok) {
            const data = await res.json();
            dispatch(setItemsAction(data.items || []));
            return;
          }
        } catch (err) {
          console.error('Failed to fetch cart', err);
        }
      }
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        try {
          dispatch(setItemsAction(JSON.parse(stored) as CartItemType[]));
        } catch {
          dispatch(setItemsAction([]));
        }
      } else {
        dispatch(setItemsAction([]));
      }
    };
    load();
  }, [user, dispatch]);

  const updateQuantity = async (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
    if (user) {
      try {
        await fetch('/api/cart', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, quantity: qty }),
        });
      } catch (err) {
        console.error('Failed to update cart', err);
      }
    }
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <img src="/placeholder.svg" alt="Empty cart" className="mx-auto mb-4" />
        <p>Your cart is empty</p>
        <Button asChild className="mt-4">
          <Link href="/marketplace">Browse Marketplace</Link>
        </Button>
      </div>
    );
  }

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="container max-w-4xl py-10 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <ul className="space-y-4">
          {items.map(item => (
            <CartItemComponent
              key={item.id}
              item={item}
              onRemove={removeItem}
              onUpdateQuantity={updateQuantity}
            />
          ))}
        </ul>
      </div>
      <aside className="bg-card/70 border p-4 rounded space-y-2">
        <h2 className="font-semibold">Order Summary</h2>
        <div className="flex justify-between">
          <span>Items</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="mt-4 w-full" onClick={handleCheckout} disabled={items.length === 0}>
          Checkout
        </Button>
      </aside>
    </div>
  );
}
