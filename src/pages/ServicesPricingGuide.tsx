import React, { useState } from 'react';
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Star, Clock, Globe, Mail, Phone, MapPin, ExternalLink, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesPricingGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(service => 
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  const getPriceTier = (price: number) => {
    if (price < 10000) return 'Starter';
    if (price < 25000) return 'Professional';
    return 'Enterprise';
  };

  const getPriceTierColor = (tier: string) => {
    switch (tier) {
      case 'Starter': return 'bg-green-500';
      case 'Professional': return 'bg-blue-500';
      case 'Enterprise': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI Development': return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 'Cloud Services': return <Globe className="w-5 h-5 text-green-500" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5 text-red-500" />;
      case 'Data & Analytics': return <TrendingUp className="w-5 h-5 text-purple-500" />;
      case 'Digital Transformation': return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'IoT & Edge Computing': return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Blockchain & Web3': return <TrendingUp className="w-5 h-5 text-orange-500" />;
      case 'AR/VR & Metaverse': return <Globe className="w-5 h-5 text-pink-500" />;
      default: return <TrendingUp className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Services Pricing Guide - Zion Tech Group" 
        description="Comprehensive pricing guide for all our IT and AI services. Compare features, pricing, and benefits across our service portfolio."
        keywords="pricing guide, IT services pricing, AI development cost, cloud migration pricing, cybersecurity pricing"
        canonical="https://ziontechgroup.com/services-pricing-guide"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services Pricing Guide
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transparent pricing for all our professional IT and AI services. 
            Compare features, benefits, and costs to find the perfect solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-zion-purple text-white' : 'border-zion-purple/50 text-zion-purple hover:bg-zion-purple/10'}
            >
              All Services
            </Button>
            {EXPANDED_SERVICE_CATEGORIES.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? 'bg-zion-purple text-white' : 'border-zion-purple/50 text-zion-purple hover:bg-zion-purple/10'}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Tiers Overview
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our services are categorized into three main tiers based on complexity and scope
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Starter Tier</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Under $10,000
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zion-slate-light mb-4">
                  Perfect for small businesses and startups looking to implement basic solutions
                </p>
                <ul className="text-sm text-zion-slate-light space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic implementation
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Standard support
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Documentation included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Professional Tier</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  $10,000 - $25,000
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zion-slate-light mb-4">
                  Ideal for growing businesses requiring comprehensive solutions with advanced features
                </p>
                <ul className="text-sm text-zion-slate-light space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced features
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Priority support
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Training included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Enterprise Tier</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Over $25,000
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zion-slate-light mb-4">
                  Comprehensive solutions for large enterprises with complex requirements
                </p>
                <ul className="text-sm text-zion-slate-light space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Full customization
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Ongoing maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Services Table */}
          <Tabs defaultValue="table" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-zion-blue-dark border-zion-blue-light">
              <TabsTrigger value="table" className="text-white">Table View</TabsTrigger>
              <TabsTrigger value="cards" className="text-white">Card View</TabsTrigger>
            </TabsList>

            <TabsContent value="table" className="mt-6">
              <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-zion-blue-light">
                      <TableHead className="text-white">Service</TableHead>
                      <TableHead className="text-white">Category</TableHead>
                      <TableHead className="text-white">Price</TableHead>
                      <TableHead className="text-white">Tier</TableHead>
                      <TableHead className="text-white">Delivery</TableHead>
                      <TableHead className="text-white">Rating</TableHead>
                      <TableHead className="text-white">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredServices.map((service) => (
                      <TableRow key={service.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">
                        <TableCell className="text-white">
                          <div className="flex items-center gap-3">
                            {getServiceIcon(service.category)}
                            <div>
                              <div className="font-semibold">{service.title}</div>
                              <div className="text-sm text-zion-slate-light">{service.description.substring(0, 80)}...</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-white">
                          <Badge variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                            {service.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-white">
                          <div className="text-lg font-bold text-zion-cyan">
                            ${service.price?.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getPriceTierColor(getPriceTier(service.price || 0))} text-white`}>
                            {getPriceTier(service.price || 0)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-zion-slate-light">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {service.availability}
                          </div>
                        </TableCell>
                        <TableCell className="text-white">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {service.rating} ({service.reviewCount})
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                            <Mail className="w-4 h-4 mr-2" />
                            Quote
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="cards" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        {getServiceIcon(service.category)}
                        <Badge className={`${getPriceTierColor(getPriceTier(service.price || 0))} text-white`}>
                          {getPriceTier(service.price || 0)}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-zion-slate-light text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="text-3xl font-bold text-zion-cyan">
                        ${service.price?.toLocaleString()}
                      </div>
                      
                      <div className="space-y-2 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {service.availability}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span>Location: {service.location}</span>
                        </div>
                        {service.aiScore && (
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>AI Score: {service.aiScore}/100</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                        <Mail className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-zion-cyan text-lg max-w-2xl mx-auto mb-8">
            Our pricing is transparent and competitive. Contact us for custom quotes tailored to your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-zion-cyan-light">ziontechgroup.com</a></p>
            <p className="mt-2">364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}