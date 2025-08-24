import React, { useState, useMemo } from 'react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Phone, 
  Mail, 
  Globe, 
  TrendingUp,
  Shield,
  Zap,
  Database,
  Code,
  Smartphone,
  Settings,
  BarChart3,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPricingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');

  const filteredServices = useMemo(() => {
    return EXPANDED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricingModel]);

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || '🔧';
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price.toLocaleString()}/month`;
    } else if (model === 'hourly') {
      return `$${price.toLocaleString()}/hour`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'monthly': return 'Monthly Subscription';
      case 'hourly': return 'Hourly Rate';
      case 'project-based': return 'Project-Based';
      case 'one-time': return 'One-Time Payment';
      default: return model;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing & Service Costs
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get clear, upfront pricing for all our professional IT and AI services. 
            Compare costs, features, and benefits to find the perfect solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                Get Started Today
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-purple py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Overview */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-zion-blue-dark text-center mb-12">Service Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <Card key={tier.name} className={`text-center ${tier.name === 'Professional' ? 'border-zion-purple shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue-dark">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-purple">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark">
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services, features, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
              <SelectTrigger>
                <SelectValue placeholder="All Pricing Models" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing Models</SelectItem>
                <SelectItem value="project-based">Project-Based</SelectItem>
                <SelectItem value="monthly">Monthly Subscription</SelectItem>
                <SelectItem value="hourly">Hourly Rate</SelectItem>
                <SelectItem value="one-time">One-Time Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Pricing Table */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Service Pricing ({filteredServices.length} services)
            </h2>
            <div className="text-zion-slate-light">
              All prices include consultation, implementation, and support
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zion-blue-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-center">Category</th>
                    <th className="px-6 py-4 text-center">Our Price</th>
                    <th className="px-6 py-4 text-center">Market Price</th>
                    <th className="px-6 py-4 text-center">Delivery Time</th>
                    <th className="px-6 py-4 text-center">Rating</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <tr key={service.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-zion-purple/5 transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-zion-purple rounded-lg flex items-center justify-center text-white text-lg">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <div className="font-semibold text-zion-blue-dark">{service.title}</div>
                            <div className="text-sm text-gray-600 max-w-xs">{service.description}</div>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {getPricingModelLabel(service.pricingModel)}
                              </Badge>
                              <Badge className="bg-zion-cyan/20 text-zion-cyan text-xs">
                                AI Score: {service.aiScore}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                          <div className="text-sm">
                            <div className="font-medium">{service.category}</div>
                            <div className="text-gray-500">{service.subcategory}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-zion-purple">
                          {formatPrice(service.price, service.pricingModel)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.pricingModel === 'project-based' ? 'One-time cost' : 'Recurring'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-lg font-medium text-gray-700">{service.marketPrice}</div>
                        <div className="text-sm text-green-600 font-medium">
                          Save up to 40%
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{service.deliveryTime}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 text-amber-500 fill-current" />
                          <span className="font-medium">{service.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">({service.reviewCount} reviews)</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col gap-2">
                          <Link to="/request-quote">
                            <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                              Get Quote
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button size="sm" variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                              Contact
                            </Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Pricing Summary */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-zion-blue-dark text-center mb-12">Pricing by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => {
              const categoryServices = EXPANDED_SERVICES.filter(s => s.category === category.name);
              const avgPrice = categoryServices.reduce((sum, s) => sum + s.price, 0) / categoryServices.length;
              const minPrice = Math.min(...categoryServices.map(s => s.price));
              const maxPrice = Math.max(...categoryServices.map(s => s.price));
              
              return (
                <Card key={category.name} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-lg text-zion-blue-dark">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-zion-purple">
                        ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">
                        Average: ${avgPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {category.count} services available
                      </div>
                      <Link to="/expanded-services">
                        <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                          View Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Our Pricing is Competitive */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Our Pricing is Competitive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Competitive</h3>
              <p className="text-zion-slate-light">
                Our prices are 20-40% below market rates while maintaining enterprise quality
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
              <p className="text-zion-slate-light">
                Transparent pricing with no surprise fees or additional charges
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">
                Professional services with proven results and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-zion-purple">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote. 
            Our team is ready to help you find the perfect solution at the right price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
                Contact Us Now
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information Footer */}
      <div className="py-8 px-4 bg-zion-blue-dark">
        <div className="container mx-auto text-center">
          <div className="text-zion-slate-light">
            <p className="mb-4">Need immediate assistance? Contact our team directly:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-zion-cyan" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}