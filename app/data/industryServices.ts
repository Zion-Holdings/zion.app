export type IndustryService = {
  title: string;
  description: string;
  services: string[];
  roiMultiplier: number;
};

export const INDUSTRY_SERVICES: Record<string, IndustryService> = {
  'financial-services': {
    title: 'Financial Services AI Solutions',
    description: 'AI-powered fraud detection, compliance automation, and risk management for modern finance',
    services: [
      'ai-fraud-detection',
      'ai-anti-money-laundering',
      'ai-kyc-identity-verification',
      'ai-transaction-monitoring',
      'ai-credit-risk-scoring',
      'ai-regulatory-compliance',
      'ai-trade-finance-orchestrator',
      'ai-payment-reconciliation'
    ],
    roiMultiplier: 3.5
  },
  'healthcare': {
    title: 'Healthcare AI Solutions',
    description: 'Clinical intelligence, patient care automation, and medical compliance solutions',
    services: [
      'ai-medical-diagnosis-assistant',
      'ai-clinical-trial-optimizer',
      'ai-hipaa-compliance',
      'ai-ehr-data-extractor',
      'ai-prescription-intelligence',
      'ai-patient-outcome-predictor',
      'ai-medical-imaging-analysis',
      'ai-telemedicine-platform'
    ],
    roiMultiplier: 4.2
  },
  'retail': {
    title: 'Retail & E-commerce AI Solutions',
    description: 'Customer experience optimization, inventory management, and personalized commerce',
    services: [
      'ai-personalized-product-recommendations',
      'ai-demand-forecasting',
      'ai-pricing-optimization',
      'ai-customer-churn-prediction',
      'ai-visual-search',
      'ai-inventory-management',
      'ai-loyalty-program-optimizer',
      'ai-ecommerce-analytics'
    ],
    roiMultiplier: 3.8
  },
  'manufacturing': {
    title: 'Manufacturing AI Solutions',
    description: 'Predictive maintenance, quality control, and production optimization',
    services: [
      'ai-computer-vision-quality-inspection',
      'ai-predictive-maintenance',
      'ai-production-line-optimization',
      'ai-supply-chain-visibility',
      'ai-quality-assurance',
      'ai-demand-planning',
      'ai-energy-optimization',
      'ai-safety-compliance-monitor'
    ],
    roiMultiplier: 4.5
  },
  'logistics': {
    title: 'Logistics & Supply Chain AI Solutions',
    description: 'Route optimization, fleet management, and warehouse automation',
    services: [
      'ai-route-optimizer',
      'ai-fleet-management-gps',
      'ai-supply-chain-radar',
      'ai-warehouse-robotics',
      'ai-demand-planning',
      'ai-inventory-visibility',
      'ai-freight-rate-optimizer',
      'ai-last-mile-optimization'
    ],
    roiMultiplier: 3.2
  }
};
