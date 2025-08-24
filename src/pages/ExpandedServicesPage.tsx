import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Smartphone, 
  Code, 
  Zap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from "lucide-react";
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from "@/data/expandedServices";

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = useMemo(() => {
    return EXPANDED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().replace(' ', '-') === selectedCategory;
      
      const matchesSubcategory = selectedSubcategory === 'all' || 
                                service.subcategory === selectedSubcategory;
      
      const matchesPrice = priceRange === 'all' || 
                          (priceRange === 'low' && service.price <= 10000) ||
                          (priceRange === 'medium' && service.price > 10000 && service.price <= 25000) ||
                          (priceRange === 'high' && service.price > 25000);

      return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory, priceRange]);

  const getSubcategoryOptions = () => {
    if (selectedCategory === 'all') return [];
    return EXPANDED_SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof EXPANDED_SERVICE_SUBCATEGORIES] || [];
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Digital Transformation': <TrendingUp className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'IoT Solutions': <Globe className="w-5 h-5" />,
      'Blockchain': <Code className="w-5 h-5" />,
      'Integration': <Code className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Technology Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered services, cloud solutions, cybersecurity, and digital transformation services designed to accelerate your business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-purple py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center mb-4 md:mb-0">
              <Award className="w-6 h-6 mr-3 text-zion-cyan" />
              <span className="font-semibold">Trusted by 500+ Global Companies</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategoryOptions().map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Prices" />
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
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(service.category)}
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.category}
                      </Badge>
                    </div>
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl leading-tight">
                    {service.title}
                  </CardTitle>
                  {service.subcategory && (
                    <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light/30 w-fit">
                      {service.subcategory}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-zion-cyan border-zion-cyan/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{service.rating}</span>
                        <span className="text-zion-slate-light">({service.reviewCount})</span>
                      </div>
                      {service.aiScore && (
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-zion-cyan" />
                          <span>AI Score: {service.aiScore}%</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zion-blue-light">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(service.price)}
                    </div>
                    <div className="flex gap-2">
                      <Link to="/contact">
                        <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                          <Mail className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                          <Phone className="w-4 h-4 mr-1" />
                          Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">
                No services found matching your criteria
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setPriceRange('all');
                }}
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-zion-blue-dark py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions with proven expertise and unwavering commitment to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with 10+ years of experience in enterprise solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">Serving clients worldwide with 24/7 support and local expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-zion-slate-light">ISO 27001 certified with 99.9% uptime guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light">Proven track record of 300%+ ROI for our enterprise clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their technology needs. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us directly: <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}