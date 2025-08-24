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
                ${service.monthlyPrice}/month
              </div>
            )}
            {service.yearlyPrice && (
              <div className="text-sm text-zion-slate-light">
                ${service.yearlyPrice}/year
              </div>
            )}
          </div>
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Key Features */}
        <div>
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-zion-cyan" />
            Benefits
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                <Star className="h-3 w-3 text-zion-cyan" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Level */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-zion-cyan" />
            <span className="text-sm text-zion-slate-light">Support:</span>
          </div>
          {getSupportBadge(service.supportLevel)}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white"
            asChild
          >
            <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
              Get Quote
            </a>
          </Button>
          {service.demoUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group"
        description="Discover our comprehensive range of AI, IT, and specialized micro SAAS solutions designed to transform your business operations and drive growth."
        keywords="micro saas, AI services, IT solutions, business automation, cloud services, cybersecurity, blockchain, IoT"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Micro SAAS
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with our cutting-edge AI, IT, and specialized micro SAAS services. 
                Ready-to-deploy solutions that scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-zion-purple hover:bg-zion-purple-light text-white text-lg px-8 py-4"
                  asChild
                >
                  <a href="mailto:kleber@ziontechgroup.com?subject=Micro SAAS Services Consultation">
                    Get Started Today
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                  asChild
                >
                  <a href="tel:+13024640950">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Solution
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From AI-powered automation to enterprise IT infrastructure, we offer comprehensive solutions 
                that adapt to your business needs and drive measurable results.
              </p>
            </div>

            <Tabs value={selectedType} onValueChange={(value) => setSelectedType(value as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 backdrop-blur-sm">
                <TabsTrigger 
                  value="AI" 
                  className="data-[state=active]:bg-zion-purple data-[state=active]:text-white text-zion-slate-light"
                >
                  <Brain className="h-5 w-5 mr-2" />
                  AI Services
                </TabsTrigger>
                <TabsTrigger 
                  value="IT" 
                  className="data-[state=active]:bg-zion-blue data-[state=active]:text-white text-zion-slate-light"
                >
                  <Server className="h-5 w-5 mr-2" />
                  IT Solutions
                </TabsTrigger>
                <TabsTrigger 
                  value="Specialized" 
                  className="data-[state=active]:bg-zion-cyan data-[state=active]:text-white text-zion-slate-light"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Specialized
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