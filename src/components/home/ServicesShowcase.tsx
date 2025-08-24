import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Zap,
  ArrowRight,
  Star,
  DollarSign,
  Clock
} from "lucide-react";
import { COMPREHENSIVE_SERVICES } from "@/data/comprehensiveServices";

export function ServicesShowcase() {
  // Get featured services for showcase
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 6);

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Brain className="h-8 w-8" />,
      'AI Services': <Zap className="h-8 w-8" />,
      'Cloud Services': <Cloud className="h-8 w-8" />,
      'Cybersecurity': <Shield className="h-8 w-8" />,
      'Web Development': <Globe className="h-8 w-8" />,
      'Mobile Development': <Smartphone className="h-8 w-8" />,
      'Data Services': <Database className="h-8 w-8" />,
      'Enterprise Solutions': <Globe className="h-8 w-8" />
    };
    return iconMap[category] || <Zap className="h-8 w-8" />;
  };

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative solutions that are transforming businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg flex items-center justify-center">
                    <div className="text-white">
                      {getServiceIcon(service.category)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-bold text-lg">{service.price?.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs">{service.availability}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zion-purple/20 flex items-center justify-center">
                      <Brain className="h-3 w-3 text-zion-purple" />
                    </div>
                    <span className="text-xs text-zion-slate-light">AI Score: {service.aiScore}</span>
                  </div>
                  <Link to={`/services?service=${service.id}`}>
                    <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/comprehensive-services">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}