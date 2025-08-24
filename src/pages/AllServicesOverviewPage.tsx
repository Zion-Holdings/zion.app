import React, { useState } from 'react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Clock, 
  Shield, 
  Zap, 
  TrendingUp,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BarChart3,
  Search,
  Filter
} from 'lucide-react';
import Calculator from 'lucide-react/dist/esm/icons/calculator';
import Target from 'lucide-react/dist/esm/icons/target';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function AllServicesOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const cat = SERVICE_CATEGORIES.find(c => c.name === category);
    return cat?.icon || '🔧';
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'hourly': return 'Hourly';
      case 'project': return 'Project-based';
      case 'subscription': return 'Subscription';
      case 'one-time': return 'One-time';
      default: return model;
    }
  };

  const getSupportLevelLabel = (level: string) => {
    switch (level) {
      case 'basic': return 'Basic';
      case 'premium': return 'Premium';
      case 'enterprise': return 'Enterprise';
      default: return level;
    }
  };

  const calculateSavings = (service: any) => {
    const marketAvg = service.marketPrice.average;
    const ourPrice = service.price;
    const savings = ((marketAvg - ourPrice) / marketAvg) * 100;
    return savings.toFixed(0);
  };

  return (
    <>
      <SEO 
        title="All Services Overview - ZionTech Group" 
        description="Comprehensive overview of all our IT and AI services. Browse by category, compare pricing, and find the perfect solution for your business needs."
        keywords="all services, IT services overview, AI services, service categories, pricing overview, ZionTech Group"
        canonical="https://ziontechgroup.com/all-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 mr-3 text-zion-cyan" />
            <h1 className="text-5xl font-bold">All Services Overview</h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our comprehensive ecosystem of innovative IT and AI services. 
            Browse by category, compare pricing, and find the perfect solution to transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/service-calculator">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Costs
              </Button>
            </Link>
            <Link to="/service-comparison">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <BarChart3 className="w-5 h-5 mr-2" />
                Compare Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Navigation */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="bg-zion-purple hover:bg-zion-purple-dark"
              >
                All Services
              </Button>
              {SERVICE_CATEGORIES.map(category => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
                  className={selectedCategory === category.name ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {filteredServices.length} Services Available
          </h2>
          <p className="text-gray-600">
            {selectedCategory === 'all' 
              ? 'Browse our complete portfolio of IT and AI services'
              : `Services in ${selectedCategory} category`
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-zion-purple text-white">
                    {getCategoryIcon(service.category)} {service.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {service.rating}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl leading-tight group-hover:text-zion-purple transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-zion-purple">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {getPricingModelLabel(service.pricingModel)}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    Market average: {service.currency}{service.marketPrice.average.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save {calculateSavings(service)}% vs market average
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-zion-cyan" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-zion-cyan" />
                    {service.deliveryTime}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="w-4 h-4 mr-2 text-zion-cyan" />
                    {getSupportLevelLabel(service.supportLevel)}
                  </div>
                </div>

                {/* Benefits Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link to={`/expanded-services?service=${service.id}`}>
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark group-hover:bg-zion-purple-dark transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors text-xs"
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Email
                    </a>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors text-xs"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all services
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Quick Actions Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Actions & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Get accurate cost estimates and ROI projections for any service
                </p>
                <Link to="/service-calculator">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Calculate Costs
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Comparison</h3>
                <p className="text-gray-600 mb-4">
                  Compare multiple services side by side to make informed decisions
                </p>
                <Link to="/service-comparison">
                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
                    Compare Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Quote</h3>
                <p className="text-gray-600 mb-4">
                  Request a personalized quote for your specific requirements
                </p>
                <Link to="/request-quote">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation and quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </>
  );
}