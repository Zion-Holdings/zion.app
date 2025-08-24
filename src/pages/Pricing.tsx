import React, { useState } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Check, Star, Zap, Shield, Users, Globe, Clock, MessageSquare } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Basic IT Support',
        'Email & Phone Support',
        'Security Monitoring',
        'Monthly Reports',
        '5 User Licenses',
        'Basic Analytics'
      ],
      popular: false,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Everything in Starter',
        'AI-Powered Solutions',
        '24/7 Support',
        'Advanced Security',
        'Custom Integrations',
        '25 User Licenses',
        'Advanced Analytics',
        'Priority Support'
      ],
      popular: true,
      icon: Zap,
      color: 'bg-zion-blue'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: { monthly: 799, yearly: 7990 },
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Dedicated Account Manager',
        'On-Site Support',
        'Unlimited User Licenses',
        'Custom Reporting',
        'SLA Guarantees',
        'White-label Solutions'
      ],
      popular: false,
      icon: Shield,
      color: 'bg-purple-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Services Package',
      description: 'Advanced AI and machine learning solutions',
      price: { monthly: 199, yearly: 1990 },
      features: ['Custom AI Models', 'Data Analytics', 'Process Automation']
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security and compliance solutions',
      price: { monthly: 149, yearly: 1490 },
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Reporting']
    },
    {
      name: 'Green IT Solutions',
      description: 'Sustainable technology and energy optimization',
      price: { monthly: 99, yearly: 990 },
      features: ['Energy Audits', 'Sustainable Hardware', 'Carbon Footprint Tracking']
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive IT solutions, AI services, and tech talent services. Choose the plan that fits your business needs."
        keywords="pricing, IT services, AI solutions, cybersecurity, enterprise pricing, business solutions"
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees.
            </p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-zion-blue shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-zion-blue shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly Billing
                  {billingCycle === 'yearly' && (
                    <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
                      Save {savings}%
                    </Badge>
                  )}
                </button>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-zion-blue scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-zion-blue text-white px-4 py-2">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          ${billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${plan.price.yearly})
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-zion-blue hover:bg-zion-blue/90' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      onClick={() => setSelectedPlan(plan.name)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your plan with specialized services tailored to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <p className="text-gray-600">{addon.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-gray-900">
                          ${billingCycle === 'yearly' ? addon.price.yearly / 12 : addon.price.monthly}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${addon.price.yearly})
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {addon.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I change my plan at any time?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a setup fee?
                  </h3>
                  <p className="text-gray-600">
                    No setup fees for any of our plans. You only pay the monthly or yearly subscription cost.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for annual plans.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer custom pricing?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for details.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a money-back guarantee?
                  </h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee for all new subscriptions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I cancel anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your subscription at any time with no cancellation fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and start transforming your technology infrastructure today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}