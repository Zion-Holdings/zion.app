// Export all micro SaaS services
export { default as aiLandingPageBuilderService } from './aiLandingPageBuilder';
export { default as aiFraudDetectionService } from './aiFraudDetection';
export { gitService } from './gitService';

// Service types
export type {
  LandingPageTemplate,
  LandingPageConfig,
  LandingPageAnalytics,
  AITemplateRecommendation
} from './aiLandingPageBuilder';

export type {
  Transaction,
  FraudRiskScore,
  FraudRule,
  FraudAlert,
  FraudAnalytics
} from './aiFraudDetection';

export type {
  GitFileStatus,
  GitCommit,
  GitBranch,
  GitRemote,
  GitStatus
} from './gitService';

// Service categories for easy discovery
export const serviceCategories = {
  'AI & Automation': [
    'aiLandingPageBuilderService',
    'aiFraudDetectionService'
  ],
  'Development Tools': [
    'gitService'
  ]
} as const;

// Service metadata for the micro SaaS page
export const serviceMetadata = {
  aiLandingPageBuilder: {
    name: 'AI Landing Page Builder',
    category: 'AI & Automation',
    price: '$59/month',
    trialDays: 14,
    description: 'AI-powered landing page creation with conversion optimization and A/B testing capabilities.',
    features: [
      'AI-powered page generation',
      'Conversion optimization',
      'A/B testing automation',
      'Mobile-responsive templates',
      'SEO optimization',
      'Analytics & heatmaps',
      'Integration with marketing tools',
      'Custom domain support'
    ]
  },
  aiFraudDetection: {
    name: 'AI Fraud Detection System',
    category: 'AI & Automation',
    price: '$119/month',
    trialDays: 14,
    description: 'AI-powered fraud detection with real-time monitoring and automated prevention measures.',
    features: [
      'Real-time fraud detection',
      'AI risk assessment',
      'Automated prevention',
      'Transaction monitoring',
      'Custom fraud rules',
      'Performance analytics',
      'Integration with payment systems',
      '24/7 monitoring'
    ]
  }
} as const;