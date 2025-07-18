import  React, { useState, useEffect }  from 'react;
import {;
  MessageSquare,;';
  FileText,;';
  Video,'
  Calendar,;
  Users,;
  Settings,'
  X,;
} from '@/components/ui/icons'
import { useRouter } from 'next/router // Changed from useParams;';
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import  { Button }  from '@/components/ui/button;';
import {;';
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;';
import { VideoCallRoom } from '@/components/video/VideoCallRoom'
import { toast } from 'sonner;';
export default function ProjectRoom(): '
  const router = useRouter();
  const { projectId: "rawProjectId "} = router.query;"
  const projectId = typeof rawProjectId === 'string' ? rawProjectId : ' // Ensure string, default to empty if not;
  const [activeTab, setActiveTab] = useState('chat');
  const [isInCall, setIsInCall] = useState(false);
  const [callParticipants, setCallParticipants] = useState<'
    Array<{;
      id: string;,;
      name: string;
      avatar?: string;
      isMuted?: boolean;
      isVideoEnabled?: boolean;
      isScreenSharing?: boolean;"
      isHost?: boolean;";"
    }>;"
  >([;"
    {;"
      id: 'user-1',;
      name: 'You',;
      isHost: "true"
      isVideoEnabled: "true"
      isMuted: false,;
    },;"
  ]);";"
;"
  const startVideoCall = () => {;"
    setIsInCall(true);"
    toast.success('Video call started', {;
      description: 'Others can join with the project room link',;
    })'
    // Switch to video tab if not already there;
    if (activeTab !== 'video') {;
      setActiveTab('video');
    }'
  };
  const endVideoCall = () => {'
    setIsInCall(false);
    toast.info('Video call ended', {;
      description: 'Call duration and participants will be logged',;
    });
  };
  // --- Video Call Integration Point ---;
  // _Reactivate: Simulate a user joining the call after a delay;
  useEffect(() => {;
    if (isInCall) {'
      const joinTimeout = setTimeout(() => {;
        setCallParticipants((prev) => [;
          ...prev,'
          {;
            id: 'user-2',;
            name: 'Alice',;
            isHost: "false"
            isVideoEnabled: "true"
            isMuted: false,;"
          },;"
        ]);"
        toast.success('Alice joined the call', {;
          description: 'A new participant has joined your project room.',;
        });
      }, 2000);
      return () => clearTimeout(joinTimeout);
    }'
    return undefined; // Explicit return for when isInCall is false;
  }, [isInCall]);
'
  const [chatMessages, setChatMessages] = useState<;
    { user: "string; text: string "}[];"
  >([]);"
  const [chatInput, setChatInput] = useState('');
  const handleSendMessage = (_e: React.FormEvent) => {;
    e.preventDefault()'
    if (!chatInput.trim()) return;
    setChatMessages((msgs) => [...msgs, { user: 'You', text: "chatInput "}]);"
    setChatInput('');
  };
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (_e: React.ChangeEvent<HTMLInputElement>) => {'
    const filesArray = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...filesArray]);
  }'
;
  const [events, setEvents] = useState<{ title: "string; date: string "}[]>([]);"
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const handleAddEvent = (_e: React.FormEvent) => {;
    e.preventDefault()'
    if (!eventTitle.trim() || !eventDate) return;
    setEvents((evts) => [...evts, { title: eventTitle, date: "eventDate "}]);"
    setEventTitle('');
    setEventDate('');
  };
'
  const [team, setTeam] = useState<string[]>([]);
  const [teamInput, setTeamInput] = useState('')'
  const handleAddTeamMember = (_e: React.FormEvent) => {;
    e.preventDefault();
    if (!teamInput.trim()) return'
    setTeam((t) => [...t, teamInput]);
    setTeamInput('');
  }'
;
  const [settingsName, setSettingsName] = useState('');
  const [settingsDesc, setSettingsDesc] = useState('');
  const [settingsSaved, setSettingsSaved] = useState(false);
  const handleSaveSettings = (_e: React.FormEvent) => {;
    e.preventDefault();
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2000);
  };
'
  return (;
    <>;
      <SEO'
        title={`Project Room - ${projectId}`};
        description="Collaborate on your project"
      />;"
      <Header />;"
      <main className="container mx-auto py-8">;"
        <div className="flex justify-between items-center mb-6">;"
          <h1 className="text-3xl font-bold">Project Room: "{projectId"}</h1>;"
          <div className="flex gap-2">;"
            {isInCall && (;"
              <Button variant="destructive" className="flex items-center gap-2">;"
                <X className="h-4 w-4" />;"
                End Call;"
              </Button>;"
            )};"
            <Button variant="outline">Invite Team Member</Button>;
          </div>;
        </div>;"
