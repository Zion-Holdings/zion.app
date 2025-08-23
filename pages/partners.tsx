import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Globe, Award, Rocket, Shield, 
  Zap, Star, ArrowRight, CheckCircle, Building
} from 'lucide-react';

export default function Partners() {
  const [activeTab, setActiveTab] = useState('overview');

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge technology solutions and product development',
      benefits: ['Joint product development', 'Technology integration', 'Shared R&D', 'Co-marketing opportunities'],
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Channel Partners',
      description: 'Resell and implement our solutions in your market',
      benefits: ['Exclusive territories', 'Training and certification', 'Marketing support', 'Competitive margins'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term collaboration on major initiatives and market expansion',
      benefits: ['Joint ventures', 'Market expansion', 'Shared resources', 'Strategic planning'],
      icon: <Handshake className="w-8 h-8" />
    }
  ];

  const partnerBenefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Access to Cutting-Edge Technology',
      description: 'Get early access to our latest AI, quantum computing, and space technology innovations'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Support Team',
      description: 'Dedicated support from our technology experts and implementation specialists'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification Programs',
      description: 'Comprehensive training and certification to ensure your team is equipped for success'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Our proven methodologies and quality standards ensure successful project delivery'
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Financial Services',
      result: 'Increased efficiency by 40% through AI automation',
      testimonial: 'Partnering with Zion Tech Group transformed our operations and gave us a competitive edge.'
    },
    {
      company: 'InnovateTech',
      industry: 'Healthcare',
      result: 'Reduced costs by 30% with quantum computing solutions',
      testimonial: 'The partnership exceeded our expectations and delivered measurable business value.'
    },
    {
      company: 'SpaceTech Ventures',
      industry: 'Aerospace',
      result: 'Accelerated development timeline by 60%',
      testimonial: 'Zion Tech Group\'s expertise in space technology was invaluable to our success.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Partnerships - Zion Tech Group | Join Our Network</title>
        <meta name="description" content="Partner with Zion Tech Group to expand your business with cutting-edge technology solutions. Join our network of technology partners." />
        <meta name="keywords" content="partnerships, technology partners, channel partners, Zion Tech Group, business collaboration" />
        <meta property="og:title" content="Partnerships - Zion Tech Group" />
        <meta property="og:description" content="Join our network of technology partners and expand your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
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
            Partner With Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our network of technology partners and together we'll revolutionize industries, 
            expand markets, and create innovative solutions that drive business growth.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{type.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Partner With Us */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partner Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 p-6 rounded-2xl border border-gray-600/20">
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{story.company}</h3>
                    <p className="text-sm text-gray-400">{story.industry}</p>
                  </div>
                </div>
                <p className="text-green-400 font-semibold mb-3">{story.result}</p>
                <p className="text-gray-300 text-sm italic">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Process */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Initial Discussion',
                description: 'Let\'s discuss your business goals and how we can collaborate'
              },
              {
                step: '02',
                title: 'Partnership Assessment',
                description: 'We evaluate the strategic fit and mutual benefits'
              },
              {
                step: '03',
                title: 'Agreement & Onboarding',
                description: 'Finalize partnership terms and begin collaboration'
              },
              {
                step: '04',
                title: 'Growth & Success',
                description: 'Work together to achieve shared business objectives'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-gray-300 mb-6">
              Let's explore how we can work together to create innovative solutions and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}