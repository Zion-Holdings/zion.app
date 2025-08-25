import React, { useState, useRef, useEffect } from 'react';
import { 
  Users, 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Share, 
  MessageSquare, 
  FileText, 
  Edit3, 
  Monitor, 
  Settings, 
  X, 
  Maximize2, 
  Minimize2,
  Plus,
  Search,
  MoreVertical,
  Phone,
  PhoneOff,
  ScreenShare,
  Square,
  Hand,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  UserPlus,
  Lock,
  Unlock
} from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  avatar: string;
  isHost: boolean;
  isMuted: boolean;
  isVideoOff: boolean;
  isScreenSharing: boolean;
  hasRaisedHand: boolean;
  status: 'online' | 'away' | 'busy';
  joinTime: string;
}

interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
  type: 'text' | 'file' | 'reaction';
  reactions: { emoji: string; count: number }[];
}

interface Document {
  id: string;
  name: string;
  type: 'document' | 'spreadsheet' | 'presentation' | 'image';
  size: string;
  lastModified: string;
  sharedBy: string;
  permissions: 'view' | 'edit' | 'admin';
}

interface Meeting {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  participants: number;
  status: 'scheduled' | 'active' | 'ended';
  recording: boolean;
  password: string;
}

const mockParticipants: Participant[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100',
    isHost: true,
    isMuted: false,
    isVideoOff: false,
    isScreenSharing: false,
    hasRaisedHand: false,
    status: 'online',
    joinTime: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
    isHost: false,
    isMuted: true,
    isVideoOff: false,
    isScreenSharing: false,
    hasRaisedHand: true,
    status: 'online',
    joinTime: '2024-01-15T10:02:00.000Z'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
    isHost: false,
    isMuted: false,
    isVideoOff: true,
    isScreenSharing: false,
    hasRaisedHand: false,
    status: 'away',
    joinTime: '2024-01-15T10:05:00.000Z'
  }
];

const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    senderId: '1',
    senderName: 'Sarah Johnson',
    message: 'Welcome everyone to our quarterly review meeting!',
    timestamp: '2024-01-15T10:00:00.000Z',
    type: 'text',
    reactions: []
  },
  {
    id: '2',
    senderId: '2',
    senderName: 'Michael Chen',
    message: 'Thanks Sarah! I have some questions about the Q4 metrics.',
    timestamp: '2024-01-15T10:01:00.000Z',
    type: 'text',
    reactions: [{ emoji: '👍', count: 2 }]
  },
  {
    id: '3',
    senderId: '1',
    senderName: 'Sarah Johnson',
    message: 'Perfect! I\'ll share the presentation now.',
    timestamp: '2024-01-15T10:02:00.000Z',
    type: 'text',
    reactions: []
  }
];

const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Q4_2024_Review.pptx',
    type: 'presentation',
    size: '2.4 MB',
    lastModified: '2024-01-15T09:30:00.000Z',
    sharedBy: 'Sarah Johnson',
    permissions: 'edit'
  },
  {
    id: '2',
    name: 'Financial_Report_Q4.xlsx',
    type: 'spreadsheet',
    size: '1.8 MB',
    lastModified: '2024-01-15T08:45:00.000Z',
    sharedBy: 'Michael Chen',
    permissions: 'view'
  }
];

const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Q4 2024 Review Meeting',
    startTime: '2024-01-15T10:00:00.000Z',
    endTime: '2024-01-15T11:30:00.000Z',
    participants: 3,
    status: 'active',
    recording: true,
    password: 'Q4Review2024'
  }
];

