import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, Star, ArrowRight, Zap, Shield, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator',
      icon: '📝',
      description: 'AI-powered content creation with 50+ language support',
      plans: [
        {
          name: 'Starter',
          price: '$29',
          period: '/month',
          description: 'Perfect for individuals and small blogs',
          features: [
            '1,000 words per month',
            '5 content templates',
            'Basic SEO optimization',
            'Email support',
            'API access (100 calls/month)',
            'Content analytics dashboard'
          ],
          popular: false,
          color: 'border-gray-600',
          buttonColor: 'bg-gray-600 hover:bg-gray-700'
        },
        {
          name: 'Professional',
          price: '$99',
          period: '/month',
          description: 'Ideal for growing businesses and agencies',
          features: [
            '10,000 words per month',
            '25+ content templates',
            'Advanced SEO tools',
            'Priority support',
            'API access (1,000 calls/month)',
            'Advanced analytics',
            'Team collaboration',
            'Custom branding'
          ],
          popular: true,
          color: 'border-purple-500',
          buttonColor: 'bg-purple-600 hover:bg-purple-700'
        },
        {
          name: 'Enterprise',
          price: '$299',
          period: '/month',
          description: 'For large organizations and enterprises',
          features: [
            'Unlimited words',
            'All templates + custom',
            'Full SEO suite',
            'Dedicated support',
            'Unlimited API access',
            'Advanced analytics',
            'White-label solution',
            'Custom integrations',
            'SLA guarantee'
          ],
          popular: false,
          color: 'border-purple-600',
          buttonColor: 'bg-purple-600 hover:bg-purple-700'
        }
      ]
    },
    {
      name: 'Cloud Monitoring & Analytics',
      icon: '👁️',
      description: 'Real-time infrastructure monitoring with AI-powered insights',
      plans: [
        {
          name: 'Starter',
          price: '$49',
          period: '/month',
          description: 'Perfect for small teams and startups',
          features: [
            'Up to 10 servers',
            'Basic monitoring',
            'Email alerts',
            '7-day data retention',
            'Community support',
            'Mobile app access'
          ],
          popular: false,
          color: 'border-gray-600',
          buttonColor: 'bg-gray-600 hover:bg-gray-700'
        },
        {
          name: 'Professional',
          price: '$199',
          period: '/month',
          description: 'Ideal for growing businesses',
          features: [
            'Up to 100 servers',
            'Advanced monitoring',
            'SMS & Slack alerts',
            '30-day data retention',
            'Priority support',
            'Custom dashboards',
            'API access',
            'Team collaboration'
          ],
          popular: true,
          color: 'border-green-500',
          buttonColor: 'bg-green-600 hover:bg-green-700'
        },
        {
          name: 'Enterprise',
          price: '$599',
          period: '/month',
          description: 'For large organizations',
          features: [
            'Unlimited servers',
            'Full monitoring suite',
            'Custom integrations',
            '1-year data retention',
            'Dedicated support',
            'White-label solution',
            'SLA guarantee',
            'On-premise option'
          ],
          popular: false,
          color: 'border-green-600',
          buttonColor: 'bg-green-600 hover:bg-green-700'
        }
      ]
    },
    {
      name: 'AI-Powered SEO Suite',
      icon: '🔍',
      description: 'Comprehensive SEO tools with AI-powered optimization',
      plans: [
        {
          name: 'Starter',
          price: '$39',
          period: '/month',
          description: 'Perfect for small websites and blogs',
          features: [
            'Up to 5 websites',
            'Basic keyword research',
            'Monthly site audits',
            'Email support',
            'Basic reporting',
            'Mobile app access'
          ],
          popular: false,
          color: 'border-gray-600',
          buttonColor: 'bg-gray-600 hover:bg-gray-700'
        },
        {
          name: 'Professional',
          price: '$129',
          period: '/month',
          description: 'Ideal for growing businesses and agencies',
          features: [
            'Up to 25 websites',
            'Advanced keyword research',
            'Weekly site audits',
            'Priority support',
            'Advanced reporting',
            'Competitor analysis',
            'API access',
            'White-label reports'
          ],
          popular: true,
          color: 'border-blue-500',
          buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
          name: 'Enterprise',
          price: '$399',
          period: '/month',
          description: 'For large organizations and enterprises',
          features: [
            'Unlimited websites',
            'Full SEO suite',
            'Daily site audits',
            'Dedicated support',
            'Custom reporting',
            'Advanced analytics',
            'SLA guarantee',
            'On-premise option'
          ],
          popular: false,
          color: 'border-blue-600',
          buttonColor: 'bg-blue-600 hover:bg-blue-700'
        }
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with SLA guarantees and priority response times.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with SSO, advanced authentication, and compliance certifications.'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with CDN, load balancing, and disaster recovery capabilities.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: 'Custom Integrations',
      description: 'Custom API development, webhook support, and integration with your existing systems.'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all our services offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can be invoiced.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we offer volume discounts for teams and organizations. Contact our sales team for custom pricing.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing | Zion Tech Group - Transparent Pricing for All Services</title>
        <meta name="description" content="Simple, transparent pricing for all our micro SaaS services. Choose the plan that fits your needs with no hidden fees." />
        <meta property="og:title" content="Pricing | Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI Content Generator, Cloud Monitoring, SEO Suite, and more." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Choose Your Plan
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Simple, transparent pricing for all our micro SaaS services. No hidden fees, no surprises. Choose the plan that fits your needs and scale as you grow.
          </p>
        </div>
      </section>

      {/* Micro SaaS Services Pricing */}
      {microSaasServices.map((service, serviceIndex) => (
        <section key={serviceIndex} className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-20">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                {service.name}
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.plans.map((plan, planIndex) => (
                <Card
                  key={planIndex}
                  className={`relative group ${plan.popular ? 'ring-2 ring-cursor-blue scale-105' : ''} border ${plan.color} hover:border-cursor-blue/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cursor-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cursor-blue mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    className={`w-full ${plan.buttonColor} text-white`}
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Enterprise Features */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Enterprise Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Advanced features and capabilities for large organizations and enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-cursor-blue/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cursor-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Frequently Asked Questions
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about our pricing and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-cursor-blue/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cursor-blue transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start your free trial today and experience the power of our AI-powered micro SaaS services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}