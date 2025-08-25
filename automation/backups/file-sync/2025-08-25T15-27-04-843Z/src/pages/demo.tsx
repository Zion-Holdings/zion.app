import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  Grid3X3,
  TrendingUp,
  Zap,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { AISearch } from '../components/ui/ai-search';
import { DataVisualization } from '../components/ui/data-visualization';
import { AnalyticsDashboard } from '../components/ui/analytics-dashboard';
import { AIChatAssistant } from '../components/ui/ai-chat-assistant';
import { InteractiveTimeline } from '../components/ui/interactive-timeline';
import { Card3DGallery } from '../components/ui/3d-card-gallery';
import { PerformanceMonitor } from '../components/ui/performance-monitor';
import AccessibilityPanel from '../components/ui/accessibility-panel';

// Mock data for the timeline
const mockTimelineEvents = [
  {
    id: '1',
    title: 'AI Platform Launch',
    description: 'Successfully launched our AI-powered business intelligence platform',
    date: '2024-01-15',
    status: 'completed' as const,
    category: 'AI & ML',
    priority: 'high' as const,
    duration: '2 weeks',
    participants: ['Team Alpha', 'Team Beta'],
    tags: ['AI', 'Launch', 'Platform'],
    metadata: {
      progress: 100,
      dependencies: [],
      impact: 'high' as const,
      verified: true,
      featured: true
    }
  },
  {
    id: '2',
    title: 'Cybersecurity Framework',
    description: 'Implementing advanced cybersecurity measures across all systems',
    date: '2024-01-20',
    status: 'in-progress' as const,
    category: 'Cybersecurity',
    priority: 'critical' as const,
    duration: '4 weeks',
    participants: ['Security Team', 'DevOps'],
    tags: ['Security', 'Framework', 'Implementation'],
    metadata: {
      progress: 65,
      dependencies: ['Infrastructure Setup'],
      impact: 'high' as const,
      verified: true,
      featured: false
    }
  },
  {
    id: '3',
    title: 'Cloud Migration',
    description: 'Migrating legacy systems to cloud infrastructure',
    date: '2024-02-01',
    status: 'upcoming' as const,
    category: 'Cloud',
    priority: 'medium' as const,
    duration: '6 weeks',
    participants: ['Infrastructure Team', 'Development'],
    tags: ['Cloud', 'Migration', 'Infrastructure'],
    metadata: {
      progress: 0,
      dependencies: ['Cybersecurity Framework'],
      impact: 'medium' as const,
      verified: false,
      featured: false
    }
  },
  {
    id: '4',
    title: 'Research Milestone',
    description: 'Breakthrough in quantum computing research',
    date: '2024-02-15',
    status: 'milestone' as const,
    category: 'Research',
    priority: 'high' as const,
    duration: '1 week',
    participants: ['Research Team', 'Scientists'],
    tags: ['Research', 'Quantum', 'Breakthrough'],
    metadata: {
      progress: 100,
      dependencies: [],
      impact: 'high' as const,
      verified: true,
      featured: true
    }
  }
];

