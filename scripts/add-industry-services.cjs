// Add new industry-specific AI services to the catalog
const fs = require('fs');
const path = require('path');

const SERVICES_FILE = path.join(__dirname, '../app/data/servicesData.json');

const NEW_SERVICES = [
  // Financial Services
  {
    name: 'AI Anti-Money Laundering Intelligence',
    description: 'AI-powered transaction monitoring for suspicious activity detection using machine learning.',
    category: 'ai',
    industry: 'financial-services',
    features: ['Real-time monitoring', 'Behavioral analysis', 'SAR filing automation'],
    benefits: ['40% false positive reduction', '99% detection accuracy', '24/7 coverage'],
    pricing: { 'basic': '$499', 'pro': '$1,299', 'enterprise': '$4,999' },
    id: 'ai-anti-money-laundering-intelligence',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-anti-money-laundering-intelligence', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️', href: '/services/ai-anti-money-laundering-intelligence', popular: true
  },
  {
    name: 'AI KYC Identity Verification',
    description: 'Automated Know Your Customer verification using computer vision and facial recognition.',
    category: 'ai',
    industry: 'financial-services',
    features: ['Document verification', 'Facial biometric matching', 'Liveness detection'],
    benefits: ['Onboarding in seconds', '99.9% accuracy', 'HIPAA compliant'],
    pricing: { 'basic': '$299', 'pro': '$799', 'enterprise': '$2,499' },
    id: 'ai-kyc-identity-verification',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-kyc-identity-verification', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🆔', href: '/services/ai-kyc-identity-verification', popular: true
  },
  {
    name: 'AI Credit Risk Scoring',
    description: 'Machine learning models for creditworthiness prediction using alternative data.',
    category: 'ai',
    industry: 'financial-services',
    features: ['Alternative data scoring', 'Real-time assessment', 'Default probability'],
    benefits: ['30% default reduction', 'Faster approvals', 'Better returns'],
    pricing: { 'basic': '$399', 'pro': '$999', 'enterprise': '$3,499' },
    id: 'ai-credit-risk-scoring',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-credit-risk-scoring', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊', href: '/services/ai-credit-risk-scoring', popular: true
  },
  // Healthcare
  {
    name: 'AI Medical Diagnosis Assistant',
    description: 'Clinical decision support with medical image analysis and differential diagnosis.',
    category: 'ai',
    industry: 'healthcare',
    features: ['Image analysis', 'Symptom recognition', 'Treatment recommendations'],
    benefits: ['25% diagnosis improvement', 'Reduced time', 'Second opinion support'],
    pricing: { 'basic': '$599', 'pro': '$1,499', 'enterprise': '$4,999' },
    id: 'ai-medical-diagnosis-assistant',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-medical-diagnosis-assistant', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🩺', href: '/services/ai-medical-diagnosis-assistant', popular: true
  },
  {
    name: 'AI Telemedicine Platform',
    description: 'Telehealth solution with AI symptom triage and remote patient monitoring.',
    category: 'ai',
    industry: 'healthcare',
    features: ['Symptom triage', 'Video scheduling', 'Remote monitoring', 'Billing automation'],
    benefits: ['70% admin reduction', '24/7 access', 'HIPAA compliant'],
    pricing: { 'basic': '$799', 'pro': '$1,999', 'enterprise': '$4,999' },
    id: 'ai-telemedicine-platform',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-telemedicine-platform', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📞', href: '/services/ai-telemedicine-platform', popular: true
  },
  // Retail
  {
    name: 'AI Personalized Product Recommendations',
    description: 'Advanced recommendation engine for e-commerce personalization.',
    category: 'ai',
    industry: 'retail',
    features: ['Real-time recommendations', 'Multi-channel integration', 'A/B testing'],
    benefits: ['18% conversion increase', '30% higher order value', 'Improved loyalty'],
    pricing: { 'basic': '$299', 'pro': '$799', 'enterprise': '$2,499' },
    id: 'ai-personalized-product-recommendations',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-personalized-product-recommendations', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛍️', href: '/services/ai-personalized-product-recommendations', popular: true
  },
  {
    name: 'AI Demand Forecasting',
    description: 'Machine learning demand prediction for inventory optimization.',
    category: 'ai',
    industry: 'retail',
    features: ['Multi-variable forecasting', 'Seasonality analysis', 'Supply chain integration'],
    benefits: ['25% stockout reduction', '30% inventory cost savings', 'Better accuracy'],
    pricing: { 'basic': '$399', 'pro': '$999', 'enterprise': '$3,499' },
    id: 'ai-demand-forecasting',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-demand-forecasting', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊', href: '/services/ai-demand-forecasting', popular: true
  },
  // Manufacturing
  {
    name: 'AI Computer Vision Quality Inspection',
    description: 'Automated visual quality control detecting defects using computer vision.',
    category: 'ai',
    industry: 'manufacturing',
    features: ['Defect detection', 'Real-time inspection', 'Quality dashboard'],
    benefits: ['99.5% accuracy', '35% defect reduction', '24/7 monitoring'],
    pricing: { 'basic': '$799', 'pro': '$1,999', 'enterprise': '$4,999' },
    id: 'ai-computer-vision-quality-inspection',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-computer-vision-quality-inspection', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '👁️', href: '/services/ai-computer-vision-quality-inspection', popular: true
  },
  {
    name: 'AI Predictive Maintenance',
    description: 'IoT-enabled predictive maintenance for equipment health monitoring.',
    category: 'ai',
    industry: 'manufacturing',
    features: ['Health monitoring', 'Failure prediction', 'Maintenance scheduling'],
    benefits: ['40% downtime reduction', '20% maintenance savings', 'Extended equipment life'],
    pricing: { 'basic': '$699', 'pro': '$1,699', 'enterprise': '$4,499' },
    id: 'ai-predictive-maintenance',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-predictive-maintenance', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔧', href: '/services/ai-predictive-maintenance', popular: true
  },
  // Logistics
  {
    name: 'AI Route Optimizer Pro',
    description: 'Advanced route optimization with real-time traffic integration.',
    category: 'ai',
    industry: 'logistics',
    features: ['Multi-stop optimization', 'Traffic integration', 'Fuel minimization'],
    benefits: ['22% delivery cost reduction', '30% faster deliveries', 'Improved satisfaction'],
    pricing: { 'basic': '$499', 'pro': '$1,299', 'enterprise': '$3,999' },
    id: 'ai-route-optimizer-pro',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-route-optimizer-pro', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🚚', href: '/services/ai-route-optimizer-pro', popular: true
  },
  {
    name: 'AI Supply Chain Visibility',
    description: 'End-to-end supply chain tracking and delay prediction.',
    category: 'ai',
    industry: 'logistics',
    features: ['Shipment tracking', 'Delay prediction', 'Inventory visibility'],
    benefits: ['30% disruption reduction', 'Improved accuracy', 'Proactive risk mitigation'],
    pricing: { 'basic': '$599', 'pro': '$1,499', 'enterprise': '$3,999' },
    id: 'ai-supply-chain-visibility',
    timestamp: new Date().toISOString(),
    contactInfo: { website: '/services/ai-supply-chain-visibility', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐', href: '/services/ai-supply-chain-visibility', popular: true
  }
];

const data = JSON.parse(fs.readFileSync(SERVICES_FILE, 'utf-8'));
const existingIds = new Set(data.services.map(s => s.id));
const newServices = NEW_SERVICES.filter(s => !existingIds.has(s.id));

if (newServices.length > 0) {
  data.services = [...newServices, ...data.services];
  fs.writeFileSync(SERVICES_FILE, JSON.stringify(data, null, 2));
  console.log(`Added ${newServices.length} new industry services`);
} else {
  console.log('All services already exist');
}