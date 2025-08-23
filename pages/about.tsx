import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Shield, Target, Users, Globe, 
  Award, Zap, Heart, Star, TrendingUp, Cpu, Cloud
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const companyStats = [
    { number: '500+', label: 'Global Clients', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Countries Served', icon: Globe, color: 'from-emerald-500 to-teal-500' },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield, color: 'from-red-500 to-orange-500' },
    { number: '24/7', label: 'Support', icon: Heart, color: 'from-pink-500 to-purple-500' },
    { number: '15+', label: 'Years Experience', icon: Award, color: 'from-yellow-500 to-orange-500' },
    { number: '1000+', label: 'Projects Delivered', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'Pioneering cutting-edge technologies that redefine industry standards',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Dedicated to transforming businesses through technology excellence',
      icon: Target,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Quantum Excellence',
      description: 'Leveraging quantum computing and AI for unprecedented solutions',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Global Impact',
      description: 'Creating positive change across industries and communities',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Zion Tech Group established with a vision for technological innovation'
    },
    {
      year: '2015',
      title: 'AI Revolution',
      description: 'Pioneered AI-driven solutions and automation platforms'
    },
    {
      year: '2020',
      title: 'Quantum Leap',
      description: 'Launched quantum computing and cybersecurity services'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge in autonomous AI and space technology'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Innovation</title>
        <meta name="description" content="Discover Zion Tech Group's journey from startup to global technology leader. Learn about our mission, values, and commitment to innovation." />
        <meta name="keywords" content="Zion Tech Group, about us, technology company, innovation, AI, quantum computing" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading technology innovation company with global reach and cutting-edge solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology through revolutionary AI, quantum computing, and autonomous systems that transform businesses and industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  To accelerate human progress through revolutionary technology solutions that solve the world's most complex challenges, from AI consciousness evolution to quantum cybersecurity and space exploration.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-cyan-400 font-semibold">Innovation at Light Speed</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  To be the global leader in autonomous AI systems, quantum computing infrastructure, and space technology, creating a future where technology serves humanity's highest aspirations.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-purple-400 font-semibold">Consciousness Evolution</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our innovation and drive our success
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From startup to global technology leader
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-12"
              >
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 absolute left-1/2 transform -translate-x-3 z-10`}></div>
                    
                    <div className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}>
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-500/30 transition-colors duration-300">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your business with cutting-edge technology? Let's explore the possibilities together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-gray-600 text-gray-300 rounded-2xl font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;