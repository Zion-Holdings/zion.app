import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Users, Target, Rocket, Brain, Globe, 
  Award, Clock, Shield, Zap, Star, ArrowRight 
} from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, our mission to revolutionize technology solutions, and our commitment to innovation, quality, and customer success." />
        <meta name="keywords" content="Zion Tech Group, about us, company, mission, vision, team, technology solutions" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading technology solutions provider committed to innovation and excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative solutions that transform businesses and drive digital transformation.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg">
              To empower organizations with cutting-edge technology solutions that drive innovation, 
              efficiency, and competitive advantage in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg">
              To be the global leader in transformative technology solutions, pioneering the future 
              of AI, quantum computing, and space technology while delivering exceptional value to our clients.
            </p>
          </div>
        </motion.div>

        {/* Company Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-8 rounded-2xl border border-gray-600/20 mb-16"
        >
          <div className="flex items-center mb-6">
            <Building className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Company Overview</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                Founded with a vision to revolutionize how businesses leverage technology, Zion Tech Group 
                has grown from a startup to a comprehensive technology solutions provider. We specialize in 
                AI, machine learning, quantum computing, space technology, and enterprise IT solutions.
              </p>
              <p className="text-gray-300 text-lg">
                Our team of experts combines deep technical expertise with industry knowledge to deliver 
                solutions that not only meet current needs but anticipate future challenges and opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Expert team of 50+ professionals</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Serving clients worldwide</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">Industry-recognized excellence</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">24/7 support and monitoring</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-6 rounded-xl border border-green-500/20 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/20 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
              <p className="text-gray-300">
                Maintaining the highest standards in every project, ensuring reliability and excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                Striving for perfection in every aspect of our work and client relationships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our innovative technology solutions can drive your success.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}