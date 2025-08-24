import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, ArrowRight, CheckCircle, TrendingUp, Shield, Code, Users } from 'lucide-react';
import { getFeaturedMicroSaasServices } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function MicroSaasServicesSection() {
  const featuredServices = getFeaturedMicroSaasServices().slice(0, 3);

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-zion-purple/20">
      {/* Featured Badge */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
        Featured
      </div>

      {/* Service Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Zap className="w-8 h-8 text-white" />
      </div>

      {/* Service Info */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </h3>
        <p className="text-zion-slate-light text-sm leading-relaxed">
          {service.description.substring(0, 120)}...
        </p>

        {/* AI Score and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-zion-cyan" />
            <span className="text-sm text-zion-slate-light">AI Score:</span>
            <span className="text-zion-cyan font-bold">{service.aiScore}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-white">{service.rating}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-white">{service.currency}{service.price}</span>
            <span className="text-zion-slate-light text-sm ml-1">/mo</span>
          </div>
          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
            {service.subcategory}
          </Badge>
        </div>

        {/* Key Benefits */}
        <div className="space-y-2">
          {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
              <span className="text-xs text-zion-slate-light">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/20 transition-all duration-300"
        >
          <Link to={service.website} target="_blank" rel="noopener noreferrer">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Featured Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge micro SAAS services. From AI-powered automation 
            to enterprise IT solutions, we provide innovative tools that drive growth and efficiency.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-zion-slate-light">AI Services</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8+</div>
            <div className="text-zion-slate-light">IT Solutions</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-zion-slate-light">Business Tools</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-zion-slate-light">Happy Clients</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 border border-zion-blue-light/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Explore our complete range of micro SAAS services and find the perfect solution for your business needs. 
              Our team is ready to help you implement and optimize these tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-light hover:to-zion-cyan-light shadow-lg shadow-zion-purple/20"
              >
                <Link to="/micro-saas-services">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              >
                <Link to="/contact">
                  Get Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}