import React, { useState, useEffect, useRef, ReactNode, useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean;
}

export interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: string;
  };
  conversationId?: string;
  initialMessages?: Message[];
  onSendMessage: (message: string, conversationId?: string) => Promise<void>;
  contextHeader?: ReactNode;
}

export function ChatAssistant({
  isOpen,
  onClose,
  recipient,
  conversationId,
  initialMessages = [],
  onSendMessage,
  contextHeader
}: ChatAssistantProps) {
  const auth = useContext(AuthContext);
  const isGuest = !auth?.isAuthenticated;

  // Always call useLocalStorage at the top level.
  // The key will change based on isGuest and recipient.id, but the hook call itself is unconditional.
  // We'll manage which data to *use* further down.
  const guestStorageKey = `chatHistory-${recipient.id}`;
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<Message[]>(guestStorageKey, []);
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>(initialMessages.length > 0 ? initialMessages : storedGuestMessages);

  // State for logged-in users
  const [loggedInMessages, setLoggedInMessages] = useState<Message[]>(initialMessages);

  let currentMessages: Message[];
  let setCurrentMessages: (value: Message[] | ((val: Message[]) => Message[])) => void;

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{ message: string, conversationId?: string } | null>(null);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guestMessage, setGuestMessage] = useState<string | null>(null);

  useEffect(() => {
    // Effect for guest users to handle initial messages and localStorage synchronization
    if (isGuest) {
      if (initialMessages && initialMessages.length > 0) {
        setDisplayGuestMessages(initialMessages);
        setStoredGuestMessages(initialMessages); // Persist if initialMessages are provided for guest
      } else {
        setDisplayGuestMessages(storedGuestMessages);
      }
    }
  }, [isGuest, initialMessages, storedGuestMessages, setStoredGuestMessages]);

  useEffect(() => {
    // Effect for logged-in users to handle initial messages
    if (!isGuest) {
      setLoggedInMessages(initialMessages);
    }
  }, [isGuest, initialMessages]);


  if (isGuest) {
    currentMessages = displayGuestMessages;
    setCurrentMessages = (valueOrFn) => {
      const newMessages = valueOrFn instanceof Function ? valueOrFn(displayGuestMessages) : valueOrFn;
      setDisplayGuestMessages(newMessages);
      setStoredGuestMessages(newMessages);
    };
  } else {
    currentMessages = loggedInMessages;
    setCurrentMessages = setLoggedInMessages;
  }
  
  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000);

  useEffect(() => {
    if (debouncedApiCallParams) {
      onSendMessage(debouncedApiCallParams.message, debouncedApiCallParams.conversationId);
    }
  }, [debouncedApiCallParams, onSendMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [currentMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    if (!isGuest) { // Logged-in user
      const newMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        message: messageContent,
        timestamp: new Date()
      };
      setCurrentMessages((prev: Message[]) => [...prev, newMessage]);
      setPendingApiCallParams({ message: messageContent, conversationId });
    } else { // Guest user
      setGuestMessage(messageContent);
      setShowGuestModal(true);
    }
  };

  const handleModalSendConfirm = () => {
    if (!guestMessage) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      message: guestMessage,
      timestamp: new Date()
    };
    setCurrentMessages((prev: Message[]) => [...prev, newMessage]);
    setPendingApiCallParams({ message: guestMessage, conversationId });
    
    setShowGuestModal(false);
    setGuestMessage(null);
  };

  const handleModalCancel = () => {
    setShowGuestModal(false);
    setGuestMessage(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-zion-purple/20">
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />
              <AvatarFallback className="bg-zion-purple/20 text-white">
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-white">{recipient.name}</div>
              {recipient.role && (
                <div className="text-xs text-zion-slate">{recipient.role}</div>
              )}
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Context Header (Optional) */}
        {contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
            {contextHeader}
          </div>
        )}
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentMessages.length === 0 ? (
            <div className="text-center text-zion-slate py-8">
              <p>Start a conversation with {recipient.name}</p>
            </div>
          ) : (
            currentMessages.map((msg) => (
              <ChatMessage
                key={msg.id} 
                role={msg.role}
                message={msg.message}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>

      {showGuestModal && guestMessage && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Confirm Message</h3>
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">
              {guestMessage}
            </p>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={handleModalCancel} className="text-white border-zion-purple hover:bg-zion-purple/10">
                Cancel
              </Button>
              <Button onClick={handleModalSendConfirm} className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}