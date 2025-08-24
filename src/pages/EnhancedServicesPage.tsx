import React, { useState, useEffect } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/enhancedServices';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/Input';
import { Search, Filter, Star, Clock, Globe, Shield, Zap, Brain, Database, Cloud, Lock, Leaf, DollarSign, Eye, Users, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const EnhancedServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [availability, setAvailability] = useState<string>('all');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && service.price < 10000) ||
                        (priceRange === 'medium' && service.price >= 10000 && service.price < 25000) ||
                        (priceRange === 'high' && service.price >= 25000);
    const matchesAvailability = availability === 'all' || service.availability === availability;

    return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5" />;
      case 'Data & Analytics': return <Database className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Zap className="w-5 h-5" />;
      case 'IoT & Edge Computing': return <Eye className="w-5 h-5" />;
      case 'Quantum Computing': return <Brain className="w-5 h-5" />;
      case 'AR/VR & Metaverse': return <Eye className="w-5 h-5" />;
      case 'Green Tech & Sustainability': return <Leaf className="w-5 h-5" />;
      case 'FinTech & Digital Banking': return <DollarSign className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'immediate': return <Clock className="w-4 h-4 text-green-500" />;
      case 'within-week': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'within-month': return <Clock className="w-4 h-4 text-orange-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'immediate': return 'Available Now';
      case 'within-week': return 'Within 1 Week';
      case 'within-month': return 'Within 1 Month';
      default: return 'Contact for Availability';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark">
      <SEO 
        title="Enhanced Tech Services - Zion Tech Group" 
        description="Discover cutting-edge AI, cybersecurity, cloud, blockchain, and emerging technology services. Expert solutions for modern enterprises."
        keywords="AI services, cybersecurity, cloud solutions, blockchain, quantum computing, metaverse, sustainability, fintech"
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Tech Services
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge AI, cybersecurity, blockchain, quantum computing, and emerging technology solutions. 
            Expert services delivered globally with proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-blue-light border-b border-zion-blue">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-zion-slate-light">Speak with our technology experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Globe className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <Users className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {ENHANCED_SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>

            <div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $10K</SelectItem>
                  <SelectItem value="medium">$10K - $25K</SelectItem>
                  <SelectItem value="high">Over $25K</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={availability} onValueChange={setAvailability}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Availability</SelectItem>
                  <SelectItem value="immediate">Available Now</SelectItem>
                  <SelectItem value="within-week">Within 1 Week</SelectItem>
                  <SelectItem value="within-month">Within 1 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-zion-cyan text-sm">
              {filteredServices.length} services found
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium">{service.category}</span>
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                    {service.pricingModel}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl text-white mb-2 line-clamp-2">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light font-normal">
                      /{service.pricingModel === 'subscription' ? 'month' : 'project'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="bg-zion-blue/30 rounded-lg p-3">
                  <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                  <p className="text-zion-cyan font-medium">{service.marketPrice}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-zion-cyan text-sm font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Availability and Location */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    {getAvailabilityIcon(service.availability)}
                    {getAvailabilityText(service.availability)}
                  </div>
                  <div className="flex items-center gap-1 text-zion-slate-light">
                    <Globe className="w-4 h-4" />
                    {service.location}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-zion-blue/20 rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white">{service.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-zion-cyan" />
                    <a href={service.contactInfo.website} className="text-zion-cyan hover:underline">
                      {service.contactInfo.website.replace('https://', '')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-cyan">{service.contactInfo.email}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="bg-zion-blue border-t border-zion-blue-light">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing Tiers</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Choose the right service level for your business needs. All our services come with 
              comprehensive support and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`bg-zion-blue-dark border-zion-blue-light ${
                key === 'professional' ? 'border-zion-purple/50 scale-105' : ''
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-cyan">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Our team of technology experts is ready to help you implement cutting-edge solutions 
            that drive real business results. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">+1 302 464 0950</div>
              <div className="text-zion-slate-light">Phone Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">kleber@ziontechgroup.com</div>
              <div className="text-zion-slate-light">Email Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Global</div>
              <div className="text-zion-slate-light">Service Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesPage;