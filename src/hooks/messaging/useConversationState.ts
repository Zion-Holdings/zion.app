import { useState } from 'react
import type { Conversation, Message } from '@/types/messaging;
;
/**;
 * Hook to manage messaging state;
 */;
export function useConversationState(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeMessages, setActiveMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeConversation, setActiveConversation] =;
    useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
;
  return {;
    // State;
    messages,;
    setMessages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;'
    setIsLoading,;
  };
};
;
};'
}
}'
}'