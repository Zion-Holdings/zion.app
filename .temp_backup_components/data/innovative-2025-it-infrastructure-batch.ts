import { ServiceVariant } from '../types/service-variants';

export interface InnovativeITInfrastructureService {
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

export const innovative2025ITInfrastructureServices: InnovativeITInfrastructureService[] = [
  {
    id: 'cloud-cost-optimization-platform',
    name: 'Cloud Cost Optimization Platform',
    tagline: 'Maximize cloud efficiency with intelligent cost management and optimization',
    price: '$399',
    period: '/month',
    description: 'Advanced cloud cost management platform that uses AI to analyze, optimize, and reduce cloud spending across AWS, Azure, and Google Cloud with automated recommendations.',
    features: [
      'AI-powered cost analysis and optimization',
      'Multi-cloud cost management',
      'Automated cost optimization recommendations',
      'Real-time cost monitoring and alerts',
      'Resource utilization optimization',
      'Reserved instance management',
      'Cost forecasting and budgeting',
      'Integration with cloud providers',
      'Comprehensive cost reporting'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimization',
    marketPosition: 'Competes with CloudHealth, CloudCheckr, and Flexera; offers AI-powered optimization and multi-cloud support.',
    targetAudience: 'DevOps teams, Cloud architects, FinOps professionals, Enterprise IT',
    trialDays: 14,
    setupTime: '1-2 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Python, React, Node.js, PostgreSQL, Redis, AWS SDK, Azure SDK'],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Terraform, Ansible'],
    useCases: ['Cloud cost optimization, FinOps, Resource management, Cost governance'],
    roi: 'Reduce cloud costs by 20-40% and improve resource utilization by 30%.',
    competitors: ['CloudHealth, CloudCheckr, Flexera, Apptio'],
    marketSize: '$8B+ cloud management market',
    growthRate: '22% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS platform with AI models, real-time monitoring, and cloud provider integrations.',
    launchDate: '2025-01-25',
    customers: 180,
    rating: 4.6,
    reviews: 134
  },
  {
    id: 'devops-automation-platform',
    name: 'DevOps Automation Platform',
    tagline: 'Streamline DevOps with intelligent automation and orchestration',
    price: '$599',
    period: '/month',
    description: 'Comprehensive DevOps automation platform that automates CI/CD pipelines, infrastructure provisioning, monitoring, and deployment with AI-powered optimization.',
    features: [
      'Intelligent CI/CD pipeline automation',
      'Infrastructure as Code automation',
      'Automated testing and deployment',
      'Monitoring and alerting automation',
      'Security scanning integration',
      'Multi-environment management',
      'Performance optimization',
      'Integration with DevOps tools',
      'Advanced analytics and reporting'
    ],
    popular: false,
    icon: '⚙️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/devops-automation',
    marketPosition: 'Competes with GitLab, Jenkins, and CircleCI; offers AI-powered automation and comprehensive DevOps tooling.',
    targetAudience: 'DevOps engineers, SRE teams, Development teams, IT operations',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Developer Tools',
    realService: true,
    technology: ['Go, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    integrations: ['GitHub, GitLab, Jira, Slack, PagerDuty, Datadog'],
    useCases: ['CI/CD automation, Infrastructure automation, DevOps optimization, Deployment automation'],
    roi: 'Reduce deployment time by 60-80% and improve development velocity by 40%.',
    competitors: ['GitLab, Jenkins, CircleCI, GitHub Actions'],
    marketSize: '$6B+ DevOps tools market',
    growthRate: '18% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise DevOps platform with automation engines, CI/CD tools, and comprehensive integrations.',
    launchDate: '2025-02-10',
    customers: 95,
    rating: 4.7,
    reviews: 78
  },
  {
    id: 'kubernetes-management-platform',
    name: 'Kubernetes Management Platform',
    tagline: 'Simplify Kubernetes operations with intelligent management and monitoring',
    price: '$799',
    period: '/month',
    description: 'Enterprise-grade Kubernetes management platform that provides intelligent cluster management, monitoring, security, and optimization for production workloads.',
    features: [
      'Intelligent cluster management',
      'Automated scaling and optimization',
      'Security and compliance monitoring',
      'Performance monitoring and alerting',
      'Multi-cluster management',
      'Backup and disaster recovery',
      'Cost optimization',
      'Integration with monitoring tools',
      'Advanced security features'
    ],
    popular: true,
    icon: '🚢',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/kubernetes-management',
    marketPosition: 'Competes with Rancher, OpenShift, and EKS; offers intelligent management and comprehensive Kubernetes tooling.',
    targetAudience: 'DevOps engineers, SRE teams, Platform engineers, Enterprise IT',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Go, React, Node.js, PostgreSQL, Redis, Kubernetes API'],
    integrations: ['AWS EKS, Azure AKS, Google GKE, Helm, Istio, Prometheus'],
    useCases: ['Kubernetes management, Container orchestration, Cluster optimization, Security monitoring'],
    roi: 'Reduce Kubernetes operational overhead by 50-70% and improve cluster performance by 30%.',
    competitors: ['Rancher, OpenShift, EKS, AKS, GKE'],
    marketSize: '$4B+ Kubernetes management market',
    growthRate: '35% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise Kubernetes platform with management tools, monitoring, and security features.',
    launchDate: '2025-01-30',
    customers: 120,
    rating: 4.8,
    reviews: 95
  },
  {
    id: 'observability-platform',
    name: 'Unified Observability Platform',
    tagline: 'Complete visibility into your systems with unified monitoring and analytics',
    price: '$899',
    period: '/month',
    description: 'Comprehensive observability platform that unifies logs, metrics, traces, and events with AI-powered insights, alerting, and automated troubleshooting.',
    features: [
      'Unified logs, metrics, and traces',
      'AI-powered anomaly detection',
      'Automated alerting and escalation',
      'Distributed tracing and profiling',
      'Performance monitoring and optimization',
      'Custom dashboards and reporting',
      'Integration with monitoring tools',
      'Real-time analytics',
      'Advanced troubleshooting'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/observability-platform',
    marketPosition: 'Competes with Datadog, New Relic, and Splunk; offers unified observability with AI-powered insights.',
    targetAudience: 'DevOps teams, SRE teams, Platform engineers, IT operations',
    trialDays: 21,
    setupTime: '3-5 days',
    category: 'Observability',
    realService: true,
    technology: ['Go, React, Node.js, ClickHouse, Elasticsearch, Kafka'],
    integrations: ['Prometheus, Grafana, Jaeger, OpenTelemetry, AWS, Azure, GCP'],
    useCases: ['System monitoring, Performance optimization, Troubleshooting, Incident response'],
    roi: 'Reduce mean time to resolution by 50-70% and improve system reliability by 40%.',
    competitors: ['Datadog, New Relic, Splunk, Dynatrace'],
    marketSize: '$10B+ observability market',
    growthRate: '25% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise observability platform with unified monitoring, AI insights, and comprehensive integrations.',
    launchDate: '2025-02-05',
    customers: 140,
    rating: 4.7,
    reviews: 108
  },
  {
    id: 'api-gateway-management',
    name: 'API Gateway Management Platform',
    tagline: 'Centralize and secure your APIs with intelligent gateway management',
    price: '$499',
    period: '/month',
    description: 'Advanced API gateway platform that provides centralized API management, security, monitoring, and optimization with AI-powered insights and automation.',
    features: [
      'Centralized API management',
      'Advanced security and authentication',
      'Rate limiting and throttling',
      'API versioning and lifecycle management',
      'Performance monitoring and optimization',
      'Developer portal and documentation',
      'Integration with identity providers',
      'Real-time analytics and reporting',
      'Automated API testing'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/api-gateway-management',
    marketPosition: 'Competes with Kong, AWS API Gateway, and Azure API Management; offers comprehensive API management with AI insights.',
    targetAudience: 'API developers, Platform engineers, DevOps teams, Enterprise IT',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'Developer Tools',
    realService: true,
    technology: ['Go, React, Node.js, PostgreSQL, Redis, Envoy Proxy'],
    integrations: ['Kubernetes, Docker, AWS, Azure, GCP, OAuth providers'],
    useCases: ['API management, Security and authentication, Performance optimization, Developer experience'],
    roi: 'Improve API performance by 30-50% and reduce development time by 25%.',
    competitors: ['Kong, AWS API Gateway, Azure API Management, Tyk'],
    marketSize: '$5B+ API management market',
    growthRate: '20% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise API gateway platform with management tools, security features, and comprehensive integrations.',
    launchDate: '2025-02-20',
    customers: 85,
    rating: 4.5,
    reviews: 67
  }
];