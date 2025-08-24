<<<<<<< HEAD
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages = [
    '/ai-autonomous-business-manager',
    '/ai-content-generation',
    '/ai-autonomous-research-assistant',
    '/ai-code-review',
    '/quantum-financial-trading',
    '/quantum-cloud-infrastructure',
    '/quantum-neural-network-platform',
    '/advanced-cybersecurity-suite',
    '/soc2-compliance-automation',
    '/ai-powered-enterprise-security',
    '/ai-blockchain-analytics',
    '/ai-blockchain-governance',
    '/advanced-it-infrastructure-services',
    '/autonomous-devops-platform',
  ].map(service => ({
    url: `${baseUrl}${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Additional pages
  const additionalPages = [
    '/careers',
=======
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/quantum-services',
    '/cybersecurity',
    '/enterprise-it',
    '/research-development',
    '/space-tech',
    '/case-studies',
>>>>>>> origin/cursor/website-audit-and-enhancement-0da5
    '/news',
    '/events',
    '/webinars',
    '/white-papers',
<<<<<<< HEAD
    '/case-studies',
    '/research-development',
    '/space-tech',
    '/micro-saas',
    '/enterprise-it',
  ].map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...mainPages, ...servicePages, ...additionalPages];
=======
    '/docs',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/accessibility',
    '/multiverse/launch',
    '/admin/instances',
    '/admin/os-deploy',
  ]

  const aiServices = [
    '/ai-autonomous-business-manager',
    '/ai-autonomous-business-operations',
    '/ai-autonomous-business-platform',
    '/ai-autonomous-business-process-automation',
    '/ai-autonomous-code-review',
    '/ai-autonomous-creative-director',
    '/ai-autonomous-data',
    '/ai-autonomous-decision-engine',
    '/ai-autonomous-decision-platform',
    '/ai-autonomous-devops',
    '/ai-autonomous-ecosystem-manager',
    '/ai-autonomous-ecosystem',
    '/ai-autonomous-education-professor',
    '/ai-autonomous-healthcare-physician',
    '/ai-autonomous-learning-system',
    '/ai-autonomous-legal-counsel',
    '/ai-autonomous-logistics',
    '/ai-autonomous-manufacturing',
    '/ai-autonomous-research-assistant',
    '/ai-autonomous-research',
    '/ai-autonomous-robotics',
    '/ai-autonomous-scientific-researcher',
    '/ai-autonomous-security',
    '/ai-autonomous-systems-platform',
    '/ai-autonomous-testing',
    '/ai-autonomous-vehicle-platform',
    '/ai-autonomous-vehicle',
    '/ai-autonomous-vehicles-platform',
    '/ai-autonomous-vehicles',
    '/ai-autonomous-venture-capitalist',
    '/ai-biomedical-research',
    '/ai-biotech-drug-discovery',
    '/ai-blockchain-analytics',
    '/ai-blockchain-governance',
    '/ai-brain-computer-interface',
    '/ai-brain-interface',
    '/ai-brand-personality-generator',
    '/ai-business-intelligence-elite-2026',
    '/ai-business-intelligence-pro',
    '/ai-business-intelligence-suite-2029',
    '/ai-business-intelligence-suite',
    '/ai-business-intelligence',
    '/ai-climate-prediction-engine',
    '/ai-climate-prediction-platform',
    '/ai-climate-prediction',
    '/ai-code-generation-enterprise',
    '/ai-code-review-copilot',
    '/ai-code-review',
    '/ai-compliance-automation',
    '/ai-computer-vision-platform',
    '/ai-consciousness-evolution-2025',
    '/ai-consciousness-evolution-2029',
    '/ai-consciousness-evolution-platform',
    '/ai-consciousness-evolution',
    '/ai-consciousness-simulation-platform',
    '/ai-consciousness-simulation',
    '/ai-consciousness-simulator',
    '/ai-content-creation-revolution',
    '/ai-content-creation',
    '/ai-content-factory',
    '/ai-content-generation-automation-2033',
    '/ai-content-generation-pro-2029',
    '/ai-content-generator',
    '/ai-content-marketing-automation',
    '/ai-content-personalization-engine',
    '/ai-creativity-studio',
    '/ai-market-research',
    '/ai-powered-enterprise-security',
    '/ai-powered-it-asset-management',
    '/ai-automation-services',
    '/advanced-ai-automation-services',
    '/ai-assistant',
    '/ai-agents',
    '/ai-agent-orchestrator',
    '/ai-analytics-copilot',
    '/ai-ad-creative-generator',
    '/agentic-rag-helpdesk',
    '/agentic-rag',
    '/agentic-sales-outreach',
    '/affiliate-attribution-hub',
    '/advanced-research-automation',
    '/advanced-cybersecurity-suite',
    '/advanced-it-infrastructure-services',
    '/accessibility-auditor',
    '/accessibility-scanner',
  ]

  const quantumServices = [
    '/quantum-neural-network-platform',
    '/quantum-cloud-infrastructure',
    '/quantum-financial-trading',
    '/quantum-network-optimization',
    '/quantum-private-network-solutions',
    '/quantum-private-network-solutions-2026',
  ]

  const networkServices = [
    '/5g-enterprise-network',
    '/5g-enterprise-solutions',
    '/5g-network-optimization',
  ]

  const complianceServices = [
    '/soc2-compliance-automation',
  ]

  const allRoutes = [
    ...routes,
    ...aiServices,
    ...quantumServices,
    ...networkServices,
    ...complianceServices,
  ]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
>>>>>>> origin/cursor/website-audit-and-enhancement-0da5
}