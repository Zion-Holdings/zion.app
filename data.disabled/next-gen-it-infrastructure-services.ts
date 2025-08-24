import { ServiceVariant } from '../types/service-variants';

export interface NextGenITInfrastructureService {
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

export const nextGenITInfrastructureServices: NextGenITInfrastructureService[] = [
  {
    id: 'edge-computing-orchestration-platform',
    name: 'Edge Computing Orchestration Platform',
    tagline: 'Distributed edge computing with intelligent workload distribution and optimization',
    price: '$599',
    period: '/month',
    description: 'Advanced edge computing platform that intelligently distributes workloads across edge nodes, optimizes performance, and provides real-time analytics for IoT and edge applications.',
    features: [
      'Intelligent workload distribution across edge nodes',
      'Real-time performance monitoring and optimization',
      'Edge-to-cloud data synchronization',
      'IoT device management and provisioning',
      'Edge security and compliance management',
      'Predictive maintenance and health monitoring',
      'Multi-cloud edge orchestration',
      'Edge analytics and machine learning',
      'Automated scaling and failover'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration-platform',
    marketPosition: 'Enterprise alternative to AWS Greengrass and Azure IoT Edge; adds intelligent orchestration and analytics.',
    targetAudience: 'IoT platform teams, Edge computing specialists, Infrastructure engineers, DevOps teams',
    trialDays: 30,
    setupTime: '5-7 days',
    category: 'Infrastructure & Edge',
    realService: true,
    technology: ['Kubernetes, Docker, Go, Python, React, InfluxDB'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, MQTT, CoAP'],
    useCases: ['IoT applications, Edge analytics, Real-time processing, Distributed computing'],
    roi: 'Reduce latency by 60-80% and infrastructure costs by 30-50%.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge, EdgeX Foundry'],
    marketSize: '$35B+ edge computing market',
    growthRate: '40% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Distributed edge orchestration platform with intelligent routing, monitoring, and management.',
    launchDate: '2025-01-10',
    customers: 67,
    rating: 4.9,
    reviews: 34
  },
  {
    id: 'quantum-ready-security-framework',
    name: 'Quantum-Ready Security Framework',
    tagline: 'Post-quantum cryptography and quantum-resistant security infrastructure',
    price: '$799',
    period: '/month',
    description: 'Future-proof security framework that implements post-quantum cryptography algorithms, quantum-resistant protocols, and advanced threat detection to protect against quantum computing attacks.',
    features: [
      'Post-quantum cryptography algorithms (NIST PQC)',
      'Quantum-resistant key exchange protocols',
      'Advanced threat detection and response',
      'Zero-trust security architecture',
      'Quantum-safe certificate management',
      'Real-time security monitoring',
      'Compliance and audit reporting',
      'API security and rate limiting',
      'Multi-factor authentication'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-ready-security-framework',
    marketPosition: 'Pioneering quantum-resistant security; ahead of traditional security vendors in quantum preparation.',
    targetAudience: 'Security architects, CTOs, Compliance officers, Government agencies',
    trialDays: 45,
    setupTime: '7-10 days',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Go, Rust, Python, React, Node.js, PostgreSQL'],
    integrations: ['Active Directory, LDAP, SAML, OAuth 2.0, OpenID Connect'],
    useCases: ['Government security, Financial services, Healthcare compliance, Critical infrastructure'],
    roi: 'Future-proof security investment with 100% quantum resistance guarantee.',
    competitors: ['Cloudflare, AWS, Microsoft Azure, Google Cloud (limited quantum resistance)'],
    marketSize: '$15B+ quantum security market',
    growthRate: '65% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-resistant security framework with NIST PQC algorithms and zero-trust architecture.',
    launchDate: '2025-01-05',
    customers: 23,
    rating: 5.0,
    reviews: 18
  },
  {
    id: 'ai-powered-infrastructure-monitoring',
    name: 'AI-Powered Infrastructure Monitoring Suite',
    tagline: 'Intelligent infrastructure monitoring with predictive analytics and automated remediation',
    price: '$449',
    period: '/month',
    description: 'Advanced infrastructure monitoring platform that uses AI and machine learning to predict failures, optimize performance, and automatically resolve issues before they impact users.',
    features: [
      'AI-powered anomaly detection and prediction',
      'Automated incident response and remediation',
      'Infrastructure performance optimization',
      'Real-time monitoring and alerting',
      'Predictive maintenance scheduling',
      'Capacity planning and forecasting',
      'Multi-cloud monitoring support',
      'Custom dashboard and reporting',
      'Integration with ITSM tools'
    ],
    popular: true,
    icon: '📊',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-infrastructure-monitoring',
    marketPosition: 'Next-generation alternative to Datadog and New Relic; adds AI-powered automation and prediction.',
    targetAudience: 'DevOps teams, SREs, Infrastructure engineers, IT operations',
    trialDays: 21,
    setupTime: '3-5 days',
    category: 'Monitoring & Observability',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, InfluxDB, Grafana'],
    integrations: ['AWS, Azure, GCP, Kubernetes, Docker, VMware'],
    useCases: ['Proactive monitoring, Performance optimization, Capacity planning, Incident prevention'],
    roi: 'Reduce downtime by 70-90% and operational costs by 40-60%.',
    competitors: ['Datadog, New Relic, Dynatrace, Splunk, Grafana Cloud'],
    marketSize: '$18B+ infrastructure monitoring market',
    growthRate: '25% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered monitoring platform with predictive analytics and automated remediation workflows.',
    launchDate: '2025-01-30',
    customers: 145,
    rating: 4.8,
    reviews: 78
  },
  {
    id: 'serverless-data-pipeline-platform',
    name: 'Serverless Data Pipeline Platform',
    tagline: 'Fully managed data pipelines with automatic scaling and real-time processing',
    price: '$299',
    period: '/month',
    description: 'Serverless data pipeline platform that automatically scales, processes data in real-time, and provides end-to-end data lineage tracking for modern data architectures.',
    features: [
      'Auto-scaling data processing pipelines',
      'Real-time and batch processing support',
      'End-to-end data lineage tracking',
      'Built-in data quality validation',
      'Multi-format data source support',
      'Real-time monitoring and alerting',
      'Integration with data warehouses',
      'Custom transformation functions',
      'Compliance and governance tools'
    ],
    popular: false,
    icon: '🔄',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/serverless-data-pipeline-platform',
    marketPosition: 'Alternative to Apache Airflow and AWS Glue; adds serverless architecture and real-time processing.',
    targetAudience: 'Data engineers, Analytics teams, DevOps engineers, Platform teams',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'Data & Analytics',
    realService: true,
    technology: ['Python, Apache Kafka, Apache Flink, React, Node.js, ClickHouse'],
    integrations: ['Snowflake, BigQuery, Redshift, Databricks, Apache Spark'],
    useCases: ['Real-time analytics, Data integration, ETL/ELT pipelines, Data streaming'],
    roi: 'Reduce data processing costs by 50-70% and development time by 60-80%.',
    competitors: ['Apache Airflow, AWS Glue, Azure Data Factory, Google Cloud Dataflow'],
    marketSize: '$12B+ data pipeline market',
    growthRate: '30% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Serverless data processing platform with auto-scaling, real-time capabilities, and data lineage.',
    launchDate: '2025-02-10',
    customers: 89,
    rating: 4.7,
    reviews: 52
  },
  {
    id: 'multi-cloud-governance-platform',
    name: 'Multi-Cloud Governance Platform',
    tagline: 'Unified governance, compliance, and cost optimization across multiple cloud providers',
    price: '$649',
    period: '/month',
    description: 'Comprehensive multi-cloud governance platform that provides unified policy management, cost optimization, compliance monitoring, and security controls across AWS, Azure, and Google Cloud.',
    features: [
      'Unified policy management across clouds',
      'Real-time cost monitoring and optimization',
      'Compliance and security controls',
      'Resource inventory and tracking',
      'Automated governance workflows',
      'Multi-cloud cost allocation',
      'Security posture assessment',
      'Compliance reporting and auditing',
      'Integration with existing tools'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-400',
    link: 'https://ziontechgroup.com/multi-cloud-governance-platform',
    marketPosition: 'Enterprise multi-cloud governance solution; comparable to CloudHealth and Flexera.',
    targetAudience: 'Cloud architects, FinOps teams, Security teams, Compliance officers',
    trialDays: 30,
    setupTime: '5-7 days',
    category: 'Cloud & Governance',
    realService: true,
    technology: ['Python, React, Node.js, PostgreSQL, Redis, Terraform'],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Terraform, Ansible'],
    useCases: ['Multi-cloud management, Cost optimization, Compliance governance, Security controls'],
    roi: 'Reduce cloud costs by 20-40% and governance overhead by 50-70%.',
    competitors: ['CloudHealth, Flexera, CloudCheckr, Turbot, Cloud Custodian'],
    marketSize: '$8B+ cloud governance market',
    growthRate: '35% YoY',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-cloud governance platform with unified policies, cost optimization, and compliance monitoring.',
    launchDate: '2025-01-15',
    customers: 112,
    rating: 4.8,
    reviews: 67
  }
];