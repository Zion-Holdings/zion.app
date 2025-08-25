import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  INNOVATIVE_MICRO_SAAS_SERVICES, 
  INNOVATIVE_SERVICE_CATEGORIES 
} from '../../data/innovativeMicroSaasServices';
import { 
  SPECIALIZED_IT_SERVICES, 
  SPECIALIZED_IT_CATEGORIES 
} from '../../data/specializedITServices';
import { 
  EMERGING_TECH_SERVICES, 
  EMERGING_TECH_CATEGORIES 
} from '../../data/emergingTechServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...SPECIALIZED_IT_SERVICES,
    ...EMERGING_TECH_SERVICES
  ];

  const allCategories = [
    ...INNOVATIVE_SERVICE_CATEGORIES,
    ...SPECIALIZED_IT_CATEGORIES,
    ...EMERGING_TECH_CATEGORIES
  ];

  const getCategoryServices = (categoryLabel: string) => {
    return allServices.filter(service => 
      service.category.toLowerCase().includes(categoryLabel.toLowerCase())
    );
  };

  const getServiceCount = (categoryLabel: string) => {
    return getCategoryServices(categoryLabel).length;
  };

  const getAverageRating = (categoryLabel: string) => {
    const services = getCategoryServices(categoryLabel);
    if (services.length === 0) return 0;
    const totalRating = services.reduce((sum, service) => sum + service.rating, 0);
    return (totalRating / services.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Zion Tech Group
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Comprehensive Technology Services Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our extensive range of innovative micro SAAS services, specialized IT solutions, and cutting-edge emerging technologies designed to transform your business.
          </p>
        </div>

        {/* Services Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-blue-900/30 border-blue-500/50">
            <CardContent className="text-center p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}</div>
              <div className="text-white">Total Services</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-900/30 border-purple-500/50">
            <CardContent className="text-center p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{allCategories.length}</div>
              <div className="text-white">Service Categories</div>
            </CardContent>
          </Card>
          <Card className="bg-green-900/30 border-green-500/50">
            <CardContent className="text-center p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {allServices.filter(s => s.status === 'Active').length}
              </div>
              <div className="text-white">Active Services</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-900/30 border-orange-500/50">
            <CardContent className="text-center p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {allServices.filter(s => s.status === 'Beta').length}
              </div>
              <div className="text-white">Beta Services</div>
            </CardContent>
          </Card>
        </div>

        {/* Service Categories Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Service Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category) => {
              const serviceCount = getServiceCount(category.label);
              const avgRating = getAverageRating(category.label);
              const services = getCategoryServices(category.label);
              const activeServices = services.filter(s => s.status === 'Active').length;
              
              return (
                <Card key={category.value} className="bg-gray-800/50 border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{category.label}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Services:</span>
                        <span className="text-white font-semibold">{serviceCount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Active:</span>
                        <span className="text-green-400 font-semibold">{activeServices}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Avg Rating:</span>
                        <span className="text-yellow-400 font-semibold">{avgRating} ⭐</span>
                      </div>
                      <div className="pt-2">
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => window.location.href = `/innovative-services?category=${category.value}`}
                        >
                          View Services
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Featured Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices
              .filter(service => service.rating >= 4.7)
              .slice(0, 6)
              .map((service) => (
                <Card key={service.id} className="bg-gray-800/50 border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={`${
                        service.status === 'Active' ? 'bg-green-100 text-green-800' :
                        service.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {service.status}
                      </Badge>
                      <Badge className={`${
                        service.pricingTier === 'Starter' ? 'bg-blue-100 text-blue-800' :
                        service.pricingTier === 'Professional' ? 'bg-purple-100 text-purple-800' :
                        service.pricingTier === 'Enterprise' ? 'bg-red-100 text-red-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {service.pricingTier}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {service.description.substring(0, 100)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < Math.floor(service.rating) ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                        <span className="text-white">{service.rating}</span>
                        <span className="text-gray-400">({service.reviewCount})</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Category: </span>
                        <span className="text-white">{service.category}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Delivery: </span>
                        <span className="text-white">{service.estimatedDelivery}</span>
                      </div>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.location.href = `/innovative-services`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Pricing Tiers Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Pricing Tiers
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { tier: 'Starter', color: 'blue', count: allServices.filter(s => s.pricingTier === 'Starter').length },
              { tier: 'Professional', color: 'purple', count: allServices.filter(s => s.pricingTier === 'Professional').length },
              { tier: 'Enterprise', color: 'red', count: allServices.filter(s => s.pricingTier === 'Enterprise').length },
              { tier: 'Custom', color: 'orange', count: allServices.filter(s => s.pricingTier === 'Custom').length }
            ].map(({ tier, color, count }) => (
              <Card key={tier} className={`bg-${color}-900/30 border-${color}-500/50`}>
                <CardContent className="text-center p-6">
                  <div className={`text-3xl font-bold text-${color}-400 mb-2`}>{count}</div>
                  <div className="text-white">{tier} Services</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technology Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">AI & Machine Learning</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-Powered Business Intelligence</li>
                <li>• Autonomous DevOps Platforms</li>
                <li>• AI Legal Tech Solutions</li>
                <li>• AI Healthcare Analytics</li>
                <li>• Autonomous Marketing Platforms</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Emerging Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum Computing Solutions</li>
                <li>• Neuromorphic Computing</li>
                <li>• DNA Data Storage</li>
                <li>• Brain-Computer Interfaces</li>
                <li>• Fusion Energy Simulation</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Specialized IT Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Cloud-Native Development</li>
                <li>• Data Center Modernization</li>
                <li>• Network Security & Compliance</li>
                <li>• IoT Platform Development</li>
                <li>• Advanced Robotics</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
              <h4 className="text-xl font-semibold text-orange-400 mb-4">Business Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Digital Transformation Consulting</li>
                <li>• Blockchain Supply Chain</li>
                <li>• Sustainable Energy Management</li>
                <li>• AI Financial Planning</li>
                <li>• Space Technology Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-8 text-center border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Explore Our Services?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Browse our complete portfolio of innovative technology solutions and discover how we can help transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = '/innovative-services'}
            >
              View All Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Services Inquiry', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/50 rounded-lg p-6 mt-8 border border-gray-600">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Contact Us</h3>
              <p className="text-white">Mobile: +1 302 464 0950</p>
              <p className="text-white">Email: kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Address</h3>
              <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesOverview;