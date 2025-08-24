import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
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
  Brain, 
  Cloud, 
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Users,
  Building,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price && service.price < 5000) ||
                        (selectedPriceRange === 'medium' && service.price && service.price >= 5000 && service.price < 15000) ||
                        (selectedPriceRange === 'high' && service.price && service.price >= 15000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Automation': <Brain className="w-5 h-5" />,
      'Content AI': <Zap className="w-5 h-5" />,
      'Predictive Analytics': <TrendingUp className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Threat Intelligence': <Lock className="w-5 h-5" />,
      'Compliance': <Shield className="w-5 h-5" />,
      'Cloud Management': <Cloud className="w-5 h-5" />,
      'DevOps': <Zap className="w-5 h-5" />,
      'Containerization': <Database className="w-5 h-5" />,
      'Data Engineering': <Database className="w-5 h-5" />,
      'Data Governance': <Database className="w-5 h-5" />,
      'Business Intelligence': <TrendingUp className="w-5 h-5" />,
      'IoT': <Smartphone className="w-5 h-5" />,
      'Edge Computing': <Zap className="w-5 h-5" />,
      'Blockchain': <Lock className="w-5 h-5" />,
      'Web3': <Globe className="w-5 h-5" />,
      'Digital Transformation': <Building className="w-5 h-5" />,
      'System Modernization': <Zap className="w-5 h-5" />,
      'Healthcare AI': <Users className="w-5 h-5" />,
      'FinTech': <TrendingUp className="w-5 h-5" />,
      'Retail AI': <Building className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise IT & AI Services - Zion Tech Group" 
        description="Comprehensive enterprise IT services, AI solutions, cybersecurity, cloud management, and digital transformation services. Expert consulting and implementation worldwide."
        keywords="enterprise IT services, AI solutions, cybersecurity, cloud management, digital transformation, IT consulting"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity, 
            we deliver enterprise-grade services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Address</p>
              <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
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
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $5,000</SelectItem>
                <SelectItem value="medium">$5,000 - $15,000</SelectItem>
                <SelectItem value="high">Over $15,000</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zion-blue/10 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm text-zion-slate">
                          {service.category}
                        </CardDescription>
                      </div>
                    </div>
                    {service.featured && (
                      <Badge className="bg-zion-purple text-white">Featured</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zion-slate text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-zion-slate">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-blue">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        AI Score: {service.aiScore}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-zion-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Service Pricing Tiers</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Choose the right service level for your business needs. All tiers include our expert consultation and implementation support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`text-center ${key === 'professional' ? 'border-zion-purple shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-purple mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-blue hover:bg-zion-blue-dark">
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate">Serving clients worldwide with 24/7 support and local expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-grade security and compliance with industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation First</h3>
              <p className="text-zion-slate">Cutting-edge AI and emerging technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise IT and AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}