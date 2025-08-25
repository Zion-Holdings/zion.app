import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight, 
  Plus, 
  Search, 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  Activity,
  Users,
  Database,
  Network,
  Server,
  Smartphone,
  Globe,
  TrendingUp,
  AlertCircle,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Shield,
  Eye,
  Lock,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare
} from 'lucide-react';

interface MLModel {
  id: string;
  name: string;
  type: 'classification' | 'regression' | 'clustering' | 'nlp' | 'computer-vision' | 'reinforcement-learning';
  status: 'training' | 'active' | 'inactive' | 'error' | 'deployed';
  accuracy: number;
  version: string;
  lastTrained: string;
  trainingTime: number;
  dataSize: number;
  performance: ModelPerformance;
}

interface ModelPerformance {
  precision: number;
  recall: number;
  f1Score: number;
  latency: number;
  throughput: number;
  lastUpdated: string;
}

interface TrainingJob {
  id: string;
  modelName: string;
  status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
  progress: number;
  startTime: string;
  estimatedCompletion: string;
  dataset: string;
  hyperparameters: Record<string, any>;
}

interface DataPipeline {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'error' | 'maintenance';
  dataSources: string[];
  processingSteps: string[];
  lastRun: string;
  nextRun: string;
  successRate: number;
}

const mlModels: MLModel[] = [
  {
    id: '1',
    name: 'Customer Churn Predictor',
    type: 'classification',
    status: 'active',
    accuracy: 94.2,
    version: '2.1.0',
    lastTrained: '2025-01-27 15:00',
    trainingTime: 45,
    dataSize: 50000,
    performance: {
      precision: 0.92,
      recall: 0.89,
      f1Score: 0.90,
      latency: 12,
      throughput: 1000,
      lastUpdated: '2025-01-27 16:00'
    }
  },
  {
    id: '2',
    name: 'Sales Forecast Model',
    type: 'regression',
    status: 'training',
    accuracy: 87.5,
    version: '1.3.0',
    lastTrained: '2025-01-27 14:30',
    trainingTime: 120,
    dataSize: 75000,
    performance: {
      precision: 0.85,
      recall: 0.88,
      f1Score: 0.86,
      latency: 18,
      throughput: 800,
      lastUpdated: '2025-01-27 15:30'
    }
  },
  {
    id: '3',
    name: 'Image Recognition Engine',
    type: 'computer-vision',
    status: 'deployed',
    accuracy: 96.8,
    version: '3.0.0',
    lastTrained: '2025-01-26 10:00',
    trainingTime: 360,
    dataSize: 150000,
    performance: {
      precision: 0.95,
      recall: 0.94,
      f1Score: 0.94,
      latency: 25,
      throughput: 500,
      lastUpdated: '2025-01-27 16:00'
    }
  }
];

const trainingJobs: TrainingJob[] = [
  {
    id: '1',
    modelName: 'Sales Forecast Model',
    status: 'running',
    progress: 65,
    startTime: '2025-01-27 14:30',
    estimatedCompletion: '2025-01-27 16:30',
    dataset: 'Sales Data Q4 2024',
    hyperparameters: {
      learningRate: 0.001,
      batchSize: 32,
      epochs: 100
    }
  },
  {
    id: '2',
    modelName: 'Customer Segmentation',
    status: 'queued',
    progress: 0,
    startTime: '2025-01-27 17:00',
    estimatedCompletion: '2025-01-27 18:30',
    dataset: 'Customer Behavior Data',
    hyperparameters: {
      learningRate: 0.01,
      batchSize: 64,
      epochs: 50
    }
  }
];

const dataPipelines: DataPipeline[] = [
  {
    id: '1',
    name: 'Customer Data Pipeline',
    status: 'active',
    dataSources: ['CRM System', 'Website Analytics', 'Social Media'],
    processingSteps: ['Data Cleaning', 'Feature Engineering', 'Validation'],
    lastRun: '2025-01-27 15:00',
    nextRun: '2025-01-27 18:00',
    successRate: 98.5
  },
  {
    id: '2',
    name: 'Sales Data Pipeline',
    status: 'active',
    dataSources: ['Sales Database', 'Inventory System', 'Market Data'],
    processingSteps: ['Data Aggregation', 'Quality Check', 'Transformation'],
    lastRun: '2025-01-27 14:00',
    nextRun: '2025-01-27 17:00',
    successRate: 99.2
  }
];

