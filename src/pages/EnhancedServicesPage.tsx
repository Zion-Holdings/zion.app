import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
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
  Clock, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, SAMPLE_SERVICES } from "@/data/sampleServices";

export default function EnhancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredServices = SAMPLE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === "low" && service.price > 3000) matchesPrice = false;
    if (priceRange === "medium" && (service.price < 3000 || service.price > 8000)) matchesPrice = false;
    if (priceRange === "high" && service.price < 8000) matchesPrice = false;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (icon: string) => {
    return <span className="text-2xl">{icon}</span>;
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      "from-purple-500 to-indigo-600",
      "from-cyan-500 to-blue-600", 
      "from-emerald-500 to-green-600",
      "from-amber-500 to-orange-600",
      "from-pink-500 to-rose-600",
      "from-violet-500 to-purple-600"
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      <SEO 
        title="Comprehensive Tech Services - Zion Tech Group" 
        description="Explore our complete range of AI, IT infrastructure, and micro SAAS services. From custom AI development to cybersecurity solutions, we have everything your business needs."
        keywords="AI services, IT services, micro SAAS, cybersecurity, cloud migration, digital transformation, Zion Tech Group"
      />
      <Header />
      
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Comprehensive Tech Services
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our complete ecosystem of AI, IT infrastructure, and micro SAAS solutions. 
                Expert-led services designed for the modern enterprise.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/30 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex items-center text-zion-cyan">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center text-zion-cyan">
                    <Mail className="h-5 w-5 mr-2" />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-zion-slate-light">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  364 E Main St STE 1008, Middletown, DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-zion-blue-dark border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-purple/30 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ai-service">AI & Machine Learning</SelectItem>
                  <SelectItem value="it-service">IT Infrastructure</SelectItem>
                  <SelectItem value="saas-service">Micro SAAS Solutions</SelectItem>
                  <SelectItem value="talent">Tech Talent</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40 bg-zion-blue-dark border-zion-purple/30 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $3,000</SelectItem>
                  <SelectItem value="medium">$3,000 - $8,000</SelectItem>
                  <SelectItem value="high">Over $8,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
              <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((category, index) => (
                <Card key={category.id} className="overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`rounded-full w-14 h-14 bg-gradient-to-br ${getCategoryColor(index)} flex items-center justify-center`}>
                        {getCategoryIcon(category.icon)}
                      </div>
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        ${category.avgPrice.toLocaleString()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-xs text-zion-slate-light/70">
                          +{category.services.length - 3} more services
                        </div>
                      )}
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    >
                      <Link to={`/services?category=${category.id}`}>
                        Explore {category.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                Available Services ({filteredServices.length})
              </h2>
              <Link to="/request-quote">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-lg hover:border-zion-purple/50">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan text-xs">
                        {service.category.replace('-', ' ').toUpperCase()}
                      </Badge>
                      <div className="text-right">
                        <div className="text-lg font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        {service.currency === '$/hr' && (
                          <div className="text-xs text-zion-slate-light">per hour</div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
                          {tag}
                        </Badge>
                      ))}
                      {service.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
                          +{service.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-zion-blue hover:bg-zion-blue-light text-white"
                    >
                      <Link to={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-zion-slate-light text-lg mb-4">
                  No services found matching your criteria
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                  }}
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
                Choose the perfect plan for your business needs with transparent pricing and no hidden fees
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICE_PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`relative overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 ${
                  index === 1 ? 'ring-2 ring-zion-purple scale-105' : ''
                }`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-zion-purple text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-zion-cyan">{tier.currency}</span>
                      <span className="text-4xl font-bold text-white">{tier.price.toLocaleString()}</span>
                    </div>
                    <CardDescription className="text-zion-slate-light mt-2">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={`w-full ${
                        index === 1 
                          ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white' 
                          : 'bg-zion-blue hover:bg-zion-blue-light text-white'
                      }`}
                    >
                      <Link to="/request-quote">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of companies already leveraging our comprehensive tech solutions. 
              Get a free consultation and discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                asChild
              >
                <Link to="/request-quote">
                  <Users className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}