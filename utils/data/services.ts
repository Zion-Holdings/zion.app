import { Service, ServiceCategory } from '../types/service';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    icon: '☁️',
    description: 'AWS, Azure, GCP, and cloud infrastructure solutions'
  },
  {
    id: 'ai-development',
    name: 'AI Development',
    icon: '🤖',
    description: 'Machine learning, AI models, and intelligent systems'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: '🔒',
    description: 'Security audits, penetration testing, and threat protection'
  },
  {
    id: 'software-development',
    name: 'Software Development',
    icon: '💻',
    description: 'Custom software, web apps, and mobile development'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: '📊',
    description: 'Business intelligence, data visualization, and analytics'
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: '⚙️',
    description: 'CI/CD, infrastructure automation, and deployment'
  },
  {
    id: 'it-support',
    name: 'IT Support',
    icon: '🛠️',
    description: 'Technical support, help desk, and IT consulting'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: '🚀',
    description: 'Digital strategy, process optimization, and innovation'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Cloud Migration & Infrastructure Setup',
    description: 'Complete cloud migration services including AWS/Azure setup, data migration, and infrastructure optimization.',
    providerName: 'TechFlow Solutions',
    price: { from: 5000, currency: 'USD', type: 'fixed' },
    category: 'Cloud Services',
    rating: 4.8,
    reviewCount: 127,
    deliveryTime: '2-4 weeks',
    location: 'New York, NY',
    experience: '8+ years',
    specialties: ['AWS Migration', 'Azure Setup', 'Infrastructure Optimization'],
    imageUrl: '/api/placeholder/400/200',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
    aiScore: 95
  },
  {
    id: '2',
    title: 'AI-Powered Security Monitoring',
    description: 'Advanced cybersecurity with AI-driven threat detection, 24/7 monitoring, and automated incident response.',
    providerName: 'CyberShield Pro',
    price: { from: 2500, currency: 'USD', type: 'monthly' },
    category: 'Cybersecurity',
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: '1-2 weeks',
    location: 'San Francisco, CA',
    experience: '12+ years',
    specialties: ['AI Security', 'Threat Detection', 'Incident Response'],
    imageUrl: '/api/placeholder/400/200',
    tags: ['Security', 'AI', 'Monitoring', 'Threat Detection'],
    aiScore: 92
  },
  {
    id: '3',
    title: 'Custom AI Model Development',
    description: 'End-to-end AI model development from data preparation to deployment. Specializing in computer vision and NLP.',
    providerName: 'AI Innovations Lab',
    price: { from: 15000, currency: 'USD', type: 'fixed' },
    category: 'AI Development',
    rating: 4.7,
    reviewCount: 156,
    deliveryTime: '1-2 months',
    location: 'Austin, TX',
    experience: '6+ years',
    specialties: ['Machine Learning', 'Computer Vision', 'NLP'],
    imageUrl: '/api/placeholder/400/200',
    tags: ['AI', 'Machine Learning', 'Computer Vision', 'NLP'],
    aiScore: 88
  }
]; 