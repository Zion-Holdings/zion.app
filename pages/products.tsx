import React, { useState, useMemo } from 'react';
import Head from 'next/head';

interface Product {
  id: string;
  name: string;
  image: string;
  specs: {
    processor?: string;
    memory?: string;
    storage?: string;
    display?: string;
    graphics?: string;
    connectivity?: string;
  };
  availability: 'buy' | 'rent';
  price: {
    buy?: number;
    rent?: number;
  };
  category: string;
  brand: string;
  condition: 'new' | 'refurbished' | 'used';
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Dell Latitude 5520',
    image: '/images/laptop-dell.jpg',
    specs: {
      processor: 'Intel Core i7-1185G7',
      memory: '16GB DDR4',
      storage: '512GB SSD',
      display: '15.6" FHD (1920x1080)',
      graphics: 'Intel Iris Xe Graphics',
      connectivity: 'WiFi 6, Bluetooth 5.1'
    },
    availability: 'buy',
    price: { buy: 1299, rent: 89 },
    category: 'laptops',
    brand: 'Dell',
    condition: 'new',
    inStock: true
  },
  {
    id: '2',
    name: 'HP EliteDesk 800 G5',
    image: '/images/desktop-hp.jpg',
    specs: {
      processor: 'Intel Core i5-9500',
      memory: '8GB DDR4',
      storage: '256GB SSD',
      graphics: 'Intel UHD Graphics 630',
      connectivity: 'WiFi 5, Ethernet'
    },
    availability: 'rent',
    price: { buy: 899, rent: 59 },
    category: 'desktops',
    brand: 'HP',
    condition: 'refurbished',
    inStock: true
  },
  {
    id: '3',
    name: 'Apple MacBook Pro 14"',
    image: '/images/laptop-macbook.jpg',
    specs: {
      processor: 'Apple M2 Pro',
      memory: '16GB Unified Memory',
      storage: '512GB SSD',
      display: '14" Liquid Retina XDR',
      graphics: 'Integrated 19-core GPU',
      connectivity: 'WiFi 6E, Thunderbolt 4'
    },
    availability: 'buy',
    price: { buy: 1999, rent: 129 },
    category: 'laptops',
    brand: 'Apple',
    condition: 'new',
    inStock: true
  },
  {
    id: '4',
    name: 'Lenovo ThinkPad X1 Carbon',
    image: '/images/laptop-lenovo.jpg',
    specs: {
      processor: 'Intel Core i7-1260P',
      memory: '16GB LPDDR5',
      storage: '1TB SSD',
      display: '14" 2.8K OLED',
      graphics: 'Intel Iris Xe Graphics',
      connectivity: 'WiFi 6E, 5G WWAN'
    },
    availability: 'buy',
    price: { buy: 1899, rent: 119 },
    category: 'laptops',
    brand: 'Lenovo',
    condition: 'new',
    inStock: false
  },
  {
    id: '5',
    name: 'Dell OptiPlex 7090',
    image: '/images/desktop-dell.jpg',
    specs: {
      processor: 'Intel Core i7-11700',
      memory: '16GB DDR4',
      storage: '512GB SSD + 1TB HDD',
      graphics: 'Intel UHD Graphics 750',
      connectivity: 'WiFi 6, Ethernet'
    },
    availability: 'rent',
    price: { buy: 1299, rent: 79 },
    category: 'desktops',
    brand: 'Dell',
    condition: 'refurbished',
    inStock: true
  },
  {
    id: '6',
    name: 'Apple iMac 24"',
    image: '/images/desktop-imac.jpg',
    specs: {
      processor: 'Apple M1',
      memory: '8GB Unified Memory',
      storage: '256GB SSD',
      display: '24" 4.5K Retina',
      graphics: 'Integrated 8-core GPU',
      connectivity: 'WiFi 6, Bluetooth 5.0'
    },
    availability: 'buy',
    price: { buy: 1499, rent: 99 },
    category: 'desktops',
    brand: 'Apple',
    condition: 'new',
    inStock: true
  },
  {
    id: '7',
    name: 'Cisco Catalyst 9300',
    image: '/images/network-switch.jpg',
    specs: {
      processor: 'Cisco UADP 2.0',
      memory: '4GB DRAM',
      storage: '16GB Flash',
      connectivity: '48-Port Gigabit Ethernet',
      graphics: 'N/A'
    },
    availability: 'rent',
    price: { buy: 8999, rent: 299 },
    category: 'networking',
    brand: 'Cisco',
    condition: 'used',
    inStock: true
  },
  {
    id: '8',
    name: 'HP LaserJet Pro M404n',
    image: '/images/printer-hp.jpg',
    specs: {
      processor: 'ARM Cortex-A9',
      memory: '128MB',
      storage: '32MB Flash',
      connectivity: 'USB 2.0, Ethernet',
      graphics: 'N/A'
    },
    availability: 'buy',
    price: { buy: 299, rent: 19 },
    category: 'printers',
    brand: 'HP',
    condition: 'new',
    inStock: true
  }
];

