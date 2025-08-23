import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/utils/getStripe';
import CardForm from '@/components/checkout/CardForm';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const items = useSelector((s: RootState) => s.cart.items);
  const [intent, setIntent] = useState<any | null>(null);
  // Removed isLoading and error states related to single product fetching for now
  // As per plan, prioritize cart checkout. Single product logic will be reviewed in step 3.

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const taxRate = 0.08; // Consistent with CartDrawer
  const tax = subtotal * taxRate;

  // Consistent with CartDrawer: Only add shipping for physical items
  const hasPhysicalItems = items.some(item =>
    !item.type || item.type === 'physical' // Default to physical if type not specified
  );
  // Consistent with CartDrawer: shipping is $15 if subtotal is $100 or less, and there are physical items
  const shipping = hasPhysicalItems && subtotal > 0 && subtotal <= 100 ? 15 : 0;
  const total = subtotal + tax + shipping;

  // Handle empty cart scenario (Step 2 of the plan, but good to integrate here)
  if (items.length === 0 && !intent) {
    return (
      <div className="container max-w-2xl py-10 space-y-6 text-center">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-xl">Your cart is empty.</p>
        <Link href="/marketplace" className="text-primary hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Order Summary</h1>
      {intent ? (
        <div className="space-y-2 text-center">
          <p className="text-2xl font-semibold">Payment Successful!</p>
          <p>Thank you for your order.</p>
          <p className="text-sm text-muted-foreground">Confirmation ID: {intent.id}</p>
          <p className="text-sm text-muted-foreground">Total Paid: ${intent.amount ? (intent.amount / 100).toFixed(2) : total.toFixed(2)}</p>
          <Link href="/marketplace" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-3 border p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Items</h2>
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name} (x{item.quantity})</p>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="border p-4 rounded-md space-y-1">
            <h2 className="text-xl font-semibold mb-2">Totals</h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax ({ (taxRate * 100).toFixed(0) }%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 && subtotal > 0 ? 'Free' : (subtotal === 0 ? '$0.00' : `$${shipping.toFixed(2)}`)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Elements stripe={getStripe()}>
            <CardForm amount={total} onSuccess={setIntent} />
          </Elements>
          <p className="text-xs text-zion-slate-light text-center">
            Use test card 4242-4242-4242-4242 with any future date and CVC.
          </p>
        </>
      )}
    </div>
  );
}
