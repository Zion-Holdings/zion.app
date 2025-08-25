import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, Clock, Users, Shield, Zap, CheckCircle, ArrowRight, Calculator, TrendingUp, Award, Globe } from 'lucide-react';
import { SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '../data/comprehensiveServices';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const yearlyDiscount = 0.20; // 20% discount for yearly billing

  const getDiscountedPrice = (price: number) => {
    return billingCycle === 'yearly' ? price * (1 - yearlyDiscount) : price;
  };

  const formatPrice = (price: number) => {
    const discountedPrice = getDiscountedPrice(price);
    return billingCycle === 'yearly' ? discountedPrice / 12 : discountedPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-blue/80 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Clear, competitive pricing for all our technology services. Choose the plan that fits your budget 
              and business requirements.
            </p>
            
            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-zion-gold' : 'bg-zion-slate-light'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-sm bg-zion-gold text-zion-blue-dark px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {SERVICE_PRICING_TIERS.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`relative bg-zion-blue/20 rounded-lg p-8 border-2 transition-all hover:scale-105 ${
                    tier.name === 'professional' 
                      ? 'border-zion-gold bg-zion-blue/30' 
                      : 'border-zion-blue/30'
                  }`}
                >
                  {tier.name === 'professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-gold text-zion-blue-dark px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{tier.title}</h3>
                    <div className="text-4xl font-bold text-zion-gold mb-2">
                      ${formatPrice(tier.priceValue)}
                    </div>
                    <div className="text-zion-slate-light">
                      per {billingCycle === 'yearly' ? 'month' : tier.billingCycle}
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-zion-gold mt-2">
                        Billed annually (${getDiscountedPrice(tier.priceValue)})
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-gold flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-zion-gold text-zion-blue-dark py-3 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Category Pricing */}
      <div className="py-16 bg-zion-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Service Category Pricing</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-zion-gold" />
                  <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Custom AI Models</span>
                    <span className="text-zion-gold font-semibold">$5,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">AI Integration</span>
                    <span className="text-zion-gold font-semibold">$2,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">ML Training</span>
                    <span className="text-zion-gold font-semibold">$3,000+</span>
                  </div>
                </div>
              </div>

              {/* Cybersecurity */}
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-zion-gold" />
                  <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Security Audit</span>
                    <span className="text-zion-gold font-semibold">$3,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Penetration Testing</span>
                    <span className="text-zion-gold font-semibold">$4,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Compliance Setup</span>
                    <span className="text-zion-gold font-semibold">$5,000+</span>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-zion-gold" />
                  <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Cloud Migration</span>
                    <span className="text-zion-gold font-semibold">$8,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">CI/CD Setup</span>
                    <span className="text-zion-gold font-semibold">$3,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Infrastructure as Code</span>
                    <span className="text-zion-gold font-semibold">$4,500+</span>
                  </div>
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-zion-gold" />
                  <h3 className="text-xl font-semibold text-white">Data & Analytics</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Data Warehouse</span>
                    <span className="text-zion-gold font-semibold">$6,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">BI Dashboard</span>
                    <span className="text-zion-gold font-semibold">$4,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Data Governance</span>
                    <span className="text-zion-gold font-semibold">$5,500+</span>
                  </div>
                </div>
              </div>

              {/* Web & Mobile Development */}
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-zion-gold" />
                  <h3 className="text-xl font-semibold text-white">Web & Mobile</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Web Application</span>
                    <span className="text-zion-gold font-semibold">$15,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Mobile App</span>
                    <span className="text-zion-gold font-semibold">$20,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">E-commerce Platform</span>
                    <span className="text-zion-gold font-semibold">$25,000+</span>
                  </div>
                </div>
              </div>

              {/* IT Consulting */}
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-zion-gold" />
                  <h3 className="text-xl font-semibold text-white">IT Consulting</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Strategy Planning</span>
                    <span className="text-zion-gold font-semibold">$200/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Digital Transformation</span>
                    <span className="text-zion-gold font-semibold">$250/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Project Management</span>
                    <span className="text-zion-gold font-semibold">$180/hr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-zion-slate-light">
                  We accept all major credit cards, bank transfers, and can arrange payment plans for larger projects. 
                  All payments are processed securely through our payment partners.
                </p>
              </div>
              
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing for enterprise clients?</h3>
                <p className="text-zion-slate-light">
                  Yes, we provide custom pricing for enterprise clients with specific requirements. 
                  Contact us for a personalized quote based on your needs and project scope.
                </p>
              </div>
              
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan after signing up?</h3>
                <p className="text-zion-slate-light">
                  Absolutely! You can upgrade, downgrade, or change your plan at any time. 
                  Changes take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                <h3 className="text-xl font-semibold text-white mb-3">What's included in your support?</h3>
                <p className="text-zion-slate-light">
                  All plans include email support, while Professional and Enterprise plans include priority phone support, 
                  dedicated account manager, and 24/7 emergency support.
                </p>
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
              Contact us today to discuss your needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_INFO.mobile}`}
                className="inline-flex items-center gap-2 bg-zion-gold text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 border-2 border-zion-gold text-zion-gold px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold hover:text-zion-blue-dark transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;