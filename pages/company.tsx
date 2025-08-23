import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, Users, Target, Award, Globe, Play, ArrowRight, Star, 
  TrendingUp, Heart, Shield, Rocket, Brain, Atom, Zap
} from 'lucide-react';

const CompanyPage: React.FC = () => {
  const companySections = [
    {
      title: 'About Us',
      description: 'Discover our story, mission, and the innovative spirit that drives Zion Tech Group forward.',
      href: '/about',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Our Mission',
      description: 'Learn about our vision for the future and how we\'re transforming technology and business.',
      href: '/mission',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Leadership Team',
      description: 'Meet the brilliant minds and visionary leaders behind Zion Tech Group\'s success.',
      href: '/team',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Careers',
      description: 'Join our team of innovators and help shape the future of technology.',
      href: '/careers',
      icon: <Award className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'News & Updates',
      description: 'Stay informed about our latest innovations, partnerships, and industry insights.',
      href: '/news',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Press Kit',
      description: 'Access our media resources, company information, and press materials.',
      href: '/press',
      icon: <Play className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const companyStats = [
    { number: '2025', label: 'Founded', icon: <Building className="w-6 h-6" /> },
    { number: '3000+', label: 'Revolutionary Services', icon: <Rocket className="w-6 h-6" /> },
    { number: '250+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6" /> },
    { number: 'Quantum', label: 'Technology First', icon: <Atom className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: <Star className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Growth',
      description: 'We believe in continuous learning and improvement, both as individuals and as an organization.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <Layout
      title="Company - Zion Tech Group"
      description="Discover Zion Tech Group - a revolutionary technology company pioneering AI consciousness, quantum computing, and autonomous solutions since 2025."
      keywords="Zion Tech Group, company, about us, mission, team, careers, news, technology company, AI, quantum computing"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide since 2025.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Company Overview</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Leading the technological revolution with cutting-edge innovations and unwavering commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Explore Our Company</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover every aspect of Zion Tech Group and learn how we're shaping the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={section.href} className="block">
                    <div className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {section.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The core principles that guide everything we do at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Future?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Whether you're looking to work with us, partner with us, or learn more about our innovations, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Join Our Team
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CompanyPage;