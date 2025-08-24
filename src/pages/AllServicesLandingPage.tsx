import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Shield,
  Users,
  ArrowUpRight,
  Brain,
  Cloud,
  Database,
  Lock,
  Code,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Settings,
  Monitor
} from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, ExpandedService } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';
import { SEO } from '@/components/SEO';

export default function AllServicesLandingPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return '🤖';
      case 'Micro SAAS': return '☁️';
      case 'IT Services': return '💻';
      case 'Digital Services': return '🚀';
      default: return '⚡';
    }
  };

  const getCategoryIconComponent = (category: string) => {
    switch (category) {
      case 'AI Services': return <Brain className="h-6 w-6" />;
      case 'Micro SAAS': return <Cloud className="h-6 w-6" />;
      case 'IT Services': return <Code className="h-6 w-6" />;
      case 'Digital Services': return <ArrowUpRight className="h-6 w-6" />;
      default: return <Settings className="h-6 w-6" />;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case 'subscription': return 'bg-blue-100 text-blue-800';
      case 'project-based': return 'bg-purple-100 text-purple-800';
      case 'one-time': return 'bg-green-100 text-green-800';
      case 'usage-based': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getServiceIcon = (subcategory: string) => {
    switch (subcategory) {
      case 'Customer Service': return <MessageSquare className="h-5 w-5" />;
      case 'Analytics': return <BarChart3 className="h-5 w-5" />;
      case 'Content Creation': return <FileText className="h-5 w-5" />;
      case 'Inventory Management': return <Database className="h-5 w-5" />;
      case 'HR Analytics': return <Users className="h-5 w-5" />;
      case 'Financial Management': return <BarChart3 className="h-5 w-5" />;
      case 'Cloud Solutions': return <Cloud className="h-5 w-5" />;
      case 'Cybersecurity': return <Lock className="h-5 w-5" />;
      case 'DevOps': return <Code className="h-5 w-5" />;
      case 'Transformation': return <ArrowUpRight className="h-5 w-5" />;
      case 'E-commerce': return <ShoppingCart className="h-5 w-5" />;
      default: return <Settings className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Complete Tech Solutions - AI, Micro SAAS, IT & Digital Services | Zion Tech Group" 
        description="Discover our comprehensive ecosystem of AI services, micro SAAS solutions, IT infrastructure, and digital transformation services. Expert solutions for modern businesses."
        keywords="AI services, micro SAAS, IT services, digital transformation, cloud migration, cybersecurity, DevOps, business automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Tech Solutions Ecosystem
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            From cutting-edge AI automation to affordable micro SAAS solutions, comprehensive IT infrastructure, 
            and digital transformation services - we provide everything your business needs to thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{EXPANDED_SERVICES.length}</div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">4</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each category is designed to address specific business challenges and opportunities
            </p>
          </div>

          <Tabs defaultValue="ai-services" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {SERVICE_CATEGORIES.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                  <span className="text-lg">{getCategoryIcon(category.name)}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {SERVICE_CATEGORIES.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full mb-4">
                    {getCategoryIconComponent(category.name)}
                  </div>
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">{category.name}</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 border-zion-blue-light">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                          <Badge className={getPricingModelColor(service.pricingModel)}>
                            {service.pricingModel.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          {getServiceIcon(service.subcategory)}
                          <span className="text-sm text-zion-purple font-medium">{service.subcategory}</span>
                        </div>
                        <CardTitle className="text-lg text-zion-blue-dark">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Rating and AI Score */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="ml-1 text-sm font-medium">{service.rating}</span>
                              <span className="text-gray-500 text-sm ml-1">({service.reviewCount})</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-zion-purple" />
                            <span className="text-sm font-medium text-zion-purple">AI Score: {service.aiScore}</span>
                          </div>
                        </div>

                        {/* Price and Market Price */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-zion-blue-dark">
                              ${service.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500">
                              Market: {service.marketPrice}
                            </span>
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-zion-blue-dark text-sm">Key Features:</h4>
                          <div className="flex flex-wrap gap-1">
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

                        {/* Top Benefits */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-zion-blue-dark text-sm">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Service Details */}
                        <div className="pt-4 border-t border-gray-200 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Availability:</span>
                            <span className="font-medium">{service.availability}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Response Time:</span>
                            <span className="font-medium">{service.responseTime}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Support Level:</span>
                            <span className="font-medium">{service.supportLevel}</span>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="pt-4 border-t border-gray-200">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Phone className="h-4 w-4" />
                              <span>{service.contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Mail className="h-4 w-4" />
                              <span>{service.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Globe className="h-4 w-4" />
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

                        {/* Action Buttons */}
                        <div className="flex space-x-2 pt-4">
                          <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                            Get Quote
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Zion Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Zion Tech Group?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">
                Our services have helped businesses achieve significant improvements in efficiency, cost savings, and growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with years of experience in AI, IT, and digital transformation across various industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliable Support</h3>
              <p className="text-zion-slate-light">
                24/7 support and maintenance to ensure your systems run smoothly and efficiently at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific needs and discover how our services can drive your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          
          <div className="text-zion-slate-light">
            <p className="mb-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}