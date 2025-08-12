import { useForm } from 'react-hook-form';
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
import { ControllerRenderProps } from 'react-hook-form';
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

// Form validation schema
const checkoutSchema = z.object({
  name: z.string().min(2, 'Full Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
});

interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

function CheckoutInner() {
  const items = useSelector((s: RootState) => s.cart.items);
  const router = useRouter();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const breadcrumbs = getBreadcrumbsForPath('/checkout');

  useEffect(() => {
    fireEvent('checkout_start', {
      item_count: items.length,
      total: items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    });
  }, []);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: user?.name || user?.displayName || '',
      email: user?.email || '',
      address: '',
      city: '',
      country: ''
    }
  });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax estimate
  const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
  const total = subtotal + tax + shipping;

  const handleCheckout = async (data: CheckoutFormData) => {
    if (!items.length) {
      toast({
        title: 'Cart is empty',
        description: 'Please add items to your cart before checkout.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      logDev('Starting checkout with data:', { ...data, items: items.length });
      
      const response = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1,
          })),
          customerData: data,
        }),
      });

      const responseData = await response.json();
      logDev('Checkout session created:', responseData);

      if (!response.ok) {
        throw new Error(responseData.error || `HTTP ${response.status}: Failed to create checkout session`);
      }

      if (!responseData.url) {
        throw new Error('No checkout URL received from server');
      }

      window.location.href = responseData.url;
    } catch (err: any) {
      logDevError('Checkout error:', err);
      fireEvent('checkout_error', { message: err.message });
      
      toast({
        title: 'Checkout failed',
        description: err.message || 'Failed to process checkout. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show empty cart message if no items
  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
        <Breadcrumb className="mb-4 text-sm text-muted-foreground" >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild aria-current="page">
                <span>Checkout</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-6">Add some items to your cart to continue with checkout.</p>
        <Button onClick={() => router.push('/marketplace')}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
      <Breadcrumb className="mb-4 text-sm text-muted-foreground">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild aria-current="page">
              <span>Checkout</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="font-semibold mb-3">Order Summary</h2>
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center py-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCheckout)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: any }) => (
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
            render={({ field }: { field: any }) => (
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
            render={({ field }: { field: any }) => (
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
            render={({ field }: { field: any }) => (
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
            render={({ field }: { field: any }) => (
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

export default function Checkout() {
  return <CheckoutInner />;
}
