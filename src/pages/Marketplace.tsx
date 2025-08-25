import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Eye,
  Heart,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Users,
  Clock
} from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'ai-tools', name: 'AI Tools', count: 42 },
    { id: 'saas-platforms', name: 'SAAS Platforms', count: 38 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 24 },
    { id: 'cloud-solutions', name: 'Cloud Solutions', count: 31 },
    { id: 'analytics', name: 'Analytics', count: 21 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "ZionAI Assistant Pro",
      category: "ai-tools",
      description: "Advanced AI-powered business assistant with natural language processing and predictive analytics",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1247,
      image: "🤖",
      features: ["24/7 Support", "Custom Training", "API Access", "Analytics Dashboard"],
      tags: ["AI", "Productivity", "Business", "Automation"]
    },
    {
      id: 2,
      name: "CloudGuard Enterprise",
      category: "cybersecurity",
      description: "Comprehensive cybersecurity suite with threat detection, compliance management, and incident response",
      price: 599,
      originalPrice: 799,
      rating: 4.9,
      reviews: 892,
      image: "🛡️",
      features: ["Real-time Monitoring", "SOC2 Compliance", "Penetration Testing", "Security Training"],
      tags: ["Security", "Compliance", "Enterprise", "Monitoring"]
    },
    {
      id: 3,
      name: "DataViz Analytics Platform",
      category: "analytics",
      description: "Powerful data visualization and business intelligence platform with real-time insights",
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 1563,
      image: "📊",
      features: ["Real-time Dashboards", "Custom Reports", "Data Integration", "Mobile App"],
      tags: ["Analytics", "BI", "Data", "Visualization"]
    },
    {
      id: 4,
      name: "MicroSAAS Builder",
      category: "saas-platforms",
      description: "Complete platform for building and launching micro SAAS applications with built-in monetization",
      price: 499,
      originalPrice: 699,
      rating: 4.6,
      reviews: 734,
      image: "🚀",
      features: ["Drag & Drop Builder", "Payment Integration", "User Management", "Analytics"],
      tags: ["SAAS", "Development", "No-Code", "Monetization"]
    }
  ];

  const allProducts = [
    ...featuredProducts,
    {
      id: 5,
      name: "Quantum Security Suite",
      category: "cybersecurity",
      description: "Next-generation quantum-resistant encryption and security protocols",
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 456,
      image: "🔐",
      features: ["Quantum Encryption", "Zero Trust", "Compliance", "24/7 Support"],
      tags: ["Quantum", "Security", "Encryption", "Future-Proof"]
    },
    {
      id: 6,
      name: "IoT Management Hub",
      category: "cloud-solutions",
      description: "Centralized IoT device management and monitoring platform",
      price: 349,
      originalPrice: 449,
      rating: 4.5,
      reviews: 678,
      image: "🌐",
      features: ["Device Management", "Real-time Monitoring", "Automation", "Scalable"],
      tags: ["IoT", "Management", "Monitoring", "Automation"]
    },
    {
      id: 7,
      name: "AI Content Generator",
      category: "ai-tools",
      description: "AI-powered content creation tool for marketing, blogs, and social media",
      price: 149,
      originalPrice: 199,
      rating: 4.4,
      reviews: 2341,
      image: "✍️",
      features: ["Multiple Formats", "SEO Optimization", "Brand Voice", "Analytics"],
      tags: ["AI", "Content", "Marketing", "SEO"]
    },
    {
      id: 8,
      name: "DevOps Automation Platform",
      category: "cloud-solutions",
      description: "Complete DevOps automation with CI/CD, monitoring, and infrastructure management",
      price: 449,
      originalPrice: 599,
      rating: 4.8,
      reviews: 567,
      image: "⚙️",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Security"],
      tags: ["DevOps", "Automation", "CI/CD", "Infrastructure"]
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
            Discover cutting-edge technology solutions, AI tools, and innovative platforms 
            designed to transform your business and accelerate growth.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, services, or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <div className="flex items-center gap-2 text-zion-cyan">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Trending Now</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className="p-6">
                  <div className="text-4xl mb-4">{product.image}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {product.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                      FEATURED
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{product.rating}</span>
                    </div>
                    <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-zion-cyan">${product.price}</span>
                      <span className="text-zion-slate-light line-through">${product.originalPrice}</span>
                    </div>
                    <span className="text-green-400 text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Get Started
                    </button>
                    <button className="p-2 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">All Products</h2>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Showing {filteredProducts.length} products</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className="p-4">
                  <div className="text-3xl mb-3">{product.image}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {product.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-xs">{product.rating}</span>
                    </div>
                    <span className="text-zion-slate-light text-xs">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-zion-cyan">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-green-400 text-xs font-medium">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                      Get Started
                    </button>
                    <button className="p-2 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Marketplace?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trusted & Secure</h3>
              <p className="text-zion-slate-light text-sm">
                All products undergo rigorous security testing and compliance verification
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Access</h3>
              <p className="text-zion-slate-light text-sm">
                Get immediate access to all products with instant deployment and setup
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
              <p className="text-zion-slate-light text-sm">
                24/7 technical support and dedicated account management for all customers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Availability</h3>
              <p className="text-zion-slate-light text-sm">
                Access our marketplace from anywhere in the world with localized support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Explore our marketplace and discover the perfect solutions to accelerate 
            your digital transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Expert Advice
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Custom Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;