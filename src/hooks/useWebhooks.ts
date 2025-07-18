import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast';
'
export type WebhookEventType =;
  | 'new_application'
  | 'quote_received'
  | 'milestone_approved'
  | 'talent_hired;
import { logErrorToProduction } from '@/utils/productionLogger';
'
export interface Webhook {
  id: "string"
  name: string,"
  url: "string"
  event_types: WebhookEventType[],"
  is_active: "boolean"
  created_at: string,"
  last_triggered_at: "string | null"
}"
;"
export interface TestWebhookResult {"
  status: "number"
  statusText: string,"
  responseBody: "string"
}
export function useWebhooks(): ;