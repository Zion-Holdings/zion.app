// Export all services
export { default as CodeReviewService } from './codeReviewService';
export { default as RateLimiterService } from './rateLimiterService';
export { default as EmailValidatorService } from './emailValidatorService';
export { default as PasswordStrengthService } from './passwordStrengthService';
export { default as UrlShortenerService } from './urlShortenerService';
export { default as JsonFormatterService } from './jsonFormatterService';
export { default as QrCodeService } from './qrCodeService';
export { default as FileTypeDetectorService } from './fileTypeDetectorService';
export { gitService } from './gitService';

// Export types and interfaces
export type {
  CodeReviewRequest,
  CodeReviewResponse,
  CodeReviewResult,
  RateLimitConfig,
  RateLimitResult,
  EmailValidationRequest,
  EmailValidationResponse,
  PasswordStrengthRequest,
  PasswordStrengthResponse,
  UrlShortenerRequest,
  UrlShortenerResponse,
  JsonFormatterRequest,
  JsonFormatterResponse,
  QrCodeRequest,
  QrCodeResponse,
  FileTypeRequest,
  FileTypeResponse,
  GitFileStatus,
  GitCommit,
  GitBranch,
  GitRemote,
  GitStatus
} from './types';

// Service categories for easy discovery
export const SERVICE_CATEGORIES = {
  DEVELOPMENT: {
    name: 'Development Tools',
    services: ['CodeReviewService', 'GitService'],
    description: 'Tools for developers to improve code quality and manage projects'
  },
  SECURITY: {
    name: 'Security & Validation',
    services: ['EmailValidatorService', 'PasswordStrengthService', 'FileTypeDetectorService'],
    description: 'Services to enhance security and validate user inputs'
  },
  INFRASTRUCTURE: {
    name: 'Infrastructure & Performance',
    services: ['RateLimiterService'],
    description: 'Services for building scalable and performant applications'
  },
  UTILITIES: {
    name: 'Utility Tools',
    services: ['UrlShortenerService', 'JsonFormatterService', 'QrCodeService'],
    description: 'Practical tools for everyday development tasks'
  }
} as const;

// Service metadata for documentation and discovery
export const SERVICE_METADATA = {
  CodeReviewService: {
    name: 'Code Review Assistant',
    description: 'AI-powered code analysis with security, performance, and maintainability insights',
    category: 'DEVELOPMENT',
    features: [
      'Multi-language support (JavaScript, Python, TypeScript)',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code complexity analysis',
      'Maintainability scoring'
    ],
    useCases: [
      'Code quality assurance',
      'Security auditing',
      'Performance optimization',
      'Team code reviews',
      'Learning best practices'
    ],
    pricing: 'Free tier available, Pro plans from $29/month'
  },
  RateLimiterService: {
    name: 'API Rate Limiter',
    description: 'Intelligent rate limiting with configurable policies and analytics',
    category: 'INFRASTRUCTURE',
    features: [
      'Multiple rate limiting strategies',
      'Real-time analytics and monitoring',
      'IP, user, and API key-based limiting',
      'Automatic blocking and recovery',
      'Express.js middleware support'
    ],
    useCases: [
      'API protection',
      'DDoS prevention',
      'Fair usage enforcement',
      'Cost control',
      'Service stability'
    ],
    pricing: 'Free tier available, Enterprise plans from $99/month'
  },
  EmailValidatorService: {
    name: 'Email Validator',
    description: 'Comprehensive email validation with security and deliverability analysis',
    category: 'SECURITY',
    features: [
      'Real-time email verification',
      'Disposable email detection',
      'MX record validation',
      'Security risk assessment',
      'Batch validation support'
    ],
    useCases: [
      'User registration',
      'Email marketing',
      'Form validation',
      'Fraud prevention',
      'Data quality assurance'
    ],
    pricing: 'Free tier available, Pro plans from $19/month'
  },
  PasswordStrengthService: {
    name: 'Password Strength Checker',
    description: 'Advanced password analysis with security recommendations and policy enforcement',
    category: 'SECURITY',
    features: [
      'Multi-factor strength scoring',
      'Security risk assessment',
      'Policy compliance checking',
      'Strong password generation',
      'Batch analysis support'
    ],
    useCases: [
      'User account security',
      'Password policy enforcement',
      'Security audits',
      'Compliance requirements',
      'User education'
    ],
    pricing: 'Free tier available, Pro plans from $15/month'
  },
  UrlShortenerService: {
    name: 'URL Shortener',
    description: 'Professional URL shortening with analytics and customization options',
    category: 'UTILITIES',
    features: [
      'Custom alias support',
      'Click analytics and tracking',
      'Password protection',
      'Expiration dates',
      'Bulk URL management'
    ],
    useCases: [
      'Marketing campaigns',
      'Social media sharing',
      'Link tracking',
      'Branded URLs',
      'Analytics insights'
    ],
    pricing: 'Free tier available, Pro plans from $25/month'
  },
  JsonFormatterService: {
    name: 'JSON Formatter',
    description: 'Advanced JSON processing with validation, transformation, and schema generation',
    category: 'UTILITIES',
    features: [
      'Smart formatting and minification',
      'JSON validation and error detection',
      'Data transformation tools',
      'Schema inference',
      'Performance optimization'
    ],
    useCases: [
      'API development',
      'Data processing',
      'Configuration management',
      'Debugging and testing',
      'Documentation generation'
    ],
    pricing: 'Free tier available, Pro plans from $20/month'
  },
  QrCodeService: {
    name: 'QR Code Generator',
    description: 'Professional QR code creation with customization and security validation',
    category: 'UTILITIES',
    features: [
      'Multiple QR code types (URL, email, WiFi, vCard)',
      'Custom styling and branding',
      'Security validation',
      'Bulk generation',
      'Analytics tracking'
    ],
    useCases: [
      'Marketing materials',
      'Contact sharing',
      'WiFi network setup',
      'Event management',
      'Product packaging'
    ],
    pricing: 'Free tier available, Pro plans from $30/month'
  },
  FileTypeDetectorService: {
    name: 'File Type Detector',
    description: 'Intelligent file analysis with security scanning and metadata extraction',
    category: 'SECURITY',
    features: [
      'Magic number detection',
      'File signature analysis',
      'Security threat assessment',
      'Metadata extraction',
      'Batch processing'
    ],
    useCases: [
      'File upload validation',
      'Security scanning',
      'Content management',
      'Compliance checking',
      'Data classification'
    ],
    pricing: 'Free tier available, Pro plans from $35/month'
  },
  GitService: {
    name: 'Git Management',
    description: 'Comprehensive Git repository management and analytics',
    category: 'DEVELOPMENT',
    features: [
      'Repository status monitoring',
      'Branch management',
      'Commit history analysis',
      'Collaboration insights',
      'Automation workflows'
    ],
    useCases: [
      'Project management',
      'Team collaboration',
      'Code review workflows',
      'Deployment automation',
      'Performance monitoring'
    ],
    pricing: 'Free tier available, Pro plans from $40/month'
  }
} as const;

