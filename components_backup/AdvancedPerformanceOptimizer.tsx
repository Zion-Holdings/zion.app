import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  Activity, 
  Target, 
  ArrowRight, 
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
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  DollarSign,
  Cpu,
  HardDrive,
  Wifi,
  Battery,
  Thermometer,
  MemoryStick,
  Monitor,
  Smartphone as Phone
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  category: 'speed' | 'efficiency' | 'quality' | 'resource' | 'user-experience' | 'scalability';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'optimal' | 'good' | 'warning' | 'critical';
  lastUpdated: string;
  description: string;
}

interface PerformanceOptimization {
  id: string;
  title: string;
  description: string;
  type: 'code' | 'database' | 'network' | 'infrastructure' | 'caching' | 'compression';
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  estimatedSavings: number;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  priority: number;
  createdAt: string;
}

interface SystemResource {
  id: string;
  name: string;
  type: 'cpu' | 'memory' | 'storage' | 'network' | 'database';
  current: number;
  capacity: number;
  unit: string;
  utilization: number;
  status: 'optimal' | 'good' | 'warning' | 'critical';
  trend: 'stable' | 'increasing' | 'decreasing';
}

interface PerformanceAlert {
  id: string;
  title: string;
  description: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  category: 'performance' | 'resource' | 'security' | 'availability';
  timestamp: string;
  resolved: boolean;
  actionRequired: boolean;
}

const performanceMetrics: PerformanceMetric[] = [
  {
    id: '1',
    name: 'Page Load Time',
    value: 1.2,
    target: 1.0,
    unit: 'seconds',
    change: -15,
    trend: 'up',
    category: 'speed',
    priority: 'high',
    status: 'good',
    lastUpdated: '2025-01-27 16:00',
    description: 'Average time for pages to load completely'
  },
  {
    id: '2',
    name: 'First Contentful Paint',
    value: 0.8,
    target: 0.6,
    unit: 'seconds',
    change: -20,
    trend: 'up',
    category: 'user-experience',
    priority: 'high',
    status: 'good',
    lastUpdated: '2025-01-27 16:00',
    description: 'Time until first content is visible to users'
  },
  {
    id: '3',
    name: 'Time to Interactive',
    value: 2.1,
    target: 1.8,
    unit: 'seconds',
    change: -12,
    trend: 'up',
    category: 'user-experience',
    priority: 'medium',
    status: 'warning',
    lastUpdated: '2025-01-27 16:00',
    description: 'Time until page becomes fully interactive'
  },
  {
    id: '4',
    name: 'Core Web Vitals Score',
    value: 92,
    target: 95,
    unit: 'points',
    change: 5,
    trend: 'up',
    category: 'quality',
    priority: 'high',
    status: 'good',
    lastUpdated: '2025-01-27 16:00',
    description: 'Google Core Web Vitals performance score'
  },
  {
    id: '5',
    name: 'Database Query Time',
    value: 45,
    target: 30,
    unit: 'ms',
    change: -25,
    trend: 'up',
    category: 'efficiency',
    priority: 'medium',
    status: 'warning',
    lastUpdated: '2025-01-27 16:00',
    description: 'Average database query execution time'
  },
  {
    id: '6',
    name: 'Memory Usage',
    value: 78,
    target: 85,
    unit: '%',
    change: 3,
    trend: 'stable',
    category: 'resource',
    priority: 'low',
    status: 'optimal',
    lastUpdated: '2025-01-27 16:00',
    description: 'Current memory utilization percentage'
  }
];

const performanceOptimizations: PerformanceOptimization[] = [
  {
    id: '1',
    title: 'Image Optimization',
    description: 'Implement WebP format and lazy loading for images to reduce page load time',
    type: 'compression',
    impact: 'high',
    effort: 'low',
    estimatedSavings: 25,
    status: 'completed',
    priority: 1,
    createdAt: '2025-01-27 10:00'
  },
  {
    id: '2',
    title: 'Database Indexing',
    description: 'Add missing database indexes to improve query performance',
    type: 'database',
    impact: 'high',
    effort: 'medium',
    estimatedSavings: 30,
    status: 'in-progress',
    priority: 2,
    createdAt: '2025-01-27 11:00'
  },
  {
    id: '3',
    title: 'Code Splitting',
    description: 'Implement dynamic imports and code splitting to reduce bundle size',
    type: 'code',
    impact: 'medium',
    effort: 'high',
    estimatedSavings: 20,
    status: 'pending',
    priority: 3,
    createdAt: '2025-01-27 12:00'
  },
  {
    id: '4',
    title: 'CDN Implementation',
    description: 'Deploy content delivery network for static assets',
    type: 'infrastructure',
    impact: 'high',
    effort: 'medium',
    estimatedSavings: 35,
    status: 'pending',
    priority: 4,
    createdAt: '2025-01-27 13:00'
  }
];

