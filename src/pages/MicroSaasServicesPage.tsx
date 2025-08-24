import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MICRO_SAAS_SERVICES, 
  SERVICE_CATEGORIES, 
  type MicroSaasService 
} from '@/data/microSaasServices';
import { 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  CheckCircle,
  ExternalLink,
  Play,
  FileText,
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') return `${currency}${price}/month`;
    if (model === 'yearly') return `${currency}${price}/year`;
    if (model === 'one-time') return `${currency}${price}`;
    return `${currency}${price}`;
  };

  const ServiceCard = ({ service }: { service: MicroSaasService }) => (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm hover:from-zion-blue-dark/70 hover:to-zion-slate/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20">
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
              {service.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
            {service.category}
          </Badge>
          <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan">
            {service.subcategory}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        {/* Pricing */}
        <div className="flex items-center justify-between p-3 bg-zion-blue/20 rounded-lg border border-zion-blue-light/20">
          <div>
            <div className="text-2xl font-bold text-white">
              {formatPrice(service.zionPrice, service.currency, service.pricingModel)}
            </div>
            <div className="text-sm text-zion-slate-light">
              Market: {service.currency}{service.averageMarketPrice}
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-600 text-white">
              Save {service.savings}%
            </Badge>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
          <div className="grid grid-cols-2 gap-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                <CheckCircle className="w-3 h-3 text-zion-cyan" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                <TrendingUp className="w-3 h-3 text-zion-cyan" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-zion-slate-light">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span>{service.rating}</span>
            <span>({service.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-zion-cyan" />
            <span>AI Score: {service.aiScore}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            asChild
          >
            <Link to={service.contactLink}>
              Get Started
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </Button>
          
          {service.demoLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <a href={service.demoLink} target="_blank" rel="noopener noreferrer">
                <Play className="w-3 h-3" />
              </a>
            </Button>
          )}
          
          {service.documentationLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <a href={service.documentationLink} target="_blank" rel="noopener noreferrer">
                <FileText className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEO 
        title="Micro SAAS Services & AI Solutions - Zion Tech Group" 
        description="Discover cutting-edge AI services, IT solutions, and micro SAAS tools. Save up to 55% on enterprise-grade technology solutions."
        keywords="AI services, IT consulting, micro SAAS, cloud migration, cybersecurity, DevOps automation"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-zion-cyan" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Micro SAAS & AI Services
              </h1>
              <Sparkles className="w-8 h-8 text-zion-cyan" />
            </div>
            
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions, professional IT services, and affordable micro SAAS tools. 
              <span className="text-zion-cyan font-semibold"> Save up to 55% </span> 
              on enterprise-grade technology solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple">55%</div>
                <div className="text-zion-slate-light">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"
                asChild
              >
                <Link to="/contact">
                  Get Free Consultation
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"
                asChild
              >
                <Link to="/request-quote">
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('all')}
                    className={selectedCategory === 'all' ? 'bg-zion-purple text-white' : 'border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'}
                  >
                    All Services
                  </Button>
                  {SERVICE_CATEGORIES.map((category) => (
                    <Button
                      key={category.name}
                      variant={selectedCategory === category.name ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category.name)}
                      className={selectedCategory === category.name ? 'bg-zion-purple text-white' : 'border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'}
                    >
                      {category.icon} {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-slate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Our Experts
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="tel:+13024640950">
                  <Globe className="w-5 h-5 mr-2" />
                  Call +1 (302) 464-0950
                </a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-level security and compliance for your business data</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-zion-slate-light">Cutting-edge artificial intelligence for maximum efficiency</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-zion-slate-light">Round-the-clock expert support and consultation</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}