import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, PRICING_TIERS } from '@/data/comprehensiveServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Users,
  Building,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter services based on search and filters
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.name;
    
    const matchesPricing = selectedPricingTier === 'all' || 
      (service.price && service.price >= PRICING_TIERS[selectedPricingTier as keyof typeof PRICING_TIERS]?.min && 
       service.price <= PRICING_TIERS[selectedPricingTier as keyof typeof PRICING_TIERS]?.max);

    return matchesSearch && matchesCategory && matchesPricing;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'ai-score':
        return (b.aiScore || 0) - (a.aiScore || 0);
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return <Zap className="w-5 h-5" />;
      case 'IT Services': return <Shield className="w-5 h-5" />;
      case 'Business Solutions': return <TrendingUp className="w-5 h-5" />;
      case 'Digital Solutions': return <Globe className="w-5 h-5" />;
      case 'Specialized Solutions': return <Building className="w-5 h-5" />;
      case 'IoT Solutions': return <BarChart3 className="w-5 h-5" />;
      case 'Education Solutions': return <Users className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Comprehensive Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services including AI solutions, IT services, business automation, and specialized industry solutions."
        keywords="micro SAAS, AI services, IT solutions, business automation, digital transformation"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business with our innovative, scalable, and cost-effective micro SAAS solutions. 
            From AI-powered automation to enterprise-grade security, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark py-4 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-cyan text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing</SelectItem>
                {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                  <SelectItem key={key} value={key}>
                    {tier.label} (${tier.min}-${tier.max})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">AI Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-zion-cyan">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm font-medium">{service.category}</span>
                    </div>
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-2xl font-bold text-white">
                        {service.price?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* AI Score */}
                  {service.aiScore && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">AI Score:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-zion-blue-light rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                            style={{ width: `${service.aiScore}%` }}
                          ></div>
                        </div>
                        <span className="text-zion-cyan font-medium">{service.aiScore}%</span>
                      </div>
                    </div>
                  )}

                  {/* Availability and Location */}
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-zion-slate-light text-lg mb-4">
                No services found matching your criteria
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPricingTier('all');
                }}
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-zion-blue-dark py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver innovative, scalable, and cost-effective solutions that drive real business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation First",
                description: "Cutting-edge AI and technology solutions that keep you ahead of the competition"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security and compliance for all our solutions and services"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account management for enterprise clients"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-cyan text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our micro SAAS solutions can drive innovation, efficiency, and growth for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}