// Mock data for the 3D card gallery
const mockCardItems = [
  {
    id: '1',
    title: 'AI-Powered Analytics Suite',
    description: 'Advanced business intelligence platform with machine learning capabilities for real-time insights and predictive analytics.',
    image: '/api/placeholder/400/300',
    category: 'AI & ML',
    tags: ['Analytics', 'Machine Learning', 'Business Intelligence', 'Real-time'],
    rating: 4.8,
    reviews: 1247,
    price: '$2,500/month',
    status: 'active' as const,
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'API integration',
      'Multi-tenant support'
    ],
    metadata: {
      lastUpdated: '2024-01-15',
      version: '2.1.0',
      downloads: 15420,
      verified: true,
      featured: true,
      complexity: 'advanced' as const
    },
    actions: [
      {
        label: 'Try Demo',
        icon: Play,
        action: () => {/* Demo clicked */},
        variant: 'default' as const
      },
      {
        label: 'Documentation',
        icon: BookOpen,
        action: () => {/* Docs clicked */},
        variant: 'outline' as const
      }
    ]
  },
  {
    id: '2',
    title: 'Cybersecurity Framework',
    description: 'Comprehensive security solution with threat detection, vulnerability assessment, and automated response systems.',
    image: '/api/placeholder/400/300',
    category: 'Cybersecurity',
    tags: ['Security', 'Threat Detection', 'Automation', 'Compliance'],
    rating: 4.9,
    reviews: 892,
    price: '$1,800/month',
    status: 'active' as const,
    features: [
      'Real-time threat detection',
      'Automated incident response',
      'Compliance reporting',
      'Penetration testing',
      'Security training modules'
    ],
    metadata: {
      lastUpdated: '2024-01-20',
      version: '1.5.2',
      downloads: 8920,
      verified: true,
      featured: true,
      complexity: 'expert' as const
    },
    actions: [
      {
        label: 'Security Scan',
        icon: Shield,
        action: () => {/* Scan clicked */},
        variant: 'default' as const
      },
      {
        label: 'Learn More',
        icon: Info,
        action: () => {/* Learn clicked */},
        variant: 'outline' as const
      }
    ]
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Platform',
    description: 'Scalable cloud solutions with automated deployment, monitoring, and optimization for modern applications.',
    image: '/api/placeholder/400/300',
    category: 'Cloud',
    tags: ['Cloud', 'Infrastructure', 'Automation', 'Scalability'],
    rating: 4.7,
    reviews: 1567,
    price: '$3,200/month',
    status: 'beta' as const,
    features: [
      'Auto-scaling infrastructure',
      'Multi-cloud support',
      'Cost optimization',
      'DevOps automation',
      'Performance monitoring'
    ],
    metadata: {
      lastUpdated: '2024-01-18',
      version: '1.0.0-beta',
      downloads: 5670,
      verified: true,
      featured: false,
      complexity: 'intermediate' as const
    },
    actions: [
      {
        label: 'Start Trial',
        icon: Play,
        action: () => {/* Trial clicked */},
        variant: 'default' as const
      },
      {
        label: 'Pricing',
        icon: DollarSign,
        action: () => {/* Pricing clicked */},
        variant: 'outline' as const
      }
    ]
  },
  {
    id: '4',
    title: 'Development Toolkit',
    description: 'Comprehensive development environment with code analysis, testing automation, and deployment tools.',
    image: '/api/placeholder/400/300',
    category: 'Development',
    tags: ['Development', 'Testing', 'Automation', 'Deployment'],
    rating: 4.6,
    reviews: 2341,
    price: '$950/month',
    status: 'active' as const,
    features: [
      'Code quality analysis',
      'Automated testing',
      'CI/CD pipelines',
      'Code review tools',
      'Performance profiling'
    ],
    metadata: {
      lastUpdated: '2024-01-12',
      version: '3.2.1',
      downloads: 18920,
      verified: true,
      featured: false,
      complexity: 'beginner' as const
    },
    actions: [
      {
        label: 'Download',
        icon: Download,
        action: () => {/* Download clicked */},
        variant: 'default' as const
      },
      {
        label: 'Examples',
        icon: FileText,
        action: () => {/* Examples clicked */},
        variant: 'outline' as const
      }
    ]
  }
];

