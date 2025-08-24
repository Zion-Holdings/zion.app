import { ServiceVariant } from '../types/service-variants';

export interface AdvancedITInfrastructurePlatform {
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

export const advancedITInfrastructurePlatforms2025: AdvancedITInfrastructurePlatform[] = [
  // Multi-Cloud Infrastructure Orchestrator
  {
    id: 'multi-cloud-infrastructure-orchestrator',
    name: 'Multi-Cloud Infrastructure Orchestrator',
    tagline: 'Unified management across AWS, Azure, GCP, and private clouds',
    price: '$699',
    period: '/month',
    description: 'Advanced multi-cloud management platform that provides unified orchestration, cost optimization, and governance across all major cloud providers and private infrastructure.',
    features: [
      'Unified dashboard for AWS, Azure, GCP, and private clouds',
      'AI-powered cost optimization and resource management',
      'Automated workload balancing and migration',
      'Centralized security and compliance management',
      'Real-time performance monitoring and alerting',
      'Advanced networking and connectivity management',
      'Automated disaster recovery and backup',
      'Multi-cloud governance and policy enforcement',
      'Integration with existing cloud tools and services',
      'Comprehensive cost analytics and reporting'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/multi-cloud-orchestrator',
    marketPosition: 'Competes with HashiCorp Terraform ($0.20/hour), CloudBolt ($custom), Flexera ($custom). Our advantage: AI automation reduces cloud costs by 35% and improves resource utilization.',
    targetAudience: 'Enterprise companies, Multi-cloud organizations, DevOps teams, Cloud architects, IT operations teams',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Cloud Infrastructure & Management',
    realService: true,
    technology: ['Go, Python, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    integrations: ['AWS APIs, Azure APIs, GCP APIs, Terraform, Ansible, Jenkins, GitLab'],
    useCases: ['Multi-cloud management, Cost optimization, Resource orchestration, Security governance, Performance monitoring'],
    roi: 'Organizations achieve 400% ROI through reduced cloud costs and improved operational efficiency.',
    competitors: ['HashiCorp, CloudBolt, Flexera, RightScale, Scalr'],
    marketSize: '$83.5B Cloud Management market',
    growthRate: '20% annual growth',
    variant: 'multi-cloud-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade multi-cloud orchestration platform with AI algorithms for cost optimization, resource management, and automated governance.',
    launchDate: '2024-10-15',
    customers: 156,
    rating: 4.8,
    reviews: 234
  },

  // Edge Computing Intelligence Platform
  {
    id: 'edge-computing-intelligence-platform',
    name: 'Edge Computing Intelligence Platform',
    tagline: 'AI-powered edge computing optimization and management',
    price: '$549',
    period: '/month',
    description: 'Intelligent edge computing platform that optimizes distributed computing resources, reduces latency, and provides real-time analytics at the network edge.',
    features: [
      'AI-powered edge resource optimization and allocation',
      'Real-time latency monitoring and optimization',
      'Automated edge workload distribution',
      'Advanced edge security and threat detection',
      'Edge analytics and real-time data processing',
      'Multi-location edge infrastructure management',
      'Automated edge device provisioning and management',
      'Edge-to-cloud data synchronization',
      'Advanced edge networking and connectivity',
      'Comprehensive edge performance analytics'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/edge-computing-intelligence',
    marketPosition: 'Competes with AWS Greengrass ($0.16/hour), Azure IoT Edge ($custom), Google Cloud IoT Edge ($custom). Our advantage: AI optimization reduces edge latency by 60% and improves resource efficiency.',
    targetAudience: 'IoT companies, Edge computing providers, Telecommunications, Manufacturing, Healthcare organizations',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Edge Computing & IoT',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, MQTT, CoAP, HTTP/2, WebSocket'],
    useCases: ['Edge computing optimization, IoT device management, Real-time analytics, Low-latency applications, Distributed computing'],
    roi: 'IoT companies achieve 500% ROI through improved edge performance and reduced infrastructure costs.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge, EdgeX Foundry, KubeEdge'],
    marketSize: '$15.7B Edge Computing market',
    growthRate: '37% annual growth',
    variant: 'edge-computing-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced edge computing platform with AI algorithms for resource optimization, latency reduction, and intelligent workload distribution.',
    launchDate: '2024-11-20',
    customers: 89,
    rating: 4.7,
    reviews: 67
  },

  // Intelligent Network Automation Platform
  {
    id: 'intelligent-network-automation-platform',
    name: 'Intelligent Network Automation Platform',
    tagline: 'AI-powered network management and automation',
    price: '$399',
    period: '/month',
    description: 'Advanced network automation platform that uses AI to optimize network performance, detect issues proactively, and automate network operations and troubleshooting.',
    features: [
      'AI-powered network performance optimization',
      'Automated network issue detection and resolution',
      'Intelligent traffic routing and load balancing',
      'Advanced network security and threat prevention',
      'Automated network configuration management',
      'Real-time network monitoring and analytics',
      'Predictive network maintenance and planning',
      'Multi-vendor network device management',
      'Advanced network troubleshooting automation',
      'Comprehensive network health dashboard'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-teal-600 to-green-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/intelligent-network-automation',
    marketPosition: 'Competes with Cisco DNA Center ($custom), Aruba Central ($custom), Juniper Mist ($custom). Our advantage: AI automation reduces network downtime by 85% and improves performance by 40%.',
    targetAudience: 'Network administrators, IT operations teams, Telecommunications, Enterprise companies, Managed service providers',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Network Management & Automation',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker'],
    integrations: ['Cisco, Aruba, Juniper, HP, Dell, VMware, Microsoft, Linux'],
    useCases: ['Network automation, Performance optimization, Issue detection, Security management, Configuration management'],
    roi: 'Network teams achieve 300% ROI through reduced downtime and improved network performance.',
    competitors: ['Cisco DNA Center, Aruba Central, Juniper Mist, SolarWinds, PRTG'],
    marketSize: '$12.8B Network Management market',
    growthRate: '15% annual growth',
    variant: 'network-automation-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade network automation platform with AI algorithms for performance optimization, issue detection, and automated troubleshooting.',
    launchDate: '2024-09-30',
    customers: 234,
    rating: 4.8,
    reviews: 189
  }
];