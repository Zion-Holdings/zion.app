import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Globe, 
  CheckCircle, Star, TrendingUp, Zap, Users
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI analytics",
        "5 customizable dashboards",
        "Standard reporting",
        "Email support",
        "Up to 10 users",
        "Basic security features"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced AI capabilities",
        "Unlimited dashboards",
        "Custom reporting",
        "Priority support",
        "Up to 50 users",
        "API access",
        "Advanced security"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support team",
        "Unlimited users",
        "On-premise deployment",
        "Custom training",
        "SLA guarantees",
        "Advanced compliance"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const addOns = [
    {
      name: "AI Research Assistant",
      price: "$199",
      period: "/month",
      description: "Autonomous research and knowledge discovery",
      features: ["Literature analysis", "Knowledge synthesis", "Research automation"],
      icon: Brain
    },
    {
      name: "Quantum Cybersecurity",
      price: "$399",
      period: "/month",
      description: "Future-proof security with quantum-resistant encryption",
      features: ["Quantum encryption", "AI threat detection", "Zero-trust architecture"],
      icon: Shield
    },
    {
      name: "Space Technology",
      price: "$299",
      period: "/month",
      description: "Satellite data and space resource intelligence",
      features: ["Satellite optimization", "Earth observation", "Orbital analytics"],
      icon: Rocket
    },
    {
      name: "Edge Computing",
      price: "$199",
      period: "/month",
      description: "Real-time processing at the network edge",
      features: ["Edge orchestration", "IoT management", "Real-time processing"],
      icon: Cpu
    }
  ];

  const faqs = [
    {
      question: "What's included in the base pricing?",
      answer: "Our base pricing includes core AI analytics, basic dashboards, standard reporting, and email support. Each plan builds upon these features with additional capabilities and user limits."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "Do you offer custom pricing for specific needs?",
      answer: "Absolutely! Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored quote."
    },
    {
      question: "What support options are available?",
      answer: "Starter plans include email support, Professional plans get priority support, and Enterprise plans include dedicated support teams with SLA guarantees."
    },
    {
      question: "Are there any setup or hidden fees?",
      answer: "No hidden fees! Setup is included in all plans. The only additional costs are for add-on services and exceeding user limits on lower-tier plans."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! We offer a 20% discount for annual billing on all plans. This is applied automatically when you choose annual billing."
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing 2025 - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, cybersecurity, and technology solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI pricing, cybersecurity pricing, technology pricing, Zion Tech Group" />
        <meta property="og:title" content="Pricing 2025 - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI, cybersecurity, and technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing-2025" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple,
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the plan that fits your business needs and budget. All plans include our core features 
              with transparent pricing and no hidden fees. Start small and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#plans"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Plans
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Choose Your Plan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start with what you need and scale as you grow. All plans include our core AI and technology features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-50 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Add-On Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enhance your solution with specialized services. Add these to any plan for comprehensive coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {addon.price}
                  <span className="text-lg text-slate-600">{addon.period}</span>
                </div>
                <p className="text-slate-600 mb-4">{addon.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature) => (
                    <li key={feature} className="text-sm text-slate-600 flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Add Service
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another technology company. Here's what makes us different and worth your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-slate-600">World-class engineers and researchers with decades of combined experience.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600">Track record of successful implementations across diverse industries.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
              <p className="text-slate-600">Bank-level security with SOC 2 compliance and quantum-resistant encryption.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Support</h3>
              <p className="text-slate-600">24/7 support across multiple time zones with local expertise.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose the plan that fits your needs and start transforming your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}