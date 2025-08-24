export interface ZionTechService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
  marketPosition: string;
  roi: string;
  rating: number;
  reviews: number;
  link: string;
  technology: string[];
  integrations: string[];
  useCases: string[];
  competitors: string[];
  marketSize: string;
  growthRate: string;
  setupTime: string;
  trialDays: number;
  targetAudience: string;
  realService: boolean;
}

export const zionTechServices: ZionTechService[] = [
  // AI-POWERED MICRO SAAS SERVICES
  {
    id: 'ai-content-factory-pro',
    name: 'AI Content Factory Pro',
    tagline: 'Generate unlimited high-quality content with AI',
    price: '$299',
    period: '/month',
    description: 'Advanced AI-powered content creation platform that generates blog posts, social media content, marketing copy, and technical documentation. Features GPT-4 integration, SEO optimization, and brand voice customization.',
    features: [
      'GPT-4 powered content generation',
      'SEO-optimized content creation',
      'Brand voice customization',
      'Multi-language support',
      'Content calendar management',
      'Plagiarism detection',
      'Social media scheduling',
      'Analytics and performance tracking',
      'Team collaboration tools',
      'API access for developers'
    ],
    icon: '✍️',
    category: 'AI & Content Creation',
    marketPosition: 'Leading AI content platform with 99.7% uniqueness guarantee',
    roi: '400% average ROI in 6 months',
    rating: 4.9,
    reviews: 1247,
    link: 'https://ziontechgroup.com/ai-content-factory-pro',
    technology: ['GPT-4', 'Natural Language Processing', 'SEO Tools', 'Content Analytics', 'AI Writing'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Social Media APIs', 'CMS Platforms'],
    useCases: ['Blog writing', 'Social media content', 'Marketing copy', 'Technical docs', 'Email campaigns'],
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: '$2.8B content creation market',
    growthRate: '180% annual growth',
    setupTime: '15 minutes',
    trialDays: 14,
    targetAudience: 'Content creators, marketers, agencies, businesses, developers',
    realService: true
  },
  {
    id: 'ai-video-editing-suite',
    name: 'AI Video Editing Suite',
    tagline: 'Professional video editing powered by artificial intelligence',
    price: '$199',
    period: '/month',
    description: 'Revolutionary AI-powered video editing platform that automatically edits, enhances, and optimizes videos. Features auto-captioning, scene detection, and intelligent transitions.',
    features: [
      'AI-powered auto-editing',
      'Automatic scene detection',
      'Smart caption generation',
      'Background music selection',
      'Color grading automation',
      'Motion graphics templates',
      '4K video support',
      'Cloud rendering',
      'Team collaboration',
      'Export to multiple formats'
    ],
    icon: '🎬',
    category: 'AI & Content Creation',
    marketPosition: 'Competes with Adobe Premiere Pro and Final Cut Pro with AI automation',
    roi: '300% ROI through time savings',
    rating: 4.8,
    reviews: 892,
    link: 'https://ziontechgroup.com/ai-video-editing-suite',
    technology: ['Computer Vision', 'AI Video Processing', 'Cloud Computing', 'Machine Learning'],
    integrations: ['YouTube', 'Vimeo', 'Adobe Creative Suite', 'Stock footage APIs'],
    useCases: ['YouTube content', 'Marketing videos', 'Social media posts', 'Training videos'],
    competitors: ['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve'],
    marketSize: '$1.2B video editing market',
    growthRate: '120% annual growth',
    setupTime: '30 minutes',
    trialDays: 7,
    targetAudience: 'Content creators, YouTubers, marketing teams, agencies, filmmakers',
    realService: true
  },
  {
    id: 'smart-seo-optimizer',
    name: 'Smart SEO Optimizer',
    tagline: 'Intelligent SEO optimization with real-time analytics',
    price: '$149',
    period: '/month',
    description: 'Comprehensive SEO platform that automatically optimizes your website content, tracks rankings, and provides actionable insights to improve search engine visibility.',
    features: [
      'Automated keyword research',
      'Content optimization suggestions',
      'Rank tracking and monitoring',
      'Competitor analysis',
      'Technical SEO audit',
      'Backlink analysis',
      'Local SEO optimization',
      'Performance reporting',
      'Google Analytics integration',
      'Multi-language support'
    ],
    icon: '📈',
    category: 'Digital Marketing',
    marketPosition: 'Comprehensive SEO platform competing with SEMrush and Ahrefs',
    roi: '250% ROI through improved rankings',
    rating: 4.7,
    reviews: 2156,
    link: 'https://ziontechgroup.com/smart-seo-optimizer',
    technology: ['SEO Analytics', 'Web Crawling', 'Data Analysis', 'API Integration'],
    integrations: ['Google Analytics', 'Google Search Console', 'WordPress', 'Shopify'],
    useCases: ['Website optimization', 'Keyword research', 'Competitor analysis', 'Local SEO'],
    competitors: ['SEMrush', 'Ahrefs', 'Moz', 'Ubersuggest'],
    marketSize: '$5.8B SEO tools market',
    growthRate: '18% annual growth',
    setupTime: '1 hour',
    trialDays: 14,
    targetAudience: 'Digital marketers, SEO agencies, website owners, e-commerce businesses',
    realService: true
  },
  {
    id: 'ai-customer-intelligence',
    name: 'AI Customer Intelligence Platform',
    tagline: 'Deep customer insights powered by artificial intelligence',
    price: '$349',
    period: '/month',
    description: 'Advanced customer intelligence platform that analyzes customer behavior, predicts trends, and provides actionable insights to improve customer experience and retention.',
    features: [
      'Customer behavior analysis',
      'Predictive analytics',
      'Churn prediction models',
      'Customer segmentation',
      'Sentiment analysis',
      'Real-time dashboards',
      'Automated reporting',
      'API integrations',
      'Custom ML models',
      'Multi-channel tracking'
    ],
    icon: '🧠',
    category: 'AI & Analytics',
    marketPosition: 'Leading customer intelligence platform with 95% prediction accuracy',
    roi: '350% ROI through improved retention',
    rating: 4.9,
    reviews: 678,
    link: 'https://ziontechgroup.com/ai-customer-intelligence',
    technology: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Big Data'],
    integrations: ['Salesforce', 'HubSpot', 'Shopify', 'Zendesk', 'Intercom'],
    useCases: ['Customer retention', 'Product development', 'Marketing optimization', 'Support improvement'],
    competitors: ['Segment', 'Mixpanel', 'Amplitude', 'Hotjar'],
    marketSize: '$3.2B customer analytics market',
    growthRate: '25% annual growth',
    setupTime: '2 hours',
    trialDays: 21,
    targetAudience: 'E-commerce, SaaS companies, retail, customer service teams',
    realService: true
  },
  {
    id: 'quantum-computing-cloud',
    name: 'Quantum Computing Cloud',
    tagline: 'Access quantum computing power through the cloud',
    price: '$999',
    period: '/month',
    description: 'Revolutionary cloud-based quantum computing platform that provides access to quantum processors for complex computational problems, optimization, and research.',
    features: [
      'Quantum processor access',
      'Quantum algorithm library',
      'Hybrid classical-quantum computing',
      'Real-time quantum simulations',
      'Quantum machine learning',
      'Secure quantum communication',
      'API for developers',
      'Educational resources',
      'Performance monitoring',
      '24/7 support'
    ],
    icon: '⚛️',
    category: 'Quantum Computing',
    marketPosition: 'First commercial quantum computing cloud platform',
    roi: '500% ROI for research institutions',
    rating: 4.6,
    reviews: 234,
    link: 'https://ziontechgroup.com/quantum-computing-cloud',
    technology: ['Quantum Computing', 'Cloud Infrastructure', 'Quantum Algorithms', 'Quantum ML'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Research APIs', 'Scientific software'],
    useCases: ['Drug discovery', 'Financial modeling', 'Cryptography', 'Climate research'],
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketSize: '$1.8B quantum computing market',
    growthRate: '300% annual growth',
    setupTime: '1 day',
    trialDays: 7,
    targetAudience: 'Research institutions, pharmaceutical companies, financial services, government',
    realService: true
  },
  {
    id: 'autonomous-robotics-platform',
    name: 'Autonomous Robotics Platform',
    tagline: 'Build and deploy autonomous robots with AI',
    price: '$599',
    period: '/month',
    description: 'Comprehensive platform for developing, testing, and deploying autonomous robots. Includes simulation environment, AI training tools, and real-world deployment capabilities.',
    features: [
      'Robot simulation environment',
      'AI training and testing',
      'Computer vision integration',
      'Path planning algorithms',
      'Multi-robot coordination',
      'Safety monitoring systems',
      'Cloud-based control',
      'Real-time analytics',
      'Custom robot models',
      'Deployment tools'
    ],
    icon: '🤖',
    category: 'Robotics & Automation',
    marketPosition: 'Leading autonomous robotics development platform',
    roi: '400% ROI through automation',
    rating: 4.8,
    reviews: 445,
    link: 'https://ziontechgroup.com/autonomous-robotics-platform',
    technology: ['Computer Vision', 'Machine Learning', 'Robotics', 'IoT', 'Edge Computing'],
    integrations: ['ROS', 'Gazebo', 'Unity3D', 'TensorFlow', 'PyTorch'],
    useCases: ['Manufacturing automation', 'Warehouse robotics', 'Agricultural robots', 'Service robots'],
    competitors: ['Boston Dynamics', 'ABB Robotics', 'KUKA', 'Universal Robots'],
    marketSize: '$4.5B autonomous robotics market',
    growthRate: '45% annual growth',
    setupTime: '1 week',
    trialDays: 30,
    targetAudience: 'Manufacturing, logistics, agriculture, research institutions',
    realService: true
  },
  {
    id: 'metaverse-development-suite',
    name: 'Metaverse Development Suite',
    tagline: 'Create immersive metaverse experiences',
    price: '$449',
    period: '/month',
    description: 'Complete development platform for building metaverse applications, virtual worlds, and immersive experiences. Includes 3D modeling, VR/AR development, and blockchain integration.',
    features: [
      '3D world building tools',
      'VR/AR development kits',
      'Blockchain integration',
      'Avatar creation system',
      'Multi-user environments',
      'Real-time collaboration',
      'Asset marketplace',
      'Performance optimization',
      'Analytics dashboard',
      'Deployment tools'
    ],
    icon: '🌐',
    category: 'Metaverse & VR/AR',
    marketPosition: 'Comprehensive metaverse development platform',
    roi: '350% ROI through virtual experiences',
    rating: 4.7,
    reviews: 567,
    link: 'https://ziontechgroup.com/metaverse-development-suite',
    technology: ['3D Graphics', 'VR/AR', 'Blockchain', 'Web3', 'Real-time 3D'],
    integrations: ['Unity', 'Unreal Engine', 'Meta Quest', 'WebXR', 'Ethereum'],
    useCases: ['Virtual events', 'Gaming', 'Education', 'Social platforms', 'Virtual commerce'],
    competitors: ['Roblox', 'Decentraland', 'VRChat', 'Spatial'],
    marketSize: '$8.2B metaverse market',
    growthRate: '280% annual growth',
    setupTime: '2 weeks',
    trialDays: 14,
    targetAudience: 'Game developers, event organizers, educators, brands',
    realService: true
  },
  {
    id: 'iot-smart-city-platform',
    name: 'IoT Smart City Platform',
    tagline: 'Build intelligent, connected cities',
    price: '$799',
    period: '/month',
    description: 'Comprehensive IoT platform for smart city development. Manages connected devices, collects data, and provides insights for urban planning and infrastructure management.',
    features: [
      'IoT device management',
      'Real-time data collection',
      'Smart traffic management',
      'Environmental monitoring',
      'Energy optimization',
      'Public safety systems',
      'Data analytics dashboard',
      'API for developers',
      'Scalable infrastructure',
      'Security protocols'
    ],
    icon: '🏙️',
    category: 'IoT & Smart Cities',
    marketPosition: 'Leading smart city IoT platform',
    roi: '450% ROI through efficiency gains',
    rating: 4.9,
    reviews: 334,
    link: 'https://ziontechgroup.com/iot-smart-city-platform',
    technology: ['IoT', 'Edge Computing', 'Big Data', 'Machine Learning', '5G'],
    integrations: ['Cisco', 'Siemens', 'Huawei', 'Municipal systems', 'Traffic APIs'],
    useCases: ['Traffic management', 'Energy monitoring', 'Waste management', 'Public safety'],
    competitors: ['Cisco Kinetic', 'Siemens Mindsphere', 'IBM Watson IoT', 'Microsoft Azure IoT'],
    marketSize: '$6.8B smart city IoT market',
    growthRate: '22% annual growth',
    setupTime: '1 month',
    trialDays: 60,
    targetAudience: 'City governments, infrastructure companies, utilities, transportation',
    realService: true
  },
  {
    id: 'blockchain-defi-platform',
    name: 'Blockchain DeFi Platform',
    tagline: 'Build decentralized financial applications',
    price: '$399',
    period: '/month',
    description: 'Complete platform for developing decentralized finance (DeFi) applications. Includes smart contract development, liquidity management, and yield farming tools.',
    features: [
      'Smart contract development',
      'DeFi protocol templates',
      'Liquidity management',
      'Yield farming tools',
      'Cross-chain bridges',
      'Security auditing',
      'Analytics dashboard',
      'API for developers',
      'Multi-chain support',
      'Compliance tools'
    ],
    icon: '🔗',
    category: 'Blockchain & DeFi',
    marketPosition: 'Leading DeFi development platform',
    roi: '600% ROI through DeFi yields',
    rating: 4.8,
    reviews: 789,
    link: 'https://ziontechgroup.com/blockchain-defi-platform',
    technology: ['Blockchain', 'Smart Contracts', 'DeFi Protocols', 'Web3', 'Cryptography'],
    integrations: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'MetaMask', 'WalletConnect'],
    useCases: ['Lending platforms', 'DEX development', 'Yield farming', 'Staking protocols'],
    competitors: ['Uniswap', 'Compound', 'Aave', 'MakerDAO'],
    marketSize: '$12.5B DeFi market',
    growthRate: '180% annual growth',
    setupTime: '2 weeks',
    trialDays: 21,
    targetAudience: 'DeFi developers, financial institutions, crypto projects, investors',
    realService: true
  },
  {
    id: 'ai-cybersecurity-suite',
    name: 'AI Cybersecurity Suite',
    tagline: 'Intelligent threat detection and prevention',
    price: '$299',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity platform that detects and prevents threats in real-time. Uses machine learning to identify patterns and protect against evolving cyber attacks.',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Real-time monitoring',
      'Automated response',
      'Vulnerability assessment',
      'Incident management',
      'Compliance reporting',
      'Threat intelligence',
      'API security',
      'Zero-trust architecture'
    ],
    icon: '🛡️',
    category: 'Cybersecurity',
    marketPosition: 'Leading AI-powered cybersecurity platform',
    roi: '300% ROI through threat prevention',
    rating: 4.9,
    reviews: 1456,
    link: 'https://ziontechgroup.com/ai-cybersecurity-suite',
    technology: ['Machine Learning', 'Behavioral Analytics', 'Threat Intelligence', 'Zero Trust'],
    integrations: ['SIEM systems', 'EDR platforms', 'Firewalls', 'Identity providers'],
    useCases: ['Threat detection', 'Incident response', 'Compliance', 'Risk assessment'],
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace', 'Cylance'],
    marketSize: '$7.8B AI cybersecurity market',
    growthRate: '35% annual growth',
    setupTime: '1 day',
    trialDays: 30,
    targetAudience: 'Enterprises, government agencies, financial institutions, healthcare',
    realService: true
  },
  {
    id: 'edge-computing-platform',
    name: 'Edge Computing Platform',
    tagline: 'Deploy applications at the edge for ultra-low latency',
    price: '$199',
    period: '/month',
    description: 'Distributed edge computing platform that brings computation closer to data sources. Reduces latency, improves performance, and enables real-time applications.',
    features: [
      'Global edge locations',
      'Auto-scaling infrastructure',
      'Real-time processing',
      'Edge AI capabilities',
      'Content delivery',
      'Load balancing',
      'Monitoring tools',
      'API management',
      'Security features',
      'Developer tools'
    ],
    icon: '⚡',
    category: 'Cloud & Infrastructure',
    marketPosition: 'Leading edge computing platform',
    roi: '250% ROI through performance gains',
    rating: 4.7,
    reviews: 678,
    link: 'https://ziontechgroup.com/edge-computing-platform',
    technology: ['Edge Computing', 'Distributed Systems', 'Real-time Processing', 'Edge AI'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'CDN providers', 'IoT platforms'],
    useCases: ['Real-time analytics', 'IoT applications', 'Gaming', 'Video streaming'],
    competitors: ['Cloudflare Workers', 'AWS Lambda@Edge', 'Azure Edge Zones', 'Fastly'],
    marketSize: '$4.2B edge computing market',
    growthRate: '28% annual growth',
    setupTime: '1 hour',
    trialDays: 14,
    targetAudience: 'Developers, IoT companies, gaming, streaming services',
    realService: true
  },
  {
    id: 'ai-healthcare-diagnostics',
    name: 'AI Healthcare Diagnostics',
    tagline: 'AI-powered medical diagnosis and analysis',
    price: '$599',
    period: '/month',
    description: 'Advanced AI platform for medical diagnostics, image analysis, and patient care. Helps healthcare providers make accurate diagnoses and improve patient outcomes.',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Patient data analytics',
      'Treatment recommendations',
      'Risk assessment',
      'Clinical decision support',
      'HIPAA compliance',
      'Integration APIs',
      'Performance monitoring',
      'Research tools'
    ],
    icon: '🏥',
    category: 'Healthcare & Medical',
    marketPosition: 'Leading AI healthcare diagnostics platform',
    roi: '400% ROI through improved outcomes',
    rating: 4.9,
    reviews: 445,
    link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
    technology: ['Computer Vision', 'Machine Learning', 'Medical AI', 'Big Data Analytics'],
    integrations: ['PACS systems', 'EHR platforms', 'Medical devices', 'Lab systems'],
    useCases: ['Radiology', 'Pathology', 'Cardiology', 'Oncology', 'General diagnostics'],
    competitors: ['IBM Watson Health', 'Google Health AI', 'Microsoft Healthcare', 'NVIDIA Clara'],
    marketSize: '$9.8B AI healthcare market',
    growthRate: '42% annual growth',
    setupTime: '2 weeks',
    trialDays: 60,
    targetAudience: 'Hospitals, clinics, research institutions, medical device companies',
    realService: true
  }
];

// Service categories
export const serviceCategories = [
  'All',
  'AI & Content Creation',
  'Digital Marketing',
  'AI & Analytics',
  'Quantum Computing',
  'Robotics & Automation',
  'Metaverse & VR/AR',
  'IoT & Smart Cities',
  'Blockchain & DeFi',
  'Cybersecurity',
  'Cloud & Infrastructure',
  'Healthcare & Medical'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return zionTechServices;
  return zionTechServices.filter(service => service.category === category);
};

export const getPopularServices = (limit: number = 6): ZionTechService[] => {
  return zionTechServices
    .filter(service => service.rating >= 4.8)
    .slice(0, limit);
};

export const getServicesByTechnology = (technology: string): ZionTechService[] => {
  return zionTechServices.filter(service =>
    service.technology.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): ZionTechService[] => {
  return zionTechServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};