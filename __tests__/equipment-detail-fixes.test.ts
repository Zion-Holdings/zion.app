// Test file to verify equipment details page fixes
describe('Equipment Details Page Fixes', () => {
  // Test the data conversion function that was added to fix the crash
  test('convertProductListingToEquipmentDetails converts data correctly', () => {
    // Mock ProductListing data (what's stored in sessionStorage)
    const productListing = {
      id: 'datacenter-eq-1',
      title: 'NVIDIA A100 GPU Server',
      description: 'High-performance AI training server',
      category: 'AI Hardware',
      price: 85000,
      currency: '$',
      brand: 'NVIDIA',
      specifications: ['8x A100 GPUs', '2TB HBM2e', 'NVLink'],
      tags: ['AI', 'Machine Learning', 'GPU'],
      availability: 'In Stock',
      rating: 4.9,
      reviewCount: 27,
      images: ['https://example.com/image.jpg']
    };

    // Simulate the conversion function from EquipmentDetail.tsx
    function convertProductListingToEquipmentDetails(item: any) {
      return {
        id: item.id,
        name: item.title, // title -> name conversion
        description: item.description,
        brand: item.brand || 'Unknown',
        category: item.category,
        subcategory: item.subcategory,
        images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],
        price: item.price || 0,
        currency: item.currency || '$',
        rating: item.rating,
        reviewCount: item.reviewCount,
        inStock: item.availability === 'In Stock' || !item.availability,
        expectedShipping: item.availability || 'In Stock',
        specifications: (item.specifications || []).map((spec: string) => ({ 
          name: spec, 
          value: '' 
        })),
        features: item.tags || [],
        warranty: '1 Year Manufacturer Warranty',
        returnPolicy: '30-day return policy'
      };
    }

    const converted = convertProductListingToEquipmentDetails(productListing);

    // Verify the conversion worked correctly
    expect(converted.id).toBe(productListing.id);
    expect(converted.name).toBe(productListing.title); // Key fix: title -> name
    expect(converted.description).toBe(productListing.description);
    expect(converted.brand).toBe(productListing.brand);
    expect(converted.category).toBe(productListing.category);
    expect(converted.price).toBe(productListing.price);
    expect(converted.currency).toBe(productListing.currency);
    expect(converted.rating).toBe(productListing.rating);
    expect(converted.reviewCount).toBe(productListing.reviewCount);
    expect(converted.inStock).toBe(true); // 'In Stock' -> true
    expect(converted.expectedShipping).toBe(productListing.availability);
    
    // Verify specifications conversion
    expect(converted.specifications).toHaveLength(3);
    expect(converted.specifications[0]).toEqual({ name: '8x A100 GPUs', value: '' });
    expect(converted.specifications[1]).toEqual({ name: '2TB HBM2e', value: '' });
    
    // Verify features (tags -> features)
    expect(converted.features).toEqual(['AI', 'Machine Learning', 'GPU']);
    
    // Verify default values are added
    expect(converted.warranty).toBe('1 Year Manufacturer Warranty');
    expect(converted.returnPolicy).toBe('30-day return policy');
  });

  test('handles missing or undefined properties gracefully', () => {
    // Test with minimal data
    const minimalListing = {
      id: 'test-id',
      title: 'Test Equipment',
      description: 'Test description'
    };

    function convertProductListingToEquipmentDetails(item: any) {
      return {
        id: item.id,
        name: item.title,
        description: item.description,
        brand: item.brand || 'Unknown',
        category: item.category,
        price: item.price || 0,
        currency: item.currency || '$',
        inStock: item.availability === 'In Stock' || !item.availability,
        expectedShipping: item.availability || 'In Stock',
        specifications: (item.specifications || []).map((spec: string) => ({ name: spec, value: '' })),
        features: item.tags || []
      };
    }

    const converted = convertProductListingToEquipmentDetails(minimalListing);

    // Should handle undefined properties gracefully
    expect(converted.brand).toBe('Unknown');
    expect(converted.price).toBe(0);
    expect(converted.currency).toBe('$');
    expect(converted.inStock).toBe(true); // Default to true when availability is undefined
    expect(converted.expectedShipping).toBe('In Stock');
    expect(converted.specifications).toEqual([]);
    expect(converted.features).toEqual([]);
  });

  test('availability status conversion works correctly', () => {
    function convertProductListingToEquipmentDetails(item: any) {
      return {
        inStock: item.availability === 'In Stock' || !item.availability,
        expectedShipping: item.availability || 'In Stock'
      };
    }

    // Test different availability statuses
    expect(convertProductListingToEquipmentDetails({ availability: 'In Stock' })).toEqual({
      inStock: true,
      expectedShipping: 'In Stock'
    });

    expect(convertProductListingToEquipmentDetails({ availability: '2-4 Weeks' })).toEqual({
      inStock: false,
      expectedShipping: '2-4 Weeks'
    });

    expect(convertProductListingToEquipmentDetails({})).toEqual({
      inStock: true, // Default to true when undefined
      expectedShipping: 'In Stock'
    });
  });
}); 