import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Building, 
  Globe, 
  Users, 
  BarChart3,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Filter,
  Search,
  DollarSign,
  Clock,
  Users as UsersIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Atom,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Heart,
  Leaf,
  Rocket,
  Microscope,
  Drone
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';

// Combine all services
const ALL_INNOVATIVE_SERVICES = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...ADVANCED_INNOVATIVE_SERVICES];

export default function ComprehensiveInnovativeServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');

  const categories = Array.from(new Set(ALL_INNOVATIVE_SERVICES.map(service => service.category)));
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $500', min: 0, max: 500 },
    { label: '$500 - $1,000', min: 500, max: 1000 },
    { label: '$1,000 - $2,000', min: 1000, max: 2000 },
    { label: '$2,000 - $5,000', min: 2000, max: 5000 },
    { label: 'Over $5,000', min: 5000, max: Infinity }
  ];

  const innovationLevels = [
    'All',
    'Cutting-edge AI technology',
    'Revolutionary quantum technology',
    'Advanced AI technology',
    'Revolutionary blockchain technology',
    'Cutting-edge edge computing technology',
    'Advanced AI technology with state-of-the-art capabilities',
    'Revolutionary quantum-safe technology',
    'Advanced AI and IoT technology',
    'Revolutionary quantum-resistant technology',
    'Advanced synthetic data technology',
    'Advanced federated learning technology',
    'Revolutionary quantum internet technology',
    'Advanced AI technology revolutionizing pharmaceutical drug discovery',
    'Advanced autonomous drone technology'
  ];

  const filteredServices = ALL_INNOVATIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'All' || 
                        (service.price >= priceRanges.find(range => range.label === selectedPriceRange)?.min! &&
                         service.price <= priceRanges.find(range => range.label === selectedPriceRange)?.max!);
    
    const matchesInnovation = selectedInnovationLevel === 'All' || 
                             service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesInnovation;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & IoT': Brain,
      'Blockchain & Supply Chain': Globe,
      'AI & FinTech': BarChart3,
      'Quantum Security & Cloud': Shield,
      'AI & HR Tech': Users,
      'Edge Computing & IoT': Zap,
      'AI & Cybersecurity': Shield,
      'Sustainability & Smart Buildings': Building,
      'AI & Content Safety': Shield,
      'Quantum Security & Identity': Shield,
      'Quantum Computing & AI': Atom,
      'AI & Automation': Cpu,
      'Advanced Computing': Database,
      'AI & Data': Brain,
      'AI & Privacy': Lock,
      'Quantum Security & Networking': Network,
      'AI & Healthcare': Heart,
      'AI & Robotics': Drone
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & IoT': 'from-blue-500 to-cyan-500',
      'Blockchain & Supply Chain': 'from-green-500 to-emerald-500',
      'AI & FinTech': 'from-purple-500 to-pink-500',
      'Quantum Security & Cloud': 'from-indigo-500 to-purple-500',
      'AI & HR Tech': 'from-orange-500 to-red-500',
      'Edge Computing & IoT': 'from-teal-500 to-blue-500',
      'AI & Cybersecurity': 'from-red-500 to-orange-500',
      'Sustainability & Smart Buildings': 'from-emerald-500 to-green-500',
      'AI & Content Safety': 'from-pink-500 to-purple-500',
      'Quantum Security & Identity': 'from-violet-500 to-indigo-500',
      'Quantum Computing & AI': 'from-indigo-600 to-purple-600',
      'AI & Automation': 'from-blue-600 to-cyan-600',
      'Advanced Computing': 'from-gray-600 to-blue-600',
      'AI & Data': 'from-green-600 to-blue-600',
      'AI & Privacy': 'from-purple-600 to-pink-600',
      'Quantum Security & Networking': 'from-indigo-700 to-purple-700',
      'AI & Healthcare': 'from-red-600 to-pink-600',
      'AI & Robotics': 'from-orange-600 to-red-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getServiceStats = () => {
    const totalServices = ALL_INNOVATIVE_SERVICES.length;
    const totalCategories = categories.length;
    const avgPrice = ALL_INNOVATIVE_SERVICES.reduce((sum, service) => sum + service.price, 0) / totalServices;
    const totalROI = ALL_INNOVATIVE_SERVICES.reduce((sum, service) => {
      const roi = parseInt(service.roi.split('%')[0]);
      return sum + roi;
    }, 0);
    const avgROI = totalROI / totalServices;

    return { totalServices, totalCategories, avgPrice, avgROI };
  };

  const stats = getServiceStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Innovative Services - Zion Tech Group" 
        description="Discover our complete portfolio of innovative micro SAAS services, IT solutions, and AI innovations that transform businesses and drive digital transformation."
        keywords="comprehensive innovative services, micro SAAS, AI solutions, blockchain, quantum security, edge computing, sustainable technology"
        canonical="https://ziontechgroup.com/comprehensive-innovative-services"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Innovative Services
              <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
                Complete Portfolio of Cutting-Edge Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore our complete collection of {stats.totalServices} innovative services across {stats.totalCategories} categories, 
              featuring AI-powered solutions, blockchain technology, quantum security, and sustainable innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" className="font-medium hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-zion-blue-dark mb-2">{stats.totalServices}</div>
              <div className="text-zion-slate">Innovative Services</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-zion-blue-dark mb-2">{stats.totalCategories}</div>
              <div className="text-zion-slate">Service Categories</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-zion-blue-dark mb-2">${Math.round(stats.avgPrice)}</div>
              <div className="text-zion-slate">Average Monthly Price</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-zion-blue-dark mb-2">{Math.round(stats.avgROI)}%</div>
              <div className="text-zion-slate">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex gap-2">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.label} value={range.label}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="flex gap-2">
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="All">All Innovation Levels</option>
                {innovationLevels.slice(1).map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Each service is designed with cutting-edge technology, competitive pricing, and proven ROI to help your business thrive in the digital age.
            </p>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const CategoryIcon = getCategoryIcon(service.category);
                const categoryColor = getCategoryColor(service.category);
                
                return (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${categoryColor} p-6 rounded-t-xl`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-2xl">${service.price}</div>
                          <div className="text-white/80 text-sm">per month</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="text-white/90 text-sm">{service.category}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>
                      
                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          Key Features
                        </h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate">
                              <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-zion-cyan" />
                          Benefits
                        </h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate">
                              <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                              <span className="line-clamp-1">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing Tiers */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-zion-cyan" />
                          Pricing Tiers
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-zion-slate">Starter:</span>
                            <span className="font-medium">${service.pricingTiers.starter.price}/mo</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-zion-slate">Professional:</span>
                            <span className="font-medium">${service.pricingTiers.professional.price}/mo</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-zion-slate">Enterprise:</span>
                            <span className="font-medium">${service.pricingTiers.enterprise.price}/mo</span>
                          </div>
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate">Market Price:</span>
                          <span className="font-medium text-zion-blue-dark">{service.marketPrice}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-zion-slate">ROI:</span>
                          <span className="font-medium text-green-600">{service.roi}</span>
                        </div>
                      </div>

                      {/* Innovation Level */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-zion-cyan" />
                          Innovation Level
                        </h4>
                        <p className="text-sm text-zion-slate line-clamp-2">{service.innovationLevel}</p>
                      </div>

                      {/* Tags */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 4).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                          Get Started
                        </button>
                        <button className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg transition-colors text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business value to deliver innovative solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Proven Expertise</h3>
              <p className="text-zion-slate">
                Years of experience in delivering innovative solutions across industries
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Cutting-Edge Tech</h3>
              <p className="text-zion-slate">
                Latest AI, blockchain, and quantum technologies for future-proof solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Dedicated Support</h3>
              <p className="text-zion-slate">
                Expert support team available to ensure your success
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Proven ROI</h3>
              <p className="text-zion-slate">
                Solutions designed to deliver measurable business value and returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Let our comprehensive innovative services help you stay ahead of the competition 
            and drive digital transformation in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}