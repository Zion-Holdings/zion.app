import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  TrendingUp,
  Clock,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Lightbulb
} from "lucide-react";
import Target from "lucide-react/dist/esm/icons/target";
import { 
  MICRO_SAAS_SERVICES, 
  getMicroSaasServicesByCategory, 
  getFeaturedMicroSaasServices,
  searchMicroSaasServices,
  type MicroSaasService 
} from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";

interface ServiceCardProps {
  service: MicroSaasService;
  formatPrice: (price: number, model: string) => string;
  getCategoryIcon: (category: string) => React.ReactNode;
  getPricingModelLabel: (model: string) => string;
}

function ServiceCard({ service, formatPrice, getCategoryIcon, getPricingModelLabel }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group bg-zion-slate/30 backdrop-blur-md border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 overflow-hidden">
      <div className="relative">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {service.featured && (
            <Badge className="bg-zion-cyan text-zion-slate-dark">
              Featured
            </Badge>
          )}
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30">
            {service.category}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-zion-blue text-white">
            {formatPrice(service.price, service.pricingModel)}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <span className="text-sm text-zion-slate-light">{service.subcategory}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-white">{service.rating}</span>
            <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-slate-light line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Globe className="h-4 w-4" />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Clock className="h-4 w-4" />
            <span>{service.availability}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-16 h-2 bg-zion-slate rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
                style={{ width: `${service.aiScore}%` }}
              ></div>
            </div>
            <span className="text-sm text-zion-cyan font-medium">{service.aiScore}%</span>
          </div>
          <span className="text-sm text-zion-slate-light">AI Score</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-purple-light">
              {tag}
            </Badge>
          ))}
          {service.tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-zion-slate/30 text-zion-slate-light">
              +{service.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost" 
            className="w-full text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10"
          >
            {isExpanded ? 'Show Less' : 'Show More Details'}
            <ArrowRight className={`h-4 w-4 ml-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </Button>

          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-zion-purple/20">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-zion-cyan" />
                  Key Features
                </h4>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-zion-cyan" />
                  Benefits
                </h4>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-purple-light rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-zion-cyan" />
                  Target Audience
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 3).map((audience, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-blue/30 text-zion-blue-light">
                      {audience}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zion-slate-light">Market Price:</span>
                  <div className="text-white font-medium">{service.marketPrice}</div>
                </div>
                <div>
                  <span className="text-zion-slate-light">Pricing Model:</span>
                  <div className="text-white font-medium">{getPricingModelLabel(service.pricingModel)}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-zion-purple/20">
          <div className="flex gap-2">
            <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
              <ExternalLink className="h-4 w-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MicroSaasServicesPage() {
  const [services, setServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPricingModel, setSelectedPricingModel] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)));
  const pricingModels = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.pricingModel)));

  useEffect(() => {
    let filteredServices = MICRO_SAAS_SERVICES;

    // Apply search filter
    if (searchQuery) {
      filteredServices = searchMicroSaasServices(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filteredServices = filteredServices.filter(service => service.category === selectedCategory);
    }

    // Apply pricing model filter
    if (selectedPricingModel !== "all") {
      filteredServices = filteredServices.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filteredServices = [...filteredServices].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredServices = [...filteredServices].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredServices = [...filteredServices].sort((a, b) => b.rating - a.rating);
        break;
      case "ai-score":
        filteredServices = [...filteredServices].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case "featured":
      default:
        filteredServices = [...filteredServices].sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    setServices(filteredServices);
  }, [searchQuery, selectedCategory, selectedPricingModel, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return <Brain className="h-6 w-6" />;
      case "IT Services":
        return <Zap className="h-6 w-6" />;
      case "AI Services":
        return <Brain className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case "monthly":
        return "Monthly";
      case "yearly":
        return "Yearly";
      case "one-time":
        return "One-time";
      case "usage-based":
        return "Usage-based";
      default:
        return model;
    }
  };

  const formatPrice = (price: number, model: string) => {
    if (model === "monthly" || model === "yearly") {
      return `$${price}/${model === "monthly" ? "mo" : "yr"}`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services & Solutions - Zion Tech Group" 
        description="Discover innovative micro SAAS services, IT solutions, and AI services. Transform your business with our cutting-edge technology solutions."
        keywords="micro SAAS, AI services, IT solutions, cloud migration, cybersecurity, DevOps automation, AI development"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark py-20">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8 leading-relaxed">
              Transform your business with our innovative micro SAAS solutions, cutting-edge AI services, and comprehensive IT solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
                AI & Machine Learning
              </Badge>
              <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30 px-4 py-2 text-lg">
                IT Services
              </Badge>
              <Badge variant="secondary" className="bg-zion-blue/20 text-zion-blue-light border-zion-blue/30 px-4 py-2 text-lg">
                Cloud Solutions
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-zion-slate/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate/30 border-zion-purple/30 text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-slate/30 border-zion-purple/30 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
              <SelectTrigger className="bg-zion-slate/30 border-zion-purple/30 text-white">
                <SelectValue placeholder="All Pricing Models" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="all">All Pricing Models</SelectItem>
                {pricingModels.map(model => (
                  <SelectItem key={model} value={model}>{getPricingModelLabel(model)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-zion-slate/30 border-zion-purple/30 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">AI Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-zion-slate/50 backdrop-blur-md border border-zion-purple/20">
            <TabsTrigger value="all" className="text-white data-[state=active]:bg-zion-purple/20">All Services</TabsTrigger>
            <TabsTrigger value="ai" className="text-white data-[state=active]:bg-zion-purple/20">AI & ML</TabsTrigger>
            <TabsTrigger value="it" className="text-white data-[state=active]:bg-zion-purple/20">IT Services</TabsTrigger>
            <TabsTrigger value="solutions" className="text-white data-[state=active]:bg-zion-purple/20">Solutions</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.category === "AI & Machine Learning" || s.category === "AI Services").map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="it" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.category === "IT Services").map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="solutions" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.subcategory.includes("Solution") || s.subcategory.includes("Platform")).map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {services.length === 0 && (
          <div className="text-center py-20">
            <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedPricingModel("all");
                setSortBy("featured");
              }}
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-purple-dark via-zion-blue-dark to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your specific needs and discover how our micro SAAS services can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-5 w-5 mr-2" />
              +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}