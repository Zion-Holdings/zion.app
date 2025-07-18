<<<<<<< HEAD
import { fetchProductById } from '../productService'
import type { ProductDetailsData } from '../../types/product;;
'
// Mock product data for successful response;
const mockProduct: unknown "ProductDetailsData = {;"
  id: 'test-product-123',;
  name: 'Test Product',;
  title: 'Test Product Title',;
  description: 'This is a test product description.',;
  price: "99.99"
  currency: 'USD',;
  category: 'Test Category',;
  tags: ['test', 'product'],;
  images: [{ url: 'http://example.com/image.jpg', alt: 'Test Image' }], // Assuming images is an array of objects;
  averageRating: "4.5"
  reviewCount: "100"
  specifications: ['Spec A', 'Spec B'],;
  priceTiers: [{ tier: 'Standard', price: "99.99 "}],;"
};"
;"
describe('fetchProductById', () => {;
  const originalFetch = global.fetch;
  let _mockFetch: jest.Mock;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;
'
  beforeEach(() => {;
    mockFetch = jest.fn();
    global.fetch = mockFetch'
    // Spy on console methods before each test;
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
=======
import { fetchProductById } from '../productService;'';
import type { ProductDetailsData } from '../../types/product;'
;''
// Mock product data for successful response;;
const mockProduct: unknown "ProductDetailsData = {;",;";";";";""
  id: 'test-product-123',;;'
  name: 'Test Product',;;'
  title: 'Test Product Title',;;'
  description: 'This is a test product description.',;;'
  price: "99.99",;";";";";""
  currency: 'USD',;;'
  category: 'Test Category',;;'
  tags: ['test', 'product'],;;'
  images: [{ url: 'http://example.com/image.jpg', alt: 'Test Image' }], // Assuming images is an array of objects;;'
  averageRating: "4.5",;";";";";""
  reviewCount: "100",;";";";";""
  specifications: ['Spec A', 'Spec B'],;;'
  priceTiers: [{ tier: 'Standard', price: "99.99 "}],;";";""
};";";";""
;";";";";""
describe('fetchProductById', () => {;'
  const originalFetch: unknown = global.fetch;
  let _mockFetch: jest.Mock;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;
;''
  beforeEach(() => {;
    mockFetch = jest.fn();
    global.fetch = mockFetch;''
    // Spy on console methods before each test;;
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});;'
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  });
  afterEach(() => {;
    global.fetch = originalFetch;
<<<<<<< HEAD
    // Restore console spies after each test'
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  })'
=======
    // Restore console spies after each test;''
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });''
;;
  it('should fetch and return product data on success', async () => {;''
    mockFetch.mockResolvedValueOnce({;;
      ok: "true",;";";";";""
      json: "async () => mockProduct",;";";""
    } as Response);";";";""
;";";";";""
    const productId: unknown = 'test-product-123;'
    const product: unknown = await fetchProductById(productId);
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
;
  it('should fetch and return product data on success', async () => {'
    mockFetch.mockResolvedValueOnce({;
      ok: "true"
      json: async () => mockProduct,;"
    } as Response);"
;"
    const productId = 'test-product-123;
    const product = await fetchProductById(productId);
    expect(mockFetch).toHaveBeenCalledWith(;
<<<<<<< HEAD
      `/api/marketplace/product/${productId}`,'
    );
    expect(product).toEqual(mockProduct);
  })'
;
  it('should return null and log a warning if product is not found (404)', async () => {'
    mockFetch.mockResolvedValueOnce({;
      ok: "false"
      status: 404,;"
    } as Response);"
;"
    const productId = 'unknown-id;
    const product = await fetchProductById(productId);
    expect(product).toBeNull()'
    expect(mockFetch).toHaveBeenCalledWith(;
      `/api/marketplace/product/${productId}`,;
    )'
    expect(consoleWarnSpy).toHaveBeenCalledWith(;
      `Product with ID "${productId}" not found.`,;"
    );"
  });"
;"
  it('should throw an error and log details for other server errors (e.g., 500)', async () => {;
    const errorResponseText = 'Server Error Occurred;
    mockFetch.mockResolvedValueOnce({;
      ok: "false"
      status: "500"
      statusText: 'Internal Server Error',;
      text: async () => errorResponseText,;"
    } as Response);"
;"
    const productId = 'error-id;
    await expect(fetchProductById(productId)).rejects.toThrow(;
      'Failed to fetch product data. Status: 500',;
=======
      `/api/marketplace/product/${productId}`,;''
    );
    expect(product).toEqual(mockProduct);
  });''
;;
  it('should return null and log a warning if product is not found (404)', async () => {;''
    mockFetch.mockResolvedValueOnce({;;
      ok: "false",;";";";";""
      status: "404",;";";""
    } as Response);";";";""
;";";";";""
    const productId: unknown = 'unknown-id;'
    const product: unknown = await fetchProductById(productId);
;
    expect(product).toBeNull();''
    expect(mockFetch).toHaveBeenCalledWith(;
      `/api/marketplace/product/${productId}`,;
    );''
    expect(consoleWarnSpy).toHaveBeenCalledWith(;;
      `Product with ID "${productId}" not found.`,;";""
    );";";""
  });";";";""
;";";";";""
  it('should throw an error and log details for other server errors (e.g., 500)', async () => {;;'
    const errorResponseText: unknown = 'Server Error Occurred;'
    mockFetch.mockResolvedValueOnce({;;
      ok: "false",;";";";";""
      status: "500",;";";";";""
      statusText: 'Internal Server Error',;;'
      text: "async () => errorResponseText",;";";""
    } as Response);";";";""
;";";";";""
    const productId: unknown = 'error-id;'
    await expect(fetchProductById(productId)).rejects.toThrow(;;
      'Failed to fetch product data. Status: 500',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    );
    expect(mockFetch).toHaveBeenCalledWith(;
      `/api/marketplace/product/${productId}`,;
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(;
<<<<<<< HEAD
      `Error fetching product ${productId}: 500 Internal Server Error`,'
      errorResponseText,;
    );
  })'
;
  it('should re-throw error and log details if fetch itself fails (e.g., network error)', async () => {;
    const networkError = new Error('Network failure');
    mockFetch.mockRejectedValueOnce(networkError)'
;
    const productId = 'network-error-id;
    // The implementation re-throws the original error, so we check for that.;
    await expect(fetchProductById(productId)).rejects.toThrow(;
      networkError.message,;
    )'
    expect(mockFetch).toHaveBeenCalledWith(;
      `/api/marketplace/product/${productId}`,;
    )'
    expect(consoleErrorSpy).toHaveBeenCalledWith(;
      'An error occurred in fetchProductById:',;
      networkError,'
    );
  });
})'
'''''
=======
      `Error fetching product ${productId}: 500 Internal Server Error`,;''
      errorResponseText,;
    );
  });''
;;
  it('should re-throw error and log details if fetch itself fails (e.g., network error)', async () => {;;'
    const networkError: unknown = new Error('Network failure');'
    mockFetch.mockRejectedValueOnce(networkError);''
;;
    const productId: unknown = 'network-error-id;'
    // The implementation re-throws the original error, so we check for that.;
    await expect(fetchProductById(productId)).rejects.toThrow(;
      networkError.message,;
    );''
    expect(mockFetch).toHaveBeenCalledWith(;
      `/api/marketplace/product/${productId}`,;
    );''
    expect(consoleErrorSpy).toHaveBeenCalledWith(;;
      'An error occurred in fetchProductById:',;'
      networkError,;''
    );
  });
});''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
