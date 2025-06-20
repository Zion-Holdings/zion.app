import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Skeleton from '@/components/ui/skeleton';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import type { RootState, AppDispatch } from '@/store';
import {
  removeItem as removeItemAction,
  updateQuantity as updateQuantityAction,
} from '@/store/cartSlice';
import { CartItem as CartItemComponent } from '@/components/cart/CartItem';
import { CartItem as CartItemType } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';
import { getStripe } from '@/utils/getStripe';

export default function CartPage() {
  const reduxItems = useSelector((s: RootState) => s.cart.items);
  const [items, setItems] = useState<CartItemType[]>(reduxItems);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(true);
  const [showEmpty, setShowEmpty] = useState(false);

  useEffect(() => {
    if (reduxItems.length > 0) {
      setItems(reduxItems);
      setCartLoading(false);
    } else {
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        try {
          setItems(JSON.parse(stored) as CartItemType[]);
        } catch {
          setItems([]);
        }
      } else {
        setItems([]);
      }
    }
    setCartLoading(false);
  }, [reduxItems]);

  useEffect(() => {
    if (!cartLoading && items.length === 0) {
      setShowEmpty(true);
    }
  }, [cartLoading, items]);

  const updateQuantity = (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe.js failed to load');

      const { data } = await axios.post('/api/checkout-session', {
        cartItems: items,
        customer_email: user?.email,
      });

      const sessionId = data.sessionId as string | undefined;
      if (!sessionId) throw new Error('Session ID missing in response');

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) console.error('Stripe redirect error:', error.message);
    } catch (err: any) {
      console.error('Checkout error:', err);
      alert(err.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cartLoading) {
    return (
      <div className="container py-10 space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (showEmpty) {
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

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
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
      <div className="flex justify-between mt-6 font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <Button className="mt-4 w-full" onClick={handleCheckout} disabled={loading}>
        {loading ? 'Processing...' : 'Checkout'}
      </Button>
    </div>
  );
}
