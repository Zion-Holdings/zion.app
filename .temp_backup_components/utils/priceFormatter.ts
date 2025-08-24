export interface PriceObject {
  monthly?: number;
  yearly?: number;
  starter?: number;
  currency?: string;
  trialDays?: number;
  setupTime?: string;
}

export function formatServicePrice(price: string | PriceObject | undefined): string {
  // Handle complex price objects
  if (price && typeof price === 'object') {
    if (price.monthly) return `$${price.monthly.toLocaleString()}/month`;
    if (price.yearly) return `$${price.yearly.toLocaleString()}/year`;
    if (price.starter) return `$${price.starter.toLocaleString()}/month`;
    return 'Contact for pricing';
  }
  
  // Handle string prices
  if (typeof price === 'string') {
    return price;
  }
  
  // Handle undefined or null
  return 'Contact for pricing';
}

export function getPriceForSorting(service: any): number {
  // Handle price property
  if (service.price) {
    if (typeof service.price === 'object') {
      if (service.price.monthly) return service.price.monthly;
      if (service.price.yearly) return service.price.yearly / 12; // Convert yearly to monthly equivalent
      if (service.price.starter) return service.price.starter;
      return 0;
    }
    
    if (typeof service.price === 'string') {
      const numericPrice = parseFloat(service.price.replace(/[^0-9.]/g, ''));
      return isNaN(numericPrice) ? 0 : numericPrice;
    }
  }
  
  // Handle pricing property
  if (service.pricing) {
    if (service.pricing.monthly) return service.pricing.monthly;
    if (service.pricing.starter) return service.pricing.starter;
    if (service.pricing.yearly) return service.pricing.yearly / 12;
    return 0;
  }
  
  return 0;
}