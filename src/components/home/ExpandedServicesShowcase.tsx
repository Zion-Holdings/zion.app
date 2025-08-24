import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Clock, Users, Brain, Cloud, Shield, Zap, Circle, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '@/data/expandedServices';

export function ExpandedServicesShowcase() {
  const featuredServices = EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6);
  const topCategories = SERVICE_CATEGORIES.slice(0, 5);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional IT & AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of micro SAAS solutions, AI development, and expert IT consulting services. 
            From startups to enterprises, we deliver results that drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800">
              <Brain className="w-5 h-5" />
              <span className="font-semibold">AI & Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-800">
              <Cloud className="w-5 h-5" />
              <span className="font-semibold">Cloud Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Cybersecurity</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full text-orange-800">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Digital Transformation</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link to="/comprehensive-services">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${CONTACT_INFO.email}?subject=Service Consultation`}>
                Get Free Consultation
              </a>
            </Button>
          </div>
        </div>

        {/* Service Categories Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {topCategories.map(category => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <p className="text-sm font-semibold text-blue-600">
                    {category.services.length} services available
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Services</h3>
            <Link to="/comprehensive-services" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.rating}</span>
                    <span className="text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                    {service.aiScore && (
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                        AI Score: {service.aiScore}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{service.author.name}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">
                      {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
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
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Zion Tech Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Circle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Proven Expertise</h4>
              <p className="text-gray-600 text-sm">15+ years of experience in IT and AI solutions with proven track record</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Quick turnaround times without compromising quality or security</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Quality Guarantee</h4>
              <p className="text-gray-600 text-sm">100% satisfaction guarantee with ongoing support and maintenance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock support for enterprise clients with dedicated teams</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you transform your business with cutting-edge technology solutions. 
            Get in touch today for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <a href={`mailto:${CONTACT_INFO.email}?subject=Service Consultation Request`}>
                Schedule Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <a href={`tel:${CONTACT_INFO.mobile}`}>
                Call {CONTACT_INFO.mobile}
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-100">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.mobile}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}