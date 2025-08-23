import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Zap, 
  Brain, Atom, Shield, Rocket, Star,
  CheckCircle, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Global Support' }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
      description: 'Pioneering cutting-edge technologies that transform industries and drive progress.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Trust & Security',
      description: 'Building secure, reliable solutions that protect our clients\' digital assets.'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Global Impact',
      description: 'Creating solutions that scale globally and make a positive difference worldwide.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Client Success',
      description: 'Dedicated to our clients\' success with personalized support and expertise.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 20+ years in technology innovation and enterprise solutions.',
      expertise: ['AI/ML', 'Quantum Computing', 'Strategic Leadership']
    },
    {
      name: 'AI Research Team',
      role: 'Advanced AI Development',
      bio: 'World-class researchers pushing the boundaries of artificial intelligence and consciousness.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics']
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Solutions',
      bio: 'Experts in quantum computing, cryptography, and next-generation technologies.',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Infrastructure']
    }
  ];

  return (
    <Layout seo={{
      title: 'About Us - Zion Tech Group | Leading Technology Innovation',
      description: 'Discover Zion Tech Group\'s mission to revolutionize technology through AI, quantum computing, and space technology solutions.',
      keywords: 'about us, Zion Tech Group, technology innovation, AI, quantum computing',
      url: 'https://ziontechgroup.com/about'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Pioneering the future of technology through revolutionary AI, quantum computing, 
                and space technology solutions that transform industries and drive human progress.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To accelerate human progress through revolutionary technology solutions that solve 
                  the world's most complex challenges and create unprecedented opportunities for growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Advance AI consciousness and human-AI collaboration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Pioneer quantum computing breakthroughs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Expand human presence in space technology</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A future where technology seamlessly enhances human capabilities, where AI and 
                    humans collaborate to solve grand challenges, and where quantum computing 
                    unlocks new frontiers of possibility.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our relationship with clients, 
                partners, and the global community.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet the visionary leaders and experts driving innovation at Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of enterprises already leveraging our revolutionary technology 
                solutions to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                >
                  Explore Our Services
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