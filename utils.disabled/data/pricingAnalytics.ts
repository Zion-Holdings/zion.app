import { supabase } from '@/utils/supabase/client';

export type PricingAnalyticsEvent = {
  kind: 'client_suggestion' | 'talent_suggestion' | 'applied_suggestion';
  payload: Record<string, unknown>;
};

export async function logPricingAnalytics(event: PricingAnalyticsEvent): Promise<void> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return;
    await supabase.from('pricing_events').insert({ kind: event.kind, payload: event.payload });
  } catch {
    // silent fail
  }
}