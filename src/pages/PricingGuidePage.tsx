import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, ALL_SERVICES } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, Mail, Phone, Globe, Building, ArrowRight, DollarSign, Clock, Users, Shield, Zap } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function PricingGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic service implementation",
        "Standard support",
        "Documentation",
        "Basic training",
        "30-day warranty"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "$8,999",
      description: "Ideal for growing businesses",
      features: [
        "Advanced customization",
        "Priority support",
        "Comprehensive documentation",
        "Advanced training",
        "90-day warranty",
        "Integration support",
        "Performance optimization"
      ],
      popular: true,
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Enterprise",
      price: "$25,999",
      description: "For large organizations",
      features: [
        "Full customization",
        "Dedicated support team",
        "Custom documentation",
        "On-site training",
        "1-year warranty",
        "Full integration support",
        "Performance optimization",
        "SLA guarantees",
        "White-label options"
      ],
      popular: false,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'ai-services', name: 'AI & ML', icon: '🤖' },
    { id: 'cybersecurity-services', name: 'Cybersecurity', icon: '🔒' },
    { id: 'cloud-services', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'data-services', name: 'Data & Analytics', icon: '📊' },
    { id: 'web-development', name: 'Web & Mobile', icon: '💻' },
    { id: 'blockchain-services', name: 'Blockchain', icon: '⛓️' },
    { id: 'iot-services', name: 'IoT & Hardware', icon: '🔌' }
  ];

  const getServicesByCategory = (categoryId: string) => {
    if (categoryId === 'all') return ALL_SERVICES;
    const category = COMPREHENSIVE_SERVICES.find(cat => cat.id === categoryId);
    return category ? category.services : [];
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`;
    }
    return `$${price}`;
  };

  const getPriceRange = (services: any[]) => {
    const prices = services.filter(s => s.price).map(s => s.price);
    if (prices.length === 0) return 'Contact Us';
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    if (min === max) return formatPrice(min);
    return `${formatPrice(min)} - ${formatPrice(max)}`;
  };

  const filteredServices = getServicesByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Service Pricing Guide - Zion Tech Group" 
        description="Comprehensive pricing guide for all our IT and AI services. Compare pricing, features, and choose the perfect service tier for your business needs."
        keywords="service pricing, IT services pricing, AI services pricing, cybersecurity pricing, cloud services pricing, Zion Tech Group"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service Pricing Guide
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent pricing for all our IT and AI services. Choose the perfect service tier 
            for your business needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Service Tiers & Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the service tier that best fits your business needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-zion-purple ring-2 ring-zion-purple/20' : 'border-zion-blue-light'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-purple text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-zion-slate">{tier.name}</CardTitle>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                    {tier.price}
                  </div>
                  <CardDescription className="text-zion-slate-light">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${tier.popular ? 'bg-zion-purple hover:bg-zion-purple-dark' : 'bg-zion-blue hover:bg-zion-blue-dark'}`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse Services by Category
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive range of services across different technology domains.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {serviceCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col items-center gap-2 ${
                  selectedCategory === category.id 
                    ? 'bg-zion-purple hover:bg-zion-purple-dark' 
                    : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Services Table */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-zion-blue">
                <TableRow>
                  <TableHead className="text-zion-cyan font-medium">Service</TableHead>
                  <TableHead className="text-zion-cyan font-medium">Category</TableHead>
                  <TableHead className="text-zion-cyan font-medium">Price Range</TableHead>
                  <TableHead className="text-zion-cyan font-medium">Delivery Time</TableHead>
                  <TableHead className="text-zion-cyan font-medium">Rating</TableHead>
                  <TableHead className="text-zion-cyan font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-zion-blue-dark">
                {filteredServices.map((service) => (
                  <TableRow key={service.id} className="border-b border-zion-blue-light hover:bg-zion-blue/50">
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={service.images[0]} 
                          alt={service.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium text-white">{service.title}</div>
                          <div className="text-sm text-zion-slate-light line-clamp-2">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {service.subcategory || service.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-white">
                      {service.price ? formatPrice(service.price) : 'Contact Us'}
                    </TableCell>
                    <TableCell className="text-zion-slate-light">
                      {service.availability}
                    </TableCell>
                    <TableCell>
                      {service.rating ? (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount})</span>
                        </div>
                      ) : (
                        <span className="text-zion-slate-light">N/A</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                        Get Quote
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Service Pricing Comparison
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Compare pricing across different service categories to find the best value for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COMPREHENSIVE_SERVICES.map((category) => (
              <Card key={category.id} className="border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-zion-slate">{category.name}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate">Price Range:</span>
                      <span className="font-semibold text-zion-purple">
                        {getPriceRange(category.services)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate">Services Available:</span>
                      <span className="font-semibold text-zion-cyan">
                        {category.services.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate">Average Rating:</span>
                      <span className="font-semibold text-yellow-600">
                        {category.services.filter(s => s.rating).length > 0 
                          ? (category.services.reduce((acc, s) => acc + (s.rating || 0), 0) / category.services.filter(s => s.rating).length).toFixed(1)
                          : 'N/A'
                        }
                      </span>
                    </div>
                    <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                      View {category.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We provide exceptional value through quality, expertise, and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-purple/20 mb-4">
                <DollarSign className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-zion-slate-light">Market-leading prices without compromising on quality</p>
            </div>
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-cyan/20 mb-4">
                <Clock className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-zion-slate-light">Quick turnaround times to get you up and running faster</p>
            </div>
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with years of industry experience</p>
            </div>
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-4">
                <Shield className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-zion-slate-light">100% satisfaction guarantee with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact us today for a custom quote tailored to your specific business needs and requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}