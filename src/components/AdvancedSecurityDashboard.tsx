import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  EyeOff, 
  Download, 
  RefreshCw, 
  Settings, 
  X, 
  Maximize2, 
  Minimize2,
  Activity,
  BarChart3,
  TrendingUp,
  Users,
  Server,
  Database,
  Network,
  FileText,
  Clock,
  Zap,
  Target,
  AlertCircle,
  ShieldCheck,
  Fingerprint,
  Key,
  Globe,
  ServerCrash,
  Bug
} from 'lucide-react';

interface SecurityEvent {
  id: string;
  type: 'threat' | 'vulnerability' | 'compliance' | 'access' | 'system';
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  title: string;
  description: string;
  timestamp: string;
  source: string;
  status: 'open' | 'investigating' | 'resolved' | 'false_positive';
  assignedTo?: string;
  priority: 'immediate' | 'high' | 'normal' | 'low';
}

interface ComplianceRequirement {
  id: string;
  framework: 'SOC2' | 'ISO27001' | 'GDPR' | 'HIPAA' | 'PCI-DSS';
  requirement: string;
  status: 'compliant' | 'non_compliant' | 'in_progress' | 'not_applicable';
  lastAudit: string;
  nextAudit: string;
  riskLevel: 'high' | 'medium' | 'low';
  description: string;
  controls: string[];
}

interface SecurityMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  category: string;
}

interface ThreatIntelligence {
  id: string;
  threatType: string;
  description: string;
  riskScore: number;
  affectedSystems: string[];
  mitigationSteps: string[];
  lastSeen: string;
  frequency: number;
}

const mockSecurityEvents: SecurityEvent[] = [
  {
    id: '1',
    type: 'threat',
    severity: 'critical',
    title: 'Suspicious Login Attempts Detected',
    description: 'Multiple failed login attempts from suspicious IP addresses detected across multiple user accounts.',
    timestamp: '2024-01-15T10:00:00.000Z',
    source: '192.168.1.100',
    status: 'investigating',
    assignedTo: 'Security Team',
    priority: 'immediate'
  },
  {
    id: '2',
    type: 'vulnerability',
    severity: 'high',
    title: 'Critical Security Patch Required',
    description: 'High-severity vulnerability detected in production database server. Immediate patching required.',
    timestamp: '2024-01-15T09:30:00.000Z',
    source: 'Database Server',
    status: 'open',
    assignedTo: 'DevOps Team',
    priority: 'high'
  },
  {
    id: '3',
    type: 'compliance',
    severity: 'medium',
    title: 'SOC 2 Audit Due',
    description: 'Annual SOC 2 Type II audit is due in 30 days. Several controls need attention.',
    timestamp: '2024-01-15T08:00:00.000Z',
    source: 'Compliance Team',
    status: 'open',
    assignedTo: 'Compliance Officer',
    priority: 'high'
  }
];

const mockComplianceRequirements: ComplianceRequirement[] = [
  {
    id: '1',
    framework: 'SOC2',
    requirement: 'Access Control Management',
    status: 'compliant',
    lastAudit: '2024-01-01T00:00:00.000Z',
    nextAudit: '2024-12-31T00:00:00.000Z',
    riskLevel: 'low',
    description: 'Ensure proper access controls are in place for all systems and applications.',
    controls: ['Multi-factor authentication', 'Role-based access control', 'Regular access reviews']
  },
  {
    id: '2',
    framework: 'ISO27001',
    requirement: 'Information Security Policy',
    status: 'in_progress',
    lastAudit: '2023-12-01T00:00:00.000Z',
    nextAudit: '2024-06-01T00:00:00.000Z',
    riskLevel: 'medium',
    description: 'Develop and maintain comprehensive information security policies.',
    controls: ['Policy documentation', 'Employee training', 'Regular policy reviews']
  },
  {
    id: '3',
    framework: 'GDPR',
    requirement: 'Data Protection Impact Assessment',
    status: 'non_compliant',
    lastAudit: '2023-11-01T00:00:00.000Z',
    nextAudit: '2024-02-01T00:00:00.000Z',
    riskLevel: 'high',
    description: 'Conduct DPIA for all new data processing activities.',
    controls: ['Risk assessment', 'Mitigation planning', 'Documentation']
  }
];

