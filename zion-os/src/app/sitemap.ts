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
    '/news',
    '/events',
    '/webinars',
    '/white-papers',
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
}