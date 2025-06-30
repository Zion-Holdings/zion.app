
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';


import { useMessaging } from '@/context/MessagingContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components/messaging';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger';

export default function MessagingInbox() {

  const { 
    conversations, 
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
    isLoading
  } = useMessaging();
  const isMobile = useIsMobile();
  const router = useRouter(); // Changed from navigate
  const [activeCall, setActiveCall] = useState<string | null>(null);
  
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
      try {
        await fetchConversations();
      } catch (error) {
        logErrorToProduction('Failed to load conversations:', { data: error });
        toast.error("Failed to load messages. Please try again.");
      }
    };
    
    loadData();
  }, [fetchConversations]);
  
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return;
    }
    
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    });
    
    // Navigate to video call page
    router.push(`/call/${roomId}`); // Changed from navigate
  };
  
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>
            
            {activeConversation && (
              <Button 
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>
          
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <LoadingSpinner variant="primary" />
                </div>
              ) : (
                <ConversationsList
                  conversations={conversations}
                  activeConversation={activeConversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
                />
              )}
              
              {/* Conversation Detail */}
              <ConversationDetailView />
            </div>
          </div>
        </div>

        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  );
}
