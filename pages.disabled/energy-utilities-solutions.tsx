import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Zap, Battery, Wind, Sun, Droplets, Leaf, Gauge, 
  TrendingUp, Shield, Globe, Users, Award, Clock, CheckCircle, ArrowRight,
  Smartphone, Monitor, Cloud, Database, Brain, Atom
} from 'lucide-react';

const EnergyUtilitiesSolutions: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Grid Management",
      description: "AI-powered grid optimization and real-time energy distribution",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Battery,
      title: "Energy Storage Solutions",
      description: "Advanced battery technology and grid-scale storage systems",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Wind,
      title: "Renewable Energy Integration",
      description: "Seamless integration of wind, solar, and hydro power sources",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sun,
      title: "Solar Power Optimization",
      description: "AI-driven solar panel efficiency and energy harvesting",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Droplets,
      title: "Water Management Systems",
      description: "Intelligent water distribution and conservation platforms",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Leaf,
      title: "Sustainability Analytics",
      description: "Comprehensive environmental impact monitoring and reporting",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const solutions = [
    {
      category: "Energy Management",
      items: [
        "Real-time Energy Monitoring",
        "Predictive Load Balancing",
        "Demand Response Automation",
        "Energy Efficiency Optimization",
        "Peak Demand Management",
        "Grid Stability Control"
      ]
    },
    {
      category: "Renewable Integration",
      items: [
        "Solar Farm Management",
        "Wind Power Optimization",
        "Hydroelectric Control Systems",
        "Biomass Energy Processing",
        "Geothermal Integration",
        "Energy Storage Management"
      ]
    },
    {
      category: "Utility Operations",
      items: [
        "Smart Meter Infrastructure",
        "Billing & Customer Management",
        "Outage Detection & Response",
        "Asset Performance Monitoring",
        "Maintenance Scheduling",
        "Regulatory Compliance"
      ]
    }
  ];

  const technologies = [
    "AI Consciousness Integration",
    "Quantum Computing Optimization",
    "IoT Sensor Networks",
    "Machine Learning Analytics",
    "Blockchain Energy Trading",
    "Predictive Maintenance",
    "Cloud-Native Architecture",
    "Edge Computing Solutions"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "30% Energy Savings",
      description: "Reduce operational costs with intelligent energy management"
    },
    {
      icon: Shield,
      title: "Enhanced Reliability",
      description: "Improve grid stability and reduce outage frequency"
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Reduce carbon footprint with renewable energy integration"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Provide better service with predictive maintenance"
    }
  ];

  return (
    <Layout
      title="Energy & Utilities Solutions - Zion Tech Group"
      description="Revolutionary AI-powered energy and utilities solutions for smart grid management, renewable integration, and sustainable operations. Transform your energy infrastructure with cutting-edge technology."
      keywords="energy technology, utilities solutions, smart grid, renewable energy, energy management, sustainable technology"
      canonicalUrl="https://ziontechgroup.com/energy-utilities-solutions"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-green-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>Sustainable Energy Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Powering the Future of
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
                Energy & Utilities
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your energy infrastructure with AI consciousness, quantum computing, and autonomous systems. 
              Build a sustainable future with intelligent energy management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Energy Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the future of energy technology with our revolutionary AI-powered platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/20"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From generation to distribution, we provide end-to-end solutions for modern energy companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Gauge className="w-6 h-6 text-green-400 mr-3" />
                  {solution.category}
                </h3>
                <ul className="space-y-4">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powered by Revolutionary Technology
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Built on the latest advancements in AI consciousness, quantum computing, and autonomous systems
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/80 text-sm font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the competitive advantages of our revolutionary energy technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-green-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Energy Infrastructure?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join the future of sustainable energy with our revolutionary AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EnergyUtilitiesSolutions;