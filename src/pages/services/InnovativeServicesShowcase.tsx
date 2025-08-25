import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  INNOVATIVE_MICRO_SAAS_SERVICES, 
  INNOVATIVE_SERVICE_CATEGORIES,
  CONTACT_INFO as INNOVATIVE_CONTACT 
} from '../../data/innovativeMicroSaasServices';
import { 
  SPECIALIZED_IT_SERVICES, 
  SPECIALIZED_IT_CATEGORIES,
  CONTACT_INFO as IT_CONTACT 
} from '../../data/specializedITServices';
import { 
  EMERGING_TECH_SERVICES, 
  EMERGING_TECH_CATEGORIES,
  CONTACT_INFO as EMERGING_CONTACT 
} from '../../data/emergingTechServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    oneTime?: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: string;
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: string;
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
}

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Combine all services
  const allServices: Service[] = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...SPECIALIZED_IT_SERVICES,
    ...EMERGING_TECH_SERVICES
  ];

  // Combine all categories
  const allCategories = [
    ...INNOVATIVE_SERVICE_CATEGORIES,
    ...SPECIALIZED_IT_CATEGORIES,
    ...EMERGING_TECH_CATEGORIES
  ];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesPricing = selectedPricingTier === 'all' || service.pricingTier === selectedPricingTier;
    const matchesStatus = selectedStatus === 'all' || service.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesPricing && matchesStatus;
  });

  const formatPrice = (price: any) => {
    if (price.oneTime && price.oneTime > 0) {
      return `${price.currency}${price.oneTime.toLocaleString()}`;
    } else if (price.monthly > 0) {
      return `${price.currency}${price.monthly.toLocaleString()}/month`;
    } else if (price.yearly > 0) {
      return `${price.currency}${price.yearly.toLocaleString()}/year`;
    }
    return 'Contact for pricing';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-blue-100 text-blue-800';
      case 'Coming Soon':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPricingTierColor = (tier: string) => {
    switch (tier) {
      case 'Starter':
        return 'bg-blue-100 text-blue-800';
      case 'Professional':
        return 'bg-purple-100 text-purple-800';
      case 'Enterprise':
        return 'bg-red-100 text-red-800';
      case 'Custom':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
            Innovative Micro SAAS Services & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge technology solutions, from AI-powered platforms to quantum computing and emerging technologies.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6 mb-8 border border-blue-500/30">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Contact Us</h3>
              <p className="text-white">Mobile: {INNOVATIVE_CONTACT.mobile}</p>
              <p className="text-white">Email: {INNOVATIVE_CONTACT.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Address</h3>
              <p className="text-white">{INNOVATIVE_CONTACT.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Website</h3>
              <a 
                href={INNOVATIVE_CONTACT.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {INNOVATIVE_CONTACT.website}
              </a>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-gray-600">
          <div className="grid md:grid-cols-4 gap-4">
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
                          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue>All Categories</SelectValue>
                </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                <SelectItem value="all">All Categories</SelectItem>
                {allCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
                          <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue>All Pricing Tiers</SelectValue>
                </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                <SelectItem value="all">All Pricing Tiers</SelectItem>
                <SelectItem value="Starter">Starter</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
                          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue>All Statuses</SelectValue>
                </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Beta">Beta</SelectItem>
                <SelectItem value="Coming Soon">Coming Soon</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-gray-800/50 border-gray-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getStatusColor(service.status)}>
                    {service.status}
                  </Badge>
                  <Badge className={getPricingTierColor(service.pricingTier)}>
                    {service.pricingTier}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Category and Subcategory */}
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="border-blue-500 text-blue-400">
                    {service.category}
                  </Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-400">
                    {service.subcategory}
                  </Badge>
                </div>

                {/* Pricing */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h4 className="font-semibold text-cyan-400 mb-2">Pricing</h4>
                  <p className="text-white text-lg font-bold">{formatPrice(service.price)}</p>
                  <p className="text-gray-400 text-sm">Market: {service.marketPrice}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(service.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="text-white">{service.rating}</span>
                  <span className="text-gray-400">({service.reviewCount} reviews)</span>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery and Support */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Delivery:</span>
                    <p className="text-white">{service.estimatedDelivery}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Support:</span>
                    <p className="text-white capitalize">{service.supportLevel}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(service.website, '_blank')}
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                    onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                  >
                    Contact
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="text-xs text-gray-400 border-t border-gray-600 pt-3">
                  <p>📧 {service.contactInfo.email}</p>
                  <p>📱 {service.contactInfo.phone}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Services Count */}
        <div className="text-center mt-8 text-gray-400">
          <p>Showing {filteredServices.length} of {allServices.length} services</p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-8 mt-12 text-center border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our innovative solutions are designed to give you a competitive edge in today's rapidly evolving technology landscape. 
            Contact us to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open(`mailto:${INNOVATIVE_CONTACT.email}?subject=Business Inquiry`, '_blank')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
              onClick={() => window.open(`tel:${INNOVATIVE_CONTACT.mobile}`, '_blank')}
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase;