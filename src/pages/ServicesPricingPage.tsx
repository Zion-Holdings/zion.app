import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Phone, 
  Mail, 
  ExternalLink,
  Brain,
  Shield,
  Globe,
  Database,
  Network,
  HardDrive,
  Zap,
  Leaf,
  Eye,
  CreditCard,
  TrendingUp,
  DollarSign,
  Clock,
  Users
} from "lucide-react";
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from "@/data/expandedServices";
import { TrustedBySection } from "@/components/TrustedBySection";

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "AI & Machine Learning": <Brain className="w-6 h-6" />,
      "Cybersecurity": <Shield className="w-6 h-6" />,
      "Cloud & DevOps": <Globe className="w-6 h-6" />,
      "Data & Analytics": <Database className="w-6 h-6" />,
      "Blockchain & Web3": <Network className="w-6 h-6" />,
      "IoT & Edge Computing": <HardDrive className="w-6 h-6" />,
      "Quantum Computing": <Zap className="w-6 h-6" />,
      "Green Tech & Sustainability": <Leaf className="w-6 h-6" />,
      "AR/VR & Metaverse": <Eye className="w-6 h-6" />,
      "FinTech & Digital Banking": <CreditCard className="w-6 h-6" />
    };
    return icons[category] || <Zap className="w-6 h-6" />;
  };

  const getPricingModelColor = (model: string) => {
    const colors: { [key: string]: string } = {
      "one-time": "bg-blue-100 text-blue-800",
      "subscription": "bg-green-100 text-green-800",
      "usage-based": "bg-purple-100 text-purple-800",
      "project-based": "bg-orange-100 text-orange-800"
    };
    return colors[model] || "bg-gray-100 text-gray-800";
  };

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(service => service.category === selectedCategory);

  const getMarketPriceRange = (marketPrice: string) => {
    const match = marketPrice.match(/\$([\d,]+)\s*-\s*\$([\d,]+)/);
    if (match) {
      const min = parseInt(match[1].replace(/,/g, ''));
      const max = parseInt(match[2].replace(/,/g, ''));
      return { min, max, avg: Math.round((min + max) / 2) };
    }
    return null;
  };

  const calculateSavings = (ourPrice: number, marketPrice: string) => {
    const range = getMarketPriceRange(marketPrice);
    if (range) {
      const savings = Math.round(((range.avg - ourPrice) / range.avg) * 100);
      return savings > 0 ? savings : 0;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing & Comparison
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transparent pricing for all our advanced technology services. Compare our competitive rates with market prices and see how much you can save.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-blue hover:bg-zion-blue-dark"
            >
              All Categories ({EXPANDED_SERVICES.length})
            </Button>
            {SERVICE_CATEGORIES.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
              >
                {getCategoryIcon(category)}
                <span className="ml-2">
                  {category} ({EXPANDED_SERVICES.filter(s => s.category === category).length})
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our competitive pricing structure designed to provide maximum value while maintaining the highest quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our rates are typically 20-40% below market prices while maintaining enterprise-grade quality and support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Flexible Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from project-based, subscription, usage-based, or one-time pricing models to fit your budget and needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Premium Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All services include professional support, ongoing maintenance, and continuous improvement at no extra cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Pricing Table */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Services' : selectedCategory} - Pricing & Features
            </h2>
            <p className="text-xl text-gray-600">
              Detailed comparison of our services with market prices and comprehensive feature lists
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-zion-blue text-white">
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white">Category</TableHead>
                  <TableHead className="text-white">Our Price</TableHead>
                  <TableHead className="text-white">Market Price</TableHead>
                  <TableHead className="text-white">Savings</TableHead>
                  <TableHead className="text-white">Pricing Model</TableHead>
                  <TableHead className="text-white">Delivery Time</TableHead>
                  <TableHead className="text-white">Support Level</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => {
                  const savings = calculateSavings(service.price, service.marketPrice);
                  return (
                    <TableRow key={service.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-zion-blue/10 rounded-lg">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-500">{service.description.substring(0, 80)}...</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{service.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-lg font-bold text-zion-blue">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.currency} {service.pricingModel === 'subscription' ? '/month' : ''}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">{service.marketPrice}</div>
                      </TableCell>
                      <TableCell>
                        {savings > 0 ? (
                          <Badge className="bg-green-100 text-green-800">
                            Save {savings}%
                          </Badge>
                        ) : (
                          <Badge variant="outline">Market Rate</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={getPricingModelColor(service.pricingModel)}>
                          {service.pricingModel}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{service.deliveryTime}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm capitalize">{service.supportLevel}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-zion-blue hover:bg-zion-blue-dark">
                            <Phone className="w-4 h-4 mr-1" />
                            Quote
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Detailed Service Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Details & Features
            </h2>
            <p className="text-xl text-gray-600">
              Explore comprehensive details, features, and benefits for each service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-zion-blue/10 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <Badge variant="secondary" className={getPricingModelColor(service.pricingModel)}>
                        {service.pricingModel}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-blue">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.currency} {service.pricingModel === 'subscription' ? '/month' : ''}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Market Price Comparison */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Market Price:</span>
                      <span className="font-semibold text-zion-blue">{service.marketPrice}</span>
                    </div>
                    {calculateSavings(service.price, service.marketPrice) > 0 && (
                      <div className="text-xs text-green-600 mt-1">
                        You save {calculateSavings(service.price, service.marketPrice)}% with us!
                      </div>
                    )}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 capitalize">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* Contact and Actions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{service.contactInfo.email}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                        <Phone className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="px-3">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions. 
            Get in touch today for a personalized consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="text-zion-slate-light">
            <p className="text-lg">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-lg">Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>

      <TrustedBySection />
    </div>
  );
}