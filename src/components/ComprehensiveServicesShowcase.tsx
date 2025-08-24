import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  Globe, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/comprehensiveServices';

export function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-6 h-6" />;
      case 'IT Services':
        return <Cloud className="w-6 h-6" />;
      case 'Micro SAAS':
        return <Zap className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-white">Comprehensive Tech Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS services, enterprise IT solutions, and advanced AI capabilities. 
            Transform your business with innovative technology solutions backed by expert support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              {CONTACT_INFO.mobile}
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              {CONTACT_INFO.email}
            </Button>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-semibold mb-1">Phone</h3>
              <p className="text-cyan-300">{CONTACT_INFO.mobile}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-cyan-300">{CONTACT_INFO.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-semibold mb-1">Address</h3>
              <p className="text-cyan-300 text-sm">{CONTACT_INFO.address}</p>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-cyan-500/30">
            <p className="text-slate-300">
              <Clock className="w-4 h-4 inline mr-2" />
              {CONTACT_INFO.businessHours} • Response Time: {CONTACT_INFO.responseTime}
            </p>
          </div>
        </div>

        {/* Service Categories Tabs */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-slate-700">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600"
              onClick={() => setSelectedCategory('all')}
            >
              All Services
            </TabsTrigger>
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} getCategoryIcon={getCategoryIcon} />
              ))}
            </div>
          </TabsContent>

          {SERVICE_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} getCategoryIcon={getCategoryIcon} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Flexible Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`border-2 ${
                index === 1 ? 'border-cyan-500 scale-105' : 'border-slate-700'
              } bg-slate-800/50 backdrop-blur-sm`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-white">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-cyan-400">
                    {tier.price}
                    <span className="text-sm text-slate-400">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-slate-300">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Innovation First</h3>
              <p className="text-slate-300 text-sm">Cutting-edge AI and technology solutions</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Team</h3>
              <p className="text-slate-300 text-sm">Certified professionals with industry experience</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
              <p className="text-slate-300 text-sm">SOC 2, ISO 27001, GDPR compliant solutions</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-slate-300 text-sm">Round-the-clock technical support and monitoring</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive your digital transformation and accelerate growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Request Quote
            </Button>
            <Link to={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="text-cyan-400 hover:text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: any;
  getCategoryIcon: (category: string) => React.ReactNode;
}

function ServiceCard({ service, getCategoryIcon }: ServiceCardProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {service.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex items-center bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs ml-1">{service.rating}</span>
          </div>
          <div className="bg-black/70 rounded-full px-2 py-1">
            <span className="text-white text-xs">({service.reviewCount})</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            {service.subcategory && (
              <div className="text-xs text-slate-400">{service.subcategory}</div>
            )}
          </div>
        </div>
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {service.availability}
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            {service.location}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={service.author.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'} 
                alt={service.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white text-sm font-medium">{service.author.name}</div>
              <div className="text-slate-400 text-xs">{service.author.email}</div>
            </div>
          </div>
          
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <ArrowRight className="w-3 h-3 mr-1" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}