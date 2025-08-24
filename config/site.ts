export const siteConfig = {
  name: 'Zion Tech Group',
  description: 'World\'s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform',
  url: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/ziontechgroup',
    github: 'https://github.com/Zion-Holdings',
    linkedin: 'https://linkedin.com/company/ziontechgroup',
  },
  microSaas: {
    baseUrl: 'https://ziontechgroup.com',
    trialDays: 14,
    supportEmail: 'support@ziontechgroup.com',
    salesEmail: 'sales@ziontechgroup.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;