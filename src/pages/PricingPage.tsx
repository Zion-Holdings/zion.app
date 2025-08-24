import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/enhancedServices';
import { SEO } from '@/components/SEO';
import { Star, Check, Phone, Mail, MapPin, Clock, Shield, Zap, TrendingUp, Users, Award, Globe } from 'lucide-react';
import Calculator from 'lucide-react/dist/esm/icons/calculator';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>("professional");

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    if (selectedCategory === "all") return true;
    return SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service));
  });

  const getServicePricing = (basePrice: number, tier: string) => {
    switch (tier) {
      case 'basic':
        return Math.round(basePrice * 0.6);
      case 'professional':
        return basePrice;
      case 'enterprise':
        return Math.round(basePrice * 1.4);
      default:
        return basePrice;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pricing & Service Costs - Zion Tech Group" 
        description="Transparent pricing for all our IT services, AI solutions, cybersecurity, and digital transformation services. Get detailed quotes and pricing information."
        keywords="pricing, service costs, IT services pricing, AI solutions pricing, cybersecurity pricing"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Clear, competitive pricing for all our technology services. Choose the plan that fits your budget 
            and business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Calculator className="w-5 h-5 text-zion-cyan" />
              <span>Instant Quotes</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-green-400" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span>ROI Guaranteed</span>
            </div>
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
                <p className="text-sm text-zion-slate-light">Call for Quote</p>
                <a href={`tel:${CONTACT_INFO.mobile}`} className="text-white font-semibold hover:text-zion-cyan">
                  {CONTACT_INFO.mobile}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Email for Pricing</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Visit Office</p>
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

      {/* Pricing Tiers */}
      <section className="py-16 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Choose Your Pricing Tier
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Select the pricing tier that best matches your business size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`bg-white rounded-lg p-8 text-center transition-all duration-300 ${
                selectedPricingTier === key 
                  ? 'ring-2 ring-zion-cyan scale-105 shadow-xl' 
                  : 'shadow-lg hover:shadow-xl'
              }`}>
                <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                <p className="text-zion-slate-dark mb-6">{tier.description}</p>
                <div className="text-3xl font-bold text-zion-cyan mb-6">{tier.priceRange}</div>
                <ul className="text-left space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => setSelectedPricingTier(key)}
                  className={`w-full ${
                    selectedPricingTier === key
                      ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue' 
                      : 'bg-zion-blue hover:bg-zion-blue-dark text-white'
                  }`}
                >
                  {selectedPricingTier === key ? 'Selected' : 'Select Tier'}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-zion-slate-dark text-lg mb-6">
              <strong>Note:</strong> All prices are in USD and may vary based on project scope and requirements.
            </p>
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
              <Link to="/request-quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Service Pricing by Category
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Browse our comprehensive service catalog with transparent pricing for each category.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-zion-cyan text-zion-blue"
                  : "bg-zion-slate-light text-zion-slate-dark hover:bg-zion-cyan hover:text-zion-blue"
              }`}
            >
              All Services ({ENHANCED_SERVICES.length})
            </button>
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-zion-cyan text-zion-blue"
                    : "bg-zion-slate-light text-zion-slate-dark hover:bg-zion-cyan hover:text-zion-blue"
                }`}
              >
                {category.icon} {category.name} ({category.services.length})
              </button>
            ))}
          </div>

          {/* Services Grid with Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-4">
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
                </div>

                {/* Pricing Display */}
                <div className="mb-4">
                  <div className="text-center mb-3">
                    <span className="text-sm text-zion-slate-dark">Starting from:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-zion-slate-light rounded p-2">
                      <div className="text-xs text-zion-slate-dark mb-1">Basic</div>
                      <div className="text-lg font-bold text-zion-cyan">
                        ${getServicePricing(service.price || 0, 'basic').toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-zion-cyan/20 rounded p-2 border-2 border-zion-cyan">
                      <div className="text-xs text-zion-slate-dark mb-1">Pro</div>
                      <div className="text-lg font-bold text-zion-cyan">
                        ${(service.price || 0).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-zion-slate-light rounded p-2">
                      <div className="text-xs text-zion-slate-dark mb-1">Enterprise</div>
                      <div className="text-lg font-bold text-zion-cyan">
                        ${getServicePricing(service.price || 0, 'enterprise').toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                    <span className="text-sm text-zion-slate-dark">({service.reviewCount})</span>
                  </div>
                  <div className="text-sm text-zion-slate-dark">
                    ⏱️ {service.availability}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zion-slate-light text-zion-slate-dark text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white">
                  <Link to={`/services/${service.id}`}>View Details</Link>
                </Button>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zion-slate-dark text-lg">No services found in this category.</p>
              <Button 
                onClick={() => setSelectedCategory("all")}
                className="mt-4 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue"
              >
                View All Services
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Why Our Pricing is Competitive
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              We provide exceptional value through our expertise, technology, and proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-dark text-sm">ISO 27001 certified with enterprise-grade security protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Rapid Implementation</h3>
              <p className="text-zion-slate-dark text-sm">Proven methodologies that reduce time to value</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Proven ROI</h3>
              <p className="text-zion-slate-dark text-sm">Track record of successful transformations and returns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate-dark text-sm">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Contact us today for a personalized quote and consultation. Our team is ready to help you 
            choose the right services and pricing for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
              <Link to="/request-quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-zion-blue mb-8 text-center">
              Additional Information
            </h2>
            
            <div className="space-y-8">
              <div className="bg-zion-slate-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-zion-blue mb-3">Payment Terms</h3>
                <p className="text-zion-slate-dark mb-3">
                  We offer flexible payment terms including upfront payment, milestone-based payments, and 
                  monthly subscription options for ongoing services.
                </p>
                <ul className="text-zion-slate-dark space-y-1">
                  <li>• 50% upfront for projects under $10,000</li>
                  <li>• Milestone-based payments for larger projects</li>
                  <li>• Monthly billing for subscription services</li>
                  <li>• Net 30 payment terms for enterprise clients</li>
                </ul>
              </div>

              <div className="bg-zion-slate-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-zion-blue mb-3">Volume Discounts</h3>
                <p className="text-zion-slate-dark mb-3">
                  We offer competitive volume discounts for enterprise clients and long-term partnerships.
                </p>
                <ul className="text-zion-slate-dark space-y-1">
                  <li>• 10% discount for annual contracts</li>
                  <li>• 15% discount for multi-service bundles</li>
                  <li>• 20% discount for enterprise packages</li>
                  <li>• Custom pricing for strategic partnerships</li>
                </ul>
              </div>

              <div className="bg-zion-slate-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-zion-blue mb-3">Service Level Agreements</h3>
                <p className="text-zion-slate-dark mb-3">
                  All our services come with comprehensive SLAs ensuring quality, performance, and support.
                </p>
                <ul className="text-zion-slate-dark space-y-1">
                  <li>• 99.9% uptime guarantee for cloud services</li>
                  <li>• 4-hour response time for critical issues</li>
                  <li>• 24/7 support for enterprise clients</li>
                  <li>• Performance guarantees with compensation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}