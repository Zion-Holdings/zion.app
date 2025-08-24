import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ENHANCED_SERVICES, getServicesByCategory } from "@/data/enhancedServices";
import { Zap, Star, Clock, Users, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const categories = ['AI', 'IT', 'SAAS', 'Development', 'Consulting', 'Security', 'Analytics', 'Cloud', 'Automation', 'Integration'];
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? ENHANCED_SERVICES 
    : getServicesByCategory(selectedCategory);

  const formatPrice = (service: any) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  return (
    <>
      <SEO 
        title="Services - Zion Tech Group" 
        description="Discover our comprehensive range of AI, IT, and SAAS services designed to transform your business." 
        keywords="AI services, IT solutions, SAAS platforms, technology services, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <GradientHeading>Our Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              From AI-powered solutions to enterprise IT services, we offer comprehensive technology 
              solutions that drive innovation and business growth.
            </p>
          </div>

          {/* Contact Information Banner */}
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <div className="text-white font-semibold">+1 302 464 0950</div>
                <div className="text-zion-slate-light text-sm">Call us anytime</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                <div className="text-zion-slate-light text-sm">Email us today</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-6 w-6 text-zion-cyan" />
                <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                <div className="text-zion-slate-light text-sm">Visit our office</div>
              </div>
            </div>
          </div>

          {/* Premium Services CTA */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Discover Our Premium Services
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Explore our curated selection of premium AI, IT, and SAAS solutions with advanced features, 
                dedicated support, and competitive pricing.
              </p>
              <Link to="/enhanced-services">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                  <Zap className="h-4 w-4" />
                  View Premium Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">
              Browse by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={selectedCategory === 'all' ? "default" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className={`gap-2 transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-purple hover:bg-zion-purple-dark text-white'
                    : 'border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50'
                }`}
              >
                <Zap className="h-4 w-4" />
                All Services
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`gap-2 transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-purple hover:bg-zion-purple-dark text-white'
                      : 'border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-zion-slate-light">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-zion-cyan">
                        {formatPrice(service)}
                      </span>
                      <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                        {service.price.pricingModel}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{service.reviewCount} reviews</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zion-blue-light">
                      <a
                        href={service.contactLink}
                        className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                      >
                        <span className="text-sm font-medium">Get Quote</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Get in touch with our experts to discuss your specific needs and discover how our services 
                can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/enhanced-services">
                  <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}