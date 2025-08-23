import { ServiceVariant } from '../types/service-variants';

export interface InnovativeITService2025V2 {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  period?: string;
  pricing?: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  description: string;
  features: string[];
  benefits?: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition?: string;
  targetAudience: string;
  trialDays?: number;
  setupTime?: string;
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
  slug?: string;
  contact?: string;
  mobile?: string;
  address?: string;
  website?: string;
  competitiveAdvantage?: string;
}

export const innovativeITServices2025V2: InnovativeITService2025V2[] = [
  // Quantum-Safe Cybersecurity Platform
  {
    id: 'cloud-native-application-development',
    name: 'Cloud-Native Application Development Services',
    tagline: 'Build scalable, resilient applications for the cloud era',
    description: 'Comprehensive cloud-native application development services that leverage microservices architecture, containerization, and cloud-native technologies to build scalable, resilient, and maintainable applications. Includes CI/CD pipeline setup, monitoring, and DevOps automation.',
    category: 'Cloud Development & DevOps',
    type: 'IT Services',
    pricing: {
      starter: '$5,000/project',
      professional: '$15,000/project',
      enterprise: '$50,000/project',
      custom: 'Contact for pricing'
    },
    features: [
      'Microservices architecture design',
      'Container orchestration with Kubernetes',
      'CI/CD pipeline implementation',
      'Cloud-native monitoring and logging',
      'Auto-scaling and load balancing',
      'Security and compliance implementation',
      'Performance optimization',
      'Disaster recovery planning',
      'API gateway implementation',
      'Service mesh configuration',
      'Cloud cost optimization',
      'DevOps automation'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve application scalability by 300%',
      'Decrease deployment time by 80%',
      'Enhance system reliability by 99.9%',
      'Faster time to market',
      'Better resource utilization',
      'Improved developer productivity',
      'Enhanced security posture'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS applications',
      'Mobile app backends',
      'Data processing pipelines',
      'IoT platforms',
      'Financial applications',
      'Healthcare systems',
      'Government applications'
    ],
    marketSize: '$18.7B by 2025',
    targetAudience: 'Startups, enterprises, government agencies, healthcare organizations',
    competitiveAdvantage: 'Full-stack cloud-native expertise with proven enterprise implementations',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/cloud-native-application-development'
  },

  // Cybersecurity Assessment & Penetration Testing
  {
    id: 'cybersecurity-assessment-penetration-testing',
    name: 'Comprehensive Cybersecurity Assessment & Penetration Testing',
    tagline: 'Identify and eliminate security vulnerabilities before they become threats',
    description: 'Professional cybersecurity assessment and penetration testing services that identify vulnerabilities in applications, networks, and infrastructure. Includes detailed reporting, remediation guidance, and ongoing security monitoring to protect against cyber threats.',
    category: 'Cybersecurity & Testing',
    type: 'IT Services',
    pricing: {
      starter: '$3,500/assessment',
      professional: '$8,500/assessment',
      enterprise: '$25,000/assessment',
      custom: 'Contact for pricing'
    },
    features: [
      'Vulnerability assessment',
      'Penetration testing (web, mobile, network)',
      'Social engineering testing',
      'Physical security assessment',
      'Compliance auditing (SOC2, HIPAA, PCI)',
      'Security architecture review',
      'Incident response planning',
      'Security awareness training',
      'Ongoing security monitoring',
      'Threat intelligence integration',
      'Security policy development',
      'Compliance reporting'
    ],
    benefits: [
      'Identify security vulnerabilities before exploitation',
      'Meet regulatory compliance requirements',
      'Reduce security breach risks by 90%',
      'Improve security posture and awareness',
      'Protect customer data and trust',
      'Reduce potential financial losses',
      'Enhance insurance coverage eligibility',
      'Demonstrate security commitment to stakeholders'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies',
      'Educational institutions',
      'Manufacturing companies',
      'Technology startups',
      'Non-profit organizations'
    ],
    marketSize: '$22.4B by 2025',
    targetAudience: 'Businesses handling sensitive data, regulated industries, government agencies',
    competitiveAdvantage: 'Certified security professionals with industry-specific compliance expertise',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/cybersecurity-assessment-penetration-testing'
  },

  // Data Analytics & Business Intelligence
  {
    id: 'data-analytics-business-intelligence',
    name: 'Advanced Data Analytics & Business Intelligence Solutions',
    tagline: 'Transform data into actionable business insights',
    description: 'Comprehensive data analytics and business intelligence services that help organizations collect, process, analyze, and visualize data to make informed business decisions. Includes data warehousing, ETL processes, dashboard creation, and predictive analytics.',
    category: 'Data Analytics & BI',
    type: 'IT Services',
    pricing: {
      starter: '$4,500/project',
      professional: '$12,000/project',
      enterprise: '$35,000/project',
      custom: 'Contact for pricing'
    },
    realImplementation: true,
    implementationDetails: 'Intelligent data center management platform with AI-powered optimization, predictive maintenance, and comprehensive monitoring tools',
    launchDate: '2025-02-25',
    customers: 320,
    rating: 4.8,
    reviews: 89,
    popular: false,
    icon: 'server',
    color: 'from-gray-500 to-slate-500',
    textColor: 'text-white',
    link: '/ai-powered-data-center-management'
  }
];