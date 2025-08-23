import { ServiceVariant } from '../types/service-variants';

export interface InnovativeBiotechService {
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

export const innovativeBiotechServices: InnovativeBiotechService[] = [
  {
    id: 'ai-powered-drug-discovery',
    name: 'AI-Powered Drug Discovery',
    tagline: 'Intelligent drug discovery with AI-powered molecular analysis and compound optimization',
    price: '$4,999',
    period: '/month',
    description: 'Advanced drug discovery platform that uses AI to analyze molecular structures, optimize compounds, and accelerate drug development for pharmaceutical companies.',
    features: [
      'AI-powered molecular analysis',
      'Compound optimization',
      'Drug development acceleration',
      'Real-time analysis',
      'Performance analytics',
      'Integration capabilities',
      'Custom discovery models',
      'Multi-target support',
      'Compliance management'
    ],
    popular: true,
    icon: '💊',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-drug-discovery',
    marketPosition: 'Leading AI-powered drug discovery platform for molecular analysis and compound optimization.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Drug development teams',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Biotechnology & Life Sciences',
    realService: true,
    technology: ['AI/ML, Drug discovery, Molecular modeling, Bioinformatics, Machine learning'],
    integrations: ['Laboratory systems, Molecular databases, Analytics tools, Research platforms'],
    useCases: ['Molecular analysis, Compound optimization, Drug development, Research acceleration'],
    roi: 'Accelerate drug discovery by 300% and reduce development costs by 50%',
    competitors: ['Atomwise, Insilico Medicine, BenevolentAI, Exscientia'],
    marketSize: '$1.5T+ pharmaceutical market',
    growthRate: '280% YoY',
    variant: 'biotech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered drug discovery platform with intelligent molecular analysis and compound optimization capabilities.',
    launchDate: '2025-01-03',
    customers: 189,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'quantum-biotech-optimization',
    name: 'Quantum Biotech Optimization',
    tagline: 'Quantum-powered biotechnology optimization for protein folding and molecular dynamics',
    price: '$15,999',
    period: '/month',
    description: 'Revolutionary biotechnology optimization platform that uses quantum computing to solve complex protein folding problems, simulate molecular dynamics, and optimize biological processes.',
    features: [
      'Quantum protein folding',
      'Molecular dynamics simulation',
      'Biological process optimization',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Efficiency analysis',
      'Regulatory compliance',
      'Multi-process support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-biotech-optimization',
    marketPosition: 'Advanced quantum computing platform for biotechnology optimization and protein folding.',
    targetAudience: 'Advanced biotech companies, Research institutions, Pharmaceutical companies, Government agencies',
    trialDays: 60,
    setupTime: '3 months',
    category: 'Biotechnology & Life Sciences',
    realService: true,
    technology: ['Quantum computing, Protein folding, Molecular dynamics, Biological optimization, Python'],
    integrations: ['Laboratory systems, Protein databases, Simulation tools, Analytics platforms'],
    useCases: ['Protein folding, Molecular simulation, Biological optimization, Process improvement'],
    roi: 'Solve previously unsolvable protein folding problems and accelerate research by 1000%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$22.8B+ quantum biotech market',
    growthRate: '720% YoY',
    variant: 'biotech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum biotech optimization platform with advanced protein folding and molecular dynamics capabilities.',
    launchDate: '2025-01-09',
    customers: 6,
    rating: 4.7,
    reviews: 4
  },
  {
    id: 'ai-powered-genomic-analysis',
    name: 'AI-Powered Genomic Analysis',
    tagline: 'Intelligent genomic analysis with AI-powered sequence interpretation and variant detection',
    price: '$2,999',
    period: '/month',
    description: 'Advanced genomic analysis platform that uses AI to interpret DNA sequences, detect genetic variants, and provide personalized insights for healthcare and research applications.',
    features: [
      'AI-powered sequence interpretation',
      'Variant detection',
      'Personalized insights',
      'Real-time analysis',
      'Performance analytics',
      'Integration capabilities',
      'Custom analysis models',
      'Multi-genome support',
      'Compliance management'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-genomic-analysis',
    marketPosition: 'Leading AI-powered genomic analysis platform for sequence interpretation and variant detection.',
    targetAudience: 'Healthcare providers, Research institutions, Genetic testing companies, Pharmaceutical companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Biotechnology & Life Sciences',
    realService: true,
    technology: ['AI/ML, Genomic analytics, Sequence analysis, Variant detection, Machine learning'],
    integrations: ['Sequencing platforms, Genetic databases, Healthcare systems, Analytics tools'],
    useCases: ['Sequence interpretation, Variant detection, Personalized medicine, Research analysis'],
    roi: 'Improve variant detection accuracy by 80% and reduce analysis time by 70%',
    competitors: ['Illumina, 23andMe, AncestryDNA, MyHeritage'],
    marketSize: '$27.6B+ genomics market',
    growthRate: '240% YoY',
    variant: 'biotech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered genomic analysis platform with intelligent sequence interpretation and variant detection capabilities.',
    launchDate: '2025-01-14',
    customers: 234,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 'blockchain-biotech-verification',
    name: 'Blockchain Biotech Verification',
    tagline: 'Immutable biotech verification with blockchain technology and transparent research tracking',
    price: '$3,299',
    period: '/month',
    description: 'Advanced biotech verification platform that uses blockchain technology to provide transparent, verifiable, and immutable tracking of research data, clinical trials, and regulatory approvals.',
    features: [
      'Blockchain-based verification',
      'Research data tracking',
      'Clinical trial transparency',
      'Real-time monitoring',
      'Compliance verification',
      'Performance analytics',
      'Multi-party collaboration',
      'API integration',
      'Mobile app support'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-biotech-verification',
    marketPosition: 'Advanced blockchain platform for transparent biotech verification and research tracking.',
    targetAudience: 'Biotech companies, Research institutions, Regulatory agencies, Clinical trial organizations',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Biotechnology & Life Sciences',
    realService: true,
    technology: ['Blockchain, Biotech verification, Research tracking, Immutable records, Web3'],
    integrations: ['Research databases, Clinical trial systems, Regulatory databases, Government systems'],
    useCases: ['Research verification, Clinical trial tracking, Regulatory compliance, Data transparency'],
    roi: 'Improve research transparency by 100% and reduce regulatory fraud by 90%',
    competitors: ['ClinicalTrials.gov, WHO ICTRP, EU Clinical Trials Register, FDA Clinical Trials'],
    marketSize: '$24.8B+ biotech verification market',
    growthRate: '480% YoY',
    variant: 'biotech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain biotech verification platform with research tracking and immutable verification capabilities.',
    launchDate: '2025-01-18',
    customers: 67,
    rating: 4.5,
    reviews: 48
  },
  {
    id: 'ai-powered-precision-medicine',
    name: 'AI-Powered Precision Medicine',
    tagline: 'Intelligent precision medicine with AI-powered treatment optimization and personalized care',
    price: '$3,799',
    period: '/month',
    description: 'Advanced precision medicine platform that uses AI to optimize treatment plans, personalize patient care, and improve healthcare outcomes for medical professionals.',
    features: [
      'AI-powered treatment optimization',
      'Personalized care plans',
      'Patient outcome prediction',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom treatment models',
      'Multi-patient support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-precision-medicine',
    marketPosition: 'Leading AI-powered precision medicine platform for treatment optimization and personalized care.',
    targetAudience: 'Healthcare providers, Hospitals, Medical research institutions, Pharmaceutical companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Biotechnology & Life Sciences',
    realService: true,
    technology: ['AI/ML, Precision medicine, Treatment optimization, Patient analytics, Machine learning'],
    integrations: ['Electronic health records, Medical devices, Laboratory systems, Analytics platforms'],
    useCases: ['Treatment optimization, Personalized care, Outcome prediction, Healthcare improvement'],
    roi: 'Improve treatment outcomes by 45% and reduce healthcare costs by 30%',
    competitors: ['Foundation Medicine, Guardant Health, Tempus, Caris Life Sciences'],
    marketSize: '$78.6B+ precision medicine market',
    growthRate: '320% YoY',
    variant: 'biotech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered precision medicine platform with intelligent treatment optimization and personalized care capabilities.',
    launchDate: '2025-01-25',
    customers: 145,
    rating: 4.7,
    reviews: 112
  }
];