const modelTypeColors = {
  'classification': 'from-blue-500 to-cyan-500',
  'regression': 'from-green-500 to-emerald-500',
  'clustering': 'from-purple-500 to-pink-500',
  'nlp': 'from-yellow-500 to-orange-500',
  'computer-vision': 'from-indigo-500 to-purple-500',
  'reinforcement-learning': 'from-red-500 to-pink-500'
};

const statusColors = {
  'training': 'from-yellow-500 to-orange-500',
  'active': 'from-green-500 to-emerald-500',
  'inactive': 'from-gray-500 to-gray-600',
  'error': 'from-red-500 to-pink-500',
  'deployed': 'from-blue-500 to-cyan-500'
};

const jobStatusColors = {
  'queued': 'from-gray-500 to-gray-600',
  'running': 'from-yellow-500 to-orange-500',
  'completed': 'from-green-500 to-emerald-500',
  'failed': 'from-red-500 to-pink-500',
  'cancelled': 'from-gray-500 to-gray-600'
};

const AdvancedMachineLearningHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'models' | 'training' | 'pipelines'>('overview');
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
            Machine Learning Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced machine learning hub with AI model management, training automation, 
            and intelligent data pipelines for cutting-edge AI solutions.
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
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+18%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{mlModels.length}</h3>
            <p className="text-gray-400 text-sm">Active Models</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+25%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{trainingJobs.filter(job => job.status === 'running').length}</h3>
            <p className="text-gray-400 text-sm">Training Jobs</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">94.2%</h3>
            <p className="text-gray-400 text-sm">Avg Accuracy</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{dataPipelines.length}</h3>
            <p className="text-gray-400 text-sm">Data Pipelines</p>
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
          {(['overview', 'models', 'training', 'pipelines'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Brain className="w-4 h-4 inline mr-2" />}
              {view === 'models' && <Cpu className="w-4 h-4 inline mr-2" />}
              {view === 'training' && <Zap className="w-4 h-4 inline mr-2" />}
              {view === 'pipelines' && <Layers className="w-4 h-4 inline mr-2" />}
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
                {/* ML Models Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Active Models</h3>
                  {mlModels.slice(0, 2).map((model) => (
                    <motion.div
                      key={model.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[model.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{model.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${modelTypeColors[model.type]} rounded-full text-white text-xs font-medium`}>
                              {model.type}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">Version {model.version}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{model.accuracy}%</div>
                          <div className="text-gray-400 text-sm">Accuracy</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Precision</div>
                          <div className="text-white font-medium">{(model.performance.precision * 100).toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Recall</div>
                          <div className="text-white font-medium">{(model.performance.recall * 100).toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">F1 Score</div>
                          <div className="text-white font-medium">{(model.performance.f1Score * 100).toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Latency</div>
                          <div className="text-white font-medium">{model.performance.latency}ms</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Last trained: {model.lastTrained} | Training time: {model.trainingTime} min
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Training Jobs Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Training Jobs</h3>
                  {trainingJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${jobStatusColors[job.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{job.modelName}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${jobStatusColors[job.status]} rounded-full text-white text-xs font-medium`}>
                              {job.status}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">Dataset: {job.dataset}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{job.progress}%</div>
                          <div className="text-gray-400 text-sm">Progress</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Training Progress</span>
                          <span>{job.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${jobStatusColors[job.status]} rounded-full transition-all duration-300`}
                            style={{ width: `${job.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Started: {job.startTime} | ETA: {job.estimatedCompletion}
                      </div>
                    </motion.div>
                  ))}
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
              Ready to Harness the Power of AI?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you implement cutting-edge machine learning solutions 
              that drive innovation and business growth.
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

export default AdvancedMachineLearningHub;