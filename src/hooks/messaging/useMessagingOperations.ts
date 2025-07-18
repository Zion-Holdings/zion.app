import type { UserDetails } from '@/types/auth;'
import { useConversationState } from './useConversationState;'
import { useConversations } from './useConversations;'
import { useMessages } from './useMessages;
;
/**;
 * Hook that combines all messaging operations;
 */;
export function useMessagingOperations(): unknown {): unknown {): unknown {): unknown {): unknown {user: UserDetails | null) {;
  // State management;
  const {;
    messages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;
    setIsLoading,;
  } = useConversationState();
;
  // Conversations management;
  const { fetchConversations, createConversation } = useConversations(;
    user,;
    setConversations,;
    setUnreadCount,;
    setIsLoading,;
  );
;
  // Messages management;
  const { loadMessages, sendMessage, markAsRead } = useMessages(;
    user,;
    activeConversation,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    setUnreadCount,;
    setIsLoading,;
    fetchConversations,;
  );
;
  return {;
    // State;
    messages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;
;
    // Operations;
    sendMessage,;
    createConversation,;
    markAsRead,;
    fetchConversations,;'
    loadMessages,;
  };
};
;
};'
}
}'
}'