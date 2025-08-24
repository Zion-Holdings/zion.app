import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
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
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowRight,
  Play,
  Mail,
  ExternalLink
} from 'lucide-react';
import { 
  MICRO_SAAS_SERVICES, 
  SERVICE_CATEGORIES, 
  getServicesByCategory,
  getPopularServices,
  getNewServices,
  type MicroSaasService 
} from '@/data/microSaasServices';

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory);
      if (category) {
        filtered = filtered.filter(service => service.category === category.name);
      }
    }

    // Filter by pricing model
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricing);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'ai-score':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') return `${currency}${price}/month`;
    if (model === 'yearly') return `${currency}${price}/year`;
    if (model === 'usage-based') return `${currency}${price}/usage`;
    return `${currency}${price}`;
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS services, IT solutions, and AI-powered tools for your business. Expert consulting, development, and automation services."
        keywords="micro SAAS, AI services, IT consulting, business automation, cloud migration, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
        {/* Hero Section with Futuristic Design */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Micro SAAS Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with cutting-edge AI services, IT solutions, and intelligent automation tools
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-sm">
                  🤖 AI-Powered Solutions
                </Badge>
                <Badge variant="secondary" className="bg-zion-blue/20 text-zion-cyan border-zion-blue/30 px-4 py-2 text-sm">
                  💻 IT Infrastructure
                </Badge>
                <Badge variant="secondary" className="bg-zion-cyan/20 text-white border-zion-cyan/30 px-4 py-2 text-sm">
                  ⚡ Business Automation
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-zion-blue-dark/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                    <Input
                      placeholder="Search services, features, or use cases..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light focus:border-zion-cyan"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    <SelectItem value="all">All Categories</SelectItem>
                    {SERVICE_CATEGORIES.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="All Pricing" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    <SelectItem value="all">All Pricing Models</SelectItem>
                    <SelectItem value="monthly">Monthly Subscription</SelectItem>
                    <SelectItem value="yearly">Yearly Subscription</SelectItem>
                    <SelectItem value="one-time">One-time Payment</SelectItem>
                    <SelectItem value="usage-based">Usage-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <span className="text-zion-slate-light">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="ai-score">AI Score</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-zion-slate-light">
                  {filteredServices.length} services found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Featured Services
                </span>
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our most popular and innovative solutions trusted by businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {popularServices.map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        Popular
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-zion-cyan">
                          {formatPrice(service.price, service.currency, service.pricingModel)}
                        </span>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-zion-blue/20 text-zion-slate-light text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        {service.demoLink && (
                          <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                  All Services
                </span>
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Explore our comprehensive collection of micro SAAS services and solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        {service.isPopular && (
                          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                            Popular
                          </Badge>
                        )}
                        {service.isNew && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                            New
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-zion-cyan">
                          {formatPrice(service.price, service.currency, service.pricingModel)}
                        </span>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-zion-slate-light">
                        <p><strong>Market Price:</strong> {service.marketPrice}</p>
                        <p><strong>Target:</strong> {service.targetAudience.slice(0, 2).join(', ')}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-zion-blue/20 text-zion-slate-light text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        {service.demoLink && (
                          <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zion-slate-light text-lg">No services found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPricing('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our experts to discuss your specific needs and find the perfect solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}