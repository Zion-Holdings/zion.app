import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Building, 
  Smartphone, 
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  ArrowRight,
  Star
} from "lucide-react";
import { EXPANDED_SERVICES } from "@/data/expandedServices";

// Featured services to showcase on home page
const FEATURED_SERVICES = EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6);

const getCategoryIcon = (category: string) => {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI Automation': <Zap className="h-5 w-5" />,
    'Customer Intelligence': <Users className="h-5 w-5" />,
    'Cybersecurity': <Shield className="h-5 w-5" />,
    'Cloud Management': <Globe className="h-5 w-5" />,
    'Data Analytics': <TrendingUp className="h-5 w-5" />,
    'Digital Transformation': <Building className="h-5 w-5" />,
    'Mobile Development': <Smartphone className="h-5 w-5" />,
    'E-commerce': <ShoppingCart className="h-5 w-5" />,
    'Healthcare Technology': <Heart className="h-5 w-5" />,
    'Education Technology': <GraduationCap className="h-5 w-5" />,
    'Supply Chain': <Truck className="h-5 w-5" />
  };
  return categoryIcons[category] || <Zap className="h-5 w-5" />;
};

const getPriceRange = (price: number) => {
  if (price <= 4999) return 'starter';
  if (price <= 9999) return 'professional';
  if (price <= 25000) return 'enterprise';
  return 'custom';
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            From AI automation to cybersecurity, we provide cutting-edge technology solutions 
            that drive business growth and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-cyan">25+</div>
              <div className="text-sm text-zion-cyan-light">Services Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-purple">Global</div>
              <div className="text-sm text-zion-cyan-light">Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-cyan">24/7</div>
              <div className="text-sm text-zion-cyan-light">Support</div>
            </div>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_SERVICES.map((service) => (
            <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {getPriceRange(service.price || 0)}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                <CardDescription className="text-zion-cyan-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/10 text-zion-cyan-light border-white/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-zion-cyan-light">
                      <Star className="h-3 w-3" />
                      <span>{service.rating}</span>
                      <span className="text-xs">({service.review_count})</span>
                    </div>
                    <span className="font-semibold text-zion-cyan">
                      ${service.price?.toLocaleString()}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white"
                    onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`, '_blank')}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: 'AI & ML', icon: <Zap className="h-6 w-6" />, count: 4 },
              { name: 'Cybersecurity', icon: <Shield className="h-6 w-6" />, count: 2 },
              { name: 'Cloud & DevOps', icon: <Globe className="h-6 w-6" />, count: 2 },
              { name: 'Data Analytics', icon: <TrendingUp className="h-6 w-6" />, count: 3 },
              { name: 'Digital Transformation', icon: <Building className="h-6 w-6" />, count: 2 },
              { name: 'Mobile & Web', icon: <Smartphone className="h-6 w-6" />, count: 2 },
              { name: 'E-commerce', icon: <ShoppingCart className="h-6 w-6" />, count: 1 },
              { name: 'Healthcare', icon: <Heart className="h-6 w-6" />, count: 1 },
              { name: 'FinTech', icon: <TrendingUp className="h-6 w-6" />, count: 1 },
              { name: 'EdTech', icon: <GraduationCap className="h-6 w-6" />, count: 1 }
            ].map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-zion-cyan">{category.icon}</span>
                </div>
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-xs text-zion-cyan-light">{category.count} services</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple to-zion-blue rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Full Service Portfolio?
            </h3>
            <p className="text-zion-cyan-light mb-6">
              Discover 25+ innovative solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/expanded-services">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan-light">
                  View All Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Consultation', '_blank')}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="text-zion-cyan-light">
            <p className="mb-2">
              <strong>Contact us:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown DE 19709 | 
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:underline ml-1"
              >
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}