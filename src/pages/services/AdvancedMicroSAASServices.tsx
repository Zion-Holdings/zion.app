import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../../data/advancedMicroSAASServices';

export default function AdvancedMicroSAASServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = Array.from(new Set(ADVANCED_MICRO_SAAS_SERVICES.map(service => service.category)));
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $500', min: 0, max: 500 },
    { label: '$500 - $1,000', min: 500, max: 1000 },
    { label: '$1,000 - $2,000', min: 1000, max: 2000 },
    { label: '$2,000 - $5,000', min: 2000, max: 5000 },
    { label: 'Over $5,000', min: 5000, max: Infinity }
  ];

  const filteredServices = ADVANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'All' || 
                        (service.price >= priceRanges.find(p => p.label === selectedPriceRange)!.min &&
                         service.price <= priceRanges.find(p => p.label === selectedPriceRange)!.max);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        return b.innovationLevel.length - a.innovationLevel.length;
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Customer Experience': Brain,
      'Blockchain & Supply Chain': Globe,
      'AI & IoT': Zap,
      'Quantum Technology': Atom,
      'AI & Business Intelligence': BarChart3,
      'AI & Content Creation': Users,
      'Blockchain & Smart Contracts': Shield,
      'AI & Human Resources': Heart,
      'Quantum Computing & AI': Atom
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Customer Experience': 'from-purple-500 to-pink-500',
      'Blockchain & Supply Chain': 'from-blue-500 to-indigo-500',
      'AI & IoT': 'from-green-500 to-teal-500',
      'Quantum Technology': 'from-indigo-500 to-purple-500',
      'AI & Business Intelligence': 'from-orange-500 to-red-500',
      'AI & Content Creation': 'from-pink-500 to-purple-500',
      'Blockchain & Smart Contracts': 'from-yellow-500 to-orange-500',
      'AI & Human Resources': 'from-red-500 to-pink-500',
      'Quantum Computing & AI': 'from-purple-500 to-indigo-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary')) return { color: 'text-red-400', bg: 'bg-red-400/20' };
    if (level.includes('Cutting-edge')) return { color: 'text-purple-400', bg: 'bg-purple-400/20' };
    if (level.includes('Advanced')) return { color: 'text-blue-400', bg: 'bg-blue-400/20' };
    return { color: 'text-green-400', bg: 'bg-green-400/20' };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-spin-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(138,43,226,0.1),transparent_50%)] animate-bounce-slow"></div>
      </div>

      <SEO 
        title="Advanced Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, blockchain platforms, and quantum technologies designed to transform your business."
        keywords="micro SAAS, AI services, blockchain solutions, quantum technology, smart contracts, predictive maintenance, customer experience, supply chain"
        canonical="https://ziontechgroup.com/services/advanced-micro-saas-services"
      />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-2 mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Advanced Micro SAAS
              <span className="block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                Services Portfolio
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionary micro SAAS solutions powered by cutting-edge AI, blockchain, quantum computing, and emerging technologies. 
            Transform your business with intelligent, scalable, and future-proof solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400">{ADVANCED_MICRO_SAAS_SERVICES.length}</div>
              <div className="text-sm text-cyan-200">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400">9</div>
              <div className="text-sm text-purple-200">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-3xl font-bold text-pink-400">$500</div>
              <div className="text-sm text-pink-200">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-bold text-green-400">1000%</div>
              <div className="text-sm text-green-200">Max ROI</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-pink-500/30 rounded-lg text-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50"
                >
                  {priceRanges.map(range => (
                    <option key={range.label} value={range.label}>{range.label}</option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="roi">Sort by ROI</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between text-sm text-cyan-300">
                <span>{filteredServices.length} services found</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    Auto-play
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    {isMuted ? 'Unmute' : 'Mute'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl text-cyan-300 max-w-4xl mx-auto">
              Explore our comprehensive suite of advanced micro SAAS services designed to give your business a competitive edge in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const innovationLevel = getInnovationLevel(service.innovationLevel);
              
              return (
                <div 
                  key={service.id} 
                  className="group relative"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.currency}{service.price}
                        </div>
                        <div className="text-sm text-cyan-400/70">
                          per {service.pricingModel}
                        </div>
                      </div>
                    </div>

                    {/* Service Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cyan-300/80 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Innovation Level Badge */}
                    <div className="mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${innovationLevel.bg} ${innovationLevel.color}`}>
                        <Award className="w-3 h-3 mr-1" />
                        {service.innovationLevel.split(' ')[0]}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <Target className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-400/70">Market Price:</span>
                        <span className="text-white font-semibold">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-cyan-400/70">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-cyan-400/70">Delivery:</span>
                        <span className="text-white font-semibold">{service.estimatedDelivery}</span>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technology:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technology.slice(0, 4).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                            {tech}
                          </span>
                        ))}
                        {service.technology.length > 4 && (
                          <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                            +{service.technology.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                      >
                        <Users className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 text-center">
                      <div className="text-xs text-cyan-400/70">
                        Contact: {service.contactInfo.phone}
                      </div>
                      <div className="text-xs text-cyan-400/70">
                        {service.contactInfo.email}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredService === service.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl pointer-events-none transition-opacity duration-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="bg-white/5 backdrop-blur-sm py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-cyan-300 max-w-4xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver innovative solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-First Approach</h3>
              <p className="text-cyan-300/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-cyan-300/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-cyan-300/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Support</h3>
              <p className="text-cyan-300/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-purple-900 py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-300 mb-8 max-w-4xl mx-auto">
            Contact our team of experts to discuss how our advanced micro SAAS services can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-colors">
              <div className="bg-cyan-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-cyan-300/80 mb-4">
                Get personalized advice from our technology experts
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Expert Consultation Request"
                className="text-cyan-400 hover:text-white transition-colors font-semibold group-hover:underline"
              >
                Schedule Consultation →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-colors">
              <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Assessment</h3>
              <p className="text-cyan-300/80 mb-4">
                Understand the potential return on your investment
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=ROI Assessment Request"
                className="text-cyan-400 hover:text-white transition-colors font-semibold group-hover:underline"
              >
                Get Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-colors">
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-cyan-300/80 mb-4">
                Begin your transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quick Start Request"
                className="text-cyan-400 hover:text-white transition-colors font-semibold group-hover:underline"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}