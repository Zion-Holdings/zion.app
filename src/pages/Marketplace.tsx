import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Heart, Eye, Download, Users, Zap, Shield, Globe, Rocket, Brain } from 'lucide-react';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { name: 'All', icon: Globe, count: 156 },
    { name: 'AI Solutions', icon: Brain, count: 45 },
    { name: 'Cybersecurity', icon: Shield, count: 32 },
    { name: 'Quantum Tech', icon: Zap, count: 18 },
    { name: 'Micro-SaaS', icon: Rocket, count: 28 },
    { name: 'Templates', icon: Download, count: 33 }
  ];

  const products = [
    {
      id: 1,
      name: 'AI Business Intelligence Suite',
      description: 'Complete AI-powered business intelligence platform with predictive analytics and automated reporting.',
      category: 'AI Solutions',
      price: 299,
      originalPrice: 499,
      rating: 4.9,
      reviews: 127,
      downloads: 2341,
      image: '🤖',
      features: ['Predictive Analytics', 'Automated Reporting', 'Real-time Dashboards', 'Custom Alerts'],
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Automation'],
      featured: true,
      new: false
    },
    {
      id: 2,
      name: 'Quantum-Safe Security Framework',
      description: 'Next-generation cybersecurity framework using quantum-resistant encryption algorithms.',
      category: 'Cybersecurity',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 89,
      downloads: 1567,
      image: '🛡️',
      features: ['Quantum Encryption', 'Threat Detection', 'Compliance Tools', '24/7 Monitoring'],
      tags: ['Security', 'Quantum', 'Encryption', 'Compliance'],
      featured: true,
      new: true
    },
    {
      id: 3,
      name: 'Micro-SaaS Starter Kit',
      description: 'Complete toolkit for building and launching micro-SaaS applications with AI integration.',
      category: 'Micro-SaaS',
      price: 149,
      originalPrice: 249,
      rating: 4.7,
      reviews: 203,
      downloads: 3124,
      image: '💻',
      features: ['Template Library', 'AI Integration', 'Deployment Tools', 'Analytics Dashboard'],
      tags: ['SaaS', 'Templates', 'AI', 'Development'],
      featured: false,
      new: false
    },
    {
      id: 4,
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation tool for marketing, blogs, and social media.',
      category: 'AI Solutions',
      price: 99,
      originalPrice: 199,
      rating: 4.6,
      reviews: 156,
      downloads: 2891,
      image: '✍️',
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Check'],
      tags: ['Content', 'AI', 'Marketing', 'SEO'],
      featured: false,
      new: false
    },
    {
      id: 5,
      name: 'Quantum Computing Simulator',
      description: 'Educational and development platform for quantum computing algorithms.',
      category: 'Quantum Tech',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 67,
      downloads: 892,
      image: '🔬',
      features: ['Quantum Circuits', 'Algorithm Library', 'Visualization Tools', 'Performance Metrics'],
      tags: ['Quantum', 'Education', 'Development', 'Simulation'],
      featured: true,
      new: false
    },
    {
      id: 6,
      name: 'Enterprise Security Bundle',
      description: 'Comprehensive security solution for enterprise environments with AI threat detection.',
      category: 'Cybersecurity',
      price: 599,
      originalPrice: 899,
      rating: 4.8,
      reviews: 134,
      downloads: 1123,
      image: '🏢',
      features: ['AI Threat Detection', 'Network Security', 'Endpoint Protection', 'Incident Response'],
      tags: ['Enterprise', 'Security', 'AI', 'Network'],
      featured: false,
      new: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.new ? 1 : -1;
      default:
        return 0;
    }
  });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            AI & Tech Marketplace
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, cybersecurity tools, and emerging technology products from Zion Tech Group.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 h-full">
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{product.image}</div>
                    <div className="flex space-x-2">
                      {product.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                      {product.new && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                        <span className="ml-2">{product.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {product.reviews}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {product.downloads}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-white">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer custom development services for unique AI and technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Solution
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}