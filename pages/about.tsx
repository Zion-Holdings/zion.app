import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Rocket, 
  Brain, 
  Atom, 
  Shield,
  Building,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const companyStats = [
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Global Clients', value: '500+', icon: Globe },
    { label: 'Projects Delivered', value: '1000+', icon: CheckCircle },
    { label: 'Innovation Rate', value: '95%', icon: TrendingUp }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Consciousness',
      description: 'Developing AI systems that understand, learn, and evolve with human-like consciousness.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Excellence',
      description: 'Leading the quantum computing revolution with cutting-edge solutions.',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Security by Design',
      description: 'Building security into every solution from the ground up.',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      bio: 'Visionary leader with 15+ years in AI, quantum computing, and enterprise technology.',
      expertise: ['AI Consciousness', 'Quantum Computing', 'Strategic Leadership']
    },
    {
      name: 'AI Research Team',
      role: 'Advanced AI Development',
      bio: 'World-class researchers pushing the boundaries of artificial consciousness.',
      expertise: ['Machine Learning', 'Neural Networks', 'Cognitive Computing']
    },
    {
      name: 'Quantum Engineering Team',
      role: 'Quantum Solutions',
      bio: 'Experts in quantum algorithms, cryptography, and quantum-safe infrastructure.',
      expertise: ['Quantum Algorithms', 'Cryptography', 'Quantum Infrastructure']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To accelerate human progress through conscious AI, quantum computing, and autonomous 
                  systems that solve the world's most complex challenges while maintaining ethical 
                  principles and human-centric values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Advance AI consciousness and emotional intelligence</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Democratize quantum computing access</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Build secure, autonomous enterprise solutions</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A future where AI and humans collaborate seamlessly, quantum computing solves 
                    previously impossible problems, and technology serves as a force for positive 
                    transformation across all industries and societies.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our culture
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts driving innovation at Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From startup to industry leader in AI consciousness and quantum computing
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Founded</h3>
                <p className="text-gray-400">Started as a technology consulting firm with a vision for AI innovation</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Breakthrough</h3>
                <p className="text-gray-400">Pioneered AI consciousness research and emotional intelligence systems</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Era</h3>
                <p className="text-gray-400">Leading quantum computing solutions and quantum-safe infrastructure</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;