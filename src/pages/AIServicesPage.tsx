import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Brain, Bot, MessageSquare, Eye, BarChart3, Zap, Star, DollarSign, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Globe, TrendingUp, Shield, Lightbulb, Search } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAIScore, setSelectedAIScore] = useState<string>('all');

  // Filter AI services
  const aiServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category.toLowerCase().includes('ai') || 
    service.subcategory.toLowerCase().includes('ai') ||
    service.tags.some(tag => tag.toLowerCase().includes('ai'))
  );

  const categories = ['all', ...Array.from(new Set(aiServices.map(service => service.category)))];
  const aiScores = ['all', 'high', 'medium', 'low'];

  const filteredServices = useMemo(() => {
    return aiServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesAIScore = selectedAIScore === 'all' || service.aiScore === selectedAIScore;
      
      return matchesSearch && matchesCategory && matchesAIScore;
    });
  }, [searchTerm, selectedCategory, selectedAIScore]);

  const getAIScoreColor = (score: string) => {
    switch (score) {
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAIScoreLabel = (score: string) => {
    switch (score) {
      case 'high': return 'Advanced AI';
      case 'medium': return 'Moderate AI';
      case 'low': return 'Basic AI';
      default: return 'AI Enhanced';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Brain className="w-20 h-20 text-zion-cyan" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Harness the power of artificial intelligence with our cutting-edge AI services, 
            machine learning solutions, and intelligent automation tools designed to transform your business.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All AI Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* AI Score Filter */}
            <select
              value={selectedAIScore}
              onChange={(e) => setSelectedAIScore(e.target.value)}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All AI Levels</option>
              {aiScores.map(score => (
                <option key={score} value={score}>{getAIScoreLabel(score)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* AI Services Overview */}
      <div className="bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">AI Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Custom ML models and algorithms",
                count: aiServices.filter(s => s.tags.some(tag => tag.toLowerCase().includes('ml') || tag.toLowerCase().includes('machine learning'))).length
              },
              {
                icon: Bot,
                title: "AI Automation",
                description: "Intelligent process automation",
                count: aiServices.filter(s => s.tags.some(tag => tag.toLowerCase().includes('automation'))).length
              },
              {
                icon: MessageSquare,
                title: "AI Chatbots",
                description: "Conversational AI solutions",
                count: aiServices.filter(s => s.tags.some(tag => tag.toLowerCase().includes('chatbot') || tag.toLowerCase().includes('nlp'))).length
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description: "Image and video analysis",
                count: aiServices.filter(s => s.tags.some(tag => tag.toLowerCase().includes('vision') || tag.toLowerCase().includes('image'))).length
              }
            ].map((category, index) => (
              <div key={category.title} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <category.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{category.description}</p>
                <span className="bg-zion-purple text-white text-sm px-3 py-1 rounded-full">
                  {category.count} Services
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} AI Services Found
          </h2>
          <p className="text-zion-slate-light">
            Discover our comprehensive AI service portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm">{service.category} • {service.subcategory}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {service.supportLevel === 'premium' && (
                    <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                      Premium
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full border ${getAIScoreColor(service.aiScore)} border-current`}>
                    {getAIScoreLabel(service.aiScore)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* AI Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-zion-cyan" />
                  AI Capabilities:
                </h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <Zap className="w-3 h-3 text-zion-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Price:</span>
                  <span className="text-white font-bold">
                    ${service.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Market Price:</span>
                  <span className="text-zion-cyan text-sm">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">AI Score:</span>
                  <span className={`text-sm font-medium ${getAIScoreColor(service.aiScore)}`}>
                    {service.aiScore}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Delivery:</span>
                  <span className="text-zion-slate-light text-sm">{service.estimatedDelivery}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                <div className="text-center mb-3">
                  <p className="text-zion-slate-light text-sm mb-2">Ready to implement AI?</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {service.supportLevel}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=AI Service Inquiry: ${service.name}`}
                    className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Get AI Quote
                  </a>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zion-blue hover:bg-zion-blue-light text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-zion-slate-light text-lg mb-4">
              No AI services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedAIScore('all');
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* AI Benefits Section */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI-Powered Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Increased Efficiency",
                description: "Automate repetitive tasks and streamline operations with AI-powered workflows"
              },
              {
                icon: Shield,
                title: "Enhanced Security",
                description: "Advanced threat detection and intelligent security monitoring systems"
              },
              {
                icon: Lightbulb,
                title: "Smart Insights",
                description: "Data-driven decision making with predictive analytics and AI insights"
              },
              {
                icon: Users,
                title: "Better Customer Experience",
                description: "Personalized interactions and intelligent customer service solutions"
              },
              {
                icon: Zap,
                title: "Scalable Solutions",
                description: "AI systems that grow with your business needs and requirements"
              },
              {
                icon: Globe,
                title: "24/7 Availability",
                description: "Round-the-clock AI services that never sleep or take breaks"
              }
            ].map((benefit, index) => (
              <div key={benefit.title} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our AI experts can help you implement intelligent solutions that drive growth, 
            efficiency, and innovation. Let's discuss your AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">AI Services</h4>
              <div className="space-y-2">
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;