const mockSecurityMetrics: SecurityMetric[] = [
  {
    id: '1',
    name: 'Security Score',
    value: 87,
    target: 90,
    unit: '%',
    trend: 'up',
    change: 2.5,
    category: 'Overall'
  },
  {
    id: '2',
    name: 'Threat Detection Rate',
    value: 94.2,
    target: 95,
    unit: '%',
    trend: 'up',
    change: 1.8,
    category: 'Detection'
  },
  {
    id: '3',
    name: 'Mean Time to Response',
    value: 15,
    target: 10,
    unit: 'minutes',
    trend: 'down',
    change: -2.3,
    category: 'Response'
  },
  {
    id: '4',
    name: 'Vulnerability Remediation',
    value: 78.5,
    target: 85,
    unit: '%',
    trend: 'up',
    change: 3.2,
    category: 'Remediation'
  }
];

const mockThreatIntelligence: ThreatIntelligence[] = [
  {
    id: '1',
    threatType: 'Ransomware Campaign',
    description: 'Active ransomware campaign targeting healthcare organizations in the region.',
    riskScore: 9.2,
    affectedSystems: ['Windows Servers', 'File Shares', 'Backup Systems'],
    mitigationSteps: ['Update endpoint protection', 'Enable advanced threat protection', 'Review backup procedures'],
    lastSeen: '2024-01-15T09:00:00.000Z',
    frequency: 15
  },
  {
    id: '2',
    threatType: 'Phishing Attack',
    description: 'Sophisticated phishing campaign using executive impersonation.',
    riskScore: 7.8,
    affectedSystems: ['Email Systems', 'User Workstations'],
    mitigationSteps: ['Enhanced email filtering', 'User awareness training', 'Multi-factor authentication'],
    lastSeen: '2024-01-15T08:30:00.000Z',
    frequency: 8
  }
];

