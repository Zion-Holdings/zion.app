import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  Target, 
  Award,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Server,
  Lock,
  Cpu,
  Wifi,
  Smartphone,
  Monitor,
  HardDrive,
  Router,
  Database,
  Network,
  Atom,
  Leaf,
  Scale,
  Truck,
  Heart,
  GraduationCap,
  Building
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../../data/advancedMicroSAASServices';
import { COMPREHENSIVE_IT_SERVICES } from '../../data/comprehensiveITServices';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function AllServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedServiceType, setSelectedServiceType] = useState('All');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES.map(service => ({ ...service, type: 'Micro SAAS' })),
    ...COMPREHENSIVE_IT_SERVICES.map(service => ({ ...service, type: 'IT Services' })),
    ...INNOVATIVE_NEW_SERVICES.map(service => ({ ...service, type: 'Innovative Services' }))
  ];

  const categories = Array.from(new Set(allServices.map(service => service.category)));
  const serviceTypes = ['All', 'Micro SAAS', 'IT Services', 'Innovative Services'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesType = selectedServiceType === 'All' || service.type === selectedServiceType;
    
    return matchesSearch && matchesCategory && matchesType;
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
      'Quantum Computing & AI': Atom,
      'Cybersecurity & Network Security': Shield,
      'DevOps & Cloud Infrastructure': Cloud,
      'Edge Computing & IoT': Zap,
      'Data Analytics & Business Intelligence': Brain,
      'Blockchain & Identity Management': Globe,
      'AI & Customer Service': Users,
      'Quantum Technology & Cloud Storage': Cpu,
      'AI & Software Testing': Target,
      'AI & Digital Marketing': Brain,
      'Healthcare': Heart,
      'Sustainability': Leaf,
      'Legal Tech': Scale,
      'Supply Chain': Truck,
      'FinTech': BarChart3,
      'Smart Cities': Building,
      'Education': GraduationCap
    };
    return iconMap[category] || Server;
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
      'Quantum Computing & AI': 'from-purple-500 to-indigo-500',
      'Cybersecurity & Network Security': 'from-red-500 to-orange-500',
      'DevOps & Cloud Infrastructure': 'from-blue-500 to-indigo-500',
      'Edge Computing & IoT': 'from-green-500 to-teal-500',
      'Data Analytics & Business Intelligence': 'from-purple-500 to-pink-500',
      'Blockchain & Identity Management': 'from-yellow-500 to-orange-500',
      'AI & Customer Service': 'from-pink-500 to-purple-500',
      'Quantum Technology & Cloud Storage': 'from-indigo-500 to-purple-500',
      'AI & Software Testing': 'from-emerald-500 to-green-500',
      'AI & Digital Marketing': 'from-purple-500 to-pink-500',
      'Healthcare': 'from-green-500 to-teal-500',
      'Sustainability': 'from-emerald-500 to-green-500',
      'Legal Tech': 'from-blue-500 to-indigo-500',
      'Supply Chain': 'from-yellow-500 to-orange-500',
      'FinTech': 'from-green-500 to-blue-500',
      'Smart Cities': 'from-gray-500 to-blue-500',
      'Education': 'from-purple-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getServiceTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Micro SAAS': 'from-cyan-500 to-blue-500',
      'IT Services': 'from-green-500 to-teal-500',
      'Innovative Services': 'from-purple-500 to-pink-500'
    };
    return colorMap[type] || 'from-gray-500 to-gray-600';
  };

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary')) return { color: 'text-red-400', bg: 'bg-red-400/20' };
    if (level.includes('Cutting-edge')) return { color: 'text-purple-400', bg: 'bg-purple-400/20' };
    if (level.includes('Advanced')) return { color: 'text-blue-400', bg: 'bg-blue-400/20' };
    return { color: 'text-green-400', bg: 'bg-green-400/20' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-spin-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(138,43,226,0.1),transparent_50%)] animate-bounce-slow"></div>
      </div>

      <SEO 
        title="All Services Overview - Zion Tech Group" 
        description="Comprehensive overview of all our innovative micro SAAS services, IT solutions, and AI technologies designed to transform your business."
        keywords="all services, micro SAAS, IT services, AI solutions, blockchain, quantum technology, comprehensive services"
        canonical="https://ziontechgroup.com/services/all-services-overview"
      />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-2 mr-4">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              All Services
              <span className="block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                Overview
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our complete portfolio of revolutionary services including micro SAAS solutions, 
            comprehensive IT services, and cutting-edge AI technologies designed to transform your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400">{allServices.length}</div>
              <div className="text-sm text-cyan-200">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400">{categories.length}</div>
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
                    placeholder="Search all services, features, or technologies..."
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
                  value={selectedServiceType}
                  onChange={(e) => setSelectedServiceType(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-pink-500/30 rounded-lg text-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50"
                >
                  {serviceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="text-sm text-cyan-300">
                <span>{filteredServices.length} services found</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Type Overview */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-cyan-300 max-w-4xl mx-auto">
              Explore our three main service categories designed to meet all your business technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className={`w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Micro SAAS Services</h3>
              <p className="text-cyan-300/80 mb-6 text-center">
                Revolutionary micro software-as-a-service solutions powered by AI, blockchain, and emerging technologies
              </p>
              <div className="text-center">
                <a
                  href="/services/advanced-micro-saas-services"
                  className="inline-flex items-center text-cyan-400 hover:text-white transition-colors font-semibold group-hover:underline"
                >
                  Explore Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 group">
              <div className={`w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">IT Services</h3>
              <p className="text-cyan-300/80 mb-6 text-center">
                Comprehensive IT infrastructure, cybersecurity, DevOps, and emerging technology solutions
              </p>
              <div className="text-center">
                <a
                  href="/services/comprehensive-it-services"
                  className="inline-flex items-center text-cyan-400 hover:text-white transition-colors font-semibold group-hover:underline"
                >
                  Explore Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
              <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Innovative Services</h3>
              <p className="text-cyan-300/80 mb-6 text-center">
                Cutting-edge AI, quantum computing, and emerging technology solutions for the future
              </p>
              <div className="text-center">
                <a
                  href="/services/innovative-new-services"
                  className="inline-flex items-center text-cyan-400 hover:text-white transition-colors font-semibold group-hover:underline"
                >
                  Explore Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Services Portfolio
            </h2>
            <p className="text-xl text-cyan-300 max-w-4xl mx-auto">
              Browse our comprehensive collection of innovative services designed to give your business a competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const serviceTypeColor = getServiceTypeColor(service.type);
              const innovationLevel = getInnovationLevel(service.innovationLevel);
              
              return (
                <div 
                  key={service.id} 
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    {/* Service Type Badge */}
                    <div className="mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${serviceTypeColor} text-white`}>
                        {service.type}
                      </div>
                    </div>

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

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-400/70">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-cyan-400/70">Delivery:</span>
                        <span className="text-white font-semibold">{service.estimatedDelivery}</span>
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
                </div>
              );
            })}
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
            Contact our team of experts to discuss how our comprehensive services can drive your digital transformation and business growth
          </p>
          
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