
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { VideoCallRoom } from '@/components/video/VideoCallRoom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [participants, setParticipants] = useState<Array<{
    id: string;
    name: string;
    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
  }>>([
    {
      id: 'user-1',
      name: 'You',
      isVideoEnabled: true,
      isMuted: false
    }
  ]);

  const handleJoinCall = () => {
    setIsJoining(true);
    // Simulate connection delay
    setTimeout(() => {
      setHasJoined(true);
      setIsJoining(false);
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`
      });
    }, 1500);
  };

  const handleLeaveCall = () => {
    setHasJoined(false);
    toast.info("Call ended", {
      description: "You have left the meeting"
    });
    
    // Navigate back after a short delay
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };

  return (
    <>
      <SEO title={`Video Call - Room ${roomId}`} description="Zion video call" />
      <Header />
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">
        {!hasJoined ? (
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-white">Join Video Call</h1>
            <p className="text-zion-slate-light mb-8">Room ID: {roomId}</p>
            <Button 
              onClick={handleJoinCall} 
              disabled={isJoining}
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              {isJoining ? "Connecting..." : "Join Call"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <VideoCallRoom 
              roomId={roomId || ''} 
              participants={participants}
              onLeave={handleLeaveCall} 
            />
            
            {/* This button is just for demo/testing purposes */}
            <div className="flex justify-center mt-4">
              <Button variant="outline" onClick={simulateUserJoining} className="text-sm">
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
