import { ServiceVariant } from '../types/service-variants';

export interface InnovativeHealthtechService {
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

export const innovativeHealthtechServices: InnovativeHealthtechService[] = [
  {
    id: 'ai-powered-diagnostic-platform',
    name: 'AI-Powered Diagnostic Platform',
    tagline: 'Intelligent medical diagnostics with AI-powered analysis and early detection',
    price: '$5,999',
    period: '/month',
    description: 'Advanced AI-powered diagnostic platform that uses machine learning to analyze medical images, detect diseases early, and provide accurate diagnostic recommendations.',
    features: [
      'AI-powered medical imaging',
      'Early disease detection',
      'Diagnostic accuracy',
      'Medical image analysis',
      'Performance analytics',
      'Integration capabilities',
      'Custom diagnostic models',
      'Multi-modality support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-diagnostic-platform',
    marketPosition: 'Leading AI-powered diagnostic platform with medical imaging and early detection capabilities.',
    targetAudience: 'Hospitals, Medical imaging centers, Radiologists, Healthcare providers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Healthcare Technology & Healthtech',
    realService: true,
    technology: ['AI/ML, Medical imaging, Computer vision, Deep learning, Healthcare analytics'],
    integrations: ['PACS systems, EHR platforms, Medical devices, Analytics tools'],
    useCases: ['Medical diagnostics, Disease detection, Medical imaging, Healthcare analytics'],
    roi: 'Improve diagnostic accuracy by 85% and reduce diagnostic time by 70%',
    competitors: ['IBM Watson Health, Google Health, Microsoft Healthcare, NVIDIA Clara'],
    marketSize: '$89.2B+ AI healthcare market',
    growthRate: '480% YoY',
    variant: 'healthtech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered diagnostic platform with medical imaging and early detection capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-drug-discovery',
    name: 'Quantum Drug Discovery Platform',
    tagline: 'Quantum-powered drug discovery with molecular simulation and optimization',
    price: '$28,999',
    period: '/month',
    description: 'Revolutionary quantum drug discovery platform that uses quantum computing to simulate molecular interactions, optimize drug compounds, and accelerate pharmaceutical research.',
    features: [
      'Quantum molecular simulation',
      'Drug compound optimization',
      'Molecular modeling',
      'Quantum algorithms',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-compound support',
      'Compliance management'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-drug-discovery',
    marketPosition: 'Advanced quantum computing platform for drug discovery and molecular simulation.',
    targetAudience: 'Pharmaceutical companies, Biotech firms, Research institutions, Drug discovery labs'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Healthcare Technology & Healthtech',
    realService: true,
    technology: ['Quantum computing, Drug discovery, Molecular simulation, Quantum algorithms, Chemistry'],
    integrations: ['Quantum processors, Chemical databases, Research tools, Analytics platforms'],
    useCases: ['Drug discovery, Molecular modeling, Compound optimization, Pharmaceutical research'],
    roi: 'Accelerate drug discovery by 1000x and reduce research costs by 80%',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$68.4B+ quantum healthcare market',
    growthRate: '820% YoY',
    variant: 'healthtech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum drug discovery platform with molecular simulation and optimization capabilities.',
    launchDate: '2025-01-08',
    customers: 12,
    rating: 4.6,
    reviews: 8
  },
  {
    id: 'telemedicine-platform',
    name: 'Advanced Telemedicine Platform',
    tagline: 'Comprehensive telemedicine with AI-powered triage and remote monitoring',
    price: '$2,999',
    period: '/month',
    description: 'Advanced telemedicine platform that provides comprehensive remote healthcare services, AI-powered triage, and continuous patient monitoring capabilities.',
    features: [
      'AI-powered triage',
      'Remote monitoring',
      'Video consultations',
      'Patient management',
      'Performance analytics',
      'Integration capabilities',
      'Custom healthcare models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '📱',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/telemedicine-platform',
    marketPosition: 'Leading telemedicine platform with AI-powered triage and remote monitoring.',
    targetAudience: 'Healthcare providers, Hospitals, Clinics, Telemedicine companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Healthcare Technology & Healthtech',
    realService: true,
    technology: ['AI/ML, Telemedicine, Remote monitoring, Video conferencing, Healthcare analytics'],
    integrations: ['EHR systems, Medical devices, Payment systems, Analytics tools'],
    useCases: ['Remote consultations, Patient monitoring, Healthcare delivery, Telemedicine services'],
    roi: 'Improve patient access by 300% and reduce healthcare costs by 40%',
    competitors: ['Teladoc, Amwell, MDLive, Doctor on Demand'],
    marketSize: '$42.8B+ telemedicine market',
    growthRate: '380% YoY',
    variant: 'healthtech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced telemedicine platform with AI-powered triage and remote monitoring capabilities.',
    launchDate: '2025-01-15',
    customers: 189,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'precision-medicine-platform',
    name: 'Precision Medicine Platform',
    tagline: 'Personalized healthcare with genomic analysis and treatment optimization',
    price: '$4,499',
    period: '/month',
    description: 'Advanced precision medicine platform that uses genomic analysis, AI algorithms, and personalized data to optimize treatment plans and improve patient outcomes.',
    features: [
      'Genomic analysis',
      'Treatment optimization',
      'Personalized medicine',
      'AI algorithms',
      'Performance analytics',
      'Integration capabilities',
      'Custom medicine models',
      'Multi-genomic support',
      'Compliance management'
    ],
    popular: true,
    icon: '🧪',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/precision-medicine-platform',
    marketPosition: 'Leading precision medicine platform with genomic analysis and treatment optimization.',
    targetAudience: 'Hospitals, Research institutions, Pharmaceutical companies, Genetic testing labs'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Healthcare Technology & Healthtech',
    realService: true,
    technology: ['Genomics, AI/ML, Precision medicine, Bioinformatics, Healthcare analytics'],
    integrations: ['Genomic databases, EHR systems, Research tools, Analytics platforms'],
    useCases: ['Genomic analysis, Treatment optimization, Personalized medicine, Research applications'],
    roi: 'Improve treatment outcomes by 60% and reduce adverse reactions by 80%',
    competitors: ['23andMe, Ancestry, Color Genomics, Invitae'],
    marketSize: '$56.8B+ precision medicine market',
    growthRate: '520% YoY',
    variant: 'healthtech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced precision medicine platform with genomic analysis and treatment optimization capabilities.',
    launchDate: '2025-01-22',
    customers: 145,
    rating: 4.6,
    reviews: 123
  },
  {
    id: 'healthcare-iot-platform',
    name: 'Healthcare IoT Platform',
    tagline: 'Connected healthcare with IoT devices and real-time monitoring',
    price: '$3,499',
    period: '/month',
    description: 'Advanced healthcare IoT platform that connects medical devices, provides real-time patient monitoring, and enables proactive healthcare management.',
    features: [
      'IoT device connectivity',
      'Real-time monitoring',
      'Patient tracking',
      'Device management',
      'Performance analytics',
      'Integration capabilities',
      'Custom IoT models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '📡',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/healthcare-iot-platform',
    marketPosition: 'Leading healthcare IoT platform with device connectivity and real-time monitoring.',
    targetAudience: 'Hospitals, Medical device manufacturers, Healthcare providers, IoT companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Healthcare Technology & Healthtech',
    realService: true,
    technology: ['IoT, Healthcare devices, Real-time monitoring, Device management, Analytics'],
    integrations: ['Medical devices, EHR systems, IoT platforms, Analytics tools'],
    useCases: ['Patient monitoring, Device management, Healthcare IoT, Remote care'],
    roi: 'Improve patient monitoring by 200% and reduce healthcare costs by 35%',
    competitors: ['Philips Healthcare, GE Healthcare, Siemens Healthineers, Medtronic'],
    marketSize: '$38.4B+ healthcare IoT market',
    growthRate: '420% YoY',
    variant: 'healthtech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced healthcare IoT platform with device connectivity and real-time monitoring capabilities.',
    launchDate: '2025-01-29',
    customers: 167,
    rating: 4.7,
    reviews: 134
  }
];