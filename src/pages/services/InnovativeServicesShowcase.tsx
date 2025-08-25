import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Building, 
  Rocket, 
  Target,
  Phone,
  Mail,
  ExternalLink,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ADVANCED_AI_SERVICES } from '../../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../../data/innovativeITInfrastructure';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...ADVANCED_AI_SERVICES.map(service => ({ ...service, source: 'AI' })),
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES.map(service => ({ ...service, source: 'IT' })),
    ...INNOVATIVE_MICRO_SAAS_SERVICES.map(service => ({ ...service, source: 'SAAS' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'AI', name: 'Advanced AI', icon: Brain, count: ADVANCED_AI_SERVICES.length },
    { id: 'IT', name: 'IT Infrastructure', icon: Cpu, count: INNOVATIVE_IT_INFRASTRUCTURE_SERVICES.length },
    { id: 'SAAS', name: 'Micro SAAS', icon: Rocket, count: INNOVATIVE_MICRO_SAAS_SERVICES.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.source === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (source: string) => {
    switch (source) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'SAAS': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (source: string) => {
    switch (source) {
      case 'AI': return Brain;
      case 'IT': return Cpu;
      case 'SAAS': return Rocket;
      default: return Globe;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group" 
        description="Discover our cutting-edge AI services, innovative IT infrastructure, and revolutionary micro SAAS solutions designed for the future of business."
        keywords="AI services, IT infrastructure, micro SAAS, innovation, technology solutions, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Cutting-Edge Solutions for Tomorrow's Business
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Explore our comprehensive portfolio of advanced AI services, innovative IT infrastructure solutions, 
            and revolutionary micro SAAS platforms designed to transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Innovation Journey
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg border-2 border-zion-blue-light rounded-lg focus:border-zion-cyan focus:outline-none"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Target className="w-6 h-6 text-zion-slate" />
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedCategory === category.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-blue-light text-zion-blue-dark hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {category.name}
                    <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Discover Our Innovation Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From cutting-edge AI solutions to revolutionary infrastructure and micro SAAS platforms, 
              we provide the tools and expertise to drive your business into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.source);
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${getCategoryColor(service.source)} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                        {service.source}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-zion-blue-dark">
                          {service.currency}{service.price}
                        </span>
                        <span className="text-zion-slate text-sm">/month</span>
                      </div>
                      <p className="text-sm text-zion-slate">Market: {service.marketPrice}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-zion-blue-dark mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-zion-slate">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-zion-cyan font-medium">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-zion-blue-dark mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-zion-slate">
                            <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Delivery */}
                    <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate">ROI:</span>
                        <div className="font-semibold text-zion-cyan">{service.roi}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate">Delivery:</span>
                        <div className="font-semibold text-zion-blue-dark">{service.estimatedDelivery}</div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-zion-slate">
                          <Phone className="w-4 h-4" />
                          {service.contactInfo.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate">
                          <Mail className="w-4 h-4" />
                          {service.contactInfo.email}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg font-semibold text-sm transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-12 h-12 text-zion-slate" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you implement these innovative solutions and drive your business forward. 
            Contact us today to start your innovation journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Phone</div>
              <div className="text-zion-slate-light">+1 302 464 0950</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Email</div>
              <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
            </div>
            <div className="text-center">
              <Building className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Portfolio
            </button>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}