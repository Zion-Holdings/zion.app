import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Code,
  MessageSquare,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';
import { 
  MICRO_SAAS_SERVICES, 
  getServiceByCategory, 
  getFeaturedServices,
  searchServices,
  type MicroSaasService 
} from '@/data/microSaasServices';

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)))];
  const subcategories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.subcategory)))];

  const filteredServices = useMemo(() => {
    let services = MICRO_SAAS_SERVICES;

    if (searchQuery) {
      services = searchServices(searchQuery);
    }

    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    if (selectedSubcategory !== 'all') {
      services = services.filter(service => service.subcategory === selectedSubcategory);
    }

    return services;
  }, [searchQuery, selectedCategory, selectedSubcategory]);

  const featuredServices = getFeaturedServices();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="h-6 w-6" />;
      case 'IT Services':
        return <Code className="h-6 w-6" />;
      case 'Business Intelligence':
        return <BarChart3 className="h-6 w-6" />;
      case 'Digital Marketing':
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  const getSubcategoryIcon = (subcategory: string) => {
    switch (subcategory) {
      case 'Content Generation':
        return <MessageSquare className="h-4 w-4" />;
      case 'Developer Tools':
        return <Code className="h-4 w-4" />;
      case 'Conversational AI':
        return <MessageSquare className="h-4 w-4" />;
      case 'Cloud Solutions':
        return <Cloud className="h-4 w-4" />;
      case 'Cybersecurity':
        return <Shield className="h-4 w-4" />;
      case 'Analytics':
        return <BarChart3 className="h-4 w-4" />;
      case 'SEO Services':
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, business intelligence, and digital marketing tools."
        keywords="micro SAAS, AI services, IT solutions, business intelligence, digital marketing, Zion Tech Group"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple-dark/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5 opacity-20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to comprehensive IT services, 
              we provide everything you need to scale and succeed in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-zion-slate-light h-12"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-light text-white px-8 h-12"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 bg-background/95">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
                Our most popular and highly-rated micro SAAS solutions that are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <Card key={service.id} className="bg-card/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-zion-purple/20 text-zion-purple">
                        {getCategoryIcon(service.category)}
                      </div>
                      <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                        {getSubcategoryIcon(service.subcategory)}
                        {service.subcategory}
                      </Badge>
                    </div>

                    <div className="pt-4 border-t border-zion-purple/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-zion-slate-light">Starting at:</span>
                        <span className="text-2xl font-bold text-zion-cyan">
                          {service.pricing.currency}{service.pricing.starter}
                          <span className="text-sm text-zion-slate-light">/{service.pricing.billing}</span>
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"
                          asChild
                        >
                          <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white"
                          asChild
                        >
                          <a href={service.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section className="py-16 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Services
              </h2>
              <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
                Browse our complete catalog of micro SAAS services and find the perfect solution for your business needs.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-zion-cyan" />
                <span className="text-white font-medium">Filters:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-zion-purple/20">
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select Subcategory" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                  {subcategories.map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory} className="text-white hover:bg-zion-purple/20">
                      {subcategory === 'all' ? 'All Subcategories' : subcategory}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-card/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-zion-purple/20 text-zion-purple">
                        {getCategoryIcon(service.category)}
                      </div>
                      {service.featured && (
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                        {getSubcategoryIcon(service.subcategory)}
                        {service.subcategory}
                      </Badge>
                      {service.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zion-purple/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-zion-slate-light">Starting at:</span>
                        <span className="text-2xl font-bold text-zion-cyan">
                          {service.pricing.currency}{service.pricing.starter}
                          <span className="text-sm text-zion-slate-light">/{service.pricing.billing}</span>
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"
                          asChild
                        >
                          <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white"
                          asChild
                        >
                          <a href={service.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </a>
                        </Button>
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
                  className="mt-4 border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Contact our team to learn more about our micro SAAS services and how they can transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg border border-white/20">
                <Mail className="h-8 w-8 text-zion-cyan mb-3" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg border border-white/20">
                <Phone className="h-8 w-8 text-zion-cyan mb-3" />
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <a 
                  href="tel:+13024640950" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg border border-white/20">
                <MapPin className="h-8 w-8 text-zion-cyan mb-3" />
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-zion-slate-light text-sm text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}