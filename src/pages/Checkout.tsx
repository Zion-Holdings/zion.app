import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { safeStorage, safeSessionStorage } from '@/utils/safeStorage';
import { Button } from '@/components/ui/button';
import { getStripe, isProdDomain } from '@/utils/getStripe';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { fireEvent } from '@/lib/analytics';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState<CartItem[]>([]);
  const form = useForm<CheckoutForm>({ defaultValues: { name: '', email: '', address: '', city: '', country: '' } });
  const { user } = useAuth();
  const [guestMode, setGuestMode] = useState(false);
  const testMode = !isProdDomain();

  useEffect(() => {
    const sku = searchParams.get('sku');
    if (sku) {
      setItems([{ id: sku, name: sku, price: 25, quantity: 1 }]);
      return;
    }

    const stored = safeStorage.getItem('cart');
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
  }, [searchParams]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const onSubmit = async (data: CheckoutForm) => {
    try {
      if (!user || !user.id) {
        const res = await fetch('/api/orders/guest', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.email, items }),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.error || 'Failed to create order');
        safeSessionStorage.setItem('guest_token', result.token);
        navigate('/cart');
        return;
      }

      // Use a placeholder productId (Stripe Price ID)
      // This should ideally come from your product/cart data
      const placeholderProductId = "price_1Hh1Zv2eZvKYlo2Cl0T9s7hF"; // Replace with an actual test Price ID

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: placeholderProductId, // This is the Stripe Price ID
          userId: user.id,
          // Include other necessary details like customer email for prefill if desired
          // email: data.email,
        }),
      });

      const sessionData = await response.json();

      if (!response.ok) {
        throw new Error(sessionData.error || 'Failed to create checkout session');
      }

      if (sessionData.sessionId) {
        const stripe = await getStripe();
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId: sessionData.sessionId });
          fireEvent('purchase', {
            currency: 'USD', // Replace with actual currency
            value: subtotal, // Replace with actual value
            items: items.map(item => ({
              item_id: item.id,
              item_name: item.name,
              price: item.price,
              quantity: item.quantity
            }))
          });
          if (error) {
            console.error('Stripe redirect error:', error);
            // TODO: Handle UI: show error message to user
          }
          // No need to manually add points or clear cart here,
          // Stripe webhooks should handle post-payment actions.
        } else {
          console.error('Stripe.js not loaded');
          // TODO: Handle UI: show error message to user
        }
      } else {
        console.error('No sessionId received');
        // TODO: Handle UI: show error message to user
      }
    } catch (err) {
      console.error('Checkout failed:', err);
      // TODO: Handle UI: show error message to user, e.g., using a toast notification
    }
  };

  if (!user && !guestMode) {
    return (
      <div className="container max-w-md py-10">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <Button className="w-full mb-4" onClick={() => navigate(`/login?next=/checkout`)}>
          Login / Sign Up
        </Button>
        <Button variant="outline" className="w-full" onClick={() => setGuestMode(true)}>
          Continue as Guest
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      {testMode && (
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="warning">Test Mode</Badge>
          <span className="text-sm">Use test card <code className="font-mono">4242 4242 4242 4242</code></span>
        </div>
      )}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Checkout</h1>
        {user && <PointsBadge />}
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {user && (
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            )}
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            {user && (
              <>
                <FormField name="address" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="city" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="country" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </>
            )}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Button className="w-full" type="submit">
                Pay with Stripe{testMode ? ' (test)' : ''}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
