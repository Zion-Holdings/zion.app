import React, { useState } from 'react';
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
  Eye,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = INNOVATIVE_NEW_SERVICES
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'innovation':
          return b.innovationLevel.includes('Revolutionary') ? 1 : -1;
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Digital Marketing': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'Sustainability': Leaf,
      'Legal Tech': Scale,
      'Supply Chain': Truck,
      'FinTech': TrendingUp,
      'Smart Cities': Building,
      'Education': GraduationCap,
      'Quantum Computing': Atom,
      'AI & Customer Experience': Users,
      'Blockchain & Supply Chain': Globe,
      'AI & IoT': Zap,
      'Metaverse & Virtual Reality': Eye,
      'AI & Human Resources': Users,
      'Edge Computing & IoT': Zap
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Digital Marketing': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Healthcare': 'from-green-500 to-teal-500',
      'Sustainability': 'from-emerald-500 to-green-500',
      'Legal Tech': 'from-blue-500 to-indigo-500',
      'Supply Chain': 'from-yellow-500 to-orange-500',
      'FinTech': 'from-green-500 to-blue-500',
      'Smart Cities': 'from-gray-500 to-blue-500',
      'Education': 'from-purple-500 to-blue-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'AI & Customer Experience': 'from-cyan-500 to-blue-500',
      'Blockchain & Supply Chain': 'from-yellow-500 to-green-500',
      'AI & IoT': 'from-blue-500 to-cyan-500',
      'Metaverse & Virtual Reality': 'from-purple-500 to-indigo-500',
      'AI & Human Resources': 'from-pink-500 to-red-500',
      'Edge Computing & IoT': 'from-indigo-500 to-cyan-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary')) return { color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: Sparkles };
    if (level.includes('Cutting-edge')) return { color: 'text-cyan-400', bg: 'bg-cyan-400/20', icon: Star };
    if (level.includes('Advanced')) return { color: 'text-blue-400', bg: 'bg-blue-400/20', icon: Award };
    return { color: 'text-green-400', bg: 'bg-green-400/20', icon: CheckCircle };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services designed to transform your business."
        keywords="micro SAAS, AI services, technology solutions, digital transformation, innovation, business automation"
        canonical="https://ziontechgroup.com/services/comprehensive-showcase"
      />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 via-zion-purple/80 to-zion-cyan/70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-pulse">
              Comprehensive Services
              <span className="block text-4xl md:text-5xl text-zion-cyan mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete ecosystem of revolutionary micro SAAS services, AI solutions, and cutting-edge 
              technology services designed to accelerate your digital transformation and business growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-cyan">{INNOVATIVE_NEW_SERVICES.length}+</div>
                <div className="text-sm text-zion-slate-light">Innovative Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-purple">15+</div>
                <div className="text-sm text-zion-slate-light">Technology Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-green">500%+</div>
                <div className="text-sm text-zion-slate-light">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-orange">24/7</div>
                <div className="text-sm text-zion-slate-light">Global Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                <Sparkles className="w-5 h-5 inline mr-2" />
                Explore Services
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  <option value="innovation" className="bg-gray-800 text-white">Sort by Innovation</option>
                  <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                  <option value="roi" className="bg-gray-800 text-white">Sort by ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              {filteredServices.length} innovative services found - each designed to give your business a competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const innovation = getInnovationLevel(service.innovationLevel);
              
              return (
                <div key={service.id} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-cyan/70">
                          per {service.pricingModel}
                        </div>
                      </div>
                    </div>

                    {/* Innovation Level Badge */}
                    <div className="mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${innovation.bg} ${innovation.color}`}>
                        <innovation.icon className="w-3 h-3 mr-1" />
                        {service.innovationLevel.split(' ')[0]}
                      </div>
                    </div>

                    {/* Service Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-zion-cyan/70">Market Price:</span>
                          <div className="text-white font-semibold">{service.marketPrice}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">ROI:</span>
                          <div className="text-green-400 font-semibold">{service.roi}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">Delivery:</span>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">Support:</span>
                          <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center group"
                      >
                        <Users className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 text-center">
                      <div className="text-xs text-zion-cyan/70">
                        📞 {service.contactInfo.phone}
                      </div>
                      <div className="text-xs text-zion-cyan/70">
                        ✉️ {service.contactInfo.email}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/80">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="bg-white/5 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver innovative solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-zion-cyan/80 mb-4">
                Get personalized advice from our technology experts
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Expert Consultation Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Schedule Consultation →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Assessment</h3>
              <p className="text-zion-cyan/80 mb-4">
                Understand the potential return on your investment
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=ROI Assessment Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Get Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Quick Start</h3>
              <p className="text-zion-cyan/80 mb-4">
                Begin your transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quick Start Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">📞 Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">✉️ Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">🌐 Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">📍 Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}