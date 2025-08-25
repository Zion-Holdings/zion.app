import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from "lucide-react";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import { Link as LinkIcon } from "lucide-react";
import { ALL_EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from '@/data/expandedServices';
import { ProductListing } from '@/types/listings';

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = ALL_EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSubcategory = !selectedSubcategory || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = service.price && service.price < 10000;
    else if (priceRange === 'medium') matchesPrice = service.price && service.price >= 10000 && service.price < 25000;
    else if (priceRange === 'high') matchesPrice = service.price && service.price >= 25000;
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  const getSubcategoryOptions = () => {
    if (!selectedCategory) return [];
    const categoryKey = Object.keys(EXPANDED_SERVICE_SUBCATEGORIES).find(
      key => key.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    return categoryKey ? EXPANDED_SERVICE_SUBCATEGORIES[categoryKey] : [];
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Automation': <Zap className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Cloud & DevOps': <Cloud className="h-5 w-5" />,
      'Data & Analytics': <Database className="h-5 w-5" />,
      'Digital Transformation': <TrendingUp className="h-5 w-5" />,
      'IoT & Edge Computing': <Cpu className="h-5 w-5" />,
      'Blockchain & Web3': <LinkIcon className="h-5 w-5" />
    };
    return icons[category] || <Zap className="h-5 w-5" />;
  };

  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact Us';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI, cybersecurity, cloud, and digital transformation services from industry experts. 
            Transform your business with our comprehensive technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-cyan hover:text-white">
              <Globe className="h-5 w-5 mr-2" />
              Global Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Award className="h-5 w-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search services, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Subcategories</SelectItem>
                {getSubcategoryOptions().map((subcategory) => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-32">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $10K</SelectItem>
                <SelectItem value="medium">$10K - $25K</SelectItem>
                <SelectItem value="high">Over $25K</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            {filteredServices.length} Professional Services Available
          </h2>
          <p className="text-center text-muted-foreground">
            Expert-led technology solutions with proven track records and comprehensive support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-zion-blue-light hover:border-zion-purple">
              <div className="relative">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                {service.featured && (
                  <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                    Featured
                  </Badge>
                )}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {getCategoryIcon(service.category)}
                  <span>{service.category}</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg line-clamp-2">{service.title}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price)}
                    </div>
                    {service.subcategory && (
                      <Badge variant="secondary" className="text-xs">
                        {service.subcategory}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{service.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{service.rating} ({service.reviewCount} reviews)</span>
                  </div>
                  {service.aiScore && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 text-zion-cyan" />
                      <span>AI Score: {service.aiScore}/100</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Provider
                  </Button>
                  <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all available services
            </p>
          </div>
        )}
      </div>

      {/* Why Choose Zion Section */}
      <div className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why Choose Zion Technology Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Providers</h3>
              <p className="text-zion-slate-light">
                All service providers are vetted experts with proven track records and industry certifications
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">
                Services available worldwide with local expertise and 24/7 support across all time zones
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">
                Comprehensive quality assurance with satisfaction guarantees and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your technology needs and find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}