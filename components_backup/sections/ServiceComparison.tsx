import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { MicroSaasService, getServicesByCategory } from '../../data/micro-saas-services';
import { Check, X, Star, TrendingUp, Users, Globe, Shield, ArrowRight, ExternalLink, Zap } from 'lucide-react';

interface ServiceComparisonProps {
  services?: MicroSaasService[];
  category?: string;
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ 
  services: propServices, 
  category 
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  // Get services to display
  let services: MicroSaasService[] = [];
  if (propServices) {
    services = propServices;
  } else if (category) {
    services = getServicesByCategory(category);
  } else {
    services = [];
  }

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else if (selectedServices.length < 3) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const startComparison = () => {
    if (selectedServices.length >= 2) {
      setCompareMode(true);
    }
  };

  const resetComparison = () => {
    setSelectedServices([]);
    setCompareMode(false);
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

  if (compareMode && selectedServices.length >= 2) {
    const servicesToCompare = services.filter(service => selectedServices.includes(service.id));
    
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Comparison Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Service Comparison</h2>
            <Button
              onClick={resetComparison}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:border-gray-500"
            >
              Reset Comparison
            </Button>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-gray-400 font-medium">Features</th>
                  {servicesToCompare.map((service) => (
                    <th key={service.id} className="text-center p-4 text-white font-medium min-w-[250px]">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          {getCategoryIcon(service.category)}
                          <span className="text-sm text-gray-400">{service.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                        {getStatusBadge(service.status)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Pricing Row */}
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300 font-medium">Starting Price</td>
                  {servicesToCompare.map((service) => (
                    <td key={service.id} className="text-center p-4">
                      <div className="text-2xl font-bold text-blue-400">${service.pricing.starter}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </td>
                  ))}
                </tr>

                {/* Free Trial Row */}
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300 font-medium">Free Trial</td>
                  {servicesToCompare.map((service) => (
                    <td key={service.id} className="text-center p-4">
                      <div className="text-white font-medium">{service.trialDays} days</div>
                    </td>
                  ))}
                </tr>

                {/* Features Rows */}
                {Array.from(new Set(servicesToCompare.flatMap(s => s.features))).map((feature) => (
                  <tr key={feature} className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">{feature}</td>
                    {servicesToCompare.map((service) => (
                      <td key={service.id} className="text-center p-4">
                        {service.features.includes(feature) ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Technology Stack Row */}
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300 font-medium">Key Technologies</td>
                  {servicesToCompare.map((service) => (
                    <td key={service.id} className="text-center p-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {service.technology.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Market Size Row */}
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300 font-medium">Market Size</td>
                  {servicesToCompare.map((service) => (
                    <td key={service.id} className="text-center p-4">
                      <div className="text-white font-medium">{service.marketSize}</div>
                    </td>
                  ))}
                </tr>

                {/* API Access Row */}
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300 font-medium">API Access</td>
                  {servicesToCompare.map((service) => (
                    <td key={service.id} className="text-center p-4">
                      {service.api ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {servicesToCompare.map((service) => (
              <div key={service.id} className="flex gap-2">
                <Button
                  href={service.website}
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Visit {service.name}
                </Button>
                <Button
                  href={`/services/${service.id}`}
                  variant="outline"
                  size="sm"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Selection Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Compare Services</h2>
          <p className="text-gray-400 mb-6">
            Select up to 3 services to compare features, pricing, and capabilities
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-gray-400">
              Selected: {selectedServices.length}/3
            </span>
            {selectedServices.length >= 2 && (
              <Button
                onClick={startComparison}
                variant="primary"
                size="sm"
              >
                Compare Selected Services
              </Button>
            )}
          </div>
        </div>

        {/* Service Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedServices.includes(service.id)
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
              onClick={() => handleServiceToggle(service.id)}
            >
              {/* Selection Indicator */}
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedServices.includes(service.id)
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-600'
              }`}>
                {selectedServices.includes(service.id) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(service.category)}
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                {getStatusBadge(service.status)}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-xl font-bold mb-3 text-white">
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <span className="text-gray-400">Market Size:</span>
                  <div className="text-white font-medium">{service.marketSize}</div>
                </div>
                <div>
                  <span className="text-gray-400">Free Trial:</span>
                  <div className="text-white font-medium">{service.trialDays} days</div>
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;