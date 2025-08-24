import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Database,
  Smartphone,
  Code
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/enhancedServices';

interface EnhancedServicesShowcaseProps {
  showTitle?: boolean;
  maxServices?: number;
}

export function EnhancedServicesShowcase({ showTitle = true, maxServices }: EnhancedServicesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        service.category.toLowerCase().includes(activeCategory.replace('-', '').toLowerCase())
      );

  const displayServices = maxServices ? filteredServices.slice(0, maxServices) : filteredServices;

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => 
      cat.id === category || cat.name.toLowerCase().includes(category.toLowerCase())
    );
    return categoryData?.icon || '💼';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional IT & AI Services
            </h2>
            <p className="text-zion-slate-light text-xl max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive suite of cutting-edge technology solutions. 
              From AI development to IT infrastructure, we deliver results that drive growth and innovation.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                  <p className="text-zion-slate-light text-sm">Call Us</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                  <p className="text-zion-slate-light text-sm">Email Us</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-zion-cyan mb-2" />
                  <p className="text-zion-slate-light text-sm">Visit Us</p>
                  <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Categories Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger value="all" className="text-white hover:text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              All Services
            </TabsTrigger>
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-white hover:text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white"
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden md:inline">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayServices.map((service) => (
            <Card key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                    {getCategoryIcon(service.category)} {service.category}
                  </Badge>
                  {service.featured && (
                    <Badge variant="destructive" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-white/20 text-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Price:</span>
                    <span className="text-white font-bold text-lg">
                      {service.currency}{service.price?.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Availability:</span>
                    <span className="text-zion-cyan text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.availability}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Location:</span>
                    <span className="text-zion-slate-light text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {service.location}
                    </span>
                  </div>

                  {service.rating && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 mr-1" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    asChild 
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white border-0"
                  >
                    <Link to={`/services/${service.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white"
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Quote Request: ${service.title}`, '_blank')}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Tiers Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Flexible Pricing Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`bg-white/5 backdrop-blur-sm border ${
                key === 'professional' ? 'border-zion-cyan/50 bg-zion-cyan/10' : 'border-white/20'
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className={`text-2xl ${
                    key === 'professional' ? 'text-zion-cyan' : 'text-white'
                  }`}>
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-white mt-4">
                    {tier.priceRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      key === 'professional' 
                        ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                    }`}
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Pricing Inquiry: ${tier.name} Tier`, '_blank')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12">Why Choose Zion Tech Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light">Track record of successful implementations and measurable business impact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light">Bank-level security standards and compliance with industry regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Fast Implementation</h4>
              <p className="text-zion-slate-light">Quick deployment with minimal disruption to your business operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">AI Expertise</h4>
              <p className="text-zion-slate-light">Deep knowledge in cutting-edge AI technologies and best practices</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-12 border border-zion-cyan/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3"
                onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Business Transformation Consultation`, '_blank')}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3"
                onClick={() => window.open(`tel:${CONTACT_INFO.phone}`, '_blank')}
              >
                Call Now: {CONTACT_INFO.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}