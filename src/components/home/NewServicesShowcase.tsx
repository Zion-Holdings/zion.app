import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MICRO_SAAS_SERVICES, 
  SERVICE_CATEGORIES 
} from '@/data/microSaasServices';
import { 
  Sparkles, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Star,
  CheckCircle,
  Globe,
  MessageCircle
} from 'lucide-react';

export function NewServicesShowcase() {
  // Get featured services from each category
  const featuredServices = SERVICE_CATEGORIES.map(category => 
    category.services[0]
  ).filter(Boolean);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-zion-cyan" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Revolutionary AI & Micro SAAS Services
            </h2>
            <Sparkles className="w-8 h-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions, professional IT services, and affordable micro SAAS tools. 
            <span className="text-zion-cyan font-semibold"> Save up to 55% </span> 
            on enterprise-grade technology solutions.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm hover:from-zion-blue-dark/70 hover:to-zion-slate/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                    {service.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between p-3 bg-zion-blue/20 rounded-lg border border-zion-blue-light/20">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      ${service.zionPrice}
                      <span className="text-sm text-zion-slate-light ml-1">
                        {service.pricingModel === 'monthly' ? '/month' : service.pricingModel === 'yearly' ? '/year' : ''}
                      </span>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Market: ${service.averageMarketPrice}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-600 text-white">
                      Save {service.savings}%
                    </Badge>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Score */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">AI Score:</span>
                    <span className="text-zion-cyan font-semibold">{service.aiScore}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{service.reviewCount} reviews</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link to={service.contactLink}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SERVICE_CATEGORIES.map((category, index) => (
            <div 
              key={category.name}
              className="text-center p-6 rounded-lg bg-zion-blue-dark/30 border border-zion-blue-light/20 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
              <p className="text-zion-slate-light mb-4">{category.description}</p>
              <div className="text-2xl font-bold text-zion-cyan mb-2">
                {category.services.length}+ Services
              </div>
              <Button 
                variant="outline" 
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <Link to="/micro-saas-services">
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-slate/50 rounded-2xl p-8 border border-zion-blue-light/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"
                asChild
              >
                <Link to="/micro-saas-services">
                  <Globe className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-zion-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}