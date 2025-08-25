import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, SERVICE_CATEGORIES as INNOVATIVE_CATEGORIES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_SERVICE_CATEGORIES } from '../data/specializedITServices';

export default function ServicesOverview() {
  // Combine all services and categories
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
  const allCategories = [...INNOVATIVE_CATEGORIES, ...SPECIALIZED_SERVICE_CATEGORIES];

  const getServiceIcon = (category: string) => {
    const categoryData = allCategories.find(cat => cat.name === category);
    return categoryData?.icon || '🚀';
  };

  const getServicesByCategory = (categoryName: string) => {
    return allServices.filter(service => service.category === categoryName);
  };

  const formatPrice = (service: any) => {
    if (service.price.oneTime && service.price.oneTime > 0) {
      return `$${service.price.oneTime.toLocaleString()}`;
    }
    if (service.price.monthly && service.price.monthly > 0) {
      return `$${service.price.monthly}/month`;
    }
    if (service.price.yearly && service.price.yearly > 0) {
      return `$${service.price.yearly}/year`;
    }
    return 'Contact Us';
  };

  return (
    <>
      <Helmet>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of Zion Tech Group's innovative micro SAAS services, AI solutions, IT infrastructure, and specialized industry solutions." />
        <meta name="keywords" content="services overview, micro SAAS, AI solutions, IT services, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-overview" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span> Overview
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive portfolio of innovative solutions designed to transform your business 
              and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">Global Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">Enterprise Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Service Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCategories.map((category) => {
                const categoryServices = getServicesByCategory(category.name);
                const avgRating = categoryServices.length > 0 
                  ? (categoryServices.reduce((sum, service) => sum + service.rating, 0) / categoryServices.length).toFixed(1)
                  : 0;
                
                return (
                  <div key={category.id} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-4 block">{category.icon}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-zion-slate-light text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-center gap-4 text-sm text-zion-slate-light">
                        <span>{categoryServices.length} Services</span>
                        <span>•</span>
                        <span>⭐ {avgRating} Rating</span>
                      </div>
                    </div>
                    <Link
                      to="/innovative-services"
                      className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      View Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Featured Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices
                .filter(service => service.rating >= 4.8)
                .slice(0, 6)
                .map((service) => (
                  <div key={service.id} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getServiceIcon(service.category)}</span>
                        <div>
                          <span className="inline-block px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full mb-1">
                            {service.pricingTier}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">{service.rating}</span>
                            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-zion-cyan font-semibold text-lg">
                        {formatPrice(service)}
                      </span>
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Category and Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-zion-cyan text-sm font-medium">
                        {service.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {service.status}
                      </span>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <TrendingUp className="w-3 h-3 text-zion-cyan" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Contact
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Service Statistics */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-zion-slate-light">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {allServices.filter(s => s.status === 'Active').length}
                </div>
                <div className="text-zion-slate-light">Active Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {allCategories.length}
                </div>
                <div className="text-zion-slate-light">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {allServices.reduce((sum, service) => sum + service.reviewCount, 0).toLocaleString()}+
                </div>
                <div className="text-zion-slate-light">Customer Reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Explore our complete service catalog and find the perfect solution for your business needs. 
                Our team of experts is ready to help you implement and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/innovative-services"
                  className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: +1 302 464 0950
                </a>
              </div>
              <div className="mt-6 text-zion-slate-light">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Available 24/7 for enterprise support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}