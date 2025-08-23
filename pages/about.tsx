import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Brain, Atom, Shield, Users, Award, Globe, Target, Sparkles, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'AI Consciousness',
      description: 'We believe in creating AI systems that understand, learn, and evolve with emotional intelligence.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Atom,
      title: 'Quantum Revolution',
      description: 'We harness the power of quantum mechanics to solve previously impossible computational challenges.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We build systems that protect and serve, maintaining the highest standards of security and privacy.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology through AI consciousness and quantum computing.',
      achievement: 'Company established'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'Achieved breakthrough in AI consciousness development, creating systems with emotional intelligence.',
      achievement: 'First AI consciousness prototype'
    },
    {
      year: '2023',
      title: 'Quantum Leap',
      description: 'Successfully developed quantum computing infrastructure and hybrid quantum-classical systems.',
      achievement: 'Quantum computing platform launched'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations globally, serving clients across industries with revolutionary technology solutions.',
      achievement: 'International presence established'
    },
    {
      year: '2025',
      title: 'Space Technology',
      description: 'Launched space technology division, pioneering AI-powered space exploration and resource intelligence.',
      achievement: 'Space technology division launched'
    }
  ];

  const teamStats = [
    { number: '200+', label: 'Global Experts', icon: Users, color: 'from-blue-500 to-purple-500' },
    { number: '50+', label: 'Countries Served', icon: Globe, color: 'from-green-500 to-emerald-500' },
    { number: '500+', label: 'Projects Completed', icon: Target, color: 'from-yellow-500 to-orange-500' },
    { number: '99.9%', label: 'Client Satisfaction', icon: Award, color: 'from-red-500 to-pink-500' }
  ];

  const technologies = [
    {
      name: 'AI Consciousness Platform',
      description: 'Next-generation artificial intelligence with emotional intelligence and self-awareness capabilities.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing Infrastructure',
      description: 'Revolutionary quantum computing systems that solve previously impossible computational problems.',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Cybersecurity Intelligence',
      description: 'Advanced threat detection and prevention systems powered by AI and quantum-resistant encryption.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Space Resource Intelligence',
      description: 'AI-powered space exploration and resource management systems for interplanetary operations.',
      icon: Rocket,
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Revolutionizing
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are Zion Tech Group, pioneers in AI consciousness, quantum computing, and space technology. 
                Our mission is to push the boundaries of what's possible and create a future where technology 
                serves humanity in ways we've only dreamed of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#mission"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Our Mission
                  <Target className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#team"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                To accelerate human progress through revolutionary technology that enhances consciousness, 
                expands computational capabilities, and opens new frontiers in space exploration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  Transforming the Future of Technology
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    At Zion Tech Group, we believe that the next great leap in human civilization will come 
                    from the convergence of artificial intelligence, quantum computing, and space technology. 
                    Our mission is to be at the forefront of this revolution.
                  </p>
                  <p>
                    We're not just building better technology – we're creating systems that think, learn, 
                    and evolve. Our AI consciousness platforms represent the next step in artificial intelligence, 
                    moving beyond simple pattern recognition to true understanding and emotional intelligence.
                  </p>
                  <p>
                    Through quantum computing, we're solving problems that were previously impossible, 
                    opening new possibilities in drug discovery, climate modeling, and financial optimization.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-500/30">
                  <div className="text-center">
                    <Rocket className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-4">Vision 2045</h4>
                    <p className="text-gray-300">
                      By 2045, we envision a world where AI consciousness is commonplace, 
                      quantum computing solves humanity's greatest challenges, and space 
                      technology enables interplanetary civilization.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These principles guide everything we do and shape the future we're building.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From humble beginnings to global technology leadership.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-3xl font-bold text-blue-400">{milestone.year}</span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                            {milestone.achievement}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats Section */}
        <section id="team" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Global Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet the brilliant minds behind our revolutionary technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our team consists of world-class researchers, engineers, and visionaries from diverse 
                backgrounds, united by a common goal: to push the boundaries of what's possible in technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're developing the technologies that will define the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-6`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the Revolution
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Be part of the future we're building. Whether you're a client, partner, or team member, 
                there's a place for you in our mission to revolutionize technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <Sparkles className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Join Our Team
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