import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  SERVICE_CATEGORIES, 
  SERVICE_PRICING_TIERS, 
  CONTACT_INFO, 
  SERVICE_GUARANTEES,
  COMPREHENSIVE_SERVICES
} from '@/data/comprehensiveServices';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier) {
      return price * (1 - pricingTier.discount);
    }
    return price;
  };

  const getYearlyDiscount = (monthlyPrice: number) => {
    return monthlyPrice * 0.8; // 20% discount for yearly billing
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title="Pricing & Plans - Zion Tech Group" 
        description="Transparent pricing for our comprehensive IT and AI services. Choose from flexible pricing tiers designed for startups, SMBs, and enterprises."
        keywords="pricing, IT services pricing, AI services pricing, micro SAAS pricing, technology consulting pricing"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transparent Pricing Plans
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Choose the pricing tier that best fits your business size and requirements. 
            All plans include our comprehensive service guarantees and ongoing support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Choose Your Plan</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Flexible pricing tiers designed to meet the needs of businesses at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`relative p-8 rounded-2xl border-2 ${
                key === 'smb' 
                  ? 'border-zion-blue bg-zion-blue/5 scale-105 shadow-2xl' 
                  : 'border-zion-slate-light bg-white shadow-lg'
              }`}>
                {key === 'smb' && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-white px-4 py-2">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                  <p className="text-zion-slate">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <div className="text-sm text-zion-slate mb-2">
                    {tier.discount > 0 ? `${tier.discount * 100}% discount applied` : 'Standard pricing'}
                  </div>
                  <Button asChild className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                    <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${tier.name} pricing tier`}>
                      Get {tier.name} Pricing
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Service Category Pricing</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Browse our services by category and see pricing for each service type
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zion-blue text-white'
                  : 'bg-zion-slate-light text-zion-slate hover:bg-zion-blue hover:text-white'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.name
                    ? 'bg-zion-blue text-white'
                    : 'bg-zion-slate-light text-zion-slate hover:bg-zion-blue hover:text-white'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-zion-slate-light hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-zion-blue line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-zion-slate mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing by Tier */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => {
                      const discountedPrice = getDiscountedPrice(service.price || 0, key);
                      const yearlyPrice = billingCycle === 'yearly' ? getYearlyDiscount(discountedPrice) : discountedPrice;
                      
                      return (
                        <div key={key} className="flex justify-between items-center p-2 bg-zion-slate-light rounded">
                          <span className="text-sm font-medium text-zion-slate">{tier.name}:</span>
                          <div className="text-right">
                            <div className="font-bold text-zion-purple">
                              {formatPrice(yearlyPrice)}
                            </div>
                            {billingCycle === 'yearly' && (
                              <div className="text-xs text-green-600">Save 20%</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                      <Link to={`/services/${service.id}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                      <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                        Get Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-zion-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">How does the pricing tier system work?</h3>
              <p className="text-zion-slate leading-relaxed">
                We offer three pricing tiers: Startup (15% discount), Small & Medium Business (5% discount), and Enterprise (standard pricing). 
                Each tier includes different levels of support, delivery speed, and additional features. 
                The tier you qualify for depends on your business size and requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">Do you offer yearly billing discounts?</h3>
              <p className="text-zion-slate leading-relaxed">
                Yes! We offer a 20% discount for yearly billing compared to monthly billing. 
                This applies to all services and pricing tiers, providing significant savings for businesses 
                that commit to longer-term partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">What's included in the service pricing?</h3>
              <p className="text-zion-slate leading-relaxed">
                Our service pricing includes the complete solution: planning, implementation, testing, deployment, 
                documentation, and ongoing support. We also provide training for your team and ensure compliance 
                with industry standards. There are no hidden fees or additional charges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">Can I customize a service package?</h3>
              <p className="text-zion-slate leading-relaxed">
                Absolutely! We understand that every business has unique needs. We offer custom service packages 
                that can be tailored to your specific requirements, timeline, and budget. Contact us for a 
                free consultation to discuss your custom needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">What payment terms do you offer?</h3>
              <p className="text-zion-slate leading-relaxed">
                We offer flexible payment terms including upfront payment, milestone-based payments, and 
                net 30 payment terms for qualified businesses. We also accept major credit cards, bank transfers, 
                and can work with your existing procurement processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="bg-zion-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We stand behind every service with comprehensive guarantees and ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark rounded-lg">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and customized pricing proposal. 
            Our team will work with you to find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-zion-slate-light">No hidden fees, clear pricing structure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p className="text-zion-slate-light">Payment plans that work for your business</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light">Services designed to deliver measurable results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="bg-zion-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a href={CONTACT_INFO.website} className="hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>{CONTACT_INFO.businessHours}</p>
                <p className="text-zion-cyan font-semibold">{CONTACT_INFO.emergencySupport}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/comprehensive-services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>
                <a href={CONTACT_INFO.website} className="block hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                  Main Website
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2 text-sm">
                <p>✓ Competitive pricing</p>
                <p>✓ Flexible payment terms</p>
                <p>✓ No hidden fees</p>
                <p>✓ Money-back guarantee</p>
                <p>✓ Ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}