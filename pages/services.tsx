import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Globe, Star,
  ArrowRight, Sparkles, TrendingUp, Infinity,
  Users, Lock, Cloud, Cpu, Database, Network, Check
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      name: "AI & Consciousness Services",
      description: "Revolutionary artificial intelligence systems that understand and enhance human potential",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      services: [
        {
          name: "AI Consciousness Evolution",
          description: "Next-generation AI systems with human-like consciousness and understanding",
          features: ["Emotional Intelligence", "Context Awareness", "Human-AI Collaboration", "Continuous Learning"],
          price: "From $299/month"
        },
        {
          name: "Quantum Neural Networks",
          description: "Quantum-powered neural networks for unprecedented performance and capabilities",
          features: ["1000x Performance", "Quantum Optimization", "Advanced Pattern Recognition", "Scalable Architecture"],
          price: "From $499/month"
        },
        {
          name: "Autonomous Business Intelligence",
          description: "Self-managing AI systems that optimize business decisions and operations",
          features: ["Predictive Analytics", "Automated Insights", "Real-time Optimization", "Strategic Planning"],
          price: "From $399/month"
        }
      ]
    },
    {
      name: "Quantum Technology Solutions",
      description: "Cutting-edge quantum computing and cybersecurity solutions for the future",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Quantum Cybersecurity Platform",
          description: "Quantum-resistant security systems that protect against future threats",
          features: ["Post-Quantum Encryption", "AI Threat Detection", "Zero-Trust Architecture", "Compliance Ready"],
          price: "From $599/month"
        },
        {
          name: "Quantum Cloud Infrastructure",
          description: "High-performance quantum-enhanced cloud computing platform",
          features: ["Quantum Processing", "Advanced Security", "Global Distribution", "Auto-scaling"],
          price: "From $799/month"
        },
        {
          name: "Quantum Storage Solutions",
          description: "Quantum-enhanced data storage with unprecedented speed and capacity",
          features: ["Quantum Compression", "Instant Access", "Infinite Scalability", "Data Integrity"],
          price: "From $399/month"
        }
      ]
    },
    {
      name: "Space Technology",
      description: "Pioneering space exploration and resource intelligence systems",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Space Resource Intelligence",
          description: "AI-powered space exploration and resource mapping platform",
          features: ["Resource Mapping", "Optimization Algorithms", "Risk Assessment", "Strategic Planning"],
          price: "From $699/month"
        },
        {
          name: "Quantum Space Computing",
          description: "Quantum computing systems designed for space applications",
          features: ["Space-Optimized", "Radiation Resistant", "High Performance", "Low Power"],
          price: "From $899/month"
        }
      ]
    },
    {
      name: "Autonomous Systems",
      description: "Self-managing, intelligent systems that optimize human productivity",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Autonomous DevOps Platform",
          description: "Fully automated deployment and infrastructure management",
          features: ["Auto-deployment", "Infrastructure as Code", "Continuous Monitoring", "Self-healing"],
          price: "From $499/month"
        },
        {
          name: "Autonomous Network Management",
          description: "Self-optimizing network infrastructure with AI-driven management",
          features: ["Auto-optimization", "Threat Prevention", "Performance Monitoring", "Predictive Maintenance"],
          price: "From $399/month"
        },
        {
          name: "Autonomous Customer Success",
          description: "AI-powered customer support with emotional intelligence",
          features: ["24/7 Support", "Emotional Intelligence", "Personalized Solutions", "Proactive Assistance"],
          price: "From $299/month"
        }
      ]
    },
    {
      name: "Enterprise IT Solutions",
      description: "Comprehensive IT infrastructure and management solutions",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "Autonomous IT Service Management",
          description: "Intelligent IT service delivery and optimization",
          features: ["Service Automation", "Incident Management", "Change Control", "Performance Analytics"],
          price: "From $599/month"
        },
        {
          name: "Quantum Data Center Management",
          description: "Quantum-powered data center optimization and management",
          features: ["Energy Optimization", "Performance Monitoring", "Predictive Maintenance", "Security Management"],
          price: "From $799/month"
        }
      ]
    }
  ];

  const stats = [
    { number: "1000x", label: "Performance Improvement", icon: Zap },
    { number: "99.99%", label: "Uptime Guarantee", icon: Star },
    { number: "24/7", label: "Global Support", icon: Globe },
    { number: "∞", label: "Scalability", icon: Infinity }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Revolutionary Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, autonomous systems, 
                and space technology solutions that define the future of innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="mb-24 last:mb-0"
              >
                <div className="text-center mb-16">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {category.name}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
                    >
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-white">{service.price}</div>
                        <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Custom Solutions
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Need something specific? We specialize in creating custom technology solutions 
                  tailored to your unique business requirements and challenges.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Our team of experts works closely with you to understand your needs, 
                  design custom solutions, and implement them with precision and care.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Custom AI Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Enterprise Integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    White-label Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Custom Training & Support
                  </li>
                </ul>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Discuss Custom Solutions
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Custom?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Tailored to Your Needs</h4>
                      <p className="text-gray-400">Solutions designed specifically for your business processes and requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Scalable Architecture</h4>
                      <p className="text-gray-400">Built to grow with your business and adapt to changing needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Lock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                      <p className="text-gray-400">Bank-level security and compliance built into every solution.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how our revolutionary technology services can accelerate your growth, 
                enhance efficiency, and create competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                  <ArrowRight className="w-6 h-6 inline ml-3" />
                </button>
                <button className="px-10 py-5 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;