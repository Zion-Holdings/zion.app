import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, Clock, Users, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '../data/comprehensiveServices';

interface ServiceDetailPageProps {}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = () => {
  const params = useParams();
  const id = params.id;
  const [service, setService] = useState<any>(null);
  const [selectedTier, setSelectedTier] = useState<string>('basic');

  useEffect(() => {
    if (id) {
      const foundService = COMPREHENSIVE_SERVICES.find(s => s.id === id);
      setService(foundService);
    }
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/comprehensive-services" className="text-zion-gold hover:text-zion-gold-light">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const pricingTier = SERVICE_PRICING_TIERS.find(tier => tier.name === selectedTier);
  const servicePricing = service.pricing[selectedTier as keyof typeof service.pricing];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-blue/80 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-zion-gold/20 text-zion-gold px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">{service.category}</span>
              <span className="text-zion-gold">•</span>
              <span className="text-sm">{service.subcategory}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.rating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-zion-gold fill-current' : 'text-zion-slate-light'}`} />
                  ))}
                </div>
                <div className="text-sm text-zion-slate-light">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.aiScore}</div>
                <div className="text-sm text-zion-slate-light">AI Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.availability}</div>
                <div className="text-sm text-zion-slate-light">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.location}</div>
                <div className="text-sm text-zion-slate-light">Location</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-zion-gold text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 border-2 border-zion-gold text-zion-gold px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold hover:text-zion-blue-dark transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Features */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-zion-gold flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Description */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">About This Service</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-zion-slate-light leading-relaxed mb-6">
                      {service.detailedDescription}
                    </p>
                  </div>
                </section>

                {/* Service Guarantees */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Our Guarantees</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {SERVICE_GUARANTEES.map((guarantee, index) => (
                      <div key={index} className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-6 h-6 text-zion-gold" />
                          <h3 className="text-xl font-semibold text-white">{guarantee.title}</h3>
                        </div>
                        <p className="text-zion-slate-light">{guarantee.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Pricing Card */}
                <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                  <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                  
                  {/* Tier Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-zion-slate-light mb-2">
                      Select Tier
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-zion-blue/30 border border-zion-blue/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-gold"
                    >
                      {Object.keys(service.pricing).map((tier) => (
                        <option key={tier} value={tier} className="bg-zion-blue-dark text-white">
                          {tier.charAt(0).toUpperCase() + tier.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Display */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-zion-gold mb-2">
                      ${servicePricing.price}
                    </div>
                    <div className="text-zion-slate-light">
                      per {pricingTier?.billingCycle || 'month'}
                    </div>
                  </div>

                  {/* Tier Features */}
                  <div className="space-y-3 mb-6">
                    {pricingTier?.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-gold" />
                        <span className="text-sm text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full bg-zion-gold text-zion-blue-dark py-3 rounded-lg font-semibold text-center block hover:bg-zion-gold-light transition-colors"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-zion-gold" />
                      <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-slate-light hover:text-zion-gold">
                        {CONTACT_INFO.mobile}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-zion-gold" />
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-slate-light hover:text-zion-gold">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-zion-gold flex-shrink-0 mt-1" />
                      <span className="text-zion-slate-light text-sm">
                        {CONTACT_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Tags */}
                <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-zion-gold/20 text-zion-gold px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-gold/10 border-t border-zion-gold/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact us today to discuss your needs and get a personalized quote for {service.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-zion-gold text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                to="/comprehensive-services"
                className="inline-flex items-center gap-2 border-2 border-zion-gold text-zion-gold px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold hover:text-zion-blue-dark transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;