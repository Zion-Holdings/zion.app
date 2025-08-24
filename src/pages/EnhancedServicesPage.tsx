import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp,
  Shield,
  Cloud,
  Database,
  Network, 
  Monitor,
  Eye,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'starter' && service.price && service.price <= 4999) ||
                        (priceRange === 'professional' && service.price && service.price > 4999 && service.price <= 14999) ||
                        (priceRange === 'enterprise' && service.price && service.price > 14999);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai marketing':
        return <TrendingUp className="w-5 h-5" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'cloud services':
      case 'devops':
        return <Cloud className="w-5 h-5" />;
      case 'data analytics':
      case 'data management':
      case 'iot & analytics':
        return <Database className="w-5 h-5" />;
      case 'blockchain':
        return <Network className="w-5 h-5" />;
      case 'edge computing':
        return <Monitor className="w-5 h-5" />;
      case 'quantum computing':
        return <Monitor className="w-5 h-5" />;
      case 'ar/vr':
        return <Eye className="w-5 h-5" />;
      case 'fintech':
        return <DollarSign className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getPriceColor = (price: number) => {
    if (price <= 4999) return 'text-green-500';
    if (price <= 14999) return 'text-blue-500';
    return 'text-purple-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Enhanced IT & AI Services - ZionTech Group" 
        description="Discover our comprehensive range of innovative IT services, AI solutions, cybersecurity, cloud services, and cutting-edge technology solutions."
        keywords="AI services, IT solutions, cybersecurity, cloud services, blockchain, quantum computing, metaverse, fintech"
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Cutting-edge technology solutions designed to transform your business. From AI automation to quantum computing, 
            we deliver innovative services that drive growth and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
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
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="starter">Starter ($1,999 - $4,999)</SelectItem>
                <SelectItem value="professional">Professional ($5,000 - $14,999)</SelectItem>
                <SelectItem value="enterprise">Enterprise ($15,000+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Info */}
      <div className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([tier, info]) => (
              <Card key={tier} className="bg-zion-blue border-zion-blue-light text-white">
                <CardHeader>
                  <CardTitle className="text-zion-cyan capitalize">{tier}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">
                    ${info.min.toLocaleString()} - ${info.max.toLocaleString()}
                  </div>
                  <div className="space-y-2">
                    {tier === 'starter' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Essential features for small businesses
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Basic support and documentation
                        </div>
                      </>
                    )}
                    {tier === 'professional' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Advanced features and customization
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Priority support and training
                        </div>
                      </>
                    )}
                    {tier === 'enterprise' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Custom enterprise solutions
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Dedicated support team
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-zion-purple/20 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    {service.featured && (
                      <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zion-blue text-zion-cyan border-zion-blue-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between">
                      <div className={`text-2xl font-bold ${getPriceColor(service.price || 0)}`}>
                        ${service.price?.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Delivery: {service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>Location: {service.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>AI Score: {service.aiScore}/100</span>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                        <Mail className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions that drive real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}