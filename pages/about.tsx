import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Heart, Globe, 
  Zap, Shield, Brain, Rocket, Building,
  CheckCircle, Star, TrendingUp, Lightbulb, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Years of Innovation', value: '10+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Global Clients', value: '500+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Projects Delivered', value: '1000+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Team Members', value: '50+', icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and reliability are at the core of everything we build and deliver.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve transformative business outcomes.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and performance in every project and service.'
    }
  ];

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for enterprise transformation'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex computational challenges'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Technology',
      description: 'Innovative space tech applications and satellite solutions'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions and threat protection'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Enterprise IT',
      description: 'Comprehensive enterprise infrastructure and digital transformation'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Micro SAAS',
      description: 'Innovative business solutions and automation platforms'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-blue-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology with cutting-edge AI, quantum computing, 
                and space technology solutions that transform businesses and industries.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2 text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate human progress through innovative technology solutions that solve 
                  complex challenges and create sustainable value for our clients and society.
                </p>
                <p className="text-lg text-gray-300">
                  We believe in the power of technology to transform industries, improve lives, 
                  and create a better future for generations to come.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in next-generation technology solutions, pioneering 
                  breakthroughs in AI, quantum computing, and space technology that redefine 
                  what's possible.
                </p>
                <p className="text-lg text-gray-300">
                  We envision a world where technology seamlessly enhances human capabilities 
                  and accelerates progress across all sectors.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our decisions, shape our culture, and drive our success
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex justify-center mb-4 text-blue-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">What We Do</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions that drive innovation and transformation
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors border border-gray-700"
                >
                  <div className="flex items-center mb-4 text-blue-400">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore All Services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our innovative technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
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

export default AboutPage;