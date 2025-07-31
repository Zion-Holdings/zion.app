import { useChat } from '../contexts/ChatContext';

export const useChatAssistant = () => {
  const { isChatOpen, toggleChat, openChat, closeChat } = useChat();

  const triggerChat = (message?: string) => {
    if (!isChatOpen) {
      openChat();
    }
    
    // If a specific message is provided, we could potentially
    // pre-populate the chat input (future enhancement)
    if (message) {
      // This could be enhanced to send a specific message
      console.log('Chat triggered with message:', message);
    }
  };

  return {
    isChatOpen,
    toggleChat,
    openChat,
    closeChat,
    triggerChat,
  };
}; 