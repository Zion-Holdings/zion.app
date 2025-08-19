
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { MessagingContextType } from '@/types/messaging';
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging';

// Create the context with undefined as initial value
const MessagingContext = createContext<MessagingContextType | undefined>(undefined);

// Hook for using the messaging context
export function useMessaging() {
  const context = useContext(MessagingContext);
  if (context === undefined) {
    throw new Error('useMessaging must be used within a MessagingProvider');
  }
  return context;
}

// Provider component
export function MessagingProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  
  const {
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
    sendMessage,
    createConversation,
    markAsRead,
    fetchConversations,
    loadMessages
  } = useMessagingOperations(user);

  // Setup real-time subscription
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations);

  // Calculate unread count from conversations
  useEffect(() => {
    if (conversations.length > 0) {
      const count = conversations.reduce((acc, conversation) => acc + conversation.unread_count, 0);
      setUnreadCount(count);
    }
  }, [conversations, setUnreadCount]);

  // Fetch conversations when user changes
  useEffect(() => {
    if (user) {
      fetchConversations();
    } else {
      setConversations([]);
      setUnreadCount(0);
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]);

  // Create context value with all the methods and states
  const contextValue: MessagingContextType = {
    messages,
    activeMessages,
    conversations,
    unreadCount,
    activeConversation,
    isLoading,
    sendMessage,
    createConversation,
    markAsRead,
    setActiveConversation,
    fetchConversations,
    loadMessages
  };

  return (
    <MessagingContext.Provider value={contextValue}>
      {children}
    </MessagingContext.Provider>
  );
}
