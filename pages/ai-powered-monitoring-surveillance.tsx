import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';

interface MonitoringSystem {
  id: string;
  name: string;
  description: string;
  type: 'performance' | 'security' | 'network' | 'application' | 'infrastructure' | 'user';
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  uptime: number;
  responseTime: number;
  alerts: number;
  lastUpdated: Date;
  aiAnalysis: AIMonitoringAnalysis;
}

interface AIMonitoringAnalysis {
  id: string;
  performanceScore: number;
  securityScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface SurveillanceCamera {
  id: string;
  name: string;
  description: string;
  location: string;
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  resolution: string;
  frameRate: number;
  recordingHours: number;
  aiDetection: AISurveillanceDetection;
}

interface AISurveillanceDetection {
  id: string;
  detectionAccuracy: number;
  falsePositiveRate: number;
  recognitionRate: number;
  recommendations: string[];
}

interface SystemAlert {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: 'performance' | 'security' | 'network' | 'application' | 'infrastructure';
  status: 'active' | 'resolved' | 'acknowledged';
  timestamp: Date;
  aiAnalysis: AIAlertAnalysis;
}

interface AIAlertAnalysis {
  id: string;
  severityScore: number;
  priorityScore: number;
  resolutionScore: number;
  recommendations: string[];
}

interface PerformanceMetric {
  id: string;
  name: string;
  description: string;
  category: 'cpu' | 'memory' | 'disk' | 'network' | 'database' | 'application';
  status: 'normal' | 'warning' | 'critical' | 'error';
  currentValue: number;
  threshold: number;
  unit: string;
  aiOptimization: AIPerformanceOptimization;
}

interface AIPerformanceOptimization {
  id: string;
  optimizationScore: number;
  efficiencyScore: number;
  improvementScore: number;
  recommendations: string[];
}

interface SecurityIncident {
  id: string;
  title: string;
  description: string;
  type: 'intrusion' | 'malware' | 'data_breach' | 'ddos' | 'phishing' | 'unauthorized_access';
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'detected' | 'investigating' | 'contained' | 'resolved';
  timestamp: Date;
  aiAnalysis: AISecurityAnalysis;
}

interface AISecurityAnalysis {
  id: string;
  threatScore: number;
  riskScore: number;
  mitigationScore: number;
  recommendations: string[];
}

interface MonitoringSurveillanceAnalytics {
  totalSystems: number;
  activeCameras: number;
  activeAlerts: number;
  securityIncidents: number;
  averageUptime: number;
  aiOptimizationScore: number;
  aiInsights: MonitoringSurveillanceInsight[];
}

interface MonitoringSurveillanceInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredMonitoringSurveillancePage: NextPage = () => {
  const [monitoringSystems, setMonitoringSystems] = useState<MonitoringSystem[]>([])
  const [surveillanceCameras, setSurveillanceCameras] = useState<SurveillanceCamera[]>([])
  const [systemAlerts, setSystemAlerts] = useState<SystemAlert[]>([])
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetric[]>([])
  const [securityIncidents, setSecurityIncidents] = useState<SecurityIncident[]>([])
  const [analytics, setAnalytics] = useState<MonitoringSurveillanceAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'systems' | 'cameras' | 'alerts' | 'performance' | 'security' | 'analytics'>('systems')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockMonitoringSystems: MonitoringSystem[] = [
    {
      id: '1',
      name: 'Main Server Monitoring',
      description: 'Comprehensive monitoring of main server infrastructure',
      type: 'infrastructure',
      status: 'active',
      uptime: 99.8,
      responseTime: 45,
      alerts: 2,
      lastUpdated: new Date('2024-01-20T12:00:00'),
      aiAnalysis: {
        id: '1',
        performanceScore: 92,
        securityScore: 88,
        reliabilityScore: 95,
        recommendations: ['Optimize CPU usage', 'Update security protocols']
      }
    }
  ]

  const mockSurveillanceCameras: SurveillanceCamera[] = [
    {
      id: '1',
      name: 'Main Entrance Camera',
      description: 'High-definition camera monitoring main entrance',
      location: 'Main Entrance',
      status: 'active',
      resolution: '4K',
      frameRate: 30,
      recordingHours: 24,
      aiDetection: {
        id: '1',
        detectionAccuracy: 94,
        falsePositiveRate: 2.1,
        recognitionRate: 89,
        recommendations: ['Adjust lighting', 'Update detection algorithms']
      }
    }
  ]

  const mockSystemAlerts: SystemAlert[] = [
    {
      id: '1',
      title: 'High CPU Usage Detected',
      description: 'CPU usage has exceeded 90% threshold',
      severity: 'high',
      category: 'performance',
      status: 'active',
      timestamp: new Date('2024-01-20T11:30:00'),
      aiAnalysis: {
        id: '1',
        severityScore: 85,
        priorityScore: 78,
        resolutionScore: 82,
        recommendations: ['Scale resources', 'Optimize processes']
      }
    }
  ]

  const mockPerformanceMetrics: PerformanceMetric[] = [
    {
      id: '1',
      name: 'CPU Utilization',
      description: 'Real-time CPU usage monitoring',
      category: 'cpu',
      status: 'warning',
      currentValue: 87,
      threshold: 80,
      unit: '%',
      aiOptimization: {
        id: '1',
        optimizationScore: 85,
        efficiencyScore: 78,
        improvementScore: 82,
        recommendations: ['Load balancing', 'Process optimization']
      }
    }
  ]

