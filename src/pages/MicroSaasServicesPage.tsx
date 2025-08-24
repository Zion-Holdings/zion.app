import React, { useState, useMemo } from 'react';
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, MicroSaasService } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Play, 
  FileText, 
  Shield, 
  Zap,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { MicroSaasPricingComparison } from '@/components/services/MicroSaasPricingComparison';
import { ServiceComparisonTable } from '@/components/services/ServiceComparisonTable';

interface ServiceCardProps {
  service: MicroSaasService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${service.price}/year`;
    } else if (service.pricingModel === 'one-time') {
      return `${service.currency}${service.price}`;
    } else {
      return `${service.currency}${service.price}`;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
            <CardDescription className="text-zion-slate-light text-sm mb-3">
              {service.description}
            </CardDescription>
          </div>
          {service.featured && (
            <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-xs">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-zion-slate-light">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{service.rating}</span>
            <span>({service.reviewCount})</span>
          </div>
          {service.aiScore && (
            <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
              AI Score: {service.aiScore}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan font-semibold text-lg">
              {getPricingDisplay(service)}
            </span>
            <Badge className={getSupportLevelColor(service.supportLevel)}>
              {service.supportLevel}
            </Badge>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2">Key Features:</h4>
              <div className="grid grid-cols-1 gap-1">
                {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <CheckCircle className="h-3 w-3 text-zion-cyan" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              {service.features.length > 4 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-zion-cyan hover:text-zion-cyan-light mt-2"
                >
                  {isExpanded ? 'Show Less' : `Show ${service.features.length - 4} More`}
                </Button>
              )}
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Benefits:</h4>
              <div className="grid grid-cols-1 gap-1">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <TrendingUp className="h-3 w-3 text-zion-cyan" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Target Audience:</h4>
              <div className="flex flex-wrap gap-1">
                {service.targetAudience.slice(0, 3).map((audience, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                    {audience}
                  </Badge>
                ))}
              </div>
            </div>

            {service.freeTier && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">Free Tier Available</span>
                </div>
                <p className="text-green-300 text-sm mt-1">{service.freeTierLimits}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full space-y-3">
          <div className="flex gap-2">
            {service.website && (
              <Button asChild variant="outline" className="flex-1 border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <a href={service.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Site
                </a>
              </Button>
            )}
            {service.demoUrl && (
              <Button asChild variant="outline" className="flex-1 border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
          
          <div className="flex gap-2">
            {service.documentation && (
              <Button asChild variant="ghost" size="sm" className="flex-1 text-zion-slate-light hover:text-zion-cyan">
                <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Docs
                </a>
              </Button>
            )}
            <Button asChild variant="ghost" size="sm" className="flex-1 text-zion-slate-light hover:text-zion-cyan">
              <a href={`mailto:${service.author.email}?subject=Inquiry about ${service.title}`}>
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');

  const filteredServices = useMemo(() => {
    return MICRO_SAAS_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
      const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
      
      return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
    });
  }, [searchQuery, selectedCategory, selectedPricingModel, selectedSupportLevel]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    ...MICRO_SAAS_CATEGORIES.map(cat => ({ value: cat.name, label: cat.name }))
  ];

  const pricingModels = [
    { value: 'all', label: 'All Pricing' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'one-time', label: 'One-time' },
    { value: 'usage-based', label: 'Usage-based' }
  ];

  const supportLevels = [
    { value: 'all', label: 'All Support' },
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'enterprise', label: 'Enterprise' }
  ];

  return (
    <>
      <SEO 
        title="Micro SAAS Services & Solutions - ZionTech Group" 
        description="Discover innovative micro SAAS services, AI solutions, IT services, and business automation tools. Expert consulting and implementation services."
        keywords="micro SAAS, AI services, IT consulting, business automation, cloud migration, cybersecurity, blockchain"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover innovative technology solutions that drive business growth. From AI-powered tools to enterprise IT services, 
            we provide cutting-edge solutions tailored to your needs.
          </p>
          
          {/* Contact Info */}
          <div className="bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-zion-cyan">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  placeholder="Search services, features, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  {pricingModels.map(model => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Support" />
                </SelectTrigger>
                <SelectContent>
                  {supportLevels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-slate-light">
              Filtered by your criteria. Click on any service to learn more.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-lg mb-4">
                No services match your current filters.
              </div>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPricingModel('all');
                  setSelectedSupportLevel('all');
                }}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Service Comparison Table
            </h2>
            <p className="text-zion-slate-light">
              Compare all services side by side to find the perfect solution for your business.
            </p>
          </div>
          <ServiceComparisonTable />
        </div>
      </div>

      {/* Pricing Comparison Section */}
      <MicroSaasPricingComparison showTitle={false} />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <a href="mailto:kleber@ziontechgroup.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}