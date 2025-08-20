import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individual developers',
      features: [
        'Up to 5 team members',
        'Basic AI assistance',
        '10GB storage',
        'Email support',
        'Basic analytics',
        'Standard security'
      ],
      popular: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Enhanced security',
        'Custom integrations',
        'Team collaboration tools'
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited team members',
        'Full AI suite access',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom analytics',
        'Enterprise security',
        'Custom integrations',
        'Advanced collaboration',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Management',
      description: 'Advanced team collaboration and management tools'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment and global CDN'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance and advanced security features'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your team. Transparent pricing with enterprise-grade features." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Simple Pricing
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with enterprise-grade features. Scale as you grow with our flexible plans.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-500 scale-105'
                      : 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${
                      plan.popular ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-white'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-1 ${
                        plan.popular ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-white' : 'text-blue-400'
                        }`} />
                        <span className={`text-sm ${
                          plan.popular ? 'text-blue-100' : 'text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    {plan.name === 'Enterprise' ? (
                      <Button
                        href="/contact"
                        variant={plan.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Contact Sales
                      </Button>
                    ) : (
                      <Button
                        href="/contact"
                        variant={plan.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Enterprise Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced capabilities for large organizations with complex requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-400">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to start.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-400">
                  We accept all major credit cards, PayPal, and wire transfers for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers and teams already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}