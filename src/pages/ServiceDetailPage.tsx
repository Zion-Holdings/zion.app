import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ADVANCED_SERVICES, AdvancedService } from '@/data/advancedServices';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Globe, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  ExternalLink,
  TrendingUp,
  Shield,
  Zap,
  Lightbulb,
  Calendar,
  DollarSign,
  Award,
  MapPin,
  Building
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<AdvancedService | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (serviceId) {
      const foundService = ADVANCED_SERVICES.find(s => s.id === serviceId);
      setService(foundService || null);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-zion-slate-light mb-6">The service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/advanced-services')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'subscription': return 'Monthly/Annual Subscription';
      case 'one-time': return 'One-time Payment';
      case 'usage-based': return 'Pay-per-use';
      case 'project-based': return 'Project-based Pricing';
      default: return model;
    }
  };

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'subscription': return <Calendar className="w-5 h-5" />;
      case 'one-time': return <DollarSign className="w-5 h-5" />;
      case 'usage-based': return <TrendingUp className="w-5 h-5" />;
      case 'project-based': return <Award className="w-5 h-5" />;
      default: return <DollarSign className="w-5 h-5" />;
    }
  };

  return (
    <>
      <SEO 
        title={`${service.title} - Zion Tech Group`}
        description={service.description}
        keywords={service.tags.join(', ')}
        canonical={`https://ziontechgroup.com/services/${service.id}`}
      />

      {/* Breadcrumb */}
      <section className="bg-zion-blue-dark py-4 border-b border-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Link to="/advanced-services" className="hover:text-zion-cyan transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link to={`/advanced-services?category=${service.category}`} className="hover:text-zion-cyan transition-colors">
              {service.category}
            </Link>
            <span>/</span>
            <span className="text-zion-cyan">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                  {service.category}
                </Badge>
                <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                  {service.subcategory}
                </Badge>
              </div>
              
                      <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-6">
          {service.title}
        </h1>
              
              <p className="text-zion-slate-light text-lg mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{service.rating}</span>
                  <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zion-cyan font-semibold">{service.aiScore} AI Score</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={service.images[0]} 
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              {service.featured && (
                <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                  Featured Service
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  {getPricingModelIcon(service.pricingModel)}
                </div>
                <h3 className="text-white font-semibold mb-2">Pricing Model</h3>
                <p className="text-zion-slate-light text-sm">{getPricingModelLabel(service.pricingModel)}</p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Starting Price</h3>
                <p className="text-zion-cyan font-bold text-xl">{service.currency}{service.price.toLocaleString()}</p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Availability</h3>
                <p className="text-zion-slate-light text-sm">{service.availability}</p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-zion-slate-light text-sm">{service.location}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-zion-blue-dark border-zion-blue-light">
              <TabsTrigger value="overview" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Overview
              </TabsTrigger>
              <TabsTrigger value="features" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Features
              </TabsTrigger>
              <TabsTrigger value="benefits" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Benefits
              </TabsTrigger>
              <TabsTrigger value="use-cases" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Use Cases
              </TabsTrigger>
              <TabsTrigger value="pricing" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Pricing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Service Overview</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                                             <Award className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white">Target Audience: {service.targetAudience.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                                             <Building className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white">Provider: {service.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white">Service Area: {service.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Key Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">AI-Powered Solutions</h4>
                        <p className="text-zion-slate-light text-sm">Leveraging cutting-edge artificial intelligence for optimal results</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Enterprise-Grade Security</h4>
                        <p className="text-zion-slate-light text-sm">Bank-level security and compliance standards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">24/7 Support</h4>
                        <p className="text-zion-slate-light text-sm">Round-the-clock technical support and monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Service Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-white">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Business Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-white">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="use-cases" className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Common Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.useCases.map((useCase, index) => (
                  <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-white">{useCase}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pricing Information</h3>
                  <Card className="bg-zion-blue-dark border-zion-purple">
                    <CardHeader>
                      <CardTitle className="text-zion-cyan text-3xl">
                        {service.currency}{service.price.toLocaleString()}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {getPricingModelLabel(service.pricingModel)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Market Average:</span>
                          <span className="text-white font-semibold">{service.marketPrice}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Availability:</span>
                          <span className="text-white">{service.availability}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Location:</span>
                          <span className="text-white">{service.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Contact our team today for a free consultation. We'll analyze your needs and provide a customized solution that fits your business requirements.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white font-semibold">{service.contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white font-semibold">{service.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-zion-cyan" />
                  <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {service.contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose This Service?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Proven Track Record</h4>
                    <p className="text-zion-slate-light text-sm">Successfully delivered to {service.reviewCount}+ clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Enterprise Security</h4>
                    <p className="text-zion-slate-light text-sm">Bank-level security and compliance standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Fast Implementation</h4>
                    <p className="text-zion-slate-light text-sm">Quick deployment with minimal business disruption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANCED_SERVICES
              .filter(s => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Card 
                  key={relatedService.id} 
                  className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/services/${relatedService.id}`)}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-lg line-clamp-2">
                      {relatedService.title}
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-2">
                      {relatedService.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-zion-cyan">
                        {relatedService.currency}{relatedService.price.toLocaleString()}
                      </div>
                      <Badge variant="outline" className="border-zion-purple text-zion-purple">
                        {getPricingModelLabel(relatedService.pricingModel)}
                      </Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}