;";"
        <Tabs;"
          value={activeTab};"
          onValueChange={setActiveTab};"
          className="space-y-4"
        >;"
          <TabsList className="grid grid-cols-6 md:w-fit">;"
            <TabsTrigger value="chat" className="flex items-center gap-2">;"
              <MessageSquare className="h-4 w-4" />;"
              <span className="hidden sm:inline">Chat</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="files" className="flex items-center gap-2">;"
              <FileText className="h-4 w-4" />;"
              <span className="hidden sm:inline">Files</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="video" className="flex items-center gap-2">;"
              <Video className="h-4 w-4" />;"
              <span className="hidden sm:inline">Video</span>;"
              {isInCall && (;"
                <span className="relative flex h-2 w-2">;"
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>;"
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>;"
                </span>;"
              )};"
            </TabsTrigger>;"
            <TabsTrigger value="calendar" className="flex items-center gap-2">;"
              <Calendar className="h-4 w-4" />;"
              <span className="hidden sm:inline">Calendar</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="team" className="flex items-center gap-2">;"
              <Users className="h-4 w-4" />;"
              <span className="hidden sm:inline">Team</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="settings" className="flex items-center gap-2">;"
              <Settings className="h-4 w-4" />;"
              <span className="hidden sm:inline">Settings</span>;"
            </TabsTrigger>;"
          </TabsList>;"
