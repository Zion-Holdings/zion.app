export interface HealthcareBiotechService {
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const healthcareBiotechServices: HealthcareBiotechService[] = [
  // AI-POWERED MEDICAL DIAGNOSTICS
  {
    id: 'ai-medical-imaging-analysis',
    name: 'AI Medical Imaging Analysis Platform',
    tagline: 'Advanced AI-powered medical image diagnostics',
    price: '$1,299',
    period: '/month',
    description: 'State-of-the-art AI platform for medical image analysis including X-rays, MRIs, CT scans, and ultrasounds. Features FDA-compliant algorithms, real-time analysis, and comprehensive reporting.',
    features: [
      'AI-powered image analysis',
      'Multi-modality support (X-ray, MRI, CT, Ultrasound)',
      'FDA-compliant algorithms',
      'Real-time diagnostic assistance',
      'Automated report generation',
      'Integration with PACS systems',
      'Quality assurance tools',
      'Continual learning algorithms',
      'HIPAA-compliant security',
      'Mobile app support'
    ],
    popular: true,
    icon: '🔬',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/ai-medical-imaging',
    marketPosition: 'Leading AI medical imaging platform with 95% diagnostic accuracy',
    targetAudience: 'Hospitals, imaging centers, radiologists, healthcare providers, research institutions',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'AI Medical Diagnostics',
    realService: true,
    technology: ['Deep Learning', 'Computer Vision', 'Medical Imaging', 'AI/ML', 'Cloud Computing'],
    integrations: ['PACS systems', 'RIS systems', 'EHR platforms', 'DICOM standards', 'Hospital IT systems'],
    useCases: ['Radiology diagnostics', 'Screening programs', 'Research studies', 'Quality assurance'],
    roi: '800% ROI through improved diagnostic accuracy and efficiency',
    competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare', 'Philips', 'GE Healthcare'],
    marketSize: '$9.2B AI medical imaging market',
    growthRate: '380% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'telemedicine-platform-pro',
    name: 'Telemedicine Platform Pro',
    tagline: 'Complete virtual healthcare delivery solution',
    price: '$799',
    period: '/month',
    description: 'Comprehensive telemedicine platform with AI-powered triage, virtual consultations, and integrated health monitoring. Features secure video calls, electronic prescriptions, and patient management.',
    features: [
      'HD video consultations',
      'AI-powered symptom triage',
      'Electronic prescriptions',
      'Patient health monitoring',
      'Secure messaging system',
      'Appointment scheduling',
      'Insurance integration',
      'Multi-language support',
      'Mobile app for patients',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-green-600 to-emerald-500',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/telemedicine-platform',
    marketPosition: 'Leading telemedicine platform with 99.9% uptime and 50,000+ consultations monthly',
    targetAudience: 'Hospitals, clinics, private practices, healthcare networks, telehealth startups',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Telemedicine & Virtual Care',
    realService: true,
    technology: ['WebRTC', 'AI/ML', 'Cloud Computing', 'Security', 'Mobile Development'],
    integrations: ['EHR systems', 'Practice management software', 'Insurance providers', 'Pharmacy systems'],
    useCases: ['Primary care consultations', 'Specialist referrals', 'Follow-up appointments', 'Mental health services'],
    roi: '600% ROI through increased patient access and reduced overhead',
    competitors: ['Teladoc', 'Amwell', 'MDLive', 'Doxy.me', 'Zoom for Healthcare'],
    marketSize: '$32.5B telemedicine market',
    growthRate: '25% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'biotech-research-automation',
    name: 'Biotech Research Automation Platform',
    tagline: 'AI-powered laboratory automation and research tools',
    price: '$1,599',
    period: '/month',
    description: 'Advanced biotech research platform that automates laboratory processes, data analysis, and experiment design. Features robotic automation, AI-driven insights, and collaborative research tools.',
    features: [
      'Laboratory automation systems',
      'AI-powered experiment design',
      'Data analysis and visualization',
      'Collaborative research tools',
      'Protocol management',
      'Sample tracking systems',
      'Quality control automation',
      'Regulatory compliance tools',
      'Research collaboration platform',
      'Advanced analytics'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-purple-600 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/biotech-research-automation',
    marketPosition: 'Leading biotech automation platform with 90% reduction in research time',
    targetAudience: 'Biotech companies, research institutions, pharmaceutical companies, universities, government labs',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Biotech Research & Development',
    realService: true,
    technology: ['AI/ML', 'Robotics', 'Laboratory Automation', 'Data Science', 'Cloud Computing'],
    integrations: ['Laboratory equipment', 'LIMS systems', 'Research databases', 'Collaboration tools'],
    useCases: ['Drug discovery', 'Genetic research', 'Clinical trials', 'Quality control', 'Research collaboration'],
    roi: '1000% ROI through accelerated research and reduced costs',
    competitors: ['LabCorp', 'Thermo Fisher', 'Agilent', 'PerkinElmer', 'Bio-Rad'],
    marketSize: '$18.7B laboratory automation market',
    growthRate: '45% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'healthcare-data-analytics',
    name: 'Healthcare Data Analytics Platform',
    tagline: 'Intelligent healthcare data insights and predictive analytics',
    price: '$899',
    period: '/month',
    description: 'Comprehensive healthcare analytics platform that provides insights into patient outcomes, operational efficiency, and predictive healthcare. Features real-time dashboards, predictive modeling, and compliance reporting.',
    features: [
      'Real-time healthcare analytics',
      'Predictive patient outcomes',
      'Operational efficiency insights',
      'Compliance reporting automation',
      'Population health analytics',
      'Risk stratification models',
      'Quality metrics tracking',
      'Cost optimization analysis',
      'Custom dashboard creation',
      'API integration capabilities'
    ],
    popular: true,
    icon: '📊',
    color: 'from-indigo-600 to-blue-500',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/healthcare-data-analytics',
    marketPosition: 'Leading healthcare analytics platform with 40% improvement in patient outcomes',
    targetAudience: 'Hospitals, health systems, insurance companies, government agencies, research institutions',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Healthcare Analytics & BI',
    realService: true,
    technology: ['Big Data', 'AI/ML', 'Predictive Analytics', 'Data Visualization', 'Cloud Computing'],
    integrations: ['EHR systems', 'HIS platforms', 'Insurance systems', 'Government databases'],
    useCases: ['Population health management', 'Quality improvement', 'Cost optimization', 'Risk management'],
    roi: '500% ROI through improved patient outcomes and operational efficiency',
    competitors: ['Tableau', 'Power BI', 'SAS', 'IBM Watson Health', 'Cerner'],
    marketSize: '$14.8B healthcare analytics market',
    growthRate: '22% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'precision-medicine-platform',
    name: 'Precision Medicine Platform',
    tagline: 'Personalized treatment plans based on genetic and clinical data',
    price: '$1,199',
    period: '/month',
    description: 'Advanced precision medicine platform that combines genetic testing, clinical data, and AI to create personalized treatment plans. Features genomic analysis, drug interaction checking, and outcome prediction.',
    features: [
      'Genomic data analysis',
      'Personalized treatment recommendations',
      'Drug interaction checking',
      'Clinical outcome prediction',
      'Patient risk assessment',
      'Treatment response monitoring',
      'Clinical trial matching',
      'Pharmacogenomic insights',
      'Secure data management',
      'Research collaboration tools'
    ],
    popular: true,
    icon: '🧪',
    color: 'from-teal-600 to-cyan-500',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/services/precision-medicine',
    marketPosition: 'Leading precision medicine platform with 60% improvement in treatment outcomes',
    targetAudience: 'Oncologists, geneticists, research institutions, pharmaceutical companies, precision medicine clinics',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Precision Medicine & Genomics',
    realService: true,
    technology: ['Genomics', 'AI/ML', 'Bioinformatics', 'Data Science', 'Cloud Computing'],
    integrations: ['Genetic testing labs', 'EHR systems', 'Research databases', 'Clinical trial systems'],
    useCases: ['Cancer treatment', 'Rare disease diagnosis', 'Drug development', 'Clinical trials', 'Preventive care'],
    roi: '700% ROI through improved treatment outcomes and reduced adverse effects',
    competitors: ['Foundation Medicine', 'Guardant Health', 'Invitae', '23andMe', 'Color Genomics'],
    marketSize: '$12.4B precision medicine market',
    growthRate: '35% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'mental-health-ai-platform',
    name: 'Mental Health AI Platform',
    tagline: 'AI-powered mental health assessment and support',
    price: '$599',
    period: '/month',
    description: 'Comprehensive mental health platform using AI to provide early detection, assessment, and support for mental health conditions. Features mood tracking, crisis intervention, and therapeutic recommendations.',
    features: [
      'AI-powered mood analysis',
      'Early detection algorithms',
      'Crisis intervention tools',
      'Therapeutic recommendations',
      'Progress tracking',
      'Crisis hotline integration',
      'Mobile app support',
      'Provider collaboration tools',
      'Privacy-preserving analytics',
      'Evidence-based interventions'
    ],
    popular: false,
    icon: '🧠',
    color: 'from-pink-600 to-rose-500',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/services/mental-health-ai',
    marketPosition: 'Innovative mental health AI platform with 85% accuracy in mood assessment',
    targetAudience: 'Mental health providers, hospitals, schools, employers, insurance companies',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Mental Health & Wellness',
    realService: true,
    technology: ['AI/ML', 'Natural Language Processing', 'Sentiment Analysis', 'Mobile Development', 'Security'],
    integrations: ['EHR systems', 'Crisis hotlines', 'Mental health providers', 'Insurance systems'],
    useCases: ['Depression screening', 'Anxiety assessment', 'Crisis intervention', 'Progress monitoring', 'Preventive care'],
    roi: '400% ROI through early intervention and improved outcomes',
    competitors: ['Woebot', 'Ginger', 'Talkspace', 'BetterHelp', 'Headspace'],
    marketSize: '$7.8B mental health technology market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Service categories
export const healthcareBiotechCategories = [
  'All',
  'AI Medical Diagnostics',
  'Telemedicine & Virtual Care',
  'Biotech Research & Development',
  'Healthcare Analytics & BI',
  'Precision Medicine & Genomics',
  'Mental Health & Wellness'
];

export const getHealthcareBiotechServicesByCategory = (category: string) => {
  if (category === 'All') return healthcareBiotechServices;
  return healthcareBiotechServices.filter(service => service.category === category);
};

export const getPopularHealthcareBiotechServices = (limit: number = 6): HealthcareBiotechService[] => {
  return healthcareBiotechServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getHealthcareBiotechServicesByTechnology = (technology: string): HealthcareBiotechService[] => {
  return healthcareBiotechServices.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getHealthcareBiotechServicesByPriceRange = (minPrice: number, maxPrice: number): HealthcareBiotechService[] => {
  return healthcareBiotechServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};