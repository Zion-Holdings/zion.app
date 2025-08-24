import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  ArrowRight, 
  Star,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { getFeaturedServices } from '@/data/microSaasServices';

export function MicroSaasShowcase() {
  const featuredServices = getFeaturedServices().slice(0, 6);

  const categoryIcons = {
    'AI Services': <Zap className="h-6 w-6 text-zion-cyan" />,
    'IT Services': <Shield className="h-6 w-6 text-zion-cyan" />,
    'Micro SAAS': <Users className="h-6 w-6 text-zion-cyan" />,
    'Development': <Code className="h-6 w-6 text-zion-cyan" />,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-zion-blue-dark/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 px-4 py-2 rounded-full border border-zion-purple/30 mb-6">
            <Zap className="h-4 w-4 text-zion-cyan" />
            <span className="text-sm font-medium text-zion-cyan">Featured Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions, AI services, and IT solutions 
            designed to accelerate your business growth and digital transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-zion-purple/10 px-4 py-2 rounded-full border border-zion-purple/20">
              <Zap className="h-4 w-4 text-zion-purple" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-cyan/10 px-4 py-2 rounded-full border border-zion-cyan/20">
              <Shield className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm font-medium">Enterprise-Grade</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue/10 px-4 py-2 rounded-full border border-zion-blue/20">
              <Users className="h-4 w-4 text-zion-blue" />
              <span className="text-sm font-medium">Scalable</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-zion-purple/20 hover:border-zion-purple/40 overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  {categoryIcons[service.category as keyof typeof categoryIcons]}
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-md">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{service.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {service.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-zion-purple/10 text-zion-purple hover:bg-zion-purple/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Benefits */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-zion-cyan">
                    <TrendingUp className="h-4 w-4" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-zion-blue-dark/10 to-zion-purple/10 p-3 rounded-lg border border-zion-blue/20">
                  {service.pricing.custom ? (
                    <div className="text-center">
                      <p className="text-sm font-medium text-zion-cyan">{service.pricing.custom}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xl font-bold text-primary">{service.pricing.currency}</span>
                        <span className="text-xl font-bold">{service.pricing.monthly}</span>
                        <span className="text-sm text-muted-foreground">/mo</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {service.pricing.currency}{service.pricing.yearly}/year
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>

              <div className="px-6 pb-6">
                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple group">
                  <Link to={`/micro-saas-services#${service.id}`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20 p-8 rounded-2xl border border-zion-blue/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Accelerate Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with our 
              innovative solutions. Get started today with a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                <Link to="/micro-saas-services">
                  <span>Explore All Services</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Link to="/request-quote">
                  <span>Get Free Quote</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}