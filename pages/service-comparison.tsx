import React from 'react';
import Head from 'next/head';
import ServiceComparison from '../components/ui/ServiceComparison';
import Button from '../components/ui/Button';
import { ArrowLeft, BarChart3, TrendingUp, DollarSign } from 'lucide-react';

export default function ServiceComparisonPage() {
  const microSaasServices = [
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email marketing platform with advanced automation, personalization, and analytics.',
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
      marketSize: '$1.2B',
      growthRate: '15.2%',
      targetAudience: 'Small to medium businesses, e-commerce, marketers'
    },
    {
      icon: '💳',
      title: 'Payment Processing & Billing',
      description: 'Secure payment gateway with subscription billing, recurring payments, and fraud detection.',
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
      marketSize: '$2.8B',
      growthRate: '18.7%',
      targetAudience: 'E-commerce, SaaS companies, subscription businesses'
    },
    {
      icon: '🎯',
      title: 'Customer Relationship Management',
      description: 'Comprehensive CRM solution with sales automation, lead management, and customer insights.',
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
      marketSize: '$58.8B',
      growthRate: '12.1%',
      targetAudience: 'Sales teams, small businesses, enterprise organizations'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and cloud backend.',
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
      marketSize: '$935.2B',
      growthRate: '22.3%',
      targetAudience: 'Startups, enterprises, small businesses'
    },
    {
      icon: '🛒',
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with inventory management, payment processing, and analytics.',
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
      marketSize: '$16.6B',
      growthRate: '20.1%',
      targetAudience: 'Online retailers, dropshippers, small businesses'
    },
    {
      icon: '📈',
      title: 'SEO & Content Marketing',
      description: 'Search engine optimization and content marketing services to improve online visibility.',
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
      marketSize: '$68.2B',
      growthRate: '14.2%',
      targetAudience: 'Small businesses, e-commerce, service providers'
    }
  ];

  const marketOverview = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Total Market Size',
      value: '$1.1T+',
      description: 'Combined market value of all micro SaaS segments'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Average Growth Rate',
      value: '18.5%',
      description: 'Annual growth across all micro SaaS markets'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Price Range',
      value: '$25-$999',
      description: 'Typical monthly pricing for micro SaaS services'
    }
  ];

  return (
    <>
      <Head>
        <title>Service Comparison | Zion Tech Group - Micro SaaS Solutions</title>
        <meta name="description" content="Compare our micro SaaS services with market alternatives. Detailed pricing, features, and competitive analysis to help you make informed decisions." />
        <meta property="og:title" content="Service Comparison | Zion Tech Group" />
        <meta property="og:description" content="Compare micro SaaS services with market alternatives." />
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
            Service Comparison
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Compare Our Services
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Make informed decisions with our comprehensive service comparisons. 
            See how our micro SaaS solutions stack up against market alternatives.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Overview
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the broader micro SaaS landscape to help you evaluate our offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketOverview.map((item, index) => (
              <div key={index} className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-3">{item.value}</div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparisons */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Detailed Service Comparisons
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Explore each service in detail with comprehensive pricing, feature comparisons, and market analysis.
            </p>
          </div>

          <div className="space-y-16">
            {microSaasServices.map((service, index) => (
              <ServiceComparison key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Choose Your Solution?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our detailed comparisons help you make informed decisions. 
            Contact us to discuss your specific needs and get a custom quote.
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
              href="/micro-saas"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl"
        >
          <ArrowLeft className="w-5 h-5 rotate-90" />
        </Button>
      </div>
    </>
  );
}