// Mock chart data
const mockChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6, 182, 212, 0.1)'
    },
    {
      label: 'Users',
      data: [1000, 1500, 1200, 2000, 1800, 2500],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 244, 0.1)'
    }
  ]
};

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Grid3X3 },
    { id: 'search', label: 'AI Search', icon: Search },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'chat', label: 'AI Chat', icon: MessageSquare },
    { id: 'gallery', label: '3D Gallery', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Header */}
      <div className="bg-zion-blue-dark/80 backdrop-blur-md border-b border-zion-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-zinc-300">Advanced UI Components Demo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                Demo Mode
              </Badge>
              <Button variant="outline" className="border-zion-blue-light/30 text-zinc-300 hover:text-white">
                <Zap className="w-4 h-4 mr-2" />
                Live Preview
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-zion-blue-dark/60 backdrop-blur-sm border-b border-zion-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-zion-cyan text-zion-blue-dark'
                      : 'text-zinc-400 hover:text-white hover:bg-zion-blue/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Performance Monitor */}
        <PerformanceMonitor 
          enabled={true}
          showDetails={true}
          autoRefresh={true}
          refreshInterval={2000}
          onAlert={(_metric, _value, _threshold) => {/* Alert logged for demonstration */}}
        />
        
        {/* Accessibility Panel */}
        <AccessibilityPanel 
          enabled={true}
          onSettingsChange={(_settings) => {/* Settings changed logged for demonstration */}}
        />
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Welcome to Zion Tech Group
                </h2>
                <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                  Experience our cutting-edge UI components built with modern technologies including React, TypeScript, Tailwind CSS, and Framer Motion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'AI-Powered Search',
                    description: 'Advanced search with AI suggestions, voice input, and intelligent filtering',
                    icon: Search,
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'Analytics Dashboard',
                    description: 'Real-time metrics and performance monitoring with interactive charts',
                    icon: BarChart3,
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'Interactive Timeline',
                    description: 'Project management with multiple view modes and real-time updates',
                    icon: Calendar,
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'AI Chat Assistant',
                    description: 'Intelligent chat interface with voice input and smart suggestions',
                    icon: MessageSquare,
                    color: 'from-orange-500 to-red-500'
                  },
                  {
                    title: '3D Card Gallery',
                    description: 'Immersive card display with tilt effects and multiple view modes',
                    icon: Sparkles,
                    color: 'from-indigo-500 to-purple-500'
                  },
                  {
                    title: 'Data Visualization',
                    description: 'Canvas-based charts with real-time updates and export capabilities',
                    icon: TrendingUp,
                    color: 'from-teal-500 to-cyan-500'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 group">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-zinc-300 text-sm">{feature.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'search' && (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">AI-Powered Search</h2>
                <p className="text-zinc-300">Experience intelligent search with voice input, AI suggestions, and advanced filtering</p>
              </div>
              
              <AISearch 
                enabled={true}
                placeholder="Search for AI services, talent, or companies..."
                        onSearch={(_query, _filters) => {/* Search logged for demonstration */}}
        onResultClick={(_result) => {/* Result clicked logged for demonstration */}}
              />
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h2>
                <p className="text-zinc-300">Real-time business metrics and performance monitoring</p>
              </div>
              
              <AnalyticsDashboard enabled={true} />
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Data Visualization</h2>
                <p className="text-zinc-300">Interactive charts with real-time data and export capabilities</p>
              </div>
              
              <DataVisualization 
                enabled={true}
                data={mockChartData}
              />
            </motion.div>
          )}

          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Interactive Timeline</h2>
                <p className="text-zinc-300">Track project milestones and progress with multiple view modes</p>
              </div>
              
              <InteractiveTimeline 
                enabled={true}
                events={mockTimelineEvents}
                        onEventClick={(_event) => {/* Event clicked logged for demonstration */}}
        onStatusChange={(_eventId, _status) => {/* Status changed logged for demonstration */}}
              />
            </motion.div>
          )}

          {activeTab === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">AI Chat Assistant</h2>
                <p className="text-zinc-300">Intelligent chat interface with voice input and smart suggestions</p>
              </div>
              
              <AIChatAssistant 
                enabled={true}
                        onMessageSend={(_message) => {/* Message sent logged for demonstration */}}
        onAssistantResponse={(_response) => {/* Assistant response logged for demonstration */}}
              />
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">3D Card Gallery</h2>
                <p className="text-zinc-300">Immersive card display with tilt effects and multiple view modes</p>
              </div>
              
              <Card3DGallery 
                enabled={true}
                items={mockCardItems}
                columns={3}
                        onCardClick={(_item) => {/* Card clicked logged for demonstration */}}
        onAction={(_itemId, _action) => {/* Action logged for demonstration */}}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Missing icon imports
import { Play, BookOpen, Info, Download, FileText, DollarSign } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';