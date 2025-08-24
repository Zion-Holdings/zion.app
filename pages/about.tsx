import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  Eye,
  Settings
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Target, value: '100+', label: 'Projects Delivered' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology solutions.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and honest relationships with all our clients and partners.'
    },
    {
      icon: Settings,
      title: 'Excellence',
      description: 'We strive for perfection in every project, every time.'
    },
  ];

  return (
    <>
      <Head>
        <title>About Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI consciousness, quantum computing, and autonomous systems. Discover our story, values, and commitment to innovation." />
        <meta name="keywords" content="Zion Tech Group, about us, technology company, AI innovation, quantum computing, company history, mission vision" />
        <meta property="og:title" content="About Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI consciousness, quantum computing, and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto"
            >
              Pioneering the future of technology through AI consciousness, quantum computing, 
              and autonomous systems that transform businesses and reshape industries.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-200">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-blue-200 mb-6">
                  To democratize access to cutting-edge technology solutions, enabling businesses 
                  of all sizes to leverage the power of AI consciousness, quantum computing, 
                  and autonomous systems for unprecedented growth and innovation.
                </p>
                <p className="text-lg text-blue-200">
                  We believe that the future belongs to those who can harness the full potential 
                  of emerging technologies, and we're committed to making that future accessible to everyone.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Vision 2045</h3>
                <p className="text-blue-200">
                  By 2045, we envision a world where AI consciousness is seamlessly integrated 
                  into every aspect of business and society, creating unprecedented opportunities 
                  for human advancement and technological innovation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"
                >
                  <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-blue-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-blue-200 mb-4">
                  Founded in 2020, Zion Tech Group emerged from a vision to bridge the gap 
                  between cutting-edge research and practical business applications.
                </p>
                <p className="text-blue-200">
                  What started as a small team of passionate technologists has grown into 
                  a global force for innovation, serving clients across industries and continents.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Building the Future</h2>
                <p className="text-lg text-blue-200 mb-6">
                  From our headquarters in Middletown, Delaware, we've expanded our reach 
                  globally, establishing partnerships and delivering solutions that transform 
                  businesses and industries.
                </p>
                <p className="text-lg text-blue-200">
                  Our journey is marked by continuous innovation, unwavering commitment to 
                  excellence, and a deep understanding that the future of technology is 
                  not just about what we build, but how we build it.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200 mb-8"
            >
              Join the ranks of forward-thinking companies that are already leveraging 
              our revolutionary technology solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border border-white transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
