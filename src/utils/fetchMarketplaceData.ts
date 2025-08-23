import * as Sentry from '@sentry/nextjs';
import { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import {logErrorToProduction} from '@/utils/productionLogger';


interface FetchMarketplaceDataOptions {
  limit?: number;
  category?: string;
  sortBy?: string;
}

/**
 * Fetches marketplace data with error handling and sandbox fallback.
 * If the API fails or returns no products, sample listings are returned
 * so the marketplace and payment flows remain testable.
 */
export async function fetchMarketplaceData(
  options: FetchMarketplaceDataOptions = {}
): Promise<ProductListing[]> {
  const { limit, category, sortBy } = options;
  try {
    const searchParams = new URLSearchParams();
    
    if (limit) searchParams.append('limit', limit.toString());
    if (category) searchParams.append('category', category);
    if (sortBy) searchParams.append('sortBy', sortBy);
    
    const url = `/api/marketplace/overview${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();

    // Validate that we received an array
    if (!Array.isArray(data)) {
      throw new Error('Invalid response format: expected array');
    }

    // Fallback to sample listings if API returns no products
    if (data.length === 0) {
      const sample =
        typeof limit === 'number'
          ? MARKETPLACE_LISTINGS.slice(0, limit)
          : MARKETPLACE_LISTINGS;
      return sample;
    }

    return data;
  } catch (error) {
    logErrorToProduction('Error fetching marketplace data:', { data: error });
    
    // Log to Sentry with context
    Sentry.withScope((scope) => {
      scope.setTag('function', 'fetchMarketplaceData');
      scope.setContext('options', {
        limit: options.limit?.toString(),
        category: options.category || '',
        sortBy: options.sortBy || ''
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
    
    // Return sample listings as a fallback when the API call fails
    const sample =
      typeof limit === 'number'
        ? MARKETPLACE_LISTINGS.slice(0, limit)
        : MARKETPLACE_LISTINGS;
    return sample;
  }
}
