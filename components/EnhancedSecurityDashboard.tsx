import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Lock, 
  Key, 
  Server,
  Network,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Activity,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Zap,
  Target,
  BarChart3,
  Bug,
  Mail,
  Code
} from 'lucide-react';

interface SecurityThreat {
  id: string;
  type: 'malware' | 'phishing' | 'ddos' | 'brute-force' | 'sql-injection' | 'xss';
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  target: string;
  timestamp: string;
  status: 'active' | 'blocked' | 'investigating' | 'resolved';
  description: string;
  impact: string;
}

interface SecurityMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
  changeType: 'increase' | 'decrease';
  status: 'secure' | 'warning' | 'critical';
  icon: React.ComponentType<any>;
}

interface EnhancedSecurityDashboardProps {
  title?: string;
  subtitle?: string;
  showThreats?: boolean;
  autoRefresh?: boolean;
}

const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({
  title = "Enhanced Security Dashboard",
  subtitle = "Real-time threat monitoring and security analytics for comprehensive protection",
  showThreats = true,
  autoRefresh = true
}) => {
  const [threats, setThreats] = useState<SecurityThreat[]>([
    {
      id: '1',
      type: 'ddos',
      severity: 'high',
      source: '192.168.1.100',
      target: 'Web Server',
      timestamp: '2024-01-15 14:30:00',
      status: 'blocked',
      description: 'Distributed Denial of Service attack detected',
      impact: 'High traffic volume from multiple sources'
    },
    {
      id: '2',
      type: 'phishing',
      severity: 'medium',
      source: 'suspicious-email@domain.com',
      target: 'User Accounts',
      timestamp: '2024-01-15 13:45:00',
      status: 'investigating',
      description: 'Phishing attempt targeting user credentials',
      impact: 'Potential credential compromise'
    },
    {
      id: '3',
      type: 'brute-force',
      severity: 'low',
      source: '203.45.67.89',
      target: 'SSH Service',
      timestamp: '2024-01-15 12:20:00',
      status: 'blocked',
      description: 'Multiple failed login attempts detected',
      impact: 'Account lockout protection activated'
    }
  ]);

  const [metrics, setMetrics] = useState<SecurityMetric[]>([
    {
      id: 'threats-blocked',
      name: 'Threats Blocked',
      value: 127,
      unit: '',
      change: -15.2,
      changeType: 'decrease',
      status: 'secure',
      icon: Shield
    },
    {
      id: 'response-time',
      name: 'Response Time',
      value: 45,
      unit: 'ms',
      change: -8.5,
      changeType: 'decrease',
      status: 'secure',
      icon: Zap
    },
    {
      id: 'vulnerabilities',
      name: 'Vulnerabilities',
      value: 3,
      unit: '',
      change: -25.0,
      changeType: 'decrease',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      id: 'security-score',
      name: 'Security Score',
      value: 94,
      unit: '/100',
      change: 2.1,
      changeType: 'increase',
      status: 'secure',
      icon: CheckCircle
    }
  ]);

  const [selectedThreat, setSelectedThreat] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<'1h' | '6h' | '24h' | '7d'>('24h');

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      // Simulate new threats
      if (Math.random() > 0.7) {
        const threatTypes = ['malware', 'phishing', 'ddos', 'brute-force'] as const;
        const severityLevels = ['low', 'medium', 'high'] as const;
        const targetSystems = ['Web Server', 'Database', 'API Gateway'];
        
        const newThreat: SecurityThreat = {
          id: Date.now().toString(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)] || 'malware',
          severity: severityLevels[Math.floor(Math.random() * severityLevels.length)] || 'medium',
          source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          target: targetSystems[Math.floor(Math.random() * targetSystems.length)] || 'Web Server',
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
          status: 'active',
          description: 'New security threat detected',
          impact: 'Under investigation'
        };
        setThreats(prev => [newThreat, ...prev.slice(0, 9)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const getThreatTypeIcon = (type: string) => {
    switch (type) {
      case 'malware': return <Bug className="w-5 h-5" />;
      case 'phishing': return <Mail className="w-5 h-5" />;
      case 'ddos': return <Activity className="w-5 h-5" />;
      case 'brute-force': return <Key className="w-5 h-5" />;
      case 'sql-injection': return <Database className="w-5 h-5" />;
      case 'xss': return <Code className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-600 bg-red-100';
      case 'blocked': return 'text-green-600 bg-green-100';
      case 'investigating': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMetricStatusColor = (status: string) => {
    switch (status) {
      case 'secure': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Security Metrics Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
            
            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getMetricStatusColor(metric.status)}`}>
                    {metric.status}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  {metric.name}
                </h3>
                
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>
                  <span className="text-lg text-gray-400 mb-1">
                    {metric.unit}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {metric.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>
                  <span className="text-sm text-gray-500">vs last period</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {(['1h', '6h', '24h', '7d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  timeRange === range
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Security Threats */}
        {showThreats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Active Security Threats</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live Monitoring</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {threats.map((threat) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border ${getSeverityColor(threat.severity)}`}>
                        {getThreatTypeIcon(threat.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-white capitalize">
                            {threat.type.replace('-', ' ')} Attack
                          </h4>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}>
                            {threat.severity}
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                            {threat.status}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-3">{threat.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Source:</span>
                            <span className="text-white ml-2 font-mono">{threat.source}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Target:</span>
                            <span className="text-white ml-2">{threat.target}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Time:</span>
                            <span className="text-white ml-2">{threat.timestamp}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Impact:</span>
                            <span className="text-white ml-2">{threat.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Threat Details */}
                  <AnimatePresence>
                    {selectedThreat === threat.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-700/50"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-200 mb-3">Recommended Actions</h5>
                            <ul className="space-y-2 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Block source IP address
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Update firewall rules
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Monitor for similar patterns
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-200 mb-3">Security Metrics</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Risk Score:</span>
                                <span className="text-white">8.5/10</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Confidence:</span>
                                <span className="text-white">95%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Response Time:</span>
                                <span className="text-white">2.3s</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Security Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Security Status Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2 text-green-400">
                {threats.filter(t => t.status === 'blocked').length}
              </div>
              <div className="text-blue-200">Threats Blocked</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-400">
                {threats.filter(t => t.status === 'investigating').length}
              </div>
              <div className="text-blue-200">Under Investigation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-blue-400">
                {metrics.find(m => m.id === 'security-score')?.value}%
              </div>
              <div className="text-blue-200">Security Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSecurityDashboard;