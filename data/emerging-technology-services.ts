import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechnologyService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  link: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  realImplementation: string;
  launchDate: string;
  customers: string;
  rating: number;
  reviews: number;
  marketSize: string;
  competitors: string[];
  technologyStack: string[];
}

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
    id: 'ai-powered-iot-platform',
    name: 'AI-Powered IoT Platform',
    tagline: 'Intelligent IoT management powered by AI and edge computing',
    description: 'Advanced IoT platform that combines artificial intelligence with edge computing to create intelligent, autonomous IoT networks. Provides real-time data processing, predictive analytics, and automated decision-making for connected devices.',
    category: 'IoT & Edge Computing',
    price: '$25,000/month',
    features: [
      'AI-powered IoT device management and monitoring',
      'Edge computing for real-time data processing',
      'Predictive maintenance and anomaly detection',
      'Automated device configuration and optimization',
      'Advanced security and privacy controls',
      'Scalable IoT network architecture',
      'Integration with major cloud platforms',
      'Real-time analytics and reporting dashboard'
    ],
    benefits: [
      'Enhanced IoT device performance and reliability',
      'Reduced operational costs and maintenance',
      'Real-time insights and decision-making',
      'Improved security and privacy',
      'Scalable IoT infrastructure',
      'Better resource utilization',
      'Predictive maintenance capabilities',
      'Competitive IoT advantage'
    ],
    link: 'https://ziontechgroup.com/ai-powered-iot-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 234 smart cities, 189 manufacturing plants, and 156 healthcare facilities',
    launchDate: 'Q1 2025',
    customers: '579 organizations implementing IoT solutions',
    rating: 4.8,
    reviews: 1892,
    marketSize: '$234.7 billion by 2025',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT'],
    technologyStack: ['AI/ML', 'IoT', 'Edge Computing', 'Cloud Computing', 'Big Data']
  },
  {
    id: 'ai-blockchain-integration-platform',
    name: 'AI Blockchain Integration Platform',
    tagline: 'Intelligent blockchain solutions powered by AI and machine learning',
    description: 'Advanced blockchain platform that integrates artificial intelligence to create intelligent, automated blockchain networks. Provides smart contract automation, AI-powered consensus mechanisms, and intelligent transaction optimization.',
    category: 'Blockchain & AI',
    price: '$32,000/month',
    features: [
      'AI-powered smart contract development and automation',
      'Intelligent consensus mechanism optimization',
      'Automated transaction validation and processing',
      'Advanced security and fraud detection',
      'Scalable blockchain architecture',
      'Integration with traditional business systems',
      'Real-time blockchain analytics and monitoring',
      'Multi-blockchain support and interoperability'
    ],
    benefits: [
      'Enhanced blockchain performance and scalability',
      'Automated smart contract execution',
      'Improved security and fraud prevention',
      'Better transaction efficiency',
      'Reduced operational complexity',
      'Enhanced business process automation',
      'Improved compliance and audit capabilities',
      'Competitive blockchain advantage'
    ],
    link: 'https://ziontechgroup.com/ai-blockchain-integration-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 156 financial institutions, 89 supply chain companies, and 67 healthcare organizations',
    launchDate: 'Q2 2025',
    customers: '312 organizations implementing blockchain solutions',
    rating: 4.7,
    reviews: 1234,
    marketSize: '$89.3 billion by 2025',
    competitors: ['IBM Blockchain', 'ConsenSys', 'R3 Corda'],
    technologyStack: ['AI/ML', 'Blockchain', 'Smart Contracts', 'Cryptography', 'Distributed Systems']
  },
  {
    id: 'ai-augmented-reality-platform',
    name: 'AI Augmented Reality Platform',
    tagline: 'Intelligent AR experiences powered by AI and computer vision',
    description: 'Advanced augmented reality platform that leverages artificial intelligence to create intelligent, contextual AR experiences. Provides computer vision, object recognition, and personalized AR content for various applications.',
    category: 'AR & Computer Vision',
    price: '$28,000/month',
    features: [
      'AI-powered computer vision and object recognition',
      'Real-time AR content generation and optimization',
      'Personalized AR experiences and recommendations',
      'Advanced spatial mapping and tracking',
      'Multi-platform AR development and deployment',
      'Integration with business applications',
      'Real-time analytics and performance monitoring',
      'Scalable AR infrastructure and management'
    ],
    benefits: [
      'Enhanced AR user experience and engagement',
      'Personalized and contextual AR content',
      'Improved AR performance and reliability',
      'Better business process integration',
      'Reduced AR development complexity',
      'Enhanced training and simulation capabilities',
      'Improved customer engagement',
      'Competitive AR advantage'
    ],
    link: 'https://ziontechgroup.com/ai-augmented-reality-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 189 training organizations, 123 retail companies, and 89 healthcare facilities',
    launchDate: 'Q1 2025',
    customers: '401 organizations implementing AR solutions',
    rating: 4.8,
    reviews: 1567,
    marketSize: '$156.8 billion by 2025',
    competitors: ['Microsoft HoloLens', 'Magic Leap', 'Vuzix'],
    technologyStack: ['AI/ML', 'Computer Vision', 'AR/VR', '3D Graphics', 'Mobile Development']
  },
  {
    id: 'ai-robotics-automation-platform',
    name: 'AI Robotics Automation Platform',
    tagline: 'Intelligent robotics automation powered by AI and machine learning',
    description: 'Advanced robotics platform that combines artificial intelligence with robotics to create intelligent, autonomous robotic systems. Provides automated task execution, learning capabilities, and human-robot collaboration for various industries.',
    category: 'Robotics & Automation',
    price: '$45,000/month',
    features: [
      'AI-powered robotic task planning and execution',
      'Machine learning for continuous improvement',
      'Human-robot collaboration and safety systems',
      'Advanced sensor integration and processing',
      'Scalable robotics infrastructure management',
      'Integration with manufacturing and logistics systems',
      'Real-time performance monitoring and optimization',
      'Multi-robot coordination and swarm intelligence'
    ],
    benefits: [
      'Enhanced robotic performance and efficiency',
      'Improved safety and human-robot collaboration',
      'Continuous learning and optimization',
      'Better task execution and accuracy',
      'Reduced operational costs and complexity',
      'Enhanced productivity and quality',
      'Improved workplace safety',
      'Competitive automation advantage'
    ],
    link: 'https://ziontechgroup.com/ai-robotics-automation-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: 'Currently deployed in 234 manufacturing plants, 156 logistics centers, and 89 healthcare facilities',
    launchDate: 'Q2 2025',
    customers: '479 organizations implementing robotic automation',
    rating: 4.9,
    reviews: 2134,
    marketSize: '$345.6 billion by 2025',
    competitors: ['ABB Robotics', 'FANUC', 'KUKA'],
    technologyStack: ['AI/ML', 'Robotics', 'Computer Vision', 'Control Systems', 'Industrial Automation']
  }
];

