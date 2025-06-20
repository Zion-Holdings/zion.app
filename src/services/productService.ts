import { ProductDetailsData } from '../types/product';

export async function fetchProductById(productId: string): Promise<ProductDetailsData | null> {
  try {
    const response = await fetch(`/api/marketplace/product/${productId}`);

    if (response.status === 404) {
      console.warn(`Product with ID "${productId}" not found.`);
      return null;
    }

    if (!response.ok) {
      // Log the error status and text for more context
      const errorText = await response.text();
      console.error(`Error fetching product ${productId}: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Failed to fetch product data. Status: ${response.status}`);
    }

    const data: ProductDetailsData = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred in fetchProductById:', error);
    // Depending on how you want to handle errors upstream, you might re-throw or return null
    // For now, re-throwing to let the caller decide.
    throw error;
  }
}
