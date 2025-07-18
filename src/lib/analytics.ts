import { logErrorToProduction } from '@/utils/productionLogger';
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';

async function logEventToSupabase(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (!isSupabaseConfigured) return;
  if (!supabase) throw new Error('Supabase client not initialized');

  try {
    await supabase.from('analytics_events').insert([
      {
        event_type: eventName,
        path: typeof window !== 'undefined' ? window.location.pathname : '',
        metadata: eventParams,
      },
    ]);
  } catch {
    logErrorToProduction('Error logging analytics event to Supabase', error as Error, { eventName, eventParams, context: 'SupabaseAnalytics' });
  }
}

export const initGA = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId) {
    logErrorToProduction('NEXT_PUBLIC_GA_ID is not defined. GA4 initialization skipped.', new Error('Missing GA ID'), { context: 'GoogleAnalyticsInit' });
    return;
  }

  const doNotTrack = navigator.doNotTrack;
  if (doNotTrack === '1' || doNotTrack === 'yes') {
    logErrorToProduction('Do Not Track is enabled. GA4 initialization skipped.', new Error('Do Not Track enabled'), { context: 'GoogleAnalyticsInit' });
    return;
  }

  if (window.gtag) {
    (window.gtag as (...args: unknown[]) => void)('config', measurementId, {});
  }
};
export const fireEvent = async (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (!window.gtag) {
    logErrorToProduction('gtag is not defined. Make sure GA4 is initialized.', new Error('gtag not defined'), { eventName, context: 'GoogleAnalyticsEvent' });
  } else {
    (window.gtag as (...args: unknown[]) => void)('event', eventName, eventParams);
  }

  await logEventToSupabase(eventName, eventParams);
};

// Replace 'any' with a more specific type for event data
export function trackEvent(event: string, data: Record<string, unknown>) {
  if (typeof window !== 'undefined' && ((window as unknown) as Record<string, unknown>).gtag) {
    (((window as unknown) as Record<string, unknown>).gtag as (...args: unknown[]) => void)('event', event, data);
  }
}

// Replace 'any' with a more specific type for pageview data
export function trackPageview(url: string, data: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && ((window as unknown) as Record<string, unknown>).gtag) {
    (((window as unknown) as Record<string, unknown>).gtag as (...args: unknown[]) => void)('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
      ...data,
    });
  }
}

export function trackConversion(conversionId: string, data: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && ((window as unknown) as Record<string, unknown>).gtag) {
    (((window as unknown) as Record<string, unknown>).gtag as (...args: unknown[]) => void)('event', 'conversion', {
      send_to: conversionId,
      ...data,
    });
  }
}

export function trackCustomEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && ((window as unknown) as Record<string, unknown>).gtag) {
    (((window as unknown) as Record<string, unknown>).gtag as (...args: unknown[]) => void)('event', eventName, parameters);
  }
}
