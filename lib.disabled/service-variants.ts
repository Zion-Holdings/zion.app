// Export the ServiceVariant type from types
export type { ServiceVariant } from '../types/service-variants';

// Import the type for use in this file
import type { ServiceVariant } from '../types/service-variants';

// Utility functions for working with service variants
export const getServiceVariantCategory = (variant: ServiceVariant): string => {
  if (variant.includes('quantum')) return 'quantum';
  if (variant.includes('ai')) return 'ai';
  if (variant.includes('holographic')) return 'holographic';
  if (variant.includes('neural')) return 'neural';
  if (variant.includes('cyberpunk')) return 'cyberpunk';
  if (variant.includes('enterprise')) return 'enterprise';
  if (variant.includes('futuristic')) return 'futuristic';
  if (variant.includes('revolutionary')) return 'revolutionary';
  return 'default';
};

export const getServiceVariantPriority = (variant: ServiceVariant): number => {
  if (variant.includes('revolutionary')) return 1;
  if (variant.includes('advanced')) return 2;
  if (variant.includes('futuristic')) return 3;
  if (variant.includes('quantum')) return 4;
  if (variant.includes('ai')) return 5;
  if (variant.includes('holographic')) return 6;
  if (variant.includes('neural')) return 7;
  if (variant.includes('cyberpunk')) return 8;
  return 9;
};

export const isPremiumVariant = (variant: ServiceVariant): boolean => {
  return variant.includes('revolutionary') || 
         variant.includes('advanced') || 
         variant.includes('futuristic');
};

export const getServiceVariantColor = (variant: ServiceVariant): string => {
  if (variant.includes('quantum')) return 'from-blue-500 to-indigo-600';
  if (variant.includes('ai')) return 'from-purple-500 to-pink-600';
  if (variant.includes('holographic')) return 'from-cyan-500 to-blue-600';
  if (variant.includes('neural')) return 'from-green-500 to-emerald-600';
  if (variant.includes('cyberpunk')) return 'from-red-500 to-pink-600';
  if (variant.includes('enterprise')) return 'from-gray-500 to-slate-600';
  if (variant.includes('futuristic')) return 'from-violet-500 to-purple-600';
  if (variant.includes('revolutionary')) return 'from-orange-500 to-red-600';
  return 'from-gray-500 to-slate-600';
};

export const getServiceVariantIcon = (variant: ServiceVariant): string => {
  if (variant.includes('quantum')) return '⚛️';
  if (variant.includes('ai')) return '🤖';
  if (variant.includes('holographic')) return '💎';
  if (variant.includes('neural')) return '🧠';
  if (variant.includes('cyberpunk')) return '🔮';
  if (variant.includes('enterprise')) return '🏢';
  if (variant.includes('futuristic')) return '🚀';
  if (variant.includes('revolutionary')) return '⚡';
  return '🔧';
};

export const validateServiceVariant = (variant: string): variant is ServiceVariant => {
  const validVariants: ServiceVariant[] = [
    'default',
    'holographic',
    'quantum',
    'cyberpunk',
    'neural',
    'quantum-holographic',
    'quantum-advanced',
    'holographic-advanced',
    'neural-quantum',
    'quantum-cyberpunk',
    'holographic-neural',
    'quantum-holographic-advanced',
    'quantum-matrix',
    'neural-cyberpunk',
    'holographic-quantum',
    'quantum-neural-advanced',
    'cyberpunk-holographic',
    'quantum-space',
    'ai-futuristic',
    'quantum-entanglement',
    'holographic-matrix',
    'neural-quantum-cyberpunk',
    'quantum-iot',
    'quantum-logistics',
    'quantum-financial',
    'quantum-holographic',
    'quantum-neural',
    'quantum-cyberpunk',
    'neural-quantum-cyberpunk',
    'quantum-energy',
    'quantum-futuristic',
    'cloud-futuristic',
    'devops-futuristic',
    'security-futuristic',
    'data-futuristic',
    'mobility-futuristic',
    'network-futuristic',
    'backup-futuristic',
    'itsm-futuristic',
    'monitoring-futuristic',
    'blockchain-futuristic',
    'metaverse-futuristic',
    'iot-futuristic',
    'edge-futuristic',
    'ar-futuristic',
    'digital-twin-futuristic',
    '5g-futuristic',
    'biometric-futuristic',
    'autonomous-futuristic',
    'enterprise-futuristic',
    'holographic-futuristic',
    'ai-revolutionary',
    'quantum-revolutionary',
    'ai-quantum-revolutionary',
    'quantum-ai-revolutionary',
    'quantum-space-revolutionary',
    'quantum-iot-revolutionary',
    'quantum-energy-revolutionary',
    'quantum-logistics-revolutionary',
    'quantum-ai-finance',
    'ai-emotional',
    'ai-multimodal',
    'ai-autonomous',
    'ai-creative',
    'ai-healthcare',
    'ai-prediction',
    'neural-revolutionary',
    'quantum-security',
    'quantum-ai-interface',
    'ai-autonomous-vehicles',
    'quantum-iot-revolutionary',
    'space-futuristic',
    'consulting-futuristic',
    'api-futuristic',
    'integration-futuristic',
    'monitoring-futuristic',
    'backup-futuristic',
    'analytics-futuristic',
    'it-futuristic',
    'saas-futuristic',
    'micro-saas-futuristic',
    'business-intelligence-futuristic',
    'customer-service-futuristic',
    'marketing-futuristic',
    'sales-futuristic',
    'hr-futuristic',
    'finance-futuristic',
    'project-management-futuristic',
    'supply-chain-futuristic',
    'legal-futuristic',
    'healthcare-futuristic',
    'biotech-futuristic',
    'simulation-futuristic',
    'space-futuristic',
    'digital-marketing',
    'seo',
    'metaverse',
    'content-marketing',
    'social-media',
    'email-marketing',
    'influencer-marketing',
    'analytics',
    'brand-management',
    'customer-experience',
    'ai-ml',
    'quantum-edge',
    'cybersecurity',
    'logistics',
    'healthcare-biotech',
    'fintech',
    'space-tech',
    'human-augmentation',
    'energy-sustainability',
    'ai-consciousness',
    'quantum-reality',
    'temporal-analytics',
    'quantum-consciousness',
    'autonomous-reality',
    'quantum-biology',
    'multiversal-tech',
    'autonomous-ai',
    'data-analytics',
    'temporal-analytics',
    'quantum-consciousness',
    'autonomous-reality',
    'quantum-biology',
    'multiversal-tech',
    'autonomous-ai',
    'quantum-reality-fusion',
    'ai-legal',
    'ai-legal-enterprise',
    'ai-legal-document-enterprise',
    'quantum-finance-enterprise',
    'ai-healthcare-enterprise',
    'autonomous-supply-chain-enterprise',
    'quantum-cybersecurity-enterprise',
    'ai-creative-enterprise',
    'quantum-internet-enterprise',
    'ai-education-enterprise',
    'autonomous-manufacturing-enterprise',
    'quantum-encryption-advanced',
    'quantum-threat-detection',
    'quantum-identity-verification',
    'quantum-network-security',
    'quantum-compliance-automation',
    'consciousness-advanced-2032',
    'emotional-ai-advanced',
    'creativity-orchestration',
    'dream-interpretation',
    'autonomous-business',
    'marketing-futuristic',
    'quantum-finance',
    'ai-supply-chain'
  ];
  
  return validVariants.includes(variant as ServiceVariant);
};