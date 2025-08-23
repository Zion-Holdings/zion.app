import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, Target, TrendingUp, Users, Globe, 
  ArrowRight, Star, Shield, CheckCircle, Zap,
  Infinity, Eye, Sparkles, Clock, Brain, Atom,
  Rocket, Cpu, Database, Cloud, BarChart3
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Financial Risk Management",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex risk assessment across multiple markets and asset classes",
      solution: "AI-driven risk modeling platform with real-time market analysis",
      results: [
        "40% reduction in risk assessment time",
        "25% improvement in risk prediction accuracy",
        "$50M+ in risk mitigation savings",
        "Real-time monitoring across 50+ markets"
      ],
      technologies: ["AI/ML", "Real-time Analytics", "Cloud Computing"],
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "Quantum-Secure Communication Network",
      client: "Government Defense Agency",
      industry: "Defense & Security",
      challenge: "Secure communication infrastructure resistant to quantum attacks",
      solution: "Quantum-resistant encryption with quantum key distribution",
      results: [
        "100% quantum-resistant security",
        "Zero security breaches in 2+ years",
        "99.99% uptime across global network",
        "50% faster encryption/decryption"
      ],
      technologies: ["Quantum Computing", "Cryptography", "Network Security"],
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Autonomous Manufacturing Optimization",
      client: "Automotive Manufacturer",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "AI-powered autonomous manufacturing platform with predictive maintenance",
      results: [
        "35% increase in production efficiency",
        "60% reduction in quality defects",
        "45% decrease in maintenance costs",
        "24/7 autonomous operation"
      ],
      technologies: ["AI/ML", "IoT", "Predictive Analytics"],
      color: "from-green-500 to-emerald-500",
      featured: false
    },
    {
      title: "Space Resource Intelligence Platform",
      client: "Space Mining Corporation",
      industry: "Space Technology",
      challenge: "Identifying and analyzing valuable resources in space",
      solution: "AI-powered satellite intelligence and resource mapping platform",
      results: [
        "90% accuracy in resource identification",
        "10x faster resource mapping",
        "$200M+ in resource discovery value",
        "Real-time satellite data processing"
      ],
      technologies: ["AI/ML", "Satellite Technology", "Data Analytics"],
      color: "from-pink-500 to-red-500",
      featured: false
    },
    {
      title: "Edge Computing Healthcare Platform",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Slow medical imaging processing and limited edge computing capabilities",
      solution: "Distributed edge computing platform for medical imaging",
      results: [
        "80% faster medical image processing",
        "Real-time diagnostic support",
        "50% reduction in server costs",
        "Improved patient outcomes"
      ],
      technologies: ["Edge Computing", "Medical Imaging", "AI/ML"],
      color: "from-indigo-500 to-purple-500",
      featured: false
    },
    {
      title: "Blockchain Supply Chain Transparency",
      client: "Global Retail Chain",
      industry: "Retail",
      challenge: "Lack of transparency in supply chain and product authenticity",
      solution: "Blockchain-based supply chain tracking and verification system",
      results: [
        "100% supply chain transparency",
        "Real-time product tracking",
        "30% reduction in counterfeit products",
        "Enhanced customer trust"
      ],
      technologies: ["Blockchain", "IoT", "Supply Chain Management"],
      color: "from-orange-500 to-red-500",
      featured: false
    }
  ];

  const industries = [
    { name: "Financial Services", icon: BarChart3, count: 15, color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", icon: Users, count: 12, color: "from-green-500 to-emerald-500" },
    { name: "Manufacturing", icon: Cpu, count: 18, color: "from-purple-500 to-pink-500" },
    { name: "Defense & Security", icon: Shield, count: 8, color: "from-red-500 to-pink-500" },
    { name: "Space Technology", icon: Rocket, count: 6, color: "from-indigo-500 to-purple-500" },
    { name: "Retail & E-commerce", icon: Globe, count: 14, color: "from-orange-500 to-red-500" }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our risk management with AI that's both powerful and intuitive. The results exceeded our expectations.",
      author: "Chief Risk Officer",
      company: "Global Investment Bank",
      rating: 5
    },
    {
      quote: "Their quantum security solution is revolutionary. We now have peace of mind knowing our communications are truly future-proof.",
      author: "Director of IT Security",
      company: "Government Defense Agency",
      rating: 5
    },
    {
      quote: "The autonomous manufacturing platform has revolutionized our production line. Efficiency gains we never thought possible.",
      author: "VP of Operations",
      company: "Automotive Manufacturer",
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how our revolutionary technology solutions have transformed 
                businesses across industries and delivered measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful implementations that showcase the transformative 
                power of our technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.filter(cs => cs.featured).map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {study.client}
                      </span>
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of successful implementations 
                across different industries and technology domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{study.client} • {study.industry}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Transform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our technology solutions have delivered measurable results 
                across diverse industries and business domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-2">{industry.count}+</p>
                  <p className="text-gray-400">Successful Implementations</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear directly from the leaders and teams who have experienced 
                the transformative power of our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-blue-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
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
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the growing list of companies that have transformed their business 
                with our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;