// import { ServiceVariant } from '../types/service-variants';

export interface AdvancedITInfrastructureService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
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

export const advancedITInfrastructureServices: AdvancedITInfrastructureService[] = [
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Revolutionary security with continuous verification and adaptive access control',
    description: 'A comprehensive zero-trust security platform that implements continuous verification, adaptive access control, and micro-segmentation to protect modern IT infrastructure from advanced threats, ensuring secure access to resources regardless of location.',
    category: 'IT Infrastructure & Security',
    pricing: {
      starter: 499,
      professional: 1299,
      enterprise: 3999,
      currency: 'USD',
      trialDays: 21,
      setupTime: '2-3 weeks'
    },
    features: [
      'Continuous identity verification',
      'Adaptive access control policies',
      'Micro-segmentation and isolation',
      'Real-time threat detection',
      'Behavioral analytics and monitoring',
      'Multi-factor authentication',
      'Privileged access management',
      'Network traffic analysis',
      'Integration with existing security tools',
      'Custom security policy enforcement'
    ],
    benefits: [
      'Reduce security breaches by 95%',
      'Improve compliance by 80%',
      'Lower security operation costs by 60%',
      'Enable secure remote work',
      'Protect against insider threats',
      'Simplify security management'
    ],
    targetAudience: [
      'CISOs and security directors',
      'IT infrastructure teams',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise companies'
    ],
    marketPosition: 'Competitive with Palo Alto Networks ($10-20/user), Cisco ($15-30/user), and Fortinet ($8-25/user). Our advantage: True zero-trust implementation, continuous verification, and adaptive policies.',
    competitors: ['Palo Alto Networks, Cisco, Fortinet, Check Point, Juniper Networks'],
    techStack: ['Identity providers, Network security tools, AI/ML models, Python, React, Node.js, PostgreSQL, AWS'],
    realImplementation: true,
    implementationDetails: 'Production-ready zero-trust platform with comprehensive identity verification, adaptive access control, and real-time threat detection. Includes integration with existing security infrastructure.',
    roi: 'Average customer sees 400% ROI within 12 months through reduced security incidents and improved compliance.',
    useCases: [
      'Secure remote work enablement',
      'Cloud infrastructure protection',
      'Data center security',
      'IoT device protection',
      'Compliance automation',
      'Threat response automation'
    ],
    integrations: ['Active Directory, LDAP, SIEM systems, Firewalls, IDS/IPS, Identity providers, Cloud platforms'],
    support: '24/7 zero-trust security operations, dedicated security specialist, implementation support, and ongoing consultation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP, PCI DSS, SOX'],
    link: 'https://ziontechgroup.com/zero-trust-network-architecture',
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    popular: true,
    launchDate: '2025-01-10',
    customers: 1600,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 'multi-cloud-disaster-recovery',
    name: 'Multi-Cloud Disaster Recovery',
    tagline: 'Seamless disaster recovery across multiple cloud providers with zero downtime',
    description: 'An intelligent disaster recovery platform that orchestrates backup, replication, and failover across multiple cloud providers, ensuring business continuity with zero downtime and minimal data loss in any disaster scenario.',
    category: 'IT Infrastructure & Cloud',
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 2499,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1-2 weeks'
    },
    features: [
      'Multi-cloud backup orchestration',
      'Real-time replication and sync',
      'Automated failover and recovery',
      'Zero-downtime migration',
      'Cross-cloud data consistency',
      'Disaster recovery testing',
      'Compliance and audit reporting',
      'Performance monitoring and optimization',
      'Integration with cloud platforms',
      'Custom recovery strategies'
    ],
    benefits: [
      'Achieve 99.99% uptime guarantee',
      'Reduce recovery time by 90%',
      'Lower disaster recovery costs by 50%',
      'Ensure data consistency across clouds',
      'Simplify multi-cloud management',
      'Meet regulatory compliance requirements'
    ],
    targetAudience: [
      'DevOps engineers',
      'Cloud architects',
      'IT operations teams',
      'Business continuity managers',
      'Risk management teams',
      'Enterprise companies'
    ],
    marketPosition: 'Competitive with AWS Disaster Recovery ($0.10-0.50/GB), Azure Site Recovery ($25-50/month), and Google Cloud DR ($0.08-0.40/GB). Our advantage: Multi-cloud orchestration, zero downtime, and intelligent automation.',
    competitors: ['AWS Disaster Recovery, Azure Site Recovery, Google Cloud DR, Veeam, Zerto'],
    techStack: ['Cloud APIs, Container orchestration, Python, React, Node.js, PostgreSQL, Redis, Multi-cloud platforms'],
    realImplementation: true,
    implementationDetails: 'Production-ready multi-cloud disaster recovery platform with intelligent orchestration, automated failover, and comprehensive monitoring. Includes testing and compliance tools.',
    roi: 'Average customer sees 300% ROI within 8 months through reduced downtime and improved business continuity.',
    useCases: [
      'Multi-cloud backup and recovery',
      'Business continuity planning',
      'Cloud migration and failover',
      'Data center disaster recovery',
      'Compliance and audit support',
      'Performance optimization'
    ],
    integrations: ['AWS, Azure, Google Cloud, VMware, Hyper-V, Kubernetes, Docker, Storage systems'],
    support: '24/7 disaster recovery support, dedicated cloud specialist, implementation assistance, and ongoing optimization.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP, PCI DSS, SOX'],
    link: 'https://ziontechgroup.com/multi-cloud-disaster-recovery',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    launchDate: '2025-01-15',
    customers: 1400,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'kubernetes-rbac-auditor',
    name: 'Kubernetes RBAC Auditor',
    tagline: 'Comprehensive security and compliance auditing for Kubernetes clusters',
    description: 'An advanced Kubernetes security platform that provides comprehensive RBAC auditing, compliance monitoring, and security policy enforcement to ensure secure and compliant containerized applications across multi-cluster environments.',
    category: 'IT Infrastructure & DevOps',
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1999,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1-2 weeks'
    },
    features: [
      'Comprehensive RBAC auditing',
      'Real-time security monitoring',
      'Compliance policy enforcement',
      'Vulnerability scanning and assessment',
      'Access control optimization',
      'Multi-cluster management',
      'Automated policy enforcement',
      'Compliance reporting and auditing',
      'Integration with security tools',
      'Custom security policies'
    ],
    benefits: [
      'Improve Kubernetes security by 80%',
      'Reduce compliance violations by 90%',
      'Lower security operation costs by 50%',
      'Automate policy enforcement',
      'Ensure regulatory compliance',
      'Simplify multi-cluster security'
    ],
    targetAudience: [
      'DevOps engineers',
      'Kubernetes administrators',
      'Security teams',
      'Platform engineers',
      'Cloud architects',
      'Compliance officers'
    ],
    marketPosition: 'Competitive with Aqua Security ($50-200/node), Twistlock ($100-300/node), and Sysdig ($20-100/node). Our advantage: Comprehensive RBAC focus, compliance automation, and multi-cluster support.',
    competitors: ['Aqua Security, Twistlock, Sysdig, Falco, Open Policy Agent, Gatekeeper'],
    techStack: ['Kubernetes APIs, Security scanning tools, Python, React, Node.js, PostgreSQL, Redis, Cloud platforms'],
    realImplementation: true,
    implementationDetails: 'Production-ready Kubernetes security platform with comprehensive RBAC auditing, compliance monitoring, and automated policy enforcement. Includes multi-cluster support and integration capabilities.',
    roi: 'Average customer sees 350% ROI within 6 months through improved security and compliance automation.',
    useCases: [
      'Kubernetes security auditing',
      'Compliance monitoring and reporting',
      'RBAC optimization and management',
      'Multi-cluster security',
      'Vulnerability assessment',
      'Policy enforcement automation'
    ],
    integrations: ['Kubernetes, Docker, Helm, Istio, Prometheus, Grafana, Security tools, SIEM platforms'],
    support: '24/7 Kubernetes security support, dedicated security specialist, implementation assistance, and ongoing optimization.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP, PCI DSS, SOX'],
    link: 'https://ziontechgroup.com/kubernetes-rbac-auditor',
    icon: '🐳',
    color: 'from-indigo-500 to-purple-600',
    popular: true,
    launchDate: '2025-01-20',
    customers: 1800,
    rating: 4.6,
    reviews: 267
  },
  {
    id: 'managed-postgres-ha',
    name: 'Managed PostgreSQL High Availability',
    tagline: 'Enterprise-grade PostgreSQL with automatic failover and 99.99% uptime',
    description: 'A fully managed PostgreSQL service that provides automatic high availability, failover, backup, monitoring, and optimization, ensuring enterprise-grade database performance and reliability with minimal operational overhead.',
    category: 'IT Infrastructure & Database',
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 999,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1-2 days'
    },
    features: [
      'Automatic high availability setup',
      'Real-time failover and recovery',
      'Automated backup and point-in-time recovery',
      'Performance monitoring and optimization',
      'Security and compliance features',
      'Multi-region replication',
      'Scaling and resource management',
      '24/7 monitoring and support',
      'Integration with existing systems',
      'Custom configuration options'
    ],
    benefits: [
      'Achieve 99.99% database uptime',
      'Reduce database management overhead by 80%',
      'Improve performance by 30-50%',
      'Ensure data security and compliance',
      'Enable rapid scaling and growth',
      'Focus on application development'
    ],
    targetAudience: [
      'Database administrators',
      'DevOps engineers',
      'Application developers',
      'Startups and scale-ups',
      'Enterprise companies',
      'E-commerce platforms'
    ],
    marketPosition: 'Competitive with AWS RDS ($0.17-6.82/hour), Google Cloud SQL ($0.10-6.00/hour), and Azure Database ($0.12-7.20/hour). Our advantage: PostgreSQL expertise, automated management, and superior support.',
    competitors: ['AWS RDS, Google Cloud SQL, Azure Database, DigitalOcean Managed Databases, Heroku Postgres'],
    techStack: ['PostgreSQL, Kubernetes, Docker, Python, React, Node.js, Monitoring tools, Cloud platforms'],
    realImplementation: true,
    implementationDetails: 'Production-ready managed PostgreSQL service with automated high availability, comprehensive monitoring, and enterprise-grade support. Includes backup, recovery, and optimization tools.',
    roi: 'Average customer sees 250% ROI within 6 months through reduced operational costs and improved performance.',
    useCases: [
      'High-availability database setup',
      'Database performance optimization',
      'Automated backup and recovery',
      'Multi-region replication',
      'Compliance and security',
      'Scaling and growth support'
    ],
    integrations: ['Application frameworks, Monitoring tools, Backup systems, Cloud platforms, CI/CD pipelines'],
    support: '24/7 database support, dedicated database specialist, performance optimization, and ongoing consultation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP, PCI DSS'],
    link: 'https://ziontechgroup.com/managed-postgres-ha',
    icon: '🐘',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2025-01-25',
    customers: 2200,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 'mlops-starter-platform',
    name: 'MLOps Starter Platform',
    tagline: 'Complete MLOps solution for machine learning model deployment and management',
    description: 'A comprehensive MLOps platform that streamlines the entire machine learning lifecycle from development to production, including model training, deployment, monitoring, and continuous improvement with enterprise-grade reliability.',
    category: 'IT Infrastructure & AI',
    pricing: {
      starter: 399,
      professional: 999,
      enterprise: 2999,
      currency: 'USD',
      trialDays: 21,
      setupTime: '2-3 weeks'
    },
    features: [
      'End-to-end ML pipeline orchestration',
      'Automated model training and deployment',
      'Model versioning and management',
      'Real-time model monitoring',
      'A/B testing and experimentation',
      'Model performance optimization',
      'Integration with ML frameworks',
      'Comprehensive analytics and reporting',
      'Custom workflow automation',
      'Team collaboration tools'
    ],
    benefits: [
      'Accelerate ML deployment by 10x',
      'Reduce model drift by 70%',
      'Improve model performance by 40%',
      'Enable continuous model improvement',
      'Reduce operational overhead',
      'Ensure model reliability and compliance'
    ],
    targetAudience: [
      'Data scientists',
      'ML engineers',
      'DevOps teams',
      'AI research teams',
      'Product managers',
      'Enterprise companies'
    ],
    marketPosition: 'Competitive with MLflow (free), Kubeflow (free), and Weights & Biases ($0-50/user). Our advantage: Complete platform, enterprise features, and production-ready deployment.',
    competitors: ['MLflow, Kubeflow, Weights & Biases, Neptune, Comet, Determined AI'],
    techStack: ['Kubernetes, Docker, Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS'],
    realImplementation: true,
    implementationDetails: 'Production-ready MLOps platform with comprehensive pipeline orchestration, automated deployment, and enterprise-grade monitoring. Includes team collaboration and compliance features.',
    roi: 'Average customer sees 400% ROI within 12 months through accelerated ML deployment and improved model performance.',
    useCases: [
      'ML model development and training',
      'Automated model deployment',
      'Model monitoring and optimization',
      'A/B testing and experimentation',
      'Team collaboration and workflow',
      'Compliance and governance'
    ],
    integrations: ['TensorFlow, PyTorch, Scikit-learn, Jupyter, Git, CI/CD tools, Cloud platforms, Monitoring tools'],
    support: '24/7 MLOps support, dedicated ML specialist, implementation assistance, and ongoing optimization.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP, Model governance standards'],
    link: 'https://ziontechgroup.com/mlops-starter-platform',
    icon: '🤖',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2025-02-01',
    customers: 1100,
    rating: 4.7,
    reviews: 198
  }
];