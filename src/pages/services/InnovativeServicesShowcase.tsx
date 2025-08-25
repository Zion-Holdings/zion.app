import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Brain,
  Eye,
  Lock,
  Cloud,
  Database,
  Smartphone,
  Target,
  Award,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../../data/enhancedMicroSaasServices';

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: ENHANCED_MICRO_SAAS_SERVICES.length },
    { id: 'AI & Business Intelligence', name: 'AI & BI', icon: Brain, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('AI')).length },
    { id: 'AI & Customer Service', name: 'Customer Service', icon: Users, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Customer Service')).length },
    { id: 'AI & Marketing', name: 'Marketing', icon: Target, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Marketing')).length },
    { id: 'AI & Human Resources', name: 'HR & Recruitment', icon: Users, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Human Resources')).length },
    { id: 'AI & Legal Tech', name: 'Legal Tech', icon: Shield, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Legal Tech')).length },
    { id: 'AI & Financial Services', name: 'Financial Services', icon: DollarSign, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Financial Services')).length },
    { id: 'AI & Healthcare', name: 'Healthcare', icon: Building, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Healthcare')).length },
    { id: 'AI & Supply Chain', name: 'Supply Chain', icon: TrendingUp, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'AI & Real Estate', name: 'Real Estate', icon: Building, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Real Estate')).length },
    { id: 'AI & Education', name: 'Education', icon: Users, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Education')).length },
    { id: 'AI & Energy', name: 'Energy', icon: Zap, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Energy')).length },
    { id: 'AI & Manufacturing', name: 'Manufacturing', icon: Cpu, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Manufacturing')).length }
  ];

  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Micro SAAS Services Showcase - Zion Tech Group" 
        description="Explore our comprehensive portfolio of AI-powered micro SAAS solutions across industries. From business intelligence to healthcare analytics, we deliver innovative technology solutions."
        keywords="micro SAAS, AI services, business intelligence, customer service, marketing automation, HR solutions, legal tech, financial analytics, healthcare AI, supply chain optimization"
        canonical="https://ziontechgroup.com/services/innovative-services-showcase"
      />

      {/* Hero Section with Futuristic Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Revolutionary Micro SAAS Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Micro SAAS Services
            </span>
            <span className="block text-3xl md:text-4xl text-zion-slate-light mt-4">
              Powered by AI & Emerging Technologies
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our cutting-edge micro SAAS solutions. From AI-powered business intelligence 
            to quantum-safe cybersecurity, we deliver innovative technology that drives growth and competitive advantage.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25">
              <span className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {ENHANCED_MICRO_SAAS_SERVICES.length}+
              </div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">15+</div>
              <div className="text-zion-slate-light">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search services, features, or industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan border-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'border-white/20 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Our Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              {filteredServices.length} services found. Each solution is designed to deliver measurable business value 
              with rapid deployment and scalable architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <div 
                  key={service.id} 
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-zion-slate-light capitalize">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-4">
                    <CategoryIcon className="w-3 h-3 mr-2" />
                    {service.category}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-slate-light text-center">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <TrendingUp className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-zion-slate-light mb-1">Market Price Range:</div>
                    <div className="text-sm font-semibold text-zion-cyan">{service.marketPrice}</div>
                  </div>

                  {/* ROI */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg border border-zion-cyan/30">
                    <div className="text-xs text-zion-slate-light mb-1">Expected ROI:</div>
                    <div className="text-sm font-semibold text-zion-cyan">{service.roi}</div>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-6">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="w-full border border-white/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect micro SAAS solution. 
              Get in touch today to start your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
                <p className="text-sm text-zion-slate-light">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                <p className="text-sm text-zion-slate-light">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008</p>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Search icon component
function Search({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}