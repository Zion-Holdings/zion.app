
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { UserProfile, UserDetails } from '@/types/auth';
import type { Message, Conversation } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';

// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null;

export function useMessagingRealtime(
  user: UserWithProfile,
  activeConversation: Conversation | null,
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  fetchConversations: () => Promise<void>
) {
  if (!supabase) throw new Error('Supabase client not initialized');
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
        (payload: unknown) => {
          // Type guard for payload shape
          if (
            typeof payload === 'object' && payload !== null &&
            'new' in payload &&
            typeof (payload as { new: unknown }).new === 'object' &&
            (payload as { new: unknown }).new !== null
          ) {
            const newMessage = (payload as { new: unknown }).new;
            // Type guard for newMessage shape
            if (
              typeof newMessage === 'object' && newMessage !== null &&
              'sender_id' in newMessage &&
              'content' in newMessage &&
              'sender_name' in newMessage
            ) {
              if (
                activeConversation &&
                (newMessage as any).sender_id === activeConversation.other_user.id
              ) {
                setActiveMessages(prev => [...prev, newMessage as Message]);
              }
              fetchConversations();
              toast({
                title: `New message from ${(newMessage as any).sender_name || 'Someone'}`,
                description: (newMessage as any).content.substring(0, 50) + ((newMessage as any).content.length > 50 ? '...' : '')
              });
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [user, activeConversation, fetchConversations, setActiveMessages]);
}
