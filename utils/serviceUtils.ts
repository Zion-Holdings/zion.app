// Utility functions for handling service data consistently across the application

export interface ServicePrice {
  monthly?: number;
  yearly?: number;
  currency?: string;
  trialDays?: number;
  setupTime?: string;
  starter?: string | number;
}

export interface BaseService {
  id: string;
  name: string;
  price?: string | ServicePrice;
  pricing?: {
    monthly?: string | number;
    yearly?: string | number;
    starter?: string | number;
    [key: string]: any;
  };
  [key: string]: any;
}

/**
 * Safely renders a service price as a string
 * Handles both string and object price structures
 */
export function renderServicePrice(service: BaseService): string {
  // Handle pricing property first (some services use this instead of price)
  if (service.pricing) {
    if (service.pricing.starter) {
      const starter = service.pricing.starter;
      return typeof starter === 'number' ? `$${starter}/month` : starter;
    }
    if (service.pricing.monthly) return `$${service.pricing.monthly}/month`;
    if (service.pricing.yearly) return `$${service.pricing.yearly}/year`;
  }
  
  // Handle price property
  if (service.price) {
    // Handle string prices
    if (typeof service.price === 'string') {
      return service.price;
    }
    
    // Handle object prices
    if (typeof service.price === 'object') {
      if (service.price.monthly) return `$${service.price.monthly}/month`;
      if (service.price.starter) {
        const starter = service.price.starter;
        return typeof starter === 'number' ? `$${starter}/month` : starter;
      }
      if (service.price.yearly) return `$${service.price.yearly}/year`;
    }
  }
  
  return 'Contact for pricing';
}

/**
 * Gets a numeric price value for sorting purposes
 */
export function getNumericPrice(service: BaseService): number {
  const priceStr = renderServicePrice(service);
  const match = priceStr.match(/\$?([0-9,]+)/);
  return match ? parseInt(match[1].replace(/,/g, '')) : 0;
}

/**
 * Gets a service description safely
 */
export function getServiceDescription(service: BaseService): string {
  return service.description || service.tagline || 'No description available';
}

/**
 * Gets service features safely
 */
export function getServiceFeatures(service: BaseService): string[] {
  return service.features || service.keyFeatures || [];
}

/**
 * Gets service category safely
 */
export function getServiceCategory(service: BaseService): string {
  return service.category || service.type || 'Other';
}