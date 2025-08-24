import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SUBSCRIPTION_TIERS } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Award, 
  Users,
  Phone,
  Mail,
  ExternalLink,
  ArrowUpRight,
  DollarSign,
  Clock,
  Circle,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Zap className="h-5 w-5" />;
      case 'Cloud & DevOps':
        return <Globe className="h-5 w-5" />;
      case 'Cybersecurity':
        return <Shield className="h-5 w-5" />;
      case 'Data & Analytics':
        return <TrendingUp className="h-5 w-5" />;
      case 'Web & Mobile Development':
        return <ArrowUpRight className="h-5 w-5" />;
      case 'Blockchain & Web3':
        return <Award className="h-5 w-5" />;
      case 'IoT & Hardware':
        return <Users className="h-5 w-5" />;
      case 'Digital Transformation':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <ArrowUpRight className="h-5 w-5" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time':
        return 'One-time';
      case 'subscription':
        return 'Subscription';
      case 'usage-based':
        return 'Usage-based';
      case 'project-based':
        return 'Project-based';
      default:
        return model;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case 'one-time':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'subscription':
        return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'usage-based':
        return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      case 'project-based':
        return 'bg-orange-500/20 text-orange-400 border-orange-400/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Services Pricing & Market Comparison - Zion Tech Group" 
        description="Compare our competitive pricing with market rates. Get transparent pricing for AI services, IT solutions, and enterprise technology services with detailed cost breakdowns."
        keywords="pricing, cost comparison, AI services pricing, IT services cost, enterprise pricing, competitive rates"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing & Market Comparison
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get competitive pricing for enterprise-grade IT and AI services. Compare our rates with market standards 
            and discover why leading businesses choose Zion Tech Group for their technology needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <BarChart3 className="h-5 w-5 mr-2" />
              View Market Analysis
            </Button>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-zion-blue-dark border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Competitive Pricing</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Our rates are 20-40% below market average while maintaining enterprise quality
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Circle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Value-Focused</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Maximum ROI with transparent pricing and no hidden costs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Fast Delivery</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Quick turnaround times without compromising quality or security
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SUBSCRIPTION_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 ${
                index === 1 ? 'border-zion-purple scale-105' : ''
              }`}>
                <CardHeader className="text-center">
                  {index === 1 && (
                    <Badge className="bg-zion-purple text-white mb-2">Most Popular</Badge>
                  )}
                  <CardTitle className="text-white text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-cyan">
                    {tier.currency}{tier.price}
                    <span className="text-lg text-zion-slate-light">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing by Category */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Pricing by Category</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-zion-purple' : 'border-zion-purple text-zion-cyan hover:bg-zion-purple/10'}
            >
              All Categories
            </Button>
            {SERVICE_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name ? 'bg-zion-purple' : 'border-zion-purple text-zion-cyan hover:bg-zion-purple/10'}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        {getCategoryIcon(service.category)}
                        <span className="ml-2">{service.category}</span>
                      </Badge>
                      <Badge variant="outline" className={`${getPricingModelColor(service.pricingModel)}`}>
                        {getPricingModelLabel(service.pricingModel)}
                      </Badge>
                    </div>
                    {service.featured && (
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Pricing Comparison */}
                    <div className="bg-zion-blue rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Pricing Comparison</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-zion-slate-light text-sm">Our Price</div>
                          <div className="text-white font-bold text-lg">
                            {service.currency}{service.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-zion-slate-light text-sm">Market Price</div>
                          <div className="text-zion-cyan font-semibold text-lg">
                            {service.marketPrice}
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Competitive Rate
                        </Badge>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zion-blue-light">
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Delivery</div>
                        <div className="text-white text-sm">{service.deliveryTime}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Rating</div>
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Reviews</div>
                        <div className="text-white text-sm">{service.reviewCount}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">AI Score</div>
                        <div className="text-zion-cyan text-sm">{service.aiScore}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-3">
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                      <Phone className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="w-full p-3 bg-zion-blue rounded-lg">
                    <div className="text-center text-sm">
                      <div className="text-zion-cyan font-semibold mb-2">Contact Information</div>
                      <div className="space-y-1 text-zion-slate-light">
                        <div className="flex items-center justify-center">
                          <Phone className="h-3 w-3 mr-2" />
                          {service.contactInfo.phone}
                        </div>
                        <div className="flex items-center justify-center">
                          <Mail className="h-3 w-3 mr-2" />
                          {service.contactInfo.email}
                        </div>
                        <div className="flex items-center justify-center">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          <a 
                            href={service.contactInfo.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-zion-cyan hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion */}
      <section className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Enterprise Security</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Bank-level security and compliance for all services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-lg">AI-Powered</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Cutting-edge AI technology in every solution
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Global Reach</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Services available worldwide with local expertise
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Proven Track Record</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Successfully delivered 500+ projects worldwide
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-zion-purple to-zion-purple-dark border-0 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-3xl mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Contact us today for a free consultation and personalized quote. 
                Our experts will help you choose the perfect solution for your business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-zion-slate-light">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <ExternalLink className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Website</div>
                  <div className="text-zion-slate-light">ziontechgroup.com</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <ArrowUpRight className="h-5 w-5 mr-2" />
                Start Your Project Today
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}