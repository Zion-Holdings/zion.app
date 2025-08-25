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
  Bluetooth,
  Box,
  Package
} from 'lucide-react';

interface Microservice {
  id: string;
  name: string;
  type: 'api-gateway' | 'user-service' | 'auth-service' | 'payment-service' | 'notification-service' | 'analytics-service';
  status: 'running' | 'stopped' | 'deploying' | 'scaling' | 'error';
  version: string;
  instances: number;
  cpuUsage: number;
  memoryUsage: number;
  responseTime: number;
  lastDeployed: string;
  health: 'healthy' | 'warning' | 'critical';
}

interface ServiceDependency {
  id: string;
  sourceService: string;
  targetService: string;
  type: 'http' | 'grpc' | 'message-queue' | 'database';
  status: 'active' | 'inactive' | 'error';
  latency: number;
  throughput: number;
  lastChecked: string;
}

interface ServiceMetrics {
  id: string;
  serviceName: string;
  metric: string;
  value: number;
  target: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
  status: 'optimal' | 'warning' | 'critical';
  lastUpdated: string;
}

const microservices: Microservice[] = [
  {
    id: '1',
    name: 'API Gateway',
    type: 'api-gateway',
    status: 'running',
    version: '2.1.0',
    instances: 3,
    cpuUsage: 45,
    memoryUsage: 58,
    responseTime: 25,
    lastDeployed: '2025-01-27 15:00',
    health: 'healthy'
  },
  {
    id: '2',
    name: 'User Service',
    type: 'user-service',
    status: 'running',
    version: '1.8.0',
    instances: 5,
    cpuUsage: 32,
    memoryUsage: 45,
    responseTime: 18,
    lastDeployed: '2025-01-27 14:30',
    health: 'healthy'
  },
  {
    id: '3',
    name: 'Payment Service',
    type: 'payment-service',
    status: 'running',
    version: '2.0.0',
    instances: 4,
    cpuUsage: 28,
    memoryUsage: 52,
    responseTime: 35,
    lastDeployed: '2025-01-27 16:00',
    health: 'healthy'
  },
  {
    id: '4',
    name: 'Analytics Service',
    type: 'analytics-service',
    status: 'scaling',
    version: '1.5.0',
    instances: 6,
    cpuUsage: 78,
    memoryUsage: 85,
    responseTime: 42,
    lastDeployed: '2025-01-27 15:45',
    health: 'warning'
  }
];

const serviceDependencies: ServiceDependency[] = [
  {
    id: '1',
    sourceService: 'API Gateway',
    targetService: 'User Service',
    type: 'http',
    status: 'active',
    latency: 18,
    throughput: 1250,
    lastChecked: '2025-01-27 16:00'
  },
  {
    id: '2',
    sourceService: 'API Gateway',
    targetService: 'Payment Service',
    type: 'http',
    status: 'active',
    latency: 35,
    throughput: 890,
    lastChecked: '2025-01-27 16:00'
  },
  {
    id: '3',
    sourceService: 'User Service',
    targetService: 'Analytics Service',
    type: 'message-queue',
    status: 'active',
    latency: 12,
    throughput: 2100,
    lastChecked: '2025-01-27 16:00'
  }
];

const serviceMetrics: ServiceMetrics[] = [
  {
    id: '1',
    serviceName: 'Overall System',
    metric: 'System Health',
    value: 94,
    target: 90,
    unit: '%',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '2',
    serviceName: 'API Gateway',
    metric: 'Response Time',
    value: 25,
    target: 30,
    unit: 'ms',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '3',
    serviceName: 'User Service',
    metric: 'Throughput',
    value: 1250,
    target: 1000,
    unit: 'req/s',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '4',
    serviceName: 'Payment Service',
    metric: 'Success Rate',
    value: 99.8,
    target: 99.5,
    unit: '%',
    trend: 'stable',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  }
];

const serviceTypeColors = {
  'api-gateway': 'from-blue-500 to-cyan-500',
  'user-service': 'from-green-500 to-emerald-500',
  'auth-service': 'from-purple-500 to-pink-500',
  'payment-service': 'from-yellow-500 to-orange-500',
  'notification-service': 'from-indigo-500 to-purple-500',
  'analytics-service': 'from-red-500 to-pink-500'
};

const statusColors = {
  'running': 'from-green-500 to-emerald-500',
  'stopped': 'from-red-500 to-pink-500',
  'deploying': 'from-yellow-500 to-orange-500',
  'scaling': 'from-blue-500 to-cyan-500',
  'error': 'from-red-500 to-pink-500',
  'active': 'from-green-500 to-emerald-500',
  'inactive': 'from-gray-500 to-gray-600'
};

const healthColors = {
  'healthy': 'from-green-500 to-emerald-500',
  'warning': 'from-yellow-500 to-orange-500',
  'critical': 'from-red-500 to-pink-500'
};

const dependencyTypeColors = {
  'http': 'from-blue-500 to-cyan-500',
  'grpc': 'from-green-500 to-emerald-500',
  'message-queue': 'from-purple-500 to-pink-500',
  'database': 'from-yellow-500 to-orange-500'
};

const AdvancedMicroservicesHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'services' | 'dependencies' | 'metrics'>('overview');
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
            Microservices Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced microservices architecture hub with service management, orchestration, 
            and scalable architecture for enterprise-grade applications.
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
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+18%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{microservices.length}</h3>
            <p className="text-gray-400 text-sm">Microservices</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+25%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{microservices.reduce((sum, service) => sum + service.instances, 0)}</h3>
            <p className="text-gray-400 text-sm">Total Instances</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">25ms</h3>
            <p className="text-gray-400 text-sm">Avg Response</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">94%</h3>
            <p className="text-gray-400 text-sm">System Health</p>
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
          {(['overview', 'services', 'dependencies', 'metrics'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Package className="w-4 h-4 inline mr-2" />}
              {view === 'services' && <Server className="w-4 h-4 inline mr-2" />}
              {view === 'dependencies' && <Network className="w-4 h-4 inline mr-2" />}
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
                {/* Microservices Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Microservices</h3>
                  {microservices.slice(0, 2).map((service) => (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[service.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{service.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${serviceTypeColors[service.type]} rounded-full text-white text-xs font-medium`}>
                              {service.type}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`px-2 py-1 bg-gradient-to-r ${healthColors[service.health]} rounded-full text-white text-xs font-medium`}>
                              {service.health}
                            </div>
                            <span className="text-gray-400 text-sm">v{service.version}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{service.instances}</div>
                          <div className="text-gray-400 text-sm">Instances</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">CPU</div>
                          <div className="text-white font-medium">{service.cpuUsage}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Memory</div>
                          <div className="text-white font-medium">{service.memoryUsage}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Response</div>
                          <div className="text-white font-medium">{service.responseTime}ms</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Status</div>
                          <div className="text-white font-medium capitalize">{service.status}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Deployed: {service.lastDeployed}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Service Dependencies Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Service Dependencies</h3>
                  {serviceDependencies.map((dependency) => (
                    <motion.div
                      key={dependency.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[dependency.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{dependency.sourceService} → {dependency.targetService}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${dependencyTypeColors[dependency.type]} rounded-full text-white text-xs font-medium`}>
                              {dependency.type}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">Communication Channel</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{dependency.latency}ms</div>
                          <div className="text-gray-400 text-sm">Latency</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Throughput</div>
                          <div className="text-white font-medium">{dependency.throughput.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Status</div>
                          <div className="text-white font-medium capitalize">{dependency.status}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Last checked: {dependency.lastChecked}
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
              Ready to Scale Your Architecture?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you implement cutting-edge microservices architecture 
              that scales with your business and delivers superior performance.
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

export default AdvancedMicroservicesHub;