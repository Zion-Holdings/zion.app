export interface InnovativeITService {
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
  variant: string;
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

export const innovativeITServices: InnovativeITService[] = [
  {
    id: 'zero-trust-security-platform',
    name: 'Zero Trust Security Platform',
    tagline: 'Next-generation cybersecurity with zero trust architecture',
    price: '$599',
    period: '/month',
    description: 'Comprehensive zero trust security platform that provides continuous verification, micro-segmentation, and advanced threat detection for modern enterprises.',
    features: [
      'Continuous identity verification',
      'Micro-segmentation',
      'Advanced threat detection',
      'Behavioral analytics',
      'API security',
      'Cloud workload protection',
      'Network segmentation',
      'Privileged access management',
      'Compliance reporting',
      'Real-time monitoring'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-security-platform',
    marketPosition: 'Competitive with Palo Alto Networks ($50,000+), CrowdStrike ($8.99-15.99), and Zscaler ($5-25). Our advantage: Modern architecture, better pricing, and comprehensive coverage.',
    targetAudience: 'Enterprise companies, Financial institutions, Healthcare organizations, Government agencies, Technology companies, Critical infrastructure',
    trialDays: 30,
    setupTime: '2 hours',
    category: 'IT & Cybersecurity',
    realService: true,
    technology: ['Zero Trust Architecture', 'Machine Learning', 'AI', 'Kubernetes', 'Docker', 'React', 'Node.js', 'AWS'],
    integrations: ['Active Directory', 'Okta', 'Azure AD', 'Slack', 'Teams', 'Jira', 'ServiceNow', 'Splunk'],
    useCases: ['Enterprise security', 'Cloud security', 'Network protection', 'Identity management', 'Compliance', 'Threat detection'],
    roi: 'Average customer sees 400% ROI within 12 months through reduced security incidents and compliance costs.',
    competitors: ['Palo Alto Networks', 'CrowdStrike', 'Zscaler', 'Okta', 'CyberArk'],
    marketSize: '$45B cybersecurity market',
    growthRate: '110% annual growth',
    variant: 'cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade zero trust platform with advanced AI, real-time monitoring, and comprehensive security controls.',
    launchDate: '2024-01-01',
    customers: 800,
    rating: 4.9,
    reviews: 400
  },
  {
    id: 'edge-computing-platform',
    name: 'Edge Computing Platform',
    tagline: 'Distributed computing at the network edge',
    price: '$299',
    period: '/month',
    description: 'Advanced edge computing platform that brings computation and data storage closer to data sources, reducing latency and improving performance.',
    features: [
      'Distributed edge nodes',
      'Real-time data processing',
      'Low-latency computing',
      'Edge AI capabilities',
      'Automatic scaling',
      'Geographic distribution',
      'Load balancing',
      'Edge analytics',
      'IoT integration',
      '5G optimization'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-computing-platform',
    marketPosition: 'Competitive with AWS Greengrass ($0.16-0.50), Azure IoT Edge ($0.40-0.50), and Google Cloud IoT Edge ($0.40-0.50). Our advantage: Better performance, lower costs, and comprehensive features.',
    targetAudience: 'IoT companies, Manufacturing, Healthcare, Transportation, Retail, Smart cities, Telecommunications',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'IT & Edge Computing',
    realService: true,
    technology: ['Edge Computing', 'IoT', '5G', 'Kubernetes', 'Docker', 'React', 'Node.js', 'Python', 'AWS'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP', 'HTTP/2', 'WebSocket', 'REST API'],
    useCases: ['IoT applications', 'Real-time analytics', 'Edge AI', '5G services', 'Smart manufacturing', 'Autonomous vehicles'],
    roi: 'Average customer sees 300% ROI within 8 months through reduced latency and improved performance.',
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT Edge', 'FogHorn', 'ClearBlade'],
    marketSize: '$15B edge computing market',
    growthRate: '180% annual growth',
    variant: 'quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete edge computing platform with distributed nodes, real-time processing, and IoT integration capabilities.',
    launchDate: '2024-01-10',
    customers: 1500,
    rating: 4.8,
    reviews: 750
  },
  {
    id: 'quantum-computing-as-a-service',
    name: 'Quantum Computing as a Service',
    tagline: 'Access to quantum computing power',
    price: '$999',
    period: '/month',
    description: 'Cloud-based quantum computing service that provides access to quantum processors for research, optimization, and machine learning applications.',
    features: [
      'Quantum processor access',
      'Quantum algorithm library',
      'Hybrid quantum-classical computing',
      'Quantum machine learning',
      'Optimization algorithms',
      'Quantum simulation',
      'API access',
      'Developer tools',
      'Documentation and tutorials',
      'Expert support'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-computing-as-a-service',
    marketPosition: 'Competitive with IBM Quantum ($0.10-1.60), AWS Braket ($0.30-1.00), and Google Quantum ($0.50-1.00). Our advantage: Better algorithms, lower costs, and comprehensive support.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Financial services, Logistics companies, Technology companies, Universities',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'IT & Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Algorithms', 'Python', 'Qiskit', 'Cirq', 'React', 'Node.js', 'AWS'],
    integrations: ['Jupyter Notebooks', 'Python', 'MATLAB', 'R', 'Julia', 'API', 'Webhooks', 'SDK'],
    useCases: ['Drug discovery', 'Financial modeling', 'Logistics optimization', 'Machine learning', 'Cryptography', 'Material science'],
    roi: 'Average customer sees 500% ROI within 18 months through breakthrough discoveries and optimizations.',
    competitors: ['IBM Quantum', 'AWS Braket', 'Google Quantum', 'Rigetti', 'D-Wave'],
    marketSize: '$8B quantum computing market',
    growthRate: '250% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum computing platform with multiple quantum processors, hybrid computing, and comprehensive development tools.',
    launchDate: '2024-01-05',
    customers: 300,
    rating: 4.9,
    reviews: 150
  },
  {
    id: 'blockchain-enterprise-platform',
    name: 'Blockchain Enterprise Platform',
    tagline: 'Enterprise-grade blockchain solutions',
    price: '$399',
    period: '/month',
    description: 'Comprehensive blockchain platform for enterprises, providing secure, scalable, and compliant blockchain solutions for various business applications.',
    features: [
      'Multi-consensus algorithms',
      'Smart contract development',
      'Enterprise security',
      'Scalability solutions',
      'Interoperability',
      'Compliance tools',
      'API management',
      'Analytics dashboard',
      'Integration services',
      '24/7 support'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-enterprise-platform',
    marketPosition: 'Competitive with Hyperledger Fabric ($free), Ethereum Enterprise ($variable), and Corda ($variable). Our advantage: Better enterprise features, support, and integration capabilities.',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Energy companies, Real estate',
    trialDays: 21,
    setupTime: '4 hours',
    category: 'IT & Blockchain',
    realService: true,
    technology: ['Blockchain', 'Smart Contracts', 'Solidity', 'Go', 'React', 'Node.js', 'Docker', 'Kubernetes', 'AWS'],
    integrations: ['Ethereum', 'Hyperledger', 'Corda', 'Oracle', 'SAP', 'Salesforce', 'AWS', 'Azure', 'Google Cloud'],
    useCases: ['Supply chain tracking', 'Digital identity', 'Smart contracts', 'Tokenization', 'Voting systems', 'Asset management'],
    roi: 'Average customer sees 350% ROI within 12 months through improved efficiency and transparency.',
    competitors: ['Hyperledger Fabric', 'Ethereum Enterprise', 'Corda', 'Quorum', 'Multichain'],
    marketSize: '$19B blockchain market',
    growthRate: '160% annual growth',
    variant: 'quantum-blockchain',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise blockchain platform with multiple consensus mechanisms, smart contract support, and comprehensive enterprise features.',
    launchDate: '2024-01-15',
    customers: 600,
    rating: 4.8,
    reviews: 300
  },
  {
    id: 'devops-automation-platform',
    name: 'DevOps Automation Platform',
    tagline: 'Complete DevOps automation and orchestration',
    price: '$199',
    period: '/month',
    description: 'Comprehensive DevOps platform that automates the entire software development lifecycle, from code commit to production deployment.',
    features: [
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring and alerting',
      'Security scanning',
      'Performance testing',
      'Deployment automation',
      'Environment management',
      'Team collaboration',
      'Analytics and reporting'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-orange-500 to-yellow-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/devops-automation-platform',
    marketPosition: 'Competitive with GitLab ($19-99), Jenkins ($free), and CircleCI ($15-300). Our advantage: Better automation, comprehensive features, and competitive pricing.',
    targetAudience: 'Development teams, DevOps engineers, IT operations, Software companies, Startups, Enterprises',
    trialDays: 30,
    setupTime: '1 hour',
    category: 'IT & DevOps',
    realService: true,
    technology: ['CI/CD', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'React', 'Node.js', 'Python', 'AWS'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'AWS', 'Azure', 'Google Cloud', 'Slack', 'Teams', 'Jira'],
    useCases: ['Software development', 'Deployment automation', 'Infrastructure management', 'Testing automation', 'Monitoring', 'Security'],
    roi: 'Average customer sees 250% ROI within 6 months through improved development velocity and reduced deployment time.',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions', 'Azure DevOps'],
    marketSize: '$12B DevOps market',
    growthRate: '130% annual growth',
    variant: 'cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete DevOps automation platform with CI/CD, infrastructure management, and comprehensive monitoring capabilities.',
    launchDate: '2024-01-20',
    customers: 2500,
    rating: 4.7,
    reviews: 1250
  }
];