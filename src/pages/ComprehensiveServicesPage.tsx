import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO, PRICING_TIERS } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Mail, Phone, MapPin, Globe, Star, Clock, DollarSign, Users, Shield, Zap, Brain, Cloud, Lock, Database, Smartphone, Code, BarChart3, Circle } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && service.price && service.price < 5000) ||
                        (priceRange === 'medium' && service.price && service.price >= 5000 && service.price < 15000) ||
                        (priceRange === 'high' && service.price && service.price >= 15000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name.includes(categoryName) || categoryName.includes(cat.name));
    return category?.icon || '💼';
  };

  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact Us';
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS services including AI development, cloud solutions, cybersecurity, and digital transformation consulting. Expert IT services for businesses of all sizes."
        keywords="AI services, IT consulting, cloud migration, cybersecurity, digital transformation, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transform your business with our cutting-edge micro SAAS solutions, AI development, and expert IT consulting services
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Brain className="w-5 h-5" />
              <span>AI & Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Cloud className="w-5 h-5" />
              <span>Cloud Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span>Cybersecurity</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5" />
              <span>Digital Transformation</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <a href={`mailto:${CONTACT_INFO.email}?subject=Service Inquiry`}>
                Get Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <a href={`tel:${CONTACT_INFO.mobile}`}>
                Call Now: {CONTACT_INFO.mobile}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <a href={CONTACT_INFO.website} className="font-semibold hover:underline">
                {CONTACT_INFO.website}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search services, technologies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $5,000</option>
                <option value="medium">$5,000 - $15,000</option>
                <option value="high">$15,000+</option>
              </select>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Found <span className="font-semibold text-blue-600">{filteredServices.length}</span> services matching your criteria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of professional services designed to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICE_CATEGORIES.map(category => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <p className="text-sm font-semibold text-blue-600 mt-2">
                    {category.services.length} services
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional IT and AI services with proven results and competitive pricing
            </p>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setPriceRange('all'); }} className="mt-4">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.featured && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                      <span className="text-gray-300">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getCategoryIcon(service.category)} {service.category}
                      </Badge>
                      {service.aiScore && (
                        <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                          AI Score: {service.aiScore}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{service.author.name}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        {formatPrice(service.price)}
                      </div>
                      <Button asChild size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to meet your business needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`text-center ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <a href={`mailto:${CONTACT_INFO.email}?subject=Pricing inquiry for ${tier.name} tier`}>
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Circle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
              <p className="text-gray-600">15+ years of experience in IT and AI solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support for enterprise clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive IT and AI services can accelerate your growth and digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <a href={`mailto:${CONTACT_INFO.email}?subject=Business Transformation Consultation`}>
                Schedule Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <a href={`tel:${CONTACT_INFO.mobile}`}>
                Call {CONTACT_INFO.mobile}
              </a>
            </Button>
          </div>
          <div className="mt-8 text-blue-100">
            <p>📍 {CONTACT_INFO.address}</p>
            <p>🌐 <a href={CONTACT_INFO.website} className="hover:underline">{CONTACT_INFO.website}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}