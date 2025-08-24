import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Rocket, Satellite, Globe, Zap, Shield, Database,
  ArrowRight, CheckCircle, Star, TrendingUp, Users
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SpaceTechnologyPage() {
  const features = [
    {
      icon: Satellite,
      title: "Satellite Optimization",
      description: "Advanced algorithms for optimal satellite positioning, orbit management, and resource utilization.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Earth Observation",
      description: "High-resolution satellite imagery and data analysis for environmental monitoring and insights.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Orbital Analytics",
      description: "Real-time tracking and predictive analytics for space debris, collision avoidance, and orbital dynamics.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Space Security",
      description: "Advanced cybersecurity and threat detection for satellite systems and space infrastructure.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "AI-powered processing of massive satellite datasets for actionable business intelligence.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Launch Services",
      description: "Support for satellite launches, deployment strategies, and mission planning optimization.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Access to real-time global data and insights",
    "Optimize satellite operations and reduce costs",
    "Enhanced environmental monitoring and sustainability",
    "Improved navigation and positioning accuracy",
    "Advanced space debris tracking and collision avoidance",
    "Enable new space-based business opportunities"
  ];

  const useCases = [
    {
      industry: "Agriculture",
      description: "Crop monitoring, soil analysis, and precision farming using satellite data",
      results: "25% increase in crop yields, 30% reduction in water usage"
    },
    {
      industry: "Logistics",
      description: "Global supply chain tracking, route optimization, and asset monitoring",
      results: "40% improvement in delivery efficiency, 35% reduction in costs"
    },
    {
      industry: "Environmental",
      description: "Climate monitoring, deforestation tracking, and natural disaster assessment",
      results: "Real-time environmental insights, improved disaster response"
    },
    {
      industry: "Telecommunications",
      description: "Satellite communications optimization and network planning",
      results: "50% improvement in network coverage, 25% reduction in latency"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "/month",
      description: "Basic space technology services for small businesses",
      features: [
        "Basic satellite data access",
        "Standard analytics",
        "Email support",
        "Up to 5 users",
        "Basic reporting",
        "Standard security"
      ],
      popular: false
    },
    {
      plan: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for growing organizations",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Real-time monitoring",
        "Priority support",
        "Up to 25 users",
        "Custom dashboards",
        "API access",
        "Advanced security"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Professional",
        "Custom satellite solutions",
        "Dedicated support team",
        "Unlimited users",
        "On-premise deployment",
        "Custom training",
        "SLA guarantees",
        "Executive reporting"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Space Technology - Zion Tech Group</title>
        <meta name="description" content="Leverage space technology for business advantage. Satellite optimization, earth observation, and orbital analytics to transform your operations." />
        <meta name="keywords" content="space technology, satellite optimization, earth observation, orbital analytics, space data, Zion Tech Group" />
        <meta property="og:title" content="Space Technology - Zion Tech Group" />
        <meta property="og:description" content="Leverage space technology for business advantage. Satellite optimization, earth observation, and orbital analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/space-technology" />
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
              Space
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Technology
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Harness the power of space technology for business advantage. From satellite optimization to earth observation,
              our space technology solutions provide unprecedented insights and capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore Space Solutions
              </a>
              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Advanced Space Technology Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive space technology solutions that bring the power of space to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Space Technology?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Space technology provides unique capabilities that are impossible to achieve with terrestrial solutions alone.
                Access global data, optimize operations, and gain competitive advantages through space-based insights.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Space Technology Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Global</div>
                  <div className="text-slate-600">Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">Real-time</div>
                  <div className="text-slate-600">Data Access</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-slate-600">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Industry Applications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how businesses across different industries are leveraging space technology to transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.industry}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">Results: {useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Space Technology Infrastructure</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Advanced infrastructure and technologies that power our space technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Satellite Networks</h3>
              <p className="text-white/70 text-sm">Global network of satellites providing comprehensive coverage and data collection</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Centers</h3>
              <p className="text-white/70 text-sm">High-performance computing infrastructure for processing massive satellite datasets</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Launch Services</h3>
              <p className="text-white/70 text-sm">Partnerships with leading launch providers for satellite deployment and management</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Space Technology Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your space technology needs. All plans include our core space data and analytics features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</h3>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Reach for the Stars?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your business with space technology. Access global data and insights that were once impossible to obtain.
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
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}