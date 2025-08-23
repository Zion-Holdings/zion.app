import { useForm, type ControllerRenderProps } from 'react-hook-form';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { fireEvent } from '@/lib/analytics';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { logDev, logDevError } from '@/utils/developmentLogger';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        if (parsed.length > 0) {
          setItems(parsed);
          return;
        }
      } catch {
        // ignore parsing errors
      }
    }
    if (productParam) {
      setItems([
        { id: productParam, name: 'Test Item', price: 25, quantity: 1 },
      ]);
    } else {
      // Provide mock data if cart empty
      setItems([
        {
          id: 'prod_mock',
          name: 'Test Item',
          price: 25,
          quantity: 1,
        },
      ]);
    }
  }, [location.search]);

  const handleCheckout = async () => {
    const product = items[0];
    try {
      const response = await fetch('/api/stripe/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      });
      const { sessionId } = await response.json();
      const stripe = await getStripe();
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId });
      }

      if (!responseData.url) {
        throw new Error('No checkout URL received from server');
      }

      window.location.href = responseData.url;
    } catch (err) {
      logDevError('Checkout error:', err);
      let message = 'Failed to process checkout. Please try again.';
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
        message = (err as { message: string }).message;
      }
      fireEvent('checkout_error', { message });
      toast({
        title: 'Checkout failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-zion-blue p-6">
      <div className="max-w-xl mx-auto bg-zion-blue-dark rounded-lg p-6 text-white space-y-6">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full" onClick={handleCheckout}>Buy Now</Button>
        <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>Back</Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCheckout)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: ControllerRenderProps<CheckoutFormData, 'name'> }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your full name" autoComplete="name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<CheckoutFormData, 'email'> }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter your email" autoComplete="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }: { field: ControllerRenderProps<CheckoutFormData, 'address'> }) => (
              <FormItem>
                <FormLabel>Address *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your address" autoComplete="street-address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="city"
            render={({ field }: { field: ControllerRenderProps<CheckoutFormData, 'city'> }) => (
              <FormItem>
                <FormLabel>City *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your city" autoComplete="address-level2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="country"
            render={({ field }: { field: ControllerRenderProps<CheckoutFormData, 'country'> }) => (
              <FormItem>
                <FormLabel>Country *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your country" autoComplete="country-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full mt-6"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Processing...
              </>
            ) : (
              `Continue to Payment ($${total.toFixed(2)})`
            )}
          </Button>
        </form>
      </Form>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        You will be redirected to a secure payment page to complete your purchase.
      </p>
    </div>
  );
}
