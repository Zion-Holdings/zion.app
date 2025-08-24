import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { MICRO_SAAS_SERVICES, MicroSaasService } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Sparkles, 
  Zap, 
  Shield, 
  Brain, 
  Code, 
  Database, 
  BarChart3, 
  Link as LinkIcon, 
  UserCheck, 
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Filter and sort services
  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.starter - b.pricing.starter;
      case 'price-high':
        return b.pricing.starter - a.pricing.starter;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'ai-score':
        return (b.aiScore || 0) - (a.aiScore || 0);
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category)))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="w-4 h-4" />;
      case 'IT': return <Database className="w-4 h-4" />;
      case 'Development': return <Code className="w-4 h-4" />;
      case 'Analytics': return <BarChart3 className="w-4 h-4" />;
      case 'Security': return <Shield className="w-4 h-4" />;
      case 'Automation': return <Zap className="w-4 h-4" />;
      case 'Integration': return <LinkIcon className="w-4 h-4" />;
      case 'Consulting': return <UserCheck className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'IT': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Development': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Analytics': return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'Security': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Automation': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Integration': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'Consulting': return 'bg-gradient-to-r from-teal-500 to-blue-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services & Solutions | ZION TECH GROUP"
        description="Transform your business with our comprehensive suite of micro SAAS solutions. AI, IT, Development, Analytics, Security, and more."
        keywords="micro saas, ai services, it solutions, development services, business automation, zion tech group"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-float-delayed"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 text-zion-purple-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Micro SAAS Services &{' '}
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of intelligent micro SAAS solutions. 
                From AI-powered automation to enterprise-grade security, we've got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                    <Input
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-zion-slate-dark/70 border-zion-slate-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan/50"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-zion-slate-dark/70 border-zion-slate-light/20 text-white">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-slate-dark border-zion-slate-light/20">
                      {categories.map(category => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-zion-slate-light/10">
                          {category === 'all' ? 'All Categories' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-zion-slate-dark/70 border-zion-slate-light/20 text-white">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-slate-dark border-zion-slate-light/20">
                      <SelectItem value="name" className="text-white hover:bg-zion-slate-light/10">Name A-Z</SelectItem>
                      <SelectItem value="price-low" className="text-white hover:bg-zion-slate-light/10">Price: Low to High</SelectItem>
                      <SelectItem value="price-high" className="text-white hover:bg-zion-slate-light/10">Price: High to Low</SelectItem>
                      <SelectItem value="rating" className="text-white hover:bg-zion-slate-light/10">Highest Rated</SelectItem>
                      <SelectItem value="ai-score" className="text-white hover:bg-zion-slate-light/10">AI Score</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover Our Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                {filteredServices.length} services found • Tailored solutions for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-zion-slate-dark/50 border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`${getCategoryColor(service.category)} text-white border-0`}>
                        {getCategoryIcon(service.category)}
                        <span className="ml-2">{service.category}</span>
                      </Badge>
                      {service.aiScore && (
                        <div className="flex items-center gap-1 text-zion-cyan">
                          <Brain className="w-4 h-4" />
                          <span className="text-sm font-semibold">{service.aiScore}</span>
                        </div>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-slate-light leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="border-t border-zion-slate-light/20 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-zion-slate-light">Starting from</span>
                        <span className="text-2xl font-bold text-zion-cyan">
                          {service.pricing.currency}{service.pricing.starter}
                        </span>
                      </div>
                      <p className="text-xs text-zion-slate-light">per {service.pricing.billing}</p>
                    </div>
                    
                    {/* Rating */}
                    {service.rating && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(service.rating!) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-zion-slate-light">
                          {service.rating} ({service.reviewCount} reviews)
                        </span>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10"
                      >
                        Learn More
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-zion-slate-dark/50 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-zion-slate-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-3xl p-12 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                  Let's discuss how our micro SAAS solutions can streamline your operations, 
                  reduce costs, and drive growth. Get in touch today!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center gap-3 text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span>Middletown DE 19709</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 text-lg font-semibold"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg font-semibold"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasServices;