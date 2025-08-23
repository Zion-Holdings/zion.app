import React from 'react';
import Layout from '../components/layout/Layout';
import { DollarSign, Sparkles, CheckCircle, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <DollarSign className="w-4 h-4" />
                Transparent Pricing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pricing Plans
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our revolutionary 
                technology solutions with transparent, predictable pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$99</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm">Perfect for small businesses and startups</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">AI Consciousness Basic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Quantum Security Essentials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Basic Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">5 User Licenses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Standard Documentation</span>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Professional Plan */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/50 rounded-2xl hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Professional</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm">Ideal for growing businesses and teams</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">AI Consciousness Advanced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Quantum Security Pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Priority Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">25 User Licenses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Advanced Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Training & Workshops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Custom Integrations</span>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-gray-400 text-sm">Tailored solutions for large organizations</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Full AI Consciousness Suite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Quantum Security Enterprise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">24/7 Dedicated Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Unlimited User Licenses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Custom Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">On-site Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Custom Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Dedicated Success Manager</span>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enhance your experience with additional services and add-ons tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Custom Training", price: "$2,500", description: "On-site training for your team" },
                { name: "Priority Support", price: "$500/month", description: "24/7 priority support access" },
                { name: "Custom Integration", price: "$1,000", description: "Custom system integration" },
                { name: "Performance Audit", price: "$750", description: "Comprehensive performance review" },
                { name: "Security Assessment", price: "$1,200", description: "Full security evaluation" },
                { name: "API Development", price: "$800", description: "Custom API development" },
                { name: "Data Migration", price: "$1,500", description: "Data migration services" },
                { name: "Consulting Hours", price: "$200/hour", description: "Expert consulting services" }
              ].map((addon, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{addon.price}</p>
                  <p className="text-gray-400 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Feature Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Compare features across all plans to find the perfect fit for your organization.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {[
                    { feature: "AI Consciousness", starter: "Basic", professional: "Advanced", enterprise: "Full Suite" },
                    { feature: "Quantum Security", starter: "Essentials", professional: "Pro", enterprise: "Enterprise" },
                    { feature: "User Licenses", starter: "5", professional: "25", enterprise: "Unlimited" },
                    { feature: "Support", starter: "Basic", professional: "Priority", enterprise: "24/7 Dedicated" },
                    { feature: "Training", starter: "Documentation", professional: "Workshops", enterprise: "On-site" },
                    { feature: "Customization", starter: "Standard", professional: "Limited", enterprise: "Full" },
                    { feature: "Integration", starter: "Basic", professional: "Custom", enterprise: "Custom Dev" },
                    { feature: "Success Manager", starter: "No", professional: "No", enterprise: "Yes" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-700/30">
                      <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-300">{row.starter}</td>
                      <td className="py-4 px-6 text-center text-cyan-300">{row.professional}</td>
                      <td className="py-4 px-6 text-center text-purple-300">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Get answers to common questions about our pricing and services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change my plan at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "Do you offer annual billing discounts?",
                  answer: "Yes, we offer a 20% discount for annual billing on all plans. Contact us for more details."
                },
                {
                  question: "What's included in the support?",
                  answer: "Support includes email and chat support during business hours. Professional and Enterprise plans include priority support."
                },
                {
                  question: "Can I get a custom quote?",
                  answer: "Absolutely! For Enterprise plans or custom requirements, our sales team will create a tailored quote for your needs."
                },
                {
                  question: "Is there a setup fee?",
                  answer: "No setup fees for Starter and Professional plans. Enterprise plans may include setup costs depending on requirements."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose the perfect plan for your business and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Free Trial
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}