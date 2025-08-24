import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { getFeaturedServices } from '@/data/microSaasServices';
import { 
  Bot, 
  Shield, 
  Code, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  Briefcase, 
  DollarSign,
  ArrowRight,
  Star,
  Users,
  CheckCircle
} from 'lucide-react';

export function MicroSaasServicesSection() {
  const featuredServices = getFeaturedServices();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Bot className="h-5 w-5" />;
      case 'IT': return <Shield className="h-5 w-5" />;
      case 'Development': return <Code className="h-5 w-5" />;
      case 'Analytics': return <BarChart3 className="h-5 w-5" />;
      case 'Automation': return <Zap className="h-5 w-5" />;
      case 'Marketing': return <TrendingUp className="h-5 w-5" />;
      case 'Productivity': return <Briefcase className="h-5 w-5" />;
      case 'Finance': return <DollarSign className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  const getPricingDisplay = (service: any) => {
    if (service.price.oneTime) {
      return `${service.price.currency}${service.price.oneTime.toLocaleString()}`;
    } else if (service.price.monthly) {
      return `${service.price.currency}${service.price.monthly}/month`;
    }
    return 'Contact for pricing';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-zion-blue/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30 mb-4">
            New Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover innovative micro SAAS services designed to solve specific business challenges and accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              asChild
            >
              <Link to="/micro-saas-services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <Link to="/request-quote">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => (
            <Card 
              key={service.id} 
              className="bg-zion-blue-dark/50 backdrop-blur-md border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-zion-purple/20 text-zion-purple">
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-white text-lg group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPricingDisplay(service)}
                  </div>
                  <Badge variant="outline" className="border-zion-purple text-zion-purple">
                    {service.pricingTier}
                  </Badge>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="pt-2 border-t border-zion-blue-light/20">
                  <div className="flex items-center gap-2 text-xs text-zion-slate-light">
                    <Users className="h-3 w-3" />
                    <span>Perfect for {service.targetAudience.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </CardContent>

              <div className="p-4 pt-0">
                <Button 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  size="sm"
                  asChild
                >
                  <Link to={`/micro-saas-services#${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-zion-blue-dark/30 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">12+</div>
            <div className="text-zion-slate-light">Micro SAAS Services</div>
          </div>
          <div className="bg-zion-blue-dark/30 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">4.8</div>
            <div className="text-zion-slate-light">Average Rating</div>
          </div>
          <div className="bg-zion-blue-dark/30 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">Happy Clients</div>
          </div>
          <div className="bg-zion-blue-dark/30 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-md rounded-3xl p-12 border border-zion-purple/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                asChild
              >
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <Link to="/request-quote">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}