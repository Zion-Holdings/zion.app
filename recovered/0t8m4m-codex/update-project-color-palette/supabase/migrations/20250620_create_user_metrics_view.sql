-- Create user_metrics view with security invoker
CREATE OR REPLACE VIEW public.user_metrics
WITH (security_invoker=true) AS
SELECT
  u.id AS user_id,
  0::INTEGER AS job_applications,
  0::INTEGER AS profile_views,
  0::INTEGER AS quote_invites,
  NULL::NUMERIC AS success_rate
FROM auth.users u;
