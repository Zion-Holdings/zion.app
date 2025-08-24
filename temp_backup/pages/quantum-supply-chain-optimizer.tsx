import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Truck, Globe, Zap, Shield, BarChart3, 
  TrendingUp, Target, Users, CheckCircle, 
  ArrowRight, Cpu, Network, Database, 
  Lock, Clock, DollarSign, PieChart,
  Route, Package, Warehouse, Ship, Plane,
  Train, Car, Rocket, Atom, Brain, Eye
} from 'lucide-react';
import Link from 'next/link';

const QuantumSupplyChainOptimizer: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Route Optimization",
      description: "Leverage quantum algorithms to find the most efficient delivery routes across global supply chains, reducing costs by up to 40%.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Demand Forecasting",
      description: "Advanced machine learning models predict demand patterns with 95% accuracy, enabling proactive inventory management.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Real-time Tracking",
      description: "End-to-end visibility across all supply chain nodes with IoT sensors and blockchain verification.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "AI-powered risk assessment and mitigation strategies for supply chain disruptions and compliance.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive dashboards with real-time KPIs and predictive insights for continuous optimization.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "Self-learning algorithms continuously optimize supply chain operations without human intervention.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      icon: Truck,
      title: "Global Logistics",
      description: "Optimize international shipping routes, customs clearance, and multi-modal transportation.",
      benefits: ["30% cost reduction", "50% faster delivery", "Real-time tracking"]
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description: "Predict demand fluctuations and optimize stock levels across multiple locations.",
      benefits: ["25% inventory reduction", "99.9% availability", "Automated reordering"]
    },
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description: "Streamline order processing, warehouse operations, and last-mile delivery.",
      benefits: ["40% faster fulfillment", "Reduced shipping costs", "Better customer experience"]
    },
    {
      icon: Ship,
      title: "Maritime Operations",
      description: "Optimize container routing, port scheduling, and vessel utilization.",
      benefits: ["35% fuel savings", "Faster port turnaround", "Reduced emissions"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 supply chain nodes",
        "Basic route optimization",
        "Standard analytics dashboard",
        "Email support",
        "API access (1,000 calls/month)"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 1,000 supply chain nodes",
        "Advanced quantum optimization",
        "AI demand forecasting",
        "Real-time tracking & alerts",
        "Priority support",
        "API access (10,000 calls/month)",
        "Custom integrations"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited supply chain nodes",
        "Full quantum computing access",
        "Custom AI models",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited API access",
        "White-label solutions",
        "On-premise deployment"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const integrations = [
    {
      name: "ERP Systems",
      icon: Database,
      description: "SAP, Oracle, Microsoft Dynamics, NetSuite",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Transportation Management",
      icon: Truck,
      description: "Manhattan Associates, JDA, Oracle TMS",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Warehouse Management",
      icon: Warehouse,
      description: "HighJump, Tecsys, Manhattan WMS",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "E-commerce Platforms",
      icon: Globe,
      description: "Shopify, WooCommerce, Magento, BigCommerce",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Analytics Tools",
      icon: BarChart3,
      description: "Tableau, Power BI, Looker, Qlik",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Cloud Platforms",
      icon: Cpu,
      description: "AWS, Azure, Google Cloud, IBM Cloud",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Quantum Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with quantum computing and AI. Optimize routes, predict demand, and reduce costs by up to 40% with our advanced supply chain optimization platform." />
        <meta name="keywords" content="supply chain optimization, quantum computing, logistics, inventory management, demand forecasting, route optimization" />
        <meta property="og:title" content="Quantum Supply Chain Optimizer - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize your supply chain with quantum computing and AI. Optimize routes, predict demand, and reduce costs by up to 40%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/quantum-supply-chain-optimizer" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-supply-chain-optimizer" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              <span>Quantum Computing + AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quantum Supply Chain
              </span>
              <br />
              <span className="text-white">Optimizer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your supply chain operations with the world's first quantum-powered optimization platform. 
              Reduce costs by up to 40%, improve delivery times by 50%, and gain unprecedented visibility across your entire network.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Faster Delivery</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Forecast Accuracy</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum Computing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines the power of quantum algorithms with advanced AI to deliver unprecedented supply chain optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Operations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From global logistics to e-commerce fulfillment, our platform adapts to your specific supply chain challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' 
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing systems and tools. Our platform integrates with all major ERP, TMS, and analytics platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies worldwide who have already revolutionized their operations with quantum-powered optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default QuantumSupplyChainOptimizer;