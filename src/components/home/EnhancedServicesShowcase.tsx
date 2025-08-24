import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, DollarSign, Users, ArrowRight, Sparkles } from 'lucide-react';
import { comprehensiveServices, serviceCategories } from '@/data/comprehensiveServices';

export function EnhancedServicesShowcase() {
  const featuredServices = comprehensiveServices.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-zion-purple mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Premium Services
            </h2>
            <Sparkles className="w-8 h-8 text-zion-purple ml-3" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, enterprise IT services, and innovative Micro SAAS platforms designed to transform your business.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg text-white">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-zion-slate-light text-sm">
                  {category.description}
                </CardDescription>
                <Badge variant="secondary" className="mt-2 bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                  {category.count} services
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                    AI Score: {service.aiScore}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-white line-clamp-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Pricing and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white font-semibold">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                    <Users className="w-4 h-4" />
                    <span>{service.targetAudience.length} audiences</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link to={`/services/${service.id}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-blue-dark text-lg px-8 py-6"
            asChild
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <p className="text-zion-slate-light mt-4">
            Transform your business with our comprehensive suite of AI-powered solutions
          </p>
        </div>
      </div>
    </section>
  );
}