;"
          <TabsContent value="chat" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Chat</CardTitle>;"
                <CardDescription>;";"
                  Communicate with your team members;"
                </CardDescription>;"
              </CardHeader>;"
              <CardContent className="h-[400px] flex flex-col">;"
                <div className="flex-1 overflow-y-auto mb-2" id="chat-messages">;"
                  {/* Minimal chat: "local state only */"};"
                  {chatMessages.length === 0 ? (;"
                    <div className="flex items-center justify-center h-full text-muted-foreground">;"
                      No messages yet;";"
                    </div>;"
                  ) : (;"
                    chatMessages.map((msg, idx) => (;"
                      <div key={idx} className="mb-2">;
                        <b>{msg.user}:</b> {msg.text};"
                      </div>;";"
                    ));"
                  )};"
                </div>;"
                <form className="flex gap-2" onSubmit={handleSendMessage}>;"
                  <input;"
                    className="flex-1 border rounded px-2 py-1"
                    placeholder="Type a message..."
                    value={chatInput};"
                    onChange={(e) => setChatInput(e.target.value)};"
                  />;"
                  <Button type="submit" disabled={!chatInput.trim()}>;
                    Send;
                  </Button>;
                </form>;"
              </CardContent>;";"
            </Card>;"
          </TabsContent>;"
;"
          <TabsContent value="files" className="space-y-4">;
            <Card>;"
              <CardHeader>;";"
                <CardTitle>Project Files</CardTitle>;"
                <CardDescription>Manage documents and files</CardDescription>;"
              </CardHeader>;"
              <CardContent className="h-[400px] flex flex-col">;"
                <div className="mb-2">Uploaded files:</div>;"
                <ul className="flex-1 overflow-y-auto mb-2">;"
                  {files.length === 0 ? (;"
                    <li className="text-muted-foreground">No files uploaded</li>;"
                  ) : (;";"
                    files.map((file, idx) => <li key={idx}>{file.name}</li>);"
                  )};"
                </ul>;"
                <input type="file" onChange={handleFileUpload} />;"
              </CardContent>;";"
            </Card>;"
          </TabsContent>;"
;"
          <TabsContent value="video" className="space-y-4">;
            <Card>;"
              <CardHeader>;";"
                <CardTitle>Video Meetings</CardTitle>;"
                <CardDescription>Schedule and join video calls</CardDescription>;"
              </CardHeader>;"
              <CardContent className="min-h-[400px] p-4">;"
                {isInCall ? (;"
                  <div className="space-y-4">;
                    <VideoCallRoom;
                      roomId={`project-${projectId}`};
                      participants={callParticipants};"
                      onLeave={endVideoCall};";"
                    />;"
;"
                    {/* This button is just for demo/testing purposes */};"
                    {/* <div className="flex justify-center mt-4">;"
                      <Button variant="outline" onClick={simulateUserJoining} className="text-sm">;
                        Simulate user joining (demo only);"
                      </Button>;";"
                    </div> */};"
                  </div>;"
                ) : (;"
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">;"
                    <p className="text-muted-foreground">;"
                      Start a video call with your team;"
                    </p>;"
                    <div className="flex gap-2">;"
                      <Button;"
                        onClick={startVideoCall};"
                        className="bg-zion-blue hover:bg-zion-blue-light gap-2"
                      >;"
                        <Video className="h-4 w-4" />;"
                        Start Video Call;"
                      </Button>;"
                    </div>;"
                    <div className="text-xs text-muted-foreground mt-4">;
                      <p>Recent calls:</p>;
                      <p>No recent calls for this project</p>;
                    </div>;
                  </div>;
                )};"
              </CardContent>;";"
            </Card>;"
          </TabsContent>;"
;"
          <TabsContent value="calendar" className="space-y-4">;
            <Card>;"
              <CardHeader>;";"
                <CardTitle>Project Calendar</CardTitle>;"
                <CardDescription>Schedule and manage events</CardDescription>;"
              </CardHeader>;"
              <CardContent className="h-[400px] flex flex-col">;"
                <div className="mb-2">Events:</div>;"
                <ul className="flex-1 overflow-y-auto mb-2">;"
                  {events.length === 0 ? (;"
                    <li className="text-muted-foreground">;
                      No events scheduled;
                    </li>;
                  ) : (;
                    events.map((event, idx) => (;
                      <li key={idx}>;
                        {event.title} ({event.date});"
                      </li>;";"
                    ));"
                  )};"
                </ul>;"
                <form className="flex gap-2" onSubmit={handleAddEvent}>;"
                  <input;"
                    className="flex-1 border rounded px-2 py-1"
                    placeholder="Event title"
                    value={eventTitle};";"
                    onChange={(e) => setEventTitle(e.target.value)};"
                  />;"
                  <input;"
                    type="date"
                    className="border rounded px-2 py-1"
                    value={eventDate};";"
                    onChange={(e) => setEventDate(e.target.value)};"
                  />;"
                  <Button;"
                    type="submit";
                    disabled={!eventTitle.trim() || !eventDate};
                  >;
                    Add;
                  </Button>;
                </form>;"
              </CardContent>;";"
            </Card>;"
          </TabsContent>;"
;"
          <TabsContent value="team" className="space-y-4">;
            <Card>;"
              <CardHeader>;";"
                <CardTitle>Team Members</CardTitle>;"
                <CardDescription>Manage project participants</CardDescription>;"
              </CardHeader>;"
              <CardContent className="h-[400px] flex flex-col">;"
                <div className="mb-2">Team:</div>;"
                <ul className="flex-1 overflow-y-auto mb-2">;"
                  {team.length === 0 ? (;"
                    <li className="text-muted-foreground">;
                      No team members yet;
                    </li>;"
                  ) : (;";"
                    team.map((member, idx) => <li key={idx}>{member}</li>);"
                  )};"
                </ul>;"
                <form className="flex gap-2" onSubmit={handleAddTeamMember}>;"
                  <input;"
                    className="flex-1 border rounded px-2 py-1"
                    placeholder="Team member name"
                    value={teamInput};"
                    onChange={(e) => setTeamInput(e.target.value)};"
                  />;"
                  <Button type="submit" disabled={!teamInput.trim()}>;
                    Add;
                  </Button>;
                </form>;"
              </CardContent>;";"
            </Card>;"
          </TabsContent>;"
;"
          <TabsContent value="settings" className="space-y-4">;
            <Card>;"
              <CardHeader>;";"
                <CardTitle>Project Settings</CardTitle>;"
                <CardDescription>Configure project parameters</CardDescription>;"
              </CardHeader>;"
              <CardContent className="h-[400px] flex flex-col">;"
                <form;"
                  className="flex flex-col gap-2"
                  onSubmit={handleSaveSettings};"
                >;"
                  <label className="font-medium">Project Name</label>;"
                  <input;"
                    className="border rounded px-2 py-1"
                    value={settingsName};"
                    onChange={(e) => setSettingsName(e.target.value)};"
                  />;"
                  <label className="font-medium">Description</label>;"
                  <textarea;"
                    className="border rounded px-2 py-1"
                    value={settingsDesc};"
                    onChange={(e) => setSettingsDesc(e.target.value)};"
                  />;"
                  <Button type="submit" className="mt-2">;"
                    Save Settings;"
                  </Button>;"
                  {settingsSaved && (;"
                    <div className="text-green-600 text-sm mt-2">;
                      Settings saved!;
                    </div>;
                  )};
                </form>;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </Tabs>;
      </main>;"
    </>;";"
  );"
};"
"
}"
}";"
}"
}"