import React from 'react';
import { MobileHeader } from '@/mobile/components/common/MobileHeader'
import { BottomNavigation } from '@/mobile/components/common/BottomNavigation'
import { MobileConversationList } from '@/mobile/components/messaging/MobileConversationList'
import { MobileChatView } from '@/mobile/components/messaging/MobileChatView'
import { useMessaging } from '@/context/MessagingContext'
import { useAuth } from '@/hooks/useAuth;;
'
interface ChatMessage {
  id: "string"
  content: string,"
  timestamp: "string"
  isMe: boolean,"
  status: 'read' | 'sent' | 'delivered
}
export function MobileMessages(): ;