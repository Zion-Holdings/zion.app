
import { UserDetails } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';
import { Conversation, ConversationContextData } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';


// Allow either UserProfile or UserDetails
type UserWithProfile = UserDetails | null;

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
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`);
        
      if (error) throw error;
      
      // Format conversations
      const formattedConversations: Conversation[] = data.map((conv: any) => {
        const isUserOne = conv.user_one_id === user.id;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
        
        return {
          id: conv.id,
          user_id: otherUserId,
          other_user: {
            id: otherUserId,
            name: isUserOne ? conv.user_two_name : conv.user_one_name,
            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type
          },
          name: isUserOne ? conv.user_two_name : conv.user_one_name,
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
          last_message: conv.last_message ? {
            content: conv.last_message,
            created_at: conv.last_message_time
          } : undefined,
          updated_at: conv.updated_at || conv.created_at,
          unread_count: conv.unread_count || 0,
          context_type: conv.context_type,
          context_id: conv.context_id,
          context_data: conv.context_data
        };
      });
      
      setConversations(formattedConversations);
      
      // Calculate total unread count
      const totalUnread = formattedConversations.reduce(
        (total, conv) => total + (conv.unread_count || 0), 
        0
      );
      setUnreadCount(totalUnread);
    } catch (error) {
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
      const { data: existingConversations, error: fetchError } = await supabase
        .from('conversations')
        .select('id')
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`);
        
      if (fetchError) throw fetchError;
      
      let conversationId;
      
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation
        conversationId = existingConversations[0]?.id;
        
        // Update context if provided
        if (contextType || contextId || contextData) {
          await supabase
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
        const { data: recipientData, error: recipientError } = await supabase
          .from('profiles')
          .select('display_name, avatar_url, user_type')
          .eq('id', recipientId)
          .single();
          
        if (recipientError) throw recipientError;
        
        // Create a new conversation
        const { data: newConversation, error: createError } = await supabase
          .from('conversations')
          .insert({
            user_one_id: user.id,
            user_one_name: user.name || user.email,
            user_one_avatar: user.avatarUrl,
            user_one_type: user.userType,
            user_two_id: recipientId,
            user_two_name: recipientData?.display_name || 'User',
            user_two_avatar: recipientData?.avatar_url,
            user_two_type: recipientData?.user_type,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            last_message: initialMessage,
            last_message_time: new Date().toISOString(),
            context_type: contextType,
            context_id: contextId,
            context_data: contextData
          })
          .select('id')
          .single();
          
        if (createError) throw createError;
        
        conversationId = newConversation.id;
      }
      
      // Send the initial message
      await supabase
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
    } catch (error) {
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
