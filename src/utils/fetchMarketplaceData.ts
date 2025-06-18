import * as Sentry from '@sentry/nextjs';
import { ProductListing } from '@/types/listings';

interface FetchMarketplaceDataOptions {
  limit?: number;
  category?: string;
  sortBy?: string;
}

/**
 * Fetches marketplace data with error handling and fallback
 * Returns fallback empty array if any error occurs
 */
export async function fetchMarketplaceData(
  options: FetchMarketplaceDataOptions = {}
): Promise<ProductListing[]> {
  try {
    const { limit, category, sortBy } = options;
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
    
    return data;
  } catch (error) {
    console.error('Error fetching marketplace data:', error);
    
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
    
    // Return fallback empty array
    return [];
  }
} 