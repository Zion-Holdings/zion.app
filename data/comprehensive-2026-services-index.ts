// Comprehensive 2026 Services Index
// This file provides easy access to all innovative 2026 services

export { innovative2026AIServices } from './innovative-2026-ai-services';
export { innovative2026BlockchainServices } from './innovative-2026-blockchain-services';
export { innovative2026CybersecurityServices } from './innovative-2026-cybersecurity-services';
export { innovative2026SpaceQuantumServices } from './innovative-2026-space-quantum-services';
export { innovative2026HealthcareBiotechServices } from './innovative-2026-healthcare-biotech-services';
export { innovative2026FintechServices } from './innovative-2026-fintech-services';
export { innovative2026EducationResearchServices } from './innovative-2026-education-research-services';
export { innovative2026ManufacturingLogisticsServices } from './innovative-2026-manufacturing-logistics-services';
export { innovative2026EnergySustainabilityServices } from './innovative-2026-energy-sustainability-services';
export { innovative2026EntertainmentMediaServices } from './innovative-2026-entertainment-media-services';

// Combined services array for easy access
import { innovative2026AIServices } from './innovative-2026-ai-services';
import { innovative2026BlockchainServices } from './innovative-2026-blockchain-services';
import { innovative2026CybersecurityServices } from './innovative-2026-cybersecurity-services';
import { innovative2026SpaceQuantumServices } from './innovative-2026-space-quantum-services';
import { innovative2026HealthcareBiotechServices } from './innovative-2026-healthcare-biotech-services';
import { innovative2026FintechServices } from './innovative-2026-fintech-services';
import { innovative2026EducationResearchServices } from './innovative-2026-education-research-services';
import { innovative2026ManufacturingLogisticsServices } from './innovative-2026-manufacturing-logistics-services';
import { innovative2026EnergySustainabilityServices } from './innovative-2026-energy-sustainability-services';
import { innovative2026EntertainmentMediaServices } from './innovative-2026-entertainment-media-services';

export const allInnovative2026Services = [
  ...innovative2026AIServices,
  ...innovative2026BlockchainServices,
  ...innovative2026CybersecurityServices,
  ...innovative2026SpaceQuantumServices,
  ...innovative2026HealthcareBiotechServices,
  ...innovative2026FintechServices,
  ...innovative2026EducationResearchServices,
  ...innovative2026ManufacturingLogisticsServices,
  ...innovative2026EnergySustainabilityServices,
  ...innovative2026EntertainmentMediaServices
];

// Service statistics
export const innovative2026ServiceStats = {
  totalServices: allInnovative2026Services.length,
  aiServices: innovative2026AIServices.length,
  blockchainServices: innovative2026BlockchainServices.length,
  cybersecurityServices: innovative2026CybersecurityServices.length,
  spaceQuantumServices: innovative2026SpaceQuantumServices.length,
  healthcareBiotechServices: innovative2026HealthcareBiotechServices.length,
  fintechServices: innovative2026FintechServices.length,
  educationResearchServices: innovative2026EducationResearchServices.length,
  manufacturingLogisticsServices: innovative2026ManufacturingLogisticsServices.length,
  energySustainabilityServices: innovative2026EnergySustainabilityServices.length,
  entertainmentMediaServices: innovative2026EntertainmentMediaServices.length
};

// Popular services
export const popularInnovative2026Services = allInnovative2026Services.filter(service => service.popular);

// Services by category
export const getInnovative2026ServicesByCategory = (category: string) => {
  return allInnovative2026Services.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

// Services by price range
export const getInnovative2026ServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return allInnovative2026Services.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};

// Services by technology
export const getInnovative2026ServicesByTechnology = (technology: string) => {
  return allInnovative2026Services.filter(service =>
    service.technology.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Services by target audience
export const getInnovative2026ServicesByTargetAudience = (audience: string) => {
  return allInnovative2026Services.filter(service =>
    service.targetAudience.toLowerCase().includes(audience.toLowerCase())
  );
};

// High ROI services (ROI > 400%)
export const highROIInnovative2026Services = allInnovative2026Services.filter(service => {
  const roi = parseInt(service.roi.match(/\d+/)?.[0] || '0');
  return roi > 400;
});

// Newest services (launched in 2026)
export const newestInnovative2026Services = allInnovative2026Services.filter(service =>
  service.launchDate.startsWith('2026')
);

// Services with highest ratings
export const topRatedInnovative2026Services = allInnovative2026Services
  .filter(service => service.rating >= 4.7)
  .sort((a, b) => b.rating - a.rating);

// Services by market size
export const getInnovative2026ServicesByMarketSize = (minSize: string) => {
  return allInnovative2026Services.filter(service => {
    const size = parseInt(service.marketSize.match(/\d+/)?.[0] || '0');
    const min = parseInt(minSize.match(/\d+/)?.[0] || '0');
    return size >= min;
  });
};

// Export individual service arrays for specific use cases
export {
  innovative2026AIServices as aiServices2026,
  innovative2026BlockchainServices as blockchainServices2026,
  innovative2026CybersecurityServices as cybersecurityServices2026,
  innovative2026SpaceQuantumServices as spaceQuantumServices2026,
  innovative2026HealthcareBiotechServices as healthcareBiotechServices2026,
  innovative2026FintechServices as fintechServices2026,
  innovative2026EducationResearchServices as educationResearchServices2026,
  innovative2026ManufacturingLogisticsServices as manufacturingLogisticsServices2026,
  innovative2026EnergySustainabilityServices as energySustainabilityServices2026,
  innovative2026EntertainmentMediaServices as entertainmentMediaServices2026
};