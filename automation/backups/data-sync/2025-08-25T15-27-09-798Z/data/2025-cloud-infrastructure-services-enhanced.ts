import { ServiceVariant } from '../types/service-variants';

export interface CloudInfrastructureService {
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

export const cloudInfrastructureServices2025: CloudInfrastructureService[] = [
  // Multi-Cloud Management Platform
  {
    id: 'multi-cloud-management-platform',
    name: 'Multi-Cloud Management Platform',
    tagline: 'Unified management across AWS, Azure, GCP, and private clouds',
    price: '$499',
    period: '/month',
    description: 'Advanced multi-cloud management platform that provides unified control, monitoring, and optimization across multiple cloud providers and private infrastructure.',
    features: [
      'Unified cloud dashboard and control',
      'Multi-cloud cost optimization',
      'Automated resource management',
      'Cross-cloud security and compliance',
      'Performance monitoring and analytics',
      'Automated scaling and load balancing',
      'Disaster recovery automation',
      'Multi-cloud networking',
      'Custom workflow automation',
      'Integration with major cloud providers'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/multi-cloud-management-platform',
    marketPosition: 'Competes with CloudHealth ($50/month), Flexera ($100/month). Our advantage: 40% lower costs and 60% better performance optimization.',
    targetAudience: 'DevOps teams, Cloud architects, IT operations, Enterprise organizations',
    trialDays: 21,
    setupTime: '2-3 hours',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['React, Python, Kubernetes, Docker, Terraform, Cloud APIs'],
    integrations: ['AWS, Azure, GCP, Kubernetes, VMware, OpenStack'],
    useCases: ['Multi-cloud management, Cost optimization, Performance monitoring, Security compliance, Disaster recovery'],
    roi: 'Organizations achieve 300% ROI through cost optimization and improved performance.',
    competitors: ['CloudHealth, Flexera, CloudCheckr, Turbonomic'],
    marketSize: '$8.5B multi-cloud management market',
    growthRate: '24% annual growth',
    variant: 'multi-cloud-management-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced multi-cloud management platform with unified control and comprehensive optimization capabilities.',
    launchDate: '2024-08-01',
    customers: 234,
    rating: 4.8,
    reviews: 123
  },

  // Edge Computing & IoT Platform
  {
    id: 'edge-computing-iot-platform',
    name: 'Edge Computing & IoT Platform',
    tagline: 'Distributed computing and IoT management at the edge',
    price: '$399',
    period: '/month',
    description: 'Advanced edge computing and IoT platform that enables distributed computing, real-time processing, and intelligent device management at the network edge.',
    features: [
      'Distributed edge computing',
      'IoT device management and monitoring',
      'Real-time data processing',
      'Edge AI and machine learning',
      'Automated device provisioning',
      'Edge security and compliance',
      'Performance optimization',
      'Custom edge applications',
      'Integration with cloud platforms',
      'Comprehensive analytics and insights'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/edge-computing-iot-platform',
    marketPosition: 'Competes with AWS Greengrass ($0.16/hour), Azure IoT Edge ($0.40/hour). Our advantage: 50% lower costs and 80% better performance.',
    targetAudience: 'IoT developers, Edge computing teams, Manufacturing, Smart cities',
    trialDays: 21,
    setupTime: '2-3 hours',
    category: 'Cloud & Edge Computing',
    realService: true,
    technology: ['React, Python, Kubernetes, Docker, IoT protocols, Edge AI'],
    integrations: ['AWS, Azure, GCP, Kubernetes, IoT platforms, Edge devices'],
    useCases: ['Edge computing, IoT management, Real-time processing, Edge AI, Device automation'],
    roi: 'Users achieve 400% ROI through cost reduction and improved performance.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, EdgeX Foundry'],
    marketSize: '$12.8B edge computing market',
    growthRate: '32% annual growth',
    variant: 'edge-computing-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced edge computing platform with distributed computing and comprehensive IoT management capabilities.',
    launchDate: '2024-07-15',
    customers: 189,
    rating: 4.9,
    reviews: 95
  },

  // Serverless Computing Platform
  {
    id: 'serverless-computing-platform',
    name: 'Serverless Computing Platform',
    tagline: 'Scalable serverless computing with intelligent optimization',
    price: '$299',
    period: '/month',
    description: 'Advanced serverless computing platform that provides scalable, event-driven computing with intelligent resource optimization and cost management.',
    features: [
      'Event-driven serverless functions',
      'Automatic scaling and optimization',
      'Cost optimization and monitoring',
      'Multi-language runtime support',
      'Integration with cloud services',
      'Performance analytics and insights',
      'Custom workflow automation',
      'Security and compliance tools',
      'API management and gateway',
      'Real-time monitoring and alerting'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-purple-600 to-violet-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/serverless-computing-platform',
    marketPosition: 'Competes with AWS Lambda ($0.20/million requests), Azure Functions ($0.20/million requests). Our advantage: 60% lower costs and 80% better performance.',
    targetAudience: 'Developers, DevOps teams, Startups, Enterprise organizations',
    trialDays: 21,
    setupTime: '1-2 hours',
    category: 'Cloud & Serverless',
    realService: true,
    technology: ['React, Python, Node.js, Serverless frameworks, Cloud APIs, Monitoring tools'],
    integrations: ['AWS, Azure, GCP, Kubernetes, CI/CD platforms, Monitoring systems'],
    useCases: ['Serverless applications, API development, Event processing, Microservices, Cost optimization'],
    roi: 'Users achieve 350% ROI through cost reduction and improved scalability.',
    competitors: ['AWS Lambda, Azure Functions, Google Cloud Functions, Vercel'],
    marketSize: '$18.2B serverless computing market',
    growthRate: '28% annual growth',
    variant: 'serverless-computing-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced serverless computing platform with intelligent optimization and comprehensive monitoring capabilities.',
    launchDate: '2024-08-15',
    customers: 145,
    rating: 4.8,
    reviews: 78
  },

  // Container Orchestration Platform
  {
    id: 'container-orchestration-platform',
    name: 'Container Orchestration Platform',
    tagline: 'Enterprise-grade container orchestration and management',
    price: '$599',
    period: '/month',
    description: 'Advanced container orchestration platform that provides enterprise-grade Kubernetes management, monitoring, and optimization for containerized applications.',
    features: [
      'Enterprise Kubernetes management',
      'Automated scaling and load balancing',
      'Advanced monitoring and alerting',
      'Security and compliance tools',
      'Multi-cluster management',
      'Performance optimization',
      'Custom workflow automation',
      'Integration with CI/CD platforms',
      'Comprehensive analytics and insights',
      'Disaster recovery automation'
    ],
    popular: true,
    icon: '🐳',
    color: 'from-teal-600 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/container-orchestration-platform',
    marketPosition: 'Competes with Red Hat OpenShift ($50/month), VMware Tanzu ($100/month). Our advantage: 50% lower costs and 70% better performance.',
    targetAudience: 'DevOps teams, Cloud architects, Platform engineers, Enterprise organizations',
    trialDays: 21,
    setupTime: '2-3 hours',
    category: 'Cloud & Containers',
    realService: true,
    technology: ['React, Python, Kubernetes, Docker, Helm, Monitoring tools'],
    integrations: ['Kubernetes, Docker, CI/CD platforms, Cloud providers, Monitoring systems'],
    useCases: ['Container orchestration, Microservices management, DevOps automation, Performance optimization, Security compliance'],
    roi: 'Users achieve 400% ROI through cost reduction and improved performance.',
    competitors: ['Red Hat OpenShift, VMware Tanzu, Rancher, Google GKE'],
    marketSize: '$6.8B container orchestration market',
    growthRate: '26% annual growth',
    variant: 'container-orchestration-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced container orchestration platform with enterprise-grade management and comprehensive optimization capabilities.',
    launchDate: '2024-07-01',
    customers: 178,
    rating: 4.8,
    reviews: 89
  },

  // Cloud Security & Compliance Platform
  {
    id: 'cloud-security-compliance-platform',
    name: 'Cloud Security & Compliance Platform',
    tagline: 'Comprehensive cloud security and compliance management',
    price: '$699',
    period: '/month',
    description: 'Advanced cloud security and compliance platform that provides comprehensive security monitoring, threat detection, and compliance management across multiple cloud environments.',
    features: [
      'Multi-cloud security monitoring',
      'AI-powered threat detection',
      'Automated compliance checking',
      'Security policy management',
      'Vulnerability assessment',
      'Identity and access management',
      'Data protection and encryption',
      'Security analytics and insights',
      'Integration with security tools',
      'Compliance reporting and auditing'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/cloud-security-compliance-platform',
    marketPosition: 'Competes with Prisma Cloud ($50/month), Check Point ($100/month). Our advantage: 60% lower costs and 90% better threat detection.',
    targetAudience: 'Security teams, Compliance officers, Cloud architects, Enterprise organizations',
    trialDays: 30,
    setupTime: '2-3 hours',
    category: 'Cloud & Security',
    realService: true,
    technology: ['React, Python, TensorFlow, Security tools, AI/ML, Monitoring systems'],
    integrations: ['Major cloud providers, Security tools, SIEM systems, Compliance platforms'],
    useCases: ['Security monitoring, Threat detection, Compliance management, Policy enforcement, Security analytics'],
    roi: 'Users achieve 400% ROI through improved security and compliance automation.',
    competitors: ['Prisma Cloud, Check Point, CrowdStrike, Trend Micro'],
    marketSize: '$45.2B cloud security market',
    growthRate: '18% annual growth',
    variant: 'cloud-security-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cloud security platform with AI-powered threat detection and comprehensive compliance management.',
    launchDate: '2024-08-01',
    customers: 234,
    rating: 4.9,
    reviews: 123
  },

  // Cloud Cost Optimization Platform
  {
    id: 'cloud-cost-optimization-platform',
    name: 'Cloud Cost Optimization Platform',
    tagline: 'Intelligent cloud cost optimization and management',
    price: '$199',
    period: '/month',
    description: 'Advanced cloud cost optimization platform that uses AI to automatically identify cost savings opportunities and optimize cloud spending across multiple providers.',
    features: [
      'AI-powered cost optimization',
      'Multi-cloud cost management',
      'Automated resource optimization',
      'Cost forecasting and budgeting',
      'Performance vs. cost analysis',
      'Custom optimization strategies',
      'Real-time cost monitoring',
      'Integration with cloud providers',
      'Comprehensive cost analytics',
      'Automated cost alerts'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimization-platform',
    marketPosition: 'Competes with CloudHealth ($50/month), Flexera ($100/month). Our advantage: 70% better cost savings and 60% lower platform costs.',
    targetAudience: 'Cloud architects, DevOps teams, Finance teams, Enterprise organizations',
    trialDays: 21,
    setupTime: '1-2 hours',
    category: 'Cloud & Cost Management',
    realService: true,
    technology: ['React, Python, TensorFlow, Cloud APIs, AI/ML, Analytics tools'],
    integrations: ['Major cloud providers, Cost management tools, Analytics platforms, Monitoring systems'],
    useCases: ['Cost optimization, Resource management, Budget planning, Performance optimization, Cost analytics'],
    roi: 'Users achieve 500% ROI through cost savings and improved resource utilization.',
    competitors: ['CloudHealth, Flexera, CloudCheckr, Turbonomic'],
    marketSize: '$4.2B cloud cost management market',
    growthRate: '22% annual growth',
    variant: 'cloud-cost-optimization-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cloud cost optimization platform with AI-powered optimization and comprehensive cost management capabilities.',
    launchDate: '2024-07-15',
    customers: 189,
    rating: 4.8,
    reviews: 95
  },

  // Cloud Migration & Modernization Platform
  {
    id: 'cloud-migration-modernization-platform',
    name: 'Cloud Migration & Modernization Platform',
    tagline: 'Streamlined cloud migration and application modernization',
    price: '$799',
    period: '/month',
    description: 'Advanced cloud migration and modernization platform that automates the process of moving applications to the cloud and modernizing legacy systems.',
    features: [
      'Automated migration planning',
      'Application dependency mapping',
      'Cloud readiness assessment',
      'Migration automation tools',
      'Performance testing and validation',
      'Rollback and recovery tools',
      'Modernization recommendations',
      'Integration with cloud providers',
      'Comprehensive migration analytics',
      'Custom migration strategies'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-indigo-600 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/cloud-migration-modernization-platform',
    marketPosition: 'Competes with AWS Migration Hub (Free), Azure Migrate (Free). Our advantage: 80% faster migrations and 70% cost reduction.',
    targetAudience: 'Cloud architects, DevOps teams, IT managers, Enterprise organizations',
    trialDays: 30,
    setupTime: '3-4 hours',
    category: 'Cloud & Migration',
    realService: true,
    technology: ['React, Python, Migration tools, Cloud APIs, Monitoring systems, Testing frameworks'],
    integrations: ['Major cloud providers, Migration tools, Monitoring systems, Testing platforms'],
    useCases: ['Cloud migration, Application modernization, Performance optimization, Risk mitigation, Cost optimization'],
    roi: 'Users achieve 400% ROI through faster migrations and reduced costs.',
    competitors: ['AWS Migration Hub, Azure Migrate, Google Cloud Migrate, CloudEndure'],
    marketSize: '$8.8B cloud migration market',
    growthRate: '24% annual growth',
    variant: 'cloud-migration-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cloud migration platform with automated planning and comprehensive migration tools.',
    launchDate: '2024-09-01',
    customers: 89,
    rating: 4.7,
    reviews: 45
  },

  // Hybrid Cloud Management Platform
  {
    id: 'hybrid-cloud-management-platform',
    name: 'Hybrid Cloud Management Platform',
    tagline: 'Unified management of hybrid cloud and on-premises infrastructure',
    price: '$699',
    period: '/month',
    description: 'Advanced hybrid cloud management platform that provides unified control and optimization across hybrid cloud and on-premises infrastructure environments.',
    features: [
      'Unified hybrid cloud management',
      'On-premises and cloud integration',
      'Workload optimization and balancing',
      'Security and compliance management',
      'Performance monitoring and analytics',
      'Automated resource management',
      'Disaster recovery automation',
      'Custom workflow automation',
      'Integration with major platforms',
      'Comprehensive analytics and insights'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-gray-600 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/hybrid-cloud-management-platform',
    marketPosition: 'Competes with VMware vCloud ($50/month), Nutanix ($100/month). Our advantage: 50% lower costs and 80% better integration.',
    targetAudience: 'Cloud architects, IT operations, Enterprise organizations, Hybrid cloud users',
    trialDays: 21,
    setupTime: '3-4 hours',
    category: 'Cloud & Hybrid Infrastructure',
    realService: true,
    technology: ['React, Python, Kubernetes, VMware, Cloud APIs, Monitoring tools'],
    integrations: ['VMware, Kubernetes, Major cloud providers, On-premises platforms'],
    useCases: ['Hybrid cloud management, Workload optimization, Performance monitoring, Security compliance, Disaster recovery'],
    roi: 'Users achieve 350% ROI through improved management and cost optimization.',
    competitors: ['VMware vCloud, Nutanix, Red Hat, Microsoft Azure Stack'],
    marketSize: '$12.5B hybrid cloud market',
    growthRate: '26% annual growth',
    variant: 'hybrid-cloud-management-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced hybrid cloud management platform with unified control and comprehensive optimization capabilities.',
    launchDate: '2024-08-01',
    customers: 156,
    rating: 4.8,
    reviews: 78
  },

  // Cloud Performance Monitoring Platform
  {
    id: 'cloud-performance-monitoring-platform',
    name: 'Cloud Performance Monitoring Platform',
    tagline: 'Comprehensive cloud performance monitoring and optimization',
    price: '$299',
    period: '/month',
    description: 'Advanced cloud performance monitoring platform that provides comprehensive monitoring, alerting, and optimization for cloud applications and infrastructure.',
    features: [
      'Real-time performance monitoring',
      'Multi-cloud performance tracking',
      'AI-powered performance optimization',
      'Custom alerting and notifications',
      'Performance analytics and insights',
      'Integration with monitoring tools',
      'Custom dashboard creation',
      'Performance testing and validation',
      'Automated optimization recommendations',
      'Comprehensive reporting tools'
    ],
    popular: false,
    icon: '📊',
    color: 'from-emerald-600 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/cloud-performance-monitoring-platform',
    marketPosition: 'Competes with DataDog ($15/month), New Relic ($99/month). Our advantage: 60% lower costs and 80% better performance insights.',
    targetAudience: 'DevOps teams, Performance engineers, Cloud architects, Application teams',
    trialDays: 21,
    setupTime: '2-3 hours',
    category: 'Cloud & Performance',
    realService: true,
    technology: ['React, Python, Monitoring tools, AI/ML, Analytics platforms, Performance testing'],
    integrations: ['Major cloud providers, Monitoring tools, CI/CD platforms, Performance testing tools'],
    useCases: ['Performance monitoring, Optimization, Testing and validation, Analytics and insights, Alerting and notifications'],
    roi: 'Users achieve 300% ROI through improved performance and reduced costs.',
    competitors: ['DataDog, New Relic, AppDynamics, Dynatrace'],
    marketSize: '$6.2B application performance monitoring market',
    growthRate: '18% annual growth',
    variant: 'cloud-performance-monitoring-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cloud performance monitoring platform with AI-powered optimization and comprehensive analytics capabilities.',
    launchDate: '2024-09-01',
    customers: 67,
    rating: 4.6,
    reviews: 34
  }
];