export function AdvancedCollaborationPlatform() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'meeting' | 'chat' | 'documents' | 'participants'>('meeting');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [showParticipants, setShowParticipants] = useState(true);
  const [showChat, setShowChat] = useState(true);
  const [participants, setParticipants] = useState<Participant[]>(mockParticipants);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [meetings, setMeetings] = useState<Meeting[]>(mockMeetings);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, isMuted: !isMuted } : p)
    );
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, isVideoOff: !isVideoOff } : p)
    );
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, isScreenSharing: !isScreenSharing } : p)
    );
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        senderId: '1',
        senderName: 'Sarah Johnson',
        message: chatMessage,
        timestamp: new Date().toISOString(),
        type: 'text',
        reactions: []
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatMessage('');
    }
  };

  const raiseHand = () => {
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, hasRaisedHand: !p.hasRaisedHand } : p)
    );
  };

  const filteredParticipants = participants.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDocuments = documents.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-emerald to-zion-blue text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
        title="Open Collaboration Platform"
      >
        <Users className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Users className="w-5 h-5 text-zion-emerald" />
          <span className="text-sm font-medium text-zion-slate">Collaboration</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-zion-slate-light rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
      }`} 
      ref={containerRef}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-emerald to-zion-blue text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Collaboration Platform</h2>
            <p className="text-sm opacity-90">Real-time Team Collaboration & Communication</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Meeting Controls */}
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-zion-slate">Q4 2024 Review Meeting</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
              Live
            </span>
            <span className="text-sm text-zion-slate-light">
              {participants.length} participants
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={raiseHand}
              className={`p-3 rounded-full transition-colors ${
                participants.find(p => p.id === '1')?.hasRaisedHand
                  ? 'bg-yellow-500 text-white'
                  : 'bg-zion-slate-light hover:bg-zion-slate-light/70 text-zion-slate'
              }`}
              title="Raise Hand"
            >
              <Hand className="w-4 h-4" />
            </button>
            <button
              onClick={toggleMute}
              className={`p-3 rounded-full transition-colors ${
                isMuted ? 'bg-red-500 text-white' : 'bg-zion-slate-light hover:bg-zion-slate-light/70 text-zion-slate'
              }`}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleVideo}
              className={`p-3 rounded-full transition-colors ${
                isVideoOff ? 'bg-red-500 text-white' : 'bg-zion-slate-light hover:bg-zion-slate-light/70 text-zion-slate'
              }`}
              title={isVideoOff ? 'Turn on video' : 'Turn off video'}
            >
              {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleScreenShare}
              className={`p-3 rounded-full transition-colors ${
                isScreenSharing ? 'bg-zion-cyan text-white' : 'bg-zion-slate-light hover:bg-zion-slate-light/70 text-zion-slate'
              }`}
              title={isScreenSharing ? 'Stop sharing' : 'Share screen'}
            >
              {isScreenSharing ? <Square className="w-4 h-4" /> : <ScreenShare className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleRecording}
              className={`p-3 rounded-full transition-colors ${
                isRecording ? 'bg-red-500 text-white' : 'bg-zion-slate-light hover:bg-zion-slate-light/70 text-zion-slate'
              }`}
              title={isRecording ? 'Stop recording' : 'Start recording'}
            >
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-white' : 'bg-zion-slate'}`} />
            </button>
            <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors" title="End call">
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-140px)]">
        {/* Main Meeting Area */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Video Grid */}
            <div className="space-y-4">
              <div className="bg-zion-slate-light/30 rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-zion-emerald/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-10 h-10 text-zion-emerald" />
                  </div>
                  <p className="text-zion-slate-light">Main Meeting View</p>
                  <p className="text-sm text-zion-slate-light">Screen sharing active</p>
                </div>
              </div>
              
              {/* Participant Videos */}
              <div className="grid grid-cols-2 gap-3">
                {participants.slice(0, 4).map(participant => (
                  <div key={participant.id} className="bg-zion-slate-light/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <img 
                        src={participant.avatar} 
                        alt={participant.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-zion-slate">{participant.name}</span>
                      {participant.isHost && (
                        <span className="px-2 py-1 bg-zion-emerald text-white text-xs rounded-full">Host</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zion-slate-light">
                      {participant.isMuted && <MicOff className="w-3 h-3" />}
                      {participant.isVideoOff && <VideoOff className="w-3 h-3" />}
                      {participant.isScreenSharing && <Monitor className="w-3 h-3" />}
                      {participant.hasRaisedHand && <Hand className="w-3 h-3 text-yellow-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4">
              {/* Tabs */}
              <div className="flex border-b border-zion-slate-light">
                {[
                  { id: 'meeting', label: 'Meeting', icon: Video },
                  { id: 'chat', label: 'Chat', icon: MessageSquare },
                  { id: 'documents', label: 'Documents', icon: FileText },
                  { id: 'participants', label: 'Participants', icon: Users }
                ].map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-zion-emerald text-zion-emerald bg-zion-emerald/5'
                          : 'border-transparent text-zion-slate-light hover:text-zion-slate hover:bg-zion-slate-light/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="h-80 overflow-y-auto">
                {activeTab === 'meeting' && (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-zion-emerald/10 to-zion-blue/10 p-4 rounded-xl border border-zion-emerald/20">
                      <h4 className="font-semibold text-zion-slate mb-2">Meeting Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-zion-emerald" />
                          <span>Started: 10:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-zion-emerald" />
                          <span>3 participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-emerald" />
                          <span>Recording active</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zion-slate-light/30 p-4 rounded-xl">
                      <h4 className="font-semibold text-zion-slate mb-2">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="p-2 bg-white dark:bg-zion-slate rounded-lg text-sm hover:bg-zion-emerald/10 transition-colors">
                          Create Poll
                        </button>
                        <button className="p-2 bg-white dark:bg-zion-slate rounded-lg text-sm hover:bg-zion-emerald/10 transition-colors">
                          Whiteboard
                        </button>
                        <button className="p-2 bg-white dark:bg-zion-slate rounded-lg text-sm hover:bg-zion-emerald/10 transition-colors">
                          Breakout Rooms
                        </button>
                        <button className="p-2 bg-white dark:bg-zion-slate rounded-lg text-sm hover:bg-zion-emerald/10 transition-colors">
                          Notes
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'chat' && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {chatMessages.map(message => (
                        <div key={message.id} className="bg-zion-slate-light/30 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-zion-slate text-sm">{message.senderName}</span>
                            <span className="text-xs text-zion-slate-light">
                              {new Date(message.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-zion-slate">{message.message}</p>
                          {message.reactions.length > 0 && (
                            <div className="flex gap-1 mt-2">
                              {message.reactions.map((reaction, index) => (
                                <span key={index} className="px-2 py-1 bg-white dark:bg-zion-slate rounded-full text-xs">
                                  {reaction.emoji} {reaction.count}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate text-sm"
                      />
                      <button
                        onClick={sendChatMessage}
                        className="px-4 py-2 bg-zion-emerald text-white rounded-lg hover:bg-zion-emerald/90 transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search documents..."
                        className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate text-sm"
                      />
                      <button className="p-2 bg-zion-emerald text-white rounded-lg hover:bg-zion-emerald/90 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {filteredDocuments.map(document => (
                        <div key={document.id} className="bg-zion-slate-light/30 p-3 rounded-lg hover:bg-zion-slate-light/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-zion-emerald/20 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-zion-emerald" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-zion-slate text-sm">{document.name}</h5>
                              <p className="text-xs text-zion-slate-light">
                                {document.size} • {new Date(document.lastModified).toLocaleDateString()}
                              </p>
                            </div>
                            <button className="p-1 hover:bg-zion-slate-light rounded">
                              <MoreVertical className="w-4 h-4 text-zion-slate-light" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'participants' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search participants..."
                        className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate text-sm"
                      />
                      <button className="p-2 bg-zion-emerald text-white rounded-lg hover:bg-zion-emerald/90 transition-colors">
                        <UserPlus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {filteredParticipants.map(participant => (
                        <div key={participant.id} className="bg-zion-slate-light/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            <img 
                              src={participant.avatar} 
                              alt={participant.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <h5 className="font-medium text-zion-slate text-sm">{participant.name}</h5>
                              <p className="text-xs text-zion-slate-light">
                                Joined {new Date(participant.joinTime).toLocaleTimeString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {participant.isHost && (
                                <span className="px-2 py-1 bg-zion-emerald text-white text-xs rounded-full">Host</span>
                              )}
                              <span className={`w-2 h-2 rounded-full ${
                                participant.status === 'online' ? 'bg-green-500' :
                                participant.status === 'away' ? 'bg-yellow-500' : 'bg-red-500'
                              }`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}