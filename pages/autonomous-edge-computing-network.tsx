import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Network, 
  Cpu, 
  Zap, 
  Globe, 
  Server, 
  Shield, 
  Database, 
  Eye,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  Target,
  Users,
  Cloud,
  Lock,
  Brain
} from 'lucide-react';
import SEO from '../components/SEO';

const AutonomousEdgeComputingNetwork: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Autonomous Edge Nodes",
      description: "Self-managing edge computing nodes that automatically optimize performance and resource allocation based on real-time demand."
    },
    {
      icon: Cpu,
      title: "Intelligent Load Balancing",
      description: "AI-powered load distribution that dynamically routes traffic to optimal edge locations for minimal latency and maximum performance."
    },
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Worldwide network of edge computing locations strategically positioned to serve users with ultra-low latency connections."
    },
    {
      icon: Server,
      title: "Edge Data Processing",
      description: "Process data closer to the source, reducing bandwidth usage and enabling real-time analytics and decision making."
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols implemented at every edge node with real-time threat detection and response."
    },
    {
      icon: Database,
      title: "Distributed Storage",
      description: "Intelligent data distribution across edge locations for optimal access patterns and redundancy."
    }
  ];

  const benefits = [
    "Ultra-low latency for real-time applications",
    "Automatic scaling and optimization",
    "Reduced bandwidth costs and usage",
    "Enhanced user experience globally",
    "Built-in security and compliance",
    "Seamless integration with existing infrastructure"
  ];

  const useCases = [
    {
      title: "IoT Applications",
      description: "Process IoT device data at the edge for instant response and reduced cloud dependency."
    },
    {
      title: "Content Delivery",
      description: "Deliver high-quality content with minimal latency to users worldwide."
    },
    {
      title: "Real-time Analytics",
      description: "Analyze data streams in real-time without sending everything to centralized servers."
    },
    {
      title: "Mobile Applications",
      description: "Provide mobile users with fast, responsive experiences regardless of location."
    }
  ];

  const technicalFeatures = [
    {
      category: "Edge Computing",
      features: ["Autonomous Node Management", "Dynamic Resource Allocation", "Intelligent Caching"]
    },
    {
      category: "Network Optimization",
      features: ["AI-Powered Routing", "Load Balancing", "Traffic Optimization"]
    },
    {
      category: "Security & Compliance",
      features: ["Edge-to-Edge Encryption", "Threat Detection", "Compliance Monitoring"]
    }
  ];

  return (
    <>
      <SEO
        title="Autonomous Edge Computing Network - Zion Tech Group"
        description="Revolutionary autonomous edge computing network that automatically optimizes performance, reduces latency, and scales globally with AI-powered intelligence."
        keywords={["edge computing", "autonomous network", "edge optimization", "low latency", "global network", "Zion Tech Group"]}
      />
      <Layout>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                  <Network className="w-4 h-4 mr-2" />
                  Autonomous Edge Technology
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Autonomous Edge
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Computing Network
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Experience the future of edge computing with our revolutionary Autonomous Edge Computing Network. 
                  Self-managing, globally distributed, and AI-optimized for unprecedented performance and reliability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                    Deploy Network
                  </button>
                  <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                    Network Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Revolutionary Network Features
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  The most intelligent and autonomous edge computing network ever created
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Features */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Technical Capabilities
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Built with cutting-edge technology for maximum performance and reliability
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technicalFeatures.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
                    <div className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Real-World Applications
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover how our autonomous edge network transforms industries and user experiences
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our Edge Network?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Unparalleled advantages for modern computing and networking needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Deploy the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your network infrastructure with autonomous edge computing today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                    Start Deployment
                  </button>
                  <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                    Contact Experts
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AutonomousEdgeComputingNetwork;