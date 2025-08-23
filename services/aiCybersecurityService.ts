export interface SecurityThreat {
  id: string;
  type: 'malware' | 'phishing' | 'ddos' | 'data_breach' | 'insider_threat' | 'zero_day';
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  target: string;
  description: string;
  indicators: string[];
  timestamp: Date;
  status: 'active' | 'investigating' | 'contained' | 'resolved';
  confidence: number;
}

export interface VulnerabilityAssessment {
  id: string;
  assetId: string;
  assetType: 'server' | 'application' | 'network' | 'database' | 'endpoint';
  vulnerability: string;
  cveId?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  cvssScore: number;
  description: string;
  remediation: string;
  discovered: Date;
  lastScanned: Date;
  status: 'open' | 'in_progress' | 'resolved' | 'false_positive';
}

export interface SecurityIncident {
  id: string;
  title: string;
  description: string;
  type: SecurityThreat['type'];
  severity: SecurityThreat['severity'];
  affectedAssets: string[];
  timeline: {
    discovered: Date;
    reported: Date;
    investigationStarted: Date;
    contained?: Date;
    resolved?: Date;
  };
  impact: {
    dataExposed: boolean;
    systemsAffected: number;
    downtime: number;
    financialImpact: number;
  };
  response: {
    team: string[];
    actions: string[];
    lessons: string[];
  };
  status: 'open' | 'investigating' | 'contained' | 'resolved' | 'closed';
}

export interface SecurityPolicy {
  id: string;
  name: string;
  category: 'access_control' | 'data_protection' | 'network_security' | 'incident_response' | 'compliance';
  description: string;
  rules: string[];
  enforcement: 'automatic' | 'manual' | 'hybrid';
  lastUpdated: Date;
  version: string;
  status: 'active' | 'draft' | 'archived';
}

export interface ComplianceReport {
  id: string;
  framework: 'SOC2' | 'ISO27001' | 'GDPR' | 'HIPAA' | 'PCI_DSS' | 'NIST';
  assessmentDate: Date;
  overallScore: number;
  domains: {
    name: string;
    score: number;
    status: 'compliant' | 'non_compliant' | 'partially_compliant';
    findings: string[];
    recommendations: string[];
  }[];
  nextAssessment: Date;
  auditor: string;
}

export interface SecurityMetrics {
  totalThreats: number;
  threatsBySeverity: Record<SecurityThreat['severity'], number>;
  threatsByType: Record<SecurityThreat['type'], number>;
  vulnerabilitiesBySeverity: Record<VulnerabilityAssessment['severity'], number>;
  meanTimeToDetect: number;
  meanTimeToResolve: number;
  securityScore: number;
  complianceScore: number;
  lastUpdated: Date;
}

export interface SecurityScanRequest {
  assetIds: string[];
  scanType: 'vulnerability' | 'compliance' | 'penetration' | 'configuration';
  depth: 'quick' | 'standard' | 'deep';
  includeRemediation: boolean;
  scheduleRecurring: boolean;
}

export interface SecurityScanResponse {
  scanId: string;
  status: 'scheduled' | 'running' | 'completed' | 'failed';
  results: {
    vulnerabilities: VulnerabilityAssessment[];
    threats: SecurityThreat[];
    compliance: ComplianceReport;
    recommendations: string[];
  };
  summary: string;
  nextScan: Date;
}

export class AICybersecurityService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async scanAssets(request: SecurityScanRequest): Promise<SecurityScanResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cybersecurity/scan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Security scan failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Security scan error:', error);
      throw error;
    }
  }

  async getThreats(severity?: SecurityThreat['severity'], type?: SecurityThreat['type']): Promise<SecurityThreat[]> {
    try {
      const params = new URLSearchParams();
      if (severity) params.append('severity', severity);
      if (type) params.append('type', type);

      const response = await fetch(`${this.baseUrl}/api/cybersecurity/threats?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch threats: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching threats:', error);
      throw error;
    }
  }

  async getVulnerabilities(assetId?: string, severity?: VulnerabilityAssessment['severity']): Promise<VulnerabilityAssessment[]> {
    try {
      const params = new URLSearchParams();
      if (assetId) params.append('assetId', assetId);
      if (severity) params.append('severity', severity);

      const response = await fetch(`${this.baseUrl}/api/cybersecurity/vulnerabilities?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch vulnerabilities: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching vulnerabilities:', error);
      throw error;
    }
  }

  async createIncident(incident: Omit<SecurityIncident, 'id' | 'timeline' | 'status'>): Promise<SecurityIncident> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cybersecurity/incidents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(incident),
      });

      if (!response.ok) {
        throw new Error(`Failed to create incident: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating incident:', error);
      throw error;
    }
  }

  async updateIncidentStatus(incidentId: string, status: SecurityIncident['status'], notes?: string): Promise<SecurityIncident> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cybersecurity/incidents/${incidentId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ status, notes }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update incident: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating incident:', error);
      throw error;
    }
  }

  async getSecurityMetrics(timeframe: '24h' | '7d' | '30d' | '90d' = '30d'): Promise<SecurityMetrics> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cybersecurity/metrics?timeframe=${timeframe}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch security metrics: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching security metrics:', error);
      throw error;
    }
  }

  async assessCompliance(framework: ComplianceReport['framework']): Promise<ComplianceReport> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cybersecurity/compliance/${framework}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Compliance assessment failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Compliance assessment error:', error);
      throw error;
    }
  }

  async createSecurityPolicy(policy: Omit<SecurityPolicy, 'id' | 'lastUpdated' | 'version'>): Promise<SecurityPolicy> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cybersecurity/policies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(policy),
      });

      if (!response.ok) {
        throw new Error(`Failed to create security policy: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating security policy:', error);
      throw error;
    }
  }

  async monitorThreats(callback: (threat: SecurityThreat) => void): Promise<void> {
    try {
      // Note: EventSource doesn't support custom headers, so we'll use a different approach
      // In a real implementation, you might use WebSockets or Server-Sent Events with authentication
      const eventSource = new EventSource(`${this.baseUrl}/api/cybersecurity/threats/stream?token=${this.apiKey}`);

      eventSource.onmessage = (event) => {
        const threat: SecurityThreat = JSON.parse(event.data);
        callback(threat);
      };

      eventSource.onerror = (error) => {
        console.error('Threat monitoring error:', error);
        eventSource.close();
      };
    } catch (error) {
      console.error('Error setting up threat monitoring:', error);
      throw error;
    }
  }

  async generateSecurityReport(timeframe: '24h' | '7d' | '30d' | '90d' = '30d'): Promise<string> {
    try {
      const [metrics, threats, vulnerabilities] = await Promise.all([
        this.getSecurityMetrics(timeframe),
        this.getThreats(),
        this.getVulnerabilities(),
      ]);

      let report = `# Security Report\n\n`;
      report += `**Period:** ${timeframe}\n`;
      report += `**Generated:** ${new Date().toLocaleDateString()}\n`;
      report += `**Overall Security Score:** ${metrics.securityScore}/100\n\n`;
      
      report += `## Threat Summary\n\n`;
      report += `- Total Threats: ${metrics.totalThreats}\n`;
      report += `- Critical: ${metrics.threatsBySeverity.critical || 0}\n`;
      report += `- High: ${metrics.threatsBySeverity.high || 0}\n`;
      report += `- Medium: ${metrics.threatsBySeverity.medium || 0}\n`;
      report += `- Low: ${metrics.threatsBySeverity.low || 0}\n\n`;
      
      report += `## Vulnerability Summary\n\n`;
      report += `- Critical: ${metrics.vulnerabilitiesBySeverity.critical || 0}\n`;
      report += `- High: ${metrics.vulnerabilitiesBySeverity.high || 0}\n`;
      report += `- Medium: ${metrics.vulnerabilitiesBySeverity.medium || 0}\n`;
      report += `- Low: ${metrics.vulnerabilitiesBySeverity.low || 0}\n\n`;
      
      report += `## Performance Metrics\n\n`;
      report += `- Mean Time to Detect: ${metrics.meanTimeToDetect} minutes\n`;
      report += `- Mean Time to Resolve: ${metrics.meanTimeToResolve} minutes\n`;
      report += `- Compliance Score: ${metrics.complianceScore}/100\n\n`;
      
      if (threats.length > 0) {
        report += `## Recent Threats\n\n`;
        threats.slice(0, 10).forEach(threat => {
          report += `### ${threat.type.toUpperCase()} - ${threat.severity}\n`;
          report += `- Source: ${threat.source}\n`;
          report += `- Target: ${threat.target}\n`;
          report += `- Description: ${threat.description}\n`;
          report += `- Status: ${threat.status}\n\n`;
        });
      }
      
      if (vulnerabilities.length > 0) {
        report += `## Critical Vulnerabilities\n\n`;
        vulnerabilities
          .filter(v => v.severity === 'critical')
          .slice(0, 5)
          .forEach(vuln => {
            report += `### ${vuln.vulnerability}\n`;
            report += `- Asset: ${vuln.assetId}\n`;
            report += `- CVSS Score: ${vuln.cvssScore}\n`;
            report += `- Remediation: ${vuln.remediation}\n\n`;
          });
      }
      
      return report;
    } catch (error) {
      console.error('Report generation error:', error);
      throw error;
    }
  }
}

export const aiCybersecurityService = new AICybersecurityService(process.env.CYBERSECURITY_API_KEY || '');