import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, Database, Code, Rocket, Brain, Users, Eye, Hand } from 'lucide-react';
import Link from 'next/link';

const MetaverseDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: 'Metaverse Platform Development',
      description: 'Complete metaverse platforms and virtual worlds for businesses and communities',
      icon: <Globe className="w-8 h-8" />,
      features: [
        '3D Virtual Environments',
        'Avatar Systems',
        'Interactive Spaces',
        'Multi-User Experiences',
        'Cross-Platform Compatibility',
        'Real-time Collaboration'
      ],
      href: '/metaverse-ai-development-platform'
    },
    {
      title: 'VR/AR Applications',
      description: 'Immersive virtual and augmented reality experiences',
      icon: <Eye className="w-8 h-8" />,
      features: [
        'Virtual Reality Applications',
        'Augmented Reality Solutions',
        'Mixed Reality Experiences',
        '360° Content Creation',
        'Spatial Computing',
        'Gesture Recognition'
      ],
      href: '/virtual-event-hologram-platform'
    },
    {
      title: 'Digital Twin Solutions',
      description: 'Virtual replicas of physical assets and environments',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Asset Digital Twins',
        'Process Simulation',
        'Predictive Analytics',
        'Real-time Monitoring',
        'Virtual Training',
        'Remote Operations'
      ],
      href: '/space-resource-intelligence-2040'
    },
    {
      title: 'Metaverse Business Solutions',
      description: 'Enterprise metaverse applications for commerce and collaboration',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Virtual Offices',
        'Digital Commerce',
        'Virtual Events',
        'Remote Collaboration',
        'Virtual Training',
        'Customer Engagement'
      ],
      href: '/metaverse-development-studio-pro-2045'
    }
  ];

  const industries = [
    {
      title: 'Gaming & Entertainment',
      description: 'Immersive gaming experiences and virtual entertainment platforms',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Education & Training',
      description: 'Virtual learning environments and skill development platforms',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Healthcare',
      description: 'Virtual medical training and patient care solutions',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Real Estate',
      description: 'Virtual property tours and architectural visualization',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Metaverse Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Create immersive virtual worlds and experiences that transform how people interact, work, and play
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-green-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-green-500/30 text-green-400 rounded-xl hover:bg-green-500/10 transition-all duration-200 font-medium text-lg"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900/50 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Industries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Metaverse Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how metaverse technology is revolutionizing various sectors and creating new opportunities
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white w-fit mx-auto mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{industry.title}</h3>
              <p className="text-gray-400 text-sm">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Technology Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with the latest technologies for immersive, scalable, and secure metaverse experiences
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Development Platforms</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Unity 3D</li>
              <li>Unreal Engine</li>
              <li>WebXR</li>
              <li>Three.js</li>
              <li>WebGL</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Backend Technologies</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Node.js</li>
              <li>Python</li>
              <li>WebRTC</li>
              <li>WebSocket</li>
              <li>Cloud Infrastructure</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Blockchain Integration</li>
              <li>NFT Standards</li>
              <li>Data Privacy</li>
              <li>Access Control</li>
              <li>Audit Logging</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Metaverse?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our metaverse development experts are ready to help you create immersive virtual experiences that engage your audience and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-green-500/25"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-green-500/30 text-green-400 rounded-xl hover:bg-green-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MetaverseDevelopmentPage;