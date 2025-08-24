import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatMessage({ role, message, timestamp }) {
  const isUser = role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2 max-w-xs lg:max-w-md`}>
        <Avatar className="h-8 w-8 flex-shrink-0">
          <AvatarImage 
            src={isUser ? 'https://placehold.co/32x32?text=U' : 'https://placehold.co/32x32?text=AI'} 
            alt={isUser ? 'User' : 'AI Assistant'} 
          />
          <AvatarFallback className="bg-zion-purple/20 text-white text-xs">
            {isUser ? 'U' : 'AI'}
          </AvatarFallback>
        </Avatar>
        
        <div className={`rounded-lg px-3 py-2 ${
          isUser 
            ? 'bg-zion-purple text-white' 
            : 'bg-zion-blue-dark text-zion-slate-light border border-zion-blue-light'
        }`}>
          <p className="text-sm">{message}</p>
          {timestamp && (
            <p className={`text-xs mt-1 ${
              isUser ? 'text-zion-cyan' : 'text-zion-slate'
            }`}>
              {new Date(timestamp).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}