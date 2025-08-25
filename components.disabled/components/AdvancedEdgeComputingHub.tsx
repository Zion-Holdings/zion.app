import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Server, 
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
  GitCompare,
  HardDrive,
  Thermometer,
  Gauge,
  Battery,
  Signal,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize,
  Wifi,
  Bluetooth
} from 'lucide-react';

interface EdgeNode {
  id: string;
  name: string;
  location: string;
  type: 'edge-server' | 'gateway' | 'micro-datacenter' | 'smart-device' | 'fog-node';
  status: 'online' | 'offline' | 'maintenance' | 'overloaded' | 'error';
  cpuUsage: number;
  memoryUsage: number;
  storageUsage: number;
  networkLatency: number;
  lastUpdated: string;
  applications: string[];
}

interface EdgeApplication {
  id: string;
  name: string;
  type: 'ai-inference' | 'data-processing' | 'real-time-analytics' | 'content-delivery' | 'iot-processing';
  status: 'running' | 'stopped' | 'deploying' | 'error';
  deployment: 'edge' | 'cloud' | 'hybrid';
  performance: number;
  users: number;
  lastDeployed: string;
  version: string;
}

interface EdgeMetrics {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
  status: 'optimal' | 'warning' | 'critical';
  lastUpdated: string;
}

const edgeNodes: EdgeNode[] = [
  {
    id: '1',
    name: 'Edge Server NYC-01',
    location: 'New York, NY',
    type: 'edge-server',
    status: 'online',
    cpuUsage: 65,
    memoryUsage: 72,
    storageUsage: 45,
    networkLatency: 12,
    lastUpdated: '2025-01-27 16:00',
    applications: ['AI Inference Engine', 'Real-time Analytics', 'Content Delivery']
  },
  {
    id: '2',
    name: 'Gateway LA-01',
    location: 'Los Angeles, CA',
    type: 'gateway',
    status: 'online',
    cpuUsage: 45,
    memoryUsage: 58,
    storageUsage: 32,
    networkLatency: 8,
    lastUpdated: '2025-01-27 16:00',
    applications: ['IoT Data Processing', 'Edge Analytics']
  },
  {
    id: '3',
    name: 'Micro-Datacenter CHI-01',
    location: 'Chicago, IL',
    type: 'micro-datacenter',
    status: 'online',
    cpuUsage: 78,
    memoryUsage: 85,
    storageUsage: 67,
    networkLatency: 15,
    lastUpdated: '2025-01-27 16:00',
    applications: ['Machine Learning Models', 'Big Data Processing', 'Real-time Streaming']
  }
];

const edgeApplications: EdgeApplication[] = [
  {
    id: '1',
    name: 'AI Inference Engine',
    type: 'ai-inference',
    status: 'running',
    deployment: 'edge',
    performance: 94,
    users: 2500,
    lastDeployed: '2025-01-27 15:00',
    version: '2.1.0'
  },
  {
    id: '2',
    name: 'Real-time Analytics Platform',
    type: 'real-time-analytics',
    status: 'running',
    deployment: 'hybrid',
    performance: 89,
    users: 1800,
    lastDeployed: '2025-01-27 14:30',
    version: '1.8.0'
  },
  {
    id: '3',
    name: 'IoT Data Processor',
    type: 'iot-processing',
    status: 'running',
    deployment: 'edge',
    performance: 96,
    users: 3200,
    lastDeployed: '2025-01-27 16:00',
    version: '3.0.0'
  }
];

const edgeMetrics: EdgeMetrics[] = [
  {
    id: '1',
    name: 'Overall Edge Performance',
    value: 92,
    target: 90,
    unit: '%',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '2',
    name: 'Average Latency',
    value: 12,
    target: 20,
    unit: 'ms',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '3',
    name: 'Edge Resource Utilization',
    value: 68,
    target: 80,
    unit: '%',
    trend: 'stable',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '4',
    name: 'Network Throughput',
    value: 85,
    target: 75,
    unit: 'Gbps',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  }
];

