import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Monitor, 
  Zap, 
  Settings, 
  Star, 
  ExternalLink, 
  ArrowRight,
  Shield,
  Globe,
  Database,
  Lock,
  Users,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { getPopularServices, getServicesByCategory } from '@/data/microSaasServices';
import { Link } from 'react-router-dom';

export function EnhancedServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Services', icon: <Zap className="w-5 h-5" />, color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI Services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, color: 'from-zion-purple to-zion-purple-dark' },
    { id: 'IT Services', name: 'IT Services', icon: <Monitor className="w-5 h-5" />, color: 'from-zion-cyan to-zion-blue' },
    { id: 'Innovation', name: 'Innovation', icon: <Zap className="w-5 h-5" />, color: 'from-zion-purple to-zion-purple-dark' },
    { id: 'Business Solutions', name: 'Business', icon: <Settings className="w-5 h-5" />, color: 'from-zion-cyan to-zion-blue' }
  ];

  const getServicesToShow = () => {
    if (activeCategory === 'all') {
      return getPopularServices(6);
    }
    return getServicesByCategory(activeCategory).slice(0, 6);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-6 h-6" />;
      case 'IT Services':
        return <Monitor className="w-6 h-6" />;
      case 'Innovation':
        return <Zap className="w-6 h-6" />;
      case 'Business Solutions':
        return <Settings className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'subscription':
        return 'Monthly/Yearly';
      case 'usage':
        return 'Pay per use';
      case 'one-time':
        return 'One-time payment';
      case 'enterprise':
        return 'Custom pricing';
      default:
        return model;
    }
  };

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              Our Micro SAAS Services
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive suite of innovative solutions designed to transform your business operations 
            and drive growth in the digital age.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                  : 'border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan hover:bg-zion-cyan/10'
              }`}
            >
              <div className={`p-1 rounded-full bg-gradient-to-r ${category.color}`}>
                {category.icon}
              </div>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getServicesToShow().map((service) => (
            <Card 
              key={service.id} 
              className="group bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-zion-purple/80 hover:bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-sm text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(service.category)}
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-zion-slate-light leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-slate-light text-sm">Starting at</span>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {getPricingModelLabel(service.price.pricingModel)}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {service.price.currency}{service.price.monthly}
                    <span className="text-sm text-zion-slate-light font-normal">/month</span>
                  </div>
                  {service.price.yearly && (
                    <div className="text-sm text-zion-slate-light">
                      {service.price.currency}{service.price.yearly}/year
                    </div>
                  )}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="text-sm text-zion-slate-light flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-dark/70">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                    <a href={service.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild>
                    <a href={`mailto:${service.contact.email}?subject=Inquiry about ${service.title}`}>
                      Contact
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold group"
            asChild
          >
            <Link to="/micro-saas-services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}