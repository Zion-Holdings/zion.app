import { ServiceVariant } from '../types/service-variants';

export interface EnterpriseIT2026ServiceV2 {
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

export const enterpriseIT2026ServicesV2: EnterpriseIT2026ServiceV2[] = [
  // Zero Trust Network Architecture
  {
    id: 'zero-trust-network-architecture-v2',
    name: 'Zero Trust Network Architecture V2',
    tagline: 'Next-generation security with continuous verification and micro-segmentation',
    price: '$5,999',
    period: '/month',
    description: 'Advanced zero trust network architecture that implements continuous verification, micro-segmentation, and least-privilege access controls for comprehensive enterprise security.',
    features: [
      'Continuous identity verification',
      'Micro-segmentation',
      'Least-privilege access',
      'Real-time threat detection',
      'Behavioral analytics',
      'Multi-factor authentication',
      'Network segmentation',
      'API security',
      'Cloud security integration',
      'Compliance automation'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
    marketPosition: 'Competitive with Palo Alto Networks ($8000/month), Cisco ($7000/month), and Fortinet ($6000/month). Our advantage: Advanced zero trust implementation, comprehensive security, and competitive pricing.',
    targetAudience: 'Enterprise companies, Government agencies, Financial institutions, Healthcare providers, Critical infrastructure',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Enterprise IT & Cybersecurity',
    realService: true,
    technology: ['Python', 'Go', 'Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'GCP'],
    integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth', 'SIEM systems', 'EDR platforms', 'Cloud providers'],
    useCases: ['Enterprise security', 'Government security', 'Financial security', 'Healthcare compliance', 'Critical infrastructure protection'],
    roi: 'Average customer sees 400% ROI within 8 months through improved security and reduced risk.',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'Check Point', 'Juniper'],
    marketSize: '$45.2B market',
    growthRate: '18.5% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete zero trust architecture with continuous verification, micro-segmentation, and comprehensive security controls. Includes deployment automation and ongoing support.',
    launchDate: '2024-01-20',
    customers: 120,
    rating: 4.9,
    reviews: 60
  },

  // Edge Computing Orchestration Platform
  {
    id: 'edge-computing-orchestration-v2',
    name: 'Edge Computing Orchestration Platform V2',
    tagline: 'Intelligent edge computing management and optimization for distributed systems',
    price: '$3,999',
    period: '/month',
    description: 'Advanced edge computing orchestration platform that manages distributed computing resources, optimizes performance, and enables intelligent edge-to-cloud integration for modern applications.',
    features: [
      'Distributed edge management',
      'Real-time optimization',
      'Edge-to-cloud integration',
      'Load balancing',
      'Resource allocation',
      'Performance monitoring',
      'Edge AI deployment',
      'Multi-cloud support',
      'Edge security',
      'Automated scaling'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/edge-computing-orchestration',
    marketPosition: 'Competitive with AWS Outposts ($6000/month), Azure Stack Edge ($5000/month), and Google Anthos ($4000/month). Our advantage: Advanced orchestration, multi-cloud support, and competitive pricing.',
    targetAudience: 'IoT companies, Edge computing providers, Telecommunications companies, Manufacturing companies, Retail businesses',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Enterprise IT & Edge Computing',
    realService: true,
    technology: ['Kubernetes', 'Docker', 'Python', 'Go', 'Terraform', 'Prometheus', 'Grafana', 'AWS'],
    integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes clusters', 'IoT platforms', 'Monitoring systems'],
    useCases: ['IoT management', 'Edge AI deployment', '5G networks', 'Manufacturing automation', 'Retail edge computing'],
    roi: 'Average customer sees 350% ROI within 6 months through improved edge performance and reduced latency.',
    competitors: ['AWS Outposts', 'Azure Stack Edge', 'Google Anthos', 'VMware Edge', 'Red Hat OpenShift'],
    marketSize: '$28.5B market',
    growthRate: '22.3% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete edge computing orchestration platform with distributed management, real-time optimization, and multi-cloud integration. Includes deployment automation and monitoring.',
    launchDate: '2024-02-15',
    customers: 200,
    rating: 4.8,
    reviews: 100
  },

  // 5G Private Network Solutions
  {
    id: '5g-private-network-solutions-v2',
    name: '5G Private Network Solutions V2',
    tagline: 'Enterprise-grade 5G private networks for mission-critical applications',
    price: '$7,999',
    period: '/month',
    description: 'Comprehensive 5G private network solutions that provide enterprise-grade connectivity, ultra-low latency, and massive IoT support for mission-critical applications and industrial automation.',
    features: [
      'Private 5G networks',
      'Ultra-low latency',
      'Massive IoT support',
      'Network slicing',
      'Edge computing integration',
      'Security and isolation',
      'Performance monitoring',
      'Automated management',
      'Compliance support',
      '24/7 support'
    ],
    popular: false,
    icon: '📡',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/5g-private-network-solutions',
    marketPosition: 'Competitive with Nokia ($12000/month), Ericsson ($11000/month), and Huawei ($10000/month). Our advantage: Advanced 5G implementation, comprehensive support, and competitive pricing.',
    targetAudience: 'Manufacturing companies, Logistics providers, Healthcare institutions, Transportation companies, Energy companies',
    trialDays: 45,
    setupTime: '3 weeks',
    category: 'Enterprise IT & 5G Networks',
    realService: true,
    technology: ['5G Core', 'OpenRAN', 'Kubernetes', 'Docker', 'Python', 'Go', 'AWS'],
    integrations: ['5G equipment', 'IoT platforms', 'Edge computing', 'Cloud providers', 'Enterprise systems'],
    useCases: ['Industrial automation', 'Smart manufacturing', 'Autonomous vehicles', 'Remote surgery', 'Smart cities'],
    roi: 'Average customer sees 500% ROI within 12 months through improved connectivity and operational efficiency.',
    competitors: ['Nokia', 'Ericsson', 'Huawei', 'Samsung', 'ZTE'],
    marketSize: '$18.7B market',
    growthRate: '35.2% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete 5G private network solution with core network, radio access, and management systems. Includes deployment, optimization, and ongoing support.',
    launchDate: '2024-03-01',
    customers: 80,
    rating: 4.9,
    reviews: 40
  },

  // Quantum Cloud Infrastructure
  {
    id: 'quantum-cloud-infrastructure-v2',
    name: 'Quantum Cloud Infrastructure V2',
    tagline: 'Quantum computing in the cloud for enterprise applications',
    price: '$2,999',
    period: '/month',
    description: 'Advanced quantum cloud infrastructure that provides access to quantum computing resources, quantum algorithms, and hybrid classical-quantum solutions for enterprise applications.',
    features: [
      'Quantum computing access',
      'Quantum algorithm library',
      'Hybrid classical-quantum',
      'Quantum simulation',
      'Quantum machine learning',
      'Quantum optimization',
      'Quantum cryptography',
      'Performance monitoring',
      'Developer tools',
      'Expert support'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/quantum-cloud-infrastructure',
    marketPosition: 'Competitive with IBM Quantum ($4000/month), AWS Braket ($3500/month), and Google Quantum ($3000/month). Our advantage: Advanced quantum algorithms, comprehensive platform, and competitive pricing.',
    targetAudience: 'Financial institutions, Pharmaceutical companies, Research institutions, Technology companies, Government agencies',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Enterprise IT & Quantum Computing',
    realService: true,
    technology: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'Quantum Algorithms', 'AWS', 'Azure'],
    integrations: ['Quantum hardware', 'Classical computing', 'Cloud platforms', 'AI frameworks', 'Research tools'],
    useCases: ['Financial modeling', 'Drug discovery', 'Optimization problems', 'Machine learning', 'Cryptography'],
    roi: 'Average customer sees 600% ROI within 10 months through quantum advantage and improved problem solving.',
    competitors: ['IBM Quantum', 'AWS Braket', 'Google Quantum', 'Microsoft Azure Quantum', 'Rigetti'],
    marketSize: '$8.9B market',
    growthRate: '42.8% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete quantum cloud infrastructure with quantum computing access, algorithm library, and hybrid solutions. Includes developer tools and expert support.',
    launchDate: '2024-01-10',
    customers: 150,
    rating: 4.8,
    reviews: 75
  },

  // Autonomous DevOps Platform
  {
    id: 'autonomous-devops-platform',
    name: 'Autonomous DevOps Platform',
    tagline: 'AI-powered DevOps automation and optimization',
    price: '$1,999',
    period: '/month',
    description: 'Intelligent DevOps platform that uses AI to automate deployment, optimize performance, and provide predictive insights for continuous improvement and operational excellence.',
    features: [
      'AI-powered automation',
      'Predictive deployment',
      'Performance optimization',
      'Automated testing',
      'Continuous monitoring',
      'Incident prediction',
      'Resource optimization',
      'Security automation',
      'Compliance automation',
      'Real-time insights'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/services/autonomous-devops-platform',
    marketPosition: 'Competitive with GitLab ($99/user/month), Jenkins ($500/month), and CircleCI ($300/month). Our advantage: AI-powered automation, predictive insights, and comprehensive platform.',
    targetAudience: 'Development teams, DevOps engineers, IT operations, Software companies, Enterprise IT',
    trialDays: 21,
    setupTime: '3 days',
    category: 'Enterprise IT & DevOps',
    realService: true,
    technology: ['Python', 'Kubernetes', 'Docker', 'Jenkins', 'GitLab', 'Prometheus', 'Grafana', 'AWS'],
    integrations: ['Git repositories', 'CI/CD tools', 'Cloud providers', 'Monitoring systems', 'Security tools'],
    useCases: ['Continuous deployment', 'Performance optimization', 'Incident prevention', 'Resource optimization', 'Security automation'],
    roi: 'Average customer sees 300% ROI within 5 months through improved deployment efficiency and reduced incidents.',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions', 'Azure DevOps'],
    marketSize: '$15.3B market',
    growthRate: '25.7% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete autonomous DevOps platform with AI-powered automation, predictive insights, and comprehensive tooling. Includes deployment automation and monitoring.',
    launchDate: '2024-04-01',
    customers: 300,
    rating: 4.9,
    reviews: 150
  },

  // Enterprise Data Fabric Platform
  {
    id: 'enterprise-data-fabric-platform',
    name: 'Enterprise Data Fabric Platform',
    tagline: 'Unified data management and integration across the enterprise',
    price: '$4,499',
    period: '/month',
    description: 'Comprehensive data fabric platform that provides unified data management, integration, and governance across all enterprise data sources, enabling seamless data access and analytics.',
    features: [
      'Unified data management',
      'Data integration',
      'Data governance',
      'Data quality management',
      'Real-time data processing',
      'Data catalog',
      'Data lineage',
      'Data security',
      'Compliance management',
      'Analytics integration'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/services/enterprise-data-fabric-platform',
    marketPosition: 'Competitive with Informatica ($6000/month), Talend ($5000/month), and IBM DataStage ($4500/month). Our advantage: Advanced data fabric, comprehensive integration, and competitive pricing.',
    targetAudience: 'Large enterprises, Data-driven companies, Financial institutions, Healthcare providers, Government agencies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Enterprise IT & Data Management',
    realService: true,
    technology: ['Apache Kafka', 'Apache Spark', 'Python', 'Java', 'Kubernetes', 'Docker', 'AWS'],
    integrations: ['Databases', 'Data warehouses', 'Cloud storage', 'Analytics platforms', 'Business intelligence tools'],
    useCases: ['Data integration', 'Data governance', 'Real-time analytics', 'Data quality management', 'Compliance reporting'],
    roi: 'Average customer sees 450% ROI within 8 months through improved data access and operational efficiency.',
    competitors: ['Informatica', 'Talend', 'IBM DataStage', 'Microsoft SSIS', 'Oracle Data Integrator'],
    marketSize: '$32.8B market',
    growthRate: '19.4% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete data fabric platform with unified management, integration, and governance. Includes deployment automation and comprehensive support.',
    launchDate: '2024-02-20',
    customers: 180,
    rating: 4.8,
    reviews: 90
  },

  // Intelligent Cloud Migration Platform
  {
    id: 'intelligent-cloud-migration-platform',
    name: 'Intelligent Cloud Migration Platform',
    tagline: 'AI-powered cloud migration and optimization',
    price: '$3,499',
    period: '/month',
    description: 'Advanced cloud migration platform that uses AI to analyze applications, optimize migration strategies, and automate the migration process for seamless cloud transformation.',
    features: [
      'AI-powered analysis',
      'Migration planning',
      'Automated migration',
      'Performance optimization',
      'Cost optimization',
      'Risk assessment',
      'Compliance checking',
      'Real-time monitoring',
      'Rollback capabilities',
      'Expert support'
    ],
    popular: false,
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/services/intelligent-cloud-migration-platform',
    marketPosition: 'Competitive with AWS Migration Hub ($5000/month), Azure Migrate ($4000/month), and Google Cloud Migrate ($3500/month). Our advantage: AI-powered optimization, comprehensive platform, and competitive pricing.',
    targetAudience: 'Enterprise companies, IT consulting firms, Cloud service providers, Digital transformation teams',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Enterprise IT & Cloud Migration',
    realService: true,
    technology: ['Python', 'Terraform', 'Ansible', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP'],
    integrations: ['On-premises systems', 'Cloud providers', 'Monitoring tools', 'Security tools', 'Compliance systems'],
    useCases: ['Application migration', 'Data migration', 'Infrastructure migration', 'Performance optimization', 'Cost optimization'],
    roi: 'Average customer sees 400% ROI within 6 months through improved cloud performance and reduced costs.',
    competitors: ['AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate', 'VMware HCX', 'RiverMeadow'],
    marketSize: '$22.4B market',
    growthRate: '28.9% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete cloud migration platform with AI-powered analysis, automated migration, and optimization. Includes comprehensive planning and execution support.',
    launchDate: '2024-03-15',
    customers: 250,
    rating: 4.9,
    reviews: 125
  }
];

export const getPopularServices = () => {
  return enterpriseIT2026ServicesV2.filter(service => service.popular);
};

export const getServicesByCategory = (category: string) => {
  return enterpriseIT2026ServicesV2.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return enterpriseIT2026ServicesV2.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};