const nodeTypeColors = {
  'edge-server': 'from-blue-500 to-cyan-500',
  'gateway': 'from-green-500 to-emerald-500',
  'micro-datacenter': 'from-purple-500 to-pink-500',
  'smart-device': 'from-yellow-500 to-orange-500',
  'fog-node': 'from-indigo-500 to-purple-500'
};

const statusColors = {
  'online': 'from-green-500 to-emerald-500',
  'offline': 'from-red-500 to-pink-500',
  'maintenance': 'from-yellow-500 to-orange-500',
  'overloaded': 'from-orange-500 to-red-500',
  'error': 'from-red-500 to-pink-500',
  'running': 'from-green-500 to-emerald-500',
  'stopped': 'from-red-500 to-pink-500',
  'deploying': 'from-yellow-500 to-orange-500'
};

const appTypeColors = {
  'ai-inference': 'from-blue-500 to-cyan-500',
  'data-processing': 'from-green-500 to-emerald-500',
  'real-time-analytics': 'from-purple-500 to-pink-500',
  'content-delivery': 'from-yellow-500 to-orange-500',
  'iot-processing': 'from-indigo-500 to-purple-500'
};

const deploymentColors = {
  'edge': 'from-green-500 to-emerald-500',
  'cloud': 'from-blue-500 to-cyan-500',
  'hybrid': 'from-purple-500 to-pink-500'
};

const AdvancedEdgeComputingHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'nodes' | 'applications' | 'metrics'>('overview');
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
            Edge Computing Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced edge computing hub with distributed computing, intelligent resource management, 
            and edge optimization for next-generation computing infrastructure.
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
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+20%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{edgeNodes.length}</h3>
            <p className="text-gray-400 text-sm">Edge Nodes</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+28%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{edgeApplications.length}</h3>
            <p className="text-gray-400 text-sm">Applications</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">12ms</h3>
            <p className="text-gray-400 text-sm">Avg Latency</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">7.5K</h3>
            <p className="text-gray-400 text-sm">Active Users</p>
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
          {(['overview', 'nodes', 'applications', 'metrics'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Cpu className="w-4 h-4 inline mr-2" />}
              {view === 'nodes' && <Server className="w-4 h-4 inline mr-2" />}
              {view === 'applications' && <Zap className="w-4 h-4 inline mr-2" />}
              {view === 'metrics' && <Activity className="w-4 h-4 inline mr-2" />}
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
                {/* Edge Nodes Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Edge Nodes</h3>
                  {edgeNodes.slice(0, 2).map((node) => (
                    <motion.div
                      key={node.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[node.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{node.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${nodeTypeColors[node.type]} rounded-full text-white text-xs font-medium`}>
                              {node.type}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{node.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{node.networkLatency}ms</div>
                          <div className="text-gray-400 text-sm">Latency</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">CPU</div>
                          <div className="text-white font-medium">{node.cpuUsage}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Memory</div>
                          <div className="text-white font-medium">{node.memoryUsage}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Storage</div>
                          <div className="text-white font-medium">{node.storageUsage}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Status</div>
                          <div className="text-white font-medium capitalize">{node.status}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Applications</div>
                        <div className="flex flex-wrap gap-2">
                          {node.applications.slice(0, 2).map((app, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Updated: {node.lastUpdated}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Edge Applications Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Edge Applications</h3>
                  {edgeApplications.map((app) => (
                    <motion.div
                      key={app.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[app.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{app.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${appTypeColors[app.type]} rounded-full text-white text-xs font-medium`}>
                              {app.type}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`px-2 py-1 bg-gradient-to-r ${deploymentColors[app.deployment]} rounded-full text-white text-xs font-medium`}>
                              {app.deployment}
                            </div>
                            <span className="text-gray-400 text-sm">v{app.version}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{app.performance}%</div>
                          <div className="text-gray-400 text-sm">Performance</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Users</div>
                          <div className="text-white font-medium">{app.users.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Status</div>
                          <div className="text-white font-medium capitalize">{app.status}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Deployed: {app.lastDeployed}
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
              Ready to Optimize Your Computing Infrastructure?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you implement cutting-edge edge computing solutions 
              that deliver superior performance and reduce latency.
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

export default AdvancedEdgeComputingHub;