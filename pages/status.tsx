import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe, Shield, Zap, RefreshCw, TrendingUp, AlertTriangle, Info } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface SystemStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastUpdated: string;
  description: string;
  category: 'core' | 'api' | 'database' | 'infrastructure';
}

interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  startTime: string;
  endTime?: string;
  affectedServices: string[];
  updates: IncidentUpdate[];
}

interface IncidentUpdate {
  id: string;
  message: string;
  timestamp: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
}

const systemStatusData: SystemStatus[] = [
  {
    id: '1',
    name: 'Core Platform',
    status: 'operational',
    uptime: 99.99,
    responseTime: 45,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Main application platform and user interface',
    category: 'core'
  },
  {
    id: '2',
    name: 'API Gateway',
    status: 'operational',
    uptime: 99.95,
    responseTime: 32,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'REST API endpoints and authentication services',
    category: 'api'
  },
  {
    id: '3',
    name: 'Database Cluster',
    status: 'operational',
    uptime: 99.98,
    responseTime: 28,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Primary and replica database instances',
    category: 'database'
  },
  {
    id: '4',
    name: 'File Storage',
    status: 'operational',
    uptime: 99.97,
    responseTime: 65,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Document and media file storage system',
    category: 'infrastructure'
  },
  {
    id: '5',
    name: 'AI Services',
    status: 'operational',
    uptime: 99.92,
    responseTime: 120,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Machine learning and AI processing services',
    category: 'core'
  },
  {
    id: '6',
    name: 'Quantum Computing API',
    status: 'operational',
    uptime: 99.88,
    responseTime: 180,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Quantum computing simulation and processing',
    category: 'api'
  },
  {
    id: '7',
    name: 'Security Services',
    status: 'operational',
    uptime: 99.99,
    responseTime: 15,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Firewall, DDoS protection, and security monitoring',
    category: 'infrastructure'
  },
  {
    id: '8',
    name: 'CDN & Edge',
    status: 'operational',
    uptime: 99.96,
    responseTime: 25,
    lastUpdated: '2024-12-01T10:00:00Z',
    description: 'Content delivery network and edge computing',
    category: 'infrastructure'
  }
];

