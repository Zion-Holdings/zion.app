export interface Service {
  id: string;
  name: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics';
  description: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;
  };
  technologyStack: string[];
  benefits: string[];
  useCases: string[];
  status: 'active' | 'beta' | 'coming-soon';
  priority: number;
  demoUrl?: string;
  documentationUrl?: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-code-assistant',
    name: 'ZionAI Code Assistant',
    category: 'AI Services',
    description: 'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.',
    features: [
      'Real-time code completion and suggestions',
      'Automated code review and optimization',
      'Multi-language support (Python, JavaScript, Go, Rust)',
      'Security vulnerability detection',
      'Code documentation generation',
      'Integration with popular IDEs',
      'Custom model fine-tuning for enterprise codebases'
    ],
    pricing: {
      starter: '$29/month',
      professional: '$99/month',
      enterprise: '$299/month',
      custom: 'Contact for enterprise pricing'
    },
    technologyStack: ['OpenAI GPT-4', 'Claude 3', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    benefits: [
      'Reduce development time by 40-60%',
      'Improve code quality and security',
      'Lower maintenance costs',
      'Accelerate team onboarding',
      '24/7 AI assistance'
    ],
    useCases: [
      'Software development teams',
      'Startups and scale-ups',
      'Enterprise development',
      'Freelance developers',
      'Educational institutions'
    ],
    status: 'active',
    priority: 1,
    demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
    documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-content-generator',
    name: 'ContentForge AI',
    category: 'AI Services',
    description: 'Enterprise-grade AI content generation platform for marketing, documentation, and creative writing with brand voice consistency.',
    features: [
      'Multi-format content generation (blogs, emails, social media)',
      'Brand voice training and consistency',
      'SEO optimization and keyword research',
      'Multi-language content creation',
      'Plagiarism detection and originality scoring',
      'Content performance analytics',
      'Team collaboration and approval workflows'
    ],
    pricing: {
      starter: '$49/month',
      professional: '$149/month',
      enterprise: '$399/month'
    },
    technologyStack: ['GPT-4', 'Claude 3', 'BERT', 'React', 'FastAPI', 'MongoDB'],
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'Improved SEO performance',
      'Cost-effective content marketing',
      'Scalable content operations'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Enterprise marketing teams',
      'Educational institutions'
    ],
    status: 'active',
    priority: 2,
    demoUrl: 'https://ziontechgroup.com/demo/content-forge',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-data-analytics',
    name: 'InsightAI Analytics',
    category: 'AI Services',
    description: 'Intelligent data analytics platform with predictive modeling, automated insights, and interactive visualizations powered by machine learning.',
    features: [
      'Automated data preprocessing and cleaning',
      'Predictive modeling and forecasting',
      'Natural language query interface',
      'Real-time data streaming analytics',
      'Custom dashboard builder',
      'Anomaly detection and alerting',
      'Integration with 100+ data sources'
    ],
    pricing: {
      starter: '$79/month',
      professional: '$199/month',
      enterprise: '$599/month'
    },
    technologyStack: ['Python', 'TensorFlow', 'PyTorch', 'React', 'FastAPI', 'Apache Kafka'],
    benefits: [
      'Uncover hidden patterns in data',
      'Make data-driven decisions faster',
      'Reduce manual analysis time by 80%',
      'Predict future trends accurately',
      'Real-time business intelligence'
    ],
    useCases: [
      'Financial services',
      'Healthcare analytics',
      'E-commerce optimization',
      'Supply chain management',
      'Marketing analytics'
    ],
    status: 'active',
    priority: 3,
    demoUrl: 'https://ziontechgroup.com/demo/insight-ai',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // IT Services
  {
    id: 'managed-it-services',
    name: 'ZionTech Managed IT',
    category: 'IT Services',
    description: 'Comprehensive managed IT services including 24/7 monitoring, cybersecurity, cloud management, and strategic technology consulting.',
    features: [
      '24/7 network monitoring and support',
      'Cybersecurity threat detection and response',
      'Cloud infrastructure management (AWS, Azure, GCP)',
      'Backup and disaster recovery',
      'Help desk and user support',
      'Technology roadmap planning',
      'Compliance and audit support'
    ],
    pricing: {
      starter: '$99/month per user',
      professional: '$149/month per user',
      enterprise: '$199/month per user'
    },
    technologyStack: ['Microsoft 365', 'AWS', 'Azure', 'Cisco', 'Fortinet', 'Veeam'],
    benefits: [
      'Reduce IT costs by 25-40%',
      'Improve system uptime to 99.9%',
      'Enhanced security posture',
      'Predictable monthly costs',
      'Access to enterprise-grade tools'
    ],
    useCases: [
      'Small to medium businesses',
      'Healthcare organizations',
      'Financial services',
      'Manufacturing companies',
      'Professional services firms'
    ],
    status: 'active',
    priority: 4,
    demoUrl: 'https://ziontechgroup.com/demo/managed-it',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'cybersecurity-audit',
    name: 'SecureShield Audit',
    category: 'IT Services',
    description: 'Comprehensive cybersecurity assessment and penetration testing services to identify vulnerabilities and strengthen your security posture.',
    features: [
      'Vulnerability assessment and scanning',
      'Penetration testing (web, mobile, network)',
      'Social engineering testing',
      'Security policy review and development',
      'Compliance gap analysis (SOC2, ISO27001, HIPAA)',
      'Incident response planning',
      'Security awareness training'
    ],
    pricing: {
      starter: '$2,999/assessment',
      professional: '$5,999/comprehensive',
      enterprise: '$12,999/enterprise'
    },
    technologyStack: ['Nessus', 'Metasploit', 'Burp Suite', 'Wireshark', 'Custom tools'],
    benefits: [
      'Identify security gaps before attackers',
      'Meet compliance requirements',
      'Reduce cyber risk exposure',
      'Improve incident response capabilities',
      'Protect brand reputation'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce businesses',
      'Government agencies',
      'Educational institutions'
    ],
    status: 'active',
    priority: 5,
    demoUrl: 'https://ziontechgroup.com/demo/secure-shield',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Micro SAAS
  {
    id: 'invoice-automation',
    name: 'InvoiceFlow Pro',
    category: 'Micro SAAS',
    description: 'Automated invoice processing and accounts payable solution with AI-powered data extraction and approval workflows.',
    features: [
      'AI-powered invoice data extraction',
      'Automated approval workflows',
      'Multi-currency support',
      'Integration with accounting software',
      'Real-time payment tracking',
      'Custom approval rules',
      'Mobile app for approvals'
    ],
    pricing: {
      starter: '$19/month',
      professional: '$49/month',
      enterprise: '$99/month'
    },
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Stripe'],
    benefits: [
      'Reduce invoice processing time by 90%',
      'Eliminate manual data entry errors',
      'Improve cash flow management',
      'Enhance audit trail compliance',
      'Mobile-first approval process'
    ],
    useCases: [
      'Small businesses',
      'Accounting firms',
      'Property management',
      'Construction companies',
      'Healthcare practices'
    ],
    status: 'active',
    priority: 6,
    demoUrl: 'https://ziontechgroup.com/demo/invoice-flow',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'project-management',
    name: 'TaskMaster Pro',
    category: 'Micro SAAS',
    description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and progress tracking.',
    features: [
      'AI-powered task prioritization',
      'Resource allocation optimization',
      'Real-time collaboration tools',
      'Time tracking and reporting',
      'Integration with popular tools',
      'Mobile and desktop apps',
      'Custom workflow automation'
    ],
    pricing: {
      starter: '$15/month per user',
      professional: '$25/month per user',
      enterprise: '$35/month per user'
    },
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
    benefits: [
      'Increase team productivity by 30%',
      'Better resource utilization',
      'Improved project delivery times',
      'Enhanced team collaboration',
      'Data-driven decision making'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning',
      'Consulting firms'
    ],
    status: 'active',
    priority: 7,
    demoUrl: 'https://ziontechgroup.com/demo/task-master',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Blockchain Services
  {
    id: 'smart-contract-audit',
    name: 'BlockAudit Pro',
    category: 'Blockchain',
    description: 'Professional smart contract security auditing and optimization services for DeFi, NFT, and enterprise blockchain projects.',
    features: [
      'Comprehensive security analysis',
      'Gas optimization recommendations',
      'Formal verification methods',
      'Vulnerability assessment',
      'Compliance checking',
      'Post-deployment monitoring',
      'Emergency response support'
    ],
    pricing: {
      starter: '$5,000/audit',
      professional: '$15,000/audit',
      enterprise: '$50,000/audit'
    },
    technologyStack: ['Solidity', 'Vyper', 'Foundry', 'Slither', 'Mythril'],
    benefits: [
      'Prevent costly security breaches',
      'Optimize gas costs by 20-40%',
      'Build investor confidence',
      'Meet regulatory requirements',
      'Protect user funds'
    ],
    useCases: [
      'DeFi protocols',
      'NFT marketplaces',
      'DAO governance',
      'Enterprise blockchain',
      'Token launches'
    ],
    status: 'active',
    priority: 8,
    demoUrl: 'https://ziontechgroup.com/demo/block-audit',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // IoT & Edge Computing
  {
    id: 'iot-monitoring',
    name: 'IoT Sentinel',
    category: 'IoT & Edge',
    description: 'Comprehensive IoT monitoring and management platform with edge computing capabilities for industrial and commercial applications.',
    features: [
      'Real-time device monitoring',
      'Edge computing processing',
      'Predictive maintenance alerts',
      'Data visualization dashboards',
      'Integration with industrial protocols',
      'Scalable device management',
      'Custom alert rules'
    ],
    pricing: {
      starter: '$10/device/month',
      professional: '$25/device/month',
      enterprise: '$50/device/month'
    },
    technologyStack: ['Python', 'MQTT', 'Kubernetes', 'InfluxDB', 'Grafana'],
    benefits: [
      'Reduce equipment downtime by 60%',
      'Lower maintenance costs',
      'Improve operational efficiency',
      'Real-time operational insights',
      'Scalable IoT infrastructure'
    ],
    useCases: [
      'Manufacturing facilities',
      'Smart buildings',
      'Agriculture monitoring',
      'Energy management',
      'Transportation logistics'
    ],
    status: 'active',
    priority: 9,
    demoUrl: 'https://ziontechgroup.com/demo/iot-sentinel',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Cloud & DevOps
  {
    id: 'devops-automation',
    name: 'DevOps Flow',
    category: 'Cloud & DevOps',
    description: 'End-to-end DevOps automation platform with CI/CD pipelines, infrastructure as code, and cloud-native deployment tools.',
    features: [
      'Automated CI/CD pipelines',
      'Infrastructure as Code (Terraform)',
      'Multi-cloud deployment',
      'Container orchestration',
      'Monitoring and alerting',
      'Security scanning',
      'Cost optimization'
    ],
    pricing: {
      starter: '$99/month',
      professional: '$299/month',
      enterprise: '$799/month'
    },
    technologyStack: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment errors by 90%',
      'Lower infrastructure costs',
      'Improve team productivity',
      'Enhanced security posture'
    ],
    useCases: [
      'Software development teams',
      'Startups and scale-ups',
      'Enterprise IT',
      'DevOps consulting',
      'Cloud migration projects'
    ],
    status: 'active',
    priority: 10,
    demoUrl: 'https://ziontechgroup.com/demo/devops-flow',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Data & Analytics
  {
    id: 'data-warehouse',
    name: 'DataVault Enterprise',
    category: 'Data & Analytics',
    description: 'Modern cloud data warehouse solution with real-time analytics, data governance, and AI-powered insights.',
    features: [
      'Real-time data ingestion',
      'Advanced analytics and ML',
      'Data governance and security',
      'Self-service BI tools',
      'Data lineage tracking',
      'Performance optimization',
      'Multi-cloud support'
    ],
    pricing: {
      starter: '$199/month',
      professional: '$499/month',
      enterprise: '$1,299/month'
    },
    technologyStack: ['Snowflake', 'Apache Airflow', 'dbt', 'Tableau', 'Python'],
    benefits: [
      'Unified data platform',
      'Real-time analytics',
      'Scalable architecture',
      'Cost-effective storage',
      'Enhanced data security'
    ],
    useCases: [
      'Business intelligence',
      'Customer analytics',
      'Financial reporting',
      'Supply chain analytics',
      'Marketing attribution'
    ],
    status: 'active',
    priority: 11,
    demoUrl: 'https://ziontechgroup.com/demo/data-vault',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getCategories = () => {
  return Array.from(new Set(services.map(service => service.category)));
};