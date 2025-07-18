import { loadStripe } from '@stripe/stripe-js'
import type { Stripe, StripeConstructorOptions } from '@stripe/stripe-js'
import {;
  logInfo,;
  logWarn,'
  logErrorToProduction,;
} from '@/utils/productionLogger;
export const PROD_DOMAIN = 'app.ziontechgroup.com;
export function isProdDomain(): unknown {): unknown {): unknown {): unknown {): unknown {host?: string) {'
  const context: unknown =;
    typeof window === 'undefined;
      ? process.env.CONTEXT // Netlify build context or other server-side context;
      : process.env.NEXT_PUBLIC_NETLIFY_CONTEXT; // Client-side Netlify context'
;
  // If context is available and explicitly not 'production', it's not prod.;
  if (context && context !== 'production') {;
    return false;
  }'
;
  // If context is 'production', it IS prod.;
  if (context === 'production') {;
    return true'
  };
  // Fallback to hostname check if context is not definitive'
  let currentHost: string | undefined;
  if (typeof window !== 'undefined') {;
    currentHost = host || window.location.hostname;
  } else {'
    // For server-side, try to infer from VERCEL_URL, URL, or host header if passed;
    currentHost = host || process.env.VERCEL_URL || process.env.URL;
    if (currentHost) {'
      try {;
        // VERCEL_URL and Netlify's URL might be just the hostname, or include https://'
        // Ensure we are comparing hostnames.;
        if (currentHost.startsWith('http')) {;
          currentHost = new URL(currentHost).hostname;
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}'
      } catch {;
        // If URL parsing fails, it's likely not a valid domain string to compare with PROD_DOMAIN;