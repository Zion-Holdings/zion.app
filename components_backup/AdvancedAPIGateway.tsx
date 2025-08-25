import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Server, 
  Database, 
  Globe, 
  ArrowRight, 
  Plus, 
  Search, 
  Settings, 
  Download, 
  RefreshCw, 
  Activity,
  Users,
  Zap,
  Target,
  TrendingUp,
  AlertCircle,
  Clock,
  Star,
  Brain,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Shield,
  Eye,
  Lock
} from 'lucide-react';

interface APIEndpoint {
  id: string;
  name: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  status: 'active' | 'maintenance' | 'deprecated' | 'error';
  responseTime: number;
  successRate: number;
  requestsPerMinute: number;
  lastUpdated: string;
  version: string;
}

interface APIMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
  status: 'optimal' | 'warning' | 'critical';
  lastUpdated: string;
}

interface APIRateLimit {
  id: string;
  endpoint: string;
  currentUsage: number;
  limit: number;
  window: string;
  status: 'normal' | 'approaching' | 'exceeded';
  lastReset: string;
}

const apiEndpoints: APIEndpoint[] = [
  {
    id: '1',
    name: 'User Authentication',
    path: '/api/v1/auth/login',
    method: 'POST',
    status: 'active',
    responseTime: 45,
    successRate: 99.8,
    requestsPerMinute: 156,
    lastUpdated: '2025-01-27 16:00',
    version: '1.2.0'
  },
  {
    id: '2',
    name: 'Data Retrieval',
    path: '/api/v1/data/users',
    method: 'GET',
    status: 'active',
    responseTime: 23,
    successRate: 99.9,
    requestsPerMinute: 89,
    lastUpdated: '2025-01-27 16:00',
    version: '1.1.0'
  }
];

const apiMetrics: APIMetric[] = [
  {
    id: '1',
    name: 'Overall API Health',
    value: 98,
    target: 95,
    unit: '%',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '2',
    name: 'Average Response Time',
    value: 34,
    target: 50,
    unit: 'ms',
    trend: 'improving',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '3',
    name: 'Success Rate',
    value: 99.8,
    target: 99.5,
    unit: '%',
    trend: 'stable',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '4',
    name: 'Uptime',
    value: 99.99,
    target: 99.9,
    unit: '%',
    trend: 'stable',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00'
  }
];

const rateLimits: APIRateLimit[] = [
  {
    id: '1',
    endpoint: '/api/v1/auth/login',
    currentUsage: 145,
    limit: 200,
    window: '1 minute',
    status: 'normal',
    lastReset: '2025-01-27 16:01'
  },
  {
    id: '2',
    endpoint: '/api/v1/data/users',
    currentUsage: 78,
    limit: 100,
    window: '1 minute',
    status: 'normal',
    lastReset: '2025-01-27 16:01'
  }
];

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'maintenance': 'from-yellow-500 to-orange-500',
  'deprecated': 'from-gray-500 to-gray-600',
  'error': 'from-red-500 to-pink-500'
};

const methodColors = {
  'GET': 'from-blue-500 to-cyan-500',
  'POST': 'from-green-500 to-emerald-500',
  'PUT': 'from-yellow-500 to-orange-500',
  'DELETE': 'from-red-500 to-pink-500',
  'PATCH': 'from-purple-500 to-pink-500'
};

const rateLimitStatusColors = {
  'normal': 'from-green-500 to-emerald-500',
  'approaching': 'from-yellow-500 to-orange-500',
  'exceeded': 'from-red-500 to-pink-500'
};

const AdvancedAPIGateway: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'endpoints' | 'metrics' | 'rate-limits'>('overview');
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
            API Gateway
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced API gateway with intelligent management, rate limiting, monitoring, 
            and comprehensive API analytics for optimal performance.
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
                <Network className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+15%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{apiEndpoints.length}</h3>
            <p className="text-gray-400 text-sm">Active Endpoints</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+22%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">34ms</h3>
            <p className="text-gray-400 text-sm">Avg Response</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">99.99%</h3>
            <p className="text-gray-400 text-sm">Uptime</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">245</h3>
            <p className="text-gray-400 text-sm">Requests/min</p>
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
          {(['overview', 'endpoints', 'metrics', 'rate-limits'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Network className="w-4 h-4 inline mr-2" />}
              {view === 'endpoints' && <Server className="w-4 h-4 inline mr-2" />}
              {view === 'metrics' && <Activity className="w-4 h-4 inline mr-2" />}
              {view === 'rate-limits' && <Shield className="w-4 h-4 inline mr-2" />}
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
                {/* API Metrics Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">API Performance</h3>
                  {apiMetrics.slice(0, 2).map((metric) => (
                    <motion.div
                      key={metric.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2">{metric.name}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 bg-gradient-to-r ${metric.status === 'optimal' ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} rounded-full`} />
                            <span className="text-gray-400 text-sm capitalize">{metric.status}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{metric.value}{metric.unit}</div>
                          <div className="text-gray-400 text-sm">Target: {metric.target}{metric.unit}</div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{metric.value}{metric.unit}</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${metric.status === 'optimal' ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} rounded-full transition-all duration-300`}
                            style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                          />
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Trend: <span className="text-white capitalize">{metric.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Active Endpoints Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Active Endpoints</h3>
                  {apiEndpoints.map((endpoint) => (
                    <motion.div
                      key={endpoint.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[endpoint.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{endpoint.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${methodColors[endpoint.method]} rounded-full text-white text-xs font-medium`}>
                              {endpoint.method}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{endpoint.path}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{endpoint.responseTime}ms</div>
                          <div className="text-gray-400 text-sm">Response</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Success Rate</div>
                          <div className="text-white font-medium">{endpoint.successRate}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Requests/min</div>
                          <div className="text-white font-medium">{endpoint.requestsPerMinute}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Version: {endpoint.version} | Updated: {endpoint.lastUpdated}
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
              Ready to Optimize Your API Performance?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you build a robust API gateway that ensures 
              optimal performance, security, and scalability.
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

export default AdvancedAPIGateway;