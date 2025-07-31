'use client';

import React from 'react';
import { useChatAssistant } from '../hooks/useChatAssistant';

interface ChatTriggerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'button' | 'link' | 'icon';
  message?: string;
}

const ChatTrigger: React.FC<ChatTriggerProps> = ({ 
  children, 
  className = '', 
  variant = 'button',
  message 
}) => {
  const { triggerChat } = useChatAssistant();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerChat(message);
  };

  const baseClasses = {
    button: 'inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors',
    link: 'text-blue-600 hover:text-blue-800 underline cursor-pointer',
    icon: 'text-blue-600 hover:text-blue-800 cursor-pointer p-2 rounded-full hover:bg-blue-50 transition-colors'
  };

  const classes = `${baseClasses[variant]} ${className}`;

  return (
    <div onClick={handleClick} className={classes}>
      {children}
    </div>
  );
};

export default ChatTrigger; 