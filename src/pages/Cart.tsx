import React, { useEffect, useState } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);

  if (!user) {
    toast({
      title: 'Authentication required',
      description: 'Please sign in to view your cart.',
    });
    navigate('/login');
    return null;
  }

  useEffect(() => {
    const stored = safeStorage.getItem('cart');
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
  }, []);

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
