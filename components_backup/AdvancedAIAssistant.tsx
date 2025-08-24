import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  MessageCircle, 
  Sparkles, 
  Zap, 
  Brain, 
  Lightbulb, 
  Target, 
  ArrowRight, 
  Send, 
  Plus, 
  Edit, 
  Eye, 
  Filter, 
  Search, 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  Star,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Code,
  Rocket,
  Timer,
  Activity,
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface AIConversation {
  id: string;
  type: 'chat' | 'task' | 'analysis' | 'recommendation';
  title: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  lastUpdated: string;
  messages: AIMessage[];
  insights: AIInsight[];
  actions: AIAction[];
}

interface AIMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  confidence?: number;
  suggestions?: string[];
}

interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'warning' | 'critical' | 'info';
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  data: any;
  createdAt: string;
}

interface AIAction {
  id: string;
  name: string;
  description: string;
  type: 'automation' | 'recommendation' | 'alert' | 'optimization';
  status: 'pending' | 'executing' | 'completed' | 'failed';
  priority: number;
  estimatedTime: number;
  createdAt: string;
}

interface AIFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: 'active' | 'beta' | 'coming-soon';
  usage: number;
  accuracy: number;
}

const aiConversations: AIConversation[] = [
  {
    id: '1',
    type: 'chat',
    title: 'Project Optimization Analysis',
    description: 'AI-powered analysis of project performance and optimization recommendations',
    status: 'active',
    priority: 'high',
    createdAt: '2025-01-27 10:00',
    lastUpdated: '2025-01-27 15:30',
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'Analyze our current project portfolio and identify optimization opportunities',
        timestamp: '2025-01-27 10:00'
      },
      {
        id: '2',
        type: 'assistant',
        content: 'I\'ve analyzed your project portfolio and identified several optimization opportunities. Based on the data, I recommend focusing on resource allocation optimization and timeline compression for the E-commerce Platform project.',
        timestamp: '2025-01-27 10:02',
        confidence: 0.94,
        suggestions: ['Optimize team allocation', 'Compress timeline by 15%', 'Implement automated testing']
      },
      {
        id: '3',
        type: 'user',
        content: 'What specific actions should we take for the E-commerce project?',
        timestamp: '2025-01-27 15:30'
      }
    ],
    insights: [
      {
        id: '1',
        title: 'Resource Utilization Optimization',
        description: 'Current resource utilization is at 78%, with potential to increase to 92% through better allocation',
        type: 'positive',
        impact: 'high',
        confidence: 0.91,
        data: { current: 78, potential: 92, improvement: 14 },
        createdAt: '2025-01-27 10:05'
      }
    ],
    actions: [
      {
        id: '1',
        name: 'Resource Reallocation',
        description: 'Automatically redistribute team members based on project priorities and skills',
        type: 'automation',
        status: 'pending',
        priority: 1,
        estimatedTime: 30,
        createdAt: '2025-01-27 10:10'
      }
    ]
  },
  {
    id: '2',
    type: 'task',
    title: 'Client Communication Automation',
    description: 'Intelligent automation of client communication and status updates',
    status: 'active',
    priority: 'medium',
    createdAt: '2025-01-27 09:00',
    lastUpdated: '2025-01-27 14:00',
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'Set up automated client communication for project milestones',
        timestamp: '2025-01-27 09:00'
      },
      {
        id: '2',
        type: 'assistant',
        content: 'I\'ve configured automated client communication for all active projects. The system will now send personalized updates when milestones are reached, with smart timing based on client preferences.',
        timestamp: '2025-01-27 09:05',
        confidence: 0.97,
        suggestions: ['Customize message templates', 'Set up escalation rules', 'Configure delivery preferences']
      }
    ],
    insights: [
      {
        id: '1',
        title: 'Communication Efficiency',
        description: 'Automated communication reduces manual effort by 65% while improving client satisfaction',
        type: 'positive',
        impact: 'medium',
        confidence: 0.89,
        data: { effortReduction: 65, satisfactionImprovement: 23 },
        createdAt: '2025-01-27 09:10'
      }
    ],
    actions: [
      {
        id: '1',
        name: 'Template Customization',
        description: 'Create personalized communication templates for each client',
        type: 'automation',
        status: 'executing',
        priority: 2,
        estimatedTime: 45,
        createdAt: '2025-01-27 09:15'
      }
    ]
  }
];

const aiFeatures: AIFeature[] = [
  {
    id: '1',
    name: 'Natural Language Processing',
    description: 'Advanced NLP for understanding complex queries and context',
    icon: <Brain className="w-6 h-6" />,
    status: 'active',
    usage: 95,
    accuracy: 94
  },
  {
    id: '2',
    name: 'Predictive Analytics',
    description: 'AI-powered predictions for project outcomes and resource needs',
    icon: <TrendingUp className="w-6 h-6" />,
    status: 'active',
    usage: 87,
    accuracy: 89
  },
  {
    id: '3',
    name: 'Intelligent Automation',
    description: 'Smart automation of repetitive tasks and workflows',
    icon: <Zap className="w-6 h-6" />,
    status: 'active',
    usage: 92,
    accuracy: 91
  },
  {
    id: '4',
    name: 'Sentiment Analysis',
    description: 'Real-time analysis of client and team sentiment',
    icon: <MessageCircle className="w-6 h-6" />,
    status: 'beta',
    usage: 73,
    accuracy: 87
  },
  {
    id: '5',
    name: 'Resource Optimization',
    description: 'AI-driven resource allocation and optimization',
    icon: <Users className="w-6 h-6" />,
    status: 'active',
    usage: 89,
    accuracy: 93
  },
  {
    id: '6',
    name: 'Risk Assessment',
    description: 'Intelligent risk identification and mitigation strategies',
    icon: <Shield className="w-6 h-6" />,
    status: 'beta',
    usage: 68,
    accuracy: 85
  }
];

const aiInsights: AIInsight[] = [
  {
    id: '1',
    title: 'Project Timeline Optimization',
    description: 'AI analysis suggests 15% timeline compression is possible for the E-commerce project through parallel development and resource optimization.',
    type: 'positive',
    impact: 'high',
    confidence: 0.91,
    data: { compression: 15, savings: '2 weeks', risk: 'low' },
    createdAt: '2025-01-27 16:00'
  },
  {
    id: '2',
    title: 'Resource Allocation Warning',
    description: 'Current resource allocation shows 23% underutilization in the Mobile App project, indicating potential efficiency improvements.',
    type: 'warning',
    impact: 'medium',
    confidence: 0.87,
    data: { underutilization: 23, potentialSavings: '$8,500', timeframe: '2 weeks' },
    createdAt: '2025-01-27 15:45'
  },
  {
    id: '3',
    title: 'Client Satisfaction Trend',
    description: 'Client satisfaction scores have increased by 12% over the last quarter, with AI-powered communication contributing to 8% of this improvement.',
    type: 'positive',
    impact: 'high',
    confidence: 0.94,
    data: { improvement: 12, aiContribution: 8, trend: 'positive' },
    createdAt: '2025-01-27 15:30'
  }
];

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'completed': 'from-blue-500 to-cyan-500',
  'archived': 'from-gray-500 to-gray-600'
};

const priorityColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-orange-500',
  'critical': 'bg-red-500'
};

const insightTypeColors = {
  'positive': 'from-green-500 to-emerald-500',
  'warning': 'from-yellow-500 to-orange-500',
  'critical': 'from-red-500 to-pink-500',
  'info': 'from-blue-500 to-cyan-500'
};

const actionStatusColors = {
  'pending': 'from-gray-500 to-gray-600',
  'executing': 'from-yellow-500 to-orange-500',
  'completed': 'from-green-500 to-emerald-500',
  'failed': 'from-red-500 to-pink-500'
};

const AdvancedAIAssistant: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'conversations' | 'insights' | 'features'>('overview');
  const [selectedConversation, setSelectedConversation] = useState<AIConversation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredConversations = aiConversations.filter(conversation => {
    const matchesSearch = conversation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conversation.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || conversation.type === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const filteredInsights = aiInsights.filter(insight => {
    return insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           insight.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case 'archived':
        return <Clock className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <CheckCircle className="w-6 h-6 text-white" />;
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-white" />;
      case 'critical':
        return <AlertCircle className="w-6 h-6 text-white" />;
      default:
        return <Activity className="w-6 h-6 text-white" />;
    }
  };

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
            AI Assistant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered assistant with intelligent automation, natural language processing, 
            and smart recommendations to enhance productivity and decision-making.
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
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+18%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{aiConversations.length}</h3>
            <p className="text-gray-400 text-sm">Active Sessions</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+12%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{aiFeatures.length}</h3>
            <p className="text-gray-400 text-sm">AI Features</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+25%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{aiInsights.length}</h3>
            <p className="text-gray-400 text-sm">AI Insights</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">91%</h3>
            <p className="text-gray-400 text-sm">Accuracy Rate</p>
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
          {(['overview', 'conversations', 'insights', 'features'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Bot className="w-4 h-4 inline mr-2" />}
              {view === 'conversations' && <MessageCircle className="w-4 h-4 inline mr-2" />}
              {view === 'insights' && <Lightbulb className="w-4 h-4 inline mr-2" />}
              {view === 'features' && <Sparkles className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search conversations, insights, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {selectedView === 'conversations' && (
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              >
                <option value="all">All Types</option>
                <option value="chat">Chat</option>
                <option value="task">Task</option>
                <option value="analysis">Analysis</option>
                <option value="recommendation">Recommendation</option>
              </select>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings className="w-4 h-4" />
              AI Settings
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Session
            </motion.button>
          </div>
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
                {/* AI Features Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">AI Capabilities</h3>
                  {aiFeatures.slice(0, 3).map((feature) => (
                    <motion.div
                      key={feature.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-white font-semibold">{feature.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${feature.status === 'active' ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} rounded-full text-white text-xs font-medium`}>
                              {feature.status}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-400">Usage: <span className="text-white">{feature.usage}%</span></span>
                            <span className="text-gray-400">Accuracy: <span className="text-white">{feature.accuracy}%</span></span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent AI Insights */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Recent AI Insights</h3>
                  {aiInsights.slice(0, 3).map((insight) => (
                    <motion.div
                      key={insight.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-xl flex items-center justify-center`}>
                          {getInsightIcon(insight.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-white font-semibold">{insight.title}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-full text-white text-xs font-medium`}>
                              {insight.impact} impact
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Confidence: <span className="text-white">{(insight.confidence * 100).toFixed(0)}%</span></span>
                            <span className="text-gray-400 text-xs">{insight.createdAt}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'insights' && (
            <motion.div
              key="insights"
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
                className="space-y-6"
              >
                {filteredInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-xl flex items-center justify-center`}>
                        {getInsightIcon(insight.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{insight.title}</h3>
                          <div className={`px-2 py-1 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-full text-white text-xs font-medium`}>
                            {insight.impact} impact
                          </div>
                          <div className="text-sm text-gray-400">
                            Confidence: {(insight.confidence * 100).toFixed(0)}%
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{insight.description}</p>
                        
                        <div className="bg-gray-800/30 rounded-lg p-4 mb-4">
                          <div className="text-sm text-gray-400 mb-2">Key Data</div>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(insight.data).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                                <div className="text-white font-medium">{String(value)}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          Generated on {insight.createdAt}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
              Ready to Experience AI-Powered Intelligence?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you leverage advanced AI capabilities for intelligent automation, 
              predictive analytics, and smart decision-making.
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

export default AdvancedAIAssistant;