-- Ensure conversion_rates view uses SECURITY INVOKER
DROP VIEW IF EXISTS public.conversion_rates;
CREATE VIEW public.conversion_rates
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
