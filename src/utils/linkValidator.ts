export interface LinkValidationResult {
  url: string;
  status: 'valid' | 'broken' | 'external' | 'protocol';
  parentPage?: string;
  suggestedFix?: string;
  httpStatus?: number;
  error?: string;
}

export interface LinkFix {
  originalUrl: string;
  newUrl: string;
  type: 'redirect' | 'update' | 'remove' | 'external';
  reason: string;
}

export class LinkValidator {
  private static readonly EXTERNAL_DOMAINS = [
    'linkedin.com',
    'twitter.com',
    'github.com',
    'youtube.com',
    'facebook.com',
    'instagram.com',
    'discord.gg',
    'twitch.tv'
  ];

  private static readonly PROTOCOL_LINKS = [
    'tel:',
    'mailto:',
    'sms:',
    'whatsapp:'
  ];

  private static readonly BROKEN_LINK_MAPPINGS: Record<string, string> = {
    // Fix common broken internal links
    '/quantum-neural-network-platform/': '/services/quantum-technology',
    '/autonomous-business-operations-platform/': '/services/ai-autonomous-systems',
    '/ai-powered-it-asset-management/': '/services/it-infrastructure',
    '/advanced-cybersecurity-suite/': '/services/cybersecurity',
    '/advanced-research-automation/': '/services/ai-autonomous-systems',
    '/affiliate-attribution-hub/': '/services/marketing-automation',
    '/agentic-rag-helpdesk/': '/services/ai-autonomous-systems',
    '/ai-agent-orchestrator/': '/services/ai-autonomous-systems',
    '/ai-analytics-copilot/': '/services/ai-business-intelligence',
    '/ai-autonomous-business-manager-2029/': '/services/ai-autonomous-systems',
    '/ai-autonomous-business-manager/': '/services/ai-autonomous-systems',
    '/ai-autonomous-business-platform-2026/': '/services/ai-autonomous-systems',
    '/ai-autonomous-business-platform/': '/services/ai-autonomous-systems',
    '/ai-autonomous-code-review/': '/services/ai-autonomous-systems',
    '/ai-autonomous-creative-director/': '/services/ai-autonomous-systems',
    '/ai-autonomous-data/': '/services/ai-autonomous-systems',
    '/ai-autonomous-decision-platform/': '/services/ai-autonomous-systems',
    '/ai-autonomous-devops/': '/services/ai-autonomous-systems',
    '/ai-autonomous-education-professor/': '/services/ai-autonomous-systems',
    '/ai-autonomous-healthcare-physician/': '/services/ai-autonomous-systems',
    '/ai-autonomous-learning-system/': '/services/ai-autonomous-systems',
    '/ai-autonomous-legal-counsel/': '/services/ai-autonomous-systems',
    '/ai-autonomous-logistics/': '/services/ai-autonomous-systems',
    '/ai-autonomous-manufacturing/': '/services/ai-autonomous-systems',
    '/ai-autonomous-research/': '/services/ai-autonomous-systems',
    '/ai-autonomous-robotics/': '/services/ai-autonomous-systems',
    '/ai-autonomous-scientific-researcher/': '/services/ai-autonomous-systems',
    '/ai-autonomous-security/': '/services/ai-autonomous-systems',
    '/ai-autonomous-systems-platform/': '/services/ai-autonomous-systems',
    '/ai-autonomous-testing/': '/services/ai-autonomous-systems',
    '/ai-autonomous-vehicle-platform/': '/services/ai-autonomous-systems',
    '/ai-autonomous-vehicle/': '/services/ai-autonomous-systems',
    '/ai-autonomous-vehicles-platform/': '/services/ai-autonomous-systems',
    '/ai-autonomous-vehicles/': '/services/ai-autonomous-systems',
    '/ai-autonomous-venture-capitalist/': '/services/ai-autonomous-systems',
    '/ai-biomedical-research/': '/services/ai-autonomous-systems',
    '/ai-biotech-drug-discovery/': '/services/ai-autonomous-systems',
    '/ai-blockchain-governance/': '/services/blockchain-solutions',
    '/ai-brain-computer-interface/': '/services/ai-autonomous-systems',
    '/ai-brain-interface/': '/services/ai-autonomous-systems',
    '/ai-business-intelligence-elite-2026/': '/services/ai-business-intelligence',
    '/ai-business-intelligence-pro/': '/services/ai-business-intelligence',
    '/ai-business-intelligence-suite-2029/': '/services/ai-business-intelligence',
    '/ai-climate-prediction-engine/': '/services/ai-autonomous-systems',
    '/ai-climate-prediction-platform/': '/services/ai-autonomous-systems',
    '/ai-climate-prediction/': '/services/ai-autonomous-systems',
    '/ai-code-generation-enterprise/': '/services/ai-autonomous-systems',
    '/ai-compliance-automation/': '/services/ai-autonomous-systems',
    '/ai-computer-vision-platform/': '/services/ai-autonomous-systems',
    '/ai-consciousness-evolution-platform/': '/services/ai-consciousness-evolution',
    '/ai-consciousness-simulation-platform/': '/services/ai-consciousness-evolution',
    '/ai-consciousness-simulation/': '/services/ai-consciousness-evolution',
    '/ai-consciousness-simulator/': '/services/ai-consciousness-evolution',
    '/ai-content-creation-revolution/': '/services/ai-content-creation',
    '/ai-content-creation/': '/services/ai-content-creation',
    '/ai-content-factory/': '/services/ai-content-creation',
    '/ai-content-generation-automation-2033/': '/services/ai-content-creation',
    '/ai-content-generation-pro-2029/': '/services/ai-content-creation',
    '/5g-enterprise-network/': '/services/5g-solutions',
    '/5g-enterprise-solutions/': '/services/5g-solutions',
    '/5g-network-optimization/': '/services/5g-solutions',
    '/5g-private-network-solutions-2026/': '/services/5g-solutions',
    '/5g-private-network-solutions/': '/services/5g-solutions',
    '/accessibility-auditor/': '/services/accessibility',
    '/accessibility-scanner/': '/services/accessibility'
  };

  static validateLink(url: string, parentPage?: string): LinkValidationResult {
    // Check for protocol links
    if (this.PROTOCOL_LINKS.some(protocol => url.startsWith(protocol))) {
      return {
        url,
        status: 'protocol',
        parentPage,
        suggestedFix: 'Keep as-is - these are valid protocol links'
      };
    }

    // Check for external links
    if (this.isExternalLink(url)) {
      return {
        url,
        status: 'external',
        parentPage,
        suggestedFix: 'Add rel="nofollow" and validate periodically'
      };
    }

    // Check for broken internal links that have mappings
    if (this.BROKEN_LINK_MAPPINGS[url]) {
      return {
        url,
        status: 'broken',
        parentPage,
        suggestedFix: `Redirect to: ${this.BROKEN_LINK_MAPPINGS[url]}`,
        error: 'Broken internal link with available redirect'
      };
    }

    // For now, assume internal links are valid
    // In a real implementation, you'd check against actual routes
    return {
      url,
      status: 'valid',
      parentPage
    };
  }

  static getSuggestedFixes(): LinkFix[] {
    return Object.entries(this.BROKEN_LINK_MAPPINGS).map(([original, newUrl]) => ({
      originalUrl: original,
      newUrl: newUrl,
      type: 'redirect',
      reason: 'Broken internal link with available redirect mapping'
    }));
  }

  static isExternalLink(url: string): boolean {
    try {
      const urlObj = new URL(url, 'https://ziontechgroup.com');
      return !urlObj.hostname.includes('ziontechgroup.com');
    } catch {
      // If it's a relative URL, it's internal
      return false;
    }
  }

  static generateRedirectRules(): string {
    const redirects = Object.entries(this.BROKEN_LINK_MAPPINGS)
      .map(([from, to]) => `${from} ${to} 301`)
      .join('\n');
    
    return `# Redirect rules for broken links
${redirects}`;
  }

  static generateSitemapExclusions(): string[] {
    return Object.keys(this.BROKEN_LINK_MAPPINGS);
  }
}

export const linkValidator = new LinkValidator();