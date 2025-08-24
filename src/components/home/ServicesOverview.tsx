import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '@/data/enhancedServices';
import { Star, ArrowRight, Shield, Zap, TrendingUp, Users, Award, Phone, Mail, MapPin } from 'lucide-react';

export function ServicesOverview() {
  const featuredServices = ENHANCED_SERVICES.filter(service => service.featured).slice(0, 6);
  const topCategories = SERVICE_CATEGORIES.slice(0, 8);

  return (
    <section className="py-20 bg-zion-slate-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zion-blue mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-zion-slate-dark max-w-4xl mx-auto mb-8">
            From AI automation to cybersecurity, we deliver enterprise-grade services that transform businesses 
            and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold text-zion-blue">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold text-zion-blue">500+ Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-zion-blue">ISO 27001 Certified</span>
            </div>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg p-6 border border-zion-slate-light hover:shadow-lg transition-all duration-300 hover:border-zion-cyan/50">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-zion-blue mb-3">{category.name}</h3>
              <p className="text-zion-slate-dark text-sm mb-4">{category.description}</p>
              <div className="text-zion-cyan font-semibold text-sm mb-4">
                {category.services.length} services available
              </div>
              <Button asChild variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/enhanced-services">Explore Services</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">Featured Services</h3>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Our most popular and highly-rated services that deliver exceptional value to businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
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
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-zion-blue mb-3">{service.title}</h4>
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
                  <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                    <Link to="/enhanced-services">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h3>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-dark text-sm">ISO 27001 certified with enterprise-grade security protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Rapid Deployment</h4>
              <p className="text-zion-slate-dark text-sm">Quick implementation with proven methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Proven Results</h4>
              <p className="text-zion-slate-dark text-sm">Track record of successful transformations and ROI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Expert Team</h4>
              <p className="text-zion-slate-dark text-sm">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Contact us today to discuss your technology needs and discover how we can help transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Call Us</h4>
              <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-cyan hover:text-zion-cyan-dark font-semibold text-lg">
                {CONTACT_INFO.mobile}
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Email Us</h4>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-cyan hover:text-zion-cyan-dark font-semibold text-lg">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-zion-blue mb-2">Visit Us</h4>
              <p className="text-zion-slate-dark font-semibold">{CONTACT_INFO.address}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                <Link to="/request-quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/enhanced-services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-zion-blue mb-6">
            Transform Your Business Today
          </h3>
          <p className="text-zion-slate-dark text-lg mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations with our technology solutions.
          </p>
          <Button asChild size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white font-bold group">
            <Link to="/enhanced-services">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}