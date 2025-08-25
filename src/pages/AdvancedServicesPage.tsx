import React, { useState, useMemo } from 'react';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/advancedServices';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { 
  Search, 
  Phone,
  Mail,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface Filters {
  search: string;
  category: string;
  pricingModel: string;
  location: string;
}

export default function AdvancedServicesPage() {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    category: 'all',
    pricingModel: 'all',
    location: 'all'
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredServices = useMemo(() => {
    return ADVANCED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesCategory = filters.category === 'all' || service.category === filters.category;
      const matchesPricingModel = filters.pricingModel === 'all' || service.pricingModel === filters.pricingModel;
      const matchesLocation = filters.location === 'all' || service.location === filters.location;
      
      return matchesSearch && matchesCategory && matchesPricingModel && matchesLocation;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Advanced Services & Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our cutting-edge services designed to transform your business with 
            AI-powered solutions, advanced analytics, and innovative technology.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>

            {/* Category Filter */}
            <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.name}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Pricing Model Filter */}
            <Select value={filters.pricingModel} onValueChange={(value) => handleFilterChange('pricingModel', value)}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Pricing Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Models</SelectItem>
                <SelectItem value="subscription">Monthly/Annual</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
                <SelectItem value="usage-based">Pay-per-use</SelectItem>
                <SelectItem value="project-based">Project-Based</SelectItem>
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Global">Global</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    {service.category}
                  </Badge>
                </div>
                <CardDescription className="text-slate-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-slate-400">
                      {service.pricingModel}
                    </span>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Started
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <ExternalLink className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}