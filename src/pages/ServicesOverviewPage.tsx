import React from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Brain, Shield, Cloud, BarChart3, RefreshCw, Link,
  Star, Zap, TrendingUp, CheckCircle, Users, Globe,
  Phone, Mail, Clock, DollarSign, ArrowRight,
  Lightbulb, Award, Heart
} from 'lucide-react';
import Wifi from 'lucide-react/dist/esm/icons/wifi';
import Target from 'lucide-react/dist/esm/icons/target';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import { SEO } from '@/components/SEO';

const categoryIcons = {
  "AI & Machine Learning": Brain,
  "Cybersecurity": Shield,
  "Cloud & DevOps": Cloud,
  "Data & Analytics": BarChart3,
  "Digital Transformation": RefreshCw,
  "IoT & Smart Solutions": Wifi,
  "Blockchain & Web3": Link
};

const categoryColors = {
  "AI & Machine Learning": "from-purple-500 to-pink-500",
  "Cybersecurity": "from-red-500 to-orange-500",
  "Cloud & DevOps": "from-blue-500 to-cyan-500",
  "Data & Analytics": "from-green-500 to-emerald-500",
  "Digital Transformation": "from-indigo-500 to-purple-500",
  "IoT & Smart Solutions": "from-yellow-500 to-orange-500",
  "Blockchain & Web3": "from-gray-500 to-blue-500"
};

export default function ServicesOverviewPage() {
  const getServicesByCategory = (category: string) => {
    return ENHANCED_SERVICES.filter(service => service.category === category);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Complete IT & AI Services Overview - Zion Tech Group"
        description="Explore our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT consulting, blockchain, IoT, enterprise solutions"
        canonical="https://ziontechgroup.com/services-overview"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Complete Technology Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            From AI-powered automation to enterprise cybersecurity, we provide comprehensive technology services
            that transform businesses and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light text-lg px-8 py-6">
              <Phone className="mr-3 h-6 w-6" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue text-lg px-8 py-6">
              <Mail className="mr-3 h-6 w-6" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-blue-dark py-6 px-4 md:px-8 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-4">
            <Globe className="h-6 w-6 text-zion-cyan" />
            <span className="text-lg font-medium">Global IT Services • 24/7 Support • Enterprise Solutions</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-zion-cyan" />
              <span>Middletown, DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview Tabs */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
          </div>

          <Tabs defaultValue="ai-ml" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
              {SERVICE_CATEGORIES.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <TabsTrigger
                    key={category}
                    value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-zion-blue data-[state=active]:text-white"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-xs text-center">{category}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {SERVICE_CATEGORIES.map((category) => {
              const services = getServicesByCategory(category);
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              const gradient = categoryColors[category as keyof typeof categoryColors];

              return (
                <TabsContent
                  key={category}
                  value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${gradient} text-white rounded-2xl p-8 text-center`}>
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 rounded-full p-4">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{category}</h3>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                      {category === "AI & Machine Learning" && "Transform your business with cutting-edge AI solutions that automate processes and unlock new insights."}
                      {category === "Cybersecurity" && "Protect your digital assets with enterprise-grade security solutions and zero-trust architecture."}
                      {category === "Cloud & DevOps" && "Accelerate development and optimize cloud infrastructure with modern DevOps practices."}
                      {category === "Data & Analytics" && "Turn your data into actionable insights with real-time analytics and business intelligence."}
                      {category === "Digital Transformation" && "Modernize your business processes and technology infrastructure for the digital age."}
                      {category === "IoT & Smart Solutions" && "Connect and monitor your devices with intelligent IoT platforms and smart city solutions."}
                      {category === "Blockchain & Web3" && "Embrace the future with blockchain solutions, DeFi applications, and Web3 innovation."}
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                      <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {service.subcategory}
                            </Badge>
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              Save {service.savings}%
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-3 leading-tight">{service.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="pb-4">
                          {/* Key Benefits */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              Key Benefits
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Use Cases */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                              <Lightbulb className="h-4 w-4 text-yellow-500" />
                              Use Cases
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {service.useCases.slice(0, 3).map((useCase, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {useCase}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Target Audience */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                              <Users className="h-4 w-4 text-blue-500" />
                              Target Audience
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {service.targetAudience.slice(0, 2).map((audience, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {audience}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>

                        <CardContent className="pt-0">
                          {/* Pricing & Metrics */}
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-zion-blue">
                                  {formatPrice(service.price)}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.pricingModel === 'subscription' ? '/month' : 'one-time'}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500 line-through">
                                  {formatPrice(service.marketPrice)}
                                </div>
                                <div className="text-sm font-semibold text-green-600">
                                  Save {service.savings}%
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                              <div className="flex items-center gap-1 justify-center">
                                <Star className="h-3 w-3 text-yellow-500" />
                                <span>{service.rating}</span>
                              </div>
                              <div className="flex items-center gap-1 justify-center">
                                <Zap className="h-3 w-3 text-blue-500" />
                                <span>{service.aiScore}</span>
                              </div>
                              <div className="flex items-center gap-1 justify-center">
                                <Clock className="h-3 w-3 text-green-500" />
                                <span>{service.deliveryTime}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-3">
                            <Button className="w-full" size="sm">
                              <Phone className="mr-2 h-4 w-4" />
                              Contact
                            </Button>
                            <Button variant="outline" className="w-full" size="sm">
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Category CTA */}
                  <div className="text-center py-8">
                    <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-6">
                      <Rocket className="mr-3 h-6 w-6" />
                      Get Started with {category}
                    </Button>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>

      {/* Why Choose Zion Tech Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">
                Over 15 years of experience in delivering enterprise technology solutions across industries
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-600">
                Cutting-edge AI and machine learning technologies that deliver measurable business impact
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Worldwide IT services with local expertise and 24/7 support across all time zones
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Success</h3>
              <p className="text-gray-600">
                Dedicated support teams and proven methodologies that ensure project success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions that drive growth,
            efficiency, and competitive advantage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light mb-4">Speak directly with our experts</p>
              <div className="text-2xl font-bold">+1 302 464 0950</div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light mb-4">Get detailed information</p>
              <div className="text-lg font-semibold">kleber@ziontechgroup.com</div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Target className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light mb-4">Meet our team in person</p>
              <div className="text-sm font-semibold">364 E Main St STE 1008<br />Middletown, DE 19709</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light text-lg px-8 py-6">
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue text-lg px-8 py-6">
              <Phone className="mr-3 h-6 w-6" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}