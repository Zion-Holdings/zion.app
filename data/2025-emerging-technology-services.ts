export interface EmergingTechnologyService {
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

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
    id: 'quantum-computing-as-a-service',
    name: 'Quantum Computing as a Service',
    tagline: 'Access quantum computing power through cloud-based quantum processors',
    price: '$9,999',
    period: '/month',
    description: 'Enterprise quantum computing platform that provides access to quantum processors through the cloud, enabling organizations to solve complex computational problems that are impossible for classical computers.',
    features: [
      'Cloud-based quantum processors',
      'Quantum algorithm library',
      'Hybrid quantum-classical computing',
      'Quantum error correction',
      'Performance optimization',
      'Real-time quantum simulations',
      'API access',
      'Quantum education resources',
      'Expert consultation',
      'Custom quantum solutions'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-computing-as-a-service',
    marketPosition: 'Advanced quantum computing platform. Competes with IBM Quantum ($0.60-1.60 per second) but offers more comprehensive quantum services.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Financial services, Aerospace companies, Government agencies, Technology companies',
    trialDays: 60,
    setupTime: '6-8 weeks',
    category: 'Quantum Computing & Technology',
    realService: true,
    technology: ['Quantum processors, Quantum algorithms, Quantum error correction, React, Node.js, Python, Qiskit'],
    integrations: ['IBM Quantum, Google Quantum, AWS Braket, Azure Quantum, Custom quantum platforms'],
    useCases: ['Drug discovery, Financial modeling, Cryptography, Optimization problems, Machine learning, Scientific research'],
    roi: 'Average customer sees 800% ROI within 24 months through quantum advantage in specific applications.',
    competitors: ['IBM Quantum, Google Quantum, AWS Braket, Azure Quantum, Custom solutions'],
    marketSize: '$8B quantum computing market',
    growthRate: '500% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise quantum platform with cloud access, advanced algorithms, and comprehensive quantum services.',
    launchDate: '2024-12-01',
    customers: 25,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'blockchain-enterprise-platform',
    name: 'Blockchain Enterprise Platform',
    tagline: 'Enterprise-grade blockchain solutions for business transformation',
    price: '$4,999',
    period: '/month',
    description: 'Comprehensive enterprise blockchain platform that enables organizations to build, deploy, and manage blockchain applications for supply chain, finance, identity, and more.',
    features: [
      'Multi-blockchain support',
      'Smart contract development',
      'Enterprise security features',
      'Scalability solutions',
      'Interoperability tools',
      'Compliance frameworks',
      'API integration',
      'Real-time monitoring',
      'Analytics dashboard',
      'Custom blockchain networks'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-enterprise-platform',
    marketPosition: 'Advanced enterprise blockchain solution. Competes with Hyperledger Fabric ($0-10K/month) but offers more comprehensive enterprise features.',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Manufacturing, Retail chains',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Blockchain & Distributed Ledger',
    realService: true,
    technology: ['Ethereum, Hyperledger, Solidity, React, Node.js, Python, Go, Smart contracts'],
    integrations: ['ERP systems, Supply chain platforms, Financial systems, Identity providers, Custom applications'],
    useCases: ['Supply chain tracking, Digital identity, Smart contracts, Tokenization, Cross-border payments'],
    roi: 'Average customer sees 600% ROI within 18 months through blockchain efficiency and transparency.',
    competitors: ['Hyperledger Fabric, Ethereum Enterprise, Corda, Custom solutions'],
    marketSize: '$32B enterprise blockchain market',
    growthRate: '350% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise platform with multi-blockchain support, advanced security, and comprehensive development tools.',
    launchDate: '2024-11-15',
    customers: 85,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'ar-vr-enterprise-platform',
    name: 'AR/VR Enterprise Platform',
    tagline: 'Immersive technology solutions for enterprise training and collaboration',
    price: '$3,999',
    period: '/month',
    description: 'Comprehensive augmented and virtual reality platform designed for enterprise applications including training, remote collaboration, product visualization, and customer experiences.',
    features: [
      'AR/VR content creation',
      'Enterprise training modules',
      'Remote collaboration tools',
      '3D visualization engine',
      'Multi-user experiences',
      'Analytics and insights',
      'Device management',
      'Content distribution',
      'Custom development',
      'Integration capabilities'
    ],
    popular: false,
    icon: '🥽',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ar-vr-enterprise-platform',
    marketPosition: 'Advanced AR/VR enterprise solution. Competes with Unity Enterprise ($4K-15K/month) but offers more specialized enterprise features.',
    targetAudience: 'Manufacturing companies, Healthcare organizations, Educational institutions, Retail chains, Real estate, Training companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Augmented & Virtual Reality',
    realService: true,
    technology: ['Unity, Unreal Engine, ARKit, ARCore, React, Node.js, Python, 3D modeling'],
    integrations: ['CAD systems, Training platforms, CRM systems, Custom enterprise systems'],
    useCases: ['Employee training, Remote collaboration, Product visualization, Customer experiences, Maintenance procedures'],
    roi: 'Average customer sees 450% ROI within 12 months through improved training efficiency and reduced costs.',
    competitors: ['Unity Enterprise, Unreal Engine, Custom solutions'],
    marketSize: '$18B enterprise AR/VR market',
    growthRate: '280% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise platform with AR/VR development tools, content management, and comprehensive analytics.',
    launchDate: '2024-10-01',
    customers: 55,
    rating: 4.7,
    reviews: 42
  },
  {
    id: 'ai-robotics-automation-platform',
    name: 'AI Robotics Automation Platform',
    tagline: 'Intelligent robotics automation for manufacturing and logistics',
    price: '$6,999',
    period: '/month',
    description: 'Advanced AI-powered robotics platform that enables intelligent automation in manufacturing, logistics, and other industrial applications through machine learning and computer vision.',
    features: [
      'AI-powered robotics control',
      'Computer vision integration',
      'Machine learning algorithms',
      'Safety monitoring systems',
      'Performance optimization',
      'Remote operation capabilities',
      'Analytics and reporting',
      'Integration frameworks',
      'Custom robot programming',
      'Multi-robot coordination'
    ],
    popular: false,
    icon: '🤖',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-robotics-automation-platform',
    marketPosition: 'Advanced AI robotics solution. Competes with Universal Robots ($15K-50K/robot) but offers more comprehensive AI capabilities.',
    targetAudience: 'Manufacturing companies, Logistics companies, Warehouses, Automotive manufacturers, Aerospace companies, Food processing',
    trialDays: 60,
    setupTime: '6-8 weeks',
    category: 'AI Robotics & Automation',
    realService: true,
    technology: ['Machine Learning, Computer Vision, Robotics frameworks, React, Node.js, Python, TensorFlow'],
    integrations: ['Robot arms, Vision systems, PLC systems, MES systems, Custom industrial systems'],
    useCases: ['Quality inspection, Material handling, Assembly automation, Packaging, Logistics automation'],
    roi: 'Average customer sees 700% ROI within 18 months through automation and improved efficiency.',
    competitors: ['Universal Robots, ABB Robotics, FANUC, Custom solutions'],
    marketSize: '$25B AI robotics market',
    growthRate: '400% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise platform with AI robotics control, advanced vision systems, and comprehensive automation capabilities.',
    launchDate: '2024-09-15',
    customers: 35,
    rating: 4.8,
    reviews: 28
  }
];