import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import type { RootState, AppDispatch } from '@/store';
import {
  removeItem as removeItemAction,
  updateQuantity as updateQuantityAction,
} from '@/store/cartSlice';
import { CartItem as CartItemComponent } from '@/components/cart/CartItem';
import GuestCheckoutModal from '@/components/cart/GuestCheckoutModal';
// CartItemType is already imported via RootState from cartSlice which uses CartItem from @/types/cart
// import { CartItem as CartItemType } from '@/types/cart';
// safeStorage is no longer needed here for reading
// import { safeStorage } from '@/utils/safeStorage';
import { getStripe } from '@/utils/getStripe';
import { useTranslation } from 'react-i18next';

export default function CartPage() {
  const { t } = useTranslation();
  // items directly from Redux store is the source of truth
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  // Removed useEffect that was syncing reduxItems to a local 'items' state
  // and attempting to load from localStorage.
  // The 'items' constant above now directly uses the Redux state.

  const updateQuantity = (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const handleCheckout = async (details?: { email?: string; address?: string }) => {
    setLoading(true);
    try {
      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe.js failed to load');

      // Ensure 'items' passed to backend are from Redux state
      const { data } = await axios.post('/api/checkout-session', {
        cartItems: items,
        customer_email: details?.email || user?.email,
        shipping_address: details?.address,
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

  const startCheckout = () => {
    if (!user) {
      setGuestOpen(true);
    } else {
      handleCheckout();
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <img
          src="/images/empty-cart.svg"
          alt={t('cart.empty_alt')}
          className="mx-auto mb-4 w-48 h-36"
          loading="lazy"
        />
        <p>{t('cart.empty')}</p>
        <Button asChild className="mt-4">
          <Link href="/marketplace">{t('cart.continue_shopping')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">{t('cart.title')}</h1>
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
        <span>{t('cart.subtotal')}</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <Button className="mt-4 w-full" onClick={startCheckout} disabled={loading}>
        {loading ? t('cart.processing') : t('cart.checkout')}
      </Button>
      <GuestCheckoutModal
        open={guestOpen}
        onOpenChange={setGuestOpen}
        onSubmit={(d) => handleCheckout(d)}
      />
    </div>
  );
}
