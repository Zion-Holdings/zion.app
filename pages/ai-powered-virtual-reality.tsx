import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface VRExperience {
  id: string;
  name: string;
  type: 'immersive-gaming' | 'virtual-tours' | 'training-simulation' | 'social-vr' | 'virtual-events' | 'virtual-commerce';
  status: 'active' | 'inactive' | 'testing' | 'error' | 'updating';
  location: string;
  lastUpdated: Date;
  userCount: number;
  aiEnabled: boolean;
  autoOptimize: boolean;
  version: string;
  performance: {
    frameRate: number;
    latency: number;
    immersion: number;
    userSatisfaction: number;
  };
  features: {
    type: string;
    status: 'active' | 'inactive' | 'error';
    data: any;
  }[];
}

interface VRSession {
  id: string;
  experienceId: string;
  sessionType: 'gaming' | 'exploration' | 'training' | 'social' | 'event' | 'shopping';
  status: 'active' | 'completed' | 'failed' | 'paused' | 'queued';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  startTime: Date;
  endTime?: Date;
  duration: number;
  aiAssisted: boolean;
  parameters: {
    target: string;
    quality: number;
    immersion: number;
    interactivity: boolean;
  };
  metrics: {
    completionRate: number;
    immersion: number;
    engagement: number;
    satisfactionScore: number;
  };
}

interface VRAutomation {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'testing' | 'error';
  experienceId: string;
  triggers: {
    condition: string;
    threshold: number;
    sensor: string;
  }[];
  actions: {
    experience: string;
    action: string;
    parameters: any;
  }[];
  lastExecuted: Date;
  executionCount: number;
  successRate: number;
  aiOptimized: boolean;
}

