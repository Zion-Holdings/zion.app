import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Changed from useParams
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react';







import { VideoCallRoom } from '@/components/video/VideoCallRoom';
import { toast } from 'sonner';

export default function ProjectRoom() {
  const router = useRouter();
  const { projectId: rawProjectId } = router.query;
  const projectId = typeof rawProjectId === 'string' ? rawProjectId : ''; // Ensure string, default to empty if not
  const [activeTab, setActiveTab] = useState('chat');
  const [isInCall, setIsInCall] = useState(false);
  const [callParticipants, setCallParticipants] = useState<Array<{
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
      isHost: true,
      isVideoEnabled: true,
      isMuted: false
    }
  ]);
  
  const startVideoCall = () => {
    setIsInCall(true);
    toast.success("Video call started", {
      description: "Others can join with the project room link"
    });
    // Switch to video tab if not already there
    if (activeTab !== 'video') {
      setActiveTab('video');
    }
  };
  
  const endVideoCall = () => {
    setIsInCall(false);
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    });
  };
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (randomUser && !callParticipants.find(p => p.id === randomUser.id)) {
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };
  
  return (
    <>
      <SEO title={`Project Room - ${projectId}`} description="Collaborate on your project" />
      <Header />
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>
          <div className="flex gap-2">
            {isInCall && (
              <Button variant="destructive" className="flex items-center gap-2">
                <X className="h-4 w-4" />
                End Call
              </Button>
            )}
            <Button variant="outline">Invite Team Member</Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-6 md:w-fit">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Files</span>
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Video</span>
              {isInCall && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Chat</CardTitle>
                <CardDescription>Communicate with your team members</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Chat functionality will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="files" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Files</CardTitle>
                <CardDescription>Manage documents and files</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">File management will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="video" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>Schedule and join video calls</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] p-4">
                {isInCall ? (
                  <div className="space-y-4">
                    <VideoCallRoom 
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
                    />
                    
                    {/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" onClick={simulateUserJoining} className="text-sm">
                        Simulate user joining (demo only)
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                    <p className="text-muted-foreground">Start a video call with your team</p>
                    <div className="flex gap-2">
                      <Button onClick={startVideoCall} className="bg-zion-blue hover:bg-zion-blue-light gap-2">
                        <Video className="h-4 w-4" />
                        Start Video Call
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground mt-4">
                      <p>Recent calls:</p>
                      <p>No recent calls for this project</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Calendar</CardTitle>
                <CardDescription>Schedule and manage events</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Calendar will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage project participants</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Team management will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Configure project parameters</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Settings will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
