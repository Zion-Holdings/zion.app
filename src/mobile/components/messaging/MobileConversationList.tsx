
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from 'lucide-react';

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isTyping?: boolean;
}

interface MobileConversationListProps {
  conversations: Conversation[];
  activeConversation?: string;
  onSelectConversation: (id: string) => void;
}

export function MobileConversationList({
  conversations,
  activeConversation,
  onSelectConversation
}: MobileConversationListProps) {
  return (
    <div className="space-y-4">
      <div className="px-4 mb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-9"
          />
        </div>
      </div>
      
      <div className="px-4 pb-4 space-y-2">
        <div className="flex space-x-2">
          <Badge variant="secondary" className="rounded-full px-3">All</Badge>
          <Badge variant="outline" className="rounded-full px-3">Unread</Badge>
          <Badge variant="outline" className="rounded-full px-3">Interviews</Badge>
          <Badge variant="outline" className="rounded-full px-3">Projects</Badge>
        </div>
      </div>
      
      <div className="space-y-2 pb-24">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              "px-4",
              activeConversation === conversation.id && "bg-primary/5"
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="flex items-center gap-3 py-3 cursor-pointer">
              <Avatar>
                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {conversation.timestamp}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.isTyping 
                      ? <em>Typing...</em> 
                      : conversation.lastMessage}
                  </p>
                  
                  {conversation.unreadCount > 0 && (
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="border-t border-border ml-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