const categories = ['all', 'laptops', 'desktops', 'networking', 'printers'];
const brands = ['all', 'Dell', 'HP', 'Apple', 'Lenovo', 'Cisco'];
const conditions = ['all', 'new', 'refurbished', 'used'];
const availabilityOptions = ['all', 'buy', 'rent'];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      const matchesCondition = selectedCondition === 'all' || product.condition === selectedCondition;
      const matchesAvailability = selectedAvailability === 'all' || product.availability === selectedAvailability;

      return matchesSearch && matchesCategory && matchesBrand && matchesCondition && matchesAvailability;
    });

    // Sort products
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'brand':
          aValue = a.brand;
          bValue = b.brand;
          break;
        case 'price':
          aValue = a.price.buy || a.price.rent || 0;
          bValue = b.price.buy || b.price.rent || 0;
          break;
        case 'availability':
          aValue = a.availability;
          bValue = b.availability;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, selectedCondition, selectedAvailability, sortBy, sortOrder]);

  const handleCTA = (product: Product) => {
    if (product.availability === 'buy') {
      alert(`Adding ${product.name} to cart for purchase`);
    } else {
      alert(`Adding ${product.name} to rental cart`);
    }
  };

  return (
    <>
      <Head>
        <title>IT Equipment - Products</title>
        <meta name="description" content="Browse our comprehensive selection of IT equipment for purchase or rental" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <h1 className="text-3xl font-bold text-gray-900">IT Equipment</h1>
              <p className="mt-2 text-gray-600">Browse our comprehensive selection of computers, networking equipment, and accessories</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <select
                  id="brand"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand === 'all' ? 'All Brands' : brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Filter */}
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                  Condition
                </label>
                <select
                  id="condition"
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {conditions.map(condition => (
                    <option key={condition} value={condition}>
                      {condition === 'all' ? 'All Conditions' : condition.charAt(0).toUpperCase() + condition.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <select
                  id="availability"
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {availabilityOptions.map(option => (
                    <option key={option} value={option}>
                      {option === 'all' ? 'All Options' : option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="brand">Brand</option>
                  <option value="price">Price</option>
                  <option value="availability">Availability</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">
                  Order:
                </label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>

              <div className="text-sm text-gray-600">
                {filteredAndSortedProducts.length} products found
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                {/* Product Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-gray-400 text-4xl">🖥️</div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        product.condition === 'new' ? 'bg-green-100 text-green-800' :
                        product.condition === 'refurbished' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {product.condition}
                      </span>
                      {!product.inStock && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-1">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 space-y-1">
                      {product.specs.processor && (
                        <div><span className="font-medium">CPU:</span> {product.specs.processor}</div>
                      )}
                      {product.specs.memory && (
                        <div><span className="font-medium">RAM:</span> {product.specs.memory}</div>
                      )}
                      {product.specs.storage && (
                        <div><span className="font-medium">Storage:</span> {product.specs.storage}</div>
                      )}
                      {product.specs.display && (
                        <div><span className="font-medium">Display:</span> {product.specs.display}</div>
                      )}
                      {product.specs.graphics && product.specs.graphics !== 'N/A' && (
                        <div><span className="font-medium">Graphics:</span> {product.specs.graphics}</div>
                      )}
                      {product.specs.connectivity && (
                        <div><span className="font-medium">Connectivity:</span> {product.specs.connectivity}</div>
                      )}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {product.availability === 'buy' ? (
                          <div className="text-lg font-bold text-gray-900">
                            ${product.price.buy?.toLocaleString()}
                          </div>
                        ) : (
                          <div>
                            <div className="text-lg font-bold text-gray-900">
                              ${product.price.rent}/month
                            </div>
                            <div className="text-sm text-gray-500">
                              Buy: ${product.price.buy?.toLocaleString()}
                            </div>
                          </div>
                        )}
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        product.availability === 'buy' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {product.availability === 'buy' ? 'Buy' : 'Rent'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCTA(product)}
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                        product.inStock
                          ? product.availability === 'buy'
                            ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            : 'bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock 
                        ? (product.availability === 'buy' ? 'Add to Cart' : 'Rent Now')
                        : 'Out of Stock'
                      }
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
