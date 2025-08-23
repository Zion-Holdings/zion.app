import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, Rocket, Brain, Atom, Shield, 
  Star, Zap, Eye, Infinity, Sparkles, Heart, Clock, MapPin,
  ArrowRight, CheckCircle, Briefcase, GraduationCap
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "AI Consciousness Engineer",
      department: "AI Research & Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our revolutionary AI consciousness team to develop the next generation of emotional intelligence systems.",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with neural networks and consciousness research",
        "Knowledge of quantum computing principles",
        "Strong ethical AI development background"
      ]
    },
    {
      title: "Quantum Computing Specialist",
      department: "Quantum Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Help us build quantum computing solutions that solve previously impossible computational challenges.",
      requirements: [
        "Degree in Physics, Computer Science, or Engineering",
        "Experience with quantum algorithms and quantum programming",
        "Knowledge of quantum error correction",
        "Familiarity with quantum machine learning"
      ]
    },
    {
      title: "Space Technology Engineer",
      department: "Space Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Contribute to our space exploration and resource intelligence platforms.",
      requirements: [
        "Degree in Aerospace Engineering or related field",
        "Experience with satellite technology and space systems",
        "Knowledge of AI and autonomous systems",
        "Understanding of space resource utilization"
      ]
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement quantum-resistant security solutions for the future.",
      requirements: [
        "Degree in Cybersecurity, Computer Science, or related field",
        "Experience with quantum cryptography and post-quantum security",
        "Knowledge of zero-trust architecture",
        "Strong understanding of emerging threats"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world with flexible schedules",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development programs",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Star,
      title: "Innovation Time",
      description: "Dedicated time for personal projects and innovation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const culture = [
    "Innovation-driven environment where creativity thrives",
    "Collaborative teams working on cutting-edge technology",
    "Ethical technology development at the core",
    "Diversity and inclusion in everything we do",
    "Work-life balance and flexible arrangements",
    "Continuous learning and skill development"
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and explore new frontiers",
      icon: Sparkles
    },
    {
      title: "Ethical Technology",
      description: "Human values guide every decision we make",
      icon: Heart
    },
    {
      title: "Collaboration",
      description: "Great ideas come from working together",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do",
      icon: Star
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            >
              Careers at Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Join our revolutionary team and help shape the future of AI consciousness, quantum computing, and space technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#positions" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a team that's revolutionizing technology and creating positive change in the world.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Culture
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and ethical technology development. We believe that great ideas come from diverse perspectives and collaborative effort.
                </p>
                <div className="space-y-4">
                  {culture.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
                  <h3 className="text-3xl font-bold mb-4 text-purple-400">Our Values</h3>
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{value.title}</h4>
                          <p className="text-gray-300 text-sm">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our revolutionary team and help shape the future of technology. We're looking for passionate individuals who share our vision.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-400 text-sm">{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-400 text-sm">{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-emerald-400" />
                          <span className="text-gray-400 text-sm">{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-400 text-sm">{position.experience}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <a 
                        href="/contact" 
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 rounded-3xl border border-cyan-500/20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals who share our passion for innovation and ethical technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Us Your Resume
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;