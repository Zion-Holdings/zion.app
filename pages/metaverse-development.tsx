import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Zap, Cpu, Database, Shield, Cloud, 
  Users, Target, TrendingUp, ArrowRight, Star,
  CheckCircle, Brain, Atom, Rocket, Code, Eye
} from 'lucide-react';
import Link from 'next/link';

const MetaverseDevelopment: React.FC = () => {
  const services = [
    {
      title: 'Metaverse Development Studio Pro',
      description: 'Complete metaverse creation platform for immersive virtual experiences',
      icon: <Globe className="w-8 h-8" />,
      features: ['3D world building', 'Avatar systems', 'Virtual economies'],
      href: '/metaverse-development-studio-pro-2045',
      badge: 'IMMERSIVE'
    },
    {
      title: 'VR/AR Development',
      description: 'Advanced virtual and augmented reality solutions for immersive experiences',
      icon: <Eye className="w-8 h-8" />,
      features: ['VR applications', 'AR overlays', 'Mixed reality'],
      href: '/vr-ar-development-platform',
      badge: 'REALITY'
    },
    {
      title: 'Virtual Event Platforms',
      description: 'Holographic and virtual event solutions for global audiences',
      icon: <Users className="w-8 h-8" />,
      features: ['Virtual conferences', 'Holographic presentations', 'Interactive events'],
      href: '/virtual-event-hologram-platform',
      badge: 'EVENTS'
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical systems and environments',
      icon: <Cpu className="w-8 h-8" />,
      features: ['3D modeling', 'Real-time monitoring', 'Predictive analytics'],
      href: '/digital-twin-platform',
      badge: 'TWIN'
    },
    {
      title: 'Virtual Commerce',
      description: 'E-commerce solutions for the metaverse economy',
      icon: <Target className="w-8 h-8" />,
      features: ['Virtual stores', 'NFT marketplaces', 'Digital assets'],
      href: '/virtual-commerce-platform',
      badge: 'COMMERCE'
    },
    {
      title: 'Metaverse Consulting',
      description: 'Strategic metaverse consulting and implementation services',
      icon: <Brain className="w-8 h-8" />,
      features: ['Strategy development', 'Implementation planning', 'Training & support'],
      href: '/metaverse-consulting-services',
      badge: 'EXPERT'
    }
  ];

  const applications = [
    {
      title: 'Virtual Workspaces',
      description: 'Collaborative virtual environments for remote teams',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Virtual Learning',
      description: 'Immersive educational experiences and training platforms',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Virtual Entertainment',
      description: 'Gaming and entertainment experiences in virtual worlds',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Virtual Real Estate',
      description: 'Digital property and virtual land development',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Virtual Healthcare',
      description: 'Telemedicine and virtual health experiences',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Virtual Tourism',
      description: 'Virtual travel experiences and destination exploration',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const technologies = [
    {
      title: '3D Graphics & Rendering',
      description: 'Advanced 3D graphics and real-time rendering technologies',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Spatial Computing',
      description: 'Computing systems that understand and interact with 3D space',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: 'Blockchain Integration',
      description: 'Secure digital asset management and virtual economies',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent systems for enhanced virtual experiences',
      icon: <Brain className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Metaverse Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary metaverse and virtual reality solutions that create immersive digital experiences and transform how we interact with technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Metaverse Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Globe className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Eye className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Brain className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Metaverse Development Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive metaverse solutions designed to create immersive digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Metaverse Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how metaverse technology is transforming industries and creating new possibilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl w-16 h-16 mb-4 flex items-center justify-center">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Metaverse Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental technologies that power our metaverse solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaverse Innovation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Metaverse
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we're shaping the next generation of digital experiences and virtual worlds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Immersive Experiences</h3>
              <p className="text-gray-300 mb-4">
                We're creating truly immersive digital experiences that blur the line between 
                virtual and physical reality, enabling new forms of interaction and engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Spatial audio and haptic feedback</li>
                <li>• Real-time collaboration tools</li>
                <li>• AI-powered virtual assistants</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Virtual Economy</h3>
              <p className="text-gray-300 mb-4">
                Our metaverse platforms support robust virtual economies with digital assets, 
                NFTs, and secure blockchain integration for true digital ownership.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Digital asset creation</li>
                <li>• NFT marketplace integration</li>
                <li>• Virtual currency systems</li>
                <li>• Secure transactions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create immersive metaverse experiences that transform how people interact with technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </Link>
              <Link href="/pricing" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MetaverseDevelopment;