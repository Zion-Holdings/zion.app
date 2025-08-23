import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Satellite, Globe, Brain, Shield, Zap, 
  CheckCircle, ArrowRight, Cpu, Eye, Database,
  BarChart3, Network, Server, Cloud, Users, Target
} from 'lucide-react';

export default function SpaceTechnology() {
  const spaceServices = [
    {
      title: 'Satellite Technology',
      description: 'Advanced satellite design, deployment, and management solutions',
      icon: <Satellite className="w-12 h-12 text-cyan-400" />,
      features: ['Satellite Design & Engineering', 'Launch Vehicle Integration', 'Orbital Mechanics', 'Ground Station Operations'],
      applications: ['Communications', 'Earth Observation', 'Navigation Systems', 'Scientific Research']
    },
    {
      title: 'Space AI & Robotics',
      description: 'Artificial intelligence and autonomous systems for space exploration',
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      features: ['Autonomous Navigation', 'AI-Powered Analysis', 'Robotic Operations', 'Predictive Maintenance'],
      applications: ['Rover Operations', 'Satellite Maintenance', 'Space Station Automation', 'Deep Space Exploration']
    },
    {
      title: 'Space Mining & Resources',
      description: 'Extraterrestrial resource extraction and utilization technologies',
      icon: <Target className="w-12 h-12 text-green-400" />,
      features: ['Resource Detection', 'Mining Operations', 'Processing Systems', 'Transportation Logistics'],
      applications: ['Asteroid Mining', 'Lunar Resources', 'Mars Exploration', 'Space Manufacturing']
    },
    {
      title: 'Space Communications',
      description: 'Advanced communication networks for space missions and operations',
      icon: <Network className="w-12 h-12 text-blue-400" />,
      features: ['Deep Space Networks', 'Quantum Communications', 'Interplanetary Internet', 'Secure Data Transmission'],
      applications: ['Mission Control', 'Satellite Networks', 'Deep Space Probes', 'Space Tourism']
    },
    {
      title: 'Space Infrastructure',
      description: 'Orbital and planetary infrastructure development and management',
      icon: <Server className="w-12 h-12 text-yellow-400" />,
      features: ['Space Stations', 'Orbital Platforms', 'Lunar Bases', 'Mars Habitats'],
      applications: ['Research Facilities', 'Manufacturing Centers', 'Tourism Destinations', 'Launch Platforms']
    },
    {
      title: 'Space Security & Defense',
      description: 'Space-based security systems and defense technologies',
      icon: <Shield className="w-12 h-12 text-pink-400" />,
      features: ['Space Situational Awareness', 'Anti-Satellite Systems', 'Space Debris Management', 'Planetary Defense'],
      applications: ['National Security', 'Space Traffic Management', 'Asteroid Deflection', 'Satellite Protection']
    }
  ];

  const spaceAdvantages = [
    {
      title: 'Global Coverage',
      description: 'Access to any location on Earth and beyond through space-based systems',
      icon: <Globe className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Unlimited Resources',
      description: 'Access to vast resources in space for future human expansion',
      icon: <Target className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Scientific Discovery',
      description: 'Unprecedented opportunities for scientific research and exploration',
      icon: <Brain className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Economic Growth',
      description: 'New industries and economic opportunities in space',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />
    }
  ];

  const spaceApplications = [
    'Earth observation and monitoring',
    'Global communications networks',
    'Navigation and positioning systems',
    'Weather forecasting and climate research',
    'Disaster response and management',
    'Agricultural monitoring and optimization',
    'Urban planning and development',
    'Scientific research and exploration'
  ];

  const spaceTechnologies = [
    'Satellite Technology',
    'Rocket Propulsion',
    'Space Robotics',
    'AI & Machine Learning',
    'Quantum Communications',
    'Advanced Materials',
    'Life Support Systems',
    'Space Habitats'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Space Technology Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Pioneering the future of space exploration with cutting-edge technology, AI-powered systems, and innovative solutions that push the boundaries of human achievement.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Space Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/ai-services" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              AI in Space
            </a>
          </motion.div>
        </div>
      </section>

      {/* Space Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Space Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From satellite technology to space mining, we provide end-to-end space technology solutions that enable humanity's expansion into the cosmos.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {spaceServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Advantages */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Why Space Technology Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Space technology provides unprecedented opportunities for human advancement and scientific discovery.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaceAdvantages.map((advantage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Space Technology Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how space technology is transforming industries and improving life on Earth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceApplications.map((application, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{application}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Technologies */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Cutting-Edge Space Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest space technologies and innovations to deliver revolutionary space solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceTechnologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Space Technology Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to successfully implementing space technology solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Mission Analysis',
                description: 'Understanding your space mission requirements and objectives',
                icon: <Target className="w-8 h-8 text-blue-400" />
              },
              {
                step: '02',
                title: 'Technology Selection',
                description: 'Choosing the optimal space technologies and platforms',
                icon: <Rocket className="w-8 h-8 text-purple-400" />
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building and validating space systems and technologies',
                icon: <Cpu className="w-8 h-8 text-green-400" />
              },
              {
                step: '04',
                title: 'Launch & Operations',
                description: 'Deploying space systems and managing ongoing operations',
                icon: <Satellite className="w-8 h-8 text-yellow-400" />
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <div className="flex justify-center mb-3">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space + AI Integration */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Space + AI Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combine the power of space technology with artificial intelligence to create autonomous space systems and intelligent exploration platforms.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">AI-Powered Space Systems</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our AI-enhanced space solutions enable autonomous navigation, intelligent data analysis, and predictive maintenance, 
                making space exploration more efficient and cost-effective than ever before.
              </p>
              <ul className="space-y-3">
                {[
                  'Autonomous Satellite Operations',
                  'AI-Powered Mission Planning',
                  'Intelligent Data Analysis',
                  'Predictive System Maintenance',
                  'Smart Resource Management'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-32 h-32 text-white" />
              </div>
              <p className="text-gray-300">
                The future of space exploration is autonomous, intelligent, and AI-powered.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how space technology can transform your business and contribute to humanity's expansion into the cosmos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Space Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/ai-services" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore AI Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