  const mockSecurityIncidents: SecurityIncident[] = [
    {
      id: '1',
      title: 'Suspicious Login Attempt',
      description: 'Multiple failed login attempts detected from unknown IP',
      type: 'unauthorized_access',
      severity: 'medium',
      status: 'investigating',
      timestamp: new Date('2024-01-20T10:15:00'),
      aiAnalysis: {
        id: '1',
        threatScore: 65,
        riskScore: 58,
        mitigationScore: 72,
        recommendations: ['Block IP address', 'Enable 2FA']
      }
    }
  ]

  const mockAnalytics: MonitoringSurveillanceAnalytics = {
    totalSystems: 15,
    activeCameras: 8,
    activeAlerts: 3,
    securityIncidents: 2,
    averageUptime: 99.7,
    aiOptimizationScore: 91,
    aiInsights: [
      {
        id: '1',
        title: 'High System Performance',
        description: 'AI-powered monitoring shows 15% improvement in system reliability',
        impact: 'positive',
        confidence: 0.92,
        recommendations: ['Continue AI monitoring', 'Expand surveillance coverage']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setMonitoringSystems(mockMonitoringSystems)
      setSurveillanceCameras(mockSurveillanceCameras)
      setSystemAlerts(mockSystemAlerts)
      setPerformanceMetrics(mockPerformanceMetrics)
      setSecurityIncidents(mockSecurityIncidents)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredSystems = useMemo(() => {
    let filtered = monitoringSystems
    if (selectedType !== 'all') {
      filtered = filtered.filter(system => system.type === selectedType)
    }
    return filtered
  }, [monitoringSystems, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'inactive': return 'bg-gray-500/20 text-gray-300'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300'
      case 'error': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-300'
      case 'high': return 'bg-orange-500/20 text-orange-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Monitoring & Surveillance System | Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring, surveillance tracking, system observation, performance monitoring, security monitoring, and automated alerting powered by AI." />
        <meta name="keywords" content="monitoring, surveillance, tracking, observation, performance, security, AI monitoring" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-44">
          <div className="text-center">
            <h1 className="text-5xl md text-6xl font-bold text-white mb-6">
              AI-Powered Monitoring & Surveillance System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time monitoring, surveillance tracking, system observation, 
              performance monitoring, security monitoring, and automated alerting powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📡 Real-time Monitoring</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📹 Surveillance Tracking</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔒 Security Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-32">
        {isLoading ? (
          <div className="flex justify-center items-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('systems')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'systems'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Systems ({monitoringSystems.length})
              </button>
              <button
                onClick={() => setActiveTab('cameras')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'cameras'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Cameras ({surveillanceCameras.length})
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'alerts'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Alerts ({systemAlerts.length})
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'performance'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Performance ({performanceMetrics.length})
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'security'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Security ({securityIncidents.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Systems Tab */}
            {activeTab === 'systems' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md flex-row justify-between items-center space-y-4 md space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-cyan-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="performance" className="bg-slate-800">Performance</option>
                        <option value="security" className="bg-slate-800">Security</option>
                        <option value="network" className="bg-slate-800">Network</option>
                        <option value="application" className="bg-slate-800">Application</option>
                        <option value="infrastructure" className="bg-slate-800">Infrastructure</option>
                        <option value="user" className="bg-slate-800">User</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover from-cyan-700 hover to-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300">
                      Add System
                    </button>
                  </div>
                </div>

                {/* Systems Grid */}
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {filteredSystems.map((system) => (
                    <div key={system.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{system.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{system.type} System</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(system.status)}`}>
                            {system.status}
                          </span>
                          <div className="mt-2">
                            <span className="px-4 py-3 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300">
                              {system.uptime}% uptime
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{system.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Response Time</div>
                          <div className="text-2xl font-bold text-white">{system.responseTime}ms</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Uptime</div>
                          <div className="text-2xl font-bold text-white">{system.uptime}%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Alerts</div>
                          <div className="text-2xl font-bold text-white">{system.alerts}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Performance</div>
                              <div className="text-white font-semibold">{system.aiAnalysis.performanceScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Security</div>
                              <div className="text-white font-semibold">{system.aiAnalysis.securityScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Reliability</div>
                              <div className="text-white font-semibold">{system.aiAnalysis.reliabilityScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {system.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover from-cyan-700 hover to-blue-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          Configure
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && analytics && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalSystems.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Systems</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeCameras.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Cameras</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.averageUptime}%</div>
                    <div className="text-gray-400 text-sm">Average Uptime</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.aiOptimizationScore}%</div>
                    <div className="text-gray-400 text-sm">AI Optimization Score</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">AI Insights</h3>
                  <div className="space-y-4">
                    {analytics.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            insight.impact === 'positive' ? 'bg-green-500/20 text-green-300' :
                            insight.impact === 'negative' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                        <div className="text-xs text-gray-400 mb-2">
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>
                        <div className="text-xs text-gray-400">
                          <strong>Recommendations:</strong> {insight.recommendations.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-36">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Monitor Everything?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your monitoring journey with our AI-powered surveillance system 
              and gain complete visibility into your operations.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-cyan-500/25 transform hover scale-105">
                Start Monitoring
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
};

export default AIPoweredMonitoringSurveillancePage 