// Quick start examples for each service
export const QUICK_START_EXAMPLES = {
  CodeReviewService: `
// Analyze JavaScript code
const result = await CodeReviewService.analyzeCode(\`
function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}\`, 'javascript');

console.log('Code Score:', result.score);
console.log('Issues:', result.issues);
  `,
  
  RateLimiterService: `
// Check rate limit for IP
const rateLimit = await RateLimiterService.checkRateLimit('192.168.1.1', 'strict');
if (rateLimit.blocked) {
  console.log('Rate limit exceeded');
} else {
  console.log('Remaining requests:', rateLimit.remaining);
}
  `,
  
  EmailValidatorService: `
// Validate email address
const validation = await EmailValidatorService.validateEmail('user@example.com');
console.log('Is Valid:', validation.isValid);
console.log('Risk Level:', validation.riskLevel);
console.log('Suggestions:', validation.suggestions);
  `,
  
  PasswordStrengthService: `
// Check password strength
const strength = await PasswordStrengthService.checkPasswordStrength('MyPassword123!');
console.log('Strength:', strength.strength);
console.log('Score:', strength.score);
console.log('Suggestions:', strength.suggestions);
  `,
  
  UrlShortenerService: `
// Create short URL
const shortUrl = await UrlShortenerService.createShortUrl('https://example.com/very-long-url', {
  customAlias: 'example',
  expiresIn: 30
});
console.log('Short URL:', shortUrl.shortUrl);
  `,
  
  JsonFormatterService: `
// Format JSON with validation
const result = await JsonFormatterService.formatJson('{"name":"John","age":30}', {
  indentSize: 2,
  validate: true
});
console.log('Formatted:', result.formatted);
console.log('Is Valid:', result.isValid);
  `,
  
  QrCodeService: `
// Generate QR code for URL
const qrCode = await QrCodeService.generateURLQRCode('https://example.com', {
  size: 256,
  foregroundColor: '#000000',
  backgroundColor: '#FFFFFF'
});
console.log('QR Code generated:', qrCode.success);
  `,
  
  FileTypeDetectorService: `
// Detect file type
const fileType = await FileTypeDetectorService.detectFileType(fileBuffer);
console.log('MIME Type:', fileType.mimeType);
console.log('Category:', fileType.category);
console.log('Confidence:', fileType.confidence);
  `,
  
  GitService: `
// Get Git status
const status = await GitService.getStatus();
console.log('Current branch:', status.branch);
console.log('Modified files:', status.modified.length);
  `
} as const;

// Export service factory for easy instantiation
export class ServiceFactory {
  static getService(serviceName: keyof typeof SERVICE_METADATA) {
    const services = {
      CodeReviewService: require('./codeReviewService').default,
      RateLimiterService: require('./rateLimiterService').default,
      EmailValidatorService: require('./emailValidatorService').default,
      PasswordStrengthService: require('./passwordStrengthService').default,
      UrlShortenerService: require('./urlShortenerService').default,
      JsonFormatterService: require('./jsonFormatterService').default,
      QrCodeService: require('./qrCodeService').default,
      FileTypeDetectorService: require('./fileTypeDetectorService').default,
      GitService: require('./gitService').default
    };
    
    return services[serviceName];
  }
  
  static getAllServices() {
    return Object.keys(SERVICE_METADATA).reduce((acc, serviceName) => {
      acc[serviceName] = this.getService(serviceName as keyof typeof SERVICE_METADATA);
      return acc;
    }, {} as Record<string, any>);
  }
}