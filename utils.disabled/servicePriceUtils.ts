/**
 * Utility functions for safely handling service prices
 * Prevents React rendering errors when price objects are complex
 */

export interface PriceObject {
  monthly?: number;
  yearly?: number;
  currency?: string;
  trialDays?: number;
  setupTime?: string;
  starter?: string;
}

export interface PricingObject {
  starter?: string;
  monthly?: number;
  yearly?: number;
}

/**
 * Safely converts any price format to a displayable string
 */
export function formatServicePrice(price: string | PriceObject | PricingObject | undefined): string {
  try {
    // Handle undefined/null
    if (!price) {
      return 'Contact for pricing';
    }

    // Handle string prices
    if (typeof price === 'string') {
      return price;
    }

    // Handle pricing object (newer format)
    if ('starter' in price && price.starter) {
      return price.starter;
    }
    if ('monthly' in price && price.monthly) {
      return `$${price.monthly}/month`;
    }
    if ('yearly' in price && price.yearly) {
      return `$${price.yearly}/year`;
    }

    // Handle price object (older format)
    if ('monthly' in price && price.monthly) {
      return `$${price.monthly}/month`;
    }
    if ('starter' in price && price.starter) {
      return price.starter;
    }
    if ('yearly' in price && price.yearly) {
      return `$${price.yearly}/year`;
    }

    // Fallback
    return 'Contact for pricing';
  } catch (error) {
    console.error('Error formatting service price:', error, price);
    return 'Contact for pricing';
  }
}

/**
 * Safely extracts numeric price for sorting/comparison
 */
export function extractNumericPrice(price: string | PriceObject | PricingObject | undefined): number {
  try {
    if (!price) return 0;

    if (typeof price === 'string') {
      return parseInt(price.replace(/[^0-9]/g, '')) || 0;
    }

    if ('monthly' in price && typeof price.monthly === 'number') {
      return price.monthly;
    }

    if ('yearly' in price && typeof price.yearly === 'number') {
      return price.yearly;
    }

    return 0;
  } catch (error) {
    console.error('Error extracting numeric price:', error, price);
    return 0;
  }
}

/**
 * Checks if a price is a complex object that needs special handling
 */
export function isComplexPrice(price: any): boolean {
  return price && typeof price === 'object' && !Array.isArray(price);
}