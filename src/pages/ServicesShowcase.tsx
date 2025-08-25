import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Brain,
  Globe,
  Building,
  Car,
  GraduationCap,
  Factory,
  Home,
  Leaf
} from 'lucide-react';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory } from '../../data/enhanced-real-micro-saas-services';

export default function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = enhancedRealMicroSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && parseFloat(service.price.replace('$', '')) < 300) ||
                        (priceRange === 'medium' && parseFloat(service.price.replace('$', '')) >= 300 && parseFloat(service.price.replace('$', '')) < 600) ||
                        (priceRange === 'high' && parseFloat(service.price.replace('$', '')) >= 600);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-6 h-6" />,
      'Cloud & Infrastructure': <Globe className="w-6 h-6" />,
      'Digital Marketing': <TrendingUp className="w-6 h-6" />,
      'AI & Content Creation': <Brain className="w-6 h-6" />,
      'Software Development': <Zap className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Data & Analytics': <TrendingUp className="w-6 h-6" />,
      'Design & User Experience': <Users className="w-6 h-6" />,
      'E-commerce & Sales': <Building className="w-6 h-6" />,
      'Finance & Accounting': <TrendingUp className="w-6 h-6" />,
      'Healthcare & Medical': <Shield className="w-6 h-6" />,
      'Education & Training': <GraduationCap className="w-6 h-6" />,
      'Productivity & Automation': <Zap className="w-6 h-6" />,
      'Communication & Collaboration': <Users className="w-6 h-6" />,
      'Robotics & Automation': <Zap className="w-6 h-6" />,
      'Metaverse & VR/AR': <Globe className="w-6 h-6" />,
      'IoT & Smart Cities': <Globe className="w-6 h-6" />,
      'Analytics & Business Intelligence': <TrendingUp className="w-6 h-6" />,
      'Legal & Compliance': <Shield className="w-6 h-6" />,
      'Logistics & Supply Chain': <Car className="w-6 h-6" />,
      'Human Resources': <Users className="w-6 h-6" />,
      'Manufacturing & Industry 4.0': <Factory className="w-6 h-6" />,
      'Real Estate & Property': <Home className="w-6 h-6" />,
      'Energy & Sustainability': <Leaf className="w-6 h-6" />
    };
    return icons[category] || <Globe className="w-6 h-6" />;
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services including AI solutions, quantum computing, autonomous systems, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, autonomous systems, cybersecurity, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive portfolio of innovative micro SAAS services designed to transform your business. 
              From AI-powered solutions to quantum computing platforms, we deliver cutting-edge technology that drives growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-zion-cyan mb-4">Ready to Get Started?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-zion-blue-light/10 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-light/10 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {serviceCategories.map(category => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-light/10 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="all" className="bg-zion-blue-dark text-white">All Prices</option>
                  <option value="low" className="bg-zion-blue-dark text-white">Under $300/month</option>
                  <option value="medium" className="bg-zion-blue-dark text-white">$300-$600/month</option>
                  <option value="high" className="bg-zion-blue-dark text-white">Over $600/month</option>
                </select>

                {/* Results Count */}
                <div className="flex items-center justify-center text-zion-slate-light">
                  <span>{filteredServices.length} services found</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="flex items-center gap-1 bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-3">{service.tagline}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light">{service.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-zion-cyan">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="text-xs text-zion-slate-light space-y-1">
                      <div><strong>Market:</strong> {service.marketSize}</div>
                      <div><strong>Growth:</strong> {service.growthRate}</div>
                      <div><strong>ROI:</strong> {service.roi}</div>
                    </div>
                  </div>

                  {/* Category & Technology */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-zion-slate-light mb-2">
                      {getCategoryIcon(service.category)}
                      <span>{service.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technology.length > 3 && (
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded">
                          +{service.technology.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Trial & Setup */}
                  <div className="mb-4 text-xs text-zion-slate-light">
                    <div className="flex justify-between">
                      <span>Free Trial: {service.trialDays} days</span>
                      <span>Setup: {service.setupTime}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-2 px-4 rounded-lg transition-colors text-center text-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border border-zion-cyan font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today to start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Our Experts
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}