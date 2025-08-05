import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';

interface MLModel {
  id: string;
  name: string;
  type: 'classification' | 'regression' | 'clustering' | 'nlp' | 'computer-vision' | 'recommendation';
  status: 'training' | 'deployed' | 'failed' | 'archived' | 'monitoring';
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  trainingData: number;
  lastUpdated: Date;
  aiOptimized: boolean;
  autoRetrain: boolean;
  version: string;
  performance: {
    latency: number;
    throughput: number;
    errorRate: number;
    cpuUsage: number;
    memoryUsage: number;
  };
}

interface TrainingJob {
  id: string;
  modelName: string;
  type: string;
  status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
  progress: number;
  startTime: Date;
  endTime?: Date;
  dataset: string;
  hyperparameters: {
    learningRate: number;
    batchSize: number;
    epochs: number;
    optimizer: string;
  };
  metrics: {
    loss: number;
    accuracy: number;
    validationAccuracy: number;
  };
  aiAssisted: boolean;
}

interface MLAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const AIPoweredMachineLearningPage: NextPage = () => {
  const [models, setModels] = useState<MLModel[]>([]);
  const [trainingJobs, setTrainingJobs] = useState<TrainingJob[]>([]);
  const [analytics, setAnalytics] = useState<MLAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'models' | 'training' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'accuracy' | 'performance' | 'status'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockModels: MLModel[] = [
        {
          id: '1',
          name: 'Customer Churn Predictor',
          type: 'classification',
          status: 'deployed',
          accuracy: 94.2,
          precision: 91.8,
          recall: 89.5,
          f1Score: 90.6,
          trainingData: 125000,
          lastUpdated: new Date('2024-01-20T15:30:00'),
          aiOptimized: true,
          autoRetrain: true,
          version: '2.1.0',
          performance: {
            latency: 45,
            throughput: 1200,
            errorRate: 0.3,
            cpuUsage: 23,
            memoryUsage: 67
          }
        },
        {
          id: '2',
          name: 'Revenue Forecasting Model',
          type: 'regression',
          status: 'deployed',
          accuracy: 87.3,
          precision: 84.1,
          recall: 86.7,
          f1Score: 85.4,
          trainingData: 89000,
          lastUpdated: new Date('2024-01-20T15:25:00'),
          aiOptimized: true,
          autoRetrain: true,
          version: '1.8.2',
          performance: {
            latency: 32,
            throughput: 1800,
            errorRate: 0.2,
            cpuUsage: 18,
            memoryUsage: 45
          }
        },
        {
          id: '3',
          name: 'Product Recommendation Engine',
          type: 'recommendation',
          status: 'monitoring',
          accuracy: 91.7,
          precision: 89.3,
          recall: 92.1,
          f1Score: 90.7,
          trainingData: 234000,
          lastUpdated: new Date('2024-01-20T15:20:00'),
          aiOptimized: true,
          autoRetrain: false,
          version: '3.0.1',
          performance: {
            latency: 28,
            throughput: 2500,
            errorRate: 0.1,
            cpuUsage: 31,
            memoryUsage: 78
          }
        }
      ];

      const mockTrainingJobs: TrainingJob[] = [
        {
          id: '1',
          modelName: 'Sentiment Analysis Model',
          type: 'nlp',
          status: 'running',
          progress: 67,
          startTime: new Date('2024-01-20T14:00:00'),
          dataset: 'Customer Reviews Dataset',
          hyperparameters: {
            learningRate: 0.001,
            batchSize: 32,
            epochs: 100,
            optimizer: 'Adam'
          },
          metrics: {
            loss: 0.234,
            accuracy: 76.5,
            validationAccuracy: 74.2
          },
          aiAssisted: true
        },
        {
          id: '2',
          modelName: 'Customer Segmentation Model',
          type: 'clustering',
          status: 'completed',
          progress: 100,
          startTime: new Date('2024-01-20T12:00:00'),
          endTime: new Date('2024-01-20T13:30:00'),
          dataset: 'Customer Behavior Dataset',
          hyperparameters: {
            learningRate: 0.01,
            batchSize: 64,
            epochs: 50,
            optimizer: 'SGD'
          },
          metrics: {
            loss: 0.156,
            accuracy: 89.3,
            validationAccuracy: 87.8
          },
          aiAssisted: true
        }
      ];

      const mockAnalytics: MLAnalytics[] = [
        {
          id: '1',
          metric: 'Model Accuracy',
          current: 89.7,
          target: 92.0,
          improvement: -2.5,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '2',
          metric: 'Training Speed',
          current: 2.8,
          target: 2.0,
          improvement: -40.0,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '3',
          metric: 'Deployment Success',
          current: 94.5,
          target: 96.0,
          improvement: -1.6,
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
        }
      ];

      setModels(mockModels);
      setTrainingJobs(mockTrainingJobs);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredModels = useMemo(() => {
    let filtered = models.filter(model => {
      if (filterType !== 'all' && model.type !== filterType) return false;
      if (filterStatus !== 'all' && model.status !== filterStatus) return false;
      if (searchTerm && !model.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'accuracy':
          return b.accuracy - a.accuracy;
        case 'performance':
          return b.performance.throughput - a.performance.throughput;
        case 'status':
          return a.status.localeCompare(b.status);
        case 'recent':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

    return filtered;
  }, [models, filterType, filterStatus, searchTerm, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'text-green-400 bg-green-500/20';
      case 'training': return 'text-blue-400 bg-blue-500/20';
      case 'monitoring': return 'text-yellow-400 bg-yellow-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'archived': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'classification': return '🎯';
      case 'regression': return '📈';
      case 'clustering': return '🎪';
      case 'nlp': return '💬';
      case 'computer-vision': return '👁️';
      case 'recommendation': return '💡';
      default: return '🤖';
    }
  };

  const getJobStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-400 bg-blue-500/20';
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'queued': return 'text-yellow-400 bg-yellow-500/20';
      case 'cancelled': return 'text-gray-400 bg-gray-500/20';
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

  if (loading) {
    return (
    <div>
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
            <span className="text-lg font-medium">Loading AI-Powered Machine Learning...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>AI-Powered Machine Learning - Zion</title>
        <meta name="description" content="Intelligent model training, deployment, monitoring, and AI-driven model optimization" />
        <meta name="keywords" content="AI machine learning, model training, deployment, monitoring, Zion" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md flex items-center space-x-8">
              <Link href="/ai-powered-data-analytics" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Analytics
              </Link>
              <Link href="/ai-powered-customer-support" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Support
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md text-5xl font-bold text-white mb-4">
            AI-Powered Machine Learning
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent model training, deployment, monitoring, and AI-driven 
            model optimization with advanced ML capabilities and automated model management.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'models', name: 'Models', icon: '🤖' },
              { id: 'training', name: 'Training', icon: '🏋️' },
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
          <div className="grid grid-cols-1 md grid-cols-2 gap-6 mb-8">
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

        {/* ML Models */}
        {selectedView === 'models' && (
          <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-6">
            {filteredModels.map((model) => (
              <div key={model.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getTypeIcon(model.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{model.name}</h3>
                      <p className="text-gray-300 text-sm capitalize">{model.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                      {model.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${model.aiOptimized ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {model.aiOptimized ? 'AI OPTIMIZED' : 'AI DISABLED'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Accuracy</p>
                    <p className="text-lg font-semibold text-green-400">{model.accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">F1 Score</p>
                    <p className="text-lg font-semibold text-blue-400">{model.f1Score}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Training Data</p>
                    <p className="text-lg font-semibold text-orange-400">{model.trainingData.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Version</p>
                    <p className="text-lg font-semibold text-purple-400">{model.version}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Auto-Retrain: {model.autoRetrain ? '✅' : '❌'}</span>
                  <span>Updated: {model.lastUpdated.toLocaleString()}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105">
                    View Details
                  </button>
                  <button className="border border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Monitor
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Training Jobs */}
        {selectedView === 'training' && (
          <div className="space-y-6">
            {trainingJobs.map((job) => (
              <div key={job.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🏋️</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{job.modelName}</h3>
                      <p className="text-gray-300 text-sm capitalize">{job.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getJobStatusColor(job.status)}`}>
                      {job.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${job.aiAssisted ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {job.aiAssisted ? 'AI ASSISTED' : 'MANUAL'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm text-white">{job.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Dataset</p>
                    <p className="text-lg font-semibold text-white">{job.dataset}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Learning Rate</p>
                    <p className="text-lg font-semibold text-blue-400">{job.hyperparameters.learningRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Batch Size</p>
                    <p className="text-lg font-semibold text-green-400">{job.hyperparameters.batchSize}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Epochs</p>
                    <p className="text-lg font-semibold text-orange-400">{job.hyperparameters.epochs}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Started: {job.startTime.toLocaleString()}</span>
                  {job.endTime && (
                    <span>Completed: {job.endTime.toLocaleString()}</span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105">
                    View Logs
                  </button>
                  <button className="border border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    {job.status === 'running' ? 'Stop' : 'Restart'}
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
              Train with AI Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent machine learning to build models with AI-driven 
              training, deployment, and optimization for advanced ML capabilities.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105">
                Create Model
              </button>
              <Link href="/service-marketplace" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>
)
};

export default AIPoweredMachineLearningPage 