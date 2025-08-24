import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Play, 
  Shield, 
  Zap, 
  Globe,
  Brain,
  Database,
  Lock,
  Cloud,
  Code,
  PenTool,
  Network,
  Monitor,
  Link as LinkIcon,
  Smartphone,
  PenTool as Paintbrush
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Chatbots": <Brain className="w-6 h-6" />,
  "Data & Analytics": <Database className="w-6 h-6" />,
  "Cybersecurity": <Shield className="w-6 h-6" />,
  "Cloud Management": <Cloud className="w-6 h-6" />,
  "DevOps & Automation": <Code className="w-6 h-6" />,
  "Content Creation": <PenTool className="w-6 h-6" />,
  "API Management": <Network className="w-6 h-6" />,
  "IoT & Edge Computing": <Monitor className="w-6 h-6" />,
  "Blockchain & Web3": <LinkIcon className="w-6 h-6" />,
  "Quantum Computing": <Zap className="w-6 h-6" />
};

const statusColors: Record<string, string> = {
  'live': 'bg-green-500',
  'beta': 'bg-yellow-500',
  'coming-soon': 'bg-blue-500'
};

export default function MicroSaasServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'newest'>('name');

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)))];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricing.monthly - b.pricing.monthly;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI, cybersecurity, cloud management, and more. Transform your business with cutting-edge technology solutions."
        keywords="micro SAAS, AI services, cybersecurity, cloud management, DevOps, blockchain, quantum computing"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our cutting-edge micro SAAS solutions. 
              From AI-powered chatbots to quantum computing platforms, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-zion-purple/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-zion-blue/20 rounded-full animate-spin"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-zion-blue-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-zion-purple text-white" 
                    : "border-zion-blue-light text-zion-slate-light hover:bg-zion-purple/10 hover:border-zion-purple"
                  }
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/80 backdrop-blur-sm border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 text-zion-cyan">
                      {categoryIcons[service.category]}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${statusColors[service.status]} text-white text-xs`}>
                        {service.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-white">{service.rating}</span>
                      </div>
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
                  {/* Pricing */}
                  <div className="bg-zion-blue/20 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {formatPrice(service.pricing.monthly)}
                        <span className="text-sm text-zion-slate-light">/month</span>
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        {formatPrice(service.pricing.yearly)}/year (save 17%)
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-zion-blue/20 text-zion-slate-light border-zion-blue-light">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-slate-light flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="border-zion-cyan/30 text-zion-cyan text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Compliance */}
                  {service.compliance.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Compliance</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.compliance.slice(0, 3).map((comp, index) => (
                          <Badge key={index} variant="outline" className="border-green-500/30 text-green-400 text-xs">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.apiAccess && (
                      <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                        <Network className="w-3 h-3 mr-1" />
                        API Access
                      </Badge>
                    )}
                    {service.mobileApp && (
                      <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                        <Smartphone className="w-3 h-3 mr-1" />
                        Mobile App
                      </Badge>
                    )}
                    {service.whiteLabel && (
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-xs">
                        <Paintbrush className="w-3 h-3 mr-1" />
                        White Label
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button 
                      asChild 
                      className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    >
                      <Link to={service.link}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Link>
                    </Button>
                    {service.demoLink && (
                      <Button 
                        asChild 
                        variant="outline" 
                        className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                      >
                        <Link to={service.demoLink}>
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}