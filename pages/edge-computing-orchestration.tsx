import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Cpu, Network, Zap, Shield, Database, Globe, 
  ArrowRight, CheckCircle, Star, TrendingUp, Users
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function EdgeComputingPage() {
  const features = [
    {
      icon: Cpu,
      title: "Edge Orchestration",
      description: "Intelligent distribution and management of computing workloads across edge nodes for optimal performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "IoT Management",
      description: "Comprehensive management of IoT devices with real-time monitoring and automated control systems.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-low latency data processing at the network edge for mission-critical applications.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols designed specifically for distributed edge computing environments.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Data Synchronization",
      description: "Seamless data synchronization between edge nodes and central systems with conflict resolution.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Worldwide edge network deployment with intelligent traffic routing and load balancing.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Reduce latency by 80-90% with edge processing",
    "Cut bandwidth costs by 60% through local data processing",
    "Improve reliability with distributed computing architecture",
    "Scale seamlessly across global edge networks",
    "Enable real-time AI and machine learning at the edge",
    "Reduce central server load and improve overall performance"
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Real-time quality control, predictive maintenance, and production optimization",
      results: "30% reduction in downtime, 25% improvement in product quality"
    },
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and telemedicine support",
      results: "40% faster response times, improved patient outcomes"
    },
    {
      industry: "Transportation",
      description: "Autonomous vehicle support, traffic management, and fleet optimization",
      results: "50% reduction in accidents, 35% improvement in efficiency"
    },
    {
      industry: "Retail",
      description: "Inventory management, customer analytics, and supply chain optimization",
      results: "45% reduction in stockouts, 30% improvement in customer satisfaction"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$399",
      period: "/month",
      description: "Basic edge computing for small deployments",
      features: [
        "Up to 10 edge nodes",
        "Basic orchestration",
        "Standard monitoring",
        "Email support",
        "Basic security features",
        "Up to 100 IoT devices"
      ],
      popular: false
    },
    {
      plan: "Professional",
      price: "$999",
      period: "/month",
      description: "Advanced features for growing edge networks",
      features: [
        "Everything in Starter",
        "Up to 100 edge nodes",
        "Advanced orchestration",
        "Real-time monitoring",
        "Priority support",
        "Advanced security",
        "Up to 1000 IoT devices",
        "Custom integrations"
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
        "Unlimited edge nodes",
        "Custom orchestration",
        "Dedicated support team",
        "Unlimited IoT devices",
        "On-premise deployment",
        "Custom training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Edge Computing Orchestration - Zion Tech Group</title>
        <meta name="description" content="Transform your business with edge computing orchestration. Reduce latency, cut costs, and enable real-time processing with our advanced edge computing platform." />
        <meta name="keywords" content="edge computing, IoT management, edge orchestration, real-time processing, distributed computing, Zion Tech Group" />
        <meta property="og:title" content="Edge Computing Orchestration - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with edge computing orchestration. Reduce latency, cut costs, and enable real-time processing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/edge-computing-orchestration" />
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
              Edge Computing
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Orchestration
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Bring computing power to the edge of your network. Our edge computing platform reduces latency,
              cuts bandwidth costs, and enables real-time processing for mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Powerful Edge Computing Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to deploy, manage, and optimize edge computing infrastructure.
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Edge Computing?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Edge computing brings processing power closer to where data is generated, enabling faster response times,
                reduced bandwidth usage, and improved reliability for distributed applications.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">80-90%</div>
                  <div className="text-slate-600">Latency Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-slate-600">Bandwidth Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-slate-600">Uptime Guarantee</div>
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
              See how businesses across different industries are leveraging edge computing to transform their operations.
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

      {/* Architecture */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Edge Computing Architecture</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our distributed architecture ensures optimal performance, reliability, and scalability.
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
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Edge Nodes</h3>
              <p className="text-white/70 text-sm">Distributed computing nodes deployed at strategic locations for optimal performance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Orchestration Layer</h3>
              <p className="text-white/70 text-sm">Intelligent workload distribution and management across the edge network</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Central Management</h3>
              <p className="text-white/70 text-sm">Centralized control and monitoring with real-time insights and analytics</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Edge Computing Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your edge computing needs. All plans include our core orchestration features.
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the edge computing revolution and transform your business with real-time processing capabilities.
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