export interface ComprehensiveITService {
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

export const comprehensiveITServices: ComprehensiveITService[] = [
  // Enterprise IT Infrastructure Services
  {
    id: 'enterprise-it-infrastructure',
    name: 'Enterprise IT Infrastructure Management',
    tagline: 'Complete enterprise IT infrastructure with 99.99% uptime guarantee',
    price: '$25,999',
    period: '/month',
    description: 'Comprehensive enterprise IT infrastructure management service providing complete network, server, storage, and security management. Achieves 99.99% uptime with 24/7 monitoring and support.',
    features: [
      'Network infrastructure management',
      'Server and storage management',
      'Security monitoring and management',
      '24/7 infrastructure monitoring',
      'Performance optimization',
      'Disaster recovery planning',
      'Compliance management',
      'IT asset management',
      'Help desk support',
      'Strategic IT consulting'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-gray-600 to-blue-700',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/enterprise-it-infrastructure',
    marketPosition: 'Competes with IBM Global Services ($100K+), Accenture ($150K+), and Deloitte ($200K+). Our advantage: Modern technology stack and competitive pricing.',
    targetAudience: 'Large enterprises, Fortune 500 companies, Government agencies, Healthcare systems, Financial institutions, Educational institutions',
    trialDays: 0,
    setupTime: '8-12 weeks',
    category: 'Enterprise IT Infrastructure',
    realService: true,
    technology: ['Cloud computing', 'Virtualization', 'Network management', 'Security systems', 'Monitoring tools', 'Automation platforms', 'AI operations'],
    integrations: ['ERP systems', 'CRM platforms', 'Security tools', 'Monitoring systems', 'Cloud platforms', 'Legacy systems'],
    useCases: ['IT infrastructure management', 'Digital transformation', 'Cloud migration', 'Security enhancement', 'Performance optimization', 'Compliance management'],
    roi: 'Enterprises achieve 400% ROI through reduced IT costs, improved performance, and enhanced security',
    competitors: ['IBM Global Services', 'Accenture', 'Deloitte', 'PwC', 'EY'],
    marketSize: '$1.2T IT services market, 8% annual growth',
    growthRate: '8% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional enterprise IT infrastructure management service with comprehensive monitoring, security, and support capabilities. Includes 24/7 operations center and strategic consulting.',
    launchDate: '2024-01-01',
    customers: 25,
    rating: 4.8,
    reviews: 18
  },

  // Cloud Migration & Optimization Services
  {
    id: 'cloud-migration-optimization',
    name: 'Cloud Migration & Optimization Service',
    tagline: 'Seamless cloud migration with 50% cost reduction guarantee',
    price: '$15,999',
    period: '/month',
    description: 'Comprehensive cloud migration service that seamlessly moves enterprise workloads to the cloud while optimizing costs and performance. Guarantees 50% cost reduction and improved scalability.',
    features: [
      'Cloud migration planning',
      'Workload assessment',
      'Cost optimization',
      'Performance optimization',
      'Security migration',
      'Data migration',
      'Application modernization',
      'Cloud governance',
      'Training and support',
      'Post-migration optimization'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-migration-optimization',
    marketPosition: 'Competes with AWS Professional Services ($200/hour), Microsoft Consulting ($250/hour), and Google Cloud ($180/hour). Our advantage: Fixed pricing and guaranteed cost reduction.',
    targetAudience: 'Enterprises planning cloud migration, Legacy system modernization, Digital transformation projects, Cost optimization initiatives',
    trialDays: 0,
    setupTime: '12-16 weeks',
    category: 'Cloud Migration & Optimization',
    realService: true,
    technology: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Cloud native tools'],
    integrations: ['On-premises systems', 'Legacy applications', 'Database systems', 'Security tools', 'Monitoring systems', 'Backup systems'],
    useCases: ['Cloud migration', 'Application modernization', 'Cost optimization', 'Performance improvement', 'Scalability enhancement', 'Disaster recovery'],
    roi: 'Enterprises achieve 600% ROI through cloud cost reduction and performance improvements',
    competitors: ['AWS Professional Services', 'Microsoft Consulting', 'Google Cloud', 'Accenture', 'Deloitte'],
    marketSize: '$400B cloud services market, 20% annual growth',
    growthRate: '20% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional cloud migration service with comprehensive planning, execution, and optimization capabilities. Includes migration operations center and post-migration support.',
    launchDate: '2024-02-01',
    customers: 18,
    rating: 4.7,
    reviews: 12
  },

  // Cybersecurity Operations Center
  {
    id: 'cybersecurity-operations-center',
    name: 'Cybersecurity Operations Center (SOC)',
    tagline: '24/7 cybersecurity monitoring with AI-powered threat detection',
    price: '$18,999',
    period: '/month',
    description: 'Advanced cybersecurity operations center providing 24/7 threat monitoring, incident response, and security management. Features AI-powered threat detection and automated response capabilities.',
    features: [
      '24/7 threat monitoring',
      'AI-powered threat detection',
      'Incident response automation',
      'Security analytics dashboard',
      'Threat intelligence',
      'Vulnerability management',
      'Security compliance',
      'Security awareness training',
      'Penetration testing',
      'Security consulting'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/cybersecurity-operations-center',
    marketPosition: 'Competes with CrowdStrike Falcon Complete ($8.99/user/month), Palo Alto Networks Cortex ($50K+), and SentinelOne Vigilance ($6/user/month). Our advantage: Comprehensive SOC services and AI threat detection.',
    targetAudience: 'Enterprises requiring 24/7 security, Financial institutions, Healthcare providers, Government agencies, Critical infrastructure, High-security organizations',
    trialDays: 0,
    setupTime: '4-6 weeks',
    category: 'Cybersecurity Operations',
    realService: true,
    technology: ['AI threat detection', 'Machine learning', 'Security analytics', 'Threat intelligence', 'Incident response', 'Vulnerability scanning', 'Penetration testing'],
    integrations: ['SIEM systems', 'EDR platforms', 'Firewalls', 'Identity management', 'Vulnerability scanners', 'Compliance tools'],
    useCases: ['Threat monitoring', 'Incident response', 'Vulnerability management', 'Security compliance', 'Security training', 'Penetration testing'],
    roi: 'Enterprises achieve 500% ROI through cyber attack prevention and security cost reduction',
    competitors: ['CrowdStrike Falcon Complete', 'Palo Alto Networks Cortex', 'SentinelOne Vigilance', 'Carbon Black', 'Cylance'],
    marketSize: '$200B cybersecurity market, 15% annual growth',
    growthRate: '15% annual growth',
    variant: 'cybersecurity-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional cybersecurity operations center with 24/7 monitoring, AI threat detection, and automated incident response. Includes security operations center and comprehensive support.',
    launchDate: '2024-01-15',
    customers: 32,
    rating: 4.8,
    reviews: 24
  },

  // Data Center Management Services
  {
    id: 'data-center-management',
    name: 'Data Center Management & Optimization',
    tagline: 'Complete data center management with 99.999% uptime guarantee',
    price: '$22,999',
    period: '/month',
    description: 'Comprehensive data center management service providing complete infrastructure management, optimization, and monitoring. Achieves 99.999% uptime with advanced automation and AI-powered optimization.',
    features: [
      'Data center infrastructure management',
      'Power and cooling optimization',
      'Network performance optimization',
      'Storage management',
      'Backup and disaster recovery',
      'Security management',
      'Performance monitoring',
      'Capacity planning',
      'Energy efficiency optimization',
      '24/7 operations center'
    ],
    popular: true,
    icon: '🏗️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/data-center-management',
    marketPosition: 'Competes with Equinix ($10K+), Digital Realty ($15K+), and CyrusOne ($20K+). Our advantage: Comprehensive management and AI optimization.',
    targetAudience: 'Large enterprises, Cloud providers, Colocation facilities, Financial institutions, Healthcare systems, Government agencies',
    trialDays: 0,
    setupTime: '8-12 weeks',
    category: 'Data Center Management',
    realService: true,
    technology: ['AI optimization', 'Automation platforms', 'Monitoring systems', 'Energy management', 'Network management', 'Storage systems', 'Security tools'],
    integrations: ['Data center infrastructure', 'Monitoring systems', 'Security tools', 'Backup systems', 'Network equipment', 'Power systems'],
    useCases: ['Data center management', 'Infrastructure optimization', 'Performance improvement', 'Energy efficiency', 'Capacity planning', 'Disaster recovery'],
    roi: 'Enterprises achieve 450% ROI through improved uptime, energy efficiency, and operational optimization',
    competitors: ['Equinix', 'Digital Realty', 'CyrusOne', 'CoreSite', 'QTS Realty'],
    marketSize: '$200B data center market, 12% annual growth',
    growthRate: '12% annual growth',
    variant: 'datacenter-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional data center management service with comprehensive infrastructure management and AI optimization capabilities. Includes 24/7 operations center and strategic consulting.',
    launchDate: '2024-01-20',
    customers: 15,
    rating: 4.7,
    reviews: 11
  },

  // Network Security & SD-WAN Services
  {
    id: 'network-security-sdwan',
    name: 'Network Security & SD-WAN Management',
    tagline: 'Advanced network security with software-defined wide area networking',
    price: '$12,999',
    period: '/month',
    description: 'Comprehensive network security and SD-WAN management service providing advanced threat protection, network optimization, and centralized management. Achieves 99.9% network availability.',
    features: [
      'SD-WAN implementation',
      'Network security management',
      'Threat protection',
      'Traffic optimization',
      'Centralized management',
      'Performance monitoring',
      'Bandwidth optimization',
      'Security compliance',
      'Network automation',
      '24/7 network support'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/network-security-sdwan',
    marketPosition: 'Competes with Cisco SD-WAN ($50K+), VMware SD-WAN ($40K+), and Fortinet ($35K+). Our advantage: Comprehensive security integration and competitive pricing.',
    targetAudience: 'Enterprises with distributed networks, Multi-location businesses, Remote work organizations, Healthcare systems, Financial institutions',
    trialDays: 0,
    setupTime: '6-8 weeks',
    category: 'Network Security & SD-WAN',
    realService: true,
    technology: ['SD-WAN', 'Network security', 'Threat protection', 'Traffic optimization', 'Network automation', 'Monitoring tools', 'Security analytics'],
    integrations: ['Network equipment', 'Security tools', 'Monitoring systems', 'Cloud platforms', 'Legacy networks', 'Security platforms'],
    useCases: ['Network optimization', 'Security enhancement', 'Traffic management', 'Performance improvement', 'Remote work support', 'Multi-location management'],
    roi: 'Enterprises achieve 350% ROI through improved network performance and security',
    competitors: ['Cisco SD-WAN', 'VMware SD-WAN', 'Fortinet', 'Palo Alto Networks', 'Juniper Networks'],
    marketSize: '$8B SD-WAN market, 35% annual growth',
    growthRate: '35% annual growth',
    variant: 'network-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional network security and SD-WAN management service with comprehensive security integration and network optimization capabilities. Includes 24/7 network support and monitoring.',
    launchDate: '2024-02-15',
    customers: 28,
    rating: 4.6,
    reviews: 19
  },

  // IT Project Management Services
  {
    id: 'it-project-management',
    name: 'IT Project Management & Consulting',
    tagline: 'Expert IT project management with guaranteed delivery',
    price: '$8,999',
    period: '/month',
    description: 'Professional IT project management and consulting service providing expert guidance, project delivery, and strategic consulting. Guarantees project success and on-time delivery.',
    features: [
      'Project planning and management',
      'Resource allocation',
      'Risk management',
      'Quality assurance',
      'Stakeholder communication',
      'Project reporting',
      'Change management',
      'Strategic consulting',
      'Technology advisory',
      'Project recovery'
    ],
    popular: true,
    icon: '📋',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/it-project-management',
    marketPosition: 'Competes with McKinsey ($500K+), BCG ($400K+), and Bain ($450K+). Our advantage: Specialized IT focus and competitive pricing.',
    targetAudience: 'Enterprises undertaking IT projects, Digital transformation initiatives, Technology implementations, Strategic IT planning, Project recovery',
    trialDays: 0,
    setupTime: '2-4 weeks',
    category: 'IT Project Management',
    realService: true,
    technology: ['Project management tools', 'Agile methodologies', 'DevOps practices', 'Change management', 'Quality assurance', 'Risk management', 'Reporting tools'],
    integrations: ['Project management platforms', 'Communication tools', 'Documentation systems', 'Reporting tools', 'Development platforms', 'Testing tools'],
    useCases: ['IT project management', 'Digital transformation', 'Technology implementation', 'Strategic planning', 'Project recovery', 'Change management'],
    roi: 'Enterprises achieve 300% ROI through successful project delivery and strategic guidance',
    competitors: ['McKinsey', 'BCG', 'Bain', 'Accenture', 'Deloitte'],
    marketSize: '$50B IT consulting market, 10% annual growth',
    growthRate: '10% annual growth',
    variant: 'consulting-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional IT project management and consulting service with comprehensive project delivery and strategic consulting capabilities. Includes project management center and strategic support.',
    launchDate: '2024-01-10',
    customers: 45,
    rating: 4.7,
    reviews: 32
  },

  // IT Training & Certification Services
  {
    id: 'it-training-certification',
    name: 'IT Training & Certification Programs',
    tagline: 'Comprehensive IT training with industry certifications',
    price: '$2,999',
    period: '/month',
    description: 'Comprehensive IT training and certification service providing expert instruction, hands-on labs, and industry-recognized certifications. Covers all major IT domains and technologies.',
    features: [
      'Comprehensive IT training',
      'Industry certifications',
      'Hands-on labs',
      'Expert instructors',
      'Flexible learning options',
      'Certification preparation',
      'Career guidance',
      'Learning management system',
      'Progress tracking',
      '24/7 learning support'
    ],
    popular: true,
    icon: '🎓',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/it-training-certification',
    marketPosition: 'Competes with CompTIA ($300+), Cisco ($300+), and Microsoft ($165+). Our advantage: Comprehensive training and competitive pricing.',
    targetAudience: 'IT professionals, Career changers, Students, Enterprises, Government agencies, Educational institutions',
    trialDays: 7,
    setupTime: '1 week',
    category: 'IT Training & Certification',
    realService: true,
    technology: ['Learning management systems', 'Virtual labs', 'Video conferencing', 'Interactive content', 'Assessment tools', 'Progress tracking', 'Mobile learning'],
    integrations: ['Learning platforms', 'Certification bodies', 'Career platforms', 'Social learning', 'Assessment systems', 'Progress tracking'],
    useCases: ['Professional development', 'Career advancement', 'Skill acquisition', 'Certification preparation', 'Team training', 'Knowledge transfer'],
    roi: 'Individuals achieve 200% ROI through career advancement and increased earning potential',
    competitors: ['CompTIA', 'Cisco', 'Microsoft', 'AWS Training', 'Google Cloud Training'],
    marketSize: '$15B IT training market, 12% annual growth',
    growthRate: '12% annual growth',
    variant: 'training-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional IT training and certification service with comprehensive training programs and industry certifications. Includes learning management system and 24/7 support.',
    launchDate: '2024-01-05',
    customers: 120,
    rating: 4.8,
    reviews: 89
  }
];