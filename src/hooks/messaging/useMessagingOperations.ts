
import { UserDetails } from '@/types/auth';
import { Message, Conversation, ConversationContextData } from '@/types/messaging';
import { useConversationState } from './useConversationState';
import { useConversations } from './useConversations';
import { useMessages } from './useMessages';

// Allow either UserProfile or UserDetails
type UserWithProfile = UserDetails | null;

/**
 * Hook that combines all messaging operations
 */
export function useMessagingOperations(user: UserDetails | null) {
  // State management
  const {
    messages,
    setMessages,
    activeMessages,
    setActiveMessages,
    conversations,
    setConversations,
    unreadCount,
    setUnreadCount,
    activeConversation,
    setActiveConversation,
    isLoading,
    setIsLoading
  } = useConversationState();

  // Conversations management
  const {
    fetchConversations,
    createConversation
  } = useConversations(
    user,
    setConversations,
    setUnreadCount,
    setIsLoading
  );

  // Messages management
  const {
    loadMessages,
    sendMessage,
    markAsRead
  } = useMessages(
    user,
    activeConversation,
    activeMessages,
    setActiveMessages,
    conversations,
    setConversations,
    setUnreadCount,
    setIsLoading,
    fetchConversations
  );

  return {
    // State
    messages,
    activeMessages,
    setActiveMessages,
    conversations,
    setConversations,
    unreadCount,
    setUnreadCount,
    activeConversation,
    setActiveConversation,
    isLoading,
    
    // Operations
    sendMessage,
    createConversation,
    markAsRead,
    fetchConversations,
    loadMessages
  };
}
