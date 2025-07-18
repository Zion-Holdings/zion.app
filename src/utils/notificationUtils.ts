import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger';
'
type NotificationType =;
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system'
  | 'project_update'
  | 'milestone_complete'
  | 'order_status;