import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Users, 
  Search,
  Filter,
  Zap,
  Brain,
  Shield,
  Globe,
  BarChart3,
  Cpu,
  Bot,
  Database,
  Cloud,
  TrendingUp,
  Code
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, getFeaturedServices } from '@/data/microSaasServices';

export function MicroSaasServicesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const featuredServices = getFeaturedServices();
  
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI': <Brain className="h-5 w-5" />,
      'IT': <Cpu className="h-5 w-5" />,
      'Development': <Code className="h-5 w-5" />,
      'Analytics': <BarChart3 className="h-5 w-5" />,
      'Security': <Shield className="h-5 w-5" />,
      'Automation': <Zap className="h-5 w-5" />,
      'Cloud': <Cloud className="h-5 w-5" />,
      'Marketing': <TrendingUp className="h-5 w-5" />,
      'Productivity': <Zap className="h-5 w-5" />,
      'Finance': <BarChart3 className="h-5 w-5" />
    };
    return icons[category] || <Zap className="h-5 w-5" />;
  };

  const getPricingDisplay = (service: any) => {
    if (service.price.oneTime) {
      return `$${service.price.oneTime}`;
    }
    return `$${service.price.monthly}/mo`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Micro SAAS Services
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover innovative, intelligent, and diversified micro SAAS solutions designed to transform your business operations and drive growth.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            >
              <option value="all">All Categories</option>
              <option value="AI">AI Services</option>
              <option value="IT">IT Services</option>
              <option value="Development">Development</option>
              <option value="Analytics">Analytics</option>
              <option value="Security">Security</option>
              <option value="Automation">Automation</option>
              <option value="Cloud">Cloud</option>
              <option value="Marketing">Marketing</option>
              <option value="Productivity">Productivity</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Get Custom Quote
              </Button>
            </Link>
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
                <Link to={`/micro-saas-services#${service.id}`}>
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    size="sm"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-zion-blue-dark/30 rounded-lg p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">9+</div>
            <div className="text-zion-slate-light">Services Available</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-lg p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-lg p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">4.8★</div>
            <div className="text-zion-slate-light">Average Rating</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-lg p-6 border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">100%</div>
            <div className="text-zion-slate-light">Satisfaction</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get started with our micro SAAS services today and experience the power of intelligent, innovative solutions designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}