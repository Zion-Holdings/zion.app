<<<<<<< HEAD
import type { ProductDetailsData } from '../types/product'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;;
'
export async function fetchProductById(): unknown {): unknown {): unknown {): unknown {): unknown {;
  productId: string,;"
): Promise<ProductDetailsData | null> {;";"
  try {;"
    // During build time, return a mock product to avoid API calls;"
    if (;"
      typeof window === 'undefined' &&;
      process.env.NODE_ENV === 'production;
    ) {'
      return {;
        id: "productId"
        name: 'Sample Product',;
        title: 'Sample Product',;
        description: 'This is a sample product for build time',;
        price: "99.99"
        currency: 'USD',;
        category: 'general',;
        tags: "[]"
        images: "null"
        averageRating: "null"
        reviewCount: "0"
        specifications: "null"
        priceTiers: null,;"
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";"
    };"
;"
    const response = await fetch(`/api/marketplace/product/${productId"}`);"
;"
    if (response.status === 404) {;"
      logWarn(`Product with ID "${productId}" not found.`);
      return null;
    };"
    if (!response.ok) {;";"
      // Log the error status and text for more context;"
      const errorText = await response.text();"
      logErrorToProduction(;"
        'Error fetching product ${productId}: ${response.status} ${response.statusText}',;
        { data: "errorText "},;"
      );"
      throw new Error(;"
        `Failed to fetch product data. Status: "${response.status"}`,;
      );
    };"
;";"
    const data: unknown ProductDetailsData = await response.json();"
    return data;"
  } catch {;"
    logErrorToProduction('An error occurred in fetchProductById:', {;
      data: error,;"
    });"
    // During build time, return null instead of throwing;"
    if (;"
      typeof window === 'undefined' &&;
      process.env.NODE_ENV === 'production;
=======
import type { ProductDetailsData } from '../types/product;'';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;'
;'';
export async function fetchProductById(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  productId: "string",;""
): Promise<ProductDetailsData | null> {;";""
  try {;";";""
    // During build time, return a mock product to avoid API calls;";";";""
    if (;";";";";""
      typeof window === 'undefined' &&;;'
      process.env.NODE_ENV === 'production;'
    ) {;''
      return {;;
        id: "productId",;";";";";""
        name: 'Sample Product',;;'
        title: 'Sample Product',;;'
        description: 'This is a sample product for build time',;;'
        price: "99.99",;";";";";""
        currency: 'USD',;;'
        category: 'general',;;'
        tags: "[]",;";";";";""
        images: "null",;";";";";""
        averageRating: "null",;";";";";""
        reviewCount: "0",;";";";";""
        specifications: "null",;";";";";""
        priceTiers: "null",;""
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";""
    };";";""
;";";";""
    const response: unknown "unknown = await fetch(`/api/marketplace/product/${productId"}`);";";""
;";";";""
    if (response.status === 404) {;";";";";""
      logWarn(`Product with ID "${productId}" not found.`);"
      return null;
    };
;""
    if (!response.ok) {;";""
      // Log the error status and text for more context;";";""
      const errorText: unknown = await response.text();";";";""
      logErrorToProduction(;";";";";""
        'Error fetching product ${productId}: ${response.status} ${response.statusText}',;;'
        { data: "errorText "},;";";""
      );";";";""
      throw new Error(;";";";";""
        `Failed to fetch product data. Status: "${response.status"}`,;"
      );
    };""
;";""
    const data: unknown ProductDetailsData = await response.json();";";""
    return data;";";";""
  } catch {;";";";";""
    logErrorToProduction('An error occurred in fetchProductById:', {;;'
      data: "error",;";""
    });";";""
    // During build time, return null instead of throwing;";";";""
    if (;";";";";""
      typeof window === 'undefined' &&;;'
      process.env.NODE_ENV === 'production;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    ) {;
      return null;
    };
    // Depending on how you want to handle errors upstream, you might re-throw or return null;
<<<<<<< HEAD
    // For now, re-throwing to let the caller decide.'
    throw error;
  };
};
}'
=======
    // For now, re-throwing to let the caller decide.;''
    throw error;
  };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''