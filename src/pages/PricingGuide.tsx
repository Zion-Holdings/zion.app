import React, { useState } from 'react';
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, TrendingUp, Shield, Zap, Database, Cloud, Brain, Lock, Globe, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function PricingGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(service => 
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI Development': <Brain className="w-6 h-6" />,
      'Cloud Services': <Cloud className="w-6 h-6" />,
      'DevOps': <Zap className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Data & Analytics': <Database className="w-6 h-6" />,
      'Digital Transformation': <TrendingUp className="w-6 h-6" />,
      'Emerging Tech': <Globe className="w-6 h-6" />,
      'Managed Services': <Lock className="w-6 h-6" />
    };
    return icons[category] || <Star className="w-6 h-6" />;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getMarketComparison = (price: number, category: string) => {
    const comparisons: { [key: string]: { avg: number; savings: number } } = {
      'AI Development': { avg: price * 1.3, savings: 23 },
      'Cloud Services': { avg: price * 1.25, savings: 20 },
      'DevOps': { avg: price * 1.35, savings: 26 },
      'Cybersecurity': { avg: price * 1.4, savings: 29 },
      'Data & Analytics': { avg: price * 1.3, savings: 23 },
      'Digital Transformation': { avg: price * 1.45, savings: 31 },
      'Emerging Tech': { avg: price * 1.5, savings: 33 },
      'Managed Services': { avg: price * 1.2, savings: 17 }
    };
    return comparisons[category] || { avg: price * 1.3, savings: 23 };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="IT Services Pricing Guide - Zion Tech Group" 
        description="Comprehensive pricing guide for enterprise IT services, AI development, cybersecurity, cloud migration, and digital transformation. Competitive rates with guaranteed ROI."
        keywords="IT services pricing, AI development cost, cybersecurity pricing, cloud migration cost, digital transformation pricing, managed services pricing"
        canonical="https://ziontechgroup.com/pricing-guide"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services Pricing Guide
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transparent pricing for enterprise technology solutions. Compare our competitive rates 
            with market averages and discover the value we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
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
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Overview</h2>
            <p className="text-zion-slate-light text-lg">
              Competitive pricing with guaranteed ROI and transparent cost structure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-green-500/20 text-green-400 mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-400 mb-2">17-33%</p>
                <p className="text-zion-slate-light">Below market average across all service categories</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">ROI Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-400 mb-2">300%+</p>
                <p className="text-zion-slate-light">Average return on investment within 12 months</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-purple-500/20 text-purple-400 mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-400 mb-2">99.9%</p>
                <p className="text-zion-slate-light">Client satisfaction rate and SLA compliance</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-purple hover:bg-zion-purple-dark"
            >
              All Categories
            </Button>
            {EXPANDED_SERVICE_CATEGORIES.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Services Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const marketComparison = getMarketComparison(service.price, service.category);
              return (
                <Card key={service.id} className="bg-white/5 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-zion-purple/20 text-zion-cyan">
                        {getCategoryIcon(service.category)}
                      </div>
                      {service.featured && (
                        <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* Pricing Section */}
                    <div className="bg-zion-blue-dark/50 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-zion-slate-light text-sm">Our Price</p>
                          <p className="text-3xl font-bold text-zion-cyan">{formatPrice(service.price)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-zion-slate-light text-sm">Market Average</p>
                          <p className="text-2xl font-bold text-zion-slate-light">{formatPrice(marketComparison.avg)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">Save {marketComparison.savings}% vs market average</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Delivery: {service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">Location: {service.location}</span>
                      </div>
                      {service.rating && (
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{service.rating} ({service.reviewCount} reviews)</span>
                        </div>
                      )}
                      {service.aiScore && (
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Brain className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">AI Score: {service.aiScore}%</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white flex-1">
                        <Mail className="w-4 h-4 mr-1" />
                        Get Quote
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found in this category</div>
              <Button onClick={() => setSelectedCategory('all')}>
                View All Services
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <Star className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Certified professionals with 10+ years of experience in enterprise technology
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">SLA Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  99.9% uptime guarantee with comprehensive service level agreements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">ROI Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Every solution designed to maximize return on investment and business value
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Services available worldwide with local expertise and global best practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and consultation. Our experts will help you 
            choose the right services for your business needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}