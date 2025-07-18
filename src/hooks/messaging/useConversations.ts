
import type { UserDetails } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';
import type { Conversation, ConversationContextData } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';


/**
 * Hook to handle conversation operations
 */
export function useConversations(
  user: UserDetails | null,
  setConversations: (conversations: Conversation[]) => void,
  setUnreadCount: (count: number) => void,
  setIsLoading: (loading: boolean) => void
) {
  /**
   * Fetch conversations for the current user
   */
  const fetchConversations = async () => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      // Fetch conversations from the database
      const { data, error } = await supabase!.from('conversations').select('*').eq('user_one_id', user.id).or(`user_two_id.eq.${user.id}`);
        
      if (error) throw error;
      
      // Format conversations. Use an empty array if `data` is null to prevent
      // "map is not a function" runtime errors
      const formattedConversations: Conversation[] = (data ?? []).map((conv: Record<string, unknown>) => {
        const isUserOne = conv.user_one_id === user.id;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
        
        return {
          id: conv.id as string,
          user_id: otherUserId as string,
          other_user: {
            id: otherUserId as string,
            name: (isUserOne ? conv.user_two_name : conv.user_one_name) as string,
            avatar_url: (isUserOne ? conv.user_two_avatar : conv.user_one_avatar) as string,
            user_type: (isUserOne ? conv.user_two_type : conv.user_one_type) as string
          },
          name: (isUserOne ? conv.user_two_name : conv.user_one_name) as string,
          avatar_url: (isUserOne ? conv.user_two_avatar : conv.user_one_avatar) as string,
          last_message: conv.last_message ? {
            content: conv.last_message as string,
            created_at: conv.last_message_time as string
          } : { content: '', created_at: '' },
          updated_at: (conv.updated_at || conv.created_at) as string,
          unread_count: (conv.unread_count || 0) as number,
          context_type: (conv.context_type as Conversation["context_type"]) ?? "general",
          context_id: conv.context_id as string,
          context_data: conv.context_data as ConversationContextData
        };
      });
      
      setConversations(formattedConversations);
      
      // Calculate total unread count
      const totalUnread = formattedConversations.reduce(
        (total, conv) => total + (conv.unread_count || 0), 
        0
      );
      setUnreadCount(totalUnread);
    } catch (_error) {
      logErrorToProduction('Error fetching conversations:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Create a new conversation and send initial message
   */
  const createConversation = async (
    recipientId: string, 
    initialMessage: string,
    contextType: 'job' | 'talent' | 'general' = 'general',
    contextId?: string,
    contextData?: ConversationContextData
  ) => {
    if (!user || !initialMessage.trim()) return;
    
    try {
      // Check if conversation already exists
      const { data: existingConversations, error: fetchError } = await supabase!
        .from('conversations')
        .select('*')
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`)
        .eq('user_one_id', user.id)
        .eq('user_two_id', recipientId);
        
      if (fetchError) throw fetchError;
      
      let conversationId;
      
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation
        conversationId = existingConversations[0]?.id;
        
        // Update context if provided
        if (contextType || contextId || contextData) {
          await supabase!
            .from('conversations')
            .update({
              context_type: contextType,
              context_id: contextId,
              context_data: contextData,
              updated_at: new Date().toISOString()
            })
            .eq('id', conversationId);
        }
      } else {
        // Get recipient information
        const { data: recipientData, error: recipientError } = await supabase!
          .from('users')
          .select('*')
          .eq('id', recipientId)
          .single();
        if (recipientError) throw recipientError;
        // Create a new conversation
        const { data: newConversation, error: createError } = await supabase!
          .from('conversations')
          .insert({
            user_one_id: user.id,
            user_two_id: recipientId,
            user_one_name: user.name,
            user_two_name: recipientData.name,
            user_one_avatar: user.avatarUrl,
            user_two_avatar: recipientData.avatar_url,
            context_type: contextType,
            context_id: contextId,
            context_data: contextData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .select()
          .single();
        if (createError) throw createError;
        conversationId = newConversation.id;
      }
      
      // Send the initial message
      await supabase!
        .from('messages')
        .insert({
          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false
        });
      
      // Update conversations list
      await fetchConversations();
      
      // Return the conversation ID
      return conversationId;
    } catch (_error) {
      logErrorToProduction('Error creating conversation:', { data: error });
      toast({
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  return {
    fetchConversations,
    createConversation,
  };
}



