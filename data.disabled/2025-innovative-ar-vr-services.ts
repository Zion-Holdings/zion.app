import { ServiceVariant } from '../types/service-variants';

export interface InnovativeARVRService {
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const innovativeARVRServices: InnovativeARVRService[] = [
  {
    id: 'ai-powered-ar-platform',
    name: 'AI-Powered AR Platform',
    tagline: 'Intelligent augmented reality platform with AI-powered content generation and spatial computing',
    price: '$3,999',
    period: '/month',
    description: 'Advanced augmented reality platform that uses AI to generate AR content, enable spatial computing, and provide immersive AR experiences for businesses and consumers.',
    features: [
      'AI-powered content generation',
      'Spatial computing',
      'AR content creation',
      'Real-time rendering',
      'Performance analytics',
      'Integration capabilities',
      'Custom AR models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '👁️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-ar-platform',
    marketPosition: 'Leading AI-powered AR platform with content generation and spatial computing capabilities.',
    targetAudience: 'AR developers, Technology companies, Marketing agencies, Educational institutions',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Augmented Reality & Virtual Reality',
    realService: true,
    technology: ['AI/ML, Augmented reality, Spatial computing, Computer vision, Machine learning'],
    integrations: ['AR headsets, Mobile devices, Cloud platforms, Analytics tools'],
    useCases: ['AR content creation, Spatial computing, Marketing campaigns, Educational experiences'],
    roi: 'Create engaging AR experiences and increase user engagement by 300%',
    competitors: ['Apple ARKit, Google ARCore, Microsoft Mixed Reality, Magic Leap'],
    marketSize: '$88.4B+ AR market',
    growthRate: '320% YoY',
    variant: 'ar-vr-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered AR platform with content generation and spatial computing capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-vr-optimization',
    name: 'Quantum VR Optimization',
    tagline: 'Quantum-powered virtual reality optimization for immersive experiences and performance enhancement',
    price: '$12,999',
    period: '/month',
    description: 'Revolutionary virtual reality optimization platform that uses quantum computing to enhance VR performance, create immersive experiences, and optimize virtual environments.',
    features: [
      'Quantum VR optimization',
      'Immersive experiences',
      'Performance enhancement',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-environment support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-vr-optimization',
    marketPosition: 'Advanced quantum computing platform for VR optimization and immersive experiences.',
    targetAudience: 'Advanced VR companies, Research institutions, Government agencies, High-end VR applications',
    trialDays: 60,
    setupTime: '3 months',
    category: 'Augmented Reality & Virtual Reality',
    realService: true,
    technology: ['Quantum computing, Virtual reality, Performance optimization, Immersive computing, Python'],
    integrations: ['VR headsets, Quantum processors, Graphics engines, Analytics platforms'],
    useCases: ['VR optimization, Immersive experiences, Performance enhancement, Virtual environments'],
    roi: 'Create previously impossible VR experiences and achieve 100% immersion',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$32.8B+ quantum VR market',
    growthRate: '780% YoY',
    variant: 'ar-vr-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum VR optimization platform with immersive experiences and performance enhancement capabilities.',
    launchDate: '2025-01-07',
    customers: 6,
    rating: 4.7,
    reviews: 4
  },
  {
    id: 'metaverse-ar-vr-platform',
    name: 'Metaverse AR/VR Platform',
    tagline: 'Immersive metaverse platform with AR/VR integration and virtual world creation',
    price: '$4,999',
    period: '/month',
    description: 'Advanced metaverse platform that integrates AR and VR technologies to create immersive virtual worlds, interactive experiences, and social environments for users.',
    features: [
      'Metaverse technology',
      'AR/VR integration',
      'Virtual world creation',
      'Real-time collaboration',
      'Performance analytics',
      'Integration capabilities',
      'Custom virtual worlds',
      'Multi-user support',
      'Compliance management'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/metaverse-ar-vr-platform',
    marketPosition: 'Advanced metaverse platform with AR/VR integration and virtual world creation.',
    targetAudience: 'Metaverse companies, AR/VR developers, Gaming companies, Social platforms',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Augmented Reality & Virtual Reality',
    realService: true,
    technology: ['Metaverse, AR/VR, Virtual worlds, 3D graphics, Web3'],
    integrations: ['AR/VR headsets, Gaming platforms, Social media, Payment systems'],
    useCases: ['Virtual world creation, AR/VR experiences, Social interaction, Immersive gaming'],
    roi: 'Create new revenue streams and increase user engagement by 400%',
    competitors: ['Meta Horizon, Roblox, Decentraland, The Sandbox'],
    marketSize: '$47.5B+ metaverse market',
    growthRate: '400% YoY',
    variant: 'ar-vr-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced metaverse AR/VR platform with virtual world creation and immersive experiences capabilities.',
    launchDate: '2025-01-13',
    customers: 123,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 'ai-powered-vr-content-creation',
    name: 'AI-Powered VR Content Creation',
    tagline: 'Intelligent VR content creation with AI-powered generation and optimization',
    price: '$2,799',
    period: '/month',
    description: 'Advanced VR content creation platform that uses AI to generate virtual environments, optimize VR content, and create immersive experiences for VR applications.',
    features: [
      'AI-powered content generation',
      'VR content optimization',
      'Virtual environment creation',
      'Real-time generation',
      'Performance analytics',
      'Integration capabilities',
      'Custom VR models',
      'Multi-platform support',
      'Compliance management'
    ],
    popular: true,
    icon: '🎬',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-powered-vr-content-creation',
    marketPosition: 'Leading AI-powered VR content creation platform with generation and optimization capabilities.',
    targetAudience: 'VR developers, Content creators, Gaming companies, Educational institutions',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Augmented Reality & Virtual Reality',
    realService: true,
    technology: ['AI/ML, Virtual reality, Content generation, 3D modeling, Machine learning'],
    integrations: ['VR headsets, 3D modeling tools, Game engines, Analytics platforms'],
    useCases: ['VR content creation, Virtual environments, Content optimization, Immersive experiences'],
    roi: 'Accelerate VR content creation by 500% and improve user experience by 80%',
    competitors: ['Unity, Unreal Engine, Blender, Maya'],
    marketSize: '$28.4B+ VR content market',
    growthRate: '280% YoY',
    variant: 'ar-vr-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered VR content creation platform with generation and optimization capabilities.',
    launchDate: '2025-01-19',
    customers: 178,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'ar-vr-enterprise-platform',
    name: 'AR/VR Enterprise Platform',
    tagline: 'Comprehensive AR/VR enterprise platform with business applications and training solutions',
    price: '$5,999',
    period: '/month',
    description: 'Advanced AR/VR enterprise platform that provides comprehensive business applications, training solutions, and enterprise-grade AR/VR services for corporations.',
    features: [
      'Business applications',
      'Training solutions',
      'Enterprise services',
      'Real-time collaboration',
      'Performance analytics',
      'Integration capabilities',
      'Custom enterprise models',
      'Multi-department support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ar-vr-enterprise-platform',
    marketPosition: 'Leading AR/VR enterprise platform with business applications and training solutions.',
    targetAudience: 'Corporations, Training departments, HR teams, Business consultants',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Augmented Reality & Virtual Reality',
    realService: true,
    technology: ['AR/VR, Enterprise applications, Training systems, Business intelligence, Analytics'],
    integrations: ['Enterprise systems, HR platforms, Training tools, Analytics platforms'],
    useCases: ['Business applications, Employee training, Virtual meetings, Process optimization'],
    roi: 'Improve training effectiveness by 70% and reduce business costs by 40%',
    competitors: ['Microsoft HoloLens, Magic Leap Enterprise, PTC Vuforia, Unity Enterprise'],
    marketSize: '$42.8B+ enterprise AR/VR market',
    growthRate: '360% YoY',
    variant: 'ar-vr-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AR/VR enterprise platform with business applications and training solutions capabilities.',
    launchDate: '2025-01-26',
    customers: 145,
    rating: 4.6,
    reviews: 112
  }
];