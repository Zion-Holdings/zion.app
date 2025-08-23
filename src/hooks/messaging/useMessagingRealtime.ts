
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UserProfile, UserDetails } from '@/types/auth';
import { Message, Conversation } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';

// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null;

export function useMessagingRealtime(
  user: UserWithProfile,
  activeConversation: Conversation | null,
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  fetchConversations: () => Promise<void>
) {
  // Setup real-time subscription when user is logged in
  useEffect(() => {
    if (!user) return;

    // Subscribe to new messages
    const subscription = supabase
      .channel('messages')
      .on(
        'postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'messages', 
          filter: `recipient_id=eq.${user.id}` 
        }, 
        (payload: any) => {
          // Update messages if the conversation is selected
          if (activeConversation && payload.new.sender_id === activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, payload.new as Message]);
          }
          
          // Update conversations
          fetchConversations();
          
          // Show toast notification for new message
          toast({
            title: `New message from ${payload.new.sender_name || 'Someone'}`,
            description: payload.new.content.substring(0, 50) + (payload.new.content.length > 50 ? '...' : '')
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [user, activeConversation, fetchConversations, setActiveMessages]);
}