interface VRAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const AIPoweredVirtualRealityPage: NextPage = () => {
  const [experiences, setExperiences] = useState<VRExperience[]>([]);
  const [sessions, setSessions] = useState<VRSession[]>([]);
  const [automations, setAutomations] = useState<VRAutomation[]>([]);
  const [analytics, setAnalytics] = useState<VRAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'experiences' | 'sessions' | 'automations' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'users' | 'performance' | 'status'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered VR data
    setTimeout(() => {
      const mockExperiences: VRExperience[] = [
        {
          id: '1',
          name: 'Zion Immersive Gaming',
          type: 'immersive-gaming',
          status: 'active',
          location: 'Gaming Platform',
          lastUpdated: new Date('2024-01-20T15:30:00'),
          userCount: 2156,
          aiEnabled: true,
          autoOptimize: true,
          version: '2.1.0',
          performance: {
            frameRate: 90,
            latency: 8,
            immersion: 98.5,
            userSatisfaction: 96.2
          },
          features: [
            {
              type: 'haptic_feedback',
              status: 'active',
              data: { intensity: 'adaptive', zones: 16 }
            },
            {
              type: 'spatial_audio',
              status: 'active',
              data: { channels: 8, quality: '3D' }
            },
            {
              type: 'motion_tracking',
              status: 'active',
              data: { precision: '±1mm', range: '360°' }
            }
          ]
        },
        {
          id: '2',
          name: 'Zion Virtual Tours',
          type: 'virtual-tours',
          status: 'active',
          location: 'Travel Platform',
          lastUpdated: new Date('2024-01-20T15:25:00'),
          userCount: 1247,
          aiEnabled: true,
          autoOptimize: true,
          version: '1.8.2',
          performance: {
            frameRate: 60,
            latency: 15,
            immersion: 94.7,
            userSatisfaction: 92.5
          },
          features: [
            {
              type: '360_camera',
              status: 'active',
              data: { resolution: '8K', fps: 60 }
            },
            {
              type: 'environment_mapping',
              status: 'active',
              data: { coverage: '100%', detail: 'ultra' }
            },
            {
              type: 'interactive_elements',
              status: 'active',
              data: { hotspots: 50, info: 'rich' }
            }
          ]
        },
        {
          id: '3',
          name: 'Zion Training Simulation',
          type: 'training-simulation',
          status: 'testing',
          location: 'Corporate Training',
          lastUpdated: new Date('2024-01-20T15:20:00'),
          userCount: 678,
          aiEnabled: true,
          autoOptimize: false,
          version: '3.0.1',
          performance: {
            frameRate: 75,
            latency: 12,
            immersion: 96.3,
            userSatisfaction: 89.9
          },
          features: [
            {
              type: 'scenario_builder',
              status: 'active',
              data: { scenarios: 25, complexity: 'high' }
            },
            {
              type: 'performance_tracking',
              status: 'active',
              data: { metrics: 15, real_time: true }
            },
            {
              type: 'ai_coaching',
              status: 'active',
              data: { feedback: 'instant', adaptive: true }
            }
          ]
        },
        {
          id: '4',
          name: 'Zion Social VR',
          type: 'social-vr',
          status: 'active',
          location: 'Social Platform',
          lastUpdated: new Date('2024-01-20T15:15:00'),
          userCount: 892,
          aiEnabled: false,
          autoOptimize: true,
          version: '1.2.0',
          performance: {
            frameRate: 45,
            latency: 20,
            immersion: 88.4,
            userSatisfaction: 85.6
          },
          features: [
            {
              type: 'avatar_system',
              status: 'error',
              data: { customization: 100, quality: 'high' }
            },
            {
              type: 'voice_chat',
              status: 'inactive',
              data: { quality: 'HD', noise_reduction: true }
            }
          ]
        },
        {
          id: '5',
          name: 'Zion Virtual Events',
          type: 'virtual-events',
          status: 'error',
          location: 'Event Platform',
          lastUpdated: new Date('2024-01-20T14:45:00'),
          userCount: 0,
          aiEnabled: false,
          autoOptimize: false,
          version: '0.9.1',
          performance: {
            frameRate: 0,
            latency: 0,
            immersion: 0,
            userSatisfaction: 0
          },
          features: [
            {
              type: 'stage_system',
              status: 'error',
              data: { capacity: 1000, quality: 'low' }
            },
            {
              type: 'audience_interaction',
              status: 'error',
              data: { features: 5, responsiveness: 'poor' }
            }
          ]
        }
      ];

      const mockSessions: VRSession[] = [
        {
          id: '1',
          experienceId: '1',
          sessionType: 'gaming',
          status: 'active',
          priority: 'high',
          startTime: new Date('2024-01-20T14:00:00'),
          duration: 45,
          aiAssisted: true,
          parameters: {
            target: 'Immersive Gaming',
            quality: 95,
            immersion: 98,
            interactivity: true
          },
          metrics: {
            completionRate: 67,
            immersion: 98.5,
            engagement: 96.2,
            satisfactionScore: 94.8
          }
        },
        {
          id: '2',
          experienceId: '2',
          sessionType: 'exploration',
          status: 'completed',
          priority: 'medium',
          startTime: new Date('2024-01-20T13:00:00'),
          endTime: new Date('2024-01-20T13:30:00'),
          duration: 30,
          aiAssisted: true,
          parameters: {
            target: 'Virtual Tour',
            quality: 88,
            immersion: 94,
            interactivity: true
          },
          metrics: {
            completionRate: 100,
            immersion: 94.7,
            engagement: 92.5,
            satisfactionScore: 91.3
          }
        },
        {
          id: '3',
          experienceId: '3',
          sessionType: 'training',
          status: 'queued',
          priority: 'low',
          startTime: new Date('2024-01-20T16:00:00'),
          duration: 0,
          aiAssisted: true,
          parameters: {
            target: 'Training Simulation',
            quality: 92,
            immersion: 96,
            interactivity: true
          },
          metrics: {
            completionRate: 0,
            immersion: 0,
            engagement: 0,
            satisfactionScore: 0
          }
        }
      ];

      const mockAutomations: VRAutomation[] = [
        {
          id: '1',
          name: 'Smart Gaming Optimization',
          description: 'AI-powered gaming optimization with real-time performance tuning and immersive enhancement',
          status: 'active',
          experienceId: '1',
          triggers: [
            {
              condition: 'performance_drop',
              threshold: 30,
              sensor: 'fps_monitor'
            },
            {
              condition: 'user_interaction',
              threshold: 1,
              sensor: 'motion_sensor'
            }
          ],
          actions: [
            {
              experience: 'Zion Immersive Gaming',
              action: 'optimize_performance',
              parameters: { quality: 'adaptive', fps: 90 }
            },
            {
              experience: 'Zion Immersive Gaming',
              action: 'enhance_immersion',
              parameters: { haptics: 'intense', audio: '3D' }
            }
          ],
          lastExecuted: new Date('2024-01-20T15:30:00'),
          executionCount: 2156,
          successRate: 96.5,
          aiOptimized: true
        },
        {
          id: '2',
          name: 'Virtual Tour Enhancement',
          description: 'Intelligent virtual tour enhancement with AI-powered environment mapping and interactive elements',
          status: 'active',
          experienceId: '2',
          triggers: [
            {
              condition: 'user_movement',
              threshold: 1,
              sensor: 'position_tracker'
            },
            {
              condition: 'interaction_request',
              threshold: 1,
              sensor: 'gesture_sensor'
            }
          ],
          actions: [
            {
              experience: 'Zion Virtual Tours',
              action: 'update_environment',
              parameters: { detail: 'ultra', coverage: '100%' }
            },
            {
              experience: 'Zion Virtual Tours',
              action: 'activate_hotspots',
              parameters: { info: 'rich', interactivity: 'high' }
            }
          ],
          lastExecuted: new Date('2024-01-20T15:25:00'),
          executionCount: 1247,
          successRate: 97.2,
          aiOptimized: true
        },
        {
          id: '3',
          name: 'Training Simulation Assistant',
          description: 'AI-powered training simulation with intelligent scenario building and performance tracking',
          status: 'testing',
          experienceId: '3',
          triggers: [
            {
              condition: 'scenario_start',
              threshold: 1,
              sensor: 'session_tracker'
            },
            {
              condition: 'performance_alert',
              threshold: 70,
              sensor: 'performance_monitor'
            }
          ],
          actions: [
            {
              experience: 'Zion Training Simulation',
              action: 'build_scenario',
              parameters: { complexity: 'adaptive', scenarios: 25 }
            },
            {
              experience: 'Zion Training Simulation',
              action: 'track_performance',
              parameters: { metrics: 15, real_time: true }
            }
          ],
          lastExecuted: new Date('2024-01-20T15:20:00'),
          executionCount: 678,
          successRate: 89.1,
          aiOptimized: true
        }
      ];

      const mockAnalytics: VRAnalytics[] = [
        {
          id: '1',
          metric: 'VR Immersion',
          current: 96.8,
          target: 98.0,
          improvement: -1.2,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '2',
          metric: 'User Engagement',
          current: 94.5,
          target: 96.0,
          improvement: -1.6,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '3',
          metric: 'Frame Rate',
          current: 97.8,
          target: 99.0,
          improvement: -1.2,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '4',
          metric: 'AI Optimization',
          current: 78.3,
          target: 85.0,
          improvement: -7.9,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '5',
          metric: 'User Satisfaction',
          current: 91.7,
          target: 94.0,
          improvement: -2.4,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '6',
          metric: 'Session Completion',
          current: 89.2,
          target: 92.0,
          improvement: -3.0,
          trend: 'down',
          period: 'This Month'
        }
      ];

      setExperiences(mockExperiences);
      setSessions(mockSessions);
      setAutomations(mockAutomations);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredExperiences = useMemo(() => {
    let filtered = experiences.filter(experience => {
      if (filterType !== 'all' && experience.type !== filterType) return false;
      if (filterStatus !== 'all' && experience.status !== filterStatus) return false;
      if (searchTerm && !experience.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'users':
          return b.userCount - a.userCount;
        case 'performance':
          return b.performance.immersion - a.performance.immersion;
        case 'status':
          return a.status.localeCompare(b.status);
        case 'recent':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

    return filtered;
  }, [experiences, filterType, filterStatus, searchTerm, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'inactive': return 'text-gray-400 bg-gray-500/20';
      case 'testing': return 'text-blue-400 bg-blue-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      case 'updating': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'immersive-gaming': return '🎮';
      case 'virtual-tours': return '🗺️';
      case 'training-simulation': return '🎓';
      case 'social-vr': return '👥';
      case 'virtual-events': return '🎪';
      case 'virtual-commerce': return '🛒';
      default: return '🥽';
    }
  };

  const getSessionStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-blue-400 bg-blue-500/20';
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'queued': return 'text-yellow-400 bg-yellow-500/20';
      case 'paused': return 'text-orange-400 bg-orange-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getSessionTypeIcon = (type: string) => {
    switch (type) {
      case 'gaming': return '🎮';
      case 'exploration': return '🔍';
      case 'training': return '📚';
      case 'social': return '👥';
      case 'event': return '🎪';
      case 'shopping': return '🛒';
      default: return '🥽';
    }
  };

  const getAutomationStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'inactive': return 'text-gray-400 bg-gray-500/20';
      case 'testing': return 'text-blue-400 bg-blue-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getPerformanceColor = (value: number) => {
    if (value > 90) return 'text-green-400';
    if (value > 75) return 'text-yellow-400';
    if (value > 60) return 'text-orange-400';
    return 'text-red-400';
  };

  if (loading) {
    return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Virtual Reality...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>AI-Powered Virtual Reality - Zion</title>
        <meta name="description" content="Intelligent VR experiences, immersive environments, virtual worlds, and AI-driven VR optimization" />
        <meta name="keywords" content="AI VR, virtual reality, immersive environments, virtual worlds, Zion" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/ai-powered-augmented-reality" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                AR
              </Link>
              <Link href="/ai-powered-robotics" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Robotics
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Virtual Reality
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent VR experiences, immersive environments, virtual worlds, 
            and AI-driven VR optimization with advanced VR capabilities.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'experiences', name: 'Experiences', icon: '🥽' },
              { id: 'sessions', name: 'Sessions', icon: '🎮' },
              { id: 'automations', name: 'Automations', icon: '🔗' },
              { id: 'analytics', name: 'Analytics', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Overview */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {analytics.map((metric) => (
              <div key={metric.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                  <span className="text-2xl">{getTrendIcon(metric.trend)}</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">{metric.current}</div>
                  <p className="text-sm text-gray-400">Target: {metric.target}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className={`${metric.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.improvement > 0 ? '+' : ''}{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400">{metric.period}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VR Experiences */}
        {selectedView === 'experiences' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((experience) => (
              <div key={experience.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getTypeIcon(experience.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{experience.name}</h3>
                      <p className="text-gray-300 text-sm capitalize">{experience.type.replace('-', ' ')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(experience.status)}`}>
                      {experience.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${experience.aiEnabled ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {experience.aiEnabled ? 'AI ENABLED' : 'AI DISABLED'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Location:</span>
                    <span className="text-sm text-white">{experience.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Users:</span>
                    <span className="text-sm font-semibold text-purple-400">
                      {experience.userCount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Frame Rate</p>
                    <p className={`text-lg font-semibold ${getPerformanceColor(experience.performance.frameRate)}`}>
                      {experience.performance.frameRate} FPS
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Latency</p>
                    <p className={`text-lg font-semibold ${getPerformanceColor(100 - experience.performance.latency)}`}>
                      {experience.performance.latency}ms
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Immersion</p>
                    <p className={`text-lg font-semibold ${getPerformanceColor(experience.performance.immersion)}`}>
                      {experience.performance.immersion}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Satisfaction</p>
                    <p className={`text-lg font-semibold ${getPerformanceColor(experience.performance.userSatisfaction)}`}>
                      {experience.performance.userSatisfaction}%
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Features:</p>
                  <div className="space-y-1">
                    {experience.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">{feature.type.replace('_', ' ')}</span>
                        <span className={`px-4 py-3 rounded text-xs ${feature.status === 'active' ? 'text-green-400 bg-green-500/20' : feature.status === 'error' ? 'text-red-400 bg-red-500/20' : 'text-gray-400 bg-gray-500/20'}`}>
                          {feature.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Auto-Optimize: {experience.autoOptimize ? '✅' : '❌'}</span>
                  <span>Last Updated: {experience.lastUpdated.toLocaleString()}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    Launch Experience
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Configure
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VR Sessions */}
        {selectedView === 'sessions' && (
          <div className="space-y-6">
            {sessions.map((session) => (
              <div key={session.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getSessionTypeIcon(session.sessionType)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{session.sessionType.toUpperCase()}</h3>
                      <p className="text-gray-300 text-sm">Experience ID: {session.experienceId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getSessionStatusColor(session.status)}`}>
                      {session.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${session.aiAssisted ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {session.aiAssisted ? 'AI ASSISTED' : 'MANUAL'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Target</p>
                    <p className="text-lg font-semibold text-white">{session.parameters.target}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Quality</p>
                    <p className="text-lg font-semibold text-green-400">{session.parameters.quality}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Immersion</p>
                    <p className="text-lg font-semibold text-blue-400">{session.parameters.immersion}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Interactivity</p>
                    <p className="text-lg font-semibold text-orange-400">{session.parameters.interactivity ? '✅' : '❌'}</p>
                  </div>
                </div>

                {session.status === 'active' || session.status === 'completed' ? (
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Session Metrics:</p>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Completion</p>
                        <p className="text-green-400 font-semibold">{session.metrics.completionRate}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Immersion</p>
                        <p className="text-blue-400 font-semibold">{session.metrics.immersion}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Engagement</p>
                        <p className="text-orange-400 font-semibold">{session.metrics.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Satisfaction</p>
                        <p className="text-purple-400 font-semibold">{session.metrics.satisfactionScore}%</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Started: {session.startTime.toLocaleString()}</span>
                  {session.endTime && (
                    <span>Completed: {session.endTime.toLocaleString()}</span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Details
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    {session.status === 'active' ? 'Pause' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VR Automations */}
        {selectedView === 'automations' && (
          <div className="space-y-6">
            {automations.map((automation) => (
              <div key={automation.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{automation.name}</h3>
                    <p className="text-gray-300 text-sm">{automation.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getAutomationStatusColor(automation.status)}`}>
                      {automation.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${automation.aiOptimized ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {automation.aiOptimized ? 'AI OPTIMIZED' : 'MANUAL'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Executions</p>
                    <p className="text-lg font-semibold text-white">{automation.executionCount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-lg font-semibold text-green-400">{automation.successRate}%</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Triggers:</p>
                  <div className="space-y-2">
                    {automation.triggers.map((trigger, index) => (
                      <div key={index} className="bg-white/5 rounded p-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white">{trigger.condition}</span>
                          <span className="text-xs text-gray-400">Sensor: {trigger.sensor}</span>
                        </div>
                        <p className="text-xs text-gray-400">Threshold: {trigger.threshold}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Actions:</p>
                  <div className="space-y-2">
                    {automation.actions.map((action, index) => (
                      <div key={index} className="bg-white/5 rounded p-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white">{action.experience}</span>
                          <span className="text-xs text-gray-400">{action.action}</span>
                        </div>
                        <p className="text-xs text-gray-400">Parameters: {JSON.stringify(action.parameters)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Last Executed: {automation.lastExecuted.toLocaleString()}</span>
                  <span>Experience ID: {automation.experienceId}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Logs
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Edit Automation
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Immerse with VR Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent virtual reality technology to create immersive experiences, 
              virtual worlds, and AI-driven VR optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Create Experience
              </button>
              <Link href="/service-marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredVirtualRealityPage 