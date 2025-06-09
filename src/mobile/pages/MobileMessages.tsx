
import React from "react";
import { MobileHeader } from "@/mobile/components/common/MobileHeader";
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation";
import { MobileConversationList } from "@/mobile/components/messaging/MobileConversationList";
import { MobileChatView } from "@/mobile/components/messaging/MobileChatView";
import { useMessaging } from "@/context/MessagingContext";
import { useAuth } from "@/hooks/useAuth";

interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  status: "read" | "sent" | "delivered";
}

export function MobileMessages() {
  const { user } = useAuth();
  const {
    conversations,
    activeConversation,
    setActiveConversation,
    activeMessages,
    loadMessages,
    sendMessage
  } = useMessaging();

  const formattedConversations = conversations.map(conv => ({
    id: conv.id,
    name: conv.name,
    avatar: conv.avatar_url,
    lastMessage: conv.last_message?.content || '',
    timestamp: new Date(conv.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    unreadCount: conv.unread_count
  }));

  const formattedMessages: ChatMessage[] = activeMessages.map(msg => ({
    id: msg.id,
    content: msg.content,
    timestamp: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isMe: msg.sender_id === user?.id,
    status: msg.read ? 'read' : 'sent'
  }));

  const handleSelectConversation = async (id: string) => {
    const conversation = conversations.find(c => c.id === id) || null;
    setActiveConversation(conversation);
    await loadMessages(id);
  };

  const handleBack = () => {
    setActiveConversation(null);
  };

  const handleSendMessage = (content: string) => {
    if (activeConversation) {
      sendMessage(activeConversation.id, content);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (
        <MobileChatView
          contact={{
            id: activeConversation.other_user.id,
            name: activeConversation.other_user.name,
            status: 'Online',
            avatar: activeConversation.other_user.avatar_url
          }}
          messages={formattedMessages}
          onBack={handleBack}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <>
          <MobileHeader title="Messages" />

          <main className="flex-1 overflow-y-auto">
            <MobileConversationList
              conversations={formattedConversations}
              onSelectConversation={handleSelectConversation}
            />
          </main>

          <BottomNavigation />
        </>
      )}
    </div>
  );
}
