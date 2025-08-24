import React, { useState } from 'react';
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Phone, Mail, MapPin, Clock, Star, Shield, Zap, TrendingUp, Users, Award } from "lucide-react";
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from "@/data/enhancedServices";
import { SEO } from "@/components/SEO";

export default function EnhancedServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service));
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredServices = ENHANCED_SERVICES.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise IT & AI Services - Zion Tech Group" 
        description="Comprehensive IT services, AI solutions, cybersecurity, cloud infrastructure, and digital transformation consulting. Expert technology solutions for modern businesses."
        keywords="IT services, AI solutions, cybersecurity, cloud computing, digital transformation, enterprise technology"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity, 
            we deliver enterprise-grade services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span>500+ Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-green-400" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
              <Link to="/request-quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-zion-slate-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Call Us</p>
                <a href={`tel:${CONTACT_INFO.mobile}`} className="text-white font-semibold hover:text-zion-cyan">
                  {CONTACT_INFO.mobile}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Email Us</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Visit Us</p>
                <p className="text-white font-semibold">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Business Hours</p>
                <p className="text-white font-semibold">9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Our Service Categories
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains. Choose from our specialized service categories 
              designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === category.id
                    ? "border-zion-cyan bg-zion-cyan/10"
                    : "border-zion-slate-light bg-white hover:border-zion-cyan/50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-zion-blue mb-2">{category.name}</h3>
                <p className="text-zion-slate-dark text-sm">{category.description}</p>
                <div className="mt-3 text-zion-cyan text-sm font-semibold">
                  {category.services.length} services available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for services, technologies, or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Featured Services
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Our most popular and highly-rated services that deliver exceptional value to businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                    {service.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-zion-blue mb-3">{service.title}</h3>
                  <p className="text-zion-slate-dark text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                      <span className="text-sm text-zion-slate-dark">({service.reviewCount})</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-slate-light text-zion-slate-dark text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                    <Link to={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              All Services
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Browse our complete catalog of {ENHANCED_SERVICES.length} professional services and solutions.
            </p>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-zion-blue mb-2">{service.title}</h3>
                      <p className="text-zion-slate-dark text-sm line-clamp-3">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                      <span className="text-sm text-zion-slate-dark">({service.reviewCount})</span>
                    </div>
                    <div className="text-xl font-bold text-zion-cyan">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-slate-light text-zion-slate-dark text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-dark mb-4">
                    <span>📍 {service.location}</span>
                    <span>⏱️ {service.availability}</span>
                  </div>
                  <Button asChild className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white">
                    <Link to={`/services/${service.id}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zion-slate-dark text-lg">No services found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="mt-4 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`bg-white rounded-lg p-8 text-center ${
                key === 'professional' ? 'ring-2 ring-zion-cyan scale-105' : ''
              }`}>
                <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                <p className="text-zion-slate-dark mb-6">{tier.description}</p>
                <div className="text-3xl font-bold text-zion-cyan mb-6">{tier.priceRange}</div>
                <ul className="text-left space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className={`w-full ${
                    key === 'professional' 
                      ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue' 
                      : 'bg-zion-blue hover:bg-zion-blue-dark text-white'
                  }`}
                >
                  <Link to="/request-quote">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-dark">ISO 27001 certified with enterprise-grade security protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-dark">Quick implementation with proven methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Proven Results</h3>
              <p className="text-zion-slate-dark">Track record of successful transformations and ROI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate-dark">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
              <Link to="/request-quote">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
            </Button>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}