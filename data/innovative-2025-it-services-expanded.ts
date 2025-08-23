import { ServiceVariant } from '../types/service-variants';

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

export const innovativeITServices: InnovativeITService[] = [
  // Zero-Trust Security Framework
  {
    id: 'zero-trust-security-framework',
    name: 'Zero-Trust Security Framework',
    tagline: 'Implement comprehensive zero-trust security architecture for your organization',
    price: '$2,499',
    period: '/month',
    description: 'Complete zero-trust security implementation that provides continuous verification, least-privilege access, and comprehensive threat detection across all systems and users.',
    features: [
      'Identity verification and authentication',
      'Continuous access monitoring',
      'Least-privilege access control',
      'Network segmentation',
      'Threat detection and response',
      'Compliance reporting',
      'Multi-factor authentication',
      'Device trust verification',
      'API security controls',
      'Security analytics dashboard'
    ],
    popular: true,
    icon: '🔒🛡️',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/zero-trust-security-framework',
    marketPosition: 'Competitive with Palo Alto Networks ($50,000+ setup), Cisco ($25,000+ setup), and Microsoft ($15,000+ setup). Our advantage: Faster implementation, better pricing, and comprehensive coverage.',
    targetAudience: 'Enterprise organizations, Financial institutions, Healthcare providers, Government agencies, Technology companies',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Kubernetes, Docker, Istio, OAuth 2.0, SAML, LDAP, SIEM, IDS/IPS, AWS, Azure'],
    integrations: ['Active Directory, Okta, Duo, CrowdStrike, Splunk, ELK Stack, Jira'],
    useCases: ['Enterprise security, Compliance, Threat prevention, Access control'],
    roi: 'Average customer reduces security incidents by 80% and achieves 100% compliance.',
    competitors: ['Palo Alto Networks, Cisco, Microsoft, CrowdStrike, Okta'],
    marketSize: '$182.3B cybersecurity market',
    growthRate: '13.8% annual growth',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete zero-trust security framework with identity verification, continuous monitoring, and comprehensive threat detection.',
    launchDate: '2025-01-10',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },

  // Multi-Cloud Infrastructure Orchestration
  {
    id: 'multi-cloud-infrastructure-orchestration',
    name: 'Multi-Cloud Infrastructure Orchestration',
    tagline: 'Seamlessly manage and orchestrate resources across multiple cloud providers',
    price: '$1,899',
    period: '/month',
    description: 'Advanced multi-cloud management platform that provides unified orchestration, cost optimization, and seamless deployment across AWS, Azure, Google Cloud, and private clouds.',
    features: [
      'Unified cloud management dashboard',
      'Automated resource provisioning',
      'Cost optimization and monitoring',
      'Cross-cloud load balancing',
      'Disaster recovery automation',
      'Compliance and governance',
      'Performance monitoring',
      'Security policy enforcement',
      'API management',
      'Multi-cloud networking'
    ],
    popular: true,
    icon: '☁️🌐',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/multi-cloud-infrastructure-orchestration',
    marketPosition: 'Competitive with HashiCorp ($0.50/hour), Terraform Cloud ($20/month), and CloudBolt ($3,000/month). Our advantage: Comprehensive orchestration, better cost management, and unified monitoring.',
    targetAudience: 'DevOps teams, Cloud architects, Enterprise IT, Managed service providers, Technology consultancies',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Cloud Infrastructure',
    realService: true,
    technology: ['Kubernetes, Terraform, Ansible, Docker, AWS SDK, Azure SDK, GCP SDK, Python, Go'],
    integrations: ['AWS, Azure, Google Cloud, VMware, OpenStack, Kubernetes, Docker Swarm'],
    useCases: ['Multi-cloud management, Infrastructure automation, Cost optimization, Disaster recovery'],
    roi: 'Average customer reduces cloud costs by 35% and improves deployment speed by 200%.',
    competitors: ['HashiCorp, Terraform Cloud, CloudBolt, RightScale, Scalr'],
    marketSize: '$371.4B cloud computing market',
    growthRate: '17.5% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete multi-cloud orchestration platform with unified management, cost optimization, and automated provisioning.',
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.8,
    reviews: 34
  },

  // AI-Powered DevOps Automation
  {
    id: 'ai-powered-devops-automation',
    name: 'AI-Powered DevOps Automation',
    tagline: 'Intelligent DevOps automation with AI-driven optimization and monitoring',
    price: '$899',
    period: '/month',
    description: 'Advanced DevOps platform that uses AI to automate deployment pipelines, optimize performance, predict failures, and continuously improve your development processes.',
    features: [
      'AI-powered CI/CD optimization',
      'Automated testing and deployment',
      'Performance monitoring and alerting',
      'Failure prediction and prevention',
      'Code quality analysis',
      'Infrastructure as code automation',
      'Security scanning integration',
      'Real-time collaboration tools',
      'Analytics and reporting',
      'Mobile app access'
    ],
    popular: true,
    icon: '🤖⚡',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/ai-powered-devops-automation',
    marketPosition: 'Competitive with GitLab ($19/month), Jenkins (free), and CircleCI ($15/month). Our advantage: AI intelligence, better automation, and predictive analytics.',
    targetAudience: 'DevOps engineers, Development teams, IT operations, Technology companies, Startups',
    trialDays: 30,
    setupTime: '1 week',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, Kubernetes, Docker, Jenkins, GitLab CI'],
    integrations: ['GitHub, GitLab, Bitbucket, Jira, Slack, Microsoft Teams, AWS, Azure'],
    useCases: ['CI/CD automation, Performance optimization, Quality assurance, Team collaboration'],
    roi: 'Average customer reduces deployment time by 70% and improves code quality by 40%.',
    competitors: ['GitLab, Jenkins, CircleCI, Travis CI, GitHub Actions'],
    marketSize: '$8.2B DevOps market',
    growthRate: '18.9% annual growth',
    variant: 'devops-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete AI-powered DevOps platform with intelligent automation, performance optimization, and comprehensive monitoring.',
    launchDate: '2025-01-20',
    customers: 89,
    rating: 4.7,
    reviews: 67
  },

  // Edge Computing Infrastructure
  {
    id: 'edge-computing-infrastructure',
    name: 'Edge Computing Infrastructure',
    tagline: 'Deploy and manage edge computing infrastructure for low-latency applications',
    price: '$1,299',
    period: '/month',
    description: 'Comprehensive edge computing platform that enables you to deploy applications closer to users, reduce latency, and improve performance for distributed systems.',
    features: [
      'Edge node deployment and management',
      'Load balancing and routing',
      'Content delivery optimization',
      'Real-time data processing',
      'IoT device integration',
      'Security and authentication',
      'Monitoring and analytics',
      'Automated scaling',
      'Multi-region deployment',
      'API gateway management'
    ],
    popular: true,
    icon: '🌍⚡',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/edge-computing-infrastructure',
    marketPosition: 'Competitive with Cloudflare ($20/month), AWS CloudFront ($0.085/GB), and Fastly ($0.12/GB). Our advantage: Comprehensive edge computing, better performance, and unified management.',
    targetAudience: 'IoT companies, Gaming companies, Streaming services, E-commerce businesses, Financial services',
    trialDays: 14,
    setupTime: '2 weeks',
    category: 'Edge Computing',
    realService: true,
    technology: ['Kubernetes, Docker, Istio, Envoy, Redis, PostgreSQL, AWS, Azure, GCP'],
    integrations: ['AWS, Azure, Google Cloud, IoT platforms, CDN services, Monitoring tools'],
    useCases: ['Content delivery, IoT applications, Real-time processing, Low-latency gaming'],
    roi: 'Average customer reduces latency by 60% and improves user experience by 80%.',
    competitors: ['Cloudflare, AWS CloudFront, Fastly, Akamai, Limelight'],
    marketSize: '$15.7B edge computing market',
    growthRate: '37.4% annual growth',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete edge computing platform with distributed deployment, real-time processing, and comprehensive management tools.',
    launchDate: '2025-01-25',
    customers: 34,
    rating: 4.6,
    reviews: 28
  },

  // Blockchain Infrastructure as a Service
  {
    id: 'blockchain-infrastructure-as-a-service',
    name: 'Blockchain Infrastructure as a Service',
    tagline: 'Deploy and manage blockchain networks with enterprise-grade infrastructure',
    price: '$1,599',
    period: '/month',
    description: 'Enterprise blockchain platform that provides secure, scalable infrastructure for deploying and managing blockchain networks, smart contracts, and decentralized applications.',
    features: [
      'Multi-blockchain support',
      'Smart contract deployment',
      'Node management and monitoring',
      'Security and compliance',
      'API access and integration',
      'Performance analytics',
      'Automated scaling',
      'Backup and recovery',
      'Developer tools and SDKs',
      'Enterprise support'
    ],
    popular: true,
    icon: '⛓️🔗',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure-as-a-service',
    marketPosition: 'Competitive with AWS Managed Blockchain ($0.30/hour), Azure Blockchain Service ($0.50/hour), and IBM Blockchain ($0.29/hour). Our advantage: Multi-blockchain support, better pricing, and comprehensive management.',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Technology startups',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Ethereum, Hyperledger Fabric, Solana, Polkadot, Go, Rust, Node.js, Python'],
    integrations: ['AWS, Azure, Google Cloud, Oracle, SAP, Salesforce, Custom applications'],
    useCases: ['Supply chain tracking, Financial transactions, Identity management, Asset tokenization'],
    roi: 'Average customer reduces transaction costs by 50% and improves transparency by 100%.',
    competitors: ['AWS Managed Blockchain, Azure Blockchain Service, IBM Blockchain, Alchemy, Infura'],
    marketSize: '$19.9B blockchain market',
    growthRate: '87.7% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete blockchain infrastructure platform with multi-chain support, smart contract management, and enterprise-grade security.',
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.5,
    reviews: 22
  },

  // Quantum Computing Simulation Platform
  {
    id: 'quantum-computing-simulation-platform',
    name: 'Quantum Computing Simulation Platform',
    tagline: 'Simulate quantum algorithms and develop quantum applications',
    price: '$2,999',
    period: '/month',
    description: 'Advanced quantum computing simulation platform that enables researchers and developers to design, test, and optimize quantum algorithms before running them on actual quantum hardware.',
    features: [
      'Quantum circuit design and simulation',
      'Multiple quantum computing models',
      'Algorithm optimization tools',
      'Performance benchmarking',
      'Educational resources and tutorials',
      'API access for developers',
      'Collaboration tools',
      'Result visualization',
      'Export and sharing capabilities',
      'Enterprise support'
    ],
    popular: true,
    icon: '⚛️🧮',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/quantum-computing-simulation-platform',
    marketPosition: 'Competitive with IBM Q Experience (free), Google Cirq (free), and Microsoft QDK (free). Our advantage: Better simulation capabilities, comprehensive tools, and enterprise features.',
    targetAudience: 'Research institutions, Technology companies, Financial services, Pharmaceutical companies, Educational institutions',
    trialDays: 60,
    setupTime: '1 week',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Q#, TensorFlow, PyTorch, React, Node.js'],
    integrations: ['IBM Quantum, Google Quantum, Microsoft Quantum, AWS Braket, Custom quantum hardware'],
    useCases: ['Algorithm development, Research and development, Education and training, Financial modeling'],
    roi: 'Average customer accelerates quantum research by 300% and reduces development costs by 60%.',
    competitors: ['IBM Q Experience, Google Cirq, Microsoft QDK, AWS Braket, Rigetti'],
    marketSize: '$1.9B quantum computing market',
    growthRate: '56.0% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete quantum computing simulation platform with advanced algorithms, comprehensive tools, and enterprise-grade features.',
    launchDate: '2025-02-05',
    customers: 15,
    rating: 4.9,
    reviews: 12
  },

  // IoT Platform & Device Management
  {
    id: 'iot-platform-device-management',
    name: 'IoT Platform & Device Management',
    tagline: 'Comprehensive IoT platform for device management and data analytics',
    price: '$799',
    period: '/month',
    description: 'Enterprise IoT platform that provides device management, data collection, real-time analytics, and automation for connected devices and smart systems.',
    features: [
      'Device provisioning and management',
      'Real-time data collection',
      'Data analytics and visualization',
      'Automated workflows',
      'Security and authentication',
      'Scalable infrastructure',
      'API access and integration',
      'Mobile app management',
      'Over-the-air updates',
      'Compliance and governance'
    ],
    popular: true,
    icon: '📱🌐',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/services/iot-platform-device-management',
    marketPosition: 'Competitive with AWS IoT ($0.08/million messages), Azure IoT Hub ($0.50/month), and Google Cloud IoT ($0.0045/GB). Our advantage: Better device management, comprehensive analytics, and competitive pricing.',
    targetAudience: 'Manufacturing companies, Smart city projects, Healthcare providers, Energy companies, Transportation companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Internet of Things',
    realService: true,
    technology: ['Kubernetes, Docker, MQTT, CoAP, PostgreSQL, InfluxDB, Redis, AWS, Azure'],
    integrations: ['AWS IoT, Azure IoT Hub, Google Cloud IoT, Custom hardware, Enterprise systems'],
    useCases: ['Smart manufacturing, Asset monitoring, Predictive maintenance, Environmental monitoring'],
    roi: 'Average customer reduces operational costs by 25% and improves efficiency by 40%.',
    competitors: ['AWS IoT, Azure IoT Hub, Google Cloud IoT, ThingWorx, PTC'],
    marketSize: '$384.7B IoT market',
    growthRate: '13.4% annual growth',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete IoT platform with device management, data analytics, and automated workflows.',
    launchDate: '2025-02-10',
    customers: 67,
    rating: 4.7,
    reviews: 51
  },

  // AI Model Training & Deployment Platform
  {
    id: 'ai-model-training-deployment-platform',
    name: 'AI Model Training & Deployment Platform',
    tagline: 'End-to-end AI model development, training, and deployment platform',
    price: '$1,199',
    period: '/month',
    description: 'Comprehensive AI platform that provides tools for data preparation, model training, deployment, and monitoring, making AI accessible to organizations of all sizes.',
    features: [
      'Data preparation and preprocessing',
      'Model training and optimization',
      'Automated machine learning',
      'Model deployment and serving',
      'Performance monitoring',
      'A/B testing capabilities',
      'Scalable infrastructure',
      'API management',
      'Model versioning',
      'Collaboration tools'
    ],
    popular: true,
    icon: '🧠🚀',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/services/ai-model-training-deployment-platform',
    marketPosition: 'Competitive with AWS SageMaker ($0.10/hour), Azure Machine Learning ($0.50/hour), and Google AI Platform ($0.20/hour). Our advantage: Better automation, comprehensive tools, and competitive pricing.',
    targetAudience: 'Data scientists, AI engineers, Technology companies, Research institutions, Healthcare organizations',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Artificial Intelligence',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, Scikit-learn, Kubernetes, Docker, AWS, Azure'],
    integrations: ['AWS, Azure, Google Cloud, Jupyter, MLflow, Weights & Biases, Custom tools'],
    useCases: ['Predictive analytics, Computer vision, Natural language processing, Recommendation systems'],
    roi: 'Average customer accelerates AI development by 200% and reduces infrastructure costs by 40%.',
    competitors: ['AWS SageMaker, Azure Machine Learning, Google AI Platform, Dataiku, DataRobot'],
    marketSize: '$200.4B AI market',
    growthRate: '37.3% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete AI platform with automated training, deployment, and monitoring capabilities.',
    launchDate: '2025-02-15',
    customers: 89,
    rating: 4.8,
    reviews: 67
  },

  // Cybersecurity Operations Center (SOC)
  {
    id: 'cybersecurity-operations-center',
    name: 'Cybersecurity Operations Center (SOC)',
    tagline: '24/7 cybersecurity monitoring and incident response services',
    price: '$3,999',
    period: '/month',
    description: 'Comprehensive cybersecurity operations center that provides continuous monitoring, threat detection, incident response, and security consulting for enterprise organizations.',
    features: [
      '24/7 security monitoring',
      'Threat detection and analysis',
      'Incident response and remediation',
      'Vulnerability assessment',
      'Security consulting and training',
      'Compliance reporting',
      'Threat intelligence',
      'Security awareness programs',
      'Penetration testing',
      'Emergency response support'
    ],
    popular: true,
    icon: '🛡️🔍',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-300',
    link: 'https://ziontechgroup.com/services/cybersecurity-operations-center',
    marketPosition: 'Competitive with IBM Security ($50,000+ setup), Deloitte ($100,000+ setup), and PwC ($75,000+ setup). Our advantage: Better pricing, comprehensive coverage, and faster response times.',
    targetAudience: 'Large enterprises, Financial institutions, Healthcare providers, Government agencies, Critical infrastructure',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['SIEM, IDS/IPS, EDR, XDR, Threat intelligence platforms, Security orchestration'],
    integrations: ['Splunk, QRadar, LogRhythm, CrowdStrike, Carbon Black, Palo Alto Networks'],
    useCases: ['Threat monitoring, Incident response, Compliance, Security consulting'],
    roi: 'Average customer reduces security incidents by 90% and achieves 100% compliance.',
    competitors: ['IBM Security, Deloitte, PwC, KPMG, EY, Accenture'],
    marketSize: '$182.3B cybersecurity market',
    growthRate: '13.8% annual growth',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Complete cybersecurity operations center with 24/7 monitoring, incident response, and comprehensive security services.',
    launchDate: '2025-02-20',
    customers: 12,
    rating: 4.9,
    reviews: 9
  }
];