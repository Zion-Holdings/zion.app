import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  COMPREHENSIVE_SERVICES,
  ComprehensiveService 
} from "../data/comprehensiveServices";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap,
  Star,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Search,
  Filter,
  Sparkles,
  Rocket,
  Target,
  Users,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

const categoryIcons = {
  'AI & Machine Learning': Brain,
  'IT Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'Software Development': Code,
  'FinTech': DollarSign,
  'HealthTech': Heart,
  'E-commerce': ShoppingCart,
  'EdTech': GraduationCap,
  'Cybersecurity': Shield,
  'Cloud Services': Cloud
};

const categoryColors = {
  'AI & Machine Learning': 'from-purple-500 to-indigo-600',
  'IT Infrastructure': 'from-blue-500 to-cyan-600',
  'Data Analytics': 'from-green-500 to-emerald-600',
  'Software Development': 'from-orange-500 to-red-600',
  'FinTech': 'from-yellow-500 to-orange-600',
  'HealthTech': 'from-pink-500 to-rose-600',
  'E-commerce': 'from-indigo-500 to-purple-600',
  'EdTech': 'from-teal-500 to-green-600',
  'Cybersecurity': 'from-red-500 to-pink-600',
  'Cloud Services': 'from-blue-500 to-purple-600'
};

const supportLevelColors = {
  'basic': 'bg-gray-500',
  'standard': 'bg-blue-500',
  'premium': 'bg-purple-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-cyan-500'
};

export function EnhancedComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(s => s.category)))];
  const supportLevels = ['all', 'basic', 'standard', 'premium', 'enterprise'];

  // Filter services
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
    
    return matchesSearch && matchesCategory && matchesSupport;
  });

  const formatPrice = (service: ComprehensiveService) => {
    if (service.pricingModel === 'per-project') {
      return `${service.currency}${service.price.toLocaleString()}`;
    } else if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price.toLocaleString()}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${(service.price * 12).toLocaleString()}/year`;
    } else if (service.pricingModel === 'per-user') {
      return `${service.currency}${service.price.toLocaleString()}/user`;
    }
    return service.marketPrice;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-white font-medium">Enterprise-Grade Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Tech Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our cutting-edge technology solutions. 
            From AI strategy to infrastructure optimization, we deliver results that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white">
                <Rocket className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <DollarSign className="h-5 w-5 mr-2" />
                View Pricing
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-zion-cyan"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <span className="text-white font-medium">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-zion-cyan"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Support Level Filter */}
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-zion-cyan" />
                <span className="text-white font-medium">Support:</span>
                <select
                  value={selectedSupportLevel}
                  onChange={(e) => setSelectedSupportLevel(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-zion-cyan"
                >
                  {supportLevels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = categoryIcons[service.category as keyof typeof categoryIcons];
            const colorClass = categoryColors[service.category as keyof typeof categoryColors];
            
            return (
              <Card key={service.id} className="bg-zion-blue-dark/80 backdrop-blur-sm border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center`}>
                      {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                    </div>
                    <Badge className={`${supportLevelColors[service.supportLevel]} text-white`}>
                      {service.supportLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {formatPrice(service)}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      {service.pricingModel === 'per-project' ? 'One-time project' : 
                       service.pricingModel === 'monthly' ? 'Monthly subscription' :
                       service.pricingModel === 'yearly' ? 'Annual subscription' :
                       service.pricingModel === 'per-user' ? 'Per user pricing' : 'Custom pricing'}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-slate-light text-center">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          {benefit}
                        </div>
                      ))}
                      {service.benefits.length > 2 && (
                        <div className="text-xs text-zion-slate-light text-center">
                          +{service.benefits.length - 2} more benefits
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.supportLevel}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-zion-purple/20 text-zion-cyan text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {service.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan text-xs">
                        +{service.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark">
                      Learn More
                    </Button>
                    <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Get in touch with our experts for a personalized consultation and discover 
              how our services can drive your success and accelerate your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
              <p className="text-zion-cyan font-mono">+1 302 464 0950</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
              <p className="text-zion-purple font-mono">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-zion-blue" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-zion-blue font-mono text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white">
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}