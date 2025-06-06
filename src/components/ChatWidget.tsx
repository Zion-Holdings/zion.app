import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from '@/hooks/useAuth';
import { MessageBubble } from '@/components/messaging/MessageBubble';
import { Button } from '@/components/ui/button';
import type { Message } from '@/types/messaging';

interface ChatWidgetProps {
  /** Room identifier, typically order or service id */
  roomId: string;
  /** Recipient user id */
  recipientId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWidget({ roomId, recipientId, isOpen, onClose }: ChatWidgetProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const socketRef = useRef<any>();

  useEffect(() => {
    if (!isOpen) return;

    async function setup() {
      socketRef.current = io({ path: '/api/socket', transports: ['websocket'] });
      socketRef.current.emit('join-room', roomId);
      socketRef.current.on('receive-message', (msg: Message) => {
        setMessages(prev => [...prev, msg]);
        triggerNotification('New message', msg.content);
      });
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [isOpen, roomId]);

  const triggerNotification = (title: string, body: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        reg?.showNotification(title, { body });
      });
    }
  };

  const handleSend = () => {
    if (!socketRef.current || !text.trim() || !user || typeof user === 'boolean') return; // Ensure user is not boolean false
    const msg: Message = {
      id: Date.now().toString(),
      sender_id: String(user.id), // user is now guaranteed to be UserDetails
      recipient_id: recipientId,
      content: text,
      created_at: new Date().toISOString(),
      read: false
    };
    socketRef.current.emit('send-message', { roomId, message: msg });
    setMessages(prev => [...prev, msg]);
    setText('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-zion-blue-dark rounded-lg shadow-xl border border-zion-purple/20 flex flex-col animate-slide-up">
      <div className="p-2 bg-zion-blue flex justify-between items-center">
        <span className="text-white font-medium">Chat</span>
        <Button size="icon" variant="ghost" onClick={onClose} aria-label="Close chat widget">
          ✕
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map(m => (
          <MessageBubble key={m.id} message={m} isUserMessage={!!user && typeof user !== 'boolean' && m.sender_id === String(user.id)} />
        ))}
      </div>
      <div className="p-2 border-t border-zion-purple/20">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={2}
          className="w-full p-2 text-black dark:text-white rounded mb-2 bg-zion-blue-light dark:bg-zion-blue-dark"
        />
        <Button className="w-full" onClick={handleSend} disabled={!text.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
}
