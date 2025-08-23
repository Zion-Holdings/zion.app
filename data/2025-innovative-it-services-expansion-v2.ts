export interface InnovativeITService {
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
  mobile: string;
  email: string;
  address: string;
}

export const innovativeITServices2025V2: InnovativeITService[] = [
  {
    id: 'quantum-cloud-infrastructure',
    name: 'Quantum Cloud Infrastructure',
    tagline: 'Next-generation cloud infrastructure with quantum computing capabilities',
    description: 'Revolutionary cloud platform that combines traditional cloud services with quantum computing resources, enabling businesses to leverage quantum algorithms for complex computational tasks.',
    category: 'Cloud & Infrastructure',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '6 hours'
    },
    features: [
      'Quantum computing resources',
      'Hybrid cloud architecture',
      'AI-powered resource optimization',
      'Quantum-resistant security',
      'Auto-scaling infrastructure',
      'Multi-region deployment',
      'Advanced monitoring',
      'Disaster recovery',
      'API management',
      'Developer tools'
    ],
    benefits: [
      'Access quantum computing power',
      'Reduce infrastructure costs by 30%',
      'Improve computational performance',
      'Enhanced security with quantum resistance',
      'Scalable and flexible infrastructure'
    ],
    targetAudience: [
      'Technology companies',
      'Research institutions',
      'Financial services',
      'Healthcare organizations',
      'Government agencies',
      'Startups and enterprises'
    ],
    marketPosition: 'Competitive with AWS ($0.50-5.00 per hour), Azure ($0.50-5.00 per hour), and Google Cloud ($0.50-5.00 per hour). Our advantage: Quantum computing integration, competitive pricing, and advanced features.',
    competitors: ['AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Quantum computing frameworks'],
    realImplementation: true,
    implementationDetails: 'Advanced cloud platform with quantum computing integration, hybrid architecture, and comprehensive infrastructure management. Includes mobile apps and extensive API.',
    roi: 'Organizations typically see 200-400% ROI within 18 months through improved performance and reduced costs.',
    useCases: [
      'Complex computational tasks',
      'Machine learning training',
      'Financial modeling',
      'Scientific research',
      'Data analytics',
      'Quantum algorithm development'
    ],
    integrations: ['Kubernetes, Docker, Terraform, Ansible, CI/CD tools, Monitoring systems'],
    support: '24/7 support, dedicated cloud specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, GDPR, FedRAMP'],
    link: 'https://ziontechgroup.com/quantum-cloud-infrastructure',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    launchDate: '2024-06-15',
    customers: 850,
    rating: 4.8,
    reviews: 480,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'ai-powered-devops-automation',
    name: 'AI-Powered DevOps Automation',
    tagline: 'Intelligent DevOps automation with AI-driven insights',
    description: 'Advanced DevOps platform that uses artificial intelligence to automate deployment processes, predict failures, and optimize infrastructure performance in real-time.',
    category: 'DevOps & Automation',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: 'USD',
      trialDays: 21,
      setupTime: '4 hours'
    },
    features: [
      'AI-powered deployment automation',
      'Predictive failure detection',
      'Intelligent resource optimization',
      'Automated testing and validation',
      'Performance monitoring',
      'Security scanning',
      'Compliance automation',
      'Team collaboration tools',
      'Advanced analytics',
      'Mobile management apps'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Predict and prevent failures',
      'Optimize resource utilization',
      'Improve team productivity',
      'Enhance security posture'
    ],
    targetAudience: [
      'Development teams',
      'DevOps engineers',
      'System administrators',
      'Technology companies',
      'Digital agencies',
      'Enterprise IT teams'
    ],
    marketPosition: 'Competitive with GitLab ($19-99), GitHub Actions ($0-44), and Jenkins (Free). Our advantage: AI-powered automation, predictive capabilities, and comprehensive features.',
    competitors: ['GitLab, GitHub Actions, Jenkins, CircleCI, Travis CI, Azure DevOps'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Comprehensive DevOps platform with AI automation, predictive analytics, and intelligent resource management. Includes mobile apps and extensive API.',
    roi: 'Teams typically see 250-400% ROI within 8 months through improved efficiency and reduced failures.',
    useCases: [
      'Continuous integration',
      'Continuous deployment',
      'Infrastructure automation',
      'Performance optimization',
      'Security automation',
      'Team collaboration'
    ],
    integrations: ['GitHub, GitLab, Bitbucket, AWS, Azure, GCP, Slack, Jira'],
    support: '24/7 support, dedicated DevOps specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR'],
    link: 'https://ziontechgroup.com/ai-powered-devops-automation',
    icon: '🤖',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2024-07-01',
    customers: 1400,
    rating: 4.7,
    reviews: 780,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'quantum-database-platform',
    name: 'Quantum Database Platform',
    tagline: 'Next-generation database with quantum computing optimization',
    description: 'Revolutionary database platform that leverages quantum computing principles to provide unprecedented performance, scalability, and security for modern applications.',
    category: 'Database & Data Management',
    price: {
      monthly: 249,
      yearly: 2490,
      currency: 'USD',
      trialDays: 14,
      setupTime: '3 hours'
    },
    features: [
      'Quantum-optimized queries',
      'AI-powered indexing',
      'Real-time analytics',
      'Advanced security',
      'Auto-scaling',
      'Multi-model support',
      'Backup and recovery',
      'Performance monitoring',
      'API management',
      'Mobile apps'
    ],
    benefits: [
      'Improve query performance by 10x',
      'Reduce database costs by 40%',
      'Enhanced security with quantum resistance',
      'Automatic optimization',
      'Scalable architecture'
    ],
    targetAudience: [
      'Technology companies',
      'Financial services',
      'Healthcare organizations',
      'E-commerce businesses',
      'Data analytics teams',
      'Enterprise IT departments'
    ],
    marketPosition: 'Competitive with MongoDB ($57-200), PostgreSQL (Free), and Oracle ($47-948). Our advantage: Quantum optimization, AI-powered indexing, and competitive pricing.',
    competitors: ['MongoDB, PostgreSQL, Oracle, MySQL, Microsoft SQL Server, Amazon RDS'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Quantum algorithms'],
    realImplementation: true,
    implementationDetails: 'Advanced database platform with quantum optimization, AI indexing, and comprehensive data management. Includes mobile apps and extensive API.',
    roi: 'Organizations typically see 200-350% ROI within 12 months through improved performance and reduced costs.',
    useCases: [
      'High-performance applications',
      'Real-time analytics',
      'Big data processing',
      'Financial transactions',
      'Healthcare data management',
      'E-commerce platforms'
    ],
    integrations: ['Python, Node.js, Java, .NET, PHP, Ruby, Go, REST APIs'],
    support: '24/7 support, dedicated database specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, GDPR, CCPA'],
    link: 'https://ziontechgroup.com/quantum-database-platform',
    icon: '🗄️',
    color: 'from-purple-500 to-indigo-600',
    popular: false,
    launchDate: '2024-08-15',
    customers: 650,
    rating: 4.6,
    reviews: 320,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'ai-network-optimization',
    name: 'AI Network Optimization Platform',
    tagline: 'Intelligent network management and optimization',
    description: 'Advanced network platform that uses artificial intelligence to optimize network performance, predict issues, and automate network management tasks.',
    category: 'Networking & Security',
    price: {
      monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '4 hours'
    },
    features: [
      'AI-powered network optimization',
      'Predictive issue detection',
      'Automated traffic management',
      'Performance monitoring',
      'Security threat detection',
      'Bandwidth optimization',
      'Quality of service management',
      'Network analytics',
      'Mobile management',
      'API access'
    ],
    benefits: [
      'Improve network performance by 40%',
      'Reduce network downtime by 80%',
      'Automate routine tasks',
      'Enhance security posture',
      'Lower operational costs'
    ],
    targetAudience: [
      'Network administrators',
      'IT managers',
      'Technology companies',
      'Educational institutions',
      'Healthcare organizations',
      'Government agencies'
    ],
    marketPosition: 'Competitive with Cisco ($100-1000), Juniper ($50-500), and Arista ($50-500). Our advantage: AI-powered optimization, competitive pricing, and modern interface.',
    competitors: ['Cisco, Juniper, Arista, HP, Dell, Extreme Networks'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Network protocols'],
    realImplementation: true,
    implementationDetails: 'Comprehensive network platform with AI optimization, predictive analytics, and automated management. Includes mobile apps and extensive API.',
    roi: 'Organizations typically see 200-300% ROI within 12 months through improved performance and reduced downtime.',
    useCases: [
      'Network optimization',
      'Performance monitoring',
      'Security management',
      'Traffic analysis',
      'Quality of service',
      'Network automation'
    ],
    integrations: ['SNMP, NetFlow, Syslog, REST APIs, Network management systems'],
    support: '24/7 support, dedicated network specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, GDPR'],
    link: 'https://ziontechgroup.com/ai-network-optimization',
    icon: '🌐',
    color: 'from-teal-500 to-blue-600',
    popular: true,
    launchDate: '2024-09-01',
    customers: 1100,
    rating: 4.7,
    reviews: 620,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'quantum-storage-solution',
    name: 'Quantum Storage Solution',
    tagline: 'Next-generation storage with quantum encryption',
    description: 'Revolutionary storage platform that combines quantum-resistant encryption with advanced data management to provide secure, scalable, and high-performance storage solutions.',
    category: 'Storage & Backup',
    price: {
      monthly: 159,
      yearly: 1590,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'Quantum-resistant encryption',
      'AI-powered data optimization',
      'Automated backup',
      'Disaster recovery',
      'Data deduplication',
      'Performance optimization',
      'Multi-cloud support',
      'Compliance tools',
      'Mobile access',
      'API management'
    ],
    benefits: [
      'Enhanced security with quantum resistance',
      'Reduce storage costs by 30%',
      'Automated data management',
      'Improved performance',
      'Comprehensive compliance'
    ],
    targetAudience: [
      'Technology companies',
      'Healthcare organizations',
      'Financial services',
      'Government agencies',
      'Educational institutions',
      'Enterprise businesses'
    ],
    marketPosition: 'Competitive with AWS S3 ($0.023 per GB), Azure Blob ($0.0184 per GB), and Google Cloud Storage ($0.020 per GB). Our advantage: Quantum encryption, AI optimization, and competitive pricing.',
    competitors: ['AWS S3, Azure Blob, Google Cloud Storage, Dropbox Business, Box'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Quantum encryption'],
    realImplementation: true,
    implementationDetails: 'Advanced storage platform with quantum encryption, AI optimization, and comprehensive data management. Includes mobile apps and extensive API.',
    roi: 'Organizations typically see 150-250% ROI within 12 months through cost reduction and improved security.',
    useCases: [
      'Data storage',
      'Backup and recovery',
      'File sharing',
      'Compliance management',
      'Data archiving',
      'Cloud migration'
    ],
    integrations: ['AWS, Azure, GCP, Dropbox, Box, Local storage systems'],
    support: '24/7 support, dedicated storage specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, GDPR, CCPA'],
    link: 'https://ziontechgroup.com/quantum-storage-solution',
    icon: '💾',
    color: 'from-indigo-500 to-purple-600',
    popular: false,
    launchDate: '2024-10-15',
    customers: 750,
    rating: 4.5,
    reviews: 420,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'ai-monitoring-intelligence',
    name: 'AI Monitoring Intelligence',
    tagline: 'Intelligent monitoring and observability platform',
    description: 'Advanced monitoring platform that uses artificial intelligence to provide intelligent insights, predictive analytics, and automated response capabilities for complex IT environments.',
    category: 'Monitoring & Observability',
    price: {
      monthly: 129,
      yearly: 1290,
      currency: 'USD',
      trialDays: 21,
      setupTime: '3 hours'
    },
    features: [
      'AI-powered monitoring',
      'Predictive analytics',
      'Automated alerting',
      'Performance optimization',
      'Root cause analysis',
      'Capacity planning',
      'Cost optimization',
      'Compliance monitoring',
      'Mobile dashboards',
      'API access'
    ],
    benefits: [
      'Reduce incident response time by 70%',
      'Predict issues before they occur',
      'Automate routine monitoring tasks',
      'Improve system performance',
      'Lower operational costs'
    ],
    targetAudience: [
      'DevOps teams',
      'System administrators',
      'IT managers',
      'Technology companies',
      'Digital agencies',
      'Enterprise IT departments'
    ],
    marketPosition: 'Competitive with Datadog ($15-23), New Relic ($99-149), and Splunk ($150-2000). Our advantage: AI-powered intelligence, competitive pricing, and comprehensive features.',
    competitors: ['Datadog, New Relic, Splunk, Dynatrace, AppDynamics, Elastic'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Monitoring protocols'],
    realImplementation: true,
    implementationDetails: 'Comprehensive monitoring platform with AI intelligence, predictive analytics, and automated response. Includes mobile apps and extensive API.',
    roi: 'Teams typically see 200-350% ROI within 10 months through improved incident response and reduced downtime.',
    useCases: [
      'Application monitoring',
      'Infrastructure monitoring',
      'Performance optimization',
      'Incident management',
      'Capacity planning',
      'Cost optimization'
    ],
    integrations: ['Prometheus, Grafana, Elasticsearch, Logstash, Beats, Cloud platforms'],
    support: '24/7 support, dedicated monitoring specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR'],
    link: 'https://ziontechgroup.com/ai-monitoring-intelligence',
    icon: '📊',
    color: 'from-orange-500 to-red-600',
    popular: true,
    launchDate: '2024-11-01',
    customers: 1600,
    rating: 4.8,
    reviews: 890,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'quantum-api-gateway',
    name: 'Quantum API Gateway',
    tagline: 'Next-generation API management with quantum security',
    description: 'Revolutionary API gateway that combines quantum-resistant security with advanced API management capabilities to provide secure, scalable, and high-performance API services.',
    category: 'API & Integration',
    price: {
      monthly: 139,
      yearly: 1390,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 hours'
    },
    features: [
      'Quantum-resistant security',
      'AI-powered rate limiting',
      'Advanced authentication',
      'API analytics',
      'Performance optimization',
      'Developer portal',
      'Documentation tools',
      'Testing environment',
      'Mobile management',
      'Comprehensive API'
    ],
    benefits: [
      'Enhanced security with quantum resistance',
      'Improve API performance by 50%',
      'Reduce development time',
      'Better developer experience',
      'Comprehensive analytics'
    ],
    targetAudience: [
      'API developers',
      'Technology companies',
      'Digital agencies',
      'Startups',
      'Enterprise IT departments',
      'Integration teams'
    ],
    marketPosition: 'Competitive with Kong ($250-500), AWS API Gateway ($3.50 per million calls), and Azure API Management ($0.50-4.00 per 1,000 calls). Our advantage: Quantum security, AI optimization, and competitive pricing.',
    competitors: ['Kong, AWS API Gateway, Azure API Management, Google Cloud Endpoints, Tyk'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Quantum security'],
    realImplementation: true,
    implementationDetails: 'Advanced API gateway with quantum security, AI optimization, and comprehensive management tools. Includes mobile apps and extensive API.',
    roi: 'Developers typically see 200-300% ROI within 8 months through improved performance and reduced development time.',
    useCases: [
      'API management',
      'Security and authentication',
      'Rate limiting',
      'Analytics and monitoring',
      'Developer experience',
      'Integration management'
    ],
    integrations: ['OAuth 2.0, JWT, OpenID Connect, GraphQL, REST, gRPC'],
    support: '24/7 support, dedicated API specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, API security standards'],
    link: 'https://ziontechgroup.com/quantum-api-gateway',
    icon: '🔗',
    color: 'from-green-500 to-teal-600',
    popular: false,
    launchDate: '2024-12-15',
    customers: 900,
    rating: 4.6,
    reviews: 480,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'ai-disaster-recovery',
    name: 'AI Disaster Recovery Platform',
    tagline: 'Intelligent disaster recovery and business continuity',
    description: 'Advanced disaster recovery platform that uses artificial intelligence to automate backup processes, predict failures, and optimize recovery strategies for maximum business continuity.',
    category: 'Disaster Recovery & Business Continuity',
    price: {
      monthly: 219,
      yearly: 2190,
      currency: 'USD',
      trialDays: 14,
      setupTime: '5 hours'
    },
    features: [
      'AI-powered backup automation',
      'Predictive failure detection',
      'Intelligent recovery planning',
      'Multi-site replication',
      'Testing automation',
      'Compliance monitoring',
      'Performance optimization',
      'Cost optimization',
      'Mobile management',
      'API access'
    ],
    benefits: [
      'Reduce recovery time by 80%',
      'Predict and prevent failures',
      'Automate recovery processes',
      'Improve compliance posture',
      'Lower operational costs'
    ],
    targetAudience: [
      'IT managers',
      'Business continuity teams',
      'Technology companies',
      'Financial services',
      'Healthcare organizations',
      'Government agencies'
    ],
    marketPosition: 'Competitive with Veeam ($1,000-10,000), Commvault ($1,500-15,000), and Rubrik ($2,000-20,000). Our advantage: AI-powered automation, competitive pricing, and comprehensive features.',
    competitors: ['Veeam, Commvault, Rubrik, Cohesity, Druva, Zerto'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Backup technologies'],
    realImplementation: true,
    implementationDetails: 'Comprehensive disaster recovery platform with AI automation, predictive analytics, and intelligent recovery planning. Includes mobile apps and extensive API.',
    roi: 'Organizations typically see 200-400% ROI within 12 months through improved recovery times and reduced downtime.',
    useCases: [
      'Backup automation',
      'Disaster recovery',
      'Business continuity',
      'Compliance management',
      'Testing automation',
      'Performance optimization'
    ],
    integrations: ['VMware, Hyper-V, AWS, Azure, GCP, Local infrastructure'],
    support: '24/7 support, dedicated disaster recovery specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, GDPR, Business continuity standards'],
    link: 'https://ziontechgroup.com/ai-disaster-recovery',
    icon: '🔄',
    color: 'from-yellow-500 to-orange-600',
    popular: true,
    launchDate: '2025-01-01',
    customers: 750,
    rating: 4.7,
    reviews: 420,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  {
    id: 'quantum-mobile-development',
    name: 'Quantum Mobile Development Platform',
    tagline: 'Next-generation mobile app development with quantum capabilities',
    description: 'Revolutionary mobile development platform that combines quantum computing principles with modern mobile development tools to create high-performance, secure, and intelligent mobile applications.',
    category: 'Mobile Development',
    price: {
      monthly: 189,
      yearly: 1890,
      currency: 'USD',
      trialDays: 21,
      setupTime: '4 hours'
    },
    features: [
      'Quantum-optimized development',
      'AI-powered code generation',
      'Cross-platform development',
      'Performance optimization',
      'Security testing',
      'Analytics integration',
      'Testing automation',
      'Deployment tools',
      'Developer collaboration',
      'Mobile management'
    ],
    benefits: [
      'Improve app performance by 50%',
      'Reduce development time by 40%',
      'Enhanced security with quantum resistance',
      'Better user experience',
      'Lower development costs'
    ],
    targetAudience: [
      'Mobile developers',
      'Technology companies',
      'Digital agencies',
      'Startups',
      'Enterprise IT departments',
      'App development teams'
    ],
    marketPosition: 'Competitive with React Native (Free), Flutter (Free), and Xamarin ($25-99). Our advantage: Quantum optimization, AI assistance, and comprehensive development tools.',
    competitors: ['React Native, Flutter, Xamarin, Ionic, NativeScript, AppGyver'],
    techStack: ['React Native, Flutter, Python, TensorFlow, Node.js, Quantum algorithms'],
    realImplementation: true,
    implementationDetails: 'Advanced mobile development platform with quantum optimization, AI assistance, and comprehensive development tools. Includes collaboration features and extensive API.',
    roi: 'Developers typically see 200-350% ROI within 10 months through improved performance and reduced development time.',
    useCases: [
      'Mobile app development',
      'Cross-platform development',
      'Performance optimization',
      'Security testing',
      'Testing automation',
      'Deployment management'
    ],
    integrations: ['GitHub, GitLab, Bitbucket, CI/CD tools, Testing frameworks, Analytics platforms'],
    support: '24/7 support, dedicated mobile development specialist, training sessions, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, Mobile app security standards'],
    link: 'https://ziontechgroup.com/quantum-mobile-development',
    icon: '📱',
    color: 'from-pink-500 to-rose-600',
    popular: true,
    launchDate: '2025-02-15',
    customers: 1100,
    rating: 4.8,
    reviews: 620,
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
];