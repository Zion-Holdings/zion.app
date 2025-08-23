
import { supabase } from '@/integrations/supabase/client';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

export async function ensureAnalyticsTablesExist() {

  try {
    // Check if analytics_events table exists
    const { error } = await supabase
      .from('analytics_events')
      .select('id')
      .limit(1);
      
    if (error && error.code === 'PGRST204') {
      logInfo('Creating analytics tables...');
      await createAnalyticsTables();
    }
  } catch (error) {
    logWarn('Error checking if analytics tables exist:', { data: error });
    // No need to create tables here, as this could be a connection error
  }
}

async function createAnalyticsTables() {
  try {
    // Create analytics_events table
    await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS public.analytics_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          event_type TEXT NOT NULL,
          path TEXT,
          user_id UUID REFERENCES auth.users(id),
          metadata JSONB,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          session_id TEXT
        );

        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at);
        
        -- View for daily page views
        CREATE OR REPLACE VIEW public.daily_page_views
        WITH (security_invoker = true) AS
        SELECT 
          DATE_TRUNC('day', created_at) AS date,
          path,
          COUNT(*) AS view_count
        FROM public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path
        ORDER BY date DESC, view_count DESC;
        
        -- View for conversion rates
        CREATE OR REPLACE VIEW public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS conversion_count,
            metadata->>'conversionType' AS conversion_type
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        ),
        page_views AS (
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS view_count
          FROM public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )
        SELECT 
          c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC;
      `
    });
    
    logInfo('Analytics tables created successfully');
  } catch (error) {
    logErrorToProduction('Error creating analytics tables:', { data: error });
    // Tables creation failed, but we can still continue
  }
}
