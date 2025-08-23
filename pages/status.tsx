import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, AlertCircle, XCircle, Clock, 
  Activity, Server, Database, Globe, Zap,
  ArrowRight, RefreshCw, TrendingUp, TrendingDown,
  Wifi, Shield, Cpu, HardDrive, Network, Monitor,
  Brain, Rocket, Building
} from 'lucide-react';

        export default function StatusPage() {
          const serviceStatus = [
            {
              name: 'AI Consciousness API',
              status: 'operational',
              uptime: '99.99%',
              responseTime: '45ms',
              lastIncident: 'None',
              icon: <Brain className="w-6 h-6" />,
              color: 'from-purple-500 to-pink-500'
            },
            {
              name: 'Quantum Computing Platform',
              status: 'operational',
              uptime: '99.95%',
              responseTime: '120ms',
              lastIncident: 'None',
              icon: <Rocket className="w-6 h-6" />,
              color: 'from-blue-500 to-cyan-500'
            },
            {
                    name: 'Space Resource Intelligence',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '78ms',
      lastIncident: 'None',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
            },
            {
              name: 'Autonomous Systems',
              status: 'operational',
              uptime: '99.97%',
              responseTime: '92ms',
              lastIncident: 'None',
              icon: <Shield className="w-6 h-6" />,
              color: 'from-indigo-500 to-purple-500'
            },
            {
              name: 'Data Analytics Engine',
              status: 'operational',
              uptime: '99.96%',
              responseTime: '156ms',
              lastIncident: 'None',
              icon: <Database className="w-6 h-6" />,
              color: 'from-yellow-500 to-orange-500'
            },
            {
              name: 'Enterprise Portal',
              status: 'operational',
              uptime: '99.94%',
              responseTime: '89ms',
              lastIncident: 'None',
              icon: <Building className="w-6 h-6" />,
              color: 'from-red-500 to-pink-500'
            }
          ];

          const systemMetrics = [
            {
              name: 'CPU Usage',
              value: '23%',
              trend: 'down',
              change: '-2.1%',
              status: 'normal',
              icon: <Cpu className="w-5 h-5" />
            },
            {
              name: 'Memory Usage',
              value: '67%',
              trend: 'up',
              change: '+1.8%',
              status: 'normal',
              icon: <HardDrive className="w-5 h-5" />
            },
            {
              name: 'Network Latency',
              value: '12ms',
              trend: 'down',
              change: '-0.5ms',
              status: 'excellent',
              icon: <Network className="w-5 h-5" />
            },
            {
              name: 'Storage Usage',
              value: '45%',
              trend: 'up',
              change: '+0.3%',
              status: 'normal',
              icon: <HardDrive className="w-5 h-5" />
            },
            {
              name: 'Active Connections',
              value: '12.5k',
              trend: 'up',
              change: '+2.3%',
              status: 'normal',
              icon: <Wifi className="w-5 h-5" />
            },
            {
              name: 'Security Status',
              value: 'Protected',
              trend: 'stable',
              change: '0%',
              status: 'excellent',
              icon: <Shield className="w-5 h-5" />
            }
          ];

          const recentIncidents = [
            {
              id: 'INC-2025-001',
              title: 'Scheduled Maintenance - AI Consciousness API',
              description: 'Planned maintenance window for performance optimization and security updates',
              status: 'resolved',
              severity: 'low',
              startTime: '2025-01-10 02:00 UTC',
              endTime: '2025-01-10 04:00 UTC',
              duration: '2 hours',
              affectedServices: ['AI Consciousness API'],
              updates: [
                {
                  time: '2025-01-10 02:00 UTC',
                  message: 'Maintenance started as scheduled'
                },
                {
                  time: '2025-01-10 03:30 UTC',
                  message: 'Updates completed successfully'
                },
                {
                  time: '2025-01-10 04:00 UTC',
                  message: 'All services restored and operational'
                }
              ]
            },
            {
              id: 'INC-2025-002',
              title: 'Network Latency Increase - Resolved',
              description: 'Temporary increase in network latency affecting some regions',
              status: 'resolved',
              severity: 'medium',
              startTime: '2025-01-08 14:30 UTC',
              endTime: '2025-01-08 16:45 UTC',
              duration: '2 hours 15 minutes',
              affectedServices: ['All Services'],
              updates: [
                {
                  time: '2025-01-08 14:30 UTC',
                  message: 'Investigating increased latency reports'
                },
                {
                  time: '2025-01-08 15:15 UTC',
                  message: 'Identified network routing issue'
                },
                {
                  time: '2025-01-08 16:45 UTC',
                  message: 'Issue resolved, latency back to normal'
                }
              ]
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
              default:
                return 'text-gray-400';
            }
          };

          const getStatusIcon = (status: string) => {
            switch (status) {
              case 'operational':
                return <CheckCircle className="w-5 h-5 text-green-400" />;
              case 'degraded':
                return <AlertCircle className="w-5 h-5 text-yellow-400" />;
              case 'outage':
                return <XCircle className="w-5 h-5 text-red-400" />;
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
            <div className="min-h-screen bg-black text-white">
              {/* Hero Section */}
              <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-cyan-900/20" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        System Status
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                      Real-time status of all Zion Tech Group services and systems
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-6 h-6" />
                        <span className="text-lg font-semibold">All Systems Operational</span>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                        <RefreshCw className="w-4 h-4" />
                        Last updated: 2 minutes ago
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Overall Status */}
              <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                      <div className="text-gray-300">Services Operational</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">99.97%</div>
                      <div className="text-gray-300">Average Uptime</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-purple-400 mb-2">97ms</div>
                      <div className="text-gray-300">Average Response</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
                      <div className="text-gray-300">Active Incidents</div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Service Status */}
              <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Service Status
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Current status of all our core services and platforms
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceStatus.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                          <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                              {service.icon}
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h3>
                              {getStatusIcon(service.status)}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Status:</span>
                                <span className={getStatusColor(service.status)}>
                                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Uptime:</span>
                                <span className="text-cyan-400">{service.uptime}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Response:</span>
                                <span className="text-cyan-400">{service.responseTime}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Last Incident:</span>
                                <span className="text-gray-300">{service.lastIncident}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* System Metrics */}
              <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      System Metrics
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Real-time performance metrics and system health indicators
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {systemMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                              {metric.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors duration-300">
                                {metric.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                {metric.trend === 'up' ? (
                                  <TrendingUp className="w-4 h-4 text-green-400" />
                                ) : metric.trend === 'down' ? (
                                  <TrendingDown className="w-4 h-4 text-red-400" />
                                ) : (
                                  <Activity className="w-4 h-4 text-blue-400" />
                                )}
                                <span className={`text-sm ${
                                  metric.trend === 'up' ? 'text-green-400' : 
                                  metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                                }`}>
                                  {metric.change}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">Status: {metric.status}</span>
                            <span className="text-cyan-400 text-sm">View Details</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Recent Incidents */}
              <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Recent Incidents
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      History of recent incidents and their resolution status
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    {recentIncidents.map((incident, index) => (
                      <motion.div
                        key={incident.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                                  {incident.title}
                                </h3>
                                <span className={`px-3 py-1 text-xs rounded-full border ${getSeverityColor(incident.severity)}`}>
                                  {incident.severity.toUpperCase()}
                                </span>
                                <span className={`px-3 py-1 text-xs rounded-full border ${
                                  incident.status === 'resolved' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                }`}>
                                  {incident.status.toUpperCase()}
                                </span>
                              </div>
                              <p className="text-gray-300 mb-3">{incident.description}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                <span>Started: {incident.startTime}</span>
                                <span>Duration: {incident.duration}</span>
                                <span>ID: {incident.id}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Affected Services:</h4>
                            <div className="flex flex-wrap gap-2">
                              {incident.affectedServices.map((service, serviceIndex) => (
                                <span
                                  key={serviceIndex}
                                  className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Updates:</h4>
                            <div className="space-y-2">
                              {incident.updates.map((update, updateIndex) => (
                                <div key={updateIndex} className="flex items-start gap-3 text-sm">
                                  <span className="text-cyan-400 min-w-[120px]">{update.time}</span>
                                  <span className="text-gray-300">{update.message}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Need Help?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Experiencing issues or need technical support? Our team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/support"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Support
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-semibold mb-3">Stay Informed</h3>
                      <p className="text-gray-300 mb-4">
                        Get real-time updates about service status and incidents.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                        />
                        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          );
        }