const incidentsData: Incident[] = [
  {
    id: '1',
    title: 'Scheduled Maintenance - Database Optimization',
    description: 'Planned maintenance to optimize database performance and implement new indexing strategies.',
    status: 'resolved',
    severity: 'low',
    startTime: '2024-11-30T02:00:00Z',
    endTime: '2024-11-30T04:00:00Z',
    affectedServices: ['Database Cluster', 'API Gateway'],
    updates: [
      {
        id: '1',
        message: 'Maintenance completed successfully. All services restored to normal operation.',
        timestamp: '2024-11-30T04:00:00Z',
        status: 'resolved'
      },
      {
        id: '2',
        message: 'Database optimization in progress. Expected completion within 2 hours.',
        timestamp: '2024-11-30T02:30:00Z',
        status: 'monitoring'
      },
      {
        id: '3',
        message: 'Scheduled maintenance started. Database services may experience brief interruptions.',
        timestamp: '2024-11-30T02:00:00Z',
        status: 'investigating'
      }
    ]
  },
  {
    id: '2',
    title: 'Increased API Response Times',
    description: 'Some API endpoints experiencing higher than normal response times due to increased load.',
    status: 'monitoring',
    severity: 'medium',
    startTime: '2024-11-29T15:00:00Z',
    affectedServices: ['API Gateway', 'Core Platform'],
    updates: [
      {
        id: '1',
        message: 'Performance improvements implemented. Response times returning to normal levels.',
        timestamp: '2024-11-30T08:00:00Z',
        status: 'monitoring'
      },
      {
        id: '2',
        message: 'Identified the cause as increased concurrent user load. Implementing scaling measures.',
        timestamp: '2024-11-29T16:30:00Z',
        status: 'identified'
      },
      {
        id: '3',
        message: 'Investigating increased API response times across multiple endpoints.',
        timestamp: '2024-11-29T15:00:00Z',
        status: 'investigating'
      }
    ]
  }
];

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date());
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-gray-400" />;
    }
  };

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

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-400/20';
      case 'degraded':
        return 'bg-yellow-400/20';
      case 'outage':
        return 'bg-red-400/20';
      case 'maintenance':
        return 'bg-blue-400/20';
      default:
        return 'bg-gray-400/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-400/20 text-blue-400';
      case 'medium':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'high':
        return 'bg-orange-400/20 text-orange-400';
      case 'critical':
        return 'bg-red-400/20 text-red-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

  const overallStatus = systemStatusData.every(service => service.status === 'operational') 
    ? 'operational' 
    : systemStatusData.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const operationalServices = systemStatusData.filter(service => service.status === 'operational').length;
  const totalServices = systemStatusData.length;

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  System Status
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time monitoring of our services and infrastructure. 
                Stay informed about system performance and any ongoing issues.
              </p>
              
              {/* Overall Status */}
              <div className="inline-flex items-center space-x-4 bg-gray-800/50 rounded-2xl px-8 py-4 border border-gray-700/50">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(overallStatus)}
                  <span className={`text-lg font-semibold ${getStatusColor(overallStatus)}`}>
                    {overallStatus === 'operational' ? 'All Systems Operational' :
                     overallStatus === 'degraded' ? 'Partial System Issues' : 'System Outage'}
                  </span>
                </div>
                <div className="text-gray-400">
                  <span className="text-sm">Last updated: {lastUpdated.toLocaleTimeString()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* System Overview */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  System Overview
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Current status of all our services and infrastructure components
              </p>
            </motion.div>

            {/* Status Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-2xl p-6 border border-green-400/20"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{operationalServices}</div>
                  <div className="text-gray-300">Operational</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-2xl p-6 border border-blue-400/20"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {((operationalServices / totalServices) * 100).toFixed(1)}%
                  </div>
                  <div className="text-gray-300">Uptime</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl p-6 border border-purple-400/20"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {Math.round(systemStatusData.reduce((acc, service) => acc + service.responseTime, 0) / totalServices)}ms
                  </div>
                  <div className="text-gray-300">Avg Response</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 rounded-2xl p-6 border border-cyan-400/20"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className={`w-6 h-6 text-cyan-400 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">30s</div>
                  <div className="text-gray-300">Auto Refresh</div>
                </div>
              </motion.div>
            </div>

            {/* Refresh Button */}
            <div className="text-center mb-8">
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="inline-flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 text-gray-300 px-6 py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Refreshing...' : 'Refresh Status'}</span>
              </button>
            </div>

            {/* Service Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemStatusData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBgColor(service.status)} ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white font-medium">{service.uptime}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white font-medium">{service.responseTime}ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Last Updated</span>
                      <span className="text-white font-medium">
                        {new Date(service.lastUpdated).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 lg:py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Recent Incidents
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Track ongoing issues and view incident history
              </p>
            </motion.div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {incidentsData.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBgColor(incident.status)} ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{incident.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                        </div>
                        {incident.endTime && (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <span className="text-sm text-gray-400">Affected Services:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {incident.affectedServices.map(service => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Incident Updates */}
                  <div className="border-t border-gray-700/50 pt-4">
                    <h4 className="font-semibold text-white mb-3">Updates</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, updateIndex) => (
                        <div key={update.id} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm text-gray-400">
                                {new Date(update.timestamp).toLocaleString()}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(update.status)} ${getStatusColor(update.status)}`}>
                                {update.status}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{update.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {incidentsData.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No Active Incidents</h3>
                <p className="text-gray-500">All systems are operating normally.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Stay Informed
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get real-time updates about system status and incidents via email or SMS notifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StatusPage;