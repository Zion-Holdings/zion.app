import { loadStripe, Stripe } from '@stripe/stripe-js';

export const PROD_DOMAIN = 'app.ziontechgroup.com';

export function isProdDomain(host?: string) {
  const context =
    typeof window === 'undefined'
      ? process.env.CONTEXT
      : import.meta.env.VITE_NETLIFY_CONTEXT;

  if (context && context !== 'production') {
    return false;
  }

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
    const testPublishableKey =
      import.meta.env.VITE_STRIPE_TEST_KEY as string | undefined ||
      import.meta.env.VITE_STRIPE_TEST_PUBLISHABLE_KEY as string | undefined;
    const livePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;
    const context = import.meta.env.VITE_NETLIFY_CONTEXT;

    let selectedKey: string | undefined;

    const preview = context && context !== 'production';

    if (isProdDomain() && !preview) {
      if (livePublishableKey) {
        selectedKey = livePublishableKey;
      } else {
        console.error('Production domain detected, but VITE_STRIPE_PUBLISHABLE_KEY is not set.');
      }
    } else if (testPublishableKey) {
      selectedKey = testPublishableKey;
    } else {
      console.warn('Non-production domain, but VITE_STRIPE_TEST_PUBLISHABLE_KEY is not set. Stripe may not load.');
    }

    if (!selectedKey) {
      console.error('Stripe publishable key could not be determined. Stripe will not be loaded.');
      // Return a promise that resolves to null, or handle error appropriately
      stripePromise = Promise.resolve(null);
    } else {
      // `advancedFraudSignals` can trigger attempts to access localStorage.
      // This causes "Access to storage is not allowed" errors when the app runs
      // in third-party contexts like iframes or browsers with strict privacy settings.
      // Disabling it avoids those errors while still allowing basic Stripe usage.
      stripePromise = loadStripe(selectedKey, { advancedFraudSignals: false });
    }
  }
  return stripePromise;
}
