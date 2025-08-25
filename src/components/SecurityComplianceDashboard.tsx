import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  Settings,
  RefreshCw,
  Loader2,
  FileText,
  BarChart3,
  Clock,
  Play,
  Square
} from 'lucide-react';
import { useSecurityCompliance } from '../hooks/useSecurityCompliance';
import { useAnalytics } from '../hooks/useAnalytics';

interface SecurityDashboardProps {
  className?: string;
}

export const SecurityComplianceDashboard: React.FC<SecurityDashboardProps> = ({ className = '' }) => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'compliance' | 'threats' | 'reports'>('overview');
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    securityEvents,
    complianceRules,
    securityMetrics,
    isMonitoring,
    isComplianceChecking,
    startMonitoring,
    stopMonitoring,
    addSecurityEvent,
    updateEventStatus,
    addComplianceRule,
    checkCompliance,
    generateSecurityReport,
    exportAuditLog,
    configureSecurity
  } = useSecurityCompliance();

  const handleStartMonitoring = useCallback(() => {
    startMonitoring();
    trackEvent('security', 'dashboard', 'monitoring_started');
  }, [startMonitoring, trackEvent]);

  const handleStopMonitoring = useCallback(() => {
    stopMonitoring();
    trackEvent('security', 'dashboard', 'monitoring_stopped');
  }, [stopMonitoring, trackEvent]);

  const handleCheckCompliance = useCallback(async () => {
    await checkCompliance();
    trackEvent('security', 'dashboard', 'compliance_checked');
  }, [checkCompliance, trackEvent]);

  const handleGenerateReport = useCallback(() => {
    const report = generateSecurityReport();
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent('security', 'dashboard', 'report_generated');
  }, [generateSecurityReport, trackEvent]);

  const handleExportAuditLog = useCallback(() => {
    const auditLog = exportAuditLog();
    const blob = new Blob([auditLog], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `security-audit-log-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    trackEvent('security', 'dashboard', 'audit_log_exported');
  }, [exportAuditLog, trackEvent]);

  const handleAddComplianceRule = useCallback(() => {
    const newRule = {
      name: 'Custom Compliance Rule',
      category: 'custom' as const,
      description: 'Custom compliance requirement',
      status: 'pending_review' as const,
      requirements: ['Requirement 1', 'Requirement 2'],
      violations: []
    };
    addComplianceRule(newRule);
    trackEvent('security', 'dashboard', 'compliance_rule_added');
  }, [addComplianceRule, trackEvent]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100';
      case 'non_compliant': return 'text-red-600 bg-red-100';
      case 'pending_review': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Security & Compliance
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Real-time monitoring and compliance management
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCheckCompliance}
            disabled={isComplianceChecking}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            {isComplianceChecking ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
            <span>Check Compliance</span>
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Monitoring Status */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isMonitoring ? 'Monitoring Active' : 'Monitoring Inactive'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Last Check: {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {!isMonitoring ? (
              <button
                onClick={handleStartMonitoring}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                <Play className="w-4 h-4" />
                <span>Start Monitoring</span>
              </button>
            ) : (
              <button
                onClick={handleStopMonitoring}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                <Square className="w-4 h-4" />
                <span>Stop Monitoring</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'events', label: 'Security Events', icon: AlertTriangle },
          { id: 'compliance', label: 'Compliance', icon: CheckCircle },
          { id: 'threats', label: 'Threats', icon: Shield },
          { id: 'reports', label: 'Reports', icon: FileText }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === id
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Events</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{securityMetrics.totalEvents}</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Critical Events</p>
                      <p className="text-2xl font-bold text-red-600">{securityMetrics.criticalEvents}</p>
                    </div>
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Compliance Score</p>
                      <p className="text-2xl font-bold text-green-600">{securityMetrics.complianceScore}%</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Threat Level</p>
                      <p className={`text-lg font-bold ${getThreatLevelColor(securityMetrics.threatLevel)}`}>
                        {securityMetrics.threatLevel.toUpperCase()}
                      </p>
                    </div>
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Recent Events */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Security Events</h3>
                <div className="space-y-3">
                  {securityEvents.slice(0, 5).map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getSeverityColor(event.severity)}`}>
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{event.type.replace('_', ' ')}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{event.details}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(event.severity)}`}>
                          {event.severity}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {event.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'events' && (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Events</h3>
                <button
                  onClick={() => addSecurityEvent({
                    type: 'authentication',
                    severity: 'low',
                    details: 'Test security event',
                    status: 'new'
                  })}
                  className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Add Test Event
                </button>
              </div>
              
              <div className="space-y-3">
                {securityEvents.map((event) => (
                  <div key={event.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getSeverityColor(event.severity)}`}>
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {event.type.replace('_', ' ').toUpperCase()}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {event.timestamp.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(event.severity)}`}>
                          {event.severity}
                        </span>
                        <select
                          value={event.status}
                          onChange={(e) => updateEventStatus(event.id, e.target.value as any)}
                          className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="new">New</option>
                          <option value="investigating">Investigating</option>
                          <option value="resolved">Resolved</option>
                          <option value="false_positive">False Positive</option>
                        </select>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{event.details}</p>
                    {event.userId && (
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>User: {event.userId}</span>
                        {event.ipAddress && <span>IP: {event.ipAddress}</span>}
                        {event.resource && <span>Resource: {event.resource}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'compliance' && (
            <motion.div
              key="compliance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Rules</h3>
                <button
                  onClick={handleAddComplianceRule}
                  className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                  Add Rule
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceRules.map((rule) => (
                  <div key={rule.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">{rule.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(rule.status)}`}>
                        {rule.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{rule.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Category:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{rule.category.toUpperCase()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Last Check:</span>
                        <span className="text-gray-900 dark:text-white">
                          {rule.lastChecked.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Violations:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{rule.violations.length}</span>
                      </div>
                    </div>
                    {rule.requirements.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Requirements:</p>
                        <ul className="space-y-1">
                          {rule.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'threats' && (
            <motion.div
              key="threats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Intelligence</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Current Threat Level</h4>
                  <div className={`p-4 rounded-lg border-2 ${getThreatLevelColor(securityMetrics.threatLevel)}`}>
                    <p className="text-2xl font-bold text-center">{securityMetrics.threatLevel.toUpperCase()}</p>
                    <p className="text-center text-sm mt-2">
                      {securityMetrics.threatLevel === 'low' && 'Normal operations'}
                      {securityMetrics.threatLevel === 'medium' && 'Increased vigilance required'}
                      {securityMetrics.threatLevel === 'high' && 'Immediate attention needed'}
                      {securityMetrics.threatLevel === 'critical' && 'Emergency response required'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Response Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Avg Response Time:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {securityMetrics.averageResponseTime}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">False Positive Rate:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {securityMetrics.falsePositiveRate}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Last Incident:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {securityMetrics.lastIncident ? securityMetrics.lastIncident.toLocaleDateString() : 'None'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'reports' && (
            <motion.div
              key="reports"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reports & Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Security Report</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Generate a comprehensive security report with current metrics and recommendations.
                  </p>
                  <button
                    onClick={handleGenerateReport}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    {copied ? (
                      <span className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Copied to Clipboard</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Generate Report</span>
                      </span>
                    )}
                  </button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Audit Log Export</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Export the complete security audit log for compliance and analysis purposes.
                  </p>
                  <button
                    onClick={handleExportAuditLog}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Export Audit Log</span>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isMonitoring}
                    onChange={(e) => configureSecurity({ enableRealTimeMonitoring: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Enable Real-time Monitoring
                  </span>
                </label>
              </div>
              
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isComplianceChecking}
                    onChange={(e) => configureSecurity({ enableComplianceChecking: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Enable Compliance Checking
                  </span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};