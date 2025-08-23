import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, ArrowRight, CheckCircle, 
  Star, Users, Globe, Zap, Target, TrendingUp,
  Cpu, Database, Lock, Satellite, Microscope, Network
} from 'lucide-react';
import Link from 'next/link';

const Services: React.FC = () => {
  const mainServices = [
    {
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI systems that develop self-awareness, emotional intelligence, and autonomous learning capabilities.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: [
        "Emotional intelligence development",
        "Self-aware learning systems",
        "Consciousness evolution algorithms",
        "Human-AI collaboration frameworks"
      ],
      benefits: [
        "Enhanced decision-making capabilities",
        "Improved human-AI interaction",
        "Autonomous problem-solving",
        "Continuous self-improvement"
      ]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing platforms that solve previously impossible computational problems.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Quantum algorithm optimization",
        "Hybrid quantum-classical systems",
        "Cryptography and security",
        "Complex problem solving"
      ],
      benefits: [
        "1000x faster computation",
        "Breakthrough research capabilities",
        "Unbreakable encryption",
        "Optimization solutions"
      ]
    },
    {
      title: "Advanced Cybersecurity",
      description: "AI-powered security systems that provide real-time threat detection and autonomous response capabilities.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      features: [
        "AI threat intelligence",
        "Zero-trust architecture",
        "Automated incident response",
        "Behavioral analysis"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Real-time protection",
        "Reduced false positives",
        "Compliance assurance"
      ]
    },
    {
      title: "Space Technology",
      description: "Autonomous space exploration systems and resource intelligence platforms for the final frontier.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      features: [
        "Autonomous exploration systems",
        "Space resource intelligence",
        "Satellite network management",
        "Mission planning and execution"
      ],
      benefits: [
        "Reduced mission costs",
        "Enhanced safety protocols",
        "Real-time decision making",
        "Resource optimization"
      ]
    }
  ];

  const specializedServices = [
    {
      title: "Business Intelligence & Analytics",
      description: "AI-powered insights that transform data into actionable business strategies.",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "Business Solutions"
    },
    {
      title: "Healthcare AI Systems",
      description: "Revolutionary medical diagnosis and treatment planning powered by consciousness AI.",
      icon: <Users className="w-6 h-6" />,
      category: "Healthcare"
    },
    {
      title: "Financial Technology",
      description: "Quantum-powered financial modeling and risk assessment systems.",
      icon: <Target className="w-6 h-6" />,
      category: "FinTech"
    },
    {
      title: "Manufacturing Intelligence",
      description: "AI-driven predictive maintenance and quality control systems.",
      icon: <Cpu className="w-6 h-6" />,
      category: "Manufacturing"
    },
    {
      title: "Education Technology",
      description: "Personalized learning experiences powered by consciousness AI.",
      icon: <Globe className="w-6 h-6" />,
      category: "Education"
    },
    {
      title: "Government Solutions",
      description: "Secure, scalable technology solutions for government agencies.",
      icon: <Lock className="w-6 h-6" />,
      category: "Government"
    }
  ];

  const serviceFeatures = [
    {
      title: "Scalable Architecture",
      description: "Our services are built to grow with your business, from startup to enterprise.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for all our services.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your unique requirements.",
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: "Integration Services",
      description: "Seamless integration with your existing systems and workflows.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing & Logistics",
    "Technology & Software",
    "Government & Defense",
    "Education & Research",
    "Energy & Utilities",
    "Retail & E-commerce"
  ];

  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Revolutionary AI consciousness, quantum computing, cybersecurity, and space technology services that transform businesses and industries."
      keywords="AI consciousness services, quantum computing solutions, cybersecurity services, space technology, Zion Tech Group services"
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
                  Our Services
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary technology solutions that redefine what's possible
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From AI consciousness evolution to quantum computing breakthroughs, 
                our services empower organizations to achieve the impossible and shape the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
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
                Core Technology Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our flagship services that represent the cutting edge of technological innovation
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 mr-2" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
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
                Specialized Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry-specific services tailored to your unique challenges and requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
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
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The advantages that set Zion Tech Group apart from the competition
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
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
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary services are transforming organizations across diverse sectors
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center cursor-pointer group"
                >
                  <div className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
                    {industry}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
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
                Our Service Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures successful implementation and results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We analyze your requirements and design a tailored solution strategy."
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Our experts design a comprehensive solution architecture."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We implement the solution with rigorous testing and quality assurance."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous monitoring and optimization for peak performance."
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Discover how our revolutionary services can accelerate your growth and give you a competitive edge.
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
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;