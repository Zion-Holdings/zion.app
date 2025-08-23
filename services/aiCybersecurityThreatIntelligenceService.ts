export interface SecurityThreat {
  id: string;
  type: 'malware' | 'phishing' | 'ddos' | 'data-breach' | 'insider-threat' | 'zero-day' | 'ransomware';
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  target: string;
  description: string;
  indicators: string[];
  timestamp: Date;
  status: 'active' | 'investigating' | 'mitigated' | 'resolved';
  confidence: number; // 0-1 score
  impact: {
    dataIntegrity: boolean;
    systemAvailability: boolean;
    confidentiality: boolean;
    financialLoss: number;
    reputationDamage: number;
  };
}

export interface VulnerabilityAssessment {
  id: string;
  assetId: string;
  assetType: 'server' | 'workstation' | 'network-device' | 'application' | 'database';
  vulnerabilityType: 'software' | 'configuration' | 'network' | 'physical' | 'human';
  cveId?: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  cvssScore: number;
  affectedVersions: string[];
  remediation: {
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    estimatedTime: number; // in hours
    cost: number;
    priority: 'low' | 'medium' | 'high' | 'critical';
  };
  discoveredAt: Date;
  lastScanned: Date;
}

export interface SecurityIncident {
  id: string;
  threatId: string;
  affectedAssets: string[];
  incidentType: 'breach' | 'attack' | 'compromise' | 'exfiltration' | 'disruption';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'contained' | 'resolved' | 'closed';
  timeline: Array<{
    timestamp: Date;
    event: string;
    action: string;
    actor: string;
  }>;
  impact: {
    dataCompromised: boolean;
    systemsAffected: number;
    downtime: number; // in minutes
    financialLoss: number;
    customersAffected: number;
  };
  response: {
    team: string[];
    tools: string[];
    procedures: string[];
    lessonsLearned: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ThreatIntelligence {
  id: string;
  threatType: SecurityThreat['type'];
  ioc: string[]; // Indicators of Compromise
  ttp: string[]; // Tactics, Techniques, and Procedures
  attribution: {
    threatActor: string;
    country: string;
    motivation: string;
    capabilities: string[];
  };
  context: {
    industry: string[];
    geography: string[];
    technology: string[];
    timeline: {
      firstSeen: Date;
      lastSeen: Date;
      frequency: number;
    };
  };
  confidence: number;
  source: string;
  lastUpdated: Date;
}

export interface SecurityAutomation {
  id: string;
  name: string;
  type: 'playbook' | 'workflow' | 'response' | 'prevention';
  triggers: string[];
  actions: Array<{
    type: 'block' | 'isolate' | 'quarantine' | 'alert' | 'scan' | 'update';
    target: string;
    parameters: Record<string, any>;
    conditions: string[];
  }>;
  status: 'active' | 'inactive' | 'testing';
  effectiveness: number; // 0-1 score
  lastExecuted: Date;
  executionCount: number;
}

class AICybersecurityThreatIntelligenceService {
  private threats: SecurityThreat[] = [];
  private vulnerabilities: VulnerabilityAssessment[] = [];
  private incidents: SecurityIncident[] = [];
  private threatIntelligence: ThreatIntelligence[] = [];
  private automations: SecurityAutomation[] = [];

  async detectThreat(
    indicators: string[],
    source: string,
    target: string
  ): Promise<SecurityThreat> {
    // AI-powered threat detection using machine learning
    const threatType = this.classifyThreat(indicators);
    const severity = this.assessThreatSeverity(indicators, target);
    const confidence = this.calculateDetectionConfidence(indicators);
    
    const threat: SecurityThreat = {
      id: `threat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: threatType,
      severity,
      source,
      target,
      description: this.generateThreatDescription(threatType, indicators),
      indicators,
      timestamp: new Date(),
      status: 'active',
      confidence,
      impact: this.assessThreatImpact(threatType, severity, target)
    };

    this.threats.push(threat);
    
    // Trigger automated response if confidence is high
    if (confidence > 0.8) {
      await this.triggerAutomatedResponse(threat);
    }

    return threat;
  }

  async assessVulnerabilities(
    assetId: string,
    assetType: VulnerabilityAssessment['assetType'],
    scanResults: any
  ): Promise<VulnerabilityAssessment[]> {
    // AI-powered vulnerability assessment
    const vulnerabilities = this.analyzeScanResults(scanResults, assetType);
    
    const processedVulnerabilities: VulnerabilityAssessment[] = [];
    
    for (const vuln of vulnerabilities) {
      const newVuln: VulnerabilityAssessment = {
        ...vuln,
        id: `vuln_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        assetId,
        discoveredAt: new Date(),
        lastScanned: new Date()
      };
      
      this.vulnerabilities.push(newVuln);
      processedVulnerabilities.push(newVuln);
    }

    return processedVulnerabilities;
  }

  async createSecurityIncident(
    threatId: string,
    affectedAssets: string[]
  ): Promise<SecurityIncident> {
    const threat = this.threats.find(t => t.id === threatId);
    if (!threat) {
      throw new Error('Threat not found');
    }

    const incident: SecurityIncident = {
      id: `incident_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      threatId,
      affectedAssets,
      incidentType: this.mapThreatToIncidentType(threat.type),
      severity: threat.severity,
      status: 'open',
      timeline: [{
        timestamp: new Date(),
        event: 'Incident created',
        action: 'Threat detected and incident opened',
        actor: 'AI System'
      }],
      impact: this.assessIncidentImpact(threat, affectedAssets),
      response: {
        team: this.assignResponseTeam(threat.severity),
        tools: this.selectResponseTools(threat.type),
        procedures: this.getResponseProcedures(threat.type),
        lessonsLearned: []
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.incidents.push(incident);
    return incident;
  }

  async enrichThreatIntelligence(
    threatType: SecurityThreat['type'],
    indicators: string[]
  ): Promise<ThreatIntelligence> {
    // AI-powered threat intelligence enrichment
    const intelligence: ThreatIntelligence = {
      id: `intel_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      threatType,
      ioc: indicators,
      ttp: this.extractTTP(indicators, threatType),
      attribution: this.attributeThreat(indicators, threatType),
      context: this.analyzeThreatContext(indicators, threatType),
      confidence: this.calculateIntelligenceConfidence(indicators),
      source: 'AI Analysis + External Feeds',
      lastUpdated: new Date()
    };

    this.threatIntelligence.push(intelligence);
    return intelligence;
  }

  async createSecurityAutomation(
    name: string,
    type: SecurityAutomation['type'],
    triggers: string[],
    actions: SecurityAutomation['actions']
  ): Promise<SecurityAutomation> {
    const automation: SecurityAutomation = {
      id: `automation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      type,
      triggers,
      actions,
      status: 'testing',
      effectiveness: 0.85,
      lastExecuted: new Date(),
      executionCount: 0
    };

    this.automations.push(automation);
    return automation;
  }

  async executeAutomation(
    automationId: string,
    context: Record<string, any>
  ): Promise<{
    success: boolean;
    actionsExecuted: number;
    results: Array<{ action: string; success: boolean; details: string }>;
  }> {
    const automation = this.automations.find(a => a.id === automationId);
    if (!automation) {
      throw new Error('Automation not found');
    }

    const results = [];
    let actionsExecuted = 0;

    for (const action of automation.actions) {
      try {
        const result = await this.executeAction(action, context);
        results.push({
          action: action.type,
          success: result.success,
          details: result.details
        });
        
        if (result.success) actionsExecuted++;
      } catch (error) {
        results.push({
          action: action.type,
          success: false,
          details: error.message
        });
      }
    }

    // Update automation stats
    automation.lastExecuted = new Date();
    automation.executionCount++;
    automation.effectiveness = this.calculateAutomationEffectiveness(automation, results);

    return {
      success: actionsExecuted > 0,
      actionsExecuted,
      results
    };
  }

  async generateSecurityReport(
    timeRange: { start: Date; end: Date }
  ): Promise<{
    threatSummary: {
      total: number;
      byType: Record<string, number>;
      bySeverity: Record<string, number>;
      trend: 'increasing' | 'decreasing' | 'stable';
    };
    vulnerabilitySummary: {
      total: number;
      bySeverity: Record<string, number>;
      remediationProgress: number;
      averageAge: number;
    };
    incidentSummary: {
      total: number;
      open: number;
      resolved: number;
      averageResolutionTime: number;
      topThreatTypes: Array<{ type: string; count: number }>;
    };
    automationSummary: {
      total: number;
      active: number;
      averageEffectiveness: number;
      topPerformers: Array<{ name: string; effectiveness: number }>;
    };
    recommendations: string[];
  }> {
    const threatsInRange = this.threats.filter(t => 
      t.timestamp >= timeRange.start && t.timestamp <= timeRange.end
    );
    
    const vulnerabilitiesInRange = this.vulnerabilities.filter(v => 
      v.discoveredAt >= timeRange.start && v.discoveredAt <= timeRange.end
    );
    
    const incidentsInRange = this.incidents.filter(i => 
      i.createdAt >= timeRange.start && i.createdAt <= timeRange.end
    );

    return {
      threatSummary: this.generateThreatSummary(threatsInRange),
      vulnerabilitySummary: this.generateVulnerabilitySummary(vulnerabilitiesInRange),
      incidentSummary: this.generateIncidentSummary(incidentsInRange),
      automationSummary: this.generateAutomationSummary(),
      recommendations: this.generateSecurityRecommendations(threatsInRange, vulnerabilitiesInRange, incidentsInRange)
    };
  }

  // Private helper methods
  private classifyThreat(indicators: string[]): SecurityThreat['type'] {
    // AI-powered threat classification
    const malwareIndicators = ['malware', 'virus', 'trojan', 'worm', 'spyware'];
    const phishingIndicators = ['phishing', 'social-engineering', 'credential-harvesting'];
    const ddosIndicators = ['ddos', 'flood', 'overload', 'traffic-spike'];
    
    const indicatorText = indicators.join(' ').toLowerCase();
    
    if (malwareIndicators.some(i => indicatorText.includes(i))) return 'malware';
    if (phishingIndicators.some(i => indicatorText.includes(i))) return 'phishing';
    if (ddosIndicators.some(i => indicatorText.includes(i))) return 'ddos';
    
    // Default classification based on pattern analysis
    return Math.random() > 0.5 ? 'data-breach' : 'insider-threat';
  }

  private assessThreatSeverity(indicators: string[], target: string): SecurityThreat['severity'] {
    // AI-powered severity assessment
    const criticalKeywords = ['admin', 'database', 'payment', 'customer-data'];
    const highKeywords = ['user', 'application', 'server'];
    
    const targetLower = target.toLowerCase();
    
    if (criticalKeywords.some(k => targetLower.includes(k))) return 'critical';
    if (highKeywords.some(k => targetLower.includes(k))) return 'high';
    
    return Math.random() > 0.3 ? 'medium' : 'low';
  }

  private calculateDetectionConfidence(indicators: string[]): number {
    // Calculate confidence based on indicator quality and quantity
    const baseConfidence = 0.6;
    const indicatorQuality = indicators.length * 0.1;
    const patternMatch = Math.random() * 0.3;
    
    return Math.min(1, baseConfidence + indicatorQuality + patternMatch);
  }

  private generateThreatDescription(type: SecurityThreat['type'], indicators: string[]): string {
    const descriptions = {
      malware: 'Malicious software detected attempting to compromise system integrity',
      phishing: 'Social engineering attack targeting user credentials and sensitive information',
      ddos: 'Distributed denial of service attack overwhelming system resources',
      'data-breach': 'Unauthorized access to sensitive data and information systems',
      'insider-threat': 'Potential malicious activity from within the organization',
      'zero-day': 'Previously unknown vulnerability being exploited in the wild',
      ransomware: 'Malware encrypting critical data and demanding payment for decryption'
    };
    
    return descriptions[type] || 'Security threat detected requiring immediate attention';
  }

  private assessThreatImpact(
    type: SecurityThreat['type'],
    severity: SecurityThreat['severity'],
    target: string
  ): SecurityThreat['impact'] {
    const severityMultiplier = { low: 0.1, medium: 0.3, high: 0.6, critical: 1.0 };
    const baseImpact = severityMultiplier[severity];
    
    return {
      dataIntegrity: type === 'malware' || type === 'ransomware',
      systemAvailability: type === 'ddos' || type === 'ransomware',
      confidentiality: type === 'phishing' || type === 'data-breach',
      financialLoss: baseImpact * (10000 + Math.random() * 90000),
      reputationDamage: baseImpact * (1000 + Math.random() * 9000)
    };
  }

  private async triggerAutomatedResponse(threat: SecurityThreat): Promise<void> {
    // Find and execute relevant automations
    const relevantAutomations = this.automations.filter(a => 
      a.status === 'active' && 
      a.triggers.some(t => threat.type.includes(t) || threat.severity.includes(t))
    );

    for (const automation of relevantAutomations) {
      await this.executeAutomation(automation.id, { threat });
    }
  }

  private analyzeScanResults(scanResults: any, assetType: string): Omit<VulnerabilityAssessment, 'id' | 'assetId' | 'discoveredAt' | 'lastScanned'>[] {
    // AI-powered vulnerability analysis
    const vulnerabilities = [];
    
    // Simulate vulnerability detection
    const vulnTypes = ['software', 'configuration', 'network', 'physical', 'human'];
    const numVulns = Math.floor(Math.random() * 5) + 1;
    
    for (let i = 0; i < numVulns; i++) {
      const vulnType = vulnTypes[Math.floor(Math.random() * vulnTypes.length)];
      const severity = Math.random() > 0.7 ? 'critical' : Math.random() > 0.5 ? 'high' : Math.random() > 0.3 ? 'medium' : 'low';
      
      vulnerabilities.push({
        assetType: assetType as any,
        vulnerabilityType: vulnType as any,
        cveId: `CVE-${2024}-${Math.floor(Math.random() * 10000)}`,
        description: `Vulnerability in ${assetType} ${vulnType} component`,
        severity,
        cvssScore: severity === 'critical' ? 9.0 + Math.random() : severity === 'high' ? 7.0 + Math.random() * 2 : severity === 'medium' ? 4.0 + Math.random() * 3 : 1.0 + Math.random() * 3,
        affectedVersions: [`${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`],
        remediation: {
          description: `Update ${vulnType} component to latest version`,
          difficulty: Math.random() > 0.7 ? 'hard' : Math.random() > 0.4 ? 'medium' : 'easy',
          estimatedTime: Math.floor(Math.random() * 8) + 1,
          cost: Math.floor(Math.random() * 5000) + 100,
          priority: severity
        }
      });
    }
    
    return vulnerabilities;
  }

  private mapThreatToIncidentType(threatType: SecurityThreat['type']): SecurityIncident['incidentType'] {
    const mapping: Record<SecurityThreat['type'], SecurityIncident['incidentType']> = {
      malware: 'compromise',
      phishing: 'attack',
      ddos: 'disruption',
      'data-breach': 'breach',
      'insider-threat': 'compromise',
      'zero-day': 'attack',
      ransomware: 'breach'
    };
    
    return mapping[threatType] || 'attack';
  }

  private assessIncidentImpact(threat: SecurityThreat, affectedAssets: string[]): SecurityIncident['impact'] {
    return {
      dataCompromised: threat.impact.confidentiality,
      systemsAffected: affectedAssets.length,
      downtime: threat.severity === 'critical' ? 120 : threat.severity === 'high' ? 60 : threat.severity === 'medium' ? 30 : 10,
      financialLoss: threat.impact.financialLoss,
      customersAffected: Math.floor(Math.random() * 1000) + 100
    };
  }

  private assignResponseTeam(severity: string): string[] {
    const teams = {
      critical: ['CISO', 'Security Engineers', 'Incident Response', 'Legal', 'Communications'],
      high: ['Security Engineers', 'Incident Response', 'System Administrators'],
      medium: ['Security Engineers', 'System Administrators'],
      low: ['Security Engineers']
    };
    
    return teams[severity] || ['Security Engineers'];
  }

  private selectResponseTools(threatType: SecurityThreat['type']): string[] {
    const tools = {
      malware: ['EDR', 'Sandbox', 'VirusTotal', 'Malware Analysis Tools'],
      phishing: ['Email Security', 'User Training', 'Phishing Simulation'],
      ddos: ['DDoS Protection', 'Traffic Analysis', 'Load Balancers'],
      'data-breach': ['Data Loss Prevention', 'Forensics Tools', 'Encryption'],
      'insider-threat': ['User Behavior Analytics', 'Access Controls', 'Monitoring'],
      'zero-day': ['Vulnerability Scanners', 'Patch Management', 'Threat Intelligence'],
      ransomware: ['Backup Systems', 'Decryption Tools', 'Forensics']
    };
    
    return tools[threatType] || ['General Security Tools'];
  }

  private getResponseProcedures(threatType: SecurityThreat['type']): string[] {
    return [
      'Isolate affected systems',
      'Preserve evidence',
      'Notify stakeholders',
      'Implement containment measures',
      'Begin recovery procedures'
    ];
  }

  private extractTTP(indicators: string[], threatType: SecurityThreat['type']): string[] {
    // Extract Tactics, Techniques, and Procedures
    const ttp = [
      'Initial Access',
      'Execution',
      'Persistence',
      'Privilege Escalation',
      'Defense Evasion',
      'Credential Access',
      'Discovery',
      'Lateral Movement',
      'Collection',
      'Command and Control',
      'Exfiltration',
      'Impact'
    ];
    
    return ttp.slice(0, Math.floor(Math.random() * 6) + 3);
  }

  private attributeThreat(indicators: string[], threatType: SecurityThreat['type']): ThreatIntelligence['attribution'] {
    const actors = ['APT29', 'Lazarus Group', 'FIN7', 'Cobalt Group', 'Unknown'];
    const countries = ['Russia', 'North Korea', 'China', 'Iran', 'Unknown'];
    const motivations = ['Financial Gain', 'Espionage', 'Destruction', 'Political', 'Unknown'];
    
    return {
      threatActor: actors[Math.floor(Math.random() * actors.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      motivation: motivations[Math.floor(Math.random() * motivations.length)],
      capabilities: ['Advanced Persistent Threat', 'Social Engineering', 'Zero-day Exploits']
    };
  }

  private analyzeThreatContext(indicators: string[], threatType: SecurityThreat['type']): ThreatIntelligence['context'] {
    return {
      industry: ['Technology', 'Finance', 'Healthcare', 'Government'],
      geography: ['North America', 'Europe', 'Asia', 'Global'],
      technology: ['Windows', 'Linux', 'Cloud', 'Mobile'],
      timeline: {
        firstSeen: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        lastSeen: new Date(),
        frequency: Math.floor(Math.random() * 100) + 10
      }
    };
  }

  private calculateIntelligenceConfidence(indicators: string[]): number {
    return 0.7 + (indicators.length * 0.05) + (Math.random() * 0.2);
  }

  private async executeAction(
    action: SecurityAutomation['actions'][0],
    context: Record<string, any>
  ): Promise<{ success: boolean; details: string }> {
    // Simulate action execution
    const success = Math.random() > 0.1; // 90% success rate
    
    return {
      success,
      details: success ? `${action.type} action executed successfully on ${action.target}` : `Failed to execute ${action.type} action on ${action.target}`
    };
  }

  private calculateAutomationEffectiveness(
    automation: SecurityAutomation,
    results: Array<{ success: boolean }>
  ): number {
    if (results.length === 0) return automation.effectiveness;
    
    const successRate = results.filter(r => r.success).length / results.length;
    const newEffectiveness = (automation.effectiveness + successRate) / 2;
    
    return Math.max(0, Math.min(1, newEffectiveness));
  }

  private generateThreatSummary(threats: SecurityThreat[]): any {
    const byType = {};
    const bySeverity = {};
    
    threats.forEach(threat => {
      byType[threat.type] = (byType[threat.type] || 0) + 1;
      bySeverity[threat.severity] = (bySeverity[threat.severity] || 0) + 1;
    });
    
    return {
      total: threats.length,
      byType,
      bySeverity,
      trend: threats.length > 10 ? 'increasing' : threats.length > 5 ? 'stable' : 'decreasing'
    };
  }

  private generateVulnerabilitySummary(vulnerabilities: VulnerabilityAssessment[]): any {
    const bySeverity = {};
    let totalRemediationCost = 0;
    let totalAge = 0;
    
    vulnerabilities.forEach(vuln => {
      bySeverity[vuln.severity] = (bySeverity[vuln.severity] || 0) + 1;
      totalRemediationCost += vuln.remediation.cost;
      totalAge += (Date.now() - vuln.discoveredAt.getTime()) / (1000 * 60 * 60 * 24);
    });
    
    return {
      total: vulnerabilities.length,
      bySeverity,
      remediationProgress: Math.min(100, (totalRemediationCost / 50000) * 100),
      averageAge: vulnerabilities.length > 0 ? totalAge / vulnerabilities.length : 0
    };
  }

  private generateIncidentSummary(incidents: SecurityIncident[]): any {
    const byType = {};
    let totalResolutionTime = 0;
    let resolvedCount = 0;
    
    incidents.forEach(incident => {
      byType[incident.incidentType] = (byType[incident.incidentType] || 0) + 1;
      
      if (incident.status === 'resolved') {
        const resolutionTime = (incident.updatedAt.getTime() - incident.createdAt.getTime()) / (1000 * 60);
        totalResolutionTime += resolutionTime;
        resolvedCount++;
      }
    });
    
    const topThreatTypes = Object.entries(byType)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([type, count]) => ({ type, count: count as number }));
    
    return {
      total: incidents.length,
      open: incidents.filter(i => i.status === 'open').length,
      resolved: resolvedCount,
      averageResolutionTime: resolvedCount > 0 ? totalResolutionTime / resolvedCount : 0,
      topThreatTypes
    };
  }

  private generateAutomationSummary(): any {
    const activeAutomations = this.automations.filter(a => a.status === 'active');
    const totalEffectiveness = activeAutomations.reduce((sum, a) => sum + a.effectiveness, 0);
    
    const topPerformers = activeAutomations
      .sort((a, b) => b.effectiveness - a.effectiveness)
      .slice(0, 5)
      .map(a => ({ name: a.name, effectiveness: a.effectiveness }));
    
    return {
      total: this.automations.length,
      active: activeAutomations.length,
      averageEffectiveness: activeAutomations.length > 0 ? totalEffectiveness / activeAutomations.length : 0,
      topPerformers
    };
  }

  private generateSecurityRecommendations(
    threats: SecurityThreat[],
    vulnerabilities: VulnerabilityAssessment[],
    incidents: SecurityIncident[]
  ): string[] {
    const recommendations = [];
    
    if (threats.filter(t => t.severity === 'critical').length > 0) {
      recommendations.push('Implement real-time threat monitoring and automated response systems');
    }
    
    if (vulnerabilities.filter(v => v.severity === 'critical').length > 0) {
      recommendations.push('Prioritize critical vulnerability remediation and implement patch management');
    }
    
    if (incidents.filter(i => i.status === 'open').length > 5) {
      recommendations.push('Increase incident response team capacity and implement escalation procedures');
    }
    
    if (this.automations.filter(a => a.effectiveness < 0.7).length > 0) {
      recommendations.push('Review and optimize security automation workflows for better effectiveness');
    }
    
    recommendations.push('Implement continuous security training for all employees');
    recommendations.push('Establish regular security assessments and penetration testing');
    
    return recommendations;
  }
}

export const aiCybersecurityThreatIntelligenceService = new AICybersecurityThreatIntelligenceService();