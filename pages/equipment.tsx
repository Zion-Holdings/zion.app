import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Equipment {
  id: string;
  name: string;
  description: string;
  category: string;
  price: { min: number; max: number; currency: string };
  rating: number;
  reviewCount: number;
  seller: string;
  condition: string;
  location: string;
  specs: string[];
  features: string[];
  availability: string;
  imageUrl: string;
}

const equipment: Equipment[] = [
  {
    id: '1',
    name: 'Dell PowerEdge R740 Server',
    description: 'High-performance enterprise server with dual Intel Xeon processors, 128GB RAM, and enterprise-grade storage.',
    category: 'Servers',
    price: { min: 5000, max: 15000, currency: 'USD' },
    rating: 4.8,
    reviewCount: 45,
    seller: 'TechSupply Pro',
    condition: 'Refurbished',
    location: 'Austin, TX',
    specs: ['Dual Intel Xeon', '128GB RAM', '2TB SSD', 'RAID Controller'],
    features: ['24/7 Support', 'Warranty', 'Free Shipping'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '2',
    name: 'Cisco Catalyst 9300 Switch',
    description: 'Enterprise-grade network switch with 48 PoE ports, advanced security features, and cloud management.',
    category: 'Networking',
    price: { min: 3000, max: 8000, currency: 'USD' },
    rating: 4.9,
    reviewCount: 32,
    seller: 'Network Solutions Inc',
    condition: 'New',
    location: 'San Jose, CA',
    specs: ['48 PoE Ports', '10G Uplinks', 'Stackable', 'Cloud Managed'],
    features: ['Cisco Warranty', 'Technical Support', 'Installation Guide'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '3',
    name: 'HP EliteDesk 800 G5 Workstation',
    description: 'Professional workstation with Intel Core i7, 32GB RAM, and dedicated graphics for demanding applications.',
    category: 'Workstations',
    price: { min: 1200, max: 2500, currency: 'USD' },
    rating: 4.7,
    reviewCount: 78,
    seller: 'Computer Warehouse',
    condition: 'Refurbished',
    location: 'Chicago, IL',
    specs: ['Intel Core i7', '32GB RAM', '512GB SSD', 'NVIDIA GTX 1660'],
    features: ['1 Year Warranty', 'Free Setup', 'Remote Support'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '4',
    name: 'Synology DS1821+ NAS',
    description: '8-bay network attached storage with high-speed connectivity and comprehensive backup solutions.',
    category: 'Storage',
    price: { min: 800, max: 1500, currency: 'USD' },
    rating: 4.6,
    reviewCount: 56,
    seller: 'Storage Solutions',
    condition: 'New',
    location: 'Seattle, WA',
    specs: ['8 Bays', '10GbE', '4GB RAM', 'BTRFS File System'],
    features: ['3 Year Warranty', 'Free Shipping', 'Setup Support'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '5',
    name: 'Ubiquiti UniFi Dream Machine Pro',
    description: 'All-in-one network security gateway with integrated firewall, VPN, and network management.',
    category: 'Security',
    price: { min: 400, max: 600, currency: 'USD' },
    rating: 4.8,
    reviewCount: 89,
    seller: 'Security Pro',
    condition: 'New',
    location: 'Remote',
    specs: ['Integrated Firewall', 'VPN Server', 'Network Controller', '10G SFP+'],
    features: ['2 Year Warranty', 'Free Configuration', '24/7 Support'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '6',
    name: 'Dell OptiPlex 7090 Micro',
    description: 'Compact desktop computer perfect for space-constrained environments with enterprise-grade reliability.',
    category: 'Desktops',
    price: { min: 600, max: 1200, currency: 'USD' },
    rating: 4.5,
    reviewCount: 67,
    seller: 'Dell Direct',
    condition: 'Refurbished',
    location: 'Round Rock, TX',
    specs: ['Intel Core i5', '16GB RAM', '256GB SSD', 'Windows 11 Pro'],
    features: ['Dell Warranty', 'Free Shipping', 'Remote Setup'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '7',
    name: 'APC Smart-UPS 1500VA',
    description: 'Uninterruptible power supply with voltage regulation and network management capabilities.',
    category: 'Power',
    price: { min: 300, max: 500, currency: 'USD' },
    rating: 4.7,
    reviewCount: 43,
    seller: 'Power Solutions',
    condition: 'New',
    location: 'Remote',
    specs: ['1500VA/900W', 'LCD Display', 'Network Management', 'USB Interface'],
    features: ['2 Year Warranty', 'Free Shipping', 'Installation Guide'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: '8',
    name: 'Logitech MX Master 3S Mouse',
    description: 'High-precision wireless mouse with advanced ergonomics and customizable buttons for productivity.',
    category: 'Peripherals',
    price: { min: 80, max: 120, currency: 'USD' },
    rating: 4.9,
    reviewCount: 234,
    seller: 'Office Supplies Pro',
    condition: 'New',
    location: 'Remote',
    specs: ['8000 DPI', 'Bluetooth/Unifying', '7 Programmable Buttons', 'Rechargeable'],
    features: ['2 Year Warranty', 'Free Shipping', 'Setup Support'],
    availability: 'In Stock',
    imageUrl: '/api/placeholder/400/300'
  }
];

const categories = ['All', 'Servers', 'Networking', 'Workstations', 'Storage', 'Security', 'Desktops', 'Power', 'Peripherals'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $500', min: 0, max: 500 },
  { label: '$500 - $1,000', min: 500, max: 1000 },
  { label: '$1,000 - $5,000', min: 1000, max: 5000 },
  { label: 'Over $5,000', min: 5000, max: Infinity }
];

const EquipmentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');

  const filteredEquipment = useMemo(() => {
    return equipment.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      
      const matchesPrice = item.price.min >= priceRanges[selectedPriceRange].min && 
                          item.price.max <= priceRanges[selectedPriceRange].max;
      
      const matchesRating = selectedRating === 0 || item.rating >= selectedRating;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedRating]);

  const sortedEquipment = useMemo(() => {
    const sorted = [...filteredEquipment];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price.min - b.price.min);
      case 'price-high':
        return sorted.sort((a, b) => b.price.max - a.price.max);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'reviews':
        return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
      default:
        return sorted;
    }
  }, [filteredEquipment, sortBy]);

  const handleRequestQuote = (equipmentId: string) => {
    console.log('Request quote for equipment:', equipmentId);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Equipment - Zion Marketplace</title>
        <meta name="description" content="Browse and purchase IT equipment from trusted sellers on Zion marketplace" />
      </Head>

      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Talents
              </Link>
              <Link href="/equipment" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Equipment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">IT Equipment</h1>
          <p className="text-gray-300 text-lg">Find reliable IT equipment from trusted sellers</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {priceRanges.map((range, index) => (
                  <option key={index} value={index}>{range.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
            <div className="flex space-x-4">
              {[0, 4, 4.5, 4.8].map(rating => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedRating === rating
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {rating === 0 ? 'All' : `${rating}+`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-300">
            Showing {sortedEquipment.length} of {equipment.length} items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEquipment.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-4xl text-purple-400">🖥️</div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-400">
                      ${item.price.min.toLocaleString()} - ${item.price.max.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">{item.condition}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">{item.seller}</div>
                  {renderStars(item.rating)}
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Location: {item.location}</div>
                  <div className="text-sm text-gray-400">Availability: {item.availability}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.specs.slice(0, 3).map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                  {item.specs.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                      +{item.specs.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleRequestQuote(item.id)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedEquipment.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No equipment found</h3>
            <p className="text-gray-300">Try adjusting your filters to find what you&apos;re looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentPage;
