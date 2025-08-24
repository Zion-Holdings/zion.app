import React, { useEffect, useState } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import type { RootState, AppDispatch } from '@/store';
import { ShoppingCart, User, CreditCard, ArrowRight, Package, Shield } from 'lucide-react';
import {
  removeItem as removeItemAction,
  updateQuantity as updateQuantityAction
} from "@/store/cartSlice";
import {logErrorToProduction} from '@/utils/productionLogger';
import GuestCheckoutModal from '@/components/cart/GuestCheckoutModal';
// CartItemType is already imported via RootState from cartSlice which uses CartItem from @/types/cart
// import { CartItem as CartItemType } from '@/types/cart';
// safeStorage is no longer needed here for reading
// import { safeStorage } from '@/utils/safeStorage';
import { getStripe } from '@/utils/getStripe';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const { t: _t } = useTranslation();
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const { toggle: toggleWishlist, isWishlisted } = useWishlist();

  const updateQuantity = (id: string, qty: number) => {
    setItems(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, quantity: qty } : i);
      safeStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const handleCheckout = async (details?: { email?: string; address?: string }) => {
    setLoading(true);
    try {
      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe.js failed to load');

      const { data } = await axios.post('/api/checkout-session', {
        cartItems: items,
        customer_email: details?.email || user?.email,
        shipping_address: details?.address,
      });

      const sessionId = data.sessionId as string | undefined;
      if (!sessionId) throw new Error('Session ID missing in response');

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) logErrorToProduction('Stripe redirect error:', { data: error.message });
    } catch (err) {
      logErrorToProduction('Checkout error:', { data: err });
      let message = 'Checkout failed';
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
        message = (err as { message: string }).message;
      }
      alert(message);
    } finally {
      setLoading(false);
    }
  }; 

  const startCheckout = () => {
    if (!isAuthenticated) {
      setGuestOpen(true);
    } else {
      handleCheckout();
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const displaySubtotal = (subtotal * currency.fx_rate).toFixed(2);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {currency.symbol}
                {(item.price * currency.fx_rate).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))}
                className="w-16 bg-transparent border border-input rounded p-1 text-center"
              />
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6 font-semibold">
        <span>Subtotal</span>
        <span>{currency.symbol}{displaySubtotal}</span>
      </div>
      <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
      </Button>
    </div>
  );
}
