import React, { useState, useMemo } from 'react';
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
  ExternalLink,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Layers,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Heart
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, SERVICE_CATEGORIES as INNOVATIVE_CATEGORIES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_SERVICE_CATEGORIES } from '../data/specializedITServices';

export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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

  // Calculate statistics
  const stats = useMemo(() => {
    const totalServices = allServices.length;
    const totalCategories = allCategories.length;
    const averageRating = allServices.reduce((sum, service) => sum + service.rating, 0) / totalServices;
    const totalReviews = allServices.reduce((sum, service) => sum + service.reviewCount, 0);
    const activeServices = allServices.filter(service => service.status === 'Active').length;
    const betaServices = allServices.filter(service => service.status === 'Beta').length;
    
    // Price distribution
    const priceRanges = {
      'Under $100': allServices.filter(s => (s.price.monthly || s.price.oneTime || 0) < 100).length,
      '$100-$500': allServices.filter(s => (s.price.monthly || s.price.oneTime || 0) >= 100 && (s.price.monthly || s.price.oneTime || 0) < 500).length,
      '$500-$1000': allServices.filter(s => (s.price.monthly || s.price.oneTime || 0) >= 500 && (s.price.monthly || s.price.oneTime || 0) < 1000).length,
      'Over $1000': allServices.filter(s => (s.price.monthly || s.price.oneTime || 0) >= 1000).length,
    };

    return {
      totalServices,
      totalCategories,
      averageRating: averageRating.toFixed(1),
      totalReviews,
      activeServices,
      betaServices,
      priceRanges
    };
  }, [allServices, allCategories]);

  // Get featured services (top rated)
  const featuredServices = useMemo(() => {
    return allServices
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
  }, [allServices]);

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
                <span className="text-lg">{stats.averageRating}+ Average Rating</span>
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

        {/* Statistics Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Service Portfolio Statistics
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-3xl text-zion-cyan mb-2">{stats.totalServices}</div>
                <div className="text-white font-medium">Total Services</div>
                <div className="text-zion-slate-light text-sm">Available Solutions</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-3xl text-zion-cyan mb-2">{stats.totalCategories}</div>
                <div className="text-white font-medium">Service Categories</div>
                <div className="text-zion-slate-light text-sm">Diverse Solutions</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-3xl text-zion-cyan mb-2">{stats.averageRating}</div>
                <div className="text-white font-medium">Average Rating</div>
                <div className="text-zion-slate-light text-sm">Customer Satisfaction</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-3xl text-zion-cyan mb-2">{stats.totalReviews}</div>
                <div className="text-white font-medium">Total Reviews</div>
                <div className="text-zion-slate-light text-sm">Customer Feedback</div>
              </div>
            </div>

            {/* Price Distribution Chart */}
            <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Price Distribution</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(stats.priceRanges).map(([range, count]) => (
                  <div key={range} className="text-center">
                    <div className="text-2xl text-zion-cyan font-bold mb-2">{count}</div>
                    <div className="text-white text-sm">{range}</div>
                    <div className="text-zion-slate-light text-xs">
                      {((count / stats.totalServices) * 100).toFixed(1)}%
                    </div>
                  </div>
                ))}
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
                  : '0.0';
                
                return (
                  <div 
                    key={category.id}
                    className={`bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 transition-all duration-300 cursor-pointer ${
                      selectedCategory === category.name 
                        ? 'border-zion-cyan/50 bg-zion-blue-light/30' 
                        : 'hover:border-zion-cyan/30 hover:bg-zion-blue-light/25'
                    }`}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{category.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        <p className="text-zion-slate-light text-sm">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white text-sm">{categoryServices.length} Services</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{avgRating}</span>
                      </div>
                    </div>

                    {/* Category Services Preview */}
                    {selectedCategory === category.name && (
                      <div className="mt-4 pt-4 border-t border-zion-purple/30">
                        <div className="space-y-2">
                          {categoryServices.slice(0, 3).map((service) => (
                            <div 
                              key={service.id}
                              className="flex items-center justify-between p-2 bg-zion-blue-light/10 rounded hover:bg-zion-blue-light/20 transition-colors"
                              onMouseEnter={() => setHoveredService(service.id)}
                              onMouseLeave={() => setHoveredService(null)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{getServiceIcon(service.category)}</span>
                                <span className="text-white text-sm truncate max-w-32">{service.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-zion-cyan text-sm font-medium">
                                  {formatPrice(service)}
                                </span>
                                <Link 
                                  to={`/innovative-services?category=${category.name}`}
                                  className="text-zion-purple hover:text-zion-cyan transition-colors"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          ))}
                          {categoryServices.length > 3 && (
                            <div className="text-center">
                              <Link 
                                to={`/innovative-services?category=${category.name}`}
                                className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium"
                              >
                                View all {categoryServices.length} services →
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <Link 
                        to={`/innovative-services?category=${category.name}`}
                        className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium flex items-center gap-1"
                      >
                        Explore Services
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        categoryServices.length > 5 ? 'bg-green-500/20 text-green-400' :
                        categoryServices.length > 2 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {categoryServices.length > 5 ? 'Extensive' : categoryServices.length > 2 ? 'Growing' : 'New'}
                      </span>
                    </div>
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
              {featuredServices.map((service) => (
                <div 
                  key={service.id}
                  className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                >
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

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

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

        {/* Service Status Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Service Status Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-4xl mb-4">🟢</div>
                <h3 className="text-xl font-bold text-white mb-2">Active Services</h3>
                <div className="text-3xl text-green-400 font-bold mb-2">{stats.activeServices}</div>
                <p className="text-zion-slate-light text-sm">Production Ready</p>
                <div className="mt-4 text-xs text-zion-slate-light">
                  {((stats.activeServices / stats.totalServices) * 100).toFixed(1)}% of portfolio
                </div>
              </div>
              
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-4xl mb-4">🟡</div>
                <h3 className="text-xl font-bold text-white mb-2">Beta Services</h3>
                <div className="text-3xl text-yellow-400 font-bold mb-2">{stats.betaServices}</div>
                <p className="text-zion-slate-light text-sm">Early Access</p>
                <div className="mt-4 text-xs text-zion-slate-light">
                  {((stats.betaServices / stats.totalServices) * 100).toFixed(1)}% of portfolio
                </div>
              </div>
              
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="text-4xl mb-4">🔵</div>
                <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                <div className="text-3xl text-blue-400 font-bold mb-2">{stats.totalServices - stats.activeServices - stats.betaServices}</div>
                <p className="text-zion-slate-light text-sm">In Progress</p>
                <div className="mt-4 text-xs text-zion-slate-light">
                  {(((stats.totalServices - stats.activeServices - stats.betaServices) / stats.totalServices) * 100).toFixed(1)}% of portfolio
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Explore Our Services?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Discover the perfect solution for your business needs. Our comprehensive portfolio 
                offers cutting-edge technology solutions designed to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/innovative-services"
                  className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  View All Services
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </div>
              <div className="mt-6 text-zion-slate-light">
                <p>Need help choosing? Our experts are here to guide you.</p>
                <p>Call us: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}