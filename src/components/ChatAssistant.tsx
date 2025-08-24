import React, { useState } from 'react';

interface ChatAssistantProps {
  isOpen?: boolean;
  onClose?: () => void;
  recipient?: {
    id: string;
    name: string;
    avatarUrl: string;
    role: string;
  };
  onSendMessage?: (message: string) => Promise<void>;
}

export function ChatAssistant({ 
  isOpen: externalIsOpen, 
  onClose, 
  recipient,
  onSendMessage 
}: ChatAssistantProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'assistant'; content: string }>>([]);

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalIsOpen !== undefined ? (onClose || (() => {})) : setInternalIsOpen;

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { type: 'user' as const, content: message };
    setChatHistory(prev => [...prev, userMessage]);
    const currentMessage = message;
    setMessage('');

    if (onSendMessage) {
      try {
        await onSendMessage(currentMessage);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage = { 
          type: 'assistant' as const, 
          content: 'Thank you for your message. Our team will get back to you soon!' 
        };
        setChatHistory(prev => [...prev, assistantMessage]);
      }, 1000);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-zion-cyan text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Chat Assistant</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto h-64">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`mb-3 ${
              chat.type === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                chat.type === 'user'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {chat.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-cyan"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-zion-cyan text-white rounded-md hover:bg-zion-cyan-light transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}