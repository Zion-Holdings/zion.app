import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  COMPREHENSIVE_SERVICES, 
  SERVICE_CATEGORIES 
} from "@/data/comprehensiveServices";
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain,
  Cloud,
  Database,
  Smartphone,
  Building,
  Link as LinkIcon,
  Globe
} from "lucide-react";

export function ServicesShowcase() {
  // Get featured services and some key services from each category
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);
  const keyServices = COMPREHENSIVE_SERVICES.slice(0, 6); // Show first 6 services

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || "💼";
  };

  const getCategoryColor = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    if (!category) return "from-gray-500 to-gray-600";
    
    switch (category.id) {
      case "ai-services": return "from-purple-500 to-indigo-600";
      case "cloud-solutions": return "from-blue-500 to-cyan-600";
      case "cybersecurity": return "from-red-500 to-pink-600";
      case "data-analytics": return "from-green-500 to-emerald-600";
      case "web-development": return "from-orange-500 to-yellow-600";
      case "business-solutions": return "from-teal-500 to-blue-600";
      case "blockchain": return "from-indigo-500 to-purple-600";
      case "iot-solutions": return "from-gray-500 to-slate-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-20 bg-zion-slate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
            Our Comprehensive Service Portfolio
          </h2>
          <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
            Discover 30+ innovative micro SAAS services, AI solutions, and enterprise-grade IT services designed to transform your business
          </p>
        </div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-zion-blue mb-2">Featured Solutions</h3>
              <p className="text-zion-slate-dark">Our most popular and innovative services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-purple/20">
                  <div className="relative">
                    <img 
                      src={service.images[0]} 
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                      Featured
                    </Badge>
                    <div className={`absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-white text-sm`}>
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg text-zion-blue group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-zion-slate-dark">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-sm text-zion-slate-dark">({service.reviewCount} reviews)</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-zion-blue">
                        {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                      </div>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Service Categories Overview */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-zion-blue mb-2">Service Categories</h3>
            <p className="text-zion-slate-dark">Explore our comprehensive range of technology services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Link key={category.id} to="/comprehensive-services">
                <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border-zion-blue-light hover:border-zion-purple/50">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <CardTitle className="text-zion-blue group-hover:text-zion-purple transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-zion-blue mb-2">Popular Services</h3>
            <p className="text-zion-slate-dark">Discover our most requested technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center text-white text-lg`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.subcategory}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-zion-blue group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-zion-slate-dark">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-zion-blue">
                      {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Explore Our Full Service Portfolio?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover 30+ innovative technology solutions, from AI chatbots to blockchain platforms, 
              IoT systems to cybersecurity suites. Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/comprehensive-services">
                <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                  <Globe className="mr-2 h-5 w-5" />
                  View All Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}