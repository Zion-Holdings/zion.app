import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Zap, Cpu, Database, Shield, Cloud, 
  Users, Target, TrendingUp, ArrowRight, Star,
  CheckCircle, Brain, Atom, Globe, Code, Satellite
} from 'lucide-react';
import Link from 'next/link';

const SpaceTech: React.FC = () => {
  const services = [
    {
      title: 'Space Resource Intelligence',
      description: 'Advanced space technology solutions for resource discovery and management',
      icon: <Satellite className="w-8 h-8" />,
      features: ['Resource mapping', 'Satellite intelligence', 'Space analytics'],
      href: '/space-resource-intelligence-2045',
      badge: 'SPACE'
    },
    {
      title: 'Space Mining Platform',
      description: 'Revolutionary platform for space resource extraction and processing',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Asteroid mining', 'Resource processing', 'Space logistics'],
      href: '/space-resource-mining-platform',
      badge: 'MINING'
    },
    {
      title: 'Space AI Platform',
      description: 'AI-powered space technology platform for autonomous operations',
      icon: <Brain className="w-8 h-8" />,
      features: ['Autonomous navigation', 'AI decision making', 'Space robotics'],
      href: '/space-technology-ai-platform',
      badge: 'AI-POWERED'
    },
    {
      title: 'Satellite Technology',
      description: 'Advanced satellite systems and communication networks',
      icon: <Satellite className="w-8 h-8" />,
      features: ['Satellite design', 'Communication systems', 'Earth observation'],
      href: '/satellite-technology-solutions',
      badge: 'SATELLITE'
    },
    {
      title: 'Space Infrastructure',
      description: 'Orbital infrastructure and space station technology',
      icon: <Globe className="w-8 h-8" />,
      features: ['Space stations', 'Orbital platforms', 'Space habitats'],
      href: '/space-infrastructure-platform',
      badge: 'INFRASTRUCTURE'
    },
    {
      title: 'Space Consulting',
      description: 'Strategic space technology consulting and implementation',
      icon: <Users className="w-8 h-8" />,
      features: ['Strategy development', 'Implementation planning', 'Training & support'],
      href: '/space-consulting-services',
      badge: 'EXPERT'
    }
  ];

  const applications = [
    {
      title: 'Resource Exploration',
      description: 'Advanced exploration of space resources and materials',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Satellite Communications',
      description: 'Global communication networks and data transmission',
      icon: <Satellite className="w-6 h-6" />
    },
    {
      title: 'Earth Observation',
      description: 'Environmental monitoring and climate research',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Space Tourism',
      description: 'Commercial space travel and experience platforms',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Space Manufacturing',
      description: 'Zero-gravity manufacturing and material processing',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Deep Space Exploration',
      description: 'Interplanetary missions and scientific research',
      icon: <Atom className="w-6 h-6" />
    }
  ];

  const technologies = [
    {
      title: 'Propulsion Systems',
      description: 'Advanced propulsion technologies for space travel',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Life Support Systems',
      description: 'Sustainable life support for long-duration space missions',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Space Robotics',
      description: 'Autonomous robotic systems for space operations',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: 'Space Materials',
      description: 'Advanced materials designed for space environments',
      icon: <Atom className="w-8 h-8" />
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
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary space technology solutions that push the boundaries of human exploration and commercial space operations
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
        
        {/* Floating Space Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Rocket className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Satellite className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Globe className="w-14 h-14" />
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
              Our Space Technology Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge space solutions designed to revolutionize exploration and commercial space operations
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
              Space Technology Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how space technology is transforming industries and opening new frontiers
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
              Core Space Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental technologies that power our space solutions
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

      {/* Space Innovation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we're shaping the next generation of space exploration and commercialization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Commercial Space Revolution</h3>
              <p className="text-gray-300 mb-4">
                We're democratizing space access through innovative technology solutions that make space 
                operations more accessible, efficient, and sustainable for commercial enterprises.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Affordable launch systems</li>
                <li>• Sustainable space operations</li>
                <li>• Commercial space stations</li>
                <li>• Space resource utilization</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Space Exploration</h3>
              <p className="text-gray-300 mb-4">
                Our technologies focus on creating sustainable space operations that minimize environmental 
                impact while maximizing scientific and commercial value.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Green propulsion systems</li>
                <li>• Recyclable space materials</li>
                <li>• Energy-efficient operations</li>
                <li>• Environmental monitoring</li>
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
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how space technology can transform your business and open new frontiers
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

export default SpaceTech;