const systemResources: SystemResource[] = [
  {
    id: '1',
    name: 'CPU Usage',
    type: 'cpu',
    current: 45,
    capacity: 100,
    unit: '%',
    utilization: 45,
    status: 'optimal',
    trend: 'stable'
  },
  {
    id: '2',
    name: 'Memory Usage',
    type: 'memory',
    current: 78,
    capacity: 100,
    unit: '%',
    utilization: 78,
    status: 'good',
    trend: 'stable'
  },
  {
    id: '3',
    name: 'Storage Usage',
    type: 'storage',
    current: 65,
    capacity: 100,
    unit: '%',
    utilization: 65,
    status: 'optimal',
    trend: 'increasing'
  },
  {
    id: '4',
    name: 'Network Latency',
    type: 'network',
    current: 25,
    capacity: 100,
    unit: 'ms',
    utilization: 25,
    status: 'optimal',
    trend: 'stable'
  },
  {
    id: '5',
    name: 'Database Connections',
    type: 'database',
    current: 12,
    capacity: 20,
    unit: 'connections',
    utilization: 60,
    status: 'good',
    trend: 'stable'
  }
];

const performanceAlerts: PerformanceAlert[] = [
  {
    id: '1',
    title: 'High Database Query Time',
    description: 'Database queries are taking longer than expected, affecting user experience',
    severity: 'warning',
    category: 'performance',
    timestamp: '2025-01-27 15:30',
    resolved: false,
    actionRequired: true
  },
  {
    id: '2',
    title: 'Memory Usage Trending Up',
    description: 'Memory utilization has increased by 15% over the last hour',
    severity: 'info',
    category: 'resource',
    timestamp: '2025-01-27 15:00',
    resolved: false,
    actionRequired: false
  },
  {
    id: '3',
    title: 'CDN Performance Degradation',
    description: 'Content delivery network response times have increased by 20%',
    severity: 'error',
    category: 'performance',
    timestamp: '2025-01-27 14:45',
    resolved: false,
    actionRequired: true
  }
];

const statusColors = {
  'optimal': 'from-green-500 to-emerald-500',
  'good': 'from-blue-500 to-cyan-500',
  'warning': 'from-yellow-500 to-orange-500',
  'critical': 'from-red-500 to-pink-500'
};

const priorityColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-orange-500',
  'critical': 'bg-red-500'
};

const optimizationTypeColors = {
  'code': 'from-blue-500 to-cyan-500',
  'database': 'from-green-500 to-emerald-500',
  'network': 'from-purple-500 to-pink-500',
  'infrastructure': 'from-orange-500 to-red-500',
  'caching': 'from-yellow-500 to-orange-500',
  'compression': 'from-indigo-500 to-purple-500'
};

