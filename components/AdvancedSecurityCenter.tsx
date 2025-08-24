import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Plus, 
  Search, 
  Settings, 
  Download, 
  RefreshCw, 
  Activity,
  Users,
  Database,
  Network,
  Server,
  Smartphone,
  Globe,
  Zap,
  Target,
  TrendingUp,
  AlertCircle,
  Clock,
  Star,
  Brain,
  Lightbulb
} from 'lucide-react';

interface SecurityThreat {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: 'malware' | 'phishing' | 'ddos' | 'data-breach' | 'insider-threat';
  status: 'detected' | 'investigating' | 'mitigated' | 'resolved';
  detectedAt: string;
  lastUpdated: string;
  affectedSystems: string[];
  riskScore: number;
}

interface SecurityMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
  status: 'secure' | 'warning' | 'critical';
  lastUpdated: string;
}

interface ComplianceRequirement {
  id: string;
  name: string;
  standard: 'GDPR' | 'HIPAA' | 'SOX' | 'ISO27001' | 'PCI-DSS';
  status: 'compliant' | 'non-compliant' | 'in-review' | 'pending';
  lastAudit: string;
  nextAudit: string;
  riskLevel: 'low' | 'medium' | 'high';
}

const securityThreats: SecurityThreat[] = [
  {
    id: '1',
    title: 'Suspicious Login Attempt',
    description: 'Multiple failed login attempts detected from unknown IP address',
    severity: 'medium',
    type: 'phishing',
    status: 'investigating',
    detectedAt: '2025-01-27 16:00',
    lastUpdated: '2025-01-27 16:15',
    affectedSystems: ['User Authentication', 'Admin Portal'],
    riskScore: 65
  },
  {
    id: '2',
    title: 'Data Access Anomaly',
    description: 'Unusual data access pattern detected in customer database',
    severity: 'high',
    type: 'insider-threat',
    status: 'detected',
    detectedAt: '2025-01-27 15:45',
    lastUpdated: '2025-01-27 16:00',
    affectedSystems: ['Customer Database', 'User Management'],
    riskScore: 78
  }
];

const securityMetrics: SecurityMetric[] = [
  {
    id: '1',
    name: 'Overall Security Score',
    value: 94,
    target: 90,
    unit: 'points',
    trend: 'improving',
    status: 'secure',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '2',
    name: 'Threat Detection Rate',
    value: 98,
    target: 95,
    unit: '%',
    trend: 'stable',
    status: 'secure',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '3',
    name: 'False Positive Rate',
    value: 2.1,
    target: 5,
    unit: '%',
    trend: 'improving',
    status: 'secure',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '4',
    name: 'Response Time',
    value: 3.2,
    target: 5,
    unit: 'minutes',
    trend: 'improving',
    status: 'secure',
    lastUpdated: '2025-01-27 16:00'
  }
];

const complianceRequirements: ComplianceRequirement[] = [
  {
    id: '1',
    name: 'Data Protection & Privacy',
    standard: 'GDPR',
    status: 'compliant',
    lastAudit: '2025-01-15',
    nextAudit: '2025-07-15',
    riskLevel: 'low'
  },
  {
    id: '2',
    name: 'Information Security Management',
    standard: 'ISO27001',
    status: 'compliant',
    lastAudit: '2024-12-01',
    nextAudit: '2025-12-01',
    riskLevel: 'low'
  },
  {
    id: '3',
    name: 'Payment Card Security',
    standard: 'PCI-DSS',
    status: 'in-review',
    lastAudit: '2025-01-01',
    nextAudit: '2025-04-01',
    riskLevel: 'medium'
  }
];

const severityColors = {
  'low': 'from-green-500 to-emerald-500',
  'medium': 'from-yellow-500 to-orange-500',
  'high': 'from-orange-500 to-red-500',
  'critical': 'from-red-500 to-pink-500'
};

const statusColors = {
  'detected': 'from-red-500 to-pink-500',
  'investigating': 'from-yellow-500 to-orange-500',
  'mitigated': 'from-blue-500 to-cyan-500',
  'resolved': 'from-green-500 to-emerald-500'
};

const complianceStatusColors = {
  'compliant': 'from-green-500 to-emerald-500',
  'non-compliant': 'from-red-500 to-pink-500',
  'in-review': 'from-yellow-500 to-orange-500',
  'pending': 'from-gray-500 to-gray-600'
};

const AdvancedSecurityCenter: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'threats' | 'metrics' | 'compliance'>('overview');
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
            Security Center
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced security monitoring and threat detection center with comprehensive 
            compliance management and real-time security analytics.
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
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+12%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">94</h3>
            <p className="text-gray-400 text-sm">Security Score</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+8%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">98%</h3>
            <p className="text-gray-400 text-sm">Threat Detection</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{securityThreats.length}</h3>
            <p className="text-gray-400 text-sm">Active Threats</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{complianceRequirements.filter(c => c.status === 'compliant').length}</h3>
            <p className="text-gray-400 text-sm">Compliant Standards</p>
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
          {(['overview', 'threats', 'metrics', 'compliance'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Shield className="w-4 h-4 inline mr-2" />}
              {view === 'threats' && <AlertTriangle className="w-4 h-4 inline mr-2" />}
              {view === 'metrics' && <Activity className="w-4 h-4 inline mr-2" />}
              {view === 'compliance' && <CheckCircle className="w-4 h-4 inline mr-2" />}
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
                {/* Security Metrics Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Security Metrics</h3>
                  {securityMetrics.slice(0, 2).map((metric) => (
                    <motion.div
                      key={metric.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2">{metric.name}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 bg-gradient-to-r ${metric.status === 'secure' ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} rounded-full`} />
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
                            className={`h-2 bg-gradient-to-r ${metric.status === 'secure' ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} rounded-full transition-all duration-300`}
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

                {/* Active Threats Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Active Threats</h3>
                  {securityThreats.map((threat) => (
                    <motion.div
                      key={threat.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${severityColors[threat.severity]} rounded-full`} />
                            <h4 className="text-white font-semibold">{threat.title}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[threat.status]} rounded-full text-white text-xs font-medium`}>
                              {threat.status}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{threat.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{threat.riskScore}</div>
                          <div className="text-gray-400 text-sm">Risk Score</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Affected Systems</div>
                        <div className="flex flex-wrap gap-2">
                          {threat.affectedSystems.map((system, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {system}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Detected: {threat.detectedAt} | Updated: {threat.lastUpdated}
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
              Ready to Secure Your Digital Assets?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you implement enterprise-grade security solutions 
              that protect your business and ensure compliance.
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

export default AdvancedSecurityCenter;