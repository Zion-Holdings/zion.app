import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export function getStripe() {
  if (!stripePromise) {
    const key =
      process.env.NODE_ENV === 'production'
        ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string)
        : (import.meta.env.NEXT_PUBLIC_STRIPE_TEST_KEY as string);
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}
