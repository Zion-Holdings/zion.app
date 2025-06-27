import { logger } from '@/utils/logger';
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
    logger.error('Error logging analytics event to Supabase', error as Error);
  }
}

export const initGA = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId) {
    logger.error('VITE_GA_ID is not defined. GA4 initialization skipped.');
    return;
  }

  const doNotTrack = navigator.doNotTrack;
  if (doNotTrack === '1' || doNotTrack === 'yes') {
    logger.info('Do Not Track is enabled. GA4 initialization skipped.');
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
    logger.error('gtag is not defined. Make sure GA4 is initialized.');
  } else {
    window.gtag('event', eventName, eventParams);
  }

  await logEventToSupabase(eventName, eventParams);
};
