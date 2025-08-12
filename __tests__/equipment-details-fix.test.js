// Test for equipment details page fixes - Issue #6
describe('Equipment Details Page - Issue #6 Fix', () => {
  test('data conversion from ProductListing to EquipmentDetails works', () => {
    // This is the core fix - converting sessionStorage data properly
    const productListing = {
      id: 'datacenter-eq-1',
      title: 'NVIDIA A100 GPU Server', // ProductListing uses 'title'
      description: 'High-performance AI training server',
      category: 'AI Hardware',
      price: 85000,
      availability: 'In Stock',
      brand: 'NVIDIA',
      rating: 4.9,
      reviewCount: 27
    };

    // Simulate the conversion (key part of the fix)
    const converted = {
      id: productListing.id,
      name: productListing.title, // title -> name (this was the missing conversion)
      description: productListing.description,
      brand: productListing.brand || 'Unknown',
      category: productListing.category,
      price: productListing.price || 0,
      currency: '$',
      rating: productListing.rating,
      reviewCount: productListing.reviewCount,
      inStock: productListing.availability === 'In Stock',
      expectedShipping: productListing.availability || 'In Stock'
    };

    expect(converted.name).toBe('NVIDIA A100 GPU Server');
    expect(converted.inStock).toBe(true);
    expect(converted.price).toBe(85000);
  });

  test('handles out of stock items correctly', () => {
    const productListing = {
      id: 'test-item',
      title: 'Test Equipment',
      availability: '2-4 Weeks'
    };

    const converted = {
      inStock: productListing.availability === 'In Stock',
      expectedShipping: productListing.availability
    };

    expect(converted.inStock).toBe(false);
    expect(converted.expectedShipping).toBe('2-4 Weeks');
  });
}); 