import type { NextPage }  from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link  from 'next/link';
import { Home, Search, User }  from 'lucide-react';

interface ARExperience {
  id: string;
  name: string;
  type: 'product-visualization' | 'virtual-try-on' | 'spatial-navigation' | 'interactive-training' | 'virtual-meeting' | 'gaming';
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
    accuracy: number;
    userSatisfaction: number;
  };
  features: {
    type: string;
    status: 'active' | 'inactive' | 'error';
    data: any;
  }[];
}

interface ARAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const AIPoweredAugmentedRealityPage: NextPage = () => {
  const [experiences, setExperiences] = useState<ARExperience[]>([]);
  const [analytics, setAnalytics] = useState<ARAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'experiences' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'users' | 'performance' | 'status'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockExperiences: ARExperience[] = [
        {
          id: '1',
          name: 'Zion Product Visualizer',
          type: 'product-visualization',
          status: 'active',
          location: 'E-commerce Platform',
          lastUpdated: new Date('2024-01-20T15:30:00'),
          userCount: 1247,
          aiEnabled: true,
          autoOptimize: true,
          version: '2.1.0',
          performance: {
            frameRate: 60,
            latency: 12,
            accuracy: 98.5,
            userSatisfaction: 94.2
          },
          features: [
            {
              type: '3d_rendering',
              status: 'active',
              data: { resolution: '4K', fps: 60 }
            },
            {
              type: 'spatial_tracking',
              status: 'active',
              data: { precision: '±2mm', range: '0-10m' }
            },
            {
              type: 'gesture_recognition',
              status: 'active',
              data: { gestures: 15, accuracy: 95.8 }
            }
          ]
        },
        {
          id: '2',
          name: 'Zion Virtual Try-On',
          type: 'virtual-try-on',
          status: 'active',
          location: 'Fashion Retail',
          lastUpdated: new Date('2024-01-20T15:25:00'),
          userCount: 892,
          aiEnabled: true,
          autoOptimize: true,
          version: '1.8.2',
          performance: {
            frameRate: 45,
            latency: 18,
            accuracy: 96.7,
            userSatisfaction: 91.5
          },
          features: [
            {
              type: 'body_tracking',
              status: 'active',
              data: { joints: 32, accuracy: 94.2 }
            },
            {
              type: 'fabric_simulation',
              status: 'active',
              data: { physics: 'realistic', materials: 50 }
            },
            {
              type: 'lighting_engine',
              status: 'active',
              data: { hdr: true, shadows: 'soft' }
            }
          ]
        },
        {
          id: '3',
          name: 'Zion Spatial Navigator',
          type: 'spatial-navigation',
          status: 'testing',
          location: 'Smart City',
          lastUpdated: new Date('2024-01-20T15:20:00'),
          userCount: 456,
          aiEnabled: true,
          autoOptimize: false,
          version: '3.0.1',
          performance: {
            frameRate: 30,
            latency: 25,
            accuracy: 97.3,
            userSatisfaction: 88.9
          },
          features: [
            {
              type: 'gps_tracking',
              status: 'active',
              data: { accuracy: '±1m', update_rate: '10Hz' }
            },
            {
              type: 'indoor_mapping',
              status: 'active',
              data: { resolution: '5cm', coverage: '100%' }
            },
            {
              type: 'path_planning',
              status: 'active',
              data: { algorithm: 'A*', optimization: 'AI' }
            }
          ]
        }
      ];

      const mockAnalytics: ARAnalytics[] = [
        {
          id: '1',
          metric: 'AR Accuracy',
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
          return b.performance.accuracy - a.performance.accuracy;
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
      case 'product-visualization': return '🛍️';
      case 'virtual-try-on': return '👕';
      case 'spatial-navigation': return '🗺️';
      case 'interactive-training': return '🎓';
      case 'virtual-meeting': return '💻';
      case 'gaming': return '🎮';
      default: return '🥽';
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
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Augmented Reality...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>AI-Powered Augmented Reality - Zion</title>
        <meta name="description" content="Intelligent AR experiences, spatial computing, virtual overlays, and AI-driven AR optimization" />
        <meta name="keywords" content="AI AR, augmented reality, spatial computing, virtual overlays, Zion" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md flex items-center space-x-8">
              <Link href="/ai-powered-robotics" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Robotics
              </Link>
              <Link href="/ai-powered-iot" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                IoT
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md text-5xl font-bold text-white mb-4">
            AI-Powered Augmented Reality
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent AR experiences, spatial computing, virtual overlays, 
            and AI-driven AR optimization with advanced AR capabilities.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'experiences', name: 'Experiences', icon: '🥽' },
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
          <div className="grid grid-cols-1 md grid-cols-3 gap-6 mb-8">
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

        {/* AR Experiences */}
        {selectedView === 'experiences' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
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
                    <p className="text-sm text-gray-400">Accuracy</p>
                    <p className={`text-lg font-semibold ${getPerformanceColor(experience.performance.accuracy)}`}>
                      {experience.performance.accuracy}%
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
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                    Launch Experience
                  </button>
                  <button className="border border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Configure
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
              Experience with AR Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent augmented reality technology to create immersive experiences, 
              spatial computing, and AI-driven AR optimization.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                Create Experience
              </button>
              <Link href="/service-marketplace" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    
        {/* Mobile Navigation */}
        <div className="lg hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="flex justify-around items-center py-2">
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Search className="w-5 h-5" />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredAugmentedRealityPage 