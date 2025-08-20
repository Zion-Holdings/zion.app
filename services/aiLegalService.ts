export interface LegalDocument {
  id: string;
  title: string;
  type: 'contract' | 'agreement' | 'policy' | 'terms' | 'privacy' | 'nda';
  content: string;
  status: 'draft' | 'review' | 'final' | 'signed';
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  jurisdiction: string;
  version: string;
}

export interface ContractTemplate {
  id: string;
  name: string;
  description: string;
  category: 'business' | 'employment' | 'real-estate' | 'intellectual-property' | 'service';
  content: string;
  variables: string[];
  jurisdiction: string;
  lastUpdated: Date;
}

export interface LegalReview {
  id: string;
  documentId: string;
  issues: {
    severity: 'low' | 'medium' | 'high' | 'critical';
    category: 'compliance' | 'liability' | 'enforceability' | 'clarity';
    description: string;
    suggestion: string;
    lineNumber?: number;
  }[];
  complianceScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
  reviewedAt: Date;
}

export interface ComplianceCheck {
  id: string;
  documentId: string;
  regulations: string[];
  complianceStatus: Record<string, 'compliant' | 'non-compliant' | 'requires-review'>;
  violations: {
    regulation: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    remediation: string;
  }[];
  overallScore: number;
  checkedAt: Date;
}

export interface DocumentGenerationRequest {
  templateId: string;
  variables: Record<string, string>;
  jurisdiction: string;
  customizations?: string[];
  language?: string;
}

class AILegalService {
  private contractTemplates: ContractTemplate[] = [
    {
      id: 'nda-standard',
      name: 'Standard NDA',
      description: 'Non-disclosure agreement for business partnerships',
      category: 'business',
      content: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into as of {date} by and between {company_name} ("Disclosing Party") and {recipient_name} ("Receiving Party").

1. CONFIDENTIAL INFORMATION
The Receiving Party acknowledges that it may receive confidential information from the Disclosing Party, including but not limited to {confidential_info}.

2. NON-DISCLOSURE
The Receiving Party agrees to maintain the confidentiality of all confidential information and not to disclose it to any third party without prior written consent.

3. TERM
This Agreement shall remain in effect for {duration} years from the date of execution.

4. GOVERNING LAW
This Agreement shall be governed by the laws of {jurisdiction}.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

{company_name}
By: _________________
Title: ________________

{recipient_name}
By: _________________
Title: ________________`,
      variables: ['date', 'company_name', 'recipient_name', 'confidential_info', 'duration', 'jurisdiction'],
      jurisdiction: 'US',
      lastUpdated: new Date('2025-01-01')
    },
    {
      id: 'service-agreement',
      name: 'Service Agreement',
      description: 'Standard service agreement for professional services',
      category: 'service',
      content: `SERVICE AGREEMENT

This Service Agreement (the "Agreement") is entered into as of {date} by and between {client_name} ("Client") and {service_provider} ("Service Provider").

1. SERVICES
Service Provider agrees to provide the following services: {services_description}.

2. COMPENSATION
Client agrees to pay Service Provider {payment_amount} for the services rendered, payable {payment_terms}.

3. TERM
This Agreement shall commence on {start_date} and continue until {end_date} unless terminated earlier.

4. TERMINATION
Either party may terminate this Agreement with {notice_period} days written notice.

5. GOVERNING LAW
This Agreement shall be governed by the laws of {jurisdiction}.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

{client_name}
By: _________________
Title: ________________

{service_provider}
By: _________________
Title: ________________`,
      variables: ['date', 'client_name', 'service_provider', 'services_description', 'payment_amount', 'payment_terms', 'start_date', 'end_date', 'notice_period', 'jurisdiction'],
      jurisdiction: 'US',
      lastUpdated: new Date('2025-01-01')
    }
  ];

  async generateDocument(request: DocumentGenerationRequest): Promise<LegalDocument> {
    try {
      const template = this.contractTemplates.find(t => t.id === request.templateId);
      if (!template) {
        throw new Error('Template not found');
      }

      let content = template.content;
      
      // Replace variables in template
      Object.entries(request.variables).forEach(([key, value]) => {
        content = content.replace(new RegExp(`{${key}}`, 'g'), value);
      });

      const document: LegalDocument = {
        id: `doc-${Date.now()}`,
        title: `${template.name} - ${request.variables.company_name || request.variables.client_name || 'Generated'}`,
        type: this.getDocumentType(template.category),
        content,
        status: 'draft',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [template.category, request.jurisdiction],
        jurisdiction: request.jurisdiction,
        version: '1.0'
      };

      return document;
    } catch (error) {
      console.error('Document generation failed:', error);
      throw new Error('Failed to generate legal document');
    }
  }

  async reviewDocument(document: LegalDocument): Promise<LegalReview> {
    try {
      const issues = this.analyzeDocument(document);
      const complianceScore = this.calculateComplianceScore(issues);
      const riskLevel = this.assessRiskLevel(issues);
      const recommendations = this.generateRecommendations(issues);

      return {
        id: `review-${Date.now()}`,
        documentId: document.id,
        issues,
        complianceScore,
        riskLevel,
        recommendations,
        reviewedAt: new Date()
      };
    } catch (error) {
      console.error('Document review failed:', error);
      throw new Error('Failed to review document');
    }
  }

  async checkCompliance(document: LegalDocument, regulations: string[]): Promise<ComplianceCheck> {
    try {
      const complianceStatus: Record<string, 'compliant' | 'non-compliant' | 'requires-review'> = {};
      const violations: {
        regulation: string;
        description: string;
        severity: 'low' | 'medium' | 'high';
        remediation: string;
      }[] = [];

      regulations.forEach(regulation => {
        const status = this.checkRegulationCompliance(document, regulation);
        complianceStatus[regulation] = status.status;
        
        if (status.violations.length > 0) {
          violations.push(...status.violations);
        }
      });

      const overallScore = this.calculateOverallComplianceScore(complianceStatus);

      return {
        id: `compliance-${Date.now()}`,
        documentId: document.id,
        regulations,
        complianceStatus,
        violations,
        overallScore,
        checkedAt: new Date()
      };
    } catch (error) {
      console.error('Compliance check failed:', error);
      throw new Error('Failed to check compliance');
    }
  }

  async getTemplates(category?: string): Promise<ContractTemplate[]> {
    try {
      if (category) {
        return this.contractTemplates.filter(t => t.category === category);
      }
      return this.contractTemplates;
    } catch (error) {
      console.error('Failed to fetch templates:', error);
      throw new Error('Failed to fetch contract templates');
    }
  }

  async searchLegalPrecedents(query: string, jurisdiction: string): Promise<{
    title: string;
    summary: string;
    relevance: number;
    citation: string;
  }[]> {
    try {
      // In a real implementation, this would search legal databases
      // For now, return mock precedents
      const mockPrecedents = [
        {
          title: 'Smith v. Johnson (2024)',
          summary: 'Case involving similar contractual terms and enforcement',
          relevance: 0.85,
          citation: '2024 WL 1234567'
        },
        {
          title: 'Business Services Corp. v. Tech Solutions (2023)',
          summary: 'Precedent for service agreement termination clauses',
          relevance: 0.72,
          citation: '2023 WL 7654321'
        }
      ];

      return mockPrecedents.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error('Legal precedent search failed:', error);
      throw new Error('Failed to search legal precedents');
    }
  }

  private getDocumentType(category: string): LegalDocument['type'] {
    const typeMap: Record<string, LegalDocument['type']> = {
      'business': 'agreement',
      'employment': 'agreement',
      'real-estate': 'contract',
      'intellectual-property': 'agreement',
      'service': 'contract'
    };
    return typeMap[category] || 'agreement';
  }

  private analyzeDocument(document: LegalDocument): LegalReview['issues'] {
    const issues: LegalReview['issues'] = [];
    
    // Check for missing essential clauses
    const essentialClauses = ['governing law', 'termination', 'liability'];
    essentialClauses.forEach(clause => {
      if (!document.content.toLowerCase().includes(clause.toLowerCase())) {
        issues.push({
          severity: 'high',
          category: 'enforceability',
          description: `Missing essential clause: ${clause}`,
          suggestion: `Add a ${clause} clause to ensure enforceability`
        });
      }
    });

    // Check for unclear language
    const unclearPhrases = ['reasonable', 'substantial', 'material'];
    unclearPhrases.forEach(phrase => {
      if (document.content.toLowerCase().includes(phrase.toLowerCase())) {
        issues.push({
          severity: 'medium',
          category: 'clarity',
          description: `Unclear language: "${phrase}"`,
          suggestion: `Define "${phrase}" or use more specific language`
        });
      }
    });

    // Check for one-sided terms
    if (this.isOneSided(document.content)) {
      issues.push({
        severity: 'medium',
        category: 'enforceability',
        description: 'Potentially one-sided terms detected',
        suggestion: 'Review terms for balance and fairness'
      });
    }

    return issues;
  }

  private isOneSided(content: string): boolean {
    const oneSidedIndicators = [
      'sole discretion',
      'unlimited liability',
      'no recourse',
      'irrevocable right'
    ];
    
    return oneSidedIndicators.some(indicator => 
      content.toLowerCase().includes(indicator.toLowerCase())
    );
  }

  private calculateComplianceScore(issues: LegalReview['issues']): number {
    let score = 100;
    
    issues.forEach(issue => {
      switch (issue.severity) {
        case 'critical':
          score -= 25;
          break;
        case 'high':
          score -= 15;
          break;
        case 'medium':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });
    
    return Math.max(0, score);
  }

  private assessRiskLevel(issues: LegalReview['issues']): 'low' | 'medium' | 'high' {
    const criticalCount = issues.filter(i => i.severity === 'critical').length;
    const highCount = issues.filter(i => i.severity === 'high').length;
    
    if (criticalCount > 0 || highCount > 2) return 'high';
    if (highCount > 0 || issues.length > 5) return 'medium';
    return 'low';
  }

  private generateRecommendations(issues: LegalReview['issues']): string[] {
    const recommendations: string[] = [];
    
    issues.forEach(issue => {
      if (issue.severity === 'critical' || issue.severity === 'high') {
        recommendations.push(`URGENT: ${issue.suggestion}`);
      } else {
        recommendations.push(issue.suggestion);
      }
    });
    
    if (recommendations.length === 0) {
      recommendations.push('Document appears to be well-structured and compliant');
    }
    
    return recommendations;
  }

  private checkRegulationCompliance(document: LegalDocument, regulation: string): {
    status: 'compliant' | 'non-compliant' | 'requires-review';
    violations: {
      regulation: string;
      description: string;
      severity: 'low' | 'medium' | 'high';
      remediation: string;
    }[];
  } {
    const violations: {
      regulation: string;
      description: string;
      severity: 'low' | 'medium' | 'high';
      remediation: string;
    }[] = [];
    
    // Mock compliance checking logic
    if (regulation.toLowerCase().includes('gdpr') && document.type === 'privacy') {
      if (!document.content.toLowerCase().includes('data subject rights')) {
        violations.push({
          regulation,
          description: 'Missing data subject rights information',
          severity: 'high',
          remediation: 'Add section detailing user rights under GDPR'
        });
      }
    }
    
    if (regulation.toLowerCase().includes('ccpa') && document.type === 'privacy') {
      if (!document.content.toLowerCase().includes('california')) {
        violations.push({
          regulation,
          description: 'Missing California-specific privacy provisions',
          severity: 'medium',
          remediation: 'Include CCPA-specific requirements and disclosures'
        });
      }
    }
    
    let status: 'compliant' | 'non-compliant' | 'requires-review' = 'compliant';
    if (violations.some(v => v.severity === 'high')) {
      status = 'non-compliant';
    } else if (violations.length > 0) {
      status = 'requires-review';
    }
    
    return { status, violations };
  }

  private calculateOverallComplianceScore(complianceStatus: Record<string, 'compliant' | 'non-compliant' | 'requires-review'>): number {
    const total = Object.keys(complianceStatus).length;
    const compliant = Object.values(complianceStatus).filter(s => s === 'compliant').length;
    const nonCompliant = Object.values(complianceStatus).filter(s => s === 'non-compliant').length;
    
    return Math.round(((compliant - nonCompliant * 0.5) / total) * 100);
  }
}

export const aiLegalService = new AILegalService();