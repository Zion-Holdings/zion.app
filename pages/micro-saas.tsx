import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import PricingCalculator from '../components/ui/PricingCalculator';
import { ExternalLink, TrendingUp, DollarSign, Users, Zap, Shield, BarChart3 } from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email marketing platform with advanced automation, personalization, and analytics.',
      features: [
        'AI-Powered Personalization',
        'Automated Email Sequences',
        'Advanced Segmentation',
        'A/B Testing Tools',
        'ROI Analytics & Reporting',
        'Template Library',
        'Integrations (Shopify, WordPress, etc.)'
      ],
      pricing: {
        starter: { price: '$89', period: '/month', features: ['Up to 10,000 emails', 'Basic automation', 'Email support'] },
        pro: { price: '$199', period: '/month', features: ['Up to 100,000 emails', 'Advanced automation', 'Priority support'] },
        enterprise: { price: '$399', period: '/month', features: ['Unlimited emails', 'Custom features', 'Dedicated support'] }
      },
      marketPrice: '$75-200/month',
      competitors: [
        { name: 'Mailchimp', price: '$20-350/month', link: 'https://mailchimp.com/pricing/' },
        { name: 'ConvertKit', price: '$29-199/month', link: 'https://convertkit.com/pricing' },
        { name: 'ActiveCampaign', price: '$29-259/month', link: 'https://www.activecampaign.com/pricing/' }
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      marketSize: '$1.2B',
      growthRate: '15.2%',
      targetAudience: 'Small to medium businesses, e-commerce, marketers'
    },
    {
      icon: '💳',
      title: 'Payment Processing & Billing',
      description: 'Secure payment gateway with subscription billing, recurring payments, and fraud detection.',
      features: [
        'Multi-Payment Gateway Support',
        'Subscription Billing',
        'Recurring Payments',
        'Fraud Detection & Prevention',
        'Financial Reporting & Analytics',
        'PCI Compliance',
        'Mobile SDKs',
        'Webhook Support'
      ],
      pricing: {
        starter: { price: '$49', period: '/month + 2.9%', features: ['Up to $50K/month', 'Basic fraud protection', 'Email support'] },
        pro: { price: '$99', period: '/month + 2.7%', features: ['Up to $500K/month', 'Advanced fraud protection', 'Phone support'] },
        enterprise: { price: '$199', period: '/month + 2.5%', features: ['Unlimited volume', 'Custom fraud rules', 'Dedicated support'] }
      },
      marketPrice: '$29-99/month + 2.5-3.5%',
      competitors: [
        { name: 'Stripe', price: '$0/month + 2.9%', link: 'https://stripe.com/pricing' },
        { name: 'Square', price: '$0/month + 2.9%', link: 'https://squareup.com/pricing' },
        { name: 'PayPal', price: '$0/month + 2.9%', link: 'https://www.paypal.com/us/webapps/mpp/merchant-fees' }
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-green-500',
      marketSize: '$2.8B',
      growthRate: '18.7%',
      targetAudience: 'E-commerce, SaaS companies, subscription businesses'
    },
    {
      icon: '🎯',
      title: 'Customer Relationship Management',
      description: 'Comprehensive CRM solution with sales automation, lead management, and customer insights.',
      features: [
        'Lead Management & Scoring',
        'Sales Pipeline Tracking',
        'Customer Analytics & Insights',
        'Email & Calendar Integration',
        'Mobile App (iOS/Android)',
        'Custom Dashboards',
        'API & Webhooks',
        'Multi-language Support'
      ],
      pricing: {
        starter: { price: '$25', period: '/user/month', features: ['Up to 5 users', 'Basic CRM features', 'Email support'] },
        pro: { price: '$45', period: '/user/month', features: ['Up to 25 users', 'Advanced features', 'Phone support'] },
        enterprise: { price: '$75', period: '/user/month', features: ['Unlimited users', 'Custom features', 'Dedicated support'] }
      },
      marketPrice: '$20-50/month/user',
      competitors: [
        { name: 'Salesforce', price: '$25-300/user/month', link: 'https://www.salesforce.com/crm/pricing/' },
        { name: 'HubSpot', price: '$45-1,200/month', link: 'https://www.hubspot.com/pricing/crm' },
        { name: 'Pipedrive', price: '$12.50-99/user/month', link: 'https://www.pipedrive.com/en/pricing' }
      ],
      color: 'bg-gradient-to-br from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      gradient: 'from-violet-400 to-purple-500',
      marketSize: '$58.8B',
      growthRate: '12.1%',
      targetAudience: 'Sales teams, small businesses, enterprise organizations'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and cloud backend.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Cloud Backend Integration',
        'Push Notifications',
        'App Store Optimization',
        'Analytics & Crash Reporting',
        'CI/CD Pipeline',
        'Maintenance & Updates'
      ],
      pricing: {
        starter: { price: '$5,000', period: '/project', features: ['Basic app features', 'Single platform', '3 months support'] },
        pro: { price: '$15,000', period: '/project', features: ['Advanced features', 'Both platforms', '6 months support'] },
        enterprise: { price: '$50,000+', period: '/project', features: ['Custom features', 'All platforms', '12 months support'] }
      },
      marketPrice: '$3,000-15,000/project',
      competitors: [
        { name: 'Mobomo', price: '$15,000-100,000', link: 'https://www.mobomo.com/mobile-app-development-cost/' },
        { name: 'Fueled', price: '$25,000-500,000', link: 'https://fueled.com/services/mobile-app-development/' },
        { name: 'Appinventiv', price: '$10,000-100,000', link: 'https://appinventiv.com/mobile-app-development-cost/' }
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      marketSize: '$935.2B',
      growthRate: '22.3%',
      targetAudience: 'Startups, enterprises, small businesses'
    },
    {
      icon: '🛒',
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with inventory management, payment processing, and analytics.',
      features: [
        'Product Catalog Management',
        'Shopping Cart & Checkout',
        'Inventory Tracking & Management',
        'Order Management System',
        'Analytics Dashboard',
        'Multi-channel Selling',
        'Mobile-Responsive Design',
        'SEO Optimization Tools'
      ],
      pricing: {
        starter: { price: '$79', period: '/month', features: ['Up to 1,000 products', 'Basic features', 'Email support'] },
        pro: { price: '$199', period: '/month', features: ['Up to 10,000 products', 'Advanced features', 'Phone support'] },
        enterprise: { price: '$299', period: '/month', features: ['Unlimited products', 'Custom features', 'Dedicated support'] }
      },
      marketPrice: '$29-299/month',
      competitors: [
        { name: 'Shopify', price: '$29-2,000/month', link: 'https://www.shopify.com/pricing' },
        { name: 'WooCommerce', price: '$0/month + hosting', link: 'https://woocommerce.com/pricing/' },
        { name: 'BigCommerce', price: '$29-400/month', link: 'https://www.bigcommerce.com/pricing/' }
      ],
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      gradient: 'from-amber-400 to-orange-500',
      marketSize: '$16.6B',
      growthRate: '20.1%',
      targetAudience: 'Online retailers, dropshippers, small businesses'
    },
    {
      icon: '📈',
      title: 'SEO & Content Marketing',
      description: 'Search engine optimization and content marketing services to improve online visibility.',
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Content Strategy & Creation',
        'Link Building & Outreach',
        'Performance Tracking & Reporting',
        'Technical SEO Audit',
        'Local SEO Optimization',
        'Competitor Analysis'
      ],
      pricing: {
        starter: { price: '$299', period: '/month', features: ['Basic SEO package', 'Monthly reports', 'Email support'] },
        pro: { price: '$599', period: '/month', features: ['Advanced SEO package', 'Weekly reports', 'Phone support'] },
        enterprise: { price: '$999', period: '/month', features: ['Full-service package', 'Daily monitoring', 'Dedicated support'] }
      },
      marketPrice: '$200-800/month',
      competitors: [
        { name: 'SEMrush', price: '$119-449/month', link: 'https://www.semrush.com/prices/' },
        { name: 'Ahrefs', price: '$99-999/month', link: 'https://ahrefs.com/pricing' },
        { name: 'Moz', price: '$99-599/month', link: 'https://moz.com/products/pro/pricing' }
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      marketSize: '$68.2B',
      growthRate: '14.2%',
      targetAudience: 'Small businesses, e-commerce, service providers'
    }
  ];

  const marketInsights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Market Growth',
      description: 'The micro SaaS market is growing at 15-25% annually, driven by increasing demand for specialized business solutions.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Revenue Potential',
      description: 'Successful micro SaaS companies typically achieve $1M-$10M ARR within 3-5 years with focused product-market fit.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Target Market',
      description: 'Small to medium businesses represent the largest opportunity, with 30+ million businesses in the US alone.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Technology Trends',
      description: 'AI/ML integration, API-first architecture, and no-code/low-code solutions are driving innovation.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features are becoming standard requirements for business adoption.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making and actionable insights are key differentiators in competitive markets.'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our specialized micro SaaS services designed for specific business needs. Competitive pricing, market analysis, and comprehensive solutions for modern businesses." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Specialized micro SaaS solutions with competitive pricing and market analysis." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Micro SaaS Solutions
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Specialized Business Solutions
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our focused micro SaaS services designed to solve specific business challenges. 
            Competitive pricing, market analysis, and comprehensive solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Insights & Trends
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the micro SaaS landscape to help you make informed decisions about your business technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{insight.title}</h3>
                <p className="text-gray-400 leading-relaxed">{insight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Our Micro SaaS Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each service is designed to solve a specific business problem with competitive pricing and comprehensive features.
            </p>
          </div>

          <div className="space-y-12">
            {microSaasServices.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-3xl font-bold mb-4 ${service.textColor}`}>
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                          {service.description}
                        </p>
                        
                        {/* Market Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-sm text-gray-400">Market Size</div>
                            <div className="text-lg font-bold text-white">{service.marketSize}</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-sm text-gray-400">Growth Rate</div>
                            <div className="text-lg font-bold text-white">{service.growthRate}</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-sm text-gray-400">Market Price</div>
                            <div className="text-lg font-bold text-white">{service.marketPrice}</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-sm text-gray-400">Target</div>
                            <div className="text-sm font-bold text-white">SMBs</div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Competition */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-8">
                      {/* Our Pricing */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-white mb-4">Our Pricing</h4>
                        <div className="space-y-4">
                          {Object.entries(service.pricing).map(([plan, details]) => (
                            <div key={plan} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-300 capitalize">{plan}</span>
                                <span className="text-lg font-bold text-white">{details.price}</span>
                              </div>
                              <div className="text-xs text-gray-400 mb-2">{details.period}</div>
                              <ul className="space-y-1">
                                {details.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-cursor-blue rounded-full mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Competition */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-4">Market Comparison</h4>
                        <div className="space-y-3">
                          {service.competitors.map((competitor, compIndex) => (
                            <div key={compIndex} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                              <span className="text-sm text-gray-300">{competitor.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-400">{competitor.price}</span>
                                <a 
                                  href={competitor.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button
                        href="/contact"
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Pricing Calculator
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Estimate your costs with our interactive pricing calculator. Customize your plan and see real-time pricing updates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Calculate Your Costs</h3>
              <p className="text-gray-400 mb-6">
                Use our pricing calculator to estimate monthly costs based on your specific needs. 
                Select your plan, add custom features, and see how our pricing compares to the market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300">Scale up or down based on your needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300">Competitive pricing vs. market alternatives</span>
                </div>
              </div>
            </div>
            
            <PricingCalculator service={microSaasServices[0]} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Choose Your Micro SaaS Solution?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our specialized solutions are designed to solve specific business challenges with competitive pricing and comprehensive features.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get a Custom Quote
            </Button>
            <Button
              href="/service-comparison"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              Compare Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}