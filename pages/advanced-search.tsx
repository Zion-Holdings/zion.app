import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  type: 'service' | 'talent' | 'equipment' | 'product';
  title: string;
  description: string;
  category: string;
  tags: string[];
  price?: number;
  rating?: number;
  location?: string;
  provider?: string;
  availability?: string;
  image?: string;
  featured: boolean;
  verified: boolean;
}

interface FilterOptions {
  category: string[];
  priceRange: [number, number];
  rating: number;
  location: string[];
  availability: string[];
  verified: boolean;
  featured: boolean;
  tags: string[];
}

const AdvancedSearchPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'service' | 'talent' | 'equipment' | 'product'>('all');
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    priceRange: [0, 100000],
    rating: 0,
    location: [],
    availability: [],
    verified: false,
    featured: false,
    tags: []
  });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'relevance' | 'price' | 'rating' | 'date'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = {
    service: ['AI Development', 'Cloud Migration', 'Security Auditing', 'Data Analytics', 'DevOps', 'Blockchain', 'IoT', 'Quantum Computing'],
    talent: ['AI Engineers', 'Data Scientists', 'Cloud Architects', 'Security Experts', 'DevOps Engineers', 'Blockchain Developers', 'IoT Specialists', 'Quantum Researchers'],
    equipment: ['Computing', 'Networking', 'Storage', 'Security', 'Monitoring', 'AI Training', 'Quantum', 'Edge Computing'],
    product: ['Software', 'Hardware', 'Cloud Services', 'Security Tools', 'Analytics Platforms', 'Development Tools', 'AI Models', 'Blockchain Solutions']
  };

  const locations = [
    'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Boston, MA', 'Chicago, IL',
    'Los Angeles, CA', 'Denver, CO', 'Atlanta, GA', 'Miami, FL', 'Remote', 'Worldwide'
  ];

  const tags = [
    'AI', 'Machine Learning', 'Deep Learning', 'Cloud Computing', 'Cybersecurity', 'Data Science',
    'Blockchain', 'IoT', 'Quantum Computing', 'DevOps', 'Microservices', 'Serverless',
    'Big Data', 'Analytics', 'Automation', 'Digital Transformation', 'Edge Computing', '5G'
  ];

  useEffect(() => {
    // Simulate loading search results
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          id: '1',
          type: 'service',
          title: 'AI Model Development',
          description: 'Custom AI model development and machine learning implementation for enterprise applications.',
          category: 'AI Development',
          tags: ['AI', 'Machine Learning', 'Deep Learning'],
          price: 250,
          rating: 4.9,
          location: 'San Francisco, CA',
          provider: 'AI Solutions Pro',
          availability: 'Available',
          featured: true,
          verified: true
        },
        {
          id: '2',
          type: 'talent',
          title: 'Dr. Sarah Chen',
          description: 'Senior AI Engineer with 8+ years experience in machine learning and deep learning.',
          category: 'AI Engineers',
          tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
          price: 150,
          rating: 4.8,
          location: 'New York, NY',
          availability: 'Available',
          featured: true,
          verified: true
        },
        {
          id: '3',
          type: 'equipment',
          title: 'NVIDIA DGX A100 System',
          description: 'High-performance AI training system with 8x A100 GPUs for deep learning workloads.',
          category: 'AI Training',
          tags: ['AI', 'GPU', 'Deep Learning', 'Computing'],
          price: 2500,
          rating: 4.9,
          location: 'Austin, TX',
          availability: 'Available',
          featured: true,
          verified: true
        },
        {
          id: '4',
          type: 'service',
          title: 'Cloud Migration Services',
          description: 'Comprehensive cloud migration and infrastructure optimization for enterprise applications.',
          category: 'Cloud Migration',
          tags: ['Cloud Computing', 'AWS', 'Azure', 'DevOps'],
          price: 200,
          rating: 4.7,
          location: 'Seattle, WA',
          provider: 'Cloud Solutions Inc',
          availability: 'Available',
          featured: false,
          verified: true
        },
        {
          id: '5',
          type: 'talent',
          title: 'Alex Rodriguez',
          description: 'Blockchain Architect specializing in DeFi protocols and smart contract development.',
          category: 'Blockchain Developers',
          tags: ['Blockchain', 'DeFi', 'Smart Contracts', 'Solidity'],
          price: 180,
          rating: 4.8,
          location: 'Miami, FL',
          availability: 'Available',
          featured: false,
          verified: true
        },
        {
          id: '6',
          type: 'equipment',
          title: 'Quantum Computer - IBM Q System',
          description: 'State-of-the-art quantum computing system for research and development.',
          category: 'Quantum',
          tags: ['Quantum Computing', 'Research', 'IBM'],
          price: 10000,
          rating: 4.8,
          location: 'Boston, MA',
          availability: 'Available',
          featured: true,
          verified: true
        },
        {
          id: '7',
          type: 'service',
          title: 'Cybersecurity Audit',
          description: 'Comprehensive security assessment and penetration testing for enterprise systems.',
          category: 'Security Auditing',
          tags: ['Cybersecurity', 'Security', 'Penetration Testing'],
          price: 300,
          rating: 4.9,
          location: 'Chicago, IL',
          provider: 'Security Experts Pro',
          availability: 'Available',
          featured: true,
          verified: true
        },
        {
          id: '8',
          type: 'talent',
          title: 'Emma Thompson',
          description: 'Data Scientist with expertise in big data analytics and predictive modeling.',
          category: 'Data Scientists',
          tags: ['Data Science', 'Analytics', 'Python', 'R'],
          price: 120,
          rating: 4.7,
          location: 'Denver, CO',
          availability: 'Available',
          featured: false,
          verified: true
        }
      ];

      setResults(mockResults);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredResults = useMemo(() => {
    let filtered = results.filter(result => {
      // Type filter
      if (selectedType !== 'all' && result.type !== selectedType) return false;
      
      // Search term filter
      if (searchTerm && !result.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !result.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !result.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }
      
      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(result.category)) return false;
      
      // Price range filter
      if (result.price && (result.price < filters.priceRange[0] || result.price > filters.priceRange[1])) return false;
      
      // Rating filter
      if (result.rating && result.rating < filters.rating) return false;
      
      // Location filter
      if (filters.location.length > 0 && result.location && !filters.location.includes(result.location)) return false;
      
      // Availability filter
      if (filters.availability.length > 0 && result.availability && !filters.availability.includes(result.availability)) return false;
      
      // Verified filter
      if (filters.verified && !result.verified) return false;
      
      // Featured filter
      if (filters.featured && !result.featured) return false;
      
      // Tags filter
      if (filters.tags.length > 0 && !filters.tags.some(tag => result.tags.includes(tag))) return false;
      
      return true;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'date':
          return new Date(b.id).getTime() - new Date(a.id).getTime();
        case 'relevance':
        default:
          // Relevance based on search term match and featured status
          const aScore = (a.featured ? 10 : 0) + (a.verified ? 5 : 0) + (a.rating || 0);
          const bScore = (b.featured ? 10 : 0) + (b.verified ? 5 : 0) + (b.rating || 0);
          return bScore - aScore;
      }
    });

    return filtered;
  }, [results, searchTerm, selectedType, filters, sortBy]);

  const handleFilterChange = (filterType: keyof FilterOptions, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 100000],
      rating: 0,
      location: [],
      availability: [],
      verified: false,
      featured: false,
      tags: []
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return '🔧';
      case 'talent': return '👨‍💻';
      case 'equipment': return '⚙️';
      case 'product': return '📦';
      default: return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'talent': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'equipment': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'product': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Advanced Search - Zion Marketplace</title>
        <meta name="description" content="Advanced search and filter system for finding services, talents, equipment, and products on Zion marketplace" />
        <meta name="keywords" content="advanced search, marketplace search, filter, Zion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/equipment-rental" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Rent Equipment
              </Link>
              <Link href="/payment-processing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Payments
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced Search
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find exactly what you need with our powerful search and filter system. 
            Search across services, talents, equipment, and products with precision.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for services, talents, equipment, or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div className="flex space-x-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="all">All Types</option>
                <option value="service">Services</option>
                <option value="talent">Talents</option>
                <option value="equipment">Equipment</option>
                <option value="product">Products</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="date">Sort by Date</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">Category</h4>
                <div className="space-y-2">
                  {categories[selectedType as keyof typeof categories]?.map(category => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('category', [...filters.category, category]);
                          } else {
                            handleFilterChange('category', filters.category.filter(c => c !== category));
                          }
                        }}
                        className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-300">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>${filters.priceRange[0].toLocaleString()}</span>
                    <span>${filters.priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">Minimum Rating</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white">{filters.rating}+</span>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={filters.rating}
                    onChange={(e) => handleFilterChange('rating', parseFloat(e.target.value))}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">Location</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {locations.map(location => (
                    <label key={location} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.location.includes(location)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('location', [...filters.location, location]);
                          } else {
                            handleFilterChange('location', filters.location.filter(l => l !== location));
                          }
                        }}
                        className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-300">{location}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        if (filters.tags.includes(tag)) {
                          handleFilterChange('tags', filters.tags.filter(t => t !== tag));
                        } else {
                          handleFilterChange('tags', [...filters.tags, tag]);
                        }
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        filters.tags.includes(tag)
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => handleFilterChange('verified', e.target.checked)}
                    className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-300">Verified Only</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) => handleFilterChange('featured', e.target.checked)}
                    className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-300">Featured Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-white">
                  {filteredResults.length} Results
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600' : 'bg-white/10'}`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600' : 'bg-white/10'}`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Results Grid/List */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-lg font-medium">Searching...</span>
                </div>
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
                {filteredResults.map((result) => (
                  <div key={result.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{getTypeIcon(result.type)}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{result.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(result.type)}`}>
                            {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {result.featured && (
                          <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/30">
                            Featured
                          </span>
                        )}
                        {result.verified && (
                          <span className="text-green-400">✓</span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {result.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        {result.price && (
                          <span className="text-lg font-semibold text-green-400">
                            ${result.price.toLocaleString()}
                            {result.type === 'service' || result.type === 'talent' ? '/hr' : ''}
                          </span>
                        )}
                        {result.rating && (
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-white text-sm">{result.rating}</span>
                          </div>
                        )}
                      </div>
                      {result.location && (
                        <span className="text-sm text-gray-400">📍 {result.location}</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {result.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                        View Details
                      </button>
                      <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Try our AI-powered recommendation system or contact our experts for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                AI Recommendations
              </Link>
              <Link href="/real-time-chat" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Chat with Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSearchPage 