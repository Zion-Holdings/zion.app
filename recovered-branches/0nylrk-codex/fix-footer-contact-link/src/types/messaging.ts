
// Define the shape of a message
export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  sender_name?: string;
  sender_avatar?: string;
  attachment_url?: string;
  attachment_name?: string;
}

// Define the shape of a conversation
export interface Conversation {
  id: string;
  user_id: string;
  other_user: {
    id: string;
    name: string;
    avatar_url?: string;
    user_type?: string;
  };
  name: string;
  avatar_url?: string;
  last_message?: {
    content: string;
    created_at: string;
  };
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';
  context_id?: string;
  context_data?: ConversationContextData;
}

// Context data for creating a conversation
export interface ConversationContextData {
  title?: string;
  description?: string;
  image_url?: string;
}

// Define the shape of the messaging context
export interface MessagingContextType {
  messages: Message[];
  conversations: Conversation[];
  unreadCount: number;
  activeConversation: Conversation | null;
  activeMessages: Message[];
  isLoading: boolean;
  sendMessage: (conversationId: string, content: string) => Promise<void>;
  createConversation: (
    recipientId: string, 
    initialMessage: string, 
    contextType?: 'job' | 'talent' | 'general',
    contextId?: string,
    contextData?: ConversationContextData
  ) => Promise<void>;
  markAsRead: (conversationId: string) => Promise<void>;
  /**
   * Set the currently active conversation. Passing `null` will clear the
   * selection.
   */
  setActiveConversation: (value: Conversation | null) => void;
  fetchConversations: () => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
}
