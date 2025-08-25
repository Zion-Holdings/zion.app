import { useState, useEffect, useCallback, useRef } from 'react';
import { useAnalytics } from './useAnalytics';

interface SecurityEvent {
  id: string;
  type: 'authentication' | 'authorization' | 'data_access' | 'system_change' | 'threat_detected' | 'compliance_violation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  userId?: string;
  userAgent?: string;
  ipAddress?: string;
  resource?: string;
  action?: string;
  details: string;
  status: 'new' | 'investigating' | 'resolved' | 'false_positive';
  metadata?: Record<string, any>;
}

interface ComplianceRule {
  id: string;
  name: string;
  category: 'gdpr' | 'sox' | 'hipaa' | 'pci' | 'iso27001' | 'custom';
  description: string;
  status: 'compliant' | 'non_compliant' | 'pending_review';
  lastChecked: Date;
  nextCheck: Date;
  requirements: string[];
  violations: ComplianceViolation[];
}

interface ComplianceViolation {
  id: string;
  ruleId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: Date;
  status: 'open' | 'investigating' | 'resolved';
  remediation?: string;
}

interface SecurityMetrics {
  totalEvents: number;
  criticalEvents: number;
  highSeverityEvents: number;
  complianceScore: number;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  lastIncident?: Date;
  averageResponseTime: number;
  falsePositiveRate: number;
}

interface SecurityConfig {
  enableRealTimeMonitoring: boolean;
  enableComplianceChecking: boolean;
  enableThreatDetection: boolean;
  enableAuditLogging: boolean;
  complianceRules: ComplianceRule[];
  alertThresholds: {
    criticalEvents: number;
    highSeverityEvents: number;
    complianceViolations: number;
  };
}

interface SecurityComplianceHook {
  // State
  securityEvents: SecurityEvent[];
  complianceRules: ComplianceRule[];
  securityMetrics: SecurityMetrics;
  isMonitoring: boolean;
  isComplianceChecking: boolean;
  
  // Actions
  startMonitoring: () => void;
  stopMonitoring: () => void;
  addSecurityEvent: (event: Omit<SecurityEvent, 'id' | 'timestamp'>) => void;
  updateEventStatus: (eventId: string, status: SecurityEvent['status']) => void;
  addComplianceRule: (rule: Omit<ComplianceRule, 'id' | 'lastChecked' | 'nextCheck'>) => void;
  checkCompliance: () => Promise<void>;
  generateSecurityReport: () => string;
  exportAuditLog: () => string;
  configureSecurity: (config: Partial<SecurityConfig>) => void;
}

export const useSecurityCompliance = (_initialConfig?: Partial<SecurityConfig>): SecurityComplianceHook => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [complianceRules, setComplianceRules] = useState<ComplianceRule[]>([]);
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetrics>({
    totalEvents: 0,
    criticalEvents: 0,
    highSeverityEvents: 0,
    complianceScore: 100,
    threatLevel: 'low',
    averageResponseTime: 0,
    falsePositiveRate: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [isComplianceChecking, setIsComplianceChecking] = useState(false);

  const monitoringIntervalRef = useRef<NodeJS.Timeout>();
  const complianceCheckIntervalRef = useRef<NodeJS.Timeout>();

  // Default compliance rules
  const defaultComplianceRules: ComplianceRule[] = [
    {
      id: 'gdpr-data-protection',
      name: 'GDPR Data Protection',
      category: 'gdpr',
      description: 'Ensure personal data is processed lawfully and securely',
      status: 'compliant',
      lastChecked: new Date(),
      nextCheck: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      requirements: [
        'Data minimization',
        'Purpose limitation',
        'Data accuracy',
        'Storage limitation',
        'Security measures'
      ],
      violations: []
    },
    {
      id: 'sox-financial-controls',
      name: 'SOX Financial Controls',
      category: 'sox',
      description: 'Maintain internal controls over financial reporting',
      status: 'compliant',
      lastChecked: new Date(),
      nextCheck: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      requirements: [
        'Access controls',
        'Change management',
        'System security',
        'Audit logging',
        'Backup procedures'
      ],
      violations: []
    },
    {
      id: 'hipaa-privacy-security',
      name: 'HIPAA Privacy & Security',
      category: 'hipaa',
      description: 'Protect health information privacy and security',
      status: 'compliant',
      lastChecked: new Date(),
      nextCheck: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      requirements: [
        'Privacy rule compliance',
        'Security rule compliance',
        'Breach notification',
        'Business associate agreements',
        'Workforce training'
      ],
      violations: []
    }
  ];

  // Initialize with default rules
  useEffect(() => {
    if (complianceRules.length === 0) {
      setComplianceRules(defaultComplianceRules);
    }
  }, [complianceRules.length]);

  // Start real-time security monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);
    trackEvent('security', 'monitoring', 'started');

    // Simulate real-time security monitoring
    monitoringIntervalRef.current = setInterval(() => {
      // Simulate security events
      const randomEvent = Math.random();
      if (randomEvent < 0.1) { // 10% chance of event
        const eventTypes: SecurityEvent['type'][] = [
          'authentication',
          'data_access',
          'system_change'
        ];
        const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        
        addSecurityEvent({
          type: randomType,
          severity: 'low',
          details: `Simulated ${randomType} event for testing`,
          status: 'new'
        });
      }
    }, 30000); // Check every 30 seconds
  }, [isMonitoring, trackEvent]);

  // Stop security monitoring
  const stopMonitoring = useCallback(() => {
    if (!isMonitoring) return;

    setIsMonitoring(false);
    trackEvent('security', 'monitoring', 'stopped');

    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
    }
  }, [isMonitoring, trackEvent]);

  // Add security event
  const addSecurityEvent = useCallback((event: Omit<SecurityEvent, 'id' | 'timestamp'>) => {
    const newEvent: SecurityEvent = {
      ...event,
      id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };

    setSecurityEvents(prev => [newEvent, ...prev]);
    trackEvent('security', 'event', 'created', undefined, { eventType: event.type, severity: event.severity });

    // Update metrics
    setSecurityMetrics(prev => ({
      ...prev,
      totalEvents: prev.totalEvents + 1,
      criticalEvents: prev.criticalEvents + (event.severity === 'critical' ? 1 : 0),
      highSeverityEvents: prev.highSeverityEvents + (event.severity === 'high' ? 1 : 0)
    }));

    // Check if thresholds are exceeded
    if (event.severity === 'critical' || event.severity === 'high') {
      trackEvent('security', 'alert', 'threshold_exceeded', undefined, { severity: event.severity });
    }
  }, [trackEvent]);

  // Update event status
  const updateEventStatus = useCallback((eventId: string, status: SecurityEvent['status']) => {
    setSecurityEvents(prev => 
      prev.map(event => 
        event.id === eventId ? { ...event, status } : event
      )
    );
    trackEvent('security', 'event', 'status_updated', undefined, { newStatus: status });
  }, [trackEvent]);

  // Add compliance rule
  const addComplianceRule = useCallback((rule: Omit<ComplianceRule, 'id' | 'lastChecked' | 'nextCheck'>) => {
    const newRule: ComplianceRule = {
      ...rule,
      id: `rule-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      lastChecked: new Date(),
      nextCheck: new Date(Date.now() + 24 * 60 * 60 * 1000), // Default to 24 hours
      violations: []
    };

    setComplianceRules(prev => [...prev, newRule]);
    trackEvent('compliance', 'rule', 'added', undefined, { category: rule.category });
  }, [trackEvent]);

  // Check compliance
  const checkCompliance = useCallback(async () => {
    setIsComplianceChecking(true);
    trackEvent('compliance', 'check', 'started');

    try {
      // Simulate compliance checking
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Update compliance status based on security events
      const recentViolations = securityEvents.filter(event => 
        event.type === 'compliance_violation' && 
        event.timestamp > new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
      );

      setComplianceRules(prev => 
        prev.map(rule => {
          const ruleViolations = recentViolations.filter(violation => 
            violation.details.includes(rule.name.toLowerCase())
          );

          const newStatus: ComplianceRule['status'] = ruleViolations.length > 0 ? 'non_compliant' : 'compliant';
          
          return {
            ...rule,
            status: newStatus,
            lastChecked: new Date(),
            nextCheck: new Date(Date.now() + 24 * 60 * 60 * 1000),
            violations: ruleViolations.map(violation => ({
              id: `violation-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              ruleId: rule.id,
              severity: violation.severity,
              description: violation.details,
              timestamp: violation.timestamp,
              status: 'open'
            }))
          };
        })
      );

      // Update compliance score
      const compliantRules = complianceRules.filter(rule => rule.status === 'compliant').length;
      const totalRules = complianceRules.length;
      const newScore = totalRules > 0 ? Math.round((compliantRules / totalRules) * 100) : 100;

      setSecurityMetrics(prev => ({
        ...prev,
        complianceScore: newScore
      }));

      trackEvent('compliance', 'check', 'completed', undefined, { score: newScore });
    } catch (error) {
      trackEvent('compliance', 'check', 'failed', undefined, { error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setIsComplianceChecking(false);
    }
  }, [securityEvents, complianceRules, trackEvent]);

  // Generate security report
  const generateSecurityReport = useCallback(() => {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: securityMetrics,
      recentEvents: securityEvents.slice(0, 10),
      complianceStatus: complianceRules.map(rule => ({
        name: rule.name,
        status: rule.status,
        violations: rule.violations.length
      })),
      recommendations: [] as string[]
    };

    // Generate recommendations
    if (securityMetrics.complianceScore < 80) {
      report.recommendations.push('Immediate compliance review required');
    }
    if (securityMetrics.criticalEvents > 0) {
      report.recommendations.push('Critical security events need immediate attention');
    }
    if (securityMetrics.threatLevel === 'high' || securityMetrics.threatLevel === 'critical') {
      report.recommendations.push('Elevated threat level - implement additional security measures');
    }

    trackEvent('security', 'report', 'generated');
    return JSON.stringify(report, null, 2);
  }, [securityMetrics, securityEvents, complianceRules, trackEvent]);

  // Export audit log
  const exportAuditLog = useCallback(() => {
    const auditLog = {
      exportTimestamp: new Date().toISOString(),
      totalEvents: securityEvents.length,
      events: securityEvents.map(event => ({
        id: event.id,
        type: event.type,
        severity: event.severity,
        timestamp: event.timestamp.toISOString(),
        userId: event.userId,
        ipAddress: event.ipAddress,
        resource: event.resource,
        action: event.action,
        details: event.details,
        status: event.status
      }))
    };

    trackEvent('security', 'audit', 'exported');
    return JSON.stringify(auditLog, null, 2);
  }, [securityEvents, trackEvent]);

  // Configure security settings
  const configureSecurity = useCallback((config: Partial<SecurityConfig>) => {
    if (config.enableRealTimeMonitoring !== undefined) {
      if (config.enableRealTimeMonitoring && !isMonitoring) {
        startMonitoring();
      } else if (!config.enableRealTimeMonitoring && isMonitoring) {
        stopMonitoring();
      }
    }

    if (config.complianceRules) {
      setComplianceRules(config.complianceRules);
    }

    trackEvent('security', 'configuration', 'updated', undefined, { configKeys: Object.keys(config) });
  }, [isMonitoring, startMonitoring, stopMonitoring, trackEvent]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (monitoringIntervalRef.current) {
        clearInterval(monitoringIntervalRef.current);
      }
      if (complianceCheckIntervalRef.current) {
        clearInterval(complianceCheckIntervalRef.current);
      }
    };
  }, []);

  // Auto-compliance check every hour
  useEffect(() => {
    complianceCheckIntervalRef.current = setInterval(() => {
      if (isMonitoring) {
        checkCompliance();
      }
    }, 60 * 60 * 1000); // Every hour

    return () => {
      if (complianceCheckIntervalRef.current) {
        clearInterval(complianceCheckIntervalRef.current);
      }
    };
  }, [isMonitoring, checkCompliance]);

  return {
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
  };
};