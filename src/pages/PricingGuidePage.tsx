import React, { useState } from 'react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Check, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Clock,
  DollarSign,
  Users,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function PricingGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(service => service.category === selectedCategory);

  const getCategoryStats = (category: string) => {
    const services = EXPANDED_SERVICES.filter(s => s.category === category);
    const avgPrice = services.reduce((sum, s) => sum + (s.price || 0), 0) / services.length;
    const avgRating = services.reduce((sum, s) => sum + (s.rating || 0), 0) / services.length;
    return { count: services.length, avgPrice, avgRating };
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const getServiceTier = (price: number) => {
    if (price < 2000) return { tier: "Starter", color: "bg-green-100 text-green-800" };
    if (price < 5000) return { tier: "Professional", color: "bg-blue-100 text-blue-800" };
    if (price < 10000) return { tier: "Enterprise", color: "bg-purple-100 text-purple-800" };
    return { tier: "Premium", color: "bg-orange-100 text-orange-800" };
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Service Pricing Guide - Zion Tech Group" 
        description="Complete pricing guide for all our IT and AI services. Compare prices, features, and choose the perfect solution for your business needs."
        keywords="service pricing, IT services cost, AI development pricing, cybersecurity pricing, cloud migration cost"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Service Pricing Guide
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transparent pricing for all our micro SAAS services and IT solutions. No hidden fees, no surprises.
          </p>
          
          {/* Pricing Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">{EXPANDED_SERVICES.length}+</div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">
                ${Math.round(EXPANDED_SERVICES.reduce((sum, s) => sum + (s.price || 0), 0) / EXPANDED_SERVICES.length).toLocaleString()}
              </div>
              <div className="text-zion-slate-light">Average Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">
                {Math.round(EXPANDED_SERVICES.reduce((sum, s) => sum + (s.rating || 0), 0) / EXPANDED_SERVICES.length * 10) / 10}
              </div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">Global</div>
              <div className="text-zion-slate-light">Service Coverage</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Need Custom Pricing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-zion-cyan text-white' : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'}
            >
              All Services ({EXPANDED_SERVICES.length})
            </Button>
            {SERVICE_CATEGORIES.map(category => {
              const stats = getCategoryStats(category.name);
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
                  className={selectedCategory === category.name ? 'bg-zion-cyan text-white' : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'}
                >
                  {category.name} ({stats.count})
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {selectedCategory === 'all' ? 'All Services' : `${selectedCategory} Services`} ({filteredServices.length})
          </h2>
          <p className="text-gray-600">
            {selectedCategory === 'all' 
              ? 'Complete overview of all available services with transparent pricing'
              : `Specialized ${selectedCategory.toLowerCase()} solutions for your business needs`
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const tier = getServiceTier(service.price || 0);
            return (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={tier.color}>
                      {tier.tier}
                    </Badge>
                  </div>
                  {service.featured && (
                    <Badge className="absolute top-2 right-2 bg-zion-purple text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">{service.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{service.rating}</span>
                          <span className="text-sm text-gray-500">({service.reviewCount})</span>
                        </div>
                        {service.aiScore && (
                          <Badge variant="outline" className="text-xs">
                            AI: {service.aiScore}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-purple">
                        {formatPrice(service.price || 0)}
                      </div>
                      <div className="text-sm text-gray-500">Starting Price</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {service.description}
                  </CardDescription>

                  {/* Service Details */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {service.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>Location: {service.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Category: {service.category}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Pricing Tiers Explanation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding Our Pricing Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing reflects the complexity, scope, and value of each service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-2">$0 - $2K</p>
              <p className="text-gray-600 text-sm">Basic implementations and simple integrations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-2">$2K - $5K</p>
              <p className="text-gray-600 text-sm">Standard business solutions with customization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-2">$5K - $10K</p>
              <p className="text-gray-600 text-sm">Complex solutions with advanced features</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-2">$10K+</p>
              <p className="text-gray-600 text-sm">Full-scale transformations and custom development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Our Pricing is Competitive
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Hidden Fees</h3>
              <p className="text-zion-slate-light">Transparent pricing with all costs clearly outlined upfront</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Delivery</h3>
              <p className="text-zion-slate-light">Faster turnaround times mean lower overall project costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Expertise</h3>
              <p className="text-zion-slate-light">Access to world-class talent without premium location costs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact us for a custom quote tailored to your specific requirements
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>

          <div className="mt-8 text-zion-slate-light">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}