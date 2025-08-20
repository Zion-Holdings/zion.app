// Export all micro SaaS services
export * from './rateLimitService';
export * from './emailValidationService';
export * from './passwordStrengthService';
export * from './urlShortenerService';
export * from './fileCompressionService';
export * from './encryptionService';
export * from './gitService';

// Service registry for easy access
export const services = {
  rateLimit: () => import('./rateLimitService').then(m => m.rateLimitService),
  emailValidation: () => import('./emailValidationService').then(m => m.emailValidationService),
  passwordStrength: () => import('./passwordStrengthService').then(m => m.passwordStrengthService),
  urlShortener: () => import('./urlShortenerService').then(m => m.urlShortenerService),
  fileCompression: () => import('./fileCompressionService').then(m => m.fileCompressionService),
  encryption: () => import('./encryptionService').then(m => m.encryptionService),
  git: () => import('./gitService').then(m => m.gitService)
};

// Service metadata for discovery and documentation
export const serviceMetadata = {
  rateLimit: {
    name: 'API Rate Limiting Service',
    description: 'Protect your APIs from abuse with intelligent rate limiting',
    category: 'Security & Performance',
    features: [
      'Configurable rate limits',
      'Multiple time windows',
      'Automatic cleanup',
      'Statistics and monitoring',
      'IP-based limiting'
    ],
    useCases: [
      'API protection',
      'DDoS prevention',
      'User quota management',
      'Traffic control'
    ],
    pricing: 'Free tier available, premium plans from $9/month'
  },
  emailValidation: {
    name: 'Email Validation Service',
    description: 'Comprehensive email validation with deliverability insights',
    category: 'Data Quality',
    features: [
      'Syntax validation',
      'Domain verification',
      'Disposable email detection',
      'Role-based account detection',
      'Deliverability scoring'
    ],
    useCases: [
      'User registration',
      'Email marketing',
      'Lead validation',
      'Data cleaning'
    ],
    pricing: 'Free tier: 100 validations/month, premium from $19/month'
  },
  passwordStrength: {
    name: 'Password Strength Analyzer',
    description: 'Advanced password security analysis and recommendations',
    category: 'Security',
    features: [
      'Multi-factor scoring',
      'Common password detection',
      'Pattern analysis',
      'Crack time estimation',
      'Improvement suggestions'
    ],
    useCases: [
      'User registration',
      'Password policies',
      'Security audits',
      'Compliance requirements'
    ],
    pricing: 'Free tier available, enterprise plans from $49/month'
  },
  urlShortener: {
    name: 'URL Shortener Service',
    description: 'Professional URL shortening with analytics and management',
    category: 'Marketing & Analytics',
    features: [
      'Custom short codes',
      'Click analytics',
      'Geographic tracking',
      'Device detection',
      'Password protection'
    ],
    useCases: [
      'Social media marketing',
      'Campaign tracking',
      'Link management',
      'Analytics insights'
    ],
    pricing: 'Free tier: 100 URLs, premium from $29/month'
  },
  fileCompression: {
    name: 'File Compression Service',
    description: 'Intelligent file compression for images, videos, and documents',
    category: 'Performance & Storage',
    features: [
      'Multi-format support',
      'Quality control',
      'Batch processing',
      'Compression recommendations',
      'Metadata preservation'
    ],
    useCases: [
      'Website optimization',
      'Storage reduction',
      'Bandwidth savings',
      'Content delivery'
    ],
    pricing: 'Free tier: 10 files/month, premium from $39/month'
  },
  encryption: {
    name: 'Data Encryption Service',
    description: 'Enterprise-grade encryption with key management',
    category: 'Security',
    features: [
      'Multiple algorithms',
      'Key generation',
      'Secure storage',
      'Key rotation',
      'Strength assessment'
    ],
    useCases: [
      'Data protection',
      'Compliance requirements',
      'Secure communication',
      'File encryption'
    ],
    pricing: 'Free tier: 1GB/month, enterprise from $99/month'
  },
  git: {
    name: 'Git Management Service',
    description: 'Advanced Git operations and repository management',
    category: 'Development',
    features: [
      'Repository status',
      'Branch management',
      'Commit history',
      'File tracking',
      'Remote management'
    ],
    useCases: [
      'Development workflows',
      'CI/CD integration',
      'Repository monitoring',
      'Team collaboration'
    ],
    pricing: 'Free tier available, team plans from $79/month'
  }
};

// Service categories for organization
export const serviceCategories = {
  'Security & Performance': ['rateLimit', 'passwordStrength', 'encryption'],
  'Data Quality': ['emailValidation'],
  'Marketing & Analytics': ['urlShortener'],
  'Performance & Storage': ['fileCompression'],
  'Development': ['git']
};

// Quick access functions
export const getService = async (serviceName: keyof typeof services) => {
  return services[serviceName]();
};

export const getServiceMetadata = (serviceName: keyof typeof serviceMetadata) => {
  return serviceMetadata[serviceName];
};

export const getServicesByCategory = (category: string) => {
  return serviceCategories[category] || [];
};

export const getAllServices = () => {
  return Object.keys(serviceMetadata);
};

// Service health check
export const checkServiceHealth = async () => {
  const healthStatus: { [key: string]: boolean } = {};
  
  for (const [serviceName, serviceGetter] of Object.entries(services)) {
    try {
      const service = await serviceGetter();
      healthStatus[serviceName] = true;
    } catch (error) {
      healthStatus[serviceName] = false;
    }
  }
  
  return healthStatus;
};

// Service statistics
export const getServiceStats = async () => {
  const stats: { [key: string]: any } = {};
  
  try {
    const rateLimitService = await services.rateLimit();
    stats.rateLimit = rateLimitService.getStats();
  } catch (error) {
    stats.rateLimit = { error: 'Service unavailable' };
  }
  
  try {
    const emailValidationService = await services.emailValidation();
    stats.emailValidation = emailValidationService.getStats();
  } catch (error) {
    stats.emailValidation = { error: 'Service unavailable' };
  }
  
  try {
    const passwordStrengthService = await services.passwordStrength();
    stats.passwordStrength = passwordStrengthService.getStats();
  } catch (error) {
    stats.passwordStrength = { error: 'Service unavailable' };
  }
  
  try {
    const urlShortenerService = await services.urlShortener();
    stats.urlShortener = urlShortenerService.getStats();
  } catch (error) {
    stats.urlShortener = { error: 'Service unavailable' };
  }
  
  try {
    const fileCompressionService = await services.fileCompression();
    stats.fileCompression = fileCompressionService.getStats();
  } catch (error) {
    stats.fileCompression = { error: 'Service unavailable' };
  }
  
  try {
    const encryptionService = await services.encryption();
    stats.encryption = encryptionService.getStats();
  } catch (error) {
    stats.encryption = { error: 'Service unavailable' };
  }
  
  return stats;
};

// Service discovery and recommendations
export const getServiceRecommendations = (useCase: string) => {
  const recommendations: { service: string; reason: string; priority: 'high' | 'medium' | 'low' }[] = [];
  
  const useCaseLower = useCase.toLowerCase();
  
  if (useCaseLower.includes('security') || useCaseLower.includes('protect')) {
    recommendations.push(
      { service: 'encryption', reason: 'Essential for data protection', priority: 'high' },
      { service: 'passwordStrength', reason: 'Improves user security', priority: 'high' },
      { service: 'rateLimit', reason: 'Protects against abuse', priority: 'medium' }
    );
  }
  
  if (useCaseLower.includes('performance') || useCaseLower.includes('optimize')) {
    recommendations.push(
      { service: 'fileCompression', reason: 'Reduces file sizes and load times', priority: 'high' },
      { service: 'rateLimit', reason: 'Prevents performance degradation', priority: 'medium' }
    );
  }
  
  if (useCaseLower.includes('marketing') || useCaseLower.includes('analytics')) {
    recommendations.push(
      { service: 'urlShortener', reason: 'Provides tracking and insights', priority: 'high' },
      { service: 'emailValidation', reason: 'Improves email campaign quality', priority: 'medium' }
    );
  }
  
  if (useCaseLower.includes('data') || useCaseLower.includes('quality')) {
    recommendations.push(
      { service: 'emailValidation', reason: 'Ensures data integrity', priority: 'high' },
      { service: 'passwordStrength', reason: 'Validates user input', priority: 'medium' }
    );
  }
  
  if (useCaseLower.includes('development') || useCaseLower.includes('git')) {
    recommendations.push(
      { service: 'git', reason: 'Essential for development workflows', priority: 'high' }
    );
  }
  
  return recommendations.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
};

export default {
  services,
  serviceMetadata,
  serviceCategories,
  getService,
  getServiceMetadata,
  getServicesByCategory,
  getAllServices,
  checkServiceHealth,
  getServiceStats,
  getServiceRecommendations
};