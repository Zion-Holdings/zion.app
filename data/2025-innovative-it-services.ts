export interface ITService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const innovativeITServices2025: ITService[] = [
  {
    id: 'quantum-cloud-infrastructure',
    name: 'Quantum Cloud Infrastructure',
    tagline: 'Next-generation cloud computing with quantum capabilities',
    description: 'Revolutionary cloud infrastructure platform that combines classical cloud computing with quantum computing capabilities for unprecedented performance and security.',
    category: 'Cloud & Infrastructure',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 days'
    },
    features: [
      'Hybrid classical-quantum computing',
      'Quantum-enhanced security',
      'Advanced encryption',
      'Scalable infrastructure',
      'Real-time optimization',
      'Quantum machine learning',
      'Advanced analytics',
      'Multi-cloud support',
      'API access',
      'Enterprise security'
    ],
    benefits: [
      'Improve computational performance by 1000x',
      'Enhance security with quantum encryption',
      'Reduce infrastructure costs by 40%',
      'Enable previously impossible computations',
      'Future-proof your infrastructure'
    ],
    targetAudience: [
      'Technology companies',
      'Research institutions',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Universities'
    ],
    marketPosition: 'Leading quantum cloud infrastructure platform. Competitive with AWS ($0.10-2.00 per hour), Azure ($0.10-2.50 per hour), and Google Cloud ($0.10-2.00 per hour). Our advantage: Quantum computing integration.',
    competitors: ['AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud'],
    techStack: ['Python, Go, React, Node.js, PostgreSQL, Redis, AWS, Quantum hardware, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Advanced cloud infrastructure with quantum computing capabilities, hybrid processing, and comprehensive management tools. Includes dashboard, API, and extensive customization.',
    roi: 'Organizations typically see 300-600% ROI through improved performance and reduced costs.',
    useCases: [
      'High-performance computing',
      'Cryptography and security',
      'Machine learning',
      'Scientific research',
      'Financial modeling',
      'Drug discovery'
    ],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, Ansible'],
    support: '24/7 support, dedicated infrastructure specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, HIPAA'],
    link: 'https://ziontechgroup.com/quantum-cloud-infrastructure',
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2024-10-15',
    customers: 200,
    rating: 4.8,
    reviews: 120
  },
  {
    id: 'edge-computing-orchestrator',
    name: 'Edge Computing Orchestrator',
    tagline: 'Intelligent edge computing for the modern world',
    description: 'Advanced edge computing platform that intelligently orchestrates distributed computing resources for optimal performance, low latency, and high reliability.',
    category: 'Edge Computing',
    price: {
      monthly: 249,
      yearly: 2490,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1 day'
    },
    features: [
      'Intelligent edge orchestration',
      'Low-latency processing',
      'Distributed computing',
      'Real-time analytics',
      'Edge AI capabilities',
      'Load balancing',
      'Fault tolerance',
      'Security management',
      'Performance monitoring',
      'Scalable architecture'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Improve reliability by 99.9%',
      'Lower bandwidth costs by 60%',
      'Enable real-time applications',
      'Scale globally with ease'
    ],
    targetAudience: [
      'IoT companies',
      'Manufacturing companies',
      'Smart city initiatives',
      'Telecommunications',
      'Automotive companies',
      'Healthcare organizations'
    ],
    marketPosition: 'Leading edge computing orchestration platform. Competitive with AWS IoT Greengrass ($0.16 per device), Azure IoT Edge ($0.40 per device), and Google Cloud IoT Edge ($0.30 per device). Our advantage: Intelligent orchestration.',
    competitors: ['AWS IoT Greengrass, Azure IoT Edge, Google Cloud IoT Edge, EdgeX Foundry'],
    techStack: ['Go, Python, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes, Edge devices'],
    realImplementation: true,
    implementationDetails: 'Advanced edge computing platform with intelligent orchestration, real-time processing, and comprehensive management. Includes dashboard, API, and extensive customization.',
    roi: 'Organizations typically see 200-400% ROI through improved performance and reduced costs.',
    useCases: [
      'IoT applications',
      'Real-time analytics',
      'Edge AI processing',
      'Smart manufacturing',
      'Autonomous vehicles',
      'Smart cities'
    ],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, Kubernetes, Docker, MQTT, CoAP'],
    support: '24/7 support, dedicated edge specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, Industry Standards'],
    link: 'https://ziontechgroup.com/edge-computing-orchestrator',
    icon: '🌐',
    color: 'from-green-500 to-teal-600',
    popular: false,
    launchDate: '2024-11-15',
    customers: 150,
    rating: 4.7,
    reviews: 85
  },
  {
    id: 'zero-trust-security-platform',
    name: 'Zero Trust Security Platform',
    tagline: 'Never trust, always verify security architecture',
    description: 'Comprehensive zero trust security platform that implements the principle of "never trust, always verify" for maximum protection against modern cyber threats.',
    category: 'Cybersecurity',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3 days'
    },
    features: [
      'Identity verification',
      'Device trust scoring',
      'Network segmentation',
      'Continuous monitoring',
      'Threat detection',
      'Access control',
      'Encryption',
      'Audit logging',
      'Compliance tools',
      'Advanced analytics'
    ],
    benefits: [
      'Reduce security incidents by 95%',
      'Improve compliance scores',
      'Protect against insider threats',
      'Enhance data protection',
      'Lower insurance premiums'
    ],
    targetAudience: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Manufacturing companies',
      'Educational institutions'
    ],
    marketPosition: 'Leading zero trust security platform. Competitive with Palo Alto Networks ($50-200 per user), Cisco ($25-150 per user), and Fortinet ($30-180 per user). Our advantage: Comprehensive zero trust implementation.',
    competitors: ['Palo Alto Networks, Cisco, Fortinet, Check Point, Juniper Networks'],
    techStack: ['Python, Go, React, Node.js, PostgreSQL, Redis, AWS, Security frameworks'],
    realImplementation: true,
    implementationDetails: 'Advanced zero trust security platform with comprehensive protection, continuous monitoring, and compliance tools. Includes dashboard, API, and extensive customization.',
    roi: 'Organizations typically see 200-400% ROI through improved security and reduced incidents.',
    useCases: [
      'Network security',
      'Access control',
      'Threat detection',
      'Compliance management',
      'Data protection',
      'Risk assessment'
    ],
    integrations: ['Active Directory, LDAP, SAML, OAuth, SIEM systems, EDR platforms'],
    support: '24/7 support, dedicated security specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/zero-trust-security-platform',
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    popular: true,
    launchDate: '2024-12-01',
    customers: 180,
    rating: 4.9,
    reviews: 95
  },
  {
    id: 'blockchain-enterprise-platform',
    name: 'Blockchain Enterprise Platform',
    tagline: 'Enterprise-grade blockchain solutions',
    description: 'Advanced blockchain platform designed for enterprise use cases with high performance, scalability, and comprehensive governance tools.',
    category: 'Blockchain & Web3',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '2 days'
    },
    features: [
      'High-performance blockchain',
      'Smart contract development',
      'Token management',
      'Governance tools',
      'API access',
      'Analytics dashboard',
      'Security features',
      'Scalability solutions',
      'Integration tools',
      'Compliance features'
    ],
    benefits: [
      'Improve transparency by 100%',
      'Reduce fraud by 90%',
      'Lower transaction costs by 70%',
      'Enable new business models',
      'Enhance trust and security'
    ],
    targetAudience: [
      'Financial institutions',
      'Supply chain companies',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Real estate companies'
    ],
    marketPosition: 'Leading enterprise blockchain platform. Competitive with Hyperledger Fabric (Open source), Ethereum Enterprise ($0-1000 per month), and Corda ($0-500 per month). Our advantage: Enterprise-focused features.',
    competitors: ['Hyperledger Fabric, Ethereum Enterprise, Corda, Quorum, MultiChain'],
    techStack: ['Go, Python, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes, Blockchain protocols'],
    realImplementation: true,
    implementationDetails: 'Advanced blockchain platform with enterprise features, smart contracts, and comprehensive governance. Includes dashboard, API, and extensive customization.',
    roi: 'Organizations typically see 200-500% ROI through improved efficiency and new business models.',
    useCases: [
      'Supply chain tracking',
      'Financial transactions',
      'Identity management',
      'Asset tokenization',
      'Voting systems',
      'Document verification'
    ],
    integrations: ['ERP systems, CRM platforms, Financial systems, IoT platforms, Cloud services'],
    support: '24/7 support, dedicated blockchain specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, Industry Standards'],
    link: 'https://ziontechgroup.com/blockchain-enterprise-platform',
    icon: '⛓️',
    color: 'from-purple-500 to-indigo-600',
    popular: false,
    launchDate: '2025-01-15',
    customers: 120,
    rating: 4.6,
    reviews: 65
  },
  {
    id: 'ai-powered-devops',
    name: 'AI-Powered DevOps Platform',
    tagline: 'Intelligent automation for modern development',
    description: 'Revolutionary DevOps platform that uses AI to automate development processes, predict issues, and optimize performance for faster, more reliable software delivery.',
    category: 'DevOps & Development',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1 day'
    },
    features: [
      'AI-powered automation',
      'Predictive analytics',
      'Intelligent testing',
      'Performance optimization',
      'Issue prediction',
      'Automated deployment',
      'Continuous monitoring',
      'Team collaboration',
      'Advanced reporting',
      'Integration tools'
    ],
    benefits: [
      'Deploy 5x faster',
      'Reduce errors by 80%',
      'Improve team productivity',
      'Lower infrastructure costs',
      'Enhance code quality'
    ],
    targetAudience: [
      'Development teams',
      'DevOps engineers',
      'Technology companies',
      'Startups',
      'Digital agencies',
      'Enterprise IT teams'
    ],
    marketPosition: 'Leading AI-powered DevOps platform. Competitive with GitLab ($19-99), GitHub Actions ($0-44), and Jenkins (Free). Our advantage: AI-powered automation and prediction.',
    competitors: ['GitLab, GitHub Actions, Jenkins, CircleCI, Travis CI, Azure DevOps'],
    techStack: ['Python, Go, React, Node.js, PostgreSQL, Redis, AWS, AI/ML frameworks'],
    realImplementation: true,
    implementationDetails: 'Advanced DevOps platform with AI-powered automation, predictive analytics, and comprehensive monitoring. Includes dashboard, API, and extensive customization.',
    roi: 'Teams typically see 200-400% ROI through improved efficiency and reduced errors.',
    useCases: [
      'Continuous integration',
      'Continuous deployment',
      'Automated testing',
      'Performance monitoring',
      'Issue prediction',
      'Team collaboration'
    ],
    integrations: ['GitHub, GitLab, Bitbucket, AWS, Azure, GCP, Slack, Jira'],
    support: '24/7 support, dedicated DevOps specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR'],
    link: 'https://ziontechgroup.com/ai-powered-devops',
    icon: '🤖',
    color: 'from-orange-500 to-red-600',
    popular: true,
    launchDate: '2025-02-01',
    customers: 250,
    rating: 4.8,
    reviews: 140
  }
];

export const getPopularITServices = () => {
  return innovativeITServices2025.filter(service => service.popular);
};

export const getITServicesByCategory = (category: string) => {
  return innovativeITServices2025.filter(service => service.category === category);
};

export const getITServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return innovativeITServices2025.filter(service => 
    service.price.monthly >= minPrice && service.price.monthly <= maxPrice
  );
};