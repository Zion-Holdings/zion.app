import React, { useState } from 'react';
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
  Clock, 
  TrendingUp, 
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Users,
  Shield,
  BarChart3,
  Code,
  Cloud,
  Lock,
  Settings,
  Link as LinkIcon
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory, getFeaturedServices, getPopularServices, getNewServices } from '@/data/microSaasServices';

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  const categories = ['all', 'AI Services', 'IT Services', 'Micro SAAS', 'Development', 'Analytics', 'Security', 'Automation', 'Integration'];
  const pricingModels = ['all', 'one-time', 'subscription', 'usage-based', 'enterprise'];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const featuredServices = getFeaturedServices();
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.pricingModel === 'subscription') {
      return `$${service.monthlyPrice}/month`;
    } else if (service.pricingModel === 'one-time') {
      return `$${service.price.toLocaleString()}`;
    } else if (service.pricingModel === 'usage-based') {
      return 'Usage-based';
    } else {
      return 'Contact us';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI Services': <Zap className="h-5 w-5" />,
      'IT Services': <Cloud className="h-5 w-5" />,
      'Micro SAAS': <Code className="h-5 w-5" />,
      'Development': <Code className="h-5 w-5" />,
      'Analytics': <BarChart3 className="h-5 w-5" />,
      'Security': <Shield className="h-5 w-5" />,
      'Automation': <Settings className="h-5 w-5" />,
      'Integration': <LinkIcon className="h-5 w-5" />
    };
    return icons[category] || <Code className="h-5 w-5" />;
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services & IT Solutions - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, AI solutions, IT services, and business automation tools. Professional solutions for modern businesses."
        keywords="micro SAAS, AI services, IT services, business automation, cloud migration, cybersecurity, development services"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Micro SAAS Services & 
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                  IT Solutions
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge micro SAAS solutions, AI-powered services, 
                and professional IT consulting. From automation to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Users className="h-5 w-5 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">25+</div>
                <div className="text-zion-slate-light">Micro SAAS Solutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-purple-light mb-2">500+</div>
                <div className="text-zion-slate-light">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-purple-light mb-2">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most popular and highly-rated services that businesses trust for their digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-zion-purple mb-2">
                        {getPricingDisplay(service)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Market average: {service.marketPrice}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardContent className="pt-0">
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
                        Get Started
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search services, features, or benefits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-zion-purple/20 text-white placeholder:text-zion-slate-light"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white/10 border-zion-purple/20 text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                  <SelectTrigger className="w-full md:w-48 bg-white/10 border-zion-purple/20 text-white">
                    <SelectValue placeholder="All Pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    {pricingModels.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model === 'all' ? 'All Pricing' : model === 'one-time' ? 'One-time' : model === 'subscription' ? 'Subscription' : model === 'usage-based' ? 'Usage-based' : 'Enterprise'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-12">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="ai">AI Services</TabsTrigger>
                <TabsTrigger value="it">IT Services</TabsTrigger>
                <TabsTrigger value="saas">Micro SAAS</TabsTrigger>
                <TabsTrigger value="dev">Development</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>

              {['ai', 'it', 'saas', 'dev', 'security'].map((tab) => (
                <TabsContent key={tab} value={tab} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices
                      .filter(service => {
                        if (tab === 'ai') return service.category === 'AI Services';
                        if (tab === 'it') return service.category === 'IT Services';
                        if (tab === 'saas') return service.category === 'Micro SAAS';
                        if (tab === 'dev') return service.category === 'Development';
                        if (tab === 'security') return service.category === 'Security';
                        return true;
                      })
                      .map((service) => (
                        <ServiceCard key={service.id} service={service} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you choose the perfect solutions and implement them successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                <ArrowRight className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Play className="h-5 w-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ServiceCard({ service }: { service: MicroSaasService }) {
  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.pricingModel === 'subscription') {
      return `$${service.monthlyPrice}/month`;
    } else if (service.pricingModel === 'one-time') {
      return `$${service.price.toLocaleString()}`;
    } else if (service.pricingModel === 'usage-based') {
      return 'Usage-based';
    } else {
      return 'Contact us';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-zion-blue-light/20 hover:border-zion-purple/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">{service.icon}</div>
          <div className="flex gap-2">
            {service.isNew && (
              <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                New
              </Badge>
            )}
            {service.isPopular && (
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                Popular
              </Badge>
            )}
            {service.isFeatured && (
              <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                Featured
              </Badge>
            )}
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-zion-purple transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="mb-4">
          <div className="text-xl font-bold text-zion-purple mb-1">
            {getPricingDisplay(service)}
          </div>
          <div className="text-sm text-muted-foreground">
            Market: {service.marketPrice}
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardContent className="pt-0">
        <div className="flex gap-2">
          <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
            Get Started
          </Button>
          <Button variant="outline" size="icon">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}