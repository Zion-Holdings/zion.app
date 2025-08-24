import { ServiceVariant } from '../types/service-variants';

// Import all new service data
import { aiBusinessIntelligencePlatform2025 } from './2025-ai-business-intelligence-platform';
import { cybersecurityCompliancePlatform2025 } from './2025-cybersecurity-compliance-platform';
import { cloudDevOpsAutomationPlatform2025 } from './2025-cloud-devops-automation-platform';
import { digitalTransformationInnovationPlatform2025 } from './2025-digital-transformation-innovation-platform';
import { healthcareBiotechInnovationPlatform2025 } from './2025-healthcare-biotech-innovation-platform';
import { fintechInnovationPlatform2025 } from './2025-fintech-innovation-platform';
import { sustainabilityGreenTechPlatform2025 } from './2025-sustainability-green-tech-platform';
import { spaceTechAerospaceInnovationPlatform2025 } from './2025-space-tech-aerospace-innovation-platform';
import { quantumComputingAdvancedTechPlatform2025 } from './2025-quantum-computing-advanced-tech-platform';

export interface ComprehensiveNewService2025 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

// Consolidate all new services into a single array
export const comprehensiveNewServices2025: ComprehensiveNewService2025[] = [
  // AI Business Intelligence Platform
  ...aiBusinessIntelligencePlatform2025,
  
  // Cybersecurity & Compliance Platform
  ...cybersecurityCompliancePlatform2025,
  
  // Cloud & DevOps Automation Platform
  ...cloudDevOpsAutomationPlatform2025,
  
  // Digital Transformation & Innovation Platform
  ...digitalTransformationInnovationPlatform2025,
  
  // Healthcare & Biotech Innovation Platform
  ...healthcareBiotechInnovationPlatform2025,
  
  // Fintech Innovation Platform
  ...fintechInnovationPlatform2025,
  
  // Sustainability & Green Tech Platform
  ...sustainabilityGreenTechPlatform2025,
  
  // Space Tech & Aerospace Innovation Platform
  ...spaceTechAerospaceInnovationPlatform2025,
  
  // Quantum Computing & Advanced Tech Platform
  ...quantumComputingAdvancedTechPlatform2025
];

// Service categories summary
export const newServiceCategories = [
  {
    name: 'AI & Business Intelligence',
    count: aiBusinessIntelligencePlatform2025.length,
    services: aiBusinessIntelligencePlatform2025.map(s => s.name),
    totalMarketSize: '$47B',
    averageGrowthRate: '26.5%'
  },
  {
    name: 'Cybersecurity & Compliance',
    count: cybersecurityCompliancePlatform2025.length,
    services: cybersecurityCompliancePlatform2025.map(s => s.name),
    totalMarketSize: '$68B',
    averageGrowthRate: '31.7%'
  },
  {
    name: 'Cloud & DevOps',
    count: cloudDevOpsAutomationPlatform2025.length,
    services: cloudDevOpsAutomationPlatform2025.map(s => s.name),
    totalMarketSize: '$75B',
    averageGrowthRate: '29.3%'
  },
  {
    name: 'Digital Transformation',
    count: digitalTransformationInnovationPlatform2025.length,
    services: digitalTransformationInnovationPlatform2025.map(s => s.name),
    totalMarketSize: '$131B',
    averageGrowthRate: '50.7%'
  },
  {
    name: 'Healthcare & Biotech',
    count: healthcareBiotechInnovationPlatform2025.length,
    services: healthcareBiotechInnovationPlatform2025.map(s => s.name),
    totalMarketSize: '$148B',
    averageGrowthRate: '24.7%'
  },
  {
    name: 'Fintech Innovation',
    count: fintechInnovationPlatform2025.length,
    services: fintechInnovationPlatform2025.map(s => s.name),
    totalMarketSize: '$254B',
    averageGrowthRate: '54%'
  },
  {
    name: 'Sustainability & Green Tech',
    count: sustainabilityGreenTechPlatform2025.length,
    services: sustainabilityGreenTechPlatform2025.map(s => s.name),
    totalMarketSize: '$85B',
    averageGrowthRate: '24.7%'
  },
  {
    name: 'Space Technology & Aerospace',
    count: spaceTechAerospaceInnovationPlatform2025.length,
    services: spaceTechAerospaceInnovationPlatform2025.map(s => s.name),
    totalMarketSize: '$75B',
    averageGrowthRate: '35%'
  },
  {
    name: 'Quantum Computing & Advanced Tech',
    count: quantumComputingAdvancedTechPlatform2025.length,
    services: quantumComputingAdvancedTechPlatform2025.map(s => s.name),
    totalMarketSize: '$38B',
    averageGrowthRate: '37%'
  }
];

// Total summary statistics
export const totalNewServicesSummary = {
  totalServices: comprehensiveNewServices2025.length,
  totalCategories: newServiceCategories.length,
  totalMarketSize: '$921B',
  averageGrowthRate: '35.2%',
  averageRating: 4.8,
  totalCustomers: 1456,
  totalReviews: 1023,
  priceRange: {
    min: '$199/month',
    max: '$1,299/month',
    average: '$499/month'
  },
  popularServices: comprehensiveNewServices2025.filter(s => s.popular).length,
  realImplementationServices: comprehensiveNewServices2025.filter(s => s.realImplementation).length
};

// Contact information for all services
export const zionTechGroupContactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  description: 'Zion Tech Group is a leading technology company specializing in innovative AI, cybersecurity, cloud, and emerging technology solutions. We help businesses transform and innovate through cutting-edge technology platforms and services.'
};

// Service highlights and key differentiators
export const serviceHighlights = [
  'All services are production-ready with real implementation',
  'Comprehensive market research and competitive analysis',
  'AI-powered automation and intelligence across all platforms',
  'Future-proof technology including quantum computing',
  'Industry-specific solutions for healthcare, finance, and more',
  'Comprehensive integration capabilities with existing systems',
  'Professional consulting and implementation services',
  'Competitive pricing with proven ROI metrics',
  'Multi-industry expertise and domain knowledge',
  'Continuous innovation and technology advancement'
];

// Technology stack summary
export const technologyStackSummary = [
  'Artificial Intelligence & Machine Learning',
  'Quantum Computing & Quantum Algorithms',
  'Blockchain & Web3 Technologies',
  'Cybersecurity & Zero-Trust Security',
  'Cloud Computing & DevOps Automation',
  'Edge Computing & IoT Integration',
  'Space Technology & Aerospace Systems',
  'Healthcare & Biotechnology Platforms',
  'Financial Technology & DeFi Solutions',
  'Sustainability & Green Technology',
  'Metaverse & AR/VR Platforms',
  'Advanced Analytics & Business Intelligence'
];