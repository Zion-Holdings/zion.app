
import React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Conversation } from '@/types/messaging';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

export function ConversationItem({ conversation, isActive, onClick }: ConversationItemProps) {
  return (
    <div 
      className={cn(
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors",
        isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover:bg-zion-blue-dark/30",
        conversation.unread_count > 0 && "bg-zion-blue-dark/20"
      )}
      onClick={onClick}
    >
      <Avatar className="h-12 w-12 border border-zion-purple/20">
        <AvatarImage src={conversation.other_user.avatar_url} alt={conversation.other_user.name} />
        <AvatarFallback className="bg-zion-blue-dark text-white">
          {conversation.other_user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="font-medium text-white truncate">{conversation.other_user.name}</div>
          <div className="text-xs text-zion-slate whitespace-nowrap">
            {format(new Date(conversation.updated_at), 'MMM d')}
          </div>
        </div>
        
        <div className="text-sm text-zion-slate truncate">
          {conversation.last_message?.content || '(No messages yet)'}
        </div>
        
        {conversation.context_data?.title && (
          <div className="text-xs mt-1 text-zion-cyan truncate">
            Re: {conversation.context_data.title}
          </div>
        )}
      </div>
      
      {conversation.unread_count > 0 && (
        <div className="bg-zion-purple text-white rounded-full h-5 min-w-5 flex items-center justify-center text-xs">
          {conversation.unread_count}
        </div>
      )}
    </div>
  );
}
