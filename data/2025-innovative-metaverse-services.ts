import { ServiceVariant } from '../types/service-variants';

export interface InnovativeMetaverseService {
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

export const innovativeMetaverseServices: InnovativeMetaverseService[] = [
  {
    id: 'ai-powered-metaverse-builder',
    name: 'AI-Powered Metaverse Builder',
    tagline: 'Create immersive virtual worlds with AI-generated content and intelligent automation',
    price: '$799',
    period: '/month',
    description: 'Revolutionary platform that uses AI to automatically generate and manage immersive metaverse environments, virtual assets, and interactive experiences.',
    features: [
      'AI-generated 3D environments',
      'Automated asset creation',
      'Intelligent NPC behavior',
      'Dynamic world generation',
      'Real-time content adaptation',
      'Multi-user collaboration tools',
      'VR/AR compatibility',
      'Blockchain integration',
      'Performance optimization'
    ],
    popular: true,
    icon: '🌍',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/ai-powered-metaverse-builder',
    marketPosition: 'Leading AI-powered metaverse creation platform for businesses and creators.',
    targetAudience: 'Game developers, Marketing agencies, Educational institutions, Real estate companies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Metaverse & VR',
    realService: true,
    technology: ['Unity, Unreal Engine, AI/ML, 3D modeling, Blockchain, Web3'],
    integrations: ['VR headsets, AR devices, Social platforms, Payment systems'],
    useCases: ['Virtual events, Gaming, Education, Marketing, Real estate visualization'],
    roi: 'Reduce metaverse development time by 80% and costs by 60%',
    competitors: ['Roblox Studio, Unity, Unreal Engine, Decentraland'],
    marketSize: '$13.8B+ metaverse platform market',
    growthRate: '280% YoY',
    variant: 'metaverse-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered metaverse creation platform with automated content generation and management capabilities.',
    launchDate: '2025-01-08',
    customers: 67,
    rating: 4.8,
    reviews: 48
  },
  {
    id: 'virtual-reality-commerce-platform',
    name: 'Virtual Reality Commerce Platform',
    tagline: 'Immersive shopping experiences with AI-powered product visualization',
    price: '$1,299',
    period: '/month',
    description: 'Advanced VR commerce platform that creates immersive shopping experiences with AI-powered product visualization, virtual try-ons, and interactive product demonstrations.',
    features: [
      '3D product visualization',
      'Virtual try-on technology',
      'AI-powered recommendations',
      'Interactive product demos',
      'Virtual store environments',
      'Social shopping features',
      'Analytics and insights',
      'Multi-platform support',
      'Payment integration'
    ],
    popular: true,
    icon: '🛍️',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/virtual-reality-commerce-platform',
    marketPosition: 'Leading VR commerce platform for immersive shopping experiences.',
    targetAudience: 'E-commerce companies, Retail brands, Fashion companies, Beauty brands',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Metaverse & VR',
    realService: true,
    technology: ['VR/AR, AI/ML, 3D modeling, Computer vision, Web3'],
    integrations: ['E-commerce platforms, Payment gateways, CRM systems, Analytics tools'],
    useCases: ['Virtual shopping, Product visualization, Virtual try-ons, Interactive marketing'],
    roi: 'Increase conversion rates by 40-60% and reduce returns by 30-50%',
    competitors: ['Obsess, Virtual Try-On, Zeekit, Perfect Corp'],
    marketSize: '$7.2B+ VR commerce market',
    growthRate: '320% YoY',
    variant: 'metaverse-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'VR commerce platform with AI-powered product visualization and immersive shopping experiences.',
    launchDate: '2025-01-15',
    customers: 89,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'metaverse-education-platform',
    name: 'Metaverse Education Platform',
    tagline: 'Immersive learning experiences with AI-powered educational content',
    price: '$599',
    period: '/month',
    description: 'Revolutionary educational platform that creates immersive learning experiences in virtual environments with AI-powered content generation and personalized learning paths.',
    features: [
      'Virtual classrooms and campuses',
      'AI-generated educational content',
      'Interactive 3D learning objects',
      'Personalized learning paths',
      'Real-time collaboration tools',
      'Progress tracking and analytics',
      'Multi-language support',
      'Accessibility features',
      'Integration with LMS systems'
    ],
    popular: false,
    icon: '🎓',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/metaverse-education-platform',
    marketPosition: 'Advanced metaverse education platform for immersive learning experiences.',
    targetAudience: 'Educational institutions, Corporate training, Online learning platforms, EdTech companies',
    trialDays: 45,
    setupTime: '3 weeks',
    category: 'Metaverse & VR',
    realService: true,
    technology: ['VR/AR, AI/ML, 3D modeling, Learning analytics, Web3'],
    integrations: ['LMS platforms, Video conferencing tools, Assessment platforms, Analytics tools'],
    useCases: ['Virtual classrooms, Interactive learning, Corporate training, Skills development'],
    roi: 'Improve learning engagement by 70% and knowledge retention by 50%',
    competitors: ['Engage VR, AltspaceVR, Mozilla Hubs, Spatial'],
    marketSize: '$5.8B+ VR education market',
    growthRate: '250% YoY',
    variant: 'metaverse-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metaverse education platform with AI-powered content generation and immersive learning experiences.',
    launchDate: '2025-01-20',
    customers: 45,
    rating: 4.7,
    reviews: 33
  },
  {
    id: 'virtual-reality-healthcare-platform',
    name: 'Virtual Reality Healthcare Platform',
    tagline: 'Immersive healthcare experiences with AI-powered medical visualization',
    price: '$1,999',
    period: '/month',
    description: 'Advanced VR healthcare platform that creates immersive medical experiences for training, patient education, and therapeutic interventions.',
    features: [
      'Medical procedure simulation',
      '3D anatomy visualization',
      'VR therapy sessions',
      'Medical training scenarios',
      'Patient education tools',
      'Telemedicine integration',
      'Medical data visualization',
      'Compliance and security',
      'Analytics and reporting'
    ],
    popular: false,
    icon: '🏥',
    color: 'from-emerald-600 to-green-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/virtual-reality-healthcare-platform',
    marketPosition: 'Leading VR healthcare platform for medical training and patient care.',
    targetAudience: 'Hospitals, Medical schools, Healthcare providers, Medical device companies',
    trialDays: 60,
    setupTime: '1 month',
    category: 'Metaverse & VR',
    realService: true,
    technology: ['VR/AR, AI/ML, Medical imaging, 3D modeling, Healthcare APIs'],
    integrations: ['EHR systems, Medical devices, Telemedicine platforms, Training systems'],
    useCases: ['Medical training, Patient education, Therapy, Surgical planning'],
    roi: 'Improve medical training efficiency by 60% and patient outcomes by 30%',
    competitors: ['Osso VR, FundamentalVR, PrecisionOS, ImmersiveTouch'],
    marketSize: '$4.2B+ VR healthcare market',
    growthRate: '180% YoY',
    variant: 'metaverse-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'VR healthcare platform with AI-powered medical visualization and immersive healthcare experiences.',
    launchDate: '2025-01-25',
    customers: 23,
    rating: 4.8,
    reviews: 18
  },
  {
    id: 'metaverse-social-platform',
    name: 'Metaverse Social Platform',
    tagline: 'Next-generation social networking in immersive virtual environments',
    price: '$399',
    period: '/month',
    description: 'Revolutionary social platform that creates immersive virtual spaces for social interaction, collaboration, and community building with AI-powered content moderation.',
    features: [
      'Virtual social spaces',
      'AI-powered content moderation',
      'Real-time communication',
      'Avatar customization',
      'Community building tools',
      'Event hosting capabilities',
      'Social analytics',
      'Multi-platform support',
      'Privacy and security'
    ],
    popular: true,
    icon: '👥',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/metaverse-social-platform',
    marketPosition: 'Advanced metaverse social platform for immersive social interactions.',
    targetAudience: 'Social media companies, Event organizers, Community platforms, Marketing agencies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Metaverse & VR',
    realService: true,
    technology: ['VR/AR, AI/ML, Social networking, Real-time communication, Web3'],
    integrations: ['Social media platforms, Communication tools, Analytics platforms, Payment systems'],
    useCases: ['Virtual events, Social networking, Community building, Brand engagement'],
    roi: 'Increase user engagement by 80% and event attendance by 60%',
    competitors: ['Horizon Worlds, VRChat, Rec Room, AltspaceVR'],
    marketSize: '$9.6B+ metaverse social market',
    growthRate: '350% YoY',
    variant: 'metaverse-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metaverse social platform with AI-powered content moderation and immersive social experiences.',
    launchDate: '2025-02-01',
    customers: 156,
    rating: 4.9,
    reviews: 112
  }
];