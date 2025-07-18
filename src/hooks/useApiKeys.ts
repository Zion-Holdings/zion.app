import { useState } from 'react''
import { useAuth } from '@/hooks/useAuth'
import { logErrorToProduction } from '@/utils/productionLogger'
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast;
'
export type ApiKeyScope ='
  | 'jobs:read'
  | 'jobs:write'
  | 'talent:read'
  | 'quotes:write'
  | 'webhooks:manage'
'
export interface ApiKey {
  id: string,"
  name: string
  key?: string
  user_id: string,
  created_at: string
  expires_at?: string"
  scopes: ApiKeyScope[]"
  last_used_at?: string
  revoked: boolean"
  key_prefix?: string"
  is_active: boolean
}"
"
export interface ApiLog {
  id: string"
  endpoint: string,"
  method: string
  status_code: number,
  created_at: string
  ip_address?: string
  response_time_ms?: number
}
export function useApiKeys(): "