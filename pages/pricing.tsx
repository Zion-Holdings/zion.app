import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing — Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our autonomous AI infrastructure solutions. Choose the plan that fits your needs." />
        <meta property="og:title" content="Pricing — Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our autonomous AI infrastructure solutions. Choose the plan that fits your needs." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose the perfect plan for your infrastructure needs. All plans include our core autonomous AI capabilities.
            </p>
          </section>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-1 border border-white/20">
              <div className="flex">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg">
                  Monthly
                </button>
                <button className="px-6 py-3 text-white/70 hover:text-white transition-colors duration-200">
                  Annual
                  <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <section className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-white/70 mb-6">Perfect for small teams and startups</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">$99</span>
                    <span className="text-white/70">/month</span>
                  </div>
                  <p className="text-sm text-white/60">or $990/year (save $198)</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Up to 10 servers',
                    'Basic AI monitoring',
                    'Auto-healing alerts',
                    'Email support',
                    'Basic analytics',
                    'Security scanning',
                    'Daily backups',
                    '99.5% uptime SLA'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="w-full block text-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Get Started
                </Link>
              </div>

              {/* Professional Plan - Featured */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border-2 border-cyan-400/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-white/70 mb-6">Ideal for growing businesses</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">$299</span>
                    <span className="text-white/70">/month</span>
                  </div>
                  <p className="text-sm text-white/60">or $2,990/year (save $598)</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Up to 50 servers',
                    'Advanced AI monitoring',
                    'Full auto-healing',
                    'Priority support',
                    'Advanced analytics',
                    'Real-time security',
                    'Hourly backups',
                    '99.9% uptime SLA',
                    'Custom dashboards',
                    'API access',
                    'Team collaboration',
                    'Compliance reporting'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="w-full block text-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-white/70 mb-6">For large organizations</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-fuchsia-400">Custom</span>
                  </div>
                  <p className="text-sm text-white/60">Contact us for pricing</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Unlimited servers',
                    'Custom AI models',
                    'Full automation suite',
                    '24/7 dedicated support',
                    'Enterprise analytics',
                    'Advanced security',
                    'Real-time backups',
                    '99.99% uptime SLA',
                    'Custom integrations',
                    'White-label options',
                    'On-premise deployment',
                    'Dedicated account manager'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-fuchsia-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="w-full block text-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Detailed Feature Comparison</h2>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 text-white font-semibold">Professional</th>
                    <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'AI Monitoring', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                    { feature: 'Auto-healing', starter: 'Alerts only', pro: 'Full automation', enterprise: 'Custom rules' },
                    { feature: 'Support Response', starter: '24 hours', pro: '4 hours', enterprise: '1 hour' },
                    { feature: 'Uptime SLA', starter: '99.5%', pro: '99.9%', enterprise: '99.99%' },
                    { feature: 'Backup Frequency', starter: 'Daily', pro: 'Hourly', enterprise: 'Real-time' },
                    { feature: 'Security Features', starter: 'Basic', pro: 'Advanced', enterprise: 'Enterprise' },
                    { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                    { feature: 'API Access', starter: 'No', pro: 'Yes', enterprise: 'Full access' },
                    { feature: 'Custom Integrations', starter: 'No', pro: 'Limited', enterprise: 'Unlimited' },
                    { feature: 'Compliance', starter: 'Basic', pro: 'Standard', enterprise: 'Full' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-white/70">{row.starter}</td>
                      <td className="py-4 px-4 text-center text-cyan-400 font-medium">{row.pro}</td>
                      <td className="py-4 px-4 text-center text-fuchsia-400 font-medium">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services & Add-ons</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Custom AI Training',
                  description: 'Train AI models on your specific infrastructure patterns',
                  price: '$500/month',
                  icon: '🧠'
                },
                {
                  title: 'Dedicated Support',
                  description: 'Get a dedicated support engineer for your team',
                  price: '$1,000/month',
                  icon: '👨‍💼'
                },
                {
                  title: 'Advanced Security',
                  description: 'Enhanced security features and compliance tools',
                  price: '$300/month',
                  icon: '🔒'
                },
                {
                  title: 'Custom Integrations',
                  description: 'Build custom integrations with your existing tools',
                  price: '$200/month',
                  icon: '🔗'
                },
                {
                  title: 'Performance Optimization',
                  description: 'Expert-led infrastructure optimization',
                  price: '$400/month',
                  icon: '⚡'
                },
                {
                  title: 'Training & Workshops',
                  description: 'Team training sessions and workshops',
                  price: '$150/hour',
                  icon: '📚'
                }
              ].map((addon, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-xl">{addon.icon}</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">{addon.price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.title}</h3>
                  <p className="text-white/70 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Can I change plans at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.'
                },
                {
                  question: 'What happens if I exceed my plan limits?',
                  answer: 'We\'ll notify you when you approach your limits. You can either upgrade your plan or we can discuss custom pricing for overages.'
                },
                {
                  question: 'Do you offer discounts for non-profits?',
                  answer: 'Yes, we offer special pricing for non-profit organizations and educational institutions. Contact us for details.'
                },
                {
                  question: 'Can I cancel my subscription anytime?',
                  answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can be invoiced.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of companies already using Zion Tech Group to automate their infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
              <p className="text-sm text-white/60 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
