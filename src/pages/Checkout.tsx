import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { safeStorage } from '@/utils/safeStorage';
import { Button } from '@/components/ui/button';
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
  const { t } = useTranslation();
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
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">{t('checkout.title')}</h1>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>{t('checkout.name')}</FormLabel>
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
                <FormLabel>{t('checkout.email')}</FormLabel>
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
                <FormLabel>{t('checkout.address')}</FormLabel>
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
                <FormLabel>{t('checkout.city')}</FormLabel>
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
                <FormLabel>{t('checkout.country')}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your country" autoComplete="country-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>{t('checkout.subtotal')}</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Button className="w-full" type="submit">
                {t('checkout.pay')}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
