import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Users,
  Globe
} from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products', icon: <Globe className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'enterprise', name: 'Enterprise', icon: <Users className="w-5 h-5" /> }
  ];

  const products = [
    {
      id: 1,
      name: "AI Business Intelligence Suite",
      category: "ai",
      description: "Advanced analytics and business intelligence powered by artificial intelligence",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 127,
      image: "🤖",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Access"],
      tags: ["AI", "Analytics", "Business Intelligence"]
    },
    {
      id: 2,
      name: "Cloud Infrastructure Manager",
      category: "cloud",
      description: "Comprehensive cloud infrastructure management and optimization platform",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 89,
      image: "☁️",
      features: ["Multi-cloud Support", "Auto-scaling", "Cost Optimization", "24/7 Monitoring"],
      tags: ["Cloud", "DevOps", "Infrastructure"]
    },
    {
      id: 3,
      name: "Cybersecurity Compliance Hub",
      category: "security",
      description: "Complete cybersecurity compliance and threat management solution",
      price: 399,
      originalPrice: 499,
      rating: 4.9,
      reviews: 156,
      image: "🔒",
      features: ["SOC2 Compliance", "Threat Detection", "Incident Response", "Security Training"],
      tags: ["Security", "Compliance", "Cybersecurity"]
    },
    {
      id: 4,
      name: "Micro SAAS Starter Kit",
      category: "saas",
      description: "Complete toolkit for building and launching micro SAAS applications",
      price: 99,
      originalPrice: 149,
      rating: 4.7,
      reviews: 203,
      image: "🚀",
      features: ["Template Library", "Deployment Tools", "Analytics", "Support"],
      tags: ["SAAS", "Development", "Templates"]
    },
    {
      id: 5,
      name: "Enterprise Data Platform",
      category: "enterprise",
      description: "Scalable enterprise data management and analytics platform",
      price: 999,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 67,
      image: "🏢",
      features: ["Data Warehousing", "ETL Pipelines", "Advanced Analytics", "Enterprise Security"],
      tags: ["Enterprise", "Data", "Analytics"]
    },
    {
      id: 6,
      name: "AI Chatbot Builder",
      category: "ai",
      description: "No-code AI chatbot creation platform for customer service",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      reviews: 94,
      image: "💬",
      features: ["No-code Builder", "Multi-language", "Integration APIs", "Analytics"],
      tags: ["AI", "Chatbot", "Customer Service"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover cutting-edge technology solutions, AI tools, and enterprise software designed to transform your business.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search products and services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white/20 text-zion-slate-light hover:bg-white/30 border border-white/30'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
            <div className="text-zion-slate-light">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                  {/* Product Image */}
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-zion-slate-light ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {categories.find(c => c.id === product.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-zion-slate-light flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-zion-cyan">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-zion-slate-light line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Can't find exactly what you're looking for? Our team can create custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Custom Quote
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;