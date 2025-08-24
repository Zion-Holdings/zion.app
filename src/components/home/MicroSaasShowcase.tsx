import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { getPopularServices, getNewServices } from "@/data/microSaasServices";
import { 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Zap,
  Shield,
  Code,
  Building,
  BarChart3,
  Settings,
  Link as LinkIcon
} from "lucide-react";

const categoryIcons = {
  AI: Sparkles,
  IT: Settings,
  Development: Code,
  Business: Building,
  Security: Shield,
  Analytics: BarChart3,
  Automation: Zap,
  Integration: LinkIcon
};

export function MicroSaasShowcase() {
  const popularServices = getPopularServices().slice(0, 3);
  const newServices = getNewServices().slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-zion-cyan neon-pulse" />
            <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0 px-4 py-2">
              New
            </Badge>
            <Sparkles className="w-8 h-8 text-zion-cyan neon-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Transform your business with our cutting-edge micro SAAS services. 
            From AI-powered tools to enterprise security solutions, we have everything you need to succeed.
          </p>
        </div>

        {/* Popular Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-zion-cyan" />
            <h3 className="text-2xl font-semibold text-white">Most Popular Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* New Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-zion-cyan" />
            <h3 className="text-2xl font-semibold text-white">Latest Releases</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-md rounded-2xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-cyan-light mb-6 max-w-2xl mx-auto">
              Explore our complete suite of micro SAAS services and discover how we can help you 
              achieve your business goals with cutting-edge technology solutions.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white border-0 px-8 py-4 text-lg hover-lift hover-glow"
            >
              <Link to="/micro-saas-services">
                <span>Explore All Services</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: any;
}

function ServiceCard({ service }: ServiceCardProps) {
  const CategoryIcon = categoryIcons[service.category as keyof typeof categoryIcons] || Settings;
  
  return (
    <Card className="group bg-gradient-to-br from-zion-slate/80 to-zion-blue-dark/80 backdrop-blur-md border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2 hover-lift">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="text-3xl">{service.icon}</div>
          <div className="flex gap-2">
            {service.isPopular && (
              <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {service.isNew && (
              <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <CategoryIcon className="w-4 h-4 text-zion-cyan" />
          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple-light text-xs">
            {service.category}
          </Badge>
        </div>
        
        <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-cyan/70 text-sm line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        {/* Pricing */}
        <div className="bg-zion-purple/10 rounded-lg p-3 border border-zion-purple/20 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold text-white">${service.pricing.monthly}</span>
              <span className="text-sm text-zion-cyan/60">/month</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-zion-cyan">${service.pricing.yearly}</div>
              <div className="text-xs text-zion-cyan/60">/year</div>
            </div>
          </div>
        </div>
        
        {/* Key Benefits */}
        <div className="space-y-2">
          {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs text-zion-cyan/80">
              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
              <span className="line-clamp-1">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white border-0 hover-glow"
        >
          <Link to={service.website}>
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}