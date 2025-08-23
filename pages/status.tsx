import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  CheckCircle, AlertTriangle, XCircle, Clock, ArrowRight, 
  Activity, Server, Database, Globe, Shield, Brain, Atom,
  Rocket, Zap, RefreshCw, TrendingUp, BarChart3, Users
} from 'lucide-react';
import Link from 'next/link';

const Status: React.FC = () => {
  const systemStatus = {
    overall: "operational",
    lastUpdated: "2024-01-15T14:30:00Z",
    uptime: "99.97%"
  };

  const services = [
    {
      name: "AI Consciousness Platform",
      status: "operational",
      uptime: "99.99%",
      responseTime: "45ms",
      lastIncident: null,
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Quantum Computing Services",
      status: "operational",
      uptime: "99.95%",
      responseTime: "120ms",
      lastIncident: null,
      icon: <Atom className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Cybersecurity Framework",
      status: "operational",
      uptime: "99.98%",
      responseTime: "28ms",
      lastIncident: null,
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Space Technology APIs",
      status: "operational",
      uptime: "99.92%",
      responseTime: "85ms",
      lastIncident: null,
      icon: <Rocket className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Core Infrastructure",
      status: "operational",
      uptime: "99.99%",
      responseTime: "12ms",
      lastIncident: null,
      icon: <Server className="w-6 h-6" />,
      color: "from-gray-500 to-slate-600"
    },
    {
      name: "Database Systems",
      status: "operational",
      uptime: "99.97%",
      responseTime: "35ms",
      lastIncident: null,
      icon: <Database className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Global CDN",
      status: "operational",
      uptime: "99.99%",
      responseTime: "18ms",
      lastIncident: null,
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-blue-600"
    },
    {
      name: "Authentication Services",
      status: "operational",
      uptime: "99.98%",
      responseTime: "22ms",
      lastIncident: null,
      icon: <Shield className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600"
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: "Scheduled Maintenance - AI Consciousness Platform",
      description: "Routine maintenance to improve performance and security",
      status: "resolved",
      severity: "low",
      startTime: "2024-01-14T02:00:00Z",
      endTime: "2024-01-14T04:00:00Z",
      duration: "2 hours",
      affectedServices: ["AI Consciousness Platform"]
    },
    {
      id: 2,
      title: "Database Performance Optimization",
      description: "Database optimization to improve query performance",
      status: "resolved",
      severity: "low",
      startTime: "2024-01-12T01:00:00Z",
      endTime: "2024-01-12T02:30:00Z",
      duration: "1.5 hours",
      affectedServices: ["Database Systems", "AI Consciousness Platform"]
    }
  ];

  const performanceMetrics = [
    {
      metric: "Average Response Time",
      value: "45ms",
      trend: "improving",
      change: "-12%",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: "System Uptime",
      value: "99.97%",
      trend: "stable",
      change: "+0.02%",
      icon: <Activity className="w-6 h-6" />
    },
    {
      metric: "Active Users",
      value: "12,847",
      trend: "increasing",
      change: "+8%",
      icon: <Users className="w-6 h-6" />
    },
    {
      metric: "API Requests/sec",
      value: "2,456",
      trend: "increasing",
      change: "+15%",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group's AI consciousness, quantum computing, cybersecurity, and space technology services."
      keywords="system status, service status, uptime, performance, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  System Status
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real-time status of our services and infrastructure
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Monitor the health and performance of our AI consciousness, quantum computing, 
                cybersecurity, and space technology platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Overall System Status
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Current health and performance of all Zion Tech Group services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">System Status</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">Operational</div>
                <p className="text-gray-300 text-sm">All systems are running normally</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Uptime</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">99.97%</div>
                <p className="text-gray-300 text-sm">Last 30 days</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Last Updated</h3>
                <div className="text-lg font-bold text-purple-400 mb-2">
                  {new Date(systemStatus.lastUpdated).toLocaleString()}
                </div>
                <p className="text-gray-300 text-sm">Real-time monitoring</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Service Status
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Individual service health and performance metrics
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{service.name}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={getStatusColor(service.status)}>Operational</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-white font-semibold">{service.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Performance Metrics
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-time performance indicators and trends
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{metric.metric}</h3>
                  <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className={`${
                      metric.trend === 'improving' ? 'text-green-400' :
                      metric.trend === 'increasing' ? 'text-blue-400' :
                      metric.trend === 'stable' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Recent Incidents
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Information about recent service disruptions and maintenance
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{incident.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                          {incident.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{incident.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(incident.startTime).toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Duration: {incident.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700/30 pt-4">
                    <div className="text-sm text-gray-400 mb-2">Affected Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {incident.affectedServices.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {recentIncidents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Recent Incidents</h3>
                <p className="text-gray-400">All services are operating normally</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Status History */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Status History
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Historical uptime and performance data
              </p>
            </motion.div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">99.97%</div>
                  <div className="text-gray-400 text-sm">30 Day Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">99.95%</div>
                  <div className="text-gray-400 text-sm">90 Day Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">99.93%</div>
                  <div className="text-gray-400 text-sm">1 Year Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">45ms</div>
                  <div className="text-gray-400 text-sm">Avg Response Time</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  href="/status/history"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  View Detailed History
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Get real-time updates about our system status and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Report an Issue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Status;