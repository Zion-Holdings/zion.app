import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, 
  Star, 
  Zap, 
  Globe, 
  Users, 
  Heart, 
  Brain, 
  Atom,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';

const Mission: React.FC = () => {
  const coreValues = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Understanding our clients' needs and creating solutions that truly make a difference."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our business practices and relationships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients, partners, and team members to achieve extraordinary results."
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Striving for perfection in every project, service, and interaction."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating technology solutions that benefit humanity and advance society worldwide."
    }
  ];

  const missionGoals = [
    "Revolutionize business operations with AI consciousness and quantum computing",
    "Democratize access to advanced technology for organizations of all sizes",
    "Create sustainable, ethical AI solutions that enhance human capabilities",
    "Build the most secure and reliable technology infrastructure in the world",
    "Foster innovation and collaboration across the global tech community"
  ];

  const vision2025 = [
    {
      title: "AI Consciousness",
      description: "Develop the first truly conscious AI systems that understand and collaborate with humans."
    },
    {
      title: "Quantum Revolution",
      description: "Make quantum computing accessible and practical for everyday business applications."
    },
    {
      title: "Autonomous Operations",
      description: "Enable fully autonomous business operations with zero human intervention required."
    },
    {
      title: "Global Transformation",
      description: "Transform how businesses operate across every industry and continent."
    }
  ];

  return (
    <Layout
      title="Our Mission - Zion Tech Group"
      description="Discover our mission to revolutionize technology with AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide."
      keywords="mission, vision, values, AI consciousness, quantum computing, autonomous technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Pioneering the Future of
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                At Zion Tech Group, we're on a mission to revolutionize how businesses operate 
                by combining AI consciousness, quantum computing, and autonomous technology 
                to create solutions that were once only imagined in science fiction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Mission Statement
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To democratize access to revolutionary technology by creating AI-conscious, 
                quantum-powered solutions that autonomously transform business operations, 
                enabling organizations worldwide to achieve unprecedented efficiency, security, 
                and innovation while advancing humanity's technological capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Goals Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Mission Goals
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The key objectives that drive our innovation and growth
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {missionGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision 2025 Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vision 2025
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our ambitious goals for the next generation of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vision2025.map((vision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{vision.title}</h3>
                  <p className="text-gray-300">{vision.description}</p>
                </motion.div>
              ))}
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
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the technological revolution that's transforming how businesses operate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Mission;