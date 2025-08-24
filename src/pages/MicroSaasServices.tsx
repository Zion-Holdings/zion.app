import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MICRO_SAAS_SERVICES, 
  getServicesByCategory, 
  getFeaturedServices, 
  getNewServices,
  type MicroSaasService 
} from "@/data/microSaasServices";
import { 
  Star, 
  ExternalLink, 
  Play, 
  Shield, 
  Zap, 
  Code, 
  Brain, 
  Building,
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock
} from "lucide-react";
import { SEO } from "@/components/SEO";

const categoryIcons = {
  'AI': <Brain className="h-6 w-6" />,
  'IT': <Building className="h-6 w-6" />,
  'Development': <Code className="h-6 w-6" />,
  'Analytics': <TrendingUp className="h-6 w-6" />,
  'Security': <Shield className="h-6 w-6" />,
  'Automation': <Zap className="h-6 w-6" />,
  'Integration': <Globe className="h-6 w-6" />,
  'Consulting': <Users className="h-6 w-6" />
};

const statusColors = {
  'Live': 'bg-green-500',
  'Beta': 'bg-yellow-500',
  'Coming Soon': 'bg-blue-500'
};

export default function MicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, development tools, and enterprise solutions."
        keywords="micro SAAS, AI services, IT solutions, development tools, enterprise software, cloud services, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade services, 
            we provide everything you need to accelerate digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-white/90">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Users className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {MICRO_SAAS_SERVICES.length}+
              </div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">
                99.9%
              </div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2">
                24/7
              </div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                500+
              </div>
              <div className="text-zion-slate-light">Integrations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-zion-cyan text-zion-slate" : "border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10"}
                >
                  {category === 'all' ? 'All' : categoryIcons[category as keyof typeof categoryIcons]}
                  <span className="ml-2">{category === 'all' ? 'All' : category}</span>
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
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
            <Button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Featured Services Section */}
      <div className="py-16 bg-gradient-to-r from-zion-slate to-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most popular and highly-rated services that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedServices().slice(0, 6).map((service) => (
              <FeaturedServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* New Services Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              New & Upcoming Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead of the curve with our latest innovations and upcoming releases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getNewServices().slice(0, 6).map((service) => (
              <NewServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already accelerated their digital transformation with Zion's micro SAAS services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-white/90">
              <ExternalLink className="h-5 w-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Users className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: MicroSaasService }) {
  return (
    <Card className="group bg-white/5 backdrop-blur-sm border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-lg bg-zion-cyan/20 text-zion-cyan">
            {categoryIcons[service.category]}
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className={`${statusColors[service.status]} text-white`}>
              {service.status}
            </Badge>
            {service.whiteLabel && (
              <Badge variant="outline" className="border-zion-purple text-zion-purple">
                <Zap className="h-3 w-3 mr-1" />
                White Label
              </Badge>
            )}
          </div>
        </div>
        
        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        
        <CardDescription className="text-zion-slate-light line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Pricing */}
        <div className="bg-zion-blue-dark/30 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.pricing.monthly === 0 ? 'Custom' : `$${service.pricing.monthly}`}
            </div>
            <div className="text-sm text-zion-slate-light">
              {service.pricing.monthly === 0 ? 'Enterprise pricing' : 'per month'}
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-white mb-2">Key Features</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-zion-slate-light">
                <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-sm text-zion-cyan">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
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
            <span className="text-sm text-zion-slate-light">
              {service.rating} ({service.reviewCount})
            </span>
          </div>
          
          <div className="flex gap-2">
            {service.demoLink && (
              <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate">
                <Play className="h-4 w-4" />
              </Button>
            )}
            <Button size="sm" className="bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
              <ExternalLink className="h-4 w-4 mr-1" />
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FeaturedServiceCard({ service }: { service: MicroSaasService }) {
  return (
    <Card className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-lg bg-zion-cyan/30 text-zion-cyan">
            {categoryIcons[service.category]}
          </div>
          <Badge className="bg-zion-cyan text-zion-slate">
            Featured
          </Badge>
        </div>
        <CardTitle className="text-white">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-center bg-zion-cyan/20 rounded-lg p-3">
            <div className="text-xl font-bold text-zion-cyan">
              ${service.pricing.monthly}/mo
            </div>
          </div>
          <Button className="w-full bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
            <ArrowRight className="h-4 w-4 mr-2" />
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function NewServiceCard({ service }: { service: MicroSaasService }) {
  return (
    <Card className="bg-gradient-to-br from-zion-purple/20 to-zion-blue/20 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-lg bg-zion-purple/30 text-zion-purple">
            {categoryIcons[service.category]}
          </div>
          <Badge className="bg-zion-purple text-white">
            <Clock className="h-3 w-3 mr-1" />
            New
          </Badge>
        </div>
        <CardTitle className="text-white">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-center bg-zion-purple/20 rounded-lg p-3">
            <div className="text-xl font-bold text-zion-purple">
              ${service.pricing.monthly}/mo
            </div>
          </div>
          <Button className="w-full bg-zion-purple text-white hover:bg-zion-purple/90">
            <ArrowRight className="h-4 w-4 mr-2" />
            Early Access
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}