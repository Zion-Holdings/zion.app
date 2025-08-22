import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail
} from 'lucide-react';

export default function AboutPage() {
  const companyStats = [
    { number: '500+', label: 'Enterprise Clients', icon: <Building className="w-8 h-8" /> },
    { number: '50+', label: 'AI Services', icon: <Brain className="w-8 h-8" /> },
    { number: '25+', label: 'Quantum Solutions', icon: <Atom className="w-8 h-8" /> },
    { number: '100+', label: 'Technology Partners', icon: <Users className="w-8 h-8" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-8 h-8" /> },
    { number: '24/7', label: 'Global Support', icon: <Globe className="w-8 h-8" /> }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology',
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our mission. We measure our success by yours.',
      icon: <Target className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Excellence',
      description: 'Delivering world-class solutions with uncompromising quality standards',
      icon: <Award className="w-12 h-12 text-blue-400" />
    },
    {
      title: 'Future-Ready',
      description: 'Building solutions that prepare your business for tomorrow\'s challenges',
      icon: <Rocket className="w-12 h-12 text-purple-400" />
    }
  ];

  const leadership = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      bio: 'Visionary technology leader with 20+ years of experience in AI, quantum computing, and enterprise solutions.',
      image: '/images/leadership/kleber.jpg'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="About Zion Tech Group - Revolutionary Technology Solutions"
        description="Discover Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and innovative solutions. Learn about our team, values, and commitment to client success."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionizing technology through AI consciousness, quantum computing, and innovative solutions that shape the future of business and humanity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span>Middletown, DE</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate human progress through revolutionary technology solutions that solve the world's most complex challenges while advancing AI consciousness and quantum computing capabilities.
                </p>
                <p className="text-lg text-gray-300">
                  We believe technology should serve humanity, not replace it. Our solutions empower businesses and individuals to achieve unprecedented levels of efficiency, innovation, and growth.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in AI consciousness technology, quantum computing solutions, and innovative business automation that transforms how organizations operate and compete.
                </p>
                <p className="text-lg text-gray-300">
                  We envision a future where AI and human intelligence work in perfect harmony, quantum computing solves previously impossible problems, and technology creates abundance for all.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Zion Tech Group by the Numbers
              </h2>
              <p className="text-xl text-gray-400">
                Delivering exceptional results across industries
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide everything we do
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400">
                Visionary leaders driving innovation and growth
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row gap-8 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-xl text-cyan-400 mb-4">
                      {leader.role}
                    </div>
                    <p className="text-gray-300 text-lg">
                      {leader.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of enterprises already leveraging Zion Tech Group's revolutionary technology solutions to achieve unprecedented growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
}