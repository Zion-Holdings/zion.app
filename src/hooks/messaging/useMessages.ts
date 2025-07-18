
import type { UserDetails } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';
import type { Message, Conversation } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger';


/**
 * Hook to handle message operations
 */
export function useMessages(
  user: UserDetails | null,
  activeConversation: Conversation | null,
  activeMessages: Message[],
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  conversations: Conversation[],
  setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void,
  setUnreadCount: (updater: (prev: number) => number) => void,
  setIsLoading: (loading: boolean) => void,
  fetchConversations: () => Promise<void>
) {
  /**
   * Fetch messages for a conversation
   */
  const loadMessages = async (_conversationId: string) => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });
        
      if (error) throw error;
      
      // Use updater function for setActiveMessages
      setActiveMessages(() => data as Message[]);
      
      // Mark messages as read
      const unreadMessages = data.filter(
        (msg: Record<string, unknown>) => !msg.read && msg.recipient_id === user.id
      );
      
      if (unreadMessages.length > 0) {
        await markAsRead(conversationId);
      }
    } catch {
      logErrorToProduction('Error fetching messages:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Send a message to an existing conversation
   */
  const sendMessage = async (conversationId: string, _content: string) => {
    if (!user || !content.trim() || !conversationId) return;
    
    try {
      const conversation = conversations.find(c => c.id === conversationId);
      if (!conversation) {
        throw new Error('Conversation not found');
      }

      if (!supabase) throw new Error('Supabase client not initialized');
      // Send the message
      const { data, error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: conversation.user_id,
          content,
          created_at: new Date().toISOString(),
          read: false
        })
        .select('*')
        .single();
        
      if (error) throw error;
      
      // Update active messages if this conversation is selected
      if (activeConversation && activeConversation.id === conversationId) {
        setActiveMessages((_prev) => [...activeMessages, data as Message]);
      }
      
      // Update conversations list
      await fetchConversations();
      
      // Return the sent message
      return data;
    } catch {
      logErrorToProduction('Error sending message:', { data: error });
      toast({
        title: "Failed to send message",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  /**
   * Mark messages as read
   */
  const markAsRead = async (_conversationId: string) => {
    if (!user || !conversationId) return;
    
    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { _error } = await supabase
        .from('messages')
        .update({ read: true })
        .eq('conversation_id', conversationId)
        .eq('recipient_id', user.id)
        .eq('read', false);
        
      if (error) throw error;
      
      // Update active messages to show they've been read
      setActiveMessages(_prev => 
        _prev.map(msg => 
          msg.recipient_id === user.id ? { ...msg, read: true } : msg
        )
      );
      
      // Update conversations to reflect read messages
      setConversations(_prev => 
        _prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, unread_count: 0 }
            : conv
        )
      );
      
      // Recalculate unread count
      setUnreadCount(_prev => {
        const updatedConversations = conversations.map(conv => 
          conv.id === conversationId 
            ? { ...conv, unread_count: 0 }
            : conv
        );
        
        return updatedConversations.reduce(
          (total, conv) => total + (conv.unread_count || 0), 
          0
        );
      });
    } catch {
      logErrorToProduction('Error marking messages as read:', { data: error });
    }
  };

  return {
    loadMessages,
    sendMessage,
    markAsRead
  };
}
