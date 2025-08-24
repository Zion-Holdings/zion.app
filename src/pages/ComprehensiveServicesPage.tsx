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
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Database,
  Smartphone,
  Link
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, ComprehensiveService } from '@/data/comprehensiveServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_SERVICES;

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
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by pricing model
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'ai-score':
        filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default: // featured
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPricingModel, sortBy]);

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(category.toLowerCase())
    );
    return categoryData?.icon || '🔧';
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  return (
    <>
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services, IT solutions, and AI-powered tools. From chatbots to cybersecurity, we deliver enterprise-grade solutions at competitive prices."
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                Comprehensive IT & AI Services
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge micro SAAS solutions, enterprise IT services, 
                and AI-powered tools. Delivered globally with competitive pricing and exceptional support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us: +1 302 464 0950
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  kleber@ziontechgroup.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Service Categories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet every business need
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SERVICE_CATEGORIES.map((category) => (
                <Card key={category.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{category.count} Services</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-muted/50 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {SERVICE_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Pricing Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="project-based">Project-based</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="ai-score">AI Score</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-muted-foreground">
                Find the perfect solution for your business needs
              </p>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No services found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {service.featured && (
                        <Badge className="absolute top-3 left-3 bg-zion-purple">
                          Featured
                        </Badge>
                      )}
                      <Badge className="absolute top-3 right-3 bg-green-600">
                        AI Score: {service.aiScore}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-purple">
                            {service.currency}{service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {getPricingModelLabel(service.pricingModel)}
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                        </div>
                        <span className="text-muted-foreground">
                          ({service.reviewCount} reviews)
                        </span>
                      </div>
                      
                      {/* Market Price */}
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-muted-foreground">Market Price:</span>
                        <span className="font-medium">{service.marketPrice}</span>
                      </div>
                      
                      {/* Delivery Time */}
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-muted-foreground">Delivery:</span>
                        <span className="font-medium">{service.deliveryTime}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {service.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      {/* Features Preview */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Contact Information */}
                      <div className="pt-4 border-t">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            <span>{service.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            <span>{service.contactInfo.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-3 w-3 text-muted-foreground" />
                            <a 
                              href={service.contactInfo.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-zion-purple hover:underline"
                            >
                              {service.contactInfo.website}
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
                          Get Quote
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We deliver enterprise-grade solutions with the agility and pricing of a startup
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">AI-First Approach</h3>
                <p className="text-muted-foreground text-sm">
                  Cutting-edge AI and machine learning solutions that give you a competitive edge
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">
                  Services available worldwide with local expertise and global support
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">Rapid Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Fast turnaround times without compromising on quality or security
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground text-sm">
                  Bank-level security and compliance for all our solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-zion-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your needs and get a personalized quote. 
              We're here to help you succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call: +1 302 464 0950
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" />
                Email: kleber@ziontechgroup.com
              </Button>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>

        <TrustedBySection />
      </main>
      
      <Footer />
    </>
  );
}