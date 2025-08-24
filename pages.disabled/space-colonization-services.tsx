import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Globe, Satellite, Users, Shield, Zap, Target, 
  Sparkles, Star, ArrowRight, Building, Cpu, Database, 
  Network, Server, Monitor, Smartphone, Camera, Gamepad2
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function SpaceColonizationServices() {
  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Habitat Design & Construction',
      description: 'Advanced space habitat solutions for sustainable human presence in space',
      features: ['Modular habitat systems', 'Life support integration', 'Radiation protection', 'Expandable structures']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Life Support Systems',
      description: 'Comprehensive life support and environmental control for space colonies',
      features: ['Oxygen generation', 'Water recycling', 'Waste management', 'Climate control']
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Space Infrastructure',
      description: 'Critical infrastructure development for space colonization projects',
      features: ['Power systems', 'Communication networks', 'Transportation hubs', 'Resource processing']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Colony Management',
      description: 'AI-powered systems for managing space colony operations and logistics',
      features: ['Resource allocation', 'Population management', 'Emergency response', 'Growth planning']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety & Security',
      description: 'Advanced safety systems and protocols for space colony protection',
      features: ['Radiation shielding', 'Emergency protocols', 'Health monitoring', 'Risk assessment']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Solutions',
      description: 'Sustainable energy generation and distribution for space colonies',
      features: ['Solar power systems', 'Nuclear power', 'Energy storage', 'Grid management']
    }
  ];

  const technologies = [
    {
      category: 'Advanced Materials',
      items: [
        'Radiation-resistant composites',
        'Self-healing materials',
        'Lightweight structures',
        'Thermal management systems'
      ]
    },
    {
      category: 'AI & Automation',
      items: [
        'Autonomous colony management',
        'Predictive maintenance',
        'Resource optimization',
        'Emergency response systems'
      ]
    },
    {
      category: 'Biotechnology',
      items: [
        'Closed-loop ecosystems',
        'Food production systems',
        'Medical facilities',
        'Genetic adaptation research'
      ]
    }
  ];

  const phases = [
    {
      phase: 'Phase 1: Planning & Design',
      description: 'Comprehensive planning and architectural design for space colonies',
      duration: '6-12 months',
      deliverables: ['Feasibility studies', 'Architectural designs', 'Resource planning', 'Risk assessment']
    },
    {
      phase: 'Phase 2: Prototype Development',
      description: 'Development and testing of critical systems and components',
      duration: '12-18 months',
      deliverables: ['System prototypes', 'Testing protocols', 'Performance validation', 'Safety certification']
    },
    {
      phase: 'Phase 3: Implementation',
      description: 'Full-scale deployment and construction of space colony infrastructure',
      duration: '24-36 months',
      deliverables: ['Infrastructure deployment', 'System integration', 'Operational testing', 'Colony activation']
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Space Colonization Services | Zion Tech Group"
        description="Pioneering space colonization services with advanced AI, sustainable technology, and comprehensive infrastructure solutions for humanity's future in space."
        keywords="space colonization, space habitats, life support systems, space infrastructure, colony management, space technology"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Space Colonization</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pioneering{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Space Colonization
              </span>{' '}
              Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Building the future of humanity in space with cutting-edge technology, 
              sustainable solutions, and AI-powered colony management systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space colonization services cover every aspect of building and 
              maintaining sustainable human presence in space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest advancements in materials science, AI, and 
              biotechnology for sustainable space colonization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <span>{tech.category}</span>
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Structured{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Implementation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful delivery of space colonization 
              projects through systematic planning and execution
            </p>
          </motion.div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-semibold text-white">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg">{phase.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Future of Humanity?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in pioneering the next chapter of human civilization. 
              Let's build sustainable space colonies together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Mission</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}