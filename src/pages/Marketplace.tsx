import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart,
  Eye,
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Code,
  Database,
  Globe,
  Users
} from 'lucide-react';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: <Grid className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Brain className="w-4 h-4" /> },
    { id: 'saas', name: 'Micro SAAS', icon: <Code className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-4 h-4" /> }
  ];

  const products = [
    {
      id: 1,
      name: "AI Business Intelligence Suite",
      category: "ai",
      description: "Transform your business data into actionable insights with our advanced AI analytics platform",
      price: 299,
      currency: "$",
      pricingModel: "per month",
      rating: 4.8,
      reviews: 127,
      image: "🤖",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"]
    },
    {
      id: 2,
      name: "Micro SAAS Starter Kit",
      category: "saas",
      description: "Complete foundation for building and launching your micro SAAS business",
      price: 199,
      currency: "$",
      pricingModel: "per month",
      rating: 4.9,
      reviews: 89,
      image: "🚀",
      features: ["User Management", "Subscription Billing", "Analytics Dashboard", "Multi-tenant Support"],
      tags: ["SAAS", "Startup", "B2B", "Scalable"]
    },
    {
      id: 3,
      name: "Cloud Infrastructure Manager",
      category: "cloud",
      description: "Optimize and manage your cloud infrastructure for performance and cost",
      price: 149,
      currency: "$",
      pricingModel: "per month",
      rating: 4.7,
      reviews: 156,
      image: "☁️",
      features: ["Cost Optimization", "Performance Monitoring", "Auto-scaling", "Security Hardening"],
      tags: ["Cloud", "DevOps", "Infrastructure", "AWS/Azure"]
    },
    {
      id: 4,
      name: "Cybersecurity Compliance Suite",
      category: "security",
      description: "Achieve and maintain compliance with industry standards and regulations",
      price: 399,
      currency: "$",
      pricingModel: "per month",
      rating: 4.9,
      reviews: 203,
      image: "🔒",
      features: ["SOC 2 Compliance", "GDPR Compliance", "HIPAA Compliance", "Regular Audits"],
      tags: ["Security", "Compliance", "Enterprise", "Audit"]
    },
    {
      id: 5,
      name: "Data Analytics Platform",
      category: "data",
      description: "Comprehensive data analytics and visualization platform for enterprises",
      price: 249,
      currency: "$",
      pricingModel: "per month",
      rating: 4.6,
      reviews: 94,
      image: "📊",
      features: ["Data Visualization", "ETL Processing", "Real-time Streaming", "Advanced Reporting"],
      tags: ["Data", "Analytics", "Visualization", "Big Data"]
    },
    {
      id: 6,
      name: "AI Chatbot Platform",
      category: "ai",
      description: "Build intelligent chatbots and virtual assistants for customer service",
      price: 179,
      currency: "$",
      pricingModel: "per month",
      rating: 4.8,
      reviews: 167,
      image: "💬",
      features: ["Natural Language Processing", "Multi-language Support", "Integration APIs", "Analytics Dashboard"],
      tags: ["AI", "Chatbot", "Customer Service", "NLP"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Discover cutting-edge technology solutions, micro SAAS platforms, and AI-powered tools 
            designed to accelerate your business growth.
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
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white/10 text-zion-slate-light border border-white/20 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* View Mode Toggle */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-zion-slate-light">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                  <div className="p-6">
                    {/* Product Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{product.image}</div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {product.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zion-slate-light">{product.rating}</span>
                          <span className="text-xs text-zion-slate-light">({product.reviews})</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                      <p className="text-zion-slate-light text-sm leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{product.currency}{product.price}</span>
                        <span className="text-zion-slate-light">{product.pricingModel}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan/90 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Get Started
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg font-medium transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl flex-shrink-0">{product.image}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                                {product.category.toUpperCase()}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-zion-slate-light">{product.rating}</span>
                                <span className="text-xs text-zion-slate-light">({product.reviews})</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                            <p className="text-zion-slate-light leading-relaxed">{product.description}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white mb-1">{product.currency}{product.price}</div>
                            <div className="text-zion-slate-light text-sm">{product.pricingModel}</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-zion-cyan mb-2">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                          <button className="bg-zion-cyan hover:bg-zion-cyan/90 text-white py-2 px-6 rounded-lg font-medium transition-colors flex items-center gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Get Started
                          </button>
                          <Link
                            to={`/product/${product.id}`}
                            className="px-6 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg font-medium transition-colors"
                          >
                            View Details
                          </Link>
                          <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8">
            We offer custom development services to create tailored solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Custom Solution
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