const alertSeverityColors = {
  'info': 'from-blue-500 to-cyan-500',
  'warning': 'from-yellow-500 to-orange-500',
  'error': 'from-orange-500 to-red-500',
  'critical': 'from-red-500 to-pink-500'
};

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'metrics' | 'optimizations' | 'resources' | 'alerts'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredMetrics = performanceMetrics.filter(metric => {
    const matchesSearch = metric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         metric.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || metric.category === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const filteredOptimizations = performanceOptimizations.filter(optimization => {
    return optimization.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           optimization.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'optimal':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'good':
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'critical':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-400" style={{ transform: 'rotate(180deg)' }} />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'cpu':
        return <Cpu className="w-6 h-6" />;
      case 'memory':
        return <MemoryStick className="w-6 h-6" />;
      case 'storage':
        return <HardDrive className="w-6 h-6" />;
      case 'network':
        return <Wifi className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      default:
        return <Activity className="w-6 h-6" />;
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
            Performance Optimizer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced performance monitoring and optimization system with real-time metrics, 
            intelligent recommendations, and automated performance enhancement.
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
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+18%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">92</h3>
            <p className="text-gray-400 text-sm">Performance Score</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+25%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">1.2s</h3>
            <p className="text-gray-400 text-sm">Avg Load Time</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+15%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{performanceOptimizations.length}</h3>
            <p className="text-gray-400 text-sm">Optimizations</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{performanceAlerts.filter(a => !a.resolved).length}</h3>
            <p className="text-gray-400 text-sm">Active Alerts</p>
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
          {(['overview', 'metrics', 'optimizations', 'resources', 'alerts'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Gauge className="w-4 h-4 inline mr-2" />}
              {view === 'metrics' && <BarChart3 className="w-4 h-4 inline mr-2" />}
              {view === 'optimizations' && <Zap className="w-4 h-4 inline mr-2" />}
              {view === 'resources' && <Cpu className="w-4 h-4 inline mr-2" />}
              {view === 'alerts' && <AlertCircle className="w-4 h-4 inline mr-2" />}
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
                placeholder="Search metrics, optimizations, or resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {selectedView === 'metrics' && (
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              >
                <option value="all">All Categories</option>
                <option value="speed">Speed</option>
                <option value="efficiency">Efficiency</option>
                <option value="quality">Quality</option>
                <option value="resource">Resource</option>
                <option value="user-experience">User Experience</option>
                <option value="scalability">Scalability</option>
              </select>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Export Report
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Optimization
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
                {/* Performance Metrics Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Performance Metrics</h3>
                  {performanceMetrics.slice(0, 3).map((metric) => (
                    <motion.div
                      key={metric.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[metric.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{metric.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[metric.status]} rounded-full text-white text-xs font-medium`}>
                              {metric.status}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{metric.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{metric.value}{metric.unit}</div>
                          <div className="text-gray-400 text-sm">Target: {metric.target}{metric.unit}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Change: <span className={`${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>{metric.change >= 0 ? '+' : ''}{metric.change}%</span></span>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(metric.trend)}
                          <span className="text-gray-400">{metric.trend}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* System Resources Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">System Resources</h3>
                  {systemResources.slice(0, 3).map((resource) => (
                    <motion.div
                      key={resource.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                          {getResourceIcon(resource.type)}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{resource.name}</h4>
                          <div className="flex items-center gap-2">
                            <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[resource.status]} rounded-full text-white text-xs font-medium`}>
                              {resource.status}
                            </div>
                            <span className="text-gray-400 text-sm">{resource.utilization}% utilized</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Utilization</span>
                          <span>{resource.utilization}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${statusColors[resource.status]} rounded-full transition-all duration-300`}
                            style={{ width: `${resource.utilization}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>Current: {resource.current}{resource.unit}</span>
                        <span>Capacity: {resource.capacity}{resource.unit}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'metrics' && (
            <motion.div
              key="metrics"
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
                {filteredMetrics.map((metric) => (
                  <motion.div
                    key={metric.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[metric.status]} rounded-full`} />
                          <h3 className="text-xl font-bold text-white">{metric.name}</h3>
                          <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[metric.status]} rounded-full text-white text-xs font-medium`}>
                            {metric.status}
                          </div>
                          <div className={`w-3 h-3 ${priorityColors[metric.priority]} rounded-full`} />
                        </div>
                        
                        <p className="text-gray-300 mb-4">{metric.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-gray-400 text-sm">Current Value</div>
                            <div className="text-white font-medium">{metric.value}{metric.unit}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">Target Value</div>
                            <div className="text-white font-medium">{metric.target}{metric.unit}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">Change</div>
                            <div className={`font-medium ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {metric.change >= 0 ? '+' : ''}{metric.change}%
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">Trend</div>
                            <div className="flex items-center gap-2">
                              {getTrendIcon(metric.trend)}
                              <span className="text-white capitalize">{metric.trend}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      Last updated: {metric.lastUpdated}
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
              Ready to Optimize Your Performance?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you achieve maximum performance with our advanced 
              optimization tools and intelligent performance monitoring.
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

export default AdvancedPerformanceOptimizer;