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
    const testPublishableKey = import.meta.env.VITE_STRIPE_TEST_PUBLISHABLE_KEY as string | undefined;
    const livePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;

    let selectedKey: string | undefined;

    if (isProdDomain()) {
      if (livePublishableKey) {
        selectedKey = livePublishableKey;
      } else {
        console.error('Production domain detected, but VITE_STRIPE_PUBLISHABLE_KEY is not set.');
        // Potentially fall back to test key if that's desired, or error out.
        // For now, if live key is missing on prod, it will fail at loadStripe.
      }
    } else {
      // Non-production domain
      if (testPublishableKey) {
        selectedKey = testPublishableKey;
      } else {
        console.warn('Non-production domain, but VITE_STRIPE_TEST_PUBLISHABLE_KEY is not set. Stripe may not load.');
        // If you want to allow using live key in dev with a warning (not recommended for publishable keys usually)
        // if (livePublishableKey) {
        //   console.warn('Using VITE_STRIPE_PUBLISHABLE_KEY in non-production environment.');
        //   selectedKey = livePublishableKey;
        // }
      }
    }

    if (!selectedKey) {
      console.error('Stripe publishable key could not be determined. Stripe will not be loaded.');
      // Return a promise that resolves to null, or handle error appropriately
      stripePromise = Promise.resolve(null);
    } else {
      stripePromise = loadStripe(selectedKey);
    }
  }
  return stripePromise;
}
