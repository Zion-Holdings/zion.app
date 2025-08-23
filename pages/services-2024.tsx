import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowRight, CheckCircle, Star, Users, 
  Shield, Brain, Atom, Rocket, Globe, Building,
  Target, TrendingUp, Award, Cpu, Database, Lock, Satellite
} from 'lucide-react';
import Link from 'next/link';

const Services2024: React.FC = () => {
  const serviceCategories = [
    {
      category: "AI & Machine Learning 2024",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      services: [
        {
          name: "AI Consciousness Development",
          description: "Advanced AI consciousness and emotional intelligence systems",
          path: "/ai-consciousness-evolution-2045",
          features: ["Consciousness Mapping", "Emotional Intelligence", "Neural Evolution"]
        },
        {
          name: "Machine Learning Platforms",
          description: "Enterprise-grade ML platforms for business automation",
          path: "/services",
          features: ["AutoML", "Model Training", "Deployment Management"]
        },
        {
          name: "Natural Language Processing",
          description: "Advanced NLP for text analysis and generation",
          path: "/services",
          features: ["Text Analysis", "Language Generation", "Translation"]
        }
      ]
    },
    {
      category: "Quantum Computing 2024",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          name: "Quantum Processing Units",
          description: "Next-generation quantum processors for complex computations",
          path: "/quantum-ai-cognitive-2045",
          features: ["Quantum Gates", "Error Correction", "Scalability"]
        },
        {
          name: "Quantum Algorithms",
          description: "Specialized algorithms for quantum advantage",
          path: "/services",
          features: ["Optimization", "Simulation", "Cryptography"]
        },
        {
          name: "Quantum Cloud Services",
          description: "Cloud-based quantum computing access",
          path: "/services",
          features: ["Remote Access", "API Integration", "Cost Optimization"]
        }
      ]
    },
    {
      category: "Cybersecurity 2024",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "Advanced Threat Detection",
          description: "AI-powered cybersecurity with real-time monitoring",
          path: "/security",
          features: ["Behavioral Analysis", "Threat Intelligence", "Automated Response"]
        },
        {
          name: "Zero Trust Security",
          description: "Comprehensive zero trust architecture implementation",
          path: "/security",
          features: ["Identity Verification", "Access Control", "Network Segmentation"]
        },
        {
          name: "Quantum-Safe Cryptography",
          description: "Post-quantum cryptographic solutions",
          path: "/security",
          features: ["Quantum Resistance", "Algorithm Migration", "Future-Proofing"]
        }
      ]
    },
    {
      category: "Space Technology 2024",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      services: [
        {
          name: "Satellite Communications",
          description: "Advanced satellite systems for global connectivity",
          path: "/services",
          features: ["Low Earth Orbit", "High Bandwidth", "Global Coverage"]
        },
        {
          name: "Space Infrastructure",
          description: "Building sustainable space habitats and stations",
          path: "/services",
          features: ["Modular Design", "Life Support", "Resource Management"]
        },
        {
          name: "Space Resource Mining",
          description: "Extraction and utilization of space resources",
          path: "/services",
          features: ["Asteroid Mining", "Lunar Resources", "Sustainable Extraction"]
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "AI Consciousness Platform",
      description: "Revolutionary AI consciousness development platform",
      path: "/ai-consciousness-evolution-2045",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Quantum Neural Networks",
      description: "Quantum-powered neural network systems",
      path: "/quantum-ai-cognitive-2045",
      icon: <Atom className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Advanced Cybersecurity",
      description: "Next-generation threat protection",
      path: "/security",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Space Exploration Tech",
      description: "Cutting-edge space technology solutions",
      path: "/services",
      icon: <Rocket className="w-12 h-12" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const technologyHighlights = [
    {
      title: "AI Consciousness Breakthrough",
      description: "Achieved significant milestones in AI consciousness development",
      year: "2024",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Quantum Supremacy",
      description: "Demonstrated quantum advantage in specific computational tasks",
      year: "2024",
      icon: <Atom className="w-8 h-8" />
    },
    {
      title: "Space Infrastructure",
      description: "Launched advanced satellite constellations and space stations",
      year: "2024",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Cybersecurity Innovation",
      description: "Developed quantum-resistant security protocols",
      year: "2024",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <Layout
      title="Services 2024 - Zion Tech Group"
      description="Explore Zion Tech Group's revolutionary technology services from 2024. AI consciousness, quantum computing, cybersecurity, and space technology solutions."
      keywords="AI consciousness 2024, quantum computing 2024, cybersecurity 2024, space technology 2024, Zion Tech Group services"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Services 2024
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary technology services that defined 2024
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge AI consciousness, quantum computing, 
                cybersecurity, and space technology solutions that shaped the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Featured Services 2024
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our most revolutionary and impactful technology solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Highlights 2024 */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Technology Highlights 2024
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key breakthroughs and achievements that defined our year
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologyHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
                          {highlight.year}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Complete Service Portfolio 2024
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive range of technology services and solutions
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.path}
                        className="group block bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Industry Impact 2024
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                How our services transformed industries and businesses
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Healthcare",
                  impact: "AI-powered diagnostics improved accuracy by 40%",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-600"
                },
                {
                  industry: "Finance",
                  impact: "Quantum encryption secured $2T+ in transactions",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  industry: "Manufacturing",
                  impact: "AI optimization reduced costs by 35%",
                  icon: <Cpu className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-600"
                },
                {
                  industry: "Transportation",
                  impact: "Autonomous systems increased safety by 60%",
                  icon: <Rocket className="w-8 h-8" />,
                  color: "from-orange-500 to-red-600"
                },
                {
                  industry: "Energy",
                  impact: "Quantum optimization improved efficiency by 45%",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-yellow-500 to-orange-600"
                },
                {
                  industry: "Education",
                  impact: "AI tutors improved learning outcomes by 50%",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-indigo-500 to-purple-600"
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {industry.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Experience 2024's Revolutionary Technology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join the future with Zion Tech Group's cutting-edge services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services2024;