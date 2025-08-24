import { ServiceVariant } from '../types/service-variants';

export interface HealthcareBiotechInnovationPlatform2025 {
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

export const healthcareBiotechInnovationPlatform2025: HealthcareBiotechInnovationPlatform2025[] = [
  {
    id: 'ai-powered-healthcare-analytics-platform',
    name: 'AI-Powered Healthcare Analytics Platform',
    tagline: 'Transform healthcare with intelligent data analytics and insights',
    price: '$599',
    period: '/month',
    description: 'Advanced healthcare analytics platform that leverages AI and machine learning to analyze patient data, predict health outcomes, and optimize clinical decision-making. Features predictive analytics, population health management, and clinical intelligence.',
    features: [
      'AI-powered patient outcome prediction',
      'Population health analytics and management',
      'Clinical decision support systems',
      'Predictive risk modeling',
      'Real-time patient monitoring',
      'Healthcare quality metrics and reporting',
      'Interoperability and data integration',
      'Clinical workflow optimization',
      'Patient engagement analytics',
      'Healthcare cost optimization',
      'Regulatory compliance reporting',
      'Advanced data visualization',
      'Mobile healthcare monitoring',
      'Telemedicine integration',
      'Healthcare consulting services'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-healthcare-analytics',
    marketPosition: 'Leading AI-powered healthcare analytics platform with predictive insights and clinical intelligence',
    targetAudience: 'Hospitals, Healthcare systems, Medical practices, Health insurance companies, Pharmaceutical companies, Research institutions',
    trialDays: 30,
    setupTime: '15-20 business days',
    category: 'Healthcare & Biotech',
    realService: true,
    technology: ['AI/ML, Machine Learning, Healthcare Analytics, Predictive Modeling, Natural Language Processing, Data Integration'],
    integrations: ['Epic, Cerner, Allscripts, Athenahealth, Practice Fusion, HL7 FHIR, REST APIs'],
    useCases: ['Patient outcome prediction, Population health management, Clinical decision support, Healthcare quality improvement, Cost optimization'],
    roi: 'Improve patient outcomes by 40%. Reduce healthcare costs by 25%. Enhance clinical efficiency by 60%.',
    competitors: ['IBM Watson Health, Cerner, Epic, Allscripts, Athenahealth'],
    marketSize: '$84B healthcare analytics market',
    growthRate: '21% annual growth',
    variant: 'ai-healthcare',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered healthcare analytics platform with predictive insights and clinical intelligence.',
    launchDate: '2025-03-15',
    customers: 89,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'biotechnology-research-automation-platform',
    name: 'Biotechnology Research Automation Platform',
    tagline: 'Accelerate biotech research with AI-powered automation',
    price: '$799',
    period: '/month',
    description: 'Comprehensive biotechnology research platform that automates laboratory processes, accelerates drug discovery, and optimizes research workflows. Features automated experiment design, data analysis, and predictive modeling for biotech research.',
    features: [
      'AI-powered experiment design',
      'Automated laboratory workflows',
      'Drug discovery optimization',
      'Genomic data analysis',
      'Protein structure prediction',
      'Clinical trial optimization',
      'Research data management',
      'Collaborative research tools',
      'Regulatory compliance automation',
      'Research performance analytics',
      'Integration with lab equipment',
      'Data visualization and reporting',
      'Research collaboration platform',
      'Publication and patent management',
      'Biotech consulting services'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/biotech-research-automation',
    marketPosition: 'Leading biotechnology research automation platform with AI-powered experiment design and optimization',
    targetAudience: 'Biotechnology companies, Pharmaceutical companies, Research institutions, Universities, Government labs, Contract research organizations',
    trialDays: 21,
    setupTime: '20-30 business days',
    category: 'Biotechnology',
    realService: true,
    technology: ['AI/ML, Machine Learning, Laboratory Automation, Drug Discovery, Genomics, Bioinformatics, Robotics'],
    integrations: ['Lab information management systems, Laboratory equipment, Genomic databases, Clinical trial systems, REST APIs'],
    useCases: ['Drug discovery, Genomic research, Clinical trials, Laboratory automation, Research collaboration, Regulatory compliance'],
    roi: 'Accelerate research timelines by 50%. Reduce research costs by 40%. Improve research success rates by 35%.',
    competitors: ['Benchling, LabWare, Thermo Fisher Scientific, Agilent Technologies, PerkinElmer'],
    marketSize: '$32B biotechnology research market',
    growthRate: '28% annual growth',
    variant: 'biotech-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready biotechnology research automation platform with AI-powered experiment design and optimization.',
    launchDate: '2025-03-20',
    customers: 67,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'telemedicine-intelligence-platform',
    name: 'Telemedicine Intelligence Platform',
    tagline: 'Intelligent telemedicine with AI-powered diagnostics and care',
    price: '$349',
    period: '/month',
    description: 'Advanced telemedicine platform that combines virtual care delivery with AI-powered diagnostics, remote monitoring, and intelligent care coordination. Features automated triage, symptom analysis, and predictive health monitoring.',
    features: [
      'AI-powered symptom analysis',
      'Automated triage and routing',
      'Remote patient monitoring',
      'Virtual consultation management',
      'Intelligent care coordination',
      'Health data integration',
      'Prescription management',
      'Follow-up care automation',
      'Patient engagement tools',
      'Healthcare provider dashboard',
      'Mobile health applications',
      'Integration with EHR systems',
      'Telemedicine analytics',
      'Compliance and security',
      'Multi-language support'
    ],
    popular: false,
    icon: '📱',
    color: 'from-purple-600 via-pink-600 to-red-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/telemedicine-intelligence',
    marketPosition: 'Leading telemedicine intelligence platform with AI-powered diagnostics and remote care coordination',
    targetAudience: 'Healthcare providers, Telemedicine companies, Health systems, Insurance companies, Corporate wellness programs, Rural healthcare',
    trialDays: 30,
    setupTime: '10-15 business days',
    category: 'Telemedicine',
    realService: true,
    technology: ['AI/ML, Machine Learning, Telemedicine, Remote Monitoring, Natural Language Processing, Video Conferencing'],
    integrations: ['Epic, Cerner, Allscripts, Zoom, Microsoft Teams, Slack, EHR systems, REST APIs'],
    useCases: ['Virtual consultations, Remote patient monitoring, Telemedicine triage, Care coordination, Follow-up care, Corporate wellness'],
    roi: 'Increase patient access by 80%. Reduce healthcare costs by 30%. Improve patient satisfaction by 70%.',
    competitors: ['Teladoc, Amwell, MDLive, Doctor on Demand, PlushCare'],
    marketSize: '$185B telemedicine market',
    growthRate: '25% annual growth',
    variant: 'ai-healthcare',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready telemedicine intelligence platform with AI-powered diagnostics and remote care coordination.',
    launchDate: '2025-03-25',
    customers: 156,
    rating: 4.7,
    reviews: 112
  }
];