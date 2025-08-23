import { ServiceVariant } from '../types/service-variants';

export interface InnovativeEducationService {
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

export const innovativeEducationServices: InnovativeEducationService[] = [
  {
    id: 'ai-powered-learning-platform',
    name: 'AI-Powered Learning Platform',
    tagline: 'Intelligent learning with AI-powered personalization and adaptive content',
    price: '$3,999',
    period: '/month',
    description: 'Advanced AI-powered learning platform that uses machine learning to personalize education, adapt content to individual learners, and provide intelligent tutoring systems.',
    features: [
      'AI-powered personalization',
      'Adaptive learning',
      'Intelligent tutoring',
      'Content optimization',
      'Performance analytics',
      'Integration capabilities',
      'Custom learning models',
      'Multi-subject support',
      'Compliance management'
    ],
    popular: true,
    icon: '🎓',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-learning-platform',
    marketPosition: 'Leading AI-powered learning platform with personalization and adaptive content capabilities.',
    targetAudience: 'Educational institutions, Corporate training departments, Online learning platforms, EdTech companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Education & Training',
    realService: true,
    technology: ['AI/ML, Learning analytics, Personalization algorithms, Adaptive learning, Educational technology'],
    integrations: ['LMS systems, Content management systems, Student information systems, Analytics tools'],
    useCases: ['Personalized learning, Adaptive education, Intelligent tutoring, Learning analytics'],
    roi: 'Improve learning outcomes by 40% and increase student engagement by 60%',
    competitors: ['Coursera, Udemy, Khan Academy, Duolingo'],
    marketSize: '$89.4B+ AI education market',
    growthRate: '420% YoY',
    variant: 'education-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered learning platform with personalization and adaptive content capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'virtual-reality-education',
    name: 'Virtual Reality Education Platform',
    tagline: 'Immersive learning with VR-powered simulations and interactive experiences',
    price: '$4,999',
    period: '/month',
    description: 'Advanced virtual reality education platform that creates immersive learning experiences through VR simulations, interactive content, and virtual field trips.',
    features: [
      'VR simulations',
      'Interactive content',
      'Virtual field trips',
      'Immersive learning',
      'Performance analytics',
      'Integration capabilities',
      'Custom VR models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '🥽',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/virtual-reality-education',
    marketPosition: 'Leading virtual reality education platform with immersive simulations and interactive experiences.',
    targetAudience: 'Educational institutions, Training centers, Corporate training, VR education companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Education & Training',
    realService: true,
    technology: ['VR/AR, 3D modeling, Interactive content, Immersive learning, Educational technology'],
    integrations: ['VR headsets, Content creation tools, LMS platforms, Analytics tools'],
    useCases: ['VR simulations, Interactive learning, Virtual field trips, Immersive education'],
    roi: 'Improve learning retention by 80% and increase engagement by 200%',
    competitors: ['Nearpod, ClassVR, Google Expeditions, Alchemy VR'],
    marketSize: '$42.8B+ VR education market',
    growthRate: '480% YoY',
    variant: 'education-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced virtual reality education platform with immersive simulations and interactive experiences capabilities.',
    launchDate: '2025-01-08',
    customers: 167,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'quantum-education-platform',
    name: 'Quantum Education Platform',
    tagline: 'Quantum computing education with interactive simulations and learning tools',
    price: '$24,999',
    period: '/month',
    description: 'Revolutionary quantum education platform that provides interactive quantum computing simulations, educational tools, and learning resources for quantum technology education.',
    features: [
      'Quantum simulations',
      'Interactive learning',
      'Quantum algorithms',
      'Educational tools',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-level support',
      'Compliance management'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-education-platform',
    marketPosition: 'Advanced quantum computing education platform with interactive simulations and learning tools.',
    targetAudience: 'Universities, Research institutions, Technology companies, Quantum education providers'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Education & Training',
    realService: true,
    technology: ['Quantum computing, Educational technology, Interactive simulations, Quantum algorithms, Learning tools'],
    integrations: ['Quantum processors, Educational platforms, Simulation tools, Analytics platforms'],
    useCases: ['Quantum education, Interactive learning, Algorithm simulation, Technology training'],
    roi: 'Accelerate quantum education by 1000x and improve understanding by 90%',
    competitors: ['IBM Quantum Experience, Google Quantum, D-Wave Leap, Rigetti Forest'],
    marketSize: '$38.4B+ quantum education market',
    growthRate: '820% YoY',
    variant: 'education-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum education platform with interactive simulations and learning tools capabilities.',
    launchDate: '2025-01-15',
    customers: 12,
    rating: 4.6,
    reviews: 8
  },
  {
    id: 'blockchain-education-platform',
    name: 'Blockchain Education Platform',
    tagline: 'Comprehensive blockchain education with hands-on learning and certification',
    price: '$2,999',
    period: '/month',
    description: 'Advanced blockchain education platform that provides comprehensive blockchain training, hands-on learning experiences, and professional certification programs.',
    features: [
      'Blockchain training',
      'Hands-on learning',
      'Professional certification',
      'Interactive content',
      'Performance analytics',
      'Integration capabilities',
      'Custom blockchain models',
      'Multi-course support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/blockchain-education-platform',
    marketPosition: 'Leading blockchain education platform with hands-on learning and professional certification.',
    targetAudience: 'Educational institutions, Corporate training, Blockchain companies, Professional development'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Education & Training',
    realService: true,
    technology: ['Blockchain, Educational technology, Interactive learning, Certification systems, Learning analytics'],
    integrations: ['Blockchain networks, Educational platforms, Certification systems, Analytics tools'],
    useCases: ['Blockchain training, Professional certification, Hands-on learning, Technology education'],
    roi: 'Improve blockchain skills by 200% and increase certification success by 80%',
    competitors: ['Coursera Blockchain, Udemy Blockchain, B9lab, ConsenSys Academy'],
    marketSize: '$28.8B+ blockchain education market',
    growthRate: '580% YoY',
    variant: 'education-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced blockchain education platform with hands-on learning and professional certification capabilities.',
    launchDate: '2025-01-22',
    customers: 189,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'ai-powered-assessment-platform',
    name: 'AI-Powered Assessment Platform',
    tagline: 'Intelligent assessment with AI-powered grading and performance analysis',
    price: '$1,999',
    period: '/month',
    description: 'Advanced AI-powered assessment platform that uses machine learning to grade assignments, analyze student performance, and provide detailed feedback and insights.',
    features: [
      'AI-powered grading',
      'Performance analysis',
      'Automated feedback',
      'Assessment tools',
      'Performance analytics',
      'Integration capabilities',
      'Custom assessment models',
      'Multi-subject support',
      'Compliance management'
    ],
    popular: true,
    icon: '📊',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-assessment-platform',
    marketPosition: 'Leading AI-powered assessment platform with automated grading and performance analysis.',
    targetAudience: 'Educational institutions, Teachers, Corporate trainers, Assessment companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Education & Training',
    realService: true,
    technology: ['AI/ML, Assessment technology, Automated grading, Performance analytics, Educational technology'],
    integrations: ['LMS systems, Student information systems, Assessment tools, Analytics platforms'],
    useCases: ['Automated grading, Performance analysis, Student assessment, Feedback generation'],
    roi: 'Reduce grading time by 90% and improve assessment accuracy by 85%',
    competitors: ['Turnitin, Gradescope, Gradescope, Canvas SpeedGrader'],
    marketSize: '$24.8B+ AI assessment market',
    growthRate: '380% YoY',
    variant: 'education-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered assessment platform with automated grading and performance analysis capabilities.',
    launchDate: '2025-01-29',
    customers: 145,
    rating: 4.6,
    reviews: 123
  }
];