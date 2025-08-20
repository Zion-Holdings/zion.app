import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { MicroSaasService, serviceCategories, getServicesByCategory, getPopularServices } from '../../data/micro-saas-services';
import { ExternalLink, Star, Zap, TrendingUp, Users, Globe, Shield, ArrowRight } from 'lucide-react';

interface MicroSaasServicesProps {
  title?: string;
  subtitle?: string;
  showCategoryFilter?: boolean;
  maxServices?: number;
  featured?: boolean;
}

const MicroSaasServices: React.FC<MicroSaasServicesProps> = ({
  title = "Our Micro SaaS Services",
  subtitle = "Discover our portfolio of innovative, AI-powered micro SaaS solutions designed to solve real business problems.",
  showCategoryFilter = true,
  maxServices,
  featured = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [services, setServices] = useState<MicroSaasService[]>(featured ? getPopularServices() : maxServices ? getPopularServices().slice(0, maxServices) : getPopularServices());

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setServices(featured ? getPopularServices() : maxServices ? getPopularServices().slice(0, maxServices) : getPopularServices());
    } else {
      const filteredServices = getServicesByCategory(category);
      setServices(maxServices ? filteredServices.slice(0, maxServices) : filteredServices);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'active': { color: 'bg-green-500/10 text-green-400 border-green-500/20', text: 'Active' },
      'beta': { color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', text: 'Beta' },
      'coming-soon': { color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', text: 'Coming Soon' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Content & Marketing': <Zap className="w-4 h-4" />,
      'Analytics & Business Intelligence': <TrendingUp className="w-4 h-4" />,
      'Customer Support': <Users className="w-4 h-4" />,
      'SEO & Marketing': <Globe className="w-4 h-4" />,
      'Project Management': <Users className="w-4 h-4" />,
      'Email Marketing': <Zap className="w-4 h-4" />,
      'Social Media': <Globe className="w-4 h-4" />,
      'E-commerce & Inventory': <TrendingUp className="w-4 h-4" />,
      'Human Resources': <Users className="w-4 h-4" />,
      'Finance & Accounting': <TrendingUp className="w-4 h-4" />,
      'Design & Creative': <Star className="w-4 h-4" />,
      'Video & Media': <Star className="w-4 h-4" />,
      'Legal & Compliance': <Shield className="w-4 h-4" />
    };
    
    return iconMap[category] || <Zap className="w-4 h-4" />;
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Micro SaaS Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        {showCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(service.category)}
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                {getStatusBadge(service.status)}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-white">${service.pricing.starter}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-xs text-gray-400">Starting from {service.pricing.starter} USD/month</p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                <div className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-gray-500 mt-2">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-6 p-3 bg-gray-800/30 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Free Trial:</span>
                    <div className="text-white font-medium">{service.trialDays} days</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  href={service.website}
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Visit Service
                </Button>
                <Button
                  href={`/services/${service.id}`}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More
                </Button>
              </div>

              {/* Technology Stack */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {service.technology.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technology.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md">
                      +{service.technology.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Ready to explore more?
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover our complete portfolio of micro SaaS services and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/services"
              variant="primary"
              size="lg"
              className="shadow-2xl shadow-blue-500/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:border-white/40"
            >
              Get Custom Solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroSaasServices;