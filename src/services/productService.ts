import { ProductDetailsData } from '../types/product';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';

export async function fetchProductById(productId: string): Promise<ProductDetailsData | null> {

  try {
    // During build time, return a mock product to avoid API calls
    if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
      return {
        id: productId,
        name: 'Sample Product',
        title: 'Sample Product',
        description: 'This is a sample product for build time',
        price: 99.99,
        currency: 'USD',
        category: 'general',
        tags: [],
        images: null,
        averageRating: null,
        reviewCount: 0,
        specifications: null,
        priceTiers: null
      };
    }

    const response = await fetch(`/api/marketplace/product/${productId}`);

    if (response.status === 404) {
      logWarn(`Product with ID "${productId}" not found.`);
      return null;
    }

    if (!response.ok) {
      // Log the error status and text for more context
      const errorText = await response.text();
      logErrorToProduction('Error fetching product ${productId}: ${response.status} ${response.statusText}', { data: errorText });
      throw new Error(`Failed to fetch product data. Status: ${response.status}`);
    }

    const data: ProductDetailsData = await response.json();
    return data;
  } catch (error) {
    logErrorToProduction('An error occurred in fetchProductById:', { data: error });
    // During build time, return null instead of throwing
    if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
      return null;
    }
    // Depending on how you want to handle errors upstream, you might re-throw or return null
    // For now, re-throwing to let the caller decide.
    throw error;
  }
}
