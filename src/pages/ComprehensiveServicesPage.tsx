import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, ComprehensiveService } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Cloud,
  Brain,
  Server
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-6 w-6" />,
  "Cloud & DevOps": <Cloud className="h-6 w-6" />,
  "Cybersecurity": <Shield className="h-6 w-6" />,
  "Data & Analytics": <BarChart3 className="h-6 w-6" />,
  "Web & Mobile Development": <Smartphone className="h-6 w-6" />,
  "Digital Transformation": <TrendingUp className="h-6 w-6" />,
  "Blockchain & Web3": <Code className="h-6 w-6" />,
  "IoT & Edge Computing": <Server className="h-6 w-6" />
};

const pricingModelColors = {
  "one-time": "bg-blue-100 text-blue-800",
  "monthly": "bg-green-100 text-green-800",
  "hourly": "bg-yellow-100 text-yellow-800",
  "project-based": "bg-purple-100 text-purple-800"
};

const supportLevelColors = {
  "basic": "bg-gray-100 text-gray-800",
  "premium": "bg-blue-100 text-blue-800",
  "enterprise": "bg-purple-100 text-purple-800"
};

export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES] || [];
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000' },
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-', label: 'Over $10,000' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. From AI chatbots to cloud optimization, cybersecurity to blockchain development."
        keywords="AI services, IT consulting, cloud services, cybersecurity, data analytics, web development, blockchain, IoT, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+13024640950" className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light">
                <Phone className="h-4 w-4" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light">
                <Mail className="h-4 w-4" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/10 border-zion-blue-light text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="bg-white/10 border-zion-blue-light text-white">
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>{subcategory}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-white/10 border-zion-blue-light text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zion-slate-light text-lg">No services match your current filters.</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setPriceRange('all');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">Your trusted partner for innovative technology solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">Cutting-edge AI, blockchain, and emerging technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with years of industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">Enterprise-grade solutions with comprehensive support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: ComprehensiveService }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {categoryIcons[service.category as keyof typeof categoryIcons]}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-zion-slate-light">{service.rating}</span>
            <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>
        
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Pricing and Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-left">
            <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
            <div className="text-sm text-zion-slate-light">
              {service.pricingModel === 'monthly' ? '/month' : 'one-time'}
            </div>
          </div>
          <div className="text-right">
            <Badge className={`text-xs ${pricingModelColors[service.pricingModel]}`}>
              {service.pricingModel.replace('-', ' ')}
            </Badge>
            <div className="text-xs text-zion-slate-light mt-1">
              Market: {service.marketPrice}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
              {tag}
            </Badge>
          ))}
          {service.tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
              +{service.tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* Key Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-zion-slate-light">
                <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-xs text-zion-slate-light text-center">
                +{service.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="flex items-center gap-1 text-zion-slate-light">
            <Clock className="h-3 w-3" />
            <span>Delivery: {service.estimatedDelivery}</span>
          </div>
          <div className="flex items-center gap-1 text-zion-slate-light">
            <Shield className="h-3 w-3" />
            <span>Support: {service.supportLevel}</span>
          </div>
        </div>

        {/* Benefits Preview */}
        {isExpanded && (
          <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
            <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
            <ul className="space-y-1">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-zion-slate-light">
                  <ArrowRight className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white"
            onClick={() => window.open(service.contactLink, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </div>

        {/* AI Score */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-zion-purple" />
            <span className="text-xs text-zion-slate-light">AI Score: {service.aiScore}</span>
          </div>
          <div className="text-xs text-zion-slate-light">
            {service.subcategory}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}