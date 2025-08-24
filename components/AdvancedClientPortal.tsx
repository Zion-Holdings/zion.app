import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  BarChart3,
  FileText,
  MessageSquare,
  Download,
  Upload,
  Eye,
  Settings,
  Bell,
  Star,
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Code,
  Rocket,
  DollarSign,
  Users,
  Activity,
  PieChart,
  LineChart,
  ArrowRight,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  RefreshCw,
  MoreHorizontal
} from 'lucide-react';

interface ClientProject {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'on-hold' | 'planning';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  team: string[];
  lastUpdate: string;
  nextMilestone: string;
  documents: Document[];
  messages: Message[];
  tasks: ClientTask[];
}

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'image' | 'video';
  size: string;
  uploadedAt: string;
  uploadedBy: string;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  attachments: string[];
}

interface ClientTask {
  id: string;
  name: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignee: string;
  description: string;
}

const clientProjects: ClientProject[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    status: 'active',
    progress: 65,
    startDate: '2025-01-15',
    endDate: '2025-03-15',
    budget: 50000,
    spent: 32500,
    team: ['John Smith', 'Sarah Chen', 'Mike Johnson'],
    lastUpdate: '2025-01-27',
    nextMilestone: 'Development Phase Completion',
    documents: [
      { id: '1', name: 'Project Requirements.pdf', type: 'pdf', size: '2.4 MB', uploadedAt: '2025-01-20', uploadedBy: 'John Smith' },
      { id: '2', name: 'Design Mockups.pdf', type: 'pdf', size: '15.2 MB', uploadedAt: '2025-01-22', uploadedBy: 'Sarah Chen' },
      { id: '3', name: 'Technical Specifications.docx', type: 'doc', size: '1.8 MB', uploadedAt: '2025-01-25', uploadedBy: 'Mike Johnson' }
    ],
    messages: [
      { id: '1', sender: 'John Smith', content: 'Design phase completed successfully. Ready to move to development.', timestamp: '2025-01-26 14:30', isRead: true, attachments: [] },
      { id: '2', sender: 'Sarah Chen', content: 'New design assets uploaded. Please review and provide feedback.', timestamp: '2025-01-27 09:15', isRead: false, attachments: ['Design Assets.zip'] }
    ],
    tasks: [
      { id: '1', name: 'Review Design Assets', status: 'pending', priority: 'high', dueDate: '2025-01-28', assignee: 'Client', description: 'Review and approve the latest design assets' },
      { id: '2', name: 'API Integration', status: 'in-progress', priority: 'high', dueDate: '2025-02-05', assignee: 'Mike Johnson', description: 'Integrate payment gateway and user authentication APIs' },
      { id: '3', name: 'Performance Testing', status: 'pending', priority: 'medium', dueDate: '2025-02-15', assignee: 'John Smith', description: 'Conduct performance testing and optimization' }
    ]
  },
  {
    id: '2',
    name: 'Mobile App Development',
    status: 'planning',
    progress: 25,
    startDate: '2025-02-01',
    endDate: '2025-05-01',
    budget: 75000,
    spent: 18750,
    team: ['Alex Thompson', 'Emily Watson'],
    lastUpdate: '2025-01-25',
    nextMilestone: 'Requirements Finalization',
    documents: [
      { id: '1', name: 'Initial Requirements.docx', type: 'doc', size: '3.1 MB', uploadedAt: '2025-01-20', uploadedBy: 'Alex Thompson' },
      { id: '2', name: 'Market Research.pdf', type: 'pdf', size: '8.7 MB', uploadedAt: '2025-01-23', uploadedBy: 'Emily Watson' }
    ],
    messages: [
      { id: '1', sender: 'Alex Thompson', content: 'Initial requirements gathered. Need client feedback on priority features.', timestamp: '2025-01-25 16:45', isRead: true, attachments: [] }
    ],
    tasks: [
      { id: '1', name: 'Feature Prioritization', status: 'pending', priority: 'high', dueDate: '2025-02-05', assignee: 'Client', description: 'Review and prioritize feature requirements' },
      { id: '2', name: 'Technical Architecture', status: 'pending', priority: 'medium', dueDate: '2025-02-10', assignee: 'Alex Thompson', description: 'Design technical architecture and database schema' }
    ]
  }
];

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'completed': 'from-blue-500 to-cyan-500',
  'on-hold': 'from-yellow-500 to-orange-500',
  'planning': 'from-purple-500 to-pink-500'
};

const statusIcons = {
  'active': <Activity className="w-4 h-4" />,
  'completed': <CheckCircle className="w-4 h-4" />,
  'on-hold': <Clock className="w-4 h-4" />,
  'planning': <Calendar className="w-4 h-4" />
};

const priorityColors = {
  'low': 'text-gray-400',
  'medium': 'text-yellow-400',
  'high': 'text-orange-400'
};

const AdvancedClientPortal: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'documents' | 'messages' | 'tasks'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = clientProjects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Client Portal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your dedicated space for project collaboration, real-time updates, and seamless communication. 
            Stay informed, provide feedback, and track progress with our comprehensive client portal.
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Project
            </motion.button>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${statusColors[project.status]} rounded-full`} />
                        <span className="text-gray-400 text-sm capitalize">{project.status}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">${(project.budget / 1000).toFixed(0)}K</div>
                      <div className="text-gray-400 text-xs">Budget</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${statusColors[project.status]} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-white font-bold text-lg">{project.team.length}</div>
                      <div className="text-gray-400 text-xs">Team Members</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-white font-bold text-lg">{project.documents.length}</div>
                      <div className="text-gray-400 text-xs">Documents</div>
                    </div>
                  </div>

                  {/* Last Update & Next Milestone */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Last Update:</span>
                      <span className="text-white">{project.lastUpdate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Next:</span>
                      <span className="text-white">{project.nextMilestone}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      className="flex-1 px-3 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </motion.button>
                    <motion.button
                      className="flex-1 px-3 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4 inline mr-2" />
                      View
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help or Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to support you. Contact us anytime for assistance, 
              feedback, or to discuss your project requirements.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${statusColors[selectedProject.status]} rounded-full text-white text-sm font-medium`}>
                        {selectedProject.status}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {new Date(selectedProject.startDate).toLocaleDateString()} - {new Date(selectedProject.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1">
                  {(['overview', 'documents', 'messages', 'tasks'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        selectedTab === tab
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence>
                  {selectedTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Project Overview */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                              <div className="text-white font-bold text-2xl">{selectedProject.progress}%</div>
                              <div className="text-gray-400">Progress</div>
                            </div>
                            <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                              <div className="text-white font-bold text-2xl">${(selectedProject.spent / 1000).toFixed(1)}K</div>
                              <div className="text-gray-400">Spent of ${(selectedProject.budget / 1000).toFixed(0)}K</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-white mb-4">Team</h4>
                          <div className="space-y-3">
                            {selectedProject.team.map((member, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  {member.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-white text-sm">{member}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">Recent Activity</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-gray-300 text-sm">Project status updated to {selectedProject.status}</span>
                            <span className="text-gray-400 text-xs ml-auto">{selectedProject.lastUpdate}</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-blue-400 rounded-full" />
                            <span className="text-gray-300 text-sm">New documents uploaded</span>
                            <span className="text-gray-400 text-xs ml-auto">2 days ago</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === 'documents' && (
                    <motion.div
                      key="documents"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-white">Project Documents</h4>
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Upload className="w-4 h-4" />
                          Upload Document
                        </motion.button>
                      </div>
                      
                      <div className="space-y-3">
                        {selectedProject.documents.map((doc) => (
                          <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-gray-400" />
                              </div>
                              <div>
                                <div className="text-white font-medium">{doc.name}</div>
                                <div className="text-gray-400 text-sm">
                                  {doc.size} • Uploaded by {doc.uploadedBy} • {doc.uploadedAt}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <motion.button
                                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Eye className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Download className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === 'messages' && (
                    <motion.div
                      key="messages"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-white">Project Messages</h4>
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageSquare className="w-4 h-4" />
                          New Message
                        </motion.button>
                      </div>
                      
                      <div className="space-y-4">
                        {selectedProject.messages.map((message) => (
                          <div key={message.id} className={`p-4 rounded-lg border ${
                            message.isRead ? 'bg-gray-800/30 border-gray-700/50' : 'bg-blue-600/20 border-blue-500/30'
                          }`}>
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  {message.sender.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-white font-medium">{message.sender}</span>
                                {!message.isRead && (
                                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                )}
                              </div>
                              <span className="text-gray-400 text-sm">{message.timestamp}</span>
                            </div>
                            <p className="text-gray-300 mb-3">{message.content}</p>
                            {message.attachments.length > 0 && (
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400 text-sm">Attachments:</span>
                                {message.attachments.map((attachment, index) => (
                                  <span key={index} className="text-blue-400 text-sm hover:underline cursor-pointer">
                                    {attachment}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === 'tasks' && (
                    <motion.div
                      key="tasks"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-white">Project Tasks</h4>
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className="w-4 h-4" />
                          New Task
                        </motion.button>
                      </div>
                      
                      <div className="space-y-3">
                        {selectedProject.tasks.map((task) => (
                          <div key={task.id} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h5 className="text-white font-medium">{task.name}</h5>
                                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                    task.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                                    task.status === 'blocked' ? 'bg-red-500/20 text-red-400' :
                                    'bg-gray-500/20 text-gray-400'
                                  }`}>
                                    {task.status}
                                  </div>
                                  <div className={`text-xs ${priorityColors[task.priority]}`}>
                                    {task.priority}
                                  </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-2">{task.description}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Assignee: {task.assignee}</span>
                                  <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <motion.button
                                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <MoreHorizontal className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedClientPortal;