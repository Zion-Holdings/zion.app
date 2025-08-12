import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';

async function logEventToSupabase(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (!isSupabaseConfigured) return;

  try {
    await supabase.from('analytics_events').insert([
      {
        event_type: eventName,
        path: typeof window !== 'undefined' ? window.location.pathname : '',
        metadata: eventParams,
      },
    ]);
  } catch (error) {
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
    logInfo('Do Not Track is enabled. GA4 initialization skipped.', { context: 'GoogleAnalyticsInit' });
    return;
  }

  if (window.gtag) {
    window.gtag('config', measurementId);
  }
};
export const fireEvent = async (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (!window.gtag) {
    logErrorToProduction('gtag is not defined. Make sure GA4 is initialized.', new Error('gtag not defined'), { eventName, context: 'GoogleAnalyticsEvent' });
  } else {
    window.gtag('event', eventName, eventParams);
  }

  await logEventToSupabase(eventName, eventParams);
};
