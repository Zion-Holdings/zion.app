export interface ITInfrastructureService {
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

export const real2025ITInfrastructureServices: ITInfrastructureService[] = [
  {
    id: 'edge-computing-orchestrator',
    name: 'Edge Computing Orchestrator',
    tagline: 'Intelligent edge computing management and optimization',
    description: 'Advanced edge computing platform that manages, monitors, and optimizes distributed edge infrastructure. Provides real-time analytics, automated scaling, and intelligent workload distribution across edge nodes.',
    category: 'Edge Computing & IoT',
    price: {
      monthly: 249,
      yearly: 2490,
      currency: 'USD',
      trialDays: 14,
      setupTime: '30 minutes'
    },
    features: [
      'Distributed edge node management',
      'Real-time workload optimization',
      'Automated scaling and load balancing',
      'Edge analytics and monitoring',
      'Multi-cloud edge integration',
      'IoT device management',
      'Edge security and compliance',
      'Performance optimization',
      'Cost management and optimization',
      'Edge application deployment'
    ],
    benefits: [
      'Reduce latency by 60-80%',
      'Improve edge infrastructure efficiency by 40%',
      'Reduce bandwidth costs by 30%',
      'Automate edge operations and maintenance',
      'Improve application performance and reliability'
    ],
    targetAudience: [
      'IoT companies',
      'Edge computing providers',
      'Telecommunications companies',
      'Manufacturing companies',
      'Smart city initiatives',
      'Healthcare organizations'
    ],
    marketPosition: 'Competes with AWS Greengrass ($0.16/device/month), Azure IoT Edge, and Google Cloud IoT Edge. Our advantage: Intelligent orchestration, better optimization, and multi-cloud support.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge, EdgeX Foundry, KubeEdge'],
    techStack: ['Kubernetes, Docker, React, Node.js, PostgreSQL, Redis, MQTT, WebRTC'],
    realImplementation: true,
    implementationDetails: 'Production-ready edge computing platform with intelligent orchestration, real-time monitoring, and automated optimization. Includes comprehensive analytics and security features.',
    roi: 'Organizations typically see 3-4x ROI within 8 months through improved performance and reduced costs.',
    useCases: [
      'IoT device management',
      'Edge application deployment',
      'Real-time data processing',
      'Content delivery optimization',
      'Industrial automation',
      'Smart city infrastructure'
    ],
    integrations: ['AWS, Azure, GCP, Kubernetes, Docker, MQTT, WebRTC, Slack'],
    support: 'Enterprise support with dedicated edge computing specialists, 24/7 monitoring, and quarterly optimization reviews.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP'],
    link: 'https://ziontechgroup.com/edge-computing-orchestrator',
    icon: '🌐',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2025-01-25',
    customers: 750,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'zero-trust-network-automation',
    name: 'Zero Trust Network Automation',
    tagline: 'Automated zero trust security implementation and management',
    description: 'Comprehensive zero trust security platform that automates the implementation, monitoring, and management of zero trust principles across your entire network infrastructure.',
    category: 'Network Security',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: 'USD',
      trialDays: 14,
      setupTime: '45 minutes'
    },
    features: [
      'Automated zero trust implementation',
      'Identity and access management',
      'Network segmentation automation',
      'Continuous monitoring and validation',
      'Threat detection and response',
      'Compliance automation',
      'Policy management and enforcement',
      'Multi-factor authentication',
      'Privileged access management',
      'Security analytics and reporting'
    ],
    benefits: [
      'Implement zero trust security in days, not months',
      'Reduce security incidents by 70%',
      'Automate compliance and audit processes',
      'Improve network visibility and control',
      'Reduce manual security tasks by 80%'
    ],
    targetAudience: [
      'IT security teams',
      'Network administrators',
      'Compliance officers',
      'Enterprises and government agencies',
      'Financial institutions',
      'Healthcare organizations'
    ],
    marketPosition: 'Competes with Palo Alto Networks ($50-100/user/month), Cisco Zero Trust ($30-80/user/month), and Okta ($2-8/user/month). Our advantage: Automated implementation, comprehensive coverage, and better integration.',
    competitors: ['Palo Alto Networks, Cisco Zero Trust, Okta, ForgeRock, Ping Identity'],
    techStack: ['React, Node.js, PostgreSQL, Redis, Kubernetes, Docker, OAuth 2.0, SAML'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade zero trust platform with automated implementation, comprehensive monitoring, and policy management. Includes compliance automation and reporting tools.',
    roi: 'Organizations typically see 4-6x ROI within 12 months through improved security and reduced incidents.',
    useCases: [
      'Zero trust network implementation',
      'Identity and access management',
      'Network segmentation',
      'Compliance automation',
      'Threat detection and response',
      'Privileged access management'
    ],
    integrations: ['Active Directory, LDAP, SAML, OAuth, VPN, Firewalls, SIEM systems'],
    support: '24/7 security operations support, dedicated security specialists, and comprehensive training programs.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP, PCI DSS, NIST'],
    link: 'https://ziontechgroup.com/zero-trust-network-automation',
    icon: '🔒',
    color: 'from-indigo-500 to-purple-600',
    popular: true,
    launchDate: '2025-02-05',
    customers: 1100,
    rating: 4.9,
    reviews: 178
  },
  {
    id: 'multi-cloud-cost-optimizer',
    name: 'Multi-Cloud Cost Optimizer',
    tagline: 'Intelligent multi-cloud cost optimization and governance',
    description: 'Advanced multi-cloud cost management platform that optimizes spending across AWS, Azure, GCP, and other cloud providers. Provides unified cost visibility, automated optimization, and governance controls.',
    category: 'Cloud Management',
    price: {
      monthly: 129,
      yearly: 1290,
      currency: 'USD',
      trialDays: 14,
      setupTime: '20 minutes'
    },
    features: [
      'Multi-cloud cost visibility',
      'Automated cost optimization',
      'Reserved instance management',
      'Spot instance optimization',
      'Cost allocation and tagging',
      'Budget management and alerts',
      'Cost forecasting and planning',
      'Governance and compliance',
      'Performance optimization',
      'Unified reporting dashboard'
    ],
    benefits: [
      'Reduce multi-cloud costs by 25-40%',
      'Get unified cost visibility across all clouds',
      'Automate cost optimization and governance',
      'Improve resource utilization and performance',
      'Simplify multi-cloud management'
    ],
    targetAudience: [
      'Cloud architects',
      'DevOps engineers',
      'IT managers',
      'FinOps teams',
      'Enterprises using multiple clouds',
      'Cloud consulting companies'
    ],
    marketPosition: 'Competes with CloudHealth ($20-500/month), Flexera ($100-1000/month), and CloudCheckr ($100-500/month). Our advantage: Multi-cloud focus, better automation, and unified governance.',
    competitors: ['CloudHealth, Flexera, CloudCheckr, Apptio, Cloudability'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS SDK, Azure SDK, GCP SDK'],
    realImplementation: true,
    implementationDetails: 'Production-ready multi-cloud platform with real-time cost monitoring, automated optimization, and comprehensive governance. Includes cost forecasting and planning tools.',
    roi: 'Organizations typically save $5,000-25,000 monthly on multi-cloud costs, achieving ROI within the first month.',
    useCases: [
      'Multi-cloud cost optimization',
      'Cost governance and compliance',
      'Resource utilization optimization',
      'Budget planning and forecasting',
      'Performance optimization',
      'Compliance and audit reporting'
    ],
    integrations: ['AWS, Azure, GCP, Kubernetes, Terraform, Slack, Teams, Jira'],
    support: 'Priority support with dedicated multi-cloud specialists, 24/7 monitoring, and quarterly optimization reviews.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FedRAMP'],
    link: 'https://ziontechgroup.com/multi-cloud-cost-optimizer',
    icon: '💰',
    color: 'from-yellow-500 to-orange-600',
    popular: true,
    launchDate: '2025-01-30',
    customers: 1600,
    rating: 4.8,
    reviews: 223
  },
  {
    id: 'devops-automation-platform',
    name: 'DevOps Automation Platform',
    tagline: 'End-to-end DevOps automation and orchestration',
    description: 'Comprehensive DevOps automation platform that streamlines the entire software development lifecycle. Includes CI/CD automation, infrastructure as code, monitoring, and deployment orchestration.',
    category: 'DevOps & Automation',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '40 minutes'
    },
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as code management',
      'Container orchestration',
      'Monitoring and alerting',
      'Deployment automation',
      'Environment management',
      'Security scanning integration',
      'Performance testing automation',
      'Rollback and recovery',
      'Team collaboration tools'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Improve deployment success rate to 99%',
      'Automate repetitive DevOps tasks',
      'Improve team collaboration and productivity',
      'Reduce infrastructure management overhead'
    ],
    targetAudience: [
      'DevOps engineers',
      'Software development teams',
      'Site reliability engineers',
      'IT operations teams',
      'Startups and enterprises',
      'Digital agencies'
    ],
    marketPosition: 'Competes with GitLab ($19-99/user/month), Jenkins (free + infrastructure), and CircleCI ($15-300/month). Our advantage: Comprehensive automation, better integration, and unified platform.',
    competitors: ['GitLab, Jenkins, CircleCI, GitHub Actions, Azure DevOps, AWS CodePipeline'],
    techStack: ['React, Node.js, PostgreSQL, Redis, Kubernetes, Docker, Terraform, Ansible'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade DevOps platform with comprehensive automation, monitoring, and orchestration capabilities. Includes security scanning and compliance tools.',
    roi: 'Teams typically see 3-5x ROI within 6 months through improved efficiency and reduced deployment issues.',
    useCases: [
      'CI/CD pipeline automation',
      'Infrastructure automation',
      'Deployment orchestration',
      'Monitoring and alerting',
      'Security and compliance',
      'Team collaboration'
    ],
    integrations: ['GitHub, GitLab, Bitbucket, Slack, Teams, Jira, AWS, Azure, GCP'],
    support: '24/7 technical support, dedicated DevOps specialists, and comprehensive training and documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
    link: 'https://ziontechgroup.com/devops-automation-platform',
    icon: '⚡',
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    launchDate: '2025-02-10',
    customers: 1400,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'data-governance-automation',
    name: 'Data Governance Automation',
    tagline: 'Automated data governance and compliance management',
    description: 'Intelligent data governance platform that automates data classification, privacy compliance, and regulatory reporting. Ensures data quality, security, and compliance across your entire data ecosystem.',
    category: 'Data Governance',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '60 minutes'
    },
    features: [
      'Automated data classification',
      'Privacy compliance automation',
      'Regulatory reporting',
      'Data quality monitoring',
      'Access control management',
      'Data lineage tracking',
      'Audit trail automation',
      'Policy management and enforcement',
      'Risk assessment and monitoring',
      'Compliance dashboard'
    ],
    benefits: [
      'Automate 80% of data governance tasks',
      'Ensure 100% regulatory compliance',
      'Improve data quality and reliability',
      'Reduce compliance risks and penalties',
      'Simplify audit and reporting processes'
    ],
    targetAudience: [
      'Data governance teams',
      'Compliance officers',
      'Data privacy officers',
      'Legal teams',
      'Enterprises with sensitive data',
      'Financial and healthcare organizations'
    ],
    marketPosition: 'Competes with Collibra ($50-100/user/month), Alation ($50-200/user/month), and Informatica ($100-500/user/month). Our advantage: Better automation, comprehensive compliance, and easier implementation.',
    competitors: ['Collibra, Alation, Informatica, IBM InfoSphere, SAP Data Governance'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, Apache Atlas, Apache Ranger'],
    realImplementation: true,
    implementationDetails: 'Enterprise-grade data governance platform with automated classification, compliance monitoring, and comprehensive reporting. Includes risk assessment and policy management tools.',
    roi: 'Organizations typically see 4-7x ROI within 12 months through improved compliance and reduced risks.',
    useCases: [
      'Data classification and cataloging',
      'Privacy compliance automation',
      'Regulatory reporting',
      'Data quality management',
      'Access control and security',
      'Audit and compliance'
    ],
    integrations: ['Databases, Data warehouses, BI tools, CRM systems, ERP systems, Slack, Teams'],
    support: 'Enterprise support with dedicated data governance specialists, 24/7 assistance, and comprehensive training programs.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, HIPAA, SOX, FedRAMP'],
    link: 'https://ziontechgroup.com/data-governance-automation',
    icon: '📋',
    color: 'from-teal-500 to-cyan-600',
    popular: true,
    launchDate: '2025-01-28',
    customers: 650,
    rating: 4.9,
    reviews: 112
  }
];