import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started with automation',
    features: [
      '5 Active Automations',
      'Basic AI Content Generation',
      'Standard Monitoring',
      'Email Support',
      '10GB Storage',
      'Basic Analytics'
    ],
    color: 'from-blue-400 to-cyan-500',
    icon: '🚀'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing companies with advanced automation needs',
    features: [
      '25 Active Automations',
      'Advanced AI Content Generation',
      'Real-time Monitoring',
      'Priority Support',
      '100GB Storage',
      'Advanced Analytics',
      'Custom Integrations',
      'API Access'
    ],
    popular: true,
    color: 'from-cyan-400 to-fuchsia-500',
    icon: '⚡'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$999',
    period: '/month',
    description: 'Full-scale solution for large enterprises with complex requirements',
    features: [
      'Unlimited Automations',
      'Enterprise AI Models',
      '24/7 Monitoring & Support',
      'Dedicated Account Manager',
      'Unlimited Storage',
      'Custom Analytics Dashboard',
      'White-label Solutions',
      'SLA Guarantees',
      'Advanced Security Features',
      'Custom Development'
    ],
    color: 'from-fuchsia-400 to-purple-500',
    icon: '🏢'
  }
];

const additionalServices = [
  {
    name: 'Custom AI Model Training',
    price: 'From $5,000',
    description: 'Train custom AI models specific to your business needs',
    icon: '🤖'
  },
  {
    name: 'Dedicated Infrastructure',
    price: 'From $2,000/month',
    description: 'Exclusive cloud infrastructure for your applications',
    icon: '☁️'
  },
  {
    name: 'Security Audit & Compliance',
    price: 'From $3,000',
    description: 'Comprehensive security assessment and compliance certification',
    icon: '🔒'
  },
  {
    name: '24/7 Technical Support',
    price: 'From $1,500/month',
    description: 'Round-the-clock technical support and monitoring',
    icon: '🛟'
  }
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<string>('professional');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getYearlyPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace('$', ''));
    return `$${Math.round(price * 12 * 0.8)}`; // 20% discount for yearly
  };

  return (
    <>
      <Head>
        <title>Pricing — Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your automation needs. Transparent pricing with enterprise-grade features." />
        <meta property="og:title" content="Pricing — Zion Tech Group" />
        <meta property="og:description" content="Choose the perfect plan for your automation needs. Transparent pricing with enterprise-grade features." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your automation needs. All plans include our core features with no hidden costs.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-cyan-400' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}></div>
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-white/60'}`}>
                Yearly <span className="text-cyan-400">(Save 20%)</span>
              </span>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 ${
                    selectedTier === tier.id
                      ? `border-cyan-400/50 shadow-2xl shadow-cyan-400/20`
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <span className="text-3xl">{tier.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-white/70 mb-6">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? tier.price : getYearlyPrice(tier.price)}
                      </span>
                      <span className="text-white/60">{billingCycle === 'monthly' ? tier.period : '/month'}</span>
                    </div>
                    <button
                      onClick={() => setSelectedTier(tier.id)}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        selectedTier === tier.id
                          ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white shadow-lg'
                          : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                      }`}
                    >
                      {selectedTier === tier.id ? 'Selected' : 'Choose Plan'}
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white mb-4">What's included:</h4>
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Feature Comparison</h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-white/80 font-medium">Feature</th>
                      <th className="text-center p-6 text-white/80 font-medium">Starter</th>
                      <th className="text-center p-6 text-white/80 font-medium">Professional</th>
                      <th className="text-center p-6 text-white/80 font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-white font-medium">Active Automations</td>
                      <td className="p-6 text-center text-white/80">5</td>
                      <td className="p-6 text-center text-white/80">25</td>
                      <td className="p-6 text-center text-white/80">Unlimited</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-white font-medium">AI Content Generation</td>
                      <td className="p-6 text-center text-white/80">Basic</td>
                      <td className="p-6 text-center text-white/80">Advanced</td>
                      <td className="p-6 text-center text-white/80">Enterprise</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-white font-medium">Storage</td>
                      <td className="p-6 text-center text-white/80">10GB</td>
                      <td className="p-6 text-center text-white/80">100GB</td>
                      <td className="p-6 text-center text-white/80">Unlimited</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-white font-medium">Support</td>
                      <td className="p-6 text-center text-white/80">Email</td>
                      <td className="p-6 text-center text-white/80">Priority</td>
                      <td className="p-6 text-center text-white/80">24/7 Dedicated</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-white font-medium">API Access</td>
                      <td className="p-6 text-center text-white/80">❌</td>
                      <td className="p-6 text-center text-white/80">✅</td>
                      <td className="p-6 text-center text-white/80">✅</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-white font-medium">Custom Development</td>
                      <td className="p-6 text-center text-white/80">❌</td>
                      <td className="p-6 text-center text-white/80">❌</td>
                      <td className="p-6 text-center text-white/80">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-white/70 text-sm mb-3">{service.description}</p>
                      <div className="text-cyan-400 font-semibold">{service.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan at any time?</h3>
                <p className="text-white/80">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-white/80">
                  We offer a 14-day free trial for all plans. No credit card required to start your trial.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">What kind of support do you provide?</h3>
                <p className="text-white/80">
                  Support varies by plan: Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom solutions?</h3>
                <p className="text-white/80">
                  Yes, our Enterprise plan includes custom development services. We can also create tailored solutions for specific business requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our autonomous technology platform to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}