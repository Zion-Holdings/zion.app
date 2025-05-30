import { loadStripe, Stripe } from '@stripe/stripe-js';

export const PROD_DOMAIN = 'app.ziontechgroup.com';

export function isProdDomain(host?: string) {
  if (typeof window === 'undefined') {
    const url = host || process.env.URL;
    if (!url) return false;
    try {
      return new URL(url).hostname === PROD_DOMAIN;
    } catch {
      return false;
    }
  }
  return (host || window.location.hostname) === PROD_DOMAIN;
}

let stripePromise: Promise<Stripe | null>;

export function getStripe() {
  if (!stripePromise) {
    const testKey = import.meta.env.NEXT_PUBLIC_STRIPE_TEST_KEY as string;
    let key = testKey;

    const prodKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;
    if (prodKey && isProdDomain()) {
      key = prodKey;
    } else if (prodKey && !isProdDomain()) {
      // warn if someone tried to inject a live key outside prod
      console.warn('Ignoring production Stripe key on non-production domain');
    }

    stripePromise = loadStripe(key);
  }
  return stripePromise;
}
