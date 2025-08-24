import React, { useState } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Shield, 
  Clock,
  Phone,
  Mail,
  ExternalLink,
  BarChart3,
  ArrowUpRight,
  Users,
  Globe
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.services.includes(service)
      );

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'one-time': return <ArrowUpRight className="w-4 h-4" />;
      case 'monthly': return <Clock className="w-4 h-4" />;
      case 'hourly': return <Zap className="w-4 h-4" />;
      case 'project-based': return <BarChart3 className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateROI = (service: any) => {
    // Simple ROI calculation based on benefits mentioned
    const benefits = service.benefits;
    let roi = 0;
    
    benefits.forEach((benefit: string) => {
      if (benefit.includes('%')) {
        const percentage = parseInt(benefit.match(/\d+/)?.[0] || '0');
        roi += percentage;
      } else if (benefit.includes('reduce') || benefit.includes('decrease')) {
        roi += 15; // Conservative estimate for cost reduction
      } else if (benefit.includes('improve') || benefit.includes('increase')) {
        roi += 20; // Conservative estimate for improvement
      }
    });
    
    return Math.min(roi, 200); // Cap at 200% for realistic display
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Pricing & ROI - Zion Tech Group" 
        description="Compare our IT and AI service pricing with market rates. See detailed ROI analysis and value propositions for each solution."
        keywords="IT services pricing, AI services cost, cybersecurity pricing, cloud services pricing, ROI analysis, value proposition"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing & ROI Analysis
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent pricing for all our IT and AI services. Compare our competitive rates with market prices and see the real value we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <BarChart3 className="w-5 h-5 mr-2" />
              Calculate ROI
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-blue hover:bg-zion-blue-dark"
            >
              All Services ({ENHANCED_SERVICES.length})
            </Button>
            {SERVICE_CATEGORIES.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-zion-blue hover:bg-zion-blue-dark' : ''}
              >
                {category.icon} {category.name} ({category.services.length})
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="container mx-auto px-4 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-zion-blue text-white">
                <th className="p-4 text-left border-b">Service</th>
                <th className="p-4 text-center border-b">Our Price</th>
                <th className="p-4 text-center border-b">Market Price</th>
                <th className="p-4 text-center border-b">Savings</th>
                <th className="p-4 text-center border-b">ROI Estimate</th>
                <th className="p-4 text-center border-b">Support Level</th>
                <th className="p-4 text-center border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, index) => {
                const marketPriceRange = service.marketPrice;
                const marketPriceMin = parseInt(marketPriceRange.match(/\$([\d,]+)/)?.[1]?.replace(/,/g, '') || '0');
                const marketPriceMax = parseInt(marketPriceRange.match(/\$([\d,]+)/g)?.[1]?.replace(/[$,]/g, '') || '0');
                const marketPriceAvg = (marketPriceMin + marketPriceMax) / 2;
                const savings = marketPriceAvg > service.price ? Math.round(((marketPriceAvg - service.price) / marketPriceAvg) * 100) : 0;
                const roi = calculateROI(service);

                return (
                  <tr key={service.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 border-b">
                      <div>
                        <div className="font-semibold text-lg">{service.title}</div>
                        <div className="text-sm text-gray-600 mb-2">{service.description}</div>
                        <div className="flex items-center gap-2 mb-2">
                          {getPricingModelIcon(service.pricingModel)}
                          <Badge variant="outline" className="text-xs">
                            {getPricingModelLabel(service.pricingModel)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm">{service.rating} ({service.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="text-2xl font-bold text-green-600">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.pricingModel === 'monthly' ? '/month' : 
                         service.pricingModel === 'hourly' ? '/hour' : 
                         service.pricingModel === 'project-based' ? '/project' : ''}
                      </div>
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="text-lg font-medium text-gray-700">
                        {service.marketPrice}
                      </div>
                      <div className="text-sm text-gray-500">
                        Market Average
                      </div>
                    </td>
                    <td className="p-4 text-center border-b">
                      {savings > 0 ? (
                        <div className="text-green-600 font-bold">
                          {savings}% OFF
                        </div>
                      ) : (
                        <div className="text-gray-500">
                          Market Rate
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="font-bold text-blue-600">{roi}%</span>
                      </div>
                      <div className="text-xs text-gray-500">Estimated ROI</div>
                    </td>
                    <td className="p-4 text-center border-b">
                      <Badge className={getSupportLevelColor(service.supportLevel)}>
                        {service.supportLevel}
                      </Badge>
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found in this category</div>
            <Button onClick={() => setSelectedCategory('all')}>
              View All Services
            </Button>
          </div>
        )}
      </div>

      {/* Value Proposition Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our services are priced 15-40% below market rates while maintaining the highest quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Proven ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our solutions deliver measurable results with average ROI of 150-300% within the first year.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Enterprise Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enterprise-grade solutions with premium support, available to businesses of all sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact our team for a personalized consultation and custom pricing tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <BarChart3 className="w-5 h-5 mr-2" />
              Calculate Custom ROI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}