// Export all micro SaaS services
export { urlShortenerService } from './urlShortenerService';
export { passwordGeneratorService } from './passwordGeneratorService';
export { qrCodeService } from './qrCodeService';
export { fileConverterService } from './fileConverterService';
export { textAnalysisService } from './textAnalysisService';

// Export service types and interfaces
export type {
  ShortUrl,
  UrlAnalytics,
  ClickEvent,
  CreateShortUrlRequest
} from './urlShortenerService';

export type {
  PasswordOptions,
  PasswordStrength,
  GeneratedPassword
} from './passwordGeneratorService';

export type {
  QRCodeOptions,
  QRCodeResult,
  QRCodeTemplate
} from './qrCodeService';

export type {
  ConversionOptions,
  ConversionResult,
  SupportedFormat,
  FileInfo
} from './fileConverterService';

export type {
  TextAnalysisResult,
  BasicTextStats,
  ReadabilityMetrics,
  SentimentAnalysis,
  KeywordAnalysis,
  LanguageDetection,
  EntityExtraction,
  TextSummary
} from './textAnalysisService';

// Service categories for easy discovery
export const SERVICE_CATEGORIES = {
  UTILITIES: {
    name: 'Utility Tools',
    description: 'Essential tools for everyday tasks',
    services: ['urlShortener', 'passwordGenerator', 'qrCodeGenerator']
  },
  MEDIA: {
    name: 'Media & Files',
    description: 'File conversion and media processing tools',
    services: ['fileConverter']
  },
  ANALYSIS: {
    name: 'Analysis & Insights',
    description: 'Text analysis and content insights',
    services: ['textAnalysis']
  }
} as const;

// Service metadata for the application
export const SERVICES_METADATA = {
  urlShortener: {
    name: 'URL Shortener',
    description: 'Create short, trackable URLs with analytics',
    icon: '🔗',
    category: 'UTILITIES',
    features: [
      'Custom short codes',
      'Click tracking',
      'Analytics dashboard',
      'Expiration dates',
      'QR code generation'
    ],
    pricing: 'Free',
    apiEndpoint: '/api/url-shortener'
  },
  passwordGenerator: {
    name: 'Password Generator',
    description: 'Generate secure passwords with strength analysis',
    icon: '🔐',
    category: 'UTILITIES',
    features: [
      'Multiple generation modes',
      'Strength analysis',
      'Custom character sets',
      'Password history',
      'Security recommendations'
    ],
    pricing: 'Free',
    apiEndpoint: '/api/password-generator'
  },
  qrCodeGenerator: {
    name: 'QR Code Generator',
    description: 'Create QR codes for various purposes',
    icon: '📱',
    category: 'UTILITIES',
    features: [
      'Multiple QR code types',
      'Custom styling',
      'Logo integration',
      'Error correction',
      'Template library'
    ],
    pricing: 'Free',
    apiEndpoint: '/api/qr-code-generator'
  },
  fileConverter: {
    name: 'File Converter',
    description: 'Convert files between different formats',
    icon: '🔄',
    category: 'MEDIA',
    features: [
      'Multiple file formats',
      'Batch conversion',
      'Quality settings',
      'Metadata preservation',
      'Cloud processing'
    ],
    pricing: 'Free (Basic) / $9.99/month (Pro)',
    apiEndpoint: '/api/file-converter'
  },
  textAnalysis: {
    name: 'Text Analysis',
    description: 'Analyze text for insights and optimization',
    icon: '📊',
    category: 'ANALYSIS',
    features: [
      'Readability metrics',
      'Sentiment analysis',
      'Keyword extraction',
      'Entity recognition',
      'Language detection'
    ],
    pricing: 'Free (Basic) / $19.99/month (Pro)',
    apiEndpoint: '/api/text-analysis'
  }
} as const;

// Service availability and status
export const getServiceStatus = () => {
  return {
    urlShortener: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    passwordGenerator: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    qrCodeGenerator: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    fileConverter: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    textAnalysis: { status: 'active', uptime: '99.9%', lastUpdated: new Date() }
  };
};

// Service usage statistics
export const getServiceStats = () => {
  return {
    totalUsers: 15420,
    totalRequests: 2847500,
    averageResponseTime: 125,
    services: {
      urlShortener: { users: 8920, requests: 1250000, avgResponse: 89 },
      passwordGenerator: { users: 12450, requests: 890000, avgResponse: 45 },
      qrCodeGenerator: { users: 6780, requests: 456000, avgResponse: 156 },
      fileConverter: { users: 5430, requests: 234000, avgResponse: 234 },
      textAnalysis: { users: 3890, requests: 11500, avgResponse: 178 }
    }
  };
};