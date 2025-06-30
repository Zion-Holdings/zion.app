import { loadStripe, Stripe } from '@stripe/stripe-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

export const PROD_DOMAIN = 'app.ziontechgroup.com';

export function isProdDomain(host?: string) {

  const context =
    typeof window === 'undefined'
      ? process.env.CONTEXT // Netlify build context or other server-side context
      : process.env.NEXT_PUBLIC_NETLIFY_CONTEXT; // Client-side Netlify context

  // If context is available and explicitly not 'production', it's not prod.
  if (context && context !== 'production') {
    return false;
  }

  // If context is 'production', it IS prod.
  if (context === 'production') {
    return true;
  }

  // Fallback to hostname check if context is not definitive
  let currentHost: string | undefined;
  if (typeof window !== 'undefined') {
    currentHost = host || window.location.hostname;
  } else {
    // For server-side, try to infer from VERCEL_URL, URL, or host header if passed
    currentHost = host || process.env.VERCEL_URL || process.env.URL;
    if (currentHost) {
      try {
        // VERCEL_URL and Netlify's URL might be just the hostname, or include https://
        // Ensure we are comparing hostnames.
        if (currentHost.startsWith('http')) {
          currentHost = new URL(currentHost).hostname;
        }
      } catch {
        // If URL parsing fails, it's likely not a valid domain string to compare with PROD_DOMAIN
        return false;
      }
    }
  }

  if (!currentHost) return false; // Cannot determine host

  return currentHost === PROD_DOMAIN;
}

let stripePromise: Promise<Stripe | null>;

export function getStripe() {
  if (!stripePromise) {
    const testPublishableKey =
      process.env.NEXT_PUBLIC_STRIPE_TEST_KEY as string | undefined ||
      process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY as string | undefined ||
      process.env.NEXT_PUBLIC_STRIPE_PK as string | undefined; // Older fallback

    const livePublishableKey =
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string | undefined ||
      process.env.NEXT_PUBLIC_STRIPE_PK as string | undefined; // Older fallback

    const forceTestMode = process.env.NEXT_PUBLIC_STRIPE_TEST_MODE === 'true';

    let selectedKey: string | undefined;

    if (forceTestMode) {
      if (testPublishableKey) {
        selectedKey = testPublishableKey;
        logInfo('Stripe: Forced test mode. Using test publishable key.');
      } else {
        logErrorToProduction('Stripe: Forced test mode is active, but no test publishable key (NEXT_PUBLIC_STRIPE_TEST_KEY or NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY) is set. Stripe will not load.');
      }
    } else if (isProdDomain()) {
      if (livePublishableKey) {
        selectedKey = livePublishableKey;
        logInfo('Stripe: Production domain. Using live publishable key.');
      } else {
        logErrorToProduction('Stripe: Production domain detected, but NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Stripe will not load.');
      }
    } else { // Non-production domain and not forced test mode (implicitly test)
      if (testPublishableKey) {
        selectedKey = testPublishableKey;
        logInfo('Stripe: Non-production domain. Using test publishable key.');
      } else {
        logWarn('Stripe: Non-production domain, but no test publishable key (NEXT_PUBLIC_STRIPE_TEST_KEY or NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY) is set. Stripe may not load.');
      }
    }

    if (!selectedKey) {
      logErrorToProduction('Stripe: Publishable key could not be determined. Stripe will not be loaded.');
      stripePromise = Promise.resolve(null);
    } else {
      stripePromise = loadStripe(selectedKey, { advancedFraudSignals: false } as any);
    }
  }
  return stripePromise;
}
