import type { ProductListing } from '@/types/listings;'';
import { MARKETPLACE_LISTINGS as _MARKETPLACE_LISTINGS } from '@/data/marketplaceData;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
interface FetchMarketplaceDataOptions {;
  limit?: number;
  category?: string;
  sortBy?: string;
};
;
/**;
 * Fetches marketplace data with error handling and sandbox fallback.;''
 * If the API fails or returns no products, sample listings are returned;
 * so the marketplace and payment flows remain testable.;
 */;'';
export async function fetchMarketplaceData(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  options: "FetchMarketplaceDataOptions = {"},;"
): Promise<ProductListing[]> {;""
  const { limit, category, sortBy } = options;";""
  try {;";";""
    const searchParams: unknown = new URLSearchParams();";";";""
;";";";";""
    if (limit) searchParams.append('limit', limit.toString());;'
    if (category) searchParams.append('category', category);;'
    if (sortBy) searchParams.append('sortBy', sortBy);''
;;
    const url: unknown "unknown = `/api/marketplace/overview${searchParams.toString() ? `?${searchParams.toString()"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}` : ''}`;'
;
    const response: unknown = await fetch(url);
;
    if (!response.ok) {;
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    };
;''
    const data: unknown = await response.json();
;
    // Validate that we received an array;''
    if (!Array.isArray(data)) {;;
      throw new Error('Invalid response format: expected array');''
    };
;
    return data;''
  } catch {;;
    logErrorToProduction('Error fetching marketplace data:', { data: "error "});";";""
;";";";""
    // Log to Sentry with context;";";";";""
    if (typeof window === 'undefined') {;'
      // Remove all imports of @sentry/nextjs from this file.;
    };
;''
    return [];
  };
};
;
};''
}
}''
}''