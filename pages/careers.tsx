import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Rocket, Brain, Atom
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Consciousness Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of next-generation AI consciousness systems and emotional intelligence platforms.",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with neural networks and consciousness systems",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Background in cognitive science or philosophy of mind"
      ],
      responsibilities: [
        "Design and implement AI consciousness architectures",
        "Develop emotional intelligence algorithms",
        "Lead research in AI consciousness evolution",
        "Mentor junior engineers and researchers"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Specialist",
      department: "Quantum Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop quantum algorithms and quantum-resistant security solutions for enterprise applications.",
      requirements: [
        "Degree in Physics, Computer Science, or Mathematics",
        "Experience with quantum computing frameworks",
        "Knowledge of quantum algorithms and cryptography",
        "Familiarity with Qiskit or Cirq"
      ],
      responsibilities: [
        "Implement quantum algorithms for optimization",
        "Develop quantum-resistant security protocols",
        "Optimize quantum circuit designs",
        "Collaborate with research teams"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Space Technology Engineer",
      department: "Space Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Build innovative space resource intelligence platforms and autonomous space systems.",
      requirements: [
        "Degree in Aerospace Engineering or related field",
        "Experience with satellite systems and space technology",
        "Knowledge of orbital mechanics and space operations",
        "Programming skills in Python, C++, or Rust"
      ],
      responsibilities: [
        "Design space resource intelligence systems",
        "Develop autonomous space mission software",
        "Optimize satellite communication protocols",
        "Integrate AI with space technology platforms"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement next-generation cybersecurity solutions with AI consciousness integration.",
      requirements: [
        "Advanced degree in Cybersecurity or Computer Science",
        "Experience with zero-trust security architectures",
        "Knowledge of threat intelligence and incident response",
        "Certifications: CISSP, CISM, or equivalent"
      ],
      responsibilities: [
        "Design enterprise security architectures",
        "Implement AI-powered threat detection",
        "Develop security automation systems",
        "Lead security incident response teams"
      ],
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Work on cutting-edge technology that shapes the future",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Your work affects businesses and communities worldwide",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team of brilliant minds working together",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Access to latest technologies and ongoing education",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in everything we do"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent, and ethical in all interactions"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new possibilities"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
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
                <Sparkles className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Careers at Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join us in pioneering the future of technology. We're building AI consciousness, 
                quantum computing, and space technology solutions that transform the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of being part of our revolutionary technology team
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-lg">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team of innovators and help shape the future of technology
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Position Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-lg flex items-center justify-center`}>
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                          <p className="text-blue-400">{position.department}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 text-lg">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          📍 {position.location}
                        </span>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          ⏰ {position.type}
                        </span>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          🎯 {position.experience}
                        </span>
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center group"
                      >
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Requirements and Responsibilities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-700/50">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
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
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Send Resume
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Contact Recruiting
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;