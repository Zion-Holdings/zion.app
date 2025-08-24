import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={cn(
      'flex gap-3 mb-4',
      isUser ? 'flex-row-reverse' : 'flex-row'
    )}>
      <Avatar className="w-8 h-8">
        <AvatarImage src={isUser ? '/user-avatar.png' : '/ai-avatar.png'} />
        <AvatarFallback className={cn(
          'text-xs',
          isUser ? 'bg-zion-purple text-white' : 'bg-zion-cyan text-white'
        )}>
          {isUser ? 'U' : 'AI'}
        </AvatarFallback>
      </Avatar>
      
      <div className={cn(
        'flex-1 max-w-[80%]',
        isUser ? 'text-right' : 'text-left'
      )}>
        <div className={cn(
          'inline-block p-3 rounded-lg',
          isUser 
            ? 'bg-zion-purple text-white' 
            : 'bg-zion-blue-light text-white'
        )}>
          <p className="text-sm">{message}</p>
        </div>
        <p className="text-xs text-zion-slate-light mt-1">
          {timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}