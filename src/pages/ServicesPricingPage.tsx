import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Check, Star, Clock, Users, DollarSign, Brain, Shield, Zap, Globe, Database, Network, HardDrive, Leaf, Eye, CreditCard, Phone, Mail, MapPin, ExternalLink, TrendingUp, Award, Zap as ZapIcon } from 'lucide-react';

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price');

  const filteredServices = useMemo(() => {
    let filtered = EXPANDED_SERVICES;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Cloud & DevOps': <Globe className="w-5 h-5" />,
      'Data & Analytics': <Database className="w-5 h-5" />,
      'Blockchain & Web3': <Network className="w-5 h-5" />,
      'IoT & Edge Computing': <HardDrive className="w-5 h-5" />,
      'Quantum Computing': <Zap className="w-5 h-5" />,
      'Green Tech & Sustainability': <Leaf className="w-5 h-5" />,
      'AR/VR & Metaverse': <Eye className="w-5 h-5" />,
      'FinTech & Digital Banking': <CreditCard className="w-5 h-5" />,
      'Healthcare Technology': <Users className="w-5 h-5" />,
      'Manufacturing & Industry 4.0': <HardDrive className="w-5 h-5" />,
      'Retail & E-commerce': <Globe className="w-5 h-5" />,
      'Education Technology': <Brain className="w-5 h-5" />,
      'Government & Public Sector': <Shield className="w-5 h-5" />
    };
    return iconMap[category] || <Globe className="w-5 h-5" />;
  };

  const getPricingTier = (price: number) => {
    if (price < 10000) return { tier: 'Starter', color: 'bg-green-100 text-green-800' };
    if (price < 25000) return { tier: 'Professional', color: 'bg-blue-100 text-blue-800' };
    if (price < 50000) return { tier: 'Enterprise', color: 'bg-purple-100 text-purple-800' };
    return { tier: 'Custom', color: 'bg-orange-100 text-orange-800' };
  };

  const getSupportLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'basic': 'bg-gray-100 text-gray-800',
      'standard': 'bg-blue-100 text-blue-800',
      'premium': 'bg-purple-100 text-purple-800',
      'enterprise': 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  const pricingStats = useMemo(() => {
    const totalServices = EXPANDED_SERVICES.length;
    const avgPrice = EXPANDED_SERVICES.reduce((sum, service) => sum + service.price, 0) / totalServices;
    const minPrice = Math.min(...EXPANDED_SERVICES.map(s => s.price));
    const maxPrice = Math.max(...EXPANDED_SERVICES.map(s => s.price));
    const highAIScore = EXPANDED_SERVICES.filter(s => s.aiScore >= 95).length;
    
    return { totalServices, avgPrice, minPrice, maxPrice, highAIScore };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Service Pricing & Comparison
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Transparent pricing for all our professional IT & AI services. Compare features, benefits, and pricing to find the perfect solution for your business.
          </p>
          
          {/* Pricing Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{pricingStats.totalServices}</div>
              <div className="text-sm text-blue-100">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">${pricingStats.avgPrice.toLocaleString()}</div>
              <div className="text-sm text-blue-100">Average Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">${pricingStats.minPrice.toLocaleString()}</div>
              <div className="text-sm text-blue-100">Starting From</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{pricingStats.highAIScore}</div>
              <div className="text-sm text-blue-100">High AI Score</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Banner */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Custom Pricing</h3>
            <p className="text-gray-600 mb-6">Contact us for personalized quotes and enterprise solutions</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-medium">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Pricing Inquiry"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Request Custom Quote
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Call for Consultation
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-green-200">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-700">Starter</CardTitle>
                <CardDescription>Under $10K</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Perfect for small businesses and startups</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Basic features
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Standard support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Quick delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Professional</CardTitle>
                <CardDescription>$10K - $25K</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Ideal for growing businesses</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    Advanced features
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    Customization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ZapIcon className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Enterprise</CardTitle>
                <CardDescription>$25K - $50K</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">For large organizations</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    Full feature set
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    Premium support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    Enterprise features
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-700">Custom</CardTitle>
                <CardDescription>$50K+</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Tailored solutions</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" />
                    Custom development
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" />
                    Dedicated team
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" />
                    Ongoing support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(category)}
                      {category}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Price (Low to High)</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="aiScore">AI Score</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-600 mt-2">
              Compare features, pricing, and benefits across all our services
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Service</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Rating</TableHead>
                  <TableHead className="font-semibold">AI Score</TableHead>
                  <TableHead className="font-semibold">Support</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map(service => {
                  const pricingTier = getPricingTier(service.price);
                  return (
                    <TableRow key={service.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-start gap-3">
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900 line-clamp-2">
                              {service.title}
                            </div>
                            <div className="text-sm text-gray-600 line-clamp-2">
                              {service.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(service.category)}
                          <span className="text-sm">{service.category}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-bold text-lg text-blue-600">
                            ${service.price.toLocaleString()}
                          </div>
                          <Badge className={pricingTier.color}>
                            {pricingTier.tier}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-sm text-gray-500">({service.reviewCount})</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                          {service.aiScore}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getSupportLevelColor(service.supportLevel)}>
                          {service.supportLevel}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Get Quote
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <div className="text-xs text-gray-500">
                            {service.availability}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our team specializes in creating tailored technology solutions that perfectly fit your business requirements. 
            Get in touch for a personalized consultation and custom pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Custom Solution Consultation"
              className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Consultation
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Call Now
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}