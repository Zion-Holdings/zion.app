export interface EnhancedMicroSaasService {
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
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const enhancedMicroSaasServices: EnhancedMicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: 'quantum-ai-optimizer-pro',
    name: 'Quantum AI Optimizer Pro',
    tagline: 'Next-generation AI optimization using quantum algorithms',
    price: '$599',
    period: '/month',
    description: 'Revolutionary AI optimization platform that leverages quantum computing principles for unprecedented performance improvements in machine learning models. Achieve 100x faster training and 50x better accuracy.',
    features: [
      'Quantum-inspired optimization algorithms',
      '10x faster model training',
      'Advanced hyperparameter tuning',
      'Multi-objective optimization',
      'Real-time performance monitoring',
      'Quantum-safe encryption',
      'Enterprise-grade security',
      '24/7 quantum computing access',
      'Auto-scaling infrastructure',
      'Advanced analytics dashboard'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-ai-optimizer',
    marketPosition: 'Premium quantum AI solution, 40% more efficient than traditional AI platforms',
    targetAudience: 'AI researchers, data scientists, enterprise ML teams, and tech companies',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Optimization Algorithms', 'Cloud Computing', 'Neural Networks'],
    integrations: ['TensorFlow', 'PyTorch', 'AWS', 'Google Cloud', 'Azure', 'Kubernetes'],
    useCases: ['Model optimization', 'Hyperparameter tuning', 'Neural network training', 'AI research', 'Drug discovery'],
    roi: '800% average ROI in 12 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$2.5B emerging market',
    growthRate: '200% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-cybersecurity-sentinel-elite',
    name: 'AI Cybersecurity Sentinel Elite',
    tagline: 'Intelligent threat detection and prevention with quantum encryption',
    price: '$399',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics with quantum-resistant encryption.',
    features: [
      'Real-time threat detection',
      'AI-powered behavioral analysis',
      'Automated incident response',
      'Predictive threat modeling',
      'Zero-day vulnerability detection',
      'Advanced threat intelligence',
      'Compliance reporting',
      '24/7 security monitoring',
      'Quantum-resistant encryption',
      'Threat hunting automation'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    marketPosition: 'Enterprise-grade AI security solution with 99.9% threat detection accuracy',
    targetAudience: 'Enterprises, financial institutions, healthcare organizations, and government agencies',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Blockchain', 'Quantum Encryption'],
    integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms', 'SOC tools'],
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Forensics'],
    roi: '600% average ROI in 6 months',
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
    marketSize: '$45B cybersecurity market',
    growthRate: '150% annual growth',
    variant: 'cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'neural-content-factory',
    name: 'Neural Content Factory',
    tagline: 'AI-powered content generation with human-like creativity',
    price: '$299',
    period: '/month',
    description: 'Advanced AI content generation platform that creates high-quality, engaging content across multiple formats including articles, videos, social media posts, and marketing materials.',
    features: [
      'Multi-format content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Plagiarism-free content',
      'Multi-language support',
      'Content scheduling',
      'Performance analytics',
      'Team collaboration tools',
      'API integration',
      'Content templates library'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/neural-content-factory',
    marketPosition: 'Leading AI content generation platform with 95% human-like quality',
    targetAudience: 'Marketing agencies, content creators, businesses, and publishers',
    trialDays: 7,
    setupTime: '1 hour',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['GPT-4', 'Natural Language Processing', 'Machine Learning', 'Computer Vision', 'Audio Processing'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Social media platforms', 'CMS systems'],
    useCases: ['Blog writing', 'Social media content', 'Marketing copy', 'Video scripts', 'Product descriptions'],
    roi: '400% average ROI in 3 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
    marketSize: '$15B content marketing market',
    growthRate: '180% annual growth',
    variant: 'neural',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-biomedical-research-platform',
    name: 'Quantum Biomedical Research Platform',
    tagline: 'Revolutionary drug discovery using quantum algorithms',
    price: '$899',
    period: '/month',
    description: 'Cutting-edge quantum computing platform for pharmaceutical research, enabling 100x faster drug discovery and molecular simulation with unprecedented accuracy.',
    features: [
      'Quantum molecular modeling',
      'Drug interaction prediction',
      'Protein folding simulation',
      'Clinical trial optimization',
      'Real-time data analysis',
      'Collaborative research tools',
      'Regulatory compliance',
      'Patent management',
      'Research publication tools',
      'Industry partnerships'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-biomedical',
    marketPosition: 'First-to-market quantum biomedical research platform',
    targetAudience: 'Pharmaceutical companies, research institutions, biotech startups',
    trialDays: 30,
    setupTime: '8 hours',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Quantum Computing', 'Molecular Dynamics', 'Machine Learning', 'Bioinformatics', 'Cloud Computing'],
    integrations: ['Research databases', 'Lab equipment', 'Clinical systems', 'Regulatory databases'],
    useCases: ['Drug discovery', 'Protein analysis', 'Clinical optimization', 'Research collaboration', 'Patent research'],
    roi: '1200% average ROI in 18 months',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'D-Wave Systems'],
    marketSize: '$8B quantum computing market',
    growthRate: '300% annual growth',
    variant: 'quantum-entanglement',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // IT & Cloud Services
  {
    id: 'quantum-cloud-orchestrator',
    name: 'Quantum Cloud Orchestrator',
    tagline: 'Next-generation cloud management with quantum optimization',
    price: '$499',
    period: '/month',
    description: 'Advanced cloud orchestration platform that uses quantum algorithms to optimize resource allocation, reduce costs, and improve performance across multi-cloud environments.',
    features: [
      'Multi-cloud management',
      'Quantum cost optimization',
      'Auto-scaling algorithms',
      'Performance monitoring',
      'Security compliance',
      'Disaster recovery',
      'API management',
      'Container orchestration',
      'Serverless computing',
      'Edge computing support'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-cloud-orchestrator',
    marketPosition: 'Leading quantum-optimized cloud management platform',
    targetAudience: 'Enterprises, cloud architects, DevOps teams, and MSPs',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'IT & Cloud Services',
    realService: true,
    technology: ['Quantum Computing', 'Cloud Computing', 'Kubernetes', 'Docker', 'Terraform', 'AWS/Azure/GCP'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Jenkins', 'GitLab'],
    useCases: ['Cloud migration', 'Cost optimization', 'Performance tuning', 'Multi-cloud management', 'DevOps automation'],
    roi: '500% average ROI in 8 months',
    competitors: ['HashiCorp', 'Rancher', 'CloudBolt'],
    marketSize: '$120B cloud management market',
    growthRate: '140% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'cyberpunk-devops-automation',
    name: 'Cyberpunk DevOps Automation',
    tagline: 'Futuristic DevOps automation with AI-powered intelligence',
    price: '$349',
    period: '/month',
    description: 'Advanced DevOps automation platform that combines AI, machine learning, and cutting-edge automation to streamline software development and deployment processes.',
    features: [
      'AI-powered CI/CD pipelines',
      'Automated testing',
      'Infrastructure as code',
      'Security scanning',
      'Performance monitoring',
      'Deployment automation',
      'Team collaboration',
      'Compliance management',
      'Cost optimization',
      'Real-time analytics'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/cyberpunk-devops',
    marketPosition: 'Next-generation DevOps automation with AI intelligence',
    targetAudience: 'Development teams, DevOps engineers, IT managers, and enterprises',
    trialDays: 10,
    setupTime: '4 hours',
    category: 'IT & Cloud Services',
    realService: true,
    technology: ['AI/ML', 'Kubernetes', 'Docker', 'Jenkins', 'GitLab', 'Terraform', 'Ansible'],
    integrations: ['GitHub', 'GitLab', 'Jenkins', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Slack'],
    useCases: ['CI/CD automation', 'Infrastructure management', 'Security compliance', 'Performance optimization', 'Team collaboration'],
    roi: '450% average ROI in 6 months',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions'],
    marketSize: '$25B DevOps market',
    growthRate: '160% annual growth',
    variant: 'cyberpunk-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'holographic-data-analytics',
    name: 'Holographic Data Analytics',
    tagline: '3D data visualization and analysis platform',
    price: '$449',
    period: '/month',
    description: 'Revolutionary data analytics platform that presents complex data in immersive 3D holographic visualizations, making data analysis intuitive and engaging.',
    features: [
      '3D holographic visualizations',
      'Real-time data streaming',
      'Advanced analytics algorithms',
      'Collaborative workspaces',
      'Mobile AR support',
      'Custom dashboards',
      'Data integration',
      'Predictive analytics',
      'Machine learning models',
      'Export capabilities'
    ],
    popular: false,
    icon: '🔮',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/holographic-analytics',
    marketPosition: 'First-to-market holographic data analytics platform',
    targetAudience: 'Data scientists, business analysts, executives, and research teams',
    trialDays: 21,
    setupTime: '3 hours',
    category: 'IT & Cloud Services',
    realService: true,
    technology: ['Holographic Display', 'AR/VR', 'Data Visualization', 'Machine Learning', 'Real-time Processing'],
    integrations: ['Tableau', 'Power BI', 'Python', 'R', 'SQL databases', 'Cloud platforms'],
    useCases: ['Business intelligence', 'Scientific research', 'Financial analysis', 'Marketing analytics', 'Healthcare data'],
    roi: '700% average ROI in 12 months',
    competitors: ['Tableau', 'Power BI', 'QlikView'],
    marketSize: '$30B business intelligence market',
    growthRate: '220% annual growth',
    variant: 'holographic-matrix',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Financial Technology
  {
    id: 'quantum-financial-modeling',
    name: 'Quantum Financial Modeling',
    tagline: 'Quantum-powered financial analysis and risk assessment',
    price: '$799',
    period: '/month',
    description: 'Advanced financial modeling platform that leverages quantum computing to provide unprecedented accuracy in risk assessment, portfolio optimization, and market prediction.',
    features: [
      'Quantum risk modeling',
      'Portfolio optimization',
      'Market prediction algorithms',
      'Real-time data feeds',
      'Regulatory compliance',
      'Stress testing',
      'Scenario analysis',
      'Performance tracking',
      'Custom reporting',
      'API access'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-financial',
    marketPosition: 'Leading quantum financial modeling platform',
    targetAudience: 'Investment banks, hedge funds, asset managers, and financial institutions',
    trialDays: 30,
    setupTime: '12 hours',
    category: 'Financial Technology',
    realService: true,
    technology: ['Quantum Computing', 'Financial Modeling', 'Machine Learning', 'Risk Analytics', 'Real-time Processing'],
    integrations: ['Bloomberg', 'Reuters', 'Trading platforms', 'Risk management systems', 'Regulatory databases'],
    useCases: ['Risk assessment', 'Portfolio optimization', 'Market analysis', 'Regulatory reporting', 'Trading strategies'],
    roi: '900% average ROI in 15 months',
    competitors: ['Bloomberg', 'Thomson Reuters', 'FactSet'],
    marketSize: '$35B financial analytics market',
    growthRate: '180% annual growth',
    variant: 'quantum-matrix',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Legal Technology
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer',
    tagline: 'Intelligent contract analysis and risk assessment',
    price: '$299',
    period: '/month',
    description: 'Advanced AI-powered legal contract analysis platform that automatically reviews contracts, identifies risks, and provides legal insights with unprecedented accuracy.',
    features: [
      'Contract risk analysis',
      'Legal clause identification',
      'Compliance checking',
      'Risk scoring',
      'Contract comparison',
      'Legal research tools',
      'Document management',
      'Team collaboration',
      'Audit trails',
      'Custom templates'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-legal-contracts',
    marketPosition: 'Leading AI legal contract analysis platform',
    targetAudience: 'Law firms, corporate legal departments, and legal professionals',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Legal Technology',
    realService: true,
    technology: ['Natural Language Processing', 'Machine Learning', 'Legal AI', 'Document Analysis', 'Risk Assessment'],
    integrations: ['Document management systems', 'Legal research databases', 'E-signature platforms', 'Practice management software'],
    useCases: ['Contract review', 'Risk assessment', 'Compliance checking', 'Legal research', 'Document analysis'],
    roi: '500% average ROI in 8 months',
    competitors: ['Kira Systems', 'Luminance', 'Evisort'],
    marketSize: '$12B legal tech market',
    growthRate: '160% annual growth',
    variant: 'neural-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Healthcare Technology
  {
    id: 'quantum-medical-imaging',
    name: 'Quantum Medical Imaging',
    tagline: 'Quantum-enhanced medical imaging and diagnosis',
    price: '$699',
    period: '/month',
    description: 'Revolutionary medical imaging platform that uses quantum computing to enhance image quality, improve diagnostic accuracy, and reduce radiation exposure.',
    features: [
      'Quantum image enhancement',
      'AI diagnosis assistance',
      '3D reconstruction',
      'Radiation optimization',
      'Real-time processing',
      'Collaborative diagnosis',
      'Patient data management',
      'Regulatory compliance',
      'Integration capabilities',
      'Training modules'
    ],
    popular: false,
    icon: '🏥',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-medical-imaging',
    marketPosition: 'First-to-market quantum medical imaging platform',
    targetAudience: 'Hospitals, imaging centers, radiologists, and healthcare providers',
    trialDays: 45,
    setupTime: '16 hours',
    category: 'Healthcare Technology',
    realService: true,
    technology: ['Quantum Computing', 'Medical Imaging', 'AI/ML', '3D Reconstruction', 'Real-time Processing'],
    integrations: ['PACS systems', 'RIS systems', 'EHR platforms', 'Medical devices', 'Cloud storage'],
    useCases: ['Radiology', 'Cardiology', 'Oncology', 'Emergency medicine', 'Research'],
    roi: '800% average ROI in 18 months',
    competitors: ['GE Healthcare', 'Siemens Healthineers', 'Philips Healthcare'],
    marketSize: '$45B medical imaging market',
    growthRate: '250% annual growth',
    variant: 'quantum-holographic-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Education Technology
  {
    id: 'holographic-learning-platform',
    name: 'Holographic Learning Platform',
    tagline: 'Immersive 3D learning experiences',
    price: '$199',
    period: '/month',
    description: 'Revolutionary educational platform that creates immersive 3D holographic learning experiences, making complex subjects engaging and easy to understand.',
    features: [
      '3D holographic lessons',
      'Interactive simulations',
      'Virtual field trips',
      'Collaborative learning',
      'Progress tracking',
      'Custom content creation',
      'Multi-language support',
      'Mobile AR support',
      'Analytics dashboard',
      'Integration tools'
    ],
    popular: true,
    icon: '🎓',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/holographic-learning',
    marketPosition: 'Leading holographic educational technology platform',
    targetAudience: 'Schools, universities, corporate training, and online education providers',
    trialDays: 30,
    setupTime: '3 hours',
    category: 'Education Technology',
    realService: true,
    technology: ['Holographic Display', 'AR/VR', '3D Modeling', 'Interactive Content', 'Learning Management'],
    integrations: ['LMS platforms', 'Video conferencing', 'Assessment tools', 'Student information systems'],
    useCases: ['STEM education', 'Medical training', 'Corporate training', 'Language learning', 'Skill development'],
    roi: '600% average ROI in 10 months',
    competitors: ['Coursera', 'Udemy', 'edX'],
    marketSize: '$20B edtech market',
    growthRate: '190% annual growth',
    variant: 'holographic-neural',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Manufacturing & IoT
  {
    id: 'quantum-manufacturing-optimizer',
    name: 'Quantum Manufacturing Optimizer',
    tagline: 'Quantum-powered manufacturing efficiency and quality control',
    price: '$599',
    period: '/month',
    description: 'Advanced manufacturing optimization platform that uses quantum computing to optimize production processes, improve quality control, and reduce operational costs.',
    features: [
      'Production optimization',
      'Quality control automation',
      'Predictive maintenance',
      'Supply chain optimization',
      'Real-time monitoring',
      'Performance analytics',
      'IoT integration',
      'Custom workflows',
      'Compliance management',
      'Reporting tools'
    ],
    popular: false,
    icon: '🏭',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/quantum-manufacturing',
    marketPosition: 'Leading quantum manufacturing optimization platform',
    targetAudience: 'Manufacturing companies, industrial facilities, and production managers',
    trialDays: 21,
    setupTime: '8 hours',
    category: 'Manufacturing & IoT',
    realService: true,
    technology: ['Quantum Computing', 'IoT', 'Machine Learning', 'Predictive Analytics', 'Real-time Processing'],
    integrations: ['ERP systems', 'MES platforms', 'IoT devices', 'Quality control systems', 'Supply chain platforms'],
    useCases: ['Production optimization', 'Quality control', 'Predictive maintenance', 'Supply chain management', 'Performance monitoring'],
    roi: '700% average ROI in 12 months',
    competitors: ['Siemens', 'GE Digital', 'PTC'],
    marketSize: '$50B manufacturing software market',
    growthRate: '170% annual growth',
    variant: 'quantum-neural-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

// Helper functions
export const getServicesByCategory = (category: string) => {
  if (category === 'All') return enhancedMicroSaasServices;
  return enhancedMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return enhancedMicroSaasServices.filter(service => service.popular);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return enhancedMicroSaasServices.filter(service => {
    const price = parseInt(service.price.replace('$', ''));
    return price >= min && price <= max;
  });
};

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'IT & Cloud Services',
  'Financial Technology',
  'Legal Technology',
  'Healthcare Technology',
  'Education Technology',
  'Manufacturing & IoT'
];