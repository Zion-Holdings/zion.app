import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity, 
  Server, 
  Cloud, 
  Database,
  Shield,
  Globe,
  Zap,
  BarChart3,
  TrendingUp,
  Calendar,
  Clock as TimeIcon,
  Brain,
  Atom,
  Rocket
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const StatusPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    {
      name: 'AI Consciousness Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: '2024-12-15',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Quantum Computing Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      lastIncident: '2024-12-10',
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: 'Space Technology Platform',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '78ms',
      lastIncident: '2024-12-12',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: 'Cybersecurity Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '32ms',
      lastIncident: '2024-12-08',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '56ms',
      lastIncident: '2024-12-14',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '28ms',
      lastIncident: '2024-12-16',
      icon: <Server className="w-6 h-6" />
    }
  ];

  const overallStatus = {
    status: 'operational',
    uptime: '99.98%',
    responseTime: '60ms',
    lastIncident: '2024-12-15'
  };

  const recentIncidents = [
    {
      id: 1,
      service: 'Quantum Computing Services',
      severity: 'minor',
      description: 'Increased response time due to high load',
      startTime: '2024-12-10T14:30:00Z',
      endTime: '2024-12-10T16:45:00Z',
      status: 'resolved'
    },
    {
      id: 2,
      service: 'Cloud Infrastructure',
      severity: 'minor',
      description: 'Scheduled maintenance window',
      startTime: '2024-12-14T02:00:00Z',
      endTime: '2024-12-14T04:00:00Z',
      status: 'resolved'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5" />;
      case 'outage':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'major':
        return 'bg-orange-500 text-white';
      case 'minor':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <Layout>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status, uptime information, and incident history for Zion Tech Group's technology platforms and services."
        keywords={["system status", "uptime", "incident history", "service status", "Zion Tech Group", "platform status"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                System Status
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-time status and performance information for all Zion Tech Group platforms and services.
              </p>
              
              {/* Overall Status */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  {getStatusIcon(overallStatus.status)}
                  <span className={`px-4 py-2 rounded-full border text-sm font-medium ${getStatusColor(overallStatus.status)}`}>
                    All Systems {overallStatus.status.charAt(0).toUpperCase() + overallStatus.status.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{overallStatus.uptime}</div>
                    <div className="text-gray-400">Overall Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{overallStatus.responseTime}</div>
                    <div className="text-gray-400">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {new Date(overallStatus.lastIncident).toLocaleDateString()}
                    </div>
                    <div className="text-gray-400">Last Incident</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Status Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Service Status
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current status and performance metrics for all our technology platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white font-semibold">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Last Incident:</span>
                      <span className="text-white font-semibold">
                        {new Date(service.lastIncident).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Recent Incidents
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track the latest incidents and their resolution status.
              </p>
            </motion.div>

            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{incident.service}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <TimeIcon className="w-4 h-4" />
                      Start: {new Date(incident.startTime).toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <TimeIcon className="w-4 h-4" />
                      End: {new Date(incident.endTime).toLocaleString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {recentIncidents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No Recent Incidents</h3>
                <p className="text-gray-500">All systems are operating normally.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Need More Information?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Access detailed status pages, SLO metrics, and incident history.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/status-pages-slo"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Status Pages & SLO
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StatusPage;