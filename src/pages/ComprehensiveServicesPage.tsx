import React, { useState } from 'react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '@/data/expandedServices';
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
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Database,
  Code,
  Bot,
  Cloud,
  Lock,
  BarChart3,
  Smartphone,
  Lightbulb,
  Eye
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI Services": <Bot className="w-6 h-6" />,
  "Cloud Services": <Cloud className="w-6 h-6" />,
  "Cybersecurity": <Shield className="w-6 h-6" />,
  "Data Services": <Database className="w-6 h-6" />,
  "Development": <Code className="w-6 h-6" />,
  "Automation": <Code className="w-6 h-6" />,
  "Consulting": <Lightbulb className="w-6 h-6" />,
  "Emerging Tech": <TrendingUp className="w-6 h-6" />
};

const subcategoryIcons: Record<string, React.ReactNode> = {
  "Chatbots": <Bot className="w-4 h-4" />,
  "Content Creation": <Code className="w-4 h-4" />,
  "Analytics": <BarChart3 className="w-4 h-4" />,
  "Machine Learning": <Brain className="w-4 h-4" />,
  "Migration": <ArrowRight className="w-4 h-4" />,
  "DevOps": <Zap className="w-4 h-4" />,
  "Serverless": <Cloud className="w-4 h-4" />,
  "Infrastructure": <Server className="w-4 h-4" />,
  "Audit": <Shield className="w-4 h-4" />,
  "Zero Trust": <Lock className="w-4 h-4" />,
  "Incident Response": <AlertTriangle className="w-4 h-4" />,
  "Compliance": <CheckCircle className="w-4 h-4" />,
  "Data Engineering": <Database className="w-4 h-4" />,
  "Real-time Analytics": <BarChart3 className="w-4 h-4" />,
  "Business Intelligence": <TrendingUp className="w-4 h-4" />,
  "Web Development": <Globe className="w-4 h-4" />,
  "Mobile Development": <Smartphone className="w-4 h-4" />,
  "E-commerce": <ShoppingCart className="w-4 h-4" />,
  "Custom Applications": <Code className="w-4 h-4" />,
  "Business Process": <Code className="w-4 h-4" />,
  "RPA": <Bot className="w-4 h-4" />,
  "Workflow": <Code className="w-4 h-4" />,
  "Integration": <Link className="w-4 h-4" />,
  "Digital Transformation": <TrendingUp className="w-4 h-4" />,
  "System Modernization": <RefreshCw className="w-4 h-4" />,
  "Strategy": <TrendingUp className="w-4 h-4" />,
  "Change Management": <Users className="w-4 h-4" />,
  "Blockchain": <Database className="w-4 h-4" />,
  "IoT": <Globe className="w-4 h-4" />,
  "AR/VR": <Eye className="w-4 h-4" />,
  "Edge Computing": <Database className="w-4 h-4" />
};

// Import missing icons
import { 
  Brain, 
  ArrowRight, 
  Server, 
  AlertTriangle, 
  ShoppingCart, 
  Link, 
  RefreshCw, 
  Users
} from 'lucide-react';

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);

  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    const matchesPrice = service.price && service.price >= priceRange[0] && service.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  const getSubcategories = (category: string) => {
    if (category === 'all') return [];
    const categoryKey = Object.keys(SERVICE_SUBCATEGORIES).find(key => 
      SERVICE_CATEGORIES.find(cat => cat.id === key)?.name === category
    );
    return categoryKey ? SERVICE_SUBCATEGORIES[categoryKey] : [];
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const getServiceBenefits = (service: ProductListing) => {
    const benefits: string[] = [];
    
    if (service.aiScore && service.aiScore >= 90) {
      benefits.push("High AI Integration Score");
    }
    if (service.featured) {
      benefits.push("Featured Service");
    }
    if (service.rating && service.rating >= 4.8) {
      benefits.push("Top Rated");
    }
    if (service.availability === "Immediate") {
      benefits.push("Immediate Availability");
    }
    if (service.location === "Global") {
      benefits.push("Global Service");
    }
    
    return benefits;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS services, IT solutions, and AI services. From AI development to cybersecurity, we provide enterprise-grade solutions at competitive prices."
        keywords="AI services, IT consulting, cybersecurity, cloud migration, data analytics, blockchain development, IoT solutions, AR/VR development"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Enterprise-grade micro SAAS solutions, IT services, and AI innovations delivered globally with competitive pricing and expert support.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>Middletown, DE 19709</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                View Pricing Guide
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white text-gray-900"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white text-gray-900">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="bg-white text-gray-900">
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories(selectedCategory).map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">Price:</span>
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-20 bg-white text-gray-900"
              />
              <span className="text-white">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 15000])}
                className="w-20 bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Available Services ({filteredServices.length})
          </h2>
          <p className="text-gray-600">
            Professional IT and AI services with competitive pricing and global availability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {service.featured && (
                  <Badge className="absolute top-2 right-2 bg-zion-purple text-white">
                    Featured
                  </Badge>
                )}
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {service.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">{service.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviewCount})</span>
                      </div>
                      {service.aiScore && (
                        <Badge variant="outline" className="text-xs">
                          AI Score: {service.aiScore}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price || 0)}
                    </div>
                    <div className="text-sm text-gray-500">Starting Price</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                  {service.description}
                </CardDescription>

                {/* Subcategory */}
                {service.subcategory && (
                  <div className="flex items-center space-x-2 mb-3">
                    {subcategoryIcons[service.subcategory] || <Code className="w-4 h-4" />}
                    <Badge variant="outline" className="text-xs">
                      {service.subcategory}
                    </Badge>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  {getServiceBenefits(service).map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2 text-sm text-green-600 mb-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.availability}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Location: {service.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with the agility and pricing of a boutique consultancy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Services available worldwide with local expertise and global standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality or security</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security standards and compliance certifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and satisfied clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive IT and AI services can drive your digital transformation
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Mail className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>

          <div className="mt-8 text-zion-slate-light">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}