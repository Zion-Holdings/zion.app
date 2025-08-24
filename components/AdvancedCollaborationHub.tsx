import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  FileText, 
  Edit, 
  Share, 
  Video, 
  Phone, 
  ArrowRight, 
  Plus, 
  Search, 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Star,
  Zap,
  Brain,
  Lightbulb,
  Target,
  Activity
} from 'lucide-react';

interface CollaborationSession {
  id: string;
  title: string;
  type: 'document' | 'meeting' | 'project' | 'brainstorming';
  status: 'active' | 'paused' | 'completed';
  participants: Participant[];
  documents: Document[];
  messages: Message[];
  startTime: string;
  lastActivity: string;
}

interface Participant {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: 'online' | 'away' | 'busy' | 'offline';
  isTyping: boolean;
  lastSeen: string;
}

interface Document {
  id: string;
  name: string;
  type: 'document' | 'spreadsheet' | 'presentation' | 'design';
  status: 'editing' | 'reviewing' | 'approved' | 'archived';
  lastModified: string;
  modifiedBy: string;
  version: string;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  type: 'text' | 'file' | 'reaction' | 'system';
  reactions: Reaction[];
}

interface Reaction {
  emoji: string;
  count: number;
  users: string[];
}

const collaborationSessions: CollaborationSession[] = [
  {
    id: '1',
    title: 'Product Strategy Meeting',
    type: 'meeting',
    status: 'active',
    participants: [
      {
        id: '1',
        name: 'John Smith',
        avatar: 'JS',
        role: 'Product Manager',
        status: 'online',
        isTyping: true,
        lastSeen: '2025-01-27 16:00'
      },
      {
        id: '2',
        name: 'Sarah Chen',
        avatar: 'SC',
        role: 'UX Designer',
        status: 'online',
        isTyping: false,
        lastSeen: '2025-01-27 16:00'
      }
    ],
    documents: [
      {
        id: '1',
        name: 'Product Roadmap Q1 2025',
        type: 'document',
        status: 'editing',
        lastModified: '2025-01-27 16:00',
        modifiedBy: 'John Smith',
        version: '2.1.0'
      }
    ],
    messages: [
      {
        id: '1',
        sender: 'John Smith',
        content: 'Let\'s review the Q1 roadmap and discuss priorities',
        timestamp: '2025-01-27 16:00',
        type: 'text',
        reactions: []
      }
    ],
    startTime: '2025-01-27 15:30',
    lastActivity: '2025-01-27 16:00'
  }
];

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'paused': 'from-yellow-500 to-orange-500',
  'completed': 'from-blue-500 to-cyan-500'
};

const participantStatusColors = {
  'online': 'from-green-500 to-emerald-500',
  'away': 'from-yellow-500 to-orange-500',
  'busy': 'from-red-500 to-pink-500',
  'offline': 'from-gray-500 to-gray-600'
};

const AdvancedCollaborationHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'sessions' | 'participants' | 'documents'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Collaboration Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced real-time collaboration platform with live editing, team communication, 
            and seamless document sharing for enhanced productivity.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+25%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">12</h3>
            <p className="text-gray-400 text-sm">Active Users</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+18%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">156</h3>
            <p className="text-gray-400 text-sm">Messages</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">8</h3>
            <p className="text-gray-400 text-sm">Documents</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">3</h3>
            <p className="text-gray-400 text-sm">Active Sessions</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-lg mx-auto"
        >
          {(['overview', 'sessions', 'participants', 'documents'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'sessions' && <MessageCircle className="w-4 h-4 inline mr-2" />}
              {view === 'participants' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'documents' && <FileText className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Active Sessions */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Active Sessions</h3>
                  {collaborationSessions.map((session) => (
                    <motion.div
                      key={session.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[session.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{session.title}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[session.status]} rounded-full text-white text-xs font-medium`}>
                              {session.status}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{session.participants.length} participants</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Participants</div>
                        <div className="flex flex-wrap gap-2">
                          {session.participants.map((participant) => (
                            <div key={participant.id} className="flex items-center gap-2">
                              <div className={`w-3 h-3 bg-gradient-to-r ${participantStatusColors[participant.status]} rounded-full`} />
                              <span className="text-gray-300 text-sm">{participant.name}</span>
                              {participant.isTyping && (
                                <span className="text-blue-400 text-xs">typing...</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Started: {session.startTime} | Last activity: {session.lastActivity}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Activity</h3>
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                          JS
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">John Smith updated Product Roadmap</div>
                          <div className="text-gray-400 text-xs">2 minutes ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm">
                          SC
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">Sarah Chen joined the session</div>
                          <div className="text-gray-400 text-xs">5 minutes ago</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Collaborate in Real-Time?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you build a collaborative environment that enhances 
              team productivity and drives innovation.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedCollaborationHub;