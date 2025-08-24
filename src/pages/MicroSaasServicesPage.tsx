import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
  BookOpen, 
  Code, 
  Shield,
  Zap,
  Brain,
  Database,
  Lock,
  Network,
  Cloud,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory, getServicesByTag } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  const categories = ['all', 'AI', 'IT', 'Development', 'Analytics', 'Security', 'Automation', 'Integration', 'Consulting'];
  const allTags = Array.from(new Set(MICRO_SAAS_SERVICES.flatMap(service => service.tags)));

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
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(service =>
        selectedTags.some(tag => service.tags.includes(tag))
      );
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-6 w-6" />;
      case 'IT': return <Cloud className="h-6 w-6" />;
      case 'Development': return <Code className="h-6 w-6" />;
      case 'Analytics': return <Database className="h-6 w-6" />;
      case 'Security': return <Shield className="h-6 w-6" />;
      case 'Automation': return <Zap className="h-6 w-6" />;
      case 'Integration': return <Network className="h-6 w-6" />;
      case 'Consulting': return <Users className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      case 'Analytics': return 'from-orange-500 to-red-500';
      case 'Security': return 'from-red-500 to-pink-500';
      case 'Automation': return 'from-indigo-500 to-purple-500';
      case 'Integration': return 'from-teal-500 to-blue-500';
      case 'Consulting': return 'from-gray-500 to-slate-500';
      default: return 'from-zion-purple to-zion-cyan';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS services for AI, IT, development, analytics, security, and automation. Transform your business with cutting-edge solutions."
        keywords="micro SAAS, AI services, IT services, development tools, analytics, security, automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-zion-cyan/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-zion-cyan mr-4 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our cutting-edge micro SAAS solutions. From AI-powered automation to enterprise-grade security, 
            we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-black font-semibold px-8 py-3">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3">
              <BookOpen className="h-5 w-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}</div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple">8</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">4.8</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-8 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <Input
                placeholder="Search services by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-zion-slate-dark/50 border-zion-purple/30 text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <span className="text-white font-medium flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Categories:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-black hover:bg-zion-cyan-light'
                      : 'border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </Button>
              ))}
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-white font-medium">Popular Tags:</span>
              {allTags.slice(0, 15).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagToggle(tag)}
                  className={`${
                    selectedTags.includes(tag)
                      ? 'bg-zion-purple text-white hover:bg-zion-purple-light'
                      : 'border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Our Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              {filteredServices.length} services found. Each solution is designed to solve specific business challenges and drive growth.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTags([]);
              }} className="bg-zion-cyan hover:bg-zion-cyan-light text-black">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-zion-slate-dark/50 border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="flex items-center gap-2">
                        {service.freeTier && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Free Tier
                          </Badge>
                        )}
                        {service.apiAvailable && (
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            API
                          </Badge>
                        )}
                        <Badge className={`${
                          service.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          'bg-gray-500/20 text-gray-400 border-gray-500/30'
                        }`}>
                          {service.status}
                        </Badge>
                      </div>
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
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-zion-purple/20 text-zion-slate-light border-zion-purple/30">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-zion-slate/50 text-zion-slate-light">
                            +{service.features.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Pricing</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-white">
                          <span className="text-2xl font-bold">{service.pricing.currency}{service.pricing.monthly}</span>
                          <span className="text-zion-slate-light text-sm">/month</span>
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          <div>Yearly: {service.pricing.currency}{service.pricing.yearly}</div>
                          <div>Enterprise: {service.pricing.currency}{service.pricing.enterprise}</div>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-zion-slate-light'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 pt-0">
                    <div className="flex flex-wrap gap-2 w-full">
                      <Button asChild className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-black">
                        <a href={service.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Service
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                        <a href={service.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                    
                    <div className="flex gap-2 w-full">
                      <Button asChild variant="outline" size="sm" className="flex-1 border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                        <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Docs
                        </a>
                      </Button>
                      {service.apiAvailable && (
                        <Button asChild variant="outline" size="sm" className="flex-1 border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                          <a href={`${service.documentation}/api`} target="_blank" rel="noopener noreferrer">
                            <Code className="h-4 w-4 mr-2" />
                            API
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS services to drive growth, 
            improve efficiency, and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light font-semibold px-8 py-3">
              <ArrowRight className="h-5 w-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple font-semibold px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}