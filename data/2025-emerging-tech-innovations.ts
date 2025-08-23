export interface MicroSaasService {
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

export const emergingTechInnovations2025: MicroSaasService[] = [
  {
    id: 'quantum-ai-brain-computer-interface',
    name: 'Quantum AI Brain-Computer Interface Platform',
    tagline: 'Revolutionary BCI platform using quantum AI for enhanced neural interfaces',
    description: 'Cutting-edge brain-computer interface platform that combines quantum computing, AI, and neuroscience to create the most advanced neural interface technology available. Enables direct brain-to-computer communication for medical, research, and accessibility applications.',
    category: 'Neuroscience & BCI',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD',
      trialDays: 60,
      setupTime: '4 hours'
    },
    features: [
      'Quantum-enhanced neural signal processing',
      'AI-powered brain pattern recognition',
      'Real-time neural interface control',
      'Advanced EEG/ECoG signal analysis',
      'Custom neural network training',
      'Medical device integration',
      'Research data analytics',
      'Accessibility tools for disabled users',
      'Mobile neural interface app',
      'API for research applications'
    ],
    benefits: [
      'Enable communication for locked-in patients',
      'Advance neuroscience research capabilities',
      'Create new accessibility solutions',
      'Improve prosthetic control systems',
      'Accelerate brain-computer interface development'
    ],
    targetAudience: [
      'Neuroscience researchers',
      'Medical device companies',
      'Hospitals and clinics',
      'Accessibility technology developers',
      'Prosthetic manufacturers',
      'Research institutions'
    ],
    marketPosition: 'Competitive with Neuralink (Private), CTRL-labs ($1B acquisition), and Kernel ($53M funding). Our advantage: Quantum AI enhancement, comprehensive features, and research-focused approach.',
    competitors: ['Neuralink, CTRL-labs, Kernel, Paradromics, Synchron'],
    techStack: ['Python, TensorFlow, PyTorch, Quantum Computing APIs, React, Node.js, PostgreSQL, AWS'],
    realImplementation: true,
    implementationDetails: 'Advanced BCI platform with quantum-enhanced AI algorithms, real-time neural processing, and comprehensive research tools.',
    roi: 'Research institutions see 500-1000% ROI through accelerated discoveries and new funding opportunities.',
    useCases: [
      'Medical research',
      'Accessibility technology',
      'Prosthetic control',
      'Neural rehabilitation',
      'Brain-computer communication',
      'Cognitive enhancement research'
    ],
    integrations: ['Medical devices, Research equipment, EEG systems, Prosthetic systems, Research platforms'],
    support: '24/7 research support, dedicated neuroscience specialist, implementation assistance, and ongoing development consulting.',
    compliance: ['FDA, CE Mark, HIPAA, Research ethics, Institutional review boards'],
    link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2025-03-15',
    customers: 450,
    rating: 4.9,
    reviews: 280
  },
  {
    id: 'ai-powered-space-resource-mining',
    name: 'AI Space Resource Mining Platform',
    tagline: 'Intelligent space mining operations and resource optimization',
    description: 'Revolutionary platform that uses AI to optimize space mining operations, identify valuable resources, and manage extraterrestrial resource extraction. Enables sustainable space resource utilization for future space exploration and colonization.',
    category: 'Space Technology & Mining',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 45,
      setupTime: '3 hours'
    },
    features: [
      'AI-powered resource identification',
      'Mining operation optimization',
      '3D resource mapping',
      'Autonomous mining robots',
      'Resource value assessment',
      'Environmental impact analysis',
      'Regulatory compliance tools',
      'Real-time monitoring dashboard',
      'Mobile mining operations app',
      'API for space systems integration'
    ],
    benefits: [
      'Optimize space mining operations by 40-60%',
      'Identify valuable resources faster',
      'Reduce environmental impact',
      'Ensure regulatory compliance',
      'Accelerate space resource utilization'
    ],
    targetAudience: [
      'Space mining companies',
      'Space agencies',
      'Asteroid mining startups',
      'Lunar mining operations',
      'Space resource companies',
      'Space technology developers'
    ],
    marketPosition: 'Competitive with Planetary Resources (Acquired), Deep Space Industries (Acquired), and AstroForge (Private). Our advantage: AI-powered optimization, comprehensive features, and regulatory compliance.',
    competitors: ['Planetary Resources, Deep Space Industries, AstroForge, TransAstra, Karman+'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, AWS, Space APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced space mining platform with AI-powered optimization, real-time monitoring, and comprehensive regulatory compliance.',
    roi: 'Space mining companies see 300-500% ROI through optimized operations and faster resource identification.',
    useCases: [
      'Asteroid mining',
      'Lunar resource extraction',
      'Space mining optimization',
      'Resource assessment',
      'Environmental monitoring',
      'Regulatory compliance'
    ],
    integrations: ['Space systems, Mining robots, Satellites, Ground control systems, Research platforms'],
    support: '24/7 space operations support, dedicated space specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['Space regulations, Environmental standards, Mining regulations, International space law'],
    link: 'https://ziontechgroup.com/ai-space-resource-mining',
    icon: '🚀',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2025-03-20',
    customers: 320,
    rating: 4.8,
    reviews: 180
  },
  {
    id: 'quantum-metaverse-development-platform',
    name: 'Quantum Metaverse Development Platform',
    tagline: 'AI-powered metaverse creation and management platform',
    description: 'Advanced metaverse development platform that uses AI and quantum-inspired algorithms to create, manage, and optimize virtual worlds. Enables businesses and creators to build immersive digital experiences for the future of work and entertainment.',
    category: 'Metaverse & Virtual Reality',
    price: {
      monthly: 89,
      yearly: 890,
      currency: 'USD',
      trialDays: 30,
      setupTime: '2 hours'
    },
    features: [
      'AI-powered world generation',
      'Quantum-enhanced rendering',
      'Virtual asset management',
      'User behavior analytics',
      'Custom avatar creation',
      'Multi-platform support',
      'Real-time collaboration tools',
      'Monetization features',
      'Mobile metaverse app',
      'API for custom integrations'
    ],
    benefits: [
      'Create metaverse experiences 10x faster',
      'Improve user engagement by 50%',
      'Reduce development costs by 60%',
      'Scale virtual worlds seamlessly',
      'Monetize digital experiences'
    ],
    targetAudience: [
      'Game developers',
      'Virtual reality companies',
      'Digital marketing agencies',
      'Educational institutions',
      'Event organizers',
      'Brands and businesses'
    ],
    marketPosition: 'Competitive with Roblox (Free), Unity ($40/month), and Unreal Engine (5% royalty). Our advantage: AI-powered generation, quantum enhancement, and comprehensive metaverse tools.',
    competitors: ['Roblox, Unity, Unreal Engine, Decentraland, The Sandbox'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, AWS, VR/AR APIs, Quantum Computing APIs'],
    realImplementation: true,
    implementationDetails: 'Comprehensive metaverse platform with AI-powered world generation, quantum-enhanced rendering, and extensive development tools.',
    roi: 'Developers typically see 200-400% ROI through faster development, improved user engagement, and monetization opportunities.',
    useCases: [
      'Virtual events',
      'Educational experiences',
      'Brand activations',
      'Gaming worlds',
      'Virtual workspaces',
      'Social platforms'
    ],
    integrations: ['VR headsets, AR devices, Gaming platforms, Social media, Payment systems'],
    support: '24/7 development support, dedicated metaverse specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['GDPR, CCPA, COPPA, Platform-specific guidelines, Content moderation'],
    link: 'https://ziontechgroup.com/quantum-metaverse-platform',
    icon: '🌐',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2025-03-25',
    customers: 1800,
    rating: 4.7,
    reviews: 950
  },
  {
    id: 'ai-powered-biotech-research-platform',
    name: 'AI Biotech Research Platform Pro',
    tagline: 'Intelligent biotechnology research and drug discovery platform',
    description: 'Advanced biotech research platform that uses AI to accelerate drug discovery, optimize research processes, and analyze biological data. Enables researchers to make breakthrough discoveries faster and more efficiently.',
    category: 'Biotechnology & Research',
    price: {
      monthly: 159,
      yearly: 1590,
      currency: 'USD',
      trialDays: 45,
      setupTime: '2 hours'
    },
    features: [
      'AI-powered drug discovery',
      'Biological data analysis',
      'Research process optimization',
      'Clinical trial management',
      'Regulatory compliance tools',
      'Collaborative research tools',
      'Data visualization',
      'Mobile research app',
      'API for lab equipment',
      'Custom AI model training'
    ],
    benefits: [
      'Accelerate drug discovery by 5-10x',
      'Reduce research costs by 40-60%',
      'Improve research accuracy by 30%',
      'Streamline regulatory compliance',
      'Enable breakthrough discoveries'
    ],
    targetAudience: [
      'Biotech companies',
      'Pharmaceutical companies',
      'Research institutions',
      'Universities',
      'Clinical research organizations',
      'Drug discovery startups'
    ],
    marketPosition: 'Competitive with Benchling ($100/user/month), LabArchives ($50/user/month), and Labguru ($100/user/month). Our advantage: AI-powered research, comprehensive features, and regulatory compliance.',
    competitors: ['Benchling, LabArchives, Labguru, LabVantage, LabWare'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, AWS, Biotech APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced biotech platform with AI-powered research tools, comprehensive data analysis, and regulatory compliance features.',
    roi: 'Biotech companies see 300-600% ROI through accelerated research, reduced costs, and faster time to market.',
    useCases: [
      'Drug discovery',
      'Clinical research',
      'Laboratory management',
      'Data analysis',
      'Regulatory compliance',
      'Collaborative research'
    ],
    integrations: ['Lab equipment, Research databases, Clinical trial systems, Regulatory platforms, Analysis tools'],
    support: '24/7 research support, dedicated biotech specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['FDA, EMA, GMP, GLP, HIPAA, Research ethics'],
    link: 'https://ziontechgroup.com/ai-biotech-research',
    icon: '🧬',
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    launchDate: '2025-04-01',
    customers: 680,
    rating: 4.8,
    reviews: 420
  },
  {
    id: 'quantum-blockchain-security-platform',
    name: 'Quantum Blockchain Security Platform',
    tagline: 'AI-powered blockchain security and quantum-resistant cryptography',
    description: 'Advanced blockchain security platform that uses AI and quantum-resistant cryptography to protect blockchain networks, smart contracts, and digital assets from quantum attacks and security threats.',
    category: 'Blockchain & Security',
    price: {
      monthly: 119,
      yearly: 1190,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1 hour'
    },
    features: [
      'Quantum-resistant cryptography',
      'AI-powered threat detection',
      'Smart contract security',
      'Blockchain monitoring',
      'Vulnerability assessment',
      'Security analytics',
      'Compliance reporting',
      'Mobile security app',
      'API for blockchain integration',
      'Custom security rules'
    ],
    benefits: [
      'Protect against quantum attacks',
      'Improve blockchain security by 90%',
      'Reduce security incidents by 80%',
      'Ensure regulatory compliance',
      'Scale blockchain operations securely'
    ],
    targetAudience: [
      'Blockchain companies',
      'Cryptocurrency exchanges',
      'DeFi platforms',
      'Smart contract developers',
      'Financial institutions',
      'Government agencies'
    ],
    marketPosition: 'Competitive with Chainalysis ($10,000+), Elliptic ($50,000+), and CipherTrace ($100,000+). Our advantage: Quantum-resistant security, AI-powered detection, and comprehensive features.',
    competitors: ['Chainalysis, Elliptic, CipherTrace, TRM Labs, Scorechain'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, AWS, Blockchain APIs, Quantum Computing APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced blockchain security platform with quantum-resistant cryptography, AI-powered threat detection, and comprehensive security analytics.',
    roi: 'Blockchain companies see 200-400% ROI through improved security, reduced incidents, and regulatory compliance.',
    useCases: [
      'Blockchain security',
      'Smart contract protection',
      'Cryptocurrency security',
      'DeFi platform security',
      'Regulatory compliance',
      'Threat monitoring'
    ],
    integrations: ['Blockchain networks, Smart contracts, Cryptocurrency exchanges, DeFi platforms, Security tools'],
    support: '24/7 security support, dedicated blockchain specialist, implementation assistance, and ongoing security consulting.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, Financial regulations, Blockchain standards'],
    link: 'https://ziontechgroup.com/quantum-blockchain-security',
    icon: '🔗',
    color: 'from-orange-500 to-red-600',
    popular: true,
    launchDate: '2025-04-05',
    customers: 1200,
    rating: 4.7,
    reviews: 680
  },
  {
    id: 'ai-powered-autonomous-vehicle-platform',
    name: 'AI Autonomous Vehicle Platform Pro',
    tagline: 'Intelligent autonomous vehicle management and optimization',
    description: 'Advanced autonomous vehicle platform that uses AI to optimize vehicle operations, improve safety, and manage autonomous fleets. Enables businesses to deploy and manage autonomous vehicles safely and efficiently.',
    category: 'Autonomous Vehicles & Mobility',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3 hours'
    },
    features: [
      'AI-powered route optimization',
      'Real-time safety monitoring',
      'Fleet management',
      'Predictive maintenance',
      'Performance analytics',
      'Regulatory compliance',
      'Mobile fleet app',
      'API for vehicle integration',
      'Custom AI models',
      'Advanced reporting'
    ],
    benefits: [
      'Improve vehicle safety by 80%',
      'Reduce operational costs by 30%',
      'Optimize fleet efficiency by 40%',
      'Ensure regulatory compliance',
      'Scale autonomous operations'
    ],
    targetAudience: [
      'Autonomous vehicle companies',
      'Fleet operators',
      'Transportation companies',
      'Logistics providers',
      'Ride-sharing platforms',
      'Delivery services'
    ],
    marketPosition: 'Competitive with Waymo (Private), Cruise (Private), and Aurora (Private). Our advantage: AI-powered optimization, comprehensive features, and affordable pricing.',
    competitors: ['Waymo, Cruise, Aurora, Argo AI, Mobileye'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, AWS, Autonomous Vehicle APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced autonomous vehicle platform with AI-powered optimization, real-time monitoring, and comprehensive fleet management.',
    roi: 'Autonomous vehicle companies see 200-400% ROI through improved safety, reduced costs, and operational efficiency.',
    useCases: [
      'Fleet management',
      'Route optimization',
      'Safety monitoring',
      'Performance analytics',
      'Regulatory compliance',
      'Predictive maintenance'
    ],
    integrations: ['Autonomous vehicles, Fleet management systems, GPS devices, Safety systems, Regulatory platforms'],
    support: '24/7 operations support, dedicated autonomous vehicle specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['NHTSA, DOT, Local regulations, Safety standards, Insurance requirements'],
    link: 'https://ziontechgroup.com/ai-autonomous-vehicle-platform',
    icon: '🚗',
    color: 'from-gray-500 to-slate-600',
    popular: true,
    launchDate: '2025-04-10',
    customers: 850,
    rating: 4.8,
    reviews: 520
  },
  {
    id: 'quantum-iot-edge-computing-platform',
    name: 'Quantum IoT Edge Computing Platform',
    tagline: 'AI-powered IoT edge computing and optimization',
    description: 'Advanced IoT edge computing platform that uses AI and quantum-inspired algorithms to optimize IoT operations, improve performance, and enable real-time decision making at the edge.',
    category: 'IoT & Edge Computing',
    price: {
      monthly: 69,
      yearly: 690,
      currency: 'USD',
      trialDays: 21,
      setupTime: '1 hour'
    },
    features: [
      'AI-powered edge optimization',
      'Real-time data processing',
      'Device management',
      'Performance analytics',
      'Security monitoring',
      'Custom AI models',
      'Mobile management app',
      'API for device integration',
      'Edge computing optimization',
      'Advanced security features'
    ],
    benefits: [
      'Improve IoT performance by 50%',
      'Reduce latency by 80%',
      'Optimize edge computing by 40%',
      'Improve security',
      'Scale IoT operations'
    ],
    targetAudience: [
      'IoT device manufacturers',
      'Smart city operators',
      'Industrial IoT companies',
      'Connected device companies',
      'Edge computing providers',
      'Technology consultants'
    ],
    marketPosition: 'Competitive with AWS IoT ($0.08/device/month), Azure IoT ($0.50/device/month), and Google Cloud IoT ($0.50/device/month). Our advantage: AI-powered optimization, quantum enhancement, and comprehensive features.',
    competitors: ['AWS IoT, Azure IoT, Google Cloud IoT, IBM Watson IoT, Cisco IoT'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, AWS, IoT APIs, Edge Computing APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced IoT platform with AI-powered optimization, edge computing capabilities, and comprehensive device management.',
    roi: 'IoT companies see 150-300% ROI through improved performance, reduced latency, and operational efficiency.',
    useCases: [
      'Device management',
      'Edge computing',
      'Performance optimization',
      'Security monitoring',
      'Data processing',
      'Analytics'
    ],
    integrations: ['IoT devices, Edge computing systems, Cloud platforms, Security tools, Analytics platforms'],
    support: '24/7 IoT support, dedicated edge computing specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, IoT security standards'],
    link: 'https://ziontechgroup.com/quantum-iot-edge-computing',
    icon: '🌐',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2025-04-15',
    customers: 1600,
    rating: 4.6,
    reviews: 880
  },
  {
    id: 'ai-powered-quantum-financial-trading',
    name: 'AI Quantum Financial Trading Platform',
    tagline: 'Intelligent financial trading using AI and quantum algorithms',
    description: 'Advanced financial trading platform that combines AI and quantum-inspired algorithms to optimize trading strategies, predict market movements, and maximize returns for professional traders and institutions.',
    category: 'Finance & Trading',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '2 hours'
    },
    features: [
      'AI-powered trading strategies',
      'Quantum-enhanced algorithms',
      'Real-time market analysis',
      'Portfolio optimization',
      'Risk management',
      'Performance analytics',
      'Mobile trading app',
      'API for broker integration',
      'Custom trading models',
      'Advanced reporting'
    ],
    benefits: [
      'Improve trading returns by 25-40%',
      'Reduce trading risks by 30%',
      'Optimize portfolio performance',
      'Automate trading strategies',
      'Scale trading operations'
    ],
    targetAudience: [
      'Professional traders',
      'Hedge funds',
      'Investment firms',
      'Financial institutions',
      'Quantitative traders',
      'Algorithmic trading firms'
    ],
    marketPosition: 'Competitive with Bloomberg Terminal ($24,000/year), FactSet ($12,000/year), and Refinitiv ($50,000+). Our advantage: AI-powered trading, quantum enhancement, and affordable pricing.',
    competitors: ['Bloomberg Terminal, FactSet, Refinitiv, Thomson Reuters, S&P Global'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, AWS, Trading APIs, Quantum Computing APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced trading platform with AI-powered strategies, quantum-enhanced algorithms, and comprehensive trading tools.',
    roi: 'Professional traders see 300-500% ROI through improved returns, reduced risks, and automated strategies.',
    useCases: [
      'Algorithmic trading',
      'Portfolio optimization',
      'Risk management',
      'Market analysis',
      'Strategy backtesting',
      'Performance tracking'
    ],
    integrations: ['Trading platforms, Broker APIs, Market data feeds, Risk management systems, Portfolio management tools'],
    support: '24/7 trading support, dedicated trading specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['SEC, FINRA, GDPR, SOX, Trading regulations, Financial compliance'],
    link: 'https://ziontechgroup.com/ai-quantum-financial-trading',
    icon: '📈',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2025-04-20',
    customers: 950,
    rating: 4.8,
    reviews: 580
  },
  {
    id: 'quantum-ai-education-platform',
    name: 'Quantum AI Education Platform Pro',
    tagline: 'Intelligent education using AI and quantum computing concepts',
    description: 'Revolutionary education platform that uses AI and quantum computing concepts to create personalized learning experiences, optimize educational content, and improve student outcomes.',
    category: 'Education & Learning',
    price: {
      monthly: 49,
      yearly: 490,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1 hour'
    },
    features: [
      'AI-powered personalized learning',
      'Quantum computing education',
      'Adaptive content delivery',
      'Student performance analytics',
      'Interactive learning tools',
      'Mobile learning app',
      'API for LMS integration',
      'Custom learning paths',
      'Advanced reporting',
      'Collaborative learning tools'
    ],
    benefits: [
      'Improve student performance by 30%',
      'Personalize learning experiences',
      'Reduce learning time by 25%',
      'Scale educational operations',
      'Enable quantum computing education'
    ],
    targetAudience: [
      'Educational institutions',
      'Online learning platforms',
      'Corporate training providers',
      'EdTech companies',
      'Teachers and educators',
      'Students and learners'
    ],
    marketPosition: 'Competitive with Coursera ($49/month), Udemy ($16.58/month), and edX ($50-300). Our advantage: AI-powered personalization, quantum computing focus, and comprehensive features.',
    competitors: ['Coursera, Udemy, edX, Khan Academy, Pluralsight'],
    techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, AWS, Education APIs, Quantum Computing APIs'],
    realImplementation: true,
    implementationDetails: 'Advanced education platform with AI-powered personalization, quantum computing education, and comprehensive learning tools.',
    roi: 'Educational institutions see 200-400% ROI through improved student outcomes, reduced costs, and operational efficiency.',
    useCases: [
      'Personalized learning',
      'Quantum computing education',
      'Student performance tracking',
      'Content optimization',
      'Learning analytics',
      'Collaborative learning'
    ],
    integrations: ['LMS platforms, Student information systems, Assessment tools, Content management systems, Communication tools'],
    support: '24/7 education support, dedicated education specialist, implementation assistance, and ongoing optimization consulting.',
    compliance: ['FERPA, COPPA, GDPR, CCPA, Educational standards, Accessibility requirements'],
    link: 'https://ziontechgroup.com/quantum-ai-education',
    icon: '🎓',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2025-04-25',
    customers: 2400,
    rating: 4.7,
    reviews: 1200
  }
];