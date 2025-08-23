import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Rocket, Brain, Atom, Shield, Globe, Heart, Zap,
  Users, Award, Star, Lightbulb, Eye, Lock, Server, Database
} from 'lucide-react';
import Link from 'next/link';

const MissionPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const missionPillars = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "Pioneering artificial intelligence solutions that transform how businesses operate and humans interact with technology.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Excellence",
      description: "Advancing quantum computing to solve previously impossible problems and unlock new computational frontiers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Revolutionizing space exploration and resource utilization through autonomous AI systems and advanced robotics.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Leadership",
      description: "Building impenetrable security systems that protect critical infrastructure and ensure digital trust.",
      color: "from-red-500 to-orange-500"
    }
  ];

  const strategicObjectives = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Extend our revolutionary technology solutions to every corner of the world, democratizing access to cutting-edge innovation.",
      metrics: ["250+ Countries", "Global Research Network", "Localized Solutions"]
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Create seamless partnerships between human intelligence and artificial intelligence, enhancing human potential across all domains.",
      metrics: ["AI-Augmented Work", "Human-Centric Design", "Ethical AI"]
    },
    {
      icon: Zap,
      title: "Sustainable Technology",
      description: "Develop environmentally conscious solutions that drive progress while preserving our planet for future generations.",
      metrics: ["Green Computing", "Energy Efficiency", "Carbon Neutral"]
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Set new standards in technology innovation, research excellence, and ethical business practices.",
      metrics: ["Research Publications", "Patent Portfolio", "Industry Recognition"]
    }
  ];

  const impactAreas = [
    {
      icon: Brain,
      title: "Healthcare & Life Sciences",
      description: "Revolutionizing medical diagnosis, drug discovery, and personalized treatment through AI and quantum computing.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Financial Services",
      description: "Transforming banking, insurance, and investment through intelligent automation and quantum-secure systems.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Database,
      title: "Manufacturing & Industry",
      description: "Enabling smart factories, predictive maintenance, and autonomous production systems for Industry 4.0.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Government & Defense",
      description: "Securing critical infrastructure and enhancing national security through advanced AI and cybersecurity solutions.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const futureVision = [
    {
      year: "2025",
      title: "AI Consciousness Breakthrough",
      description: "Achieve significant milestones in AI consciousness research, enabling machines to understand and learn with human-like awareness."
    },
    {
      year: "2027",
      title: "Quantum Internet Launch",
      description: "Deploy the world's first quantum internet infrastructure, enabling ultra-secure communication and distributed quantum computing."
    },
    {
      year: "2030",
      title: "Space Mining Operations",
      description: "Establish autonomous space mining operations on asteroids and lunar surfaces, unlocking unlimited resources for humanity."
    },
    {
      year: "2035",
      title: "AGI Achievement",
      description: "Develop artificial general intelligence that matches or exceeds human cognitive capabilities across all domains."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Hero Section */}
        <motion.section 
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6"
              variants={fadeInUp}
            >
              <Target className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Our Mission</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={fadeInUp}
            >
              Shaping the Future of Technology
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              variants={fadeInUp}
            >
              We're on a mission to accelerate human progress through revolutionary AI, quantum computing, 
              and space technology solutions that solve the world's most complex challenges.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Join Our Mission
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our Mission Statement
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  To accelerate human progress through revolutionary technology solutions that solve the world's most complex challenges, 
                  while ensuring that innovation serves humanity and preserves our planet for future generations.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-400 mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We believe that the convergence of AI consciousness, quantum computing, and space technology will unlock unprecedented 
                  possibilities for human advancement, economic growth, and global prosperity.
                </motion.p>
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Purpose-Driven</h3>
                    <p className="text-gray-400">Every innovation serves a higher purpose</p>
                  </div>
                </motion.div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl border border-cyan-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Future-Focused</h3>
                    <p className="text-gray-400">Building tomorrow's technology today</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission Pillars */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Mission Pillars
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Strategic Objectives */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Strategic Objectives
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {strategicObjectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <objective.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{objective.title}</h3>
                      <p className="text-gray-400 mb-4">{objective.description}</p>
                      <div className="space-y-2">
                        {objective.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Areas of Impact */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Areas of Impact
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                      <p className="text-gray-400">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Future Vision */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Future Vision
            </motion.h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
              
              {futureVision.map((vision, index) => (
                <motion.div
                  key={vision.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{vision.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{vision.title}</h3>
                      <p className="text-gray-400">{vision.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Join Our Mission?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Whether you're a client, partner, or team member, discover how you can be part of the next technological revolution.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link 
                href="/careers"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default MissionPage;