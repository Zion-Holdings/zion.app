import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-zion-cyan flex items-center justify-center flex-shrink-0">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div
        className={`px-4 py-3 rounded-2xl max-w-xs md:max-w-md lg:max-w-lg ${
          isUser
            ? 'bg-zion-cyan text-white rounded-br-md'
            : 'bg-zion-blue-dark/50 text-white rounded-bl-md'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p className={`text-xs mt-2 ${isUser ? 'text-white/70' : 'text-zion-slate-light'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-zion-purple flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;