export function AdvancedSecurityDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'compliance' | 'threats' | 'analytics'>('overview');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedFramework, setSelectedFramework] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showResolved, setShowResolved] = useState(false);
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>(mockSecurityEvents);
  const [complianceRequirements, setComplianceRequirements] = useState<ComplianceRequirement[]>(mockComplianceRequirements);
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetric[]>(mockSecurityMetrics);
  const [threatIntelligence, setThreatIntelligence] = useState<ThreatIntelligence[]>(mockThreatIntelligence);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const severities = ['all', 'critical', 'high', 'medium', 'low', 'info'];
  const frameworks = ['all', 'SOC2', 'ISO27001', 'GDPR', 'HIPAA', 'PCI-DSS'];

  const filteredEvents = selectedSeverity === 'all' 
    ? securityEvents 
    : securityEvents.filter(event => event.severity === selectedSeverity);

  const filteredCompliance = selectedFramework === 'all' 
    ? complianceRequirements 
    : complianceRequirements.filter(req => req.framework === selectedFramework);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'non_compliant':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'threat':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'vulnerability':
        return <Bug className="w-5 h-5 text-orange-500" />;
      case 'compliance':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'access':
        return <Users className="w-5 h-5 text-purple-500" />;
      default:
        return <Server className="w-5 h-5 text-gray-500" />;
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-red to-zion-orange text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
        title="Open Security Dashboard"
      >
        <Shield className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Shield className="w-5 h-5 text-zion-red" />
          <span className="text-sm font-medium text-zion-slate">Security</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-zion-slate-light rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
      }`} 
      ref={containerRef}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-red to-zion-orange text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Security & Compliance Dashboard</h2>
            <p className="text-sm opacity-90">Real-time Threat Monitoring & Compliance Tracking</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`p-2 rounded-lg transition-colors ${
              autoRefresh ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
          >
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate"
            >
              {severities.map(severity => (
                <option key={severity} value={severity}>
                  {severity === 'all' ? 'All Severities' : severity.charAt(0).toUpperCase() + severity.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate"
            >
              {frameworks.map(framework => (
                <option key={framework} value={framework}>
                  {framework === 'all' ? 'All Frameworks' : framework}
                </option>
              ))}
            </select>
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-zion-red text-white rounded-lg hover:bg-zion-red/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-zion-slate">
              <input
                type="checkbox"
                checked={showResolved}
                onChange={(e) => setShowResolved(e.target.checked)}
                className="rounded"
              />
              Show Resolved
            </label>
            <button className="px-4 py-2 bg-zion-orange text-white rounded-lg hover:bg-zion-orange/90 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'events', label: 'Security Events', icon: AlertTriangle },
          { id: 'compliance', label: 'Compliance', icon: CheckCircle },
          { id: 'threats', label: 'Threat Intel', icon: Shield },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zion-red text-zion-red bg-zion-red/5'
                  : 'border-transparent text-zion-slate-light hover:text-zion-slate hover:bg-zion-slate-light/20'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto h-[calc(100%-200px)]">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Security Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {securityMetrics.map(metric => (
                <div
                  key={metric.id}
                  className="p-4 rounded-xl border border-zion-slate-light bg-white dark:bg-zion-slate hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="text-2xl font-bold text-zion-slate mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {metric.trend === 'up' ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-zion-slate-light">
                      Target: {metric.target}{metric.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Security Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-zion-red/10 to-zion-orange/10 p-6 rounded-xl border border-zion-red/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-zion-red" />
                  Active Security Events
                </h3>
                <div className="space-y-3">
                  {securityEvents.slice(0, 3).map(event => (
                    <div key={event.id} className="flex items-center gap-3 p-3 bg-white dark:bg-zion-slate rounded-lg">
                      {getEventIcon(event.type)}
                      <div className="flex-1">
                        <h4 className="font-medium text-zion-slate text-sm">{event.title}</h4>
                        <p className="text-xs text-zion-slate-light">{event.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(event.severity)}`}>
                        {event.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-blue/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-blue" />
                  Compliance Status
                </h3>
                <div className="space-y-3">
                  {complianceRequirements.slice(0, 3).map(req => (
                    <div key={req.id} className="flex items-center gap-3 p-3 bg-white dark:bg-zion-slate rounded-lg">
                      <div className="w-8 h-8 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-zion-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-zion-slate text-sm">{req.requirement}</h4>
                        <p className="text-xs text-zion-slate-light">{req.framework}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.status)}`}>
                        {req.status.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-4">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  {getEventIcon(event.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(event.severity)}`}>
                        {event.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.priority === 'immediate' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        event.priority === 'high' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {event.priority}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>Source: {event.source}</span>
                      <span>Status: {event.status.replace('_', ' ')}</span>
                      {event.assignedTo && <span>Assigned: {event.assignedTo}</span>}
                      <span>Time: {new Date(event.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="space-y-4">
            {filteredCompliance.map(req => (
              <div
                key={req.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-zion-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{req.requirement}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.status)}`}>
                        {req.status.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(req.riskLevel)}`}>
                        {req.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{req.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Controls:</h4>
                      <div className="flex flex-wrap gap-2">
                        {req.controls.map((control, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-blue/10 text-zion-blue rounded-full text-xs border border-zion-blue/20"
                          >
                            {control}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>Framework: {req.framework}</span>
                      <span>Last Audit: {new Date(req.lastAudit).toLocaleDateString()}</span>
                      <span>Next Audit: {new Date(req.nextAudit).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'threats' && (
          <div className="space-y-4">
            {threatIntelligence.map(threat => (
              <div
                key={threat.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-red/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-zion-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{threat.threatType}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        threat.riskScore >= 8 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        threat.riskScore >= 6 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                        'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        Risk: {threat.riskScore}/10
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{threat.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Affected Systems:</h4>
                      <div className="flex flex-wrap gap-2">
                        {threat.affectedSystems.map((system, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-red/10 text-zion-red rounded-full text-xs border border-zion-red/20"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Mitigation Steps:</h4>
                      <div className="space-y-1">
                        {threat.mitigationSteps.map((step, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-zion-red rounded-full"></span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>Last Seen: {new Date(threat.lastSeen).toLocaleString()}</span>
                      <span>Frequency: {threat.frequency} detections</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="text-center text-zion-slate-light">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Security Analytics</h3>
              <p>Advanced security analytics and threat intelligence reports coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}