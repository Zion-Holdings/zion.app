import type { UserDetails } from '@/types/auth'
import { supabase } from '@/integrations/supabase/client'
import type { Conversation, ConversationContextData } from '@/types/messaging'
import { toast } from '@/hooks/use-toast'
import { logErrorToProduction } from '@/utils/productionLogger;
'
/**'
 * Hook to handle conversation operations;
 */'
export function useConversations(): unknown {): unknown {): unknown {): unknown {): unknown {'
  user: "UserDetails | null
  setConversations: (conversations: Conversation[]) => void"
  setUnreadCount: "(count: number) => void
  setIsLoading: (loading: boolean) => void,