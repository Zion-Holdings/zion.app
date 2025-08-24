export interface SpecializedITService {
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
}

export const specializedITServices: SpecializedITService[] = [
  // Cloud Infrastructure & DevOps Services
  {
    id: 'cloud-native-architecture-platform',
    name: 'Cloud-Native Architecture Platform',
    tagline: 'Build scalable cloud-native applications with enterprise-grade infrastructure',
    price: '$1,299',
    period: '/month',
    description: 'Comprehensive cloud-native architecture platform that enables businesses to build, deploy, and manage scalable applications using modern cloud technologies. Includes infrastructure as code, container orchestration, and automated DevOps pipelines.',
    features: [
      'Infrastructure as Code (IaC)',
      'Container orchestration with Kubernetes',
      'Microservices architecture design',
      'Automated CI/CD pipelines',
      'Multi-cloud deployment support',
      'Auto-scaling and load balancing',
      'Monitoring and observability',
      'Security and compliance tools',
      'Cost optimization analytics',
      '24/7 infrastructure support'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-native-architecture',
    marketPosition: 'Leading cloud-native platform with 99.9% uptime guarantee',
    targetAudience: 'Enterprise companies, startups, software development teams, DevOps engineers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cloud Infrastructure & DevOps',
    realService: true,
    technology: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Google Cloud', 'Microsoft Azure', 'DevOps Automation'],
    integrations: ['GitHub', 'GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions', 'Slack', 'Jira', 'Confluence'],
    useCases: ['Application modernization', 'Microservices deployment', 'DevOps automation', 'Cloud migration', 'Scalable infrastructure'],
    roi: '300% improvement in deployment speed',
    competitors: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Heroku'],
    marketSize: '$178.2B cloud computing market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Blockchain & Web3 Development Services
  {
    id: 'blockchain-development-platform',
    name: 'Blockchain Development Platform',
    tagline: 'Build and deploy enterprise blockchain solutions with advanced development tools',
    price: '$899',
    period: '/month',
    description: 'Professional blockchain development platform that enables businesses to create, deploy, and manage blockchain applications. Supports multiple blockchain protocols, smart contract development, and enterprise-grade security.',
    features: [
      'Multi-blockchain protocol support',
      'Smart contract development tools',
      'DeFi application templates',
      'NFT marketplace solutions',
      'Blockchain analytics dashboard',
      'Security auditing tools',
      'API integration services',
      'Wallet integration',
      'Compliance and regulatory tools',
      'Developer documentation and support'
    ],
    popular: false,
    icon: '⛓️',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-development',
    marketPosition: 'Leading blockchain platform with enterprise-grade security',
    targetAudience: 'Financial institutions, fintech companies, enterprises, blockchain developers',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Ethereum', 'Polygon', 'Solana', 'Hyperledger', 'Smart Contracts', 'Web3.js', 'Solidity'],
    integrations: ['MetaMask', 'WalletConnect', 'OpenZeppelin', 'Hardhat', 'Truffle', 'Remix', 'IPFS'],
    useCases: ['DeFi applications', 'NFT marketplaces', 'Supply chain tracking', 'Digital identity', 'Smart contracts'],
    roi: '200% increase in blockchain development efficiency',
    competitors: ['ConsenSys', 'Alchemy', 'Infura', 'QuickNode', 'Moralis'],
    marketSize: '$19.9B blockchain market',
    growthRate: '87% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Internet of Things (IoT) Platform
  {
    id: 'iot-enterprise-platform',
    name: 'IoT Enterprise Platform',
    tagline: 'Connect, monitor, and manage IoT devices at enterprise scale',
    price: '$799',
    period: '/month',
    description: 'Comprehensive IoT platform that enables businesses to connect, monitor, and manage IoT devices at enterprise scale. Includes device management, data analytics, security, and integration capabilities.',
    features: [
      'IoT device management',
      'Real-time data collection',
      'Edge computing capabilities',
      'Advanced analytics dashboard',
      'Security and encryption',
      'API integration services',
      'Custom dashboard creation',
      'Alert and notification system',
      'Device firmware updates',
      'Scalable infrastructure'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/iot-enterprise-platform',
    marketPosition: 'Leading IoT platform with 99.5% device connectivity reliability',
    targetAudience: 'Manufacturing companies, smart cities, healthcare facilities, logistics providers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Internet of Things (IoT)',
    realService: true,
    technology: ['IoT Protocols', 'Edge Computing', 'Real-time Analytics', 'Device Management', 'Cloud Computing'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP', 'HTTP/HTTPS', 'REST APIs'],
    useCases: ['Smart manufacturing', 'Asset tracking', 'Environmental monitoring', 'Predictive maintenance', 'Smart buildings'],
    roi: '250% improvement in operational efficiency',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'ThingWorx', 'PTC'],
    marketSize: '$384.7B IoT market',
    growthRate: '32% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Data Engineering & Big Data Platform
  {
    id: 'big-data-engineering-platform',
    name: 'Big Data Engineering Platform',
    tagline: 'Process, analyze, and derive insights from massive datasets',
    price: '$1,199',
    period: '/month',
    description: 'Advanced big data engineering platform that enables businesses to process, analyze, and derive insights from massive datasets. Includes data pipelines, real-time processing, and advanced analytics capabilities.',
    features: [
      'Data pipeline automation',
      'Real-time data processing',
      'Big data storage solutions',
      'Advanced analytics tools',
      'Machine learning integration',
      'Data quality management',
      'ETL/ELT processes',
      'Data governance tools',
      'Performance optimization',
      'Scalable architecture'
    ],
    popular: true,
    icon: '📊',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/big-data-engineering',
    marketPosition: 'Leading big data platform with 10x faster processing speed',
    targetAudience: 'Data engineers, data scientists, enterprise companies, analytics teams',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Data Engineering & Big Data',
    realService: true,
    technology: ['Apache Spark', 'Apache Kafka', 'Apache Hadoop', 'Apache Airflow', 'Python', 'Scala', 'Java'],
    integrations: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Snowflake', 'Databricks', 'Tableau', 'Power BI'],
    useCases: ['Data warehousing', 'Real-time analytics', 'Machine learning', 'Business intelligence', 'Data migration'],
    roi: '400% improvement in data processing efficiency',
    competitors: ['Databricks', 'Snowflake', 'AWS EMR', 'Google Cloud Dataproc', 'Azure HDInsight'],
    marketSize: '$103.7B big data market',
    growthRate: '35% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // API Management & Integration Platform
  {
    id: 'api-management-platform',
    name: 'API Management & Integration Platform',
    tagline: 'Design, deploy, and manage APIs with enterprise-grade security and monitoring',
    price: '$649',
    period: '/month',
    description: 'Comprehensive API management platform that enables businesses to design, deploy, and manage APIs with enterprise-grade security, monitoring, and analytics. Perfect for digital transformation initiatives.',
    features: [
      'API design and documentation',
      'API gateway and routing',
      'Security and authentication',
      'Rate limiting and throttling',
      'API analytics and monitoring',
      'Developer portal',
      'API versioning',
      'Integration templates',
      'Performance optimization',
      '24/7 support and monitoring'
    ],
    popular: false,
    icon: '🔌',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/api-management',
    marketPosition: 'Leading API platform with 99.9% uptime and enterprise security',
    targetAudience: 'Software companies, enterprises, digital transformation teams, API developers',
    trialDays: 21,
    setupTime: '1 week',
    category: 'API Management & Integration',
    realService: true,
    technology: ['REST APIs', 'GraphQL', 'OAuth 2.0', 'JWT', 'API Gateway', 'Microservices', 'Cloud Computing'],
    integrations: ['AWS API Gateway', 'Azure API Management', 'Google Cloud Endpoints', 'Kong', 'Tyk', 'Postman'],
    useCases: ['Digital transformation', 'Microservices architecture', 'Third-party integrations', 'Mobile app backends', 'B2B partnerships'],
    roi: '200% improvement in API development speed',
    competitors: ['AWS API Gateway', 'Azure API Management', 'Google Cloud Endpoints', 'Kong', 'Tyk'],
    marketSize: '$8.2B API management market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Mobile App Development Platform
  {
    id: 'mobile-app-development-platform',
    name: 'Mobile App Development Platform',
    tagline: 'Build, deploy, and manage cross-platform mobile applications',
    price: '$749',
    period: '/month',
    description: 'Comprehensive mobile app development platform that enables businesses to build, deploy, and manage cross-platform mobile applications. Includes development tools, testing frameworks, and deployment automation.',
    features: [
      'Cross-platform development',
      'Native app development',
      'App testing and debugging',
      'Performance monitoring',
      'Push notification system',
      'Analytics and insights',
      'App store deployment',
      'Version management',
      'Security and compliance',
      'Developer support and documentation'
    ],
    popular: false,
    icon: '📱',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/mobile-app-development',
    marketPosition: 'Leading mobile platform with 50% faster development time',
    targetAudience: 'Mobile app developers, startups, enterprises, digital agencies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Mobile Development',
    realService: true,
    technology: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic', 'Mobile DevOps'],
    integrations: ['Firebase', 'AWS Mobile', 'Azure Mobile', 'Google Play Console', 'App Store Connect', 'TestFlight'],
    useCases: ['Cross-platform apps', 'Native iOS/Android apps', 'Enterprise mobile solutions', 'E-commerce apps', 'Social media apps'],
    roi: '50% reduction in development time',
    competitors: ['Firebase', 'AWS Mobile', 'Azure Mobile', 'AppGyver', 'OutSystems'],
    marketSize: '$189.0B mobile app market',
    growthRate: '25% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Cybersecurity & Threat Intelligence Platform
  {
    id: 'cybersecurity-threat-intelligence',
    name: 'Cybersecurity Threat Intelligence Platform',
    tagline: 'Advanced threat detection and intelligence with real-time monitoring',
    price: '$1,499',
    period: '/month',
    description: 'Comprehensive cybersecurity platform that provides advanced threat detection, intelligence gathering, and real-time monitoring. Includes threat hunting, incident response, and security analytics.',
    features: [
      'Advanced threat detection',
      'Threat intelligence feeds',
      'Real-time monitoring',
      'Incident response automation',
      'Security analytics dashboard',
      'Vulnerability assessment',
      'Penetration testing tools',
      'Compliance reporting',
      '24/7 security operations',
      'Custom security policies'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/cybersecurity-threat-intelligence',
    marketPosition: 'Leading cybersecurity platform with 99.9% threat detection rate',
    targetAudience: 'Enterprise companies, financial institutions, healthcare organizations, government agencies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity & Threat Intelligence',
    realService: true,
    technology: ['Machine Learning', 'AI', 'Threat Intelligence', 'Security Analytics', 'Incident Response', 'SIEM'],
    integrations: ['Firewalls', 'EDR solutions', 'SIEM systems', 'Vulnerability scanners', 'Security tools', 'Cloud platforms'],
    useCases: ['Threat detection', 'Incident response', 'Security monitoring', 'Compliance management', 'Risk assessment'],
    roi: '80% reduction in security incident response time',
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace', 'FireEye', 'Palo Alto Networks'],
    marketSize: '$45.2B cybersecurity market',
    growthRate: '38% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Digital Transformation & Legacy Modernization
  {
    id: 'digital-transformation-platform',
    name: 'Digital Transformation Platform',
    tagline: 'Modernize legacy systems and accelerate digital transformation initiatives',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive digital transformation platform that helps businesses modernize legacy systems, implement new technologies, and accelerate digital initiatives. Includes consulting, implementation, and ongoing support.',
    features: [
      'Legacy system assessment',
      'Modernization strategy',
      'Cloud migration services',
      'API development and integration',
      'Data migration tools',
      'Change management support',
      'Training and documentation',
      'Performance optimization',
      'Ongoing support and maintenance',
      'ROI tracking and reporting'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/digital-transformation',
    marketPosition: 'Leading digital transformation platform with proven success record',
    targetAudience: 'Enterprise companies, government agencies, healthcare organizations, financial institutions',
    trialDays: 30,
    setupTime: '4 weeks',
    category: 'Digital Transformation',
    realService: true,
    technology: ['Cloud Computing', 'Microservices', 'API Development', 'Data Migration', 'DevOps', 'Agile Methodologies'],
    integrations: ['Legacy systems', 'Cloud platforms', 'Modern applications', 'Data warehouses', 'Analytics tools'],
    useCases: ['Legacy modernization', 'Cloud migration', 'Digital transformation', 'Process automation', 'Technology adoption'],
    roi: '300% improvement in operational efficiency',
    competitors: ['Accenture', 'Deloitte', 'IBM', 'Capgemini', 'Infosys'],
    marketSize: '$665.0B digital transformation market',
    growthRate: '23% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Edge Computing & 5G Solutions
  {
    id: 'edge-computing-5g-platform',
    name: 'Edge Computing & 5G Solutions Platform',
    tagline: 'Leverage edge computing and 5G for ultra-low latency applications',
    price: '$1,099',
    period: '/month',
    description: 'Advanced edge computing platform that leverages 5G technology to deliver ultra-low latency applications and services. Perfect for IoT, autonomous vehicles, and real-time applications.',
    features: [
      'Edge computing infrastructure',
      '5G network optimization',
      'Ultra-low latency processing',
      'Real-time data analytics',
      'Edge AI capabilities',
      'Network slicing',
      'Quality of Service (QoS)',
      'Security and encryption',
      'Scalable edge nodes',
      'Performance monitoring'
    ],
    popular: false,
    icon: '📡',
    color: 'from-green-500 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/edge-computing-5g',
    marketPosition: 'Leading edge computing platform with sub-10ms latency',
    targetAudience: 'Telecommunications companies, IoT providers, autonomous vehicle companies, real-time application developers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Edge Computing & 5G',
    realService: true,
    technology: ['Edge Computing', '5G Networks', 'Network Slicing', 'Edge AI', 'Real-time Processing', 'IoT'],
    integrations: ['5G networks', 'IoT devices', 'Cloud platforms', 'AI/ML models', 'Real-time applications'],
    useCases: ['Autonomous vehicles', 'Smart cities', 'Industrial IoT', 'Real-time gaming', 'Telemedicine'],
    roi: '200% improvement in application performance',
    competitors: ['AWS Edge', 'Azure Edge', 'Google Cloud Edge', 'Cloudflare', 'Fastly'],
    marketSize: '$67.2B edge computing market',
    growthRate: '37% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  // Quantum Computing & Advanced Computing
  {
    id: 'quantum-computing-platform',
    name: 'Quantum Computing & Advanced Computing Platform',
    tagline: 'Access quantum computing power and advanced computing solutions',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary quantum computing platform that provides access to quantum computing resources and advanced computing solutions. Perfect for research institutions, pharmaceutical companies, and financial institutions.',
    features: [
      'Quantum computing access',
      'Quantum algorithm library',
      'Advanced computing resources',
      'Research collaboration tools',
      'Performance analytics',
      'Custom algorithm development',
      'API access',
      'Documentation and training',
      'Research support',
      'Academic partnerships'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-computing',
    marketPosition: 'Leading quantum computing platform with 1000x speed improvement',
    targetAudience: 'Research institutions, pharmaceutical companies, financial institutions, AI researchers',
    trialDays: 30,
    setupTime: '4 weeks',
    category: 'Quantum Computing & Advanced Computing',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Algorithms', 'AI Optimization', 'Quantum Machine Learning', 'Advanced Computing'],
    integrations: ['IBM Quantum', 'Google Quantum AI', 'AWS Braket', 'Azure Quantum', 'Custom APIs'],
    useCases: ['Drug discovery', 'Financial modeling', 'Climate prediction', 'AI research', 'Complex optimization'],
    roi: '1000x speed improvement for complex problems',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'D-Wave Systems', 'Rigetti'],
    marketSize: '$1.5B quantum computing market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

// Helper functions
export const getSpecializedServicesByCategory = (category: string) => {
  return specializedITServices.filter(service => service.category === category);
};

export const getSpecializedServicesByPriceRange = (min: number, max: number) => {
  return specializedITServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= min && (max === Infinity || price <= max);
  });
};

export const getSpecializedPopularServices = () => {
  return specializedITServices.filter(service => service.popular);
};

export const specializedServiceCategories = [
  'Cloud Infrastructure & DevOps',
  'Blockchain & Web3',
  'Internet of Things (IoT)',
  'Data Engineering & Big Data',
  'API Management & Integration',
  'Mobile Development',
  'Cybersecurity & Threat Intelligence',
  'Digital Transformation',
  'Edge Computing & 5G',
  'Quantum Computing & Advanced Computing'
];