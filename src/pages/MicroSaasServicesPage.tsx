import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Users, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { MICRO_SAAS_SERVICES, getFeaturedMicroSaasServices } from '@/data/microSaasServices';

export default function MicroSaasServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES);

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing model
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPricingModel, sortBy]);

  const categories = [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
  const pricingModels = [...new Set(MICRO_SAAS_SERVICES.map(service => service.pricingModel))];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover-lift"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-zion-slate-light">{service.rating}</span>
            <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>
        {service.featured && (
          <div className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
        {service.title}
      </h3>
      
      <p className="text-zion-slate-light mb-4 leading-relaxed text-sm">
        {service.description}
      </p>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-zion-cyan">
            ${service.price}
            <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
          </div>
          <div className="text-sm text-zion-slate-light">
            AI Score: {service.aiScore}%
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
        <div className="space-y-1">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-xs text-zion-slate-light">
          <Users className="w-3 h-3 inline mr-1" />
          Perfect for {service.targetAudience.slice(0, 2).join(', ')}
        </div>
        <a
          href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
          className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
        >
          Contact
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEO
        title="Micro SAAS Services - Zion Tech Group"
        description="Discover innovative micro SAAS services and solutions in AI, IT, and business automation. Transform your business with cutting-edge technology."
        keywords="micro SAAS, AI services, IT solutions, business automation, Zion Tech Group"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our innovative micro SAAS solutions. From AI-powered automation to enterprise IT services,
              we provide cutting-edge technology that drives growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-y border-zion-purple/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">
                364 E Main St STE 1008, Middletown DE 19709
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-16 z-40 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-zion-cyan" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Pricing Model Filter */}
            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Pricing:</span>
              <select
                value={selectedPricingModel}
                onChange={(e) => setSelectedPricingModel(e.target.value)}
                className="px-3 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="all">All Models</option>
                {pricingModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="rating">Rating</option>
                <option value="price">Price</option>
                <option value="aiScore">AI Score</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Services Found
          </h2>
          <p className="text-zion-slate-light">
            Discover the perfect micro SAAS solution for your business needs
          </p>
        </div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-zion-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="w-12 h-12 text-zion-purple" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No services found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPricingModel('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-t border-zion-purple/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our team can create a custom micro SAAS solution
            tailored to your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}