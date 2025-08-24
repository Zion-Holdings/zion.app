import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MICRO_SAAS_SERVICES, 
  MicroSaasService, 
  getServiceByType 
} from "@/data/microSaasServices";
import { 
  Brain, 
  Server, 
  Zap, 
  Star, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Code,
  Database,
  Lock,
  Network
} from "lucide-react";

export default function MicroSaasServices() {
  const [selectedType, setSelectedType] = useState<'AI' | 'IT' | 'Specialized'>('AI');

  const aiServices = getServiceByType('AI');
  const itServices = getServiceByType('IT');
  const specializedServices = getServiceByType('Specialized');

  const getServiceIcon = (serviceType: string) => {
    switch (serviceType) {
      case 'AI':
        return <Brain className="h-6 w-6 text-purple-500" />;
      case 'IT':
        return <Server className="h-6 w-6 text-blue-500" />;
      case 'Specialized':
        return <Zap className="h-6 w-6 text-amber-500" />;
      default:
        return <Star className="h-6 w-6 text-gray-500" />;
    }
  };

  const getPricingBadge = (service: MicroSaasService) => {
    if (service.freeTier) {
      return <Badge variant="secondary" className="bg-green-100 text-green-800">Free Tier Available</Badge>;
    }
    return null;
  };

  const getSupportBadge = (level: string) => {
    const colors = {
      basic: "bg-gray-100 text-gray-800",
      premium: "bg-blue-100 text-blue-800",
      enterprise: "bg-purple-100 text-purple-800"
    };
    return <Badge variant="secondary" className={colors[level as keyof typeof colors]}>{level}</Badge>;
  };

  const renderServiceCard = (service: MicroSaasService) => (
    <Card key={service.id} className="h-full overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple/20 backdrop-blur-sm hover:from-zion-blue-dark/70 hover:to-zion-purple/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {getServiceIcon(service.serviceType)}
            <div>
              <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                {service.serviceType}
              </Badge>
              {getPricingBadge(service)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              {service.currency}{service.price}
            </div>
            {service.monthlyPrice && (
              <div className="text-sm text-zion-slate-light">
                /month
              </div>
            )}
          </div>
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Features */}
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            Key Features
          </h4>
          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-zion-slate-light">
                <CheckCircle className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-zion-cyan" />
            Benefits
          </h4>
          <ul className="space-y-2">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-zion-slate-light">
                <CheckCircle className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Level */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-zion-cyan" />
            <span className="text-sm text-zion-slate-light">Support:</span>
          </div>
          {getSupportBadge(service.supportLevel)}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-4">
          {service.demoUrl && (
            <Button 
              variant="outline" 
              className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Demo
              </a>
            </Button>
          )}
          <Button 
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            asChild
          >
            <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="pt-4 border-t border-zion-blue-light/30">
          <div className="space-y-2 text-sm text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-zion-cyan" />
              <a href={`tel:${service.contactInfo.phone}`} className="hover:text-zion-cyan transition-colors">
                {service.contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-zion-cyan" />
              <a href={`mailto:${service.contactInfo.email}`} className="hover:text-zion-cyan transition-colors">
                {service.contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-3 w-3 text-zion-cyan" />
              <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                {service.contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of AI, IT, and specialized micro SAAS services. Transform your business with cutting-edge technology solutions."
        keywords="micro SAAS, AI services, IT services, blockchain, IoT, cybersecurity, Zion Tech Group"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Micro SAAS Services
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with our cutting-edge AI, IT, and specialized micro SAAS solutions. 
                Built for scale, designed for innovation, powered by Zion Tech Group.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Brain className="h-5 w-5" />
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-zion-purple-light">
                  <Server className="h-5 w-5" />
                  <span>Enterprise IT Services</span>
                </div>
                <div className="flex items-center gap-2 text-zion-blue-light">
                  <Zap className="h-5 w-5" />
                  <span>Specialized Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={selectedType} onValueChange={(value) => setSelectedType(value as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 p-1 rounded-lg backdrop-blur-sm">
                <TabsTrigger 
                  value="AI" 
                  className="data-[state=active]:bg-zion-purple data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  AI Services ({aiServices.length})
                </TabsTrigger>
                <TabsTrigger 
                  value="IT" 
                  className="data-[state=active]:bg-zion-blue data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Server className="h-4 w-4 mr-2" />
                  IT Services ({itServices.length})
                </TabsTrigger>
                <TabsTrigger 
                  value="Specialized" 
                  className="data-[state=active]:bg-zion-cyan data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Specialized ({specializedServices.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="AI" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiServices.map(renderServiceCard)}
                </div>
              </TabsContent>

              <TabsContent value="IT" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itServices.map(renderServiceCard)}
                </div>
              </TabsContent>

              <TabsContent value="Specialized" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specializedServices.map(renderServiceCard)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com?subject=Micro SAAS Services Consultation">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Phone className="h-5 w-5 text-zion-cyan" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Mail className="h-5 w-5 text-zion-cyan" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Globe className="h-5 w-5 text-zion-cyan" />
                      <span>https://ziontechgroup.com</span>
                    </div>
                    <div className="flex items-start gap-3 text-zion-slate-light">
                      <MapPin className="h-5 w-5 text-zion-cyan mt-0.5" />
                      <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Enterprise-grade security and compliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>24/7 technical support and monitoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Custom solutions tailored to your needs</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Proven track record with Fortune 500 companies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}