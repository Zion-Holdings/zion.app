import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

interface Product {
  id: string;
  name: string;
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
    specs: {
      processor: 'Intel Core i7-1260P',
      memory: '16GB LPDDR5',
      storage: '1TB SSD',
      display: '14" 2.8K OLED',
      graphics: 'Intel Iris Xe Graphics',
      connectivity: 'WiFi 6E, 5G'
    },
    availability: 'buy',
    price: { buy: 1899, rent: 119 },
    category: 'laptops',
    brand: 'Lenovo',
    condition: 'new',
    inStock: true
  },
  {
    id: '5',
    name: 'Cisco Catalyst 9300',
    specs: {
      processor: 'Cisco UADP 2.0',
      memory: '8GB DDR4',
      storage: '16GB Flash',
      connectivity: '48-Port PoE+'
    },
    availability: 'rent',
    price: { buy: 25000, rent: 1500 },
    category: 'networking',
    brand: 'Cisco',
    condition: 'refurbished',
    inStock: true
  },
  {
    id: '6',
    name: 'HP LaserJet Pro M404n',
    specs: {
      processor: 'ARM Cortex-A9',
      memory: '256MB',
      storage: '128MB Flash',
      connectivity: 'Ethernet, USB 2.0'
    },
    availability: 'buy',
    price: { buy: 299, rent: 25 },
    category: 'printers',
    brand: 'HP',
    condition: 'new',
    inStock: false
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>IT Equipment - Products | Zion</title>
        <meta name="description" content="Browse our comprehensive selection of IT equipment for purchase or rental" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Equipment
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Products</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Browse our comprehensive selection of computers, networking equipment, and accessories for purchase or rental
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-300 mb-1">
                Brand
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand} className="bg-slate-800">
                    {brand === 'all' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-300 mb-1">
                Condition
              </label>
              <select
                id="condition"
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition} className="bg-slate-800">
                    {condition === 'all' ? 'All Conditions' : condition.charAt(0).toUpperCase() + condition.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-300 mb-1">
                Availability
              </label>
              <select
                id="availability"
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {availabilityOptions.map(option => (
                  <option key={option} value={option} className="bg-slate-800">
                    {option === 'all' ? 'All Options' : option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="sortBy" className="text-sm font-medium text-gray-300">
                Sort by:
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="name" className="bg-slate-800">Name</option>
                <option value="brand" className="bg-slate-800">Brand</option>
                <option value="price" className="bg-slate-800">Price</option>
                <option value="availability" className="bg-slate-800">Availability</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="sortOrder" className="text-sm font-medium text-gray-300">
                Order:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="asc" className="bg-slate-800">Ascending</option>
                <option value="desc" className="bg-slate-800">Descending</option>
              </select>
            </div>

            <div className="text-sm text-gray-400">
              {filteredAndSortedProducts.length} products found
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map(product => (
            <div key={product.id} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="text-4xl">🖥️</div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.brand}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      product.condition === 'new' ? 'bg-green-500/20 text-green-400' :
                      product.condition === 'refurbished' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {product.condition}
                    </span>
                    {!product.inStock && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 mt-1">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 space-y-1">
                    {product.specs.processor && (
                      <div><span className="font-medium text-gray-300">CPU:</span> {product.specs.processor}</div>
                    )}
                    {product.specs.memory && (
                      <div><span className="font-medium text-gray-300">RAM:</span> {product.specs.memory}</div>
                    )}
                    {product.specs.storage && (
                      <div><span className="font-medium text-gray-300">Storage:</span> {product.specs.storage}</div>
                    )}
                    {product.specs.display && (
                      <div><span className="font-medium text-gray-300">Display:</span> {product.specs.display}</div>
                    )}
                    {product.specs.graphics && product.specs.graphics !== 'N/A' && (
                      <div><span className="font-medium text-gray-300">Graphics:</span> {product.specs.graphics}</div>
                    )}
                    {product.specs.connectivity && (
                      <div><span className="font-medium text-gray-300">Connectivity:</span> {product.specs.connectivity}</div>
                    )}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      {product.availability === 'buy' ? (
                        <div className="text-lg font-bold text-white">
                          ${product.price.buy?.toLocaleString()}
                        </div>
                      ) : (
                        <div>
                          <div className="text-lg font-bold text-white">
                            ${product.price.rent}/month
                          </div>
                          <div className="text-sm text-gray-500">
                            Buy: ${product.price.buy?.toLocaleString()}
                          </div>
                        </div>
                      )}
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      product.availability === 'buy' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {product.availability === 'buy' ? 'Buy' : 'Rent'}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCTA(product)}
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                      product.inStock
                        ? product.availability === 'buy'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900'
                          : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
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

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-white mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
