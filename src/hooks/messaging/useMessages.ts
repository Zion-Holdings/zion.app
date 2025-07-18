import type { UserDetails } from '@/types/auth'
import { supabase } from '@/integrations/supabase/client'
import type { Message, Conversation } from '@/types/messaging'
import { toast } from '@/hooks/use-toast'
import { logErrorToProduction } from '@/utils/productionLogger';
'
/**'
 * Hook to handle message operations;
 */'
export function useMessages(): unknown {): unknown {): unknown {): unknown {): unknown {'
  user: "UserDetails | null
  activeConversation: Conversation | null"
  activeMessages: "Message[]
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void"
  conversations: "Conversation[]
  setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void"
  setUnreadCount: "(updater: (prev: number) => number) => void
  setIsLoading: (loading: boolean) => void"
  fetchConversations: () => Promise<void>,"