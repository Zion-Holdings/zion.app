import React from 'react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { Search, Filter, Star, Clock, Users, Zap, Shield, TrendingUp, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesShowcase() {
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.badge === 'Featured' || service.badge === 'Popular').slice(0, 6);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI Services": "from-purple-500 to-indigo-600",
      "IT Services": "from-blue-500 to-cyan-600",
      "Micro SAAS": "from-green-500 to-emerald-600",
      "Development": "from-orange-500 to-red-600",
      "Analytics": "from-teal-500 to-blue-600",
      "Security": "from-red-500 to-pink-600",
      "Automation": "from-violet-500 to-purple-600"
    };
    return colors[category] || "from-slate-500 to-slate-600";
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "AI Services": "🤖",
      "IT Services": "💻",
      "Micro SAAS": "☁️",
      "Development": "🛠️",
      "Analytics": "📊",
      "Security": "🔒",
      "Automation": "⚡"
    };
    return icons[category] || "💼";
  };

  const getPriceDisplay = (service: any) => {
    if (service.price.monthly === 0) {
      return 'Free';
    }
    return `$${service.price.monthly}/month`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Featured Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              {" "}Innovative Solutions
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            From AI-powered content generation to enterprise cybersecurity, explore our comprehensive suite of 
            cutting-edge services designed to transform your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 border border-zion-purple/30 rounded-2xl p-6 backdrop-blur-md hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-purple/0 via-zion-cyan/20 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badge */}
              <div className="relative z-10 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  service.badge === 'New' ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' :
                  service.badge === 'Featured' ? 'bg-zion-purple/20 text-zion-purple-light border border-zion-purple/30' :
                  service.badge === 'Popular' ? 'bg-zion-blue/20 text-zion-blue-light border border-zion-blue/30' :
                  service.badge === 'Premium' ? 'bg-emerald/20 text-emerald-400 border border-emerald/30' :
                  'bg-zion-slate/20 text-zion-slate-light border border-zion-slate/30'
                }`}>
                  {service.badge === 'New' && <Sparkles className="h-3 w-3 mr-1" />}
                  {service.badge === 'Featured' && <Star className="h-3 w-3 mr-1" />}
                  {service.badge === 'Popular' && <TrendingUp className="h-3 w-3 mr-1" />}
                  {service.badge === 'Premium' && <Star className="h-3 w-3 mr-1" />}
                  {service.badge === 'Enterprise' && <Shield className="h-3 w-3 mr-1" />}
                  {service.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 group-hover:border-zion-cyan/50 transition-all duration-300">
                  <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-100/10 text-zion-slate-light border border-zion-slate-light/20"
                      >
                        <CheckCircle className="h-3 w-3 mr-1 text-zion-cyan" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPriceDisplay(service)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">
                      {service.rating}
                    </span>
                    <span className="text-sm text-zion-slate-light">
                      ({service.reviewCount})
                    </span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 group-hover:shadow-zion-cyan/40"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Explore our complete service catalog and discover how our innovative solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <Link
              to="/all-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30"
            >
              <Sparkles className="h-5 w-5" />
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}