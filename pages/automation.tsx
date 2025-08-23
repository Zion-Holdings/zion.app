import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Zap, Cpu, Brain, Shield, Rocket, Database, 
  Globe, Users, Award, Clock, CheckCircle, ArrowRight,
  Settings, Workflow, Bot, Play, TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';

const Automation: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Intelligent Process Automation",
      description: "AI-powered automation for complex business processes and workflows",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI-Driven Decision Making",
      description: "Autonomous systems that make intelligent decisions and take actions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "DevOps Automation",
      description: "End-to-end automation of software development and deployment",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security Automation",
      description: "Automated threat detection, response, and security operations",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Pipeline Automation",
      description: "Automated data collection, processing, and analysis workflows",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Infrastructure Automation",
      description: "Self-healing and self-scaling infrastructure management",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const solutions = [
    {
      category: "Business Process Automation",
      items: [
        "Workflow Orchestration",
        "Document Processing",
        "Customer Service Automation",
        "Sales Process Automation",
        "HR Process Automation",
        "Financial Process Automation"
      ]
    },
    {
      category: "IT Operations Automation",
      items: [
        "Infrastructure Provisioning",
        "Configuration Management",
        "Monitoring & Alerting",
        "Incident Response",
        "Backup & Recovery",
        "Performance Optimization"
      ]
    },
    {
      category: "Development Automation",
      items: [
        "CI/CD Pipelines",
        "Code Quality Checks",
        "Testing Automation",
        "Deployment Automation",
        "Environment Management",
        "Release Management"
      ]
    }
  ];

  const technologies = [
    "AI Consciousness Integration",
    "Quantum Computing Optimization",
    "Real-time Neural Networks",
    "Advanced Machine Learning",
    "Predictive Analytics",
    "Natural Language Processing",
    "Cloud-Native Architecture",
    "Edge Computing Solutions"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "90% Time Savings",
      description: "Automate repetitive tasks and focus on strategic work"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Reduce human error and improve security posture"
    },
    {
      icon: TrendingUp,
      title: "Improved Efficiency",
      description: "Streamline operations and increase productivity"
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Faster response times and consistent service quality"
    }
  ];

  return (
    <>
      <SEO
        title="Automation Solutions - Zion Tech Group"
        description="Revolutionary AI-powered automation solutions for business processes, IT operations, and development workflows. Transform your operations with cutting-edge autonomous technology."
        keywords={["automation", "process automation", "DevOps automation", "AI automation", "business automation", "workflow automation"]}
        canonical="https://ziontechgroup.com/automation"
      />
      <Layout>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm mb-6">
                  <Zap className="w-4 h-4" />
                  <span>Intelligent Automation Solutions</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Automate Everything with
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    AI Consciousness
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Transform your operations with autonomous systems, intelligent workflows, and AI-powered automation. 
                  Build the future of autonomous business operations.
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
                  Cutting-Edge Automation Solutions
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Experience the future of automation with our revolutionary AI-powered platforms
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
                  Comprehensive Automation Solutions
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  From business processes to IT operations, we provide end-to-end automation solutions
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
                      <Workflow className="w-6 h-6 text-orange-400 mr-3" />
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
                      <Settings className="w-6 h-6 text-white" />
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
                  Experience the competitive advantages of our revolutionary automation solutions
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
          <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-red-900/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Automate Your Operations?
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Join the future of autonomous operations with our revolutionary AI-powered solutions
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
        </div>
      </Layout>
    </>
  );
};

export default Automation;