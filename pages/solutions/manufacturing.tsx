import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Settings, 
  Shield, 
  Database, 
  Brain, 
  TrendingUp, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Rocket,
  Brain as BrainIcon,
  Atom,
  Factory,
  Gauge,
  Wrench,
  Cog,
  BarChart3,
  Network,
  Monitor,
  Car,
  Pill,
  Utensils
} from 'lucide-react';
import Link from 'next/link';

const ManufacturingIOTPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Smart Manufacturing",
      description: "AI-powered production optimization and automation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "IoT Integration",
      description: "Connected devices and real-time monitoring",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Industrial Security",
      description: "Cybersecurity for critical manufacturing systems",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "AI-driven maintenance and quality control",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Intelligent process optimization and automation",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description: "Real-time KPIs and operational insights",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const solutions = [
    {
      title: "Smart Factory Platform",
      description: "Comprehensive IoT and AI-powered manufacturing solution",
      features: ["Real-time Monitoring", "Predictive Maintenance", "Quality Control", "Energy Optimization"],
      href: "/smart-factory-platform"
    },
    {
      title: "Industrial IoT Security",
      description: "Advanced cybersecurity for manufacturing environments",
      features: ["Threat Detection", "Access Control", "Data Encryption", "Compliance Management"],
      href: "/industrial-iot-security"
    },
    {
      title: "Manufacturing Analytics",
      description: "AI-driven insights for operational excellence",
      features: ["Performance Metrics", "Predictive Analytics", "Quality Assurance", "Cost Optimization"],
      href: "/manufacturing-analytics"
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end supply chain visibility and optimization",
      features: ["Real-time Tracking", "Demand Forecasting", "Inventory Management", "Risk Assessment"],
      href: "/supply-chain-intelligence"
    }
  ];

  const stats = [
    { number: "30%", label: "Efficiency Gain", description: "Average improvement in production" },
    { number: "50%", label: "Cost Reduction", description: "In operational expenses" },
    { number: "99.9%", label: "Uptime", description: "Manufacturing system reliability" },
    { number: "200+", label: "Factories", description: "Connected worldwide" }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Smart production lines with AI quality control",
      icon: Car,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Electronics Production",
      description: "IoT-enabled assembly and testing automation",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Compliant and traceable production processes",
      icon: Pill,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Food & Beverage",
      description: "Quality control and safety monitoring systems",
      icon: Utensils,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const technologies = [
    {
      title: "Industrial IoT",
      description: "Connected sensors and devices for real-time monitoring",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Artificial Intelligence",
      description: "Machine learning for predictive maintenance and optimization",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Edge Computing",
      description: "Local processing for real-time decision making",
      icon: Cpu,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Digital Twins",
      description: "Virtual replicas for simulation and optimization",
      icon: Monitor,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-blue-900/20 to-purple-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Manufacturing & IoT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform manufacturing with cutting-edge IoT and AI solutions that drive efficiency, quality, and innovation in Industry 4.0.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Manufacturing Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manufacturing Innovation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for the manufacturing industry with IoT, AI, and automation at the core.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manufacturing Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive IoT and AI solutions designed to transform manufacturing operations and drive Industry 4.0.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manufacturing Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world applications of our manufacturing and IoT solutions across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced technologies powering the future of manufacturing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((technology, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${technology.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <technology.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{technology.title}</h3>
                  <p className="text-gray-400 text-lg">{technology.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manufacturing Impact & Scale
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results in transforming manufacturing operations and efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our IoT and AI solutions can drive efficiency, quality, and innovation in your manufacturing operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Manufacturing Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManufacturingIOTPage;