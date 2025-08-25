export interface ITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'freemium';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address?: string;
  };
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  demoUrl?: string;
  documentationUrl?: string;
  technologyStack?: string[];
  apiEndpoints?: string[];
  integrations?: string[];
  compliance?: string[];
  securityFeatures?: string[];
  roi?: string;
  competitors?: string[];
  duration?: string;
  teamSize?: string;
  freeConsultation?: boolean;
  maintenanceIncluded?: boolean;
  warrantyPeriod?: string;
}

export const COMPREHENSIVE_IT_SERVICES: ITService[] = [
  {
    id: 'it-001',
    title: 'Enterprise Cloud Migration & Optimization',
    description: 'Complete cloud migration strategy and implementation for enterprise organizations, including multi-cloud optimization and cost management.',
    category: 'Infrastructure & Cloud',
    subcategory: 'Cloud Migration',
    price: 25000,
    currency: 'USD',
    pricingModel: 'per-project',
    features: [
      'Cloud readiness assessment',
      'Migration strategy planning',
      'Multi-cloud architecture design',
      'Data migration & synchronization',
      'Performance optimization',
      'Cost optimization & monitoring',
      'Security & compliance setup',
      'Training & documentation',
      '24/7 support during migration',
      'Post-migration optimization'
    ],
    benefits: [
      'Reduced infrastructure costs by 30-50%',
      'Improved scalability and flexibility',
      'Enhanced disaster recovery capabilities',
      'Better performance and reliability',
      'Simplified IT management',
      'Access to latest cloud technologies'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Business expansion support',
      'Disaster recovery enhancement',
      'Cost optimization initiatives'
    ],
    targetAudience: [
      'Enterprise organizations',
      'Large corporations',
      'Government agencies',
      'Healthcare organizations',
      'Financial institutions'
    ],
    tags: ['cloud-migration', 'enterprise', 'multi-cloud', 'optimization', 'cost-management'],
    estimatedDelivery: '8-16 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$50,000 - $200,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 95,
    rating: 4.8,
    reviewCount: 127,
    featured: true,
    technologyStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Ansible'],
    compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'FedRAMP'],
    securityFeatures: ['Zero-trust architecture', 'Encryption at rest and in transit', 'IAM management', 'Security monitoring']
  },
  {
    id: 'it-002',
    title: 'Advanced DevOps & CI/CD Pipeline Automation',
    description: 'Comprehensive DevOps implementation with automated CI/CD pipelines, infrastructure as code, and continuous monitoring.',
    category: 'Infrastructure & Cloud',
    subcategory: 'DevOps Automation',
    price: 15000,
    currency: 'USD',
    pricingModel: 'per-project',
    features: [
      'CI/CD pipeline design & implementation',
      'Infrastructure as Code (IaC)',
      'Automated testing & deployment',
      'Monitoring & alerting setup',
      'Security scanning integration',
      'Performance optimization',
      'Disaster recovery automation',
      'Team training & documentation',
      'Ongoing support & maintenance',
      'Performance analytics dashboard'
    ],
    benefits: [
      'Faster deployment cycles (10x improvement)',
      'Reduced deployment failures by 80%',
      'Improved code quality and security',
      'Better team collaboration',
      'Reduced manual errors',
      'Faster time to market'
    ],
    useCases: [
      'Software development teams',
      'Digital transformation projects',
      'Microservices architecture',
      'Cloud-native applications',
      'Legacy system modernization'
    ],
    targetAudience: [
      'Software companies',
      'IT departments',
      'Development teams',
      'Startups',
      'Enterprise organizations'
    ],
    tags: ['devops', 'ci-cd', 'automation', 'infrastructure-as-code', 'monitoring'],
    estimatedDelivery: '6-12 weeks',
    supportLevel: 'premium',
    marketPrice: '$25,000 - $100,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 92,
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    technologyStack: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible', 'Docker', 'Kubernetes'],
    integrations: ['GitHub', 'GitLab', 'Jira', 'Slack', 'Teams', 'PagerDuty'],
    securityFeatures: ['SAST/DAST integration', 'Secret management', 'Access control', 'Audit logging']
  },
  {
    id: 'it-003',
    title: 'Enterprise Data Center Management & Optimization',
    description: 'Comprehensive data center management services including infrastructure optimization, monitoring, and disaster recovery planning.',
    category: 'Infrastructure & Cloud',
    subcategory: 'Data Center Management',
    price: 20000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      '24/7 infrastructure monitoring',
      'Performance optimization',
      'Capacity planning & scaling',
      'Disaster recovery planning',
      'Security hardening',
      'Backup & recovery management',
      'Hardware lifecycle management',
      'Energy efficiency optimization',
      'Compliance monitoring',
      'Incident response & resolution'
    ],
    benefits: [
      '99.99% uptime guarantee',
      'Reduced operational costs by 25%',
      'Improved security posture',
      'Better disaster recovery capabilities',
      'Optimized resource utilization',
      'Compliance assurance'
    ],
    useCases: [
      'Enterprise data centers',
      'Colocation facilities',
      'Private cloud infrastructure',
      'Hybrid cloud environments',
      'Mission-critical systems'
    ],
    targetAudience: [
      'Large enterprises',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Educational institutions'
    ],
    tags: ['data-center', 'infrastructure', 'monitoring', 'optimization', 'disaster-recovery'],
    estimatedDelivery: '4-8 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$30,000 - $150,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 88,
    rating: 4.6,
    reviewCount: 156,
    featured: true,
    technologyStack: ['VMware', 'Hyper-V', 'OpenStack', 'Nagios', 'Zabbix', 'Puppet', 'Chef'],
    compliance: ['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA', 'SOX'],
    securityFeatures: ['Network segmentation', 'Intrusion detection', 'Access control', 'Security monitoring']
  },
  {
    id: 'it-004',
    title: 'Advanced Network Security & Firewall Management',
    description: 'Comprehensive network security solutions including next-generation firewalls, intrusion detection, and threat intelligence.',
    category: 'Cybersecurity & Security',
    subcategory: 'Network Security',
    price: 12000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Next-generation firewall deployment',
      'Intrusion detection & prevention',
      'Threat intelligence integration',
      'Network segmentation',
      'VPN & remote access setup',
      'Security monitoring & alerting',
      'Incident response planning',
      'Security policy development',
      'Regular security assessments',
      '24/7 security monitoring'
    ],
    benefits: [
      'Enhanced threat detection by 95%',
      'Reduced security incidents by 80%',
      'Improved compliance posture',
      'Better network performance',
      'Simplified security management',
      'Cost-effective security solution'
    ],
    useCases: [
      'Enterprise networks',
      'Financial institutions',
      'Healthcare organizations',
      'Educational institutions',
      'Government agencies'
    ],
    targetAudience: [
      'IT security teams',
      'Network administrators',
      'Security officers',
      'Compliance managers',
      'Risk management teams'
    ],
    tags: ['network-security', 'firewall', 'intrusion-detection', 'threat-intelligence', 'vpn'],
    estimatedDelivery: '3-6 weeks',
    supportLevel: 'premium',
    marketPrice: '$15,000 - $75,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 94,
    rating: 4.8,
    reviewCount: 203,
    featured: true,
    technologyStack: ['Cisco ASA', 'Palo Alto Networks', 'Fortinet', 'Check Point', 'Snort', 'Suricata'],
    integrations: ['SIEM systems', 'Threat intelligence feeds', 'Vulnerability scanners', 'Security orchestration'],
    securityFeatures: ['Deep packet inspection', 'Application control', 'User identification', 'Threat prevention']
  },
  {
    id: 'it-005',
    title: 'Enterprise Database Management & Optimization',
    description: 'Comprehensive database management services including performance optimization, backup strategies, and high availability setup.',
    category: 'Infrastructure & Cloud',
    subcategory: 'Database Management',
    price: 18000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Database performance optimization',
      'High availability configuration',
      'Backup & recovery strategies',
      'Security hardening',
      'Monitoring & alerting',
      'Capacity planning',
      'Migration & upgrade support',
      'Performance tuning',
      'Disaster recovery planning',
      '24/7 database support'
    ],
    benefits: [
      'Improved database performance by 40%',
      '99.99% availability guarantee',
      'Reduced backup time by 60%',
      'Enhanced security posture',
      'Better resource utilization',
      'Simplified database management'
    ],
    useCases: [
      'Enterprise applications',
      'E-commerce platforms',
      'Financial systems',
      'Healthcare databases',
      'Analytics platforms'
    ],
    targetAudience: [
      'Database administrators',
      'IT managers',
      'Application developers',
      'System architects',
      'Operations teams'
    ],
    tags: ['database', 'performance', 'optimization', 'high-availability', 'backup-recovery'],
    estimatedDelivery: '4-8 weeks',
    supportLevel: 'premium',
    marketPrice: '$25,000 - $100,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 90,
    rating: 4.7,
    reviewCount: 134,
    featured: true,
    technologyStack: ['Oracle', 'SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    integrations: ['Monitoring tools', 'Backup systems', 'High availability solutions', 'Security tools'],
    securityFeatures: ['Encryption', 'Access control', 'Audit logging', 'Vulnerability scanning']
  },
  {
    id: 'it-006',
    title: 'Advanced API Management & Gateway Solutions',
    description: 'Comprehensive API management platform with gateway, security, monitoring, and developer portal capabilities.',
    category: 'Business Solutions',
    subcategory: 'API Management',
    price: 8000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'API gateway deployment',
      'Security & authentication',
      'Rate limiting & throttling',
      'API monitoring & analytics',
      'Developer portal setup',
      'Documentation generation',
      'Version management',
      'Performance optimization',
      'Integration support',
      '24/7 API support'
    ],
    benefits: [
      'Improved API security by 90%',
      'Reduced development time by 30%',
      'Better API performance',
      'Enhanced developer experience',
      'Simplified API management',
      'Cost-effective API solution'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile applications',
      'Web applications',
      'Partner integrations'
    ],
    targetAudience: [
      'API developers',
      'Integration teams',
      'DevOps engineers',
      'Product managers',
      'Technical architects'
    ],
    tags: ['api-management', 'gateway', 'security', 'monitoring', 'developer-portal'],
    estimatedDelivery: '3-6 weeks',
    supportLevel: 'standard',
    marketPrice: '$10,000 - $50,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 89,
    rating: 4.6,
    reviewCount: 78,
    featured: true,
    technologyStack: ['Kong', 'Apigee', 'AWS API Gateway', 'Azure API Management', 'MuleSoft', 'Tyk'],
    integrations: ['OAuth providers', 'Monitoring tools', 'Analytics platforms', 'CI/CD pipelines'],
    securityFeatures: ['OAuth 2.0', 'JWT tokens', 'Rate limiting', 'IP whitelisting']
  },
  {
    id: 'it-007',
    title: 'Enterprise Backup & Disaster Recovery Solutions',
    description: 'Comprehensive backup and disaster recovery solutions with automated testing, monitoring, and rapid recovery capabilities.',
    category: 'Infrastructure & Cloud',
    subcategory: 'Backup & Recovery',
    price: 15000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Automated backup scheduling',
      'Multi-site replication',
      'Disaster recovery planning',
      'Recovery testing automation',
      'Monitoring & alerting',
      'Compliance reporting',
      'Rapid recovery procedures',
      'Data retention policies',
      'Security & encryption',
      '24/7 recovery support'
    ],
    benefits: [
      '99.9% recovery success rate',
      'Reduced recovery time by 80%',
      'Improved compliance posture',
      'Better data protection',
      'Simplified backup management',
      'Cost-effective disaster recovery'
    ],
    useCases: [
      'Enterprise data protection',
      'Compliance requirements',
      'Business continuity planning',
      'Data center operations',
      'Cloud backup strategies'
    ],
    targetAudience: [
      'IT managers',
      'Operations teams',
      'Compliance officers',
      'Risk managers',
      'Business continuity planners'
    ],
    tags: ['backup', 'disaster-recovery', 'business-continuity', 'compliance', 'data-protection'],
    estimatedDelivery: '4-8 weeks',
    supportLevel: 'premium',
    marketPrice: '$20,000 - $100,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 91,
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    technologyStack: ['Veeam', 'Commvault', 'Rubrik', 'Cohesity', 'AWS Backup', 'Azure Backup'],
    integrations: ['Storage systems', 'Cloud platforms', 'Monitoring tools', 'Compliance systems'],
    securityFeatures: ['Encryption at rest', 'Access control', 'Audit logging', 'Secure replication']
  },
  {
    id: 'it-008',
    title: 'Advanced Monitoring & Observability Platform',
    description: 'Comprehensive monitoring and observability solution with real-time insights, alerting, and performance optimization.',
    category: 'Infrastructure & Cloud',
    subcategory: 'Monitoring & Observability',
    price: 10000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Real-time monitoring dashboard',
      'Custom alerting rules',
      'Performance analytics',
      'Log aggregation & analysis',
      'Distributed tracing',
      'Infrastructure monitoring',
      'Application performance monitoring',
      'Custom metrics & dashboards',
      'Integration capabilities',
      '24/7 monitoring support'
    ],
    benefits: [
      'Improved system visibility by 95%',
      'Reduced incident response time by 70%',
      'Better performance optimization',
      'Enhanced troubleshooting capabilities',
      'Proactive issue detection',
      'Cost-effective monitoring solution'
    ],
    useCases: [
      'Production environments',
      'Development teams',
      'Operations teams',
      'DevOps practices',
      'Performance optimization'
    ],
    targetAudience: [
      'DevOps engineers',
      'Operations teams',
      'System administrators',
      'Application developers',
      'IT managers'
    ],
    tags: ['monitoring', 'observability', 'performance', 'alerting', 'analytics'],
    estimatedDelivery: '3-6 weeks',
    supportLevel: 'standard',
    marketPrice: '$15,000 - $75,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    aiScore: 87,
    rating: 4.5,
    reviewCount: 92,
    featured: true,
    technologyStack: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Zipkin', 'Datadog', 'New Relic'],
    integrations: ['CI/CD pipelines', 'Cloud platforms', 'Container orchestration', 'Logging systems'],
    securityFeatures: ['Role-based access', 'Audit logging', 'Data encryption', 'Secure communication']
  },
  // New additional services
  {
    id: 'quantum-network-infrastructure',
    title: 'Quantum Network Infrastructure',
    category: 'Network Infrastructure',
    subcategory: 'Quantum Networking',
    description: 'Next-generation quantum network infrastructure for ultra-secure, high-speed data transmission. Features include quantum key distribution, quantum repeaters, and quantum internet protocols.',
    price: 25000,
    pricingModel: 'per-project',
    currency: 'USD',
    duration: '6-8 months',
    teamSize: '8-12 specialists',
    features: [
      'Quantum key distribution (QKD)',
      'Quantum repeaters and amplifiers',
      'Quantum internet protocols',
      'Ultra-secure data transmission',
      'Quantum network monitoring',
      'Hybrid classical-quantum networks',
      'Quantum network security',
      'Performance optimization'
    ],
    benefits: [
      'Unbreakable encryption through quantum mechanics',
      'Future-proof network infrastructure',
      'Ultra-low latency communication',
      'Enhanced security compliance',
      'Competitive technological advantage'
    ],
    targetAudience: ['Government agencies', 'financial institutions', 'research institutions', 'defense contractors'],
    tags: ['Quantum Computing', 'Network Infrastructure', 'Cybersecurity', 'Quantum Internet', 'Advanced Technology'],
    marketPrice: '35000',
    roi: '400%',
    competitors: ['IBM Quantum Network', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    technologyStack: ['Quantum Hardware', 'Qiskit', 'Cirq', 'Python', 'React', 'Quantum Simulators'],
    integrations: ['Existing network infrastructure', 'Cloud platforms', 'Security systems', 'Monitoring tools'],
    compliance: ['FISMA', 'FedRAMP', 'SOC 2', 'ISO 27001', 'NIST standards'],
    estimatedDelivery: '6-8 months',
    supportLevel: 'enterprise',
    useCases: [
      'Government secure communications',
      'Financial institution data protection',
      'Research institution quantum networking',
      'Defense contractor secure systems'
    ],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    demoUrl: 'https://ziontechgroup.com/demo/quantum-network',
    documentationUrl: 'https://ziontechgroup.com/docs/quantum-network',
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: '2 years'
  },
  {
    id: 'ai-powered-devops-automation',
    title: 'AI-Powered DevOps Automation Suite',
    category: 'DevOps & Automation',
    subcategory: 'AI-Driven Operations',
    description: 'Intelligent DevOps automation platform that uses AI to optimize deployment pipelines, monitor system health, and automatically resolve issues. Features include predictive analytics, automated scaling, and intelligent incident response.',
    price: 18000,
    pricingModel: 'per-project',
    currency: 'USD',
    duration: '4-6 months',
    teamSize: '6-8 specialists',
    features: [
      'AI-powered deployment automation',
      'Predictive system monitoring',
      'Automated incident response',
      'Intelligent resource scaling',
      'Performance optimization',
      'Security vulnerability detection',
      'Compliance automation',
      'Real-time analytics dashboard'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Minimize system downtime by 90%',
      'Automate 70% of routine operations',
      'Improve resource utilization by 60%',
      'Enhanced security and compliance'
    ],
    targetAudience: ['Technology companies', 'enterprises', 'cloud service providers', 'DevOps teams'],
    tags: ['DevOps', 'AI', 'Automation', 'Cloud Computing', 'Monitoring'],
    marketPrice: '25000',
    roi: '350%',
    competitors: ['GitLab Ultimate', 'Jenkins X', 'Spinnaker'],
    technologyStack: ['Python', 'TensorFlow', 'Kubernetes', 'Docker', 'React', 'Node.js', 'AWS/Azure/GCP'],
    integrations: ['GitHub', 'GitLab', 'Jira', 'Slack', 'PagerDuty', 'Datadog'],
    compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR'],
    estimatedDelivery: '4-6 months',
    supportLevel: 'premium',
    useCases: [
      'CI/CD pipeline optimization',
      'System monitoring and alerting',
      'Automated incident response',
      'Resource scaling and optimization'
    ],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    demoUrl: 'https://ziontechgroup.com/demo/ai-devops',
    documentationUrl: 'https://ziontechgroup.com/docs/ai-devops',
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: '1 year'
  },
  {
    id: 'blockchain-enterprise-platform',
    title: 'Enterprise Blockchain Platform',
    category: 'Blockchain Solutions',
    subcategory: 'Enterprise Blockchain',
    description: 'Comprehensive enterprise blockchain platform for building secure, scalable distributed applications. Features include smart contract development, private network deployment, and enterprise integration tools.',
    price: 30000,
    pricingModel: 'per-project',
    currency: 'USD',
    duration: '8-12 months',
    teamSize: '10-15 specialists',
    features: [
      'Private blockchain networks',
      'Smart contract development',
      'Enterprise integration APIs',
      'Multi-consensus mechanisms',
      'Advanced security features',
      'Scalability solutions',
      'Compliance tools',
      'Performance monitoring'
    ],
    benefits: [
      'Enhanced data security and transparency',
      'Reduced operational costs by 40%',
      'Improved supply chain visibility',
      'Automated compliance processes',
      'Competitive blockchain advantage'
    ],
    targetAudience: ['Financial institutions', 'supply chain companies', 'healthcare organizations', 'government agencies'],
    tags: ['Blockchain', 'Enterprise', 'Smart Contracts', 'Distributed Systems', 'Security'],
    marketPrice: '45000',
    roi: '300%',
    competitors: ['Hyperledger Fabric', 'Corda', 'Quorum'],
    technologyStack: ['Go', 'Solidity', 'React', 'Node.js', 'Docker', 'Kubernetes', 'Cloud platforms'],
    integrations: ['ERP systems', 'CRM platforms', 'Legacy databases', 'Cloud services', 'API gateways'],
    compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'Industry-specific regulations'],
    estimatedDelivery: '8-12 months',
    supportLevel: 'enterprise',
    useCases: [
      'Supply chain transparency',
      'Financial transaction security',
      'Digital identity management',
      'Smart contract automation'
    ],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    demoUrl: 'https://ziontechgroup.com/demo/enterprise-blockchain',
    documentationUrl: 'https://ziontechgroup.com/docs/enterprise-blockchain',
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: '2 years'
  },
  {
    id: 'iot-enterprise-platform',
    title: 'Enterprise IoT Platform',
    category: 'Internet of Things',
    subcategory: 'IoT Solutions',
    description: 'Scalable enterprise IoT platform for connecting, managing, and analyzing IoT devices and data. Features include device management, real-time analytics, and advanced security protocols.',
    price: 22000,
    pricingModel: 'per-project',
    currency: 'USD',
    duration: '5-7 months',
    teamSize: '7-10 specialists',
    features: [
      'IoT device management',
      'Real-time data analytics',
      'Edge computing capabilities',
      'Advanced security protocols',
      'Scalable cloud infrastructure',
      'API integration tools',
      'Custom dashboard development',
      'Predictive maintenance'
    ],
    benefits: [
      'Connect and manage 1000+ IoT devices',
      'Real-time operational insights',
      'Predictive maintenance optimization',
      'Enhanced operational efficiency',
      'Improved decision-making capabilities'
    ],
    targetAudience: ['Manufacturing companies', 'logistics firms', 'smart cities', 'healthcare organizations'],
    tags: ['IoT', 'Edge Computing', 'Data Analytics', 'Device Management', 'Cloud Platform'],
    marketPrice: '32000',
    roi: '280%',
    competitors: ['AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT'],
    technologyStack: ['Python', 'Node.js', 'React', 'MQTT', 'CoAP', 'Docker', 'Kubernetes', 'Cloud platforms'],
    integrations: ['ERP systems', 'SCADA systems', 'Legacy equipment', 'Cloud services', 'Analytics platforms'],
    compliance: ['SOC 2', 'ISO 27001', 'Industry-specific IoT standards'],
    estimatedDelivery: '5-7 months',
    supportLevel: 'premium',
    useCases: [
      'Manufacturing automation',
      'Smart city infrastructure',
      'Healthcare device monitoring',
      'Logistics tracking and optimization'
    ],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    demoUrl: 'https://ziontechgroup.com/demo/enterprise-iot',
    documentationUrl: 'https://ziontechgroup.com/docs/enterprise-iot',
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: '1 year'
  },
  {
    id: 'quantum-cybersecurity-suite',
    title: 'Quantum Cybersecurity Suite',
    category: 'Cybersecurity',
    subcategory: 'Quantum Security',
    description: 'Advanced cybersecurity suite leveraging quantum computing for threat detection, encryption, and security analysis. Features include quantum-resistant algorithms, AI-powered threat detection, and real-time security monitoring.',
    price: 35000,
    pricingModel: 'per-project',
    currency: 'USD',
    duration: '9-12 months',
    teamSize: '12-18 specialists',
    features: [
      'Quantum-resistant encryption',
      'AI-powered threat detection',
      'Real-time security monitoring',
      'Advanced threat hunting',
      'Quantum key distribution',
      'Security analytics platform',
      'Incident response automation',
      'Compliance reporting tools'
    ],
    benefits: [
      'Future-proof security against quantum threats',
      'Advanced threat detection capabilities',
      'Automated incident response',
      'Enhanced compliance management',
      'Competitive security advantage'
    ],
    targetAudience: ['Financial institutions', 'government agencies', 'healthcare organizations', 'defense contractors'],
    tags: ['Cybersecurity', 'Quantum Computing', 'AI', 'Threat Detection', 'Encryption'],
    marketPrice: '50000',
    roi: '450%',
    competitors: ['Palo Alto Networks', 'CrowdStrike', 'SentinelOne'],
    technologyStack: ['Python', 'Quantum Computing', 'TensorFlow', 'React', 'Node.js', 'Security frameworks'],
    integrations: ['SIEM systems', 'Firewalls', 'Endpoint protection', 'Cloud security', 'Identity management'],
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'FedRAMP', 'Industry-specific standards'],
    estimatedDelivery: '9-12 months',
    supportLevel: 'enterprise',
    useCases: [
      'Financial institution security',
      'Government agency protection',
      'Healthcare data security',
      'Critical infrastructure defense'
    ],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    demoUrl: 'https://ziontechgroup.com/demo/quantum-cybersecurity',
    documentationUrl: 'https://ziontechgroup.com/docs/quantum-cybersecurity',
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: '2 years'
  }
];

export default COMPREHENSIVE_IT_SERVICES;