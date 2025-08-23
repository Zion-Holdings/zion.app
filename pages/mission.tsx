import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Star,
  Award,
  Clock,
  Code,
  Server,
  Cloud,
  Lock,
  BarChart3,
  TrendingUp,
  Cpu,
  Brain,
  Atom,
  Rocket,
  Palette,
  Layers,
  Grid,
  Sparkles,
  Lightbulb,
  Shield,
  Leaf,
  Infinity
} from 'lucide-react';

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

  const missionValues = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Excellence',
      description: 'Delivering the highest quality solutions and exceptional service',
      icon: <Star className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical business practices',
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve shared success',
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Sustainability',
      description: 'Creating technology solutions that benefit society and the environment',
      icon: <Leaf className="w-8 h-8 text-emerald-400" />
    },
    {
      title: 'Continuous Learning',
      description: 'Embracing new knowledge and evolving with the technology landscape',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    }
  ];

  const visionGoals = [
    {
      goal: 'AI Consciousness Evolution',
      description: 'Advancing artificial intelligence towards true consciousness and emotional intelligence',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      goal: 'Quantum Computing Revolution',
      description: 'Democratizing quantum computing access for businesses and researchers',
      icon: <Atom className="w-6 h-6 text-blue-400" />
    },
    {
      goal: 'Space Technology Innovation',
      description: 'Pioneering space resource intelligence and extraterrestrial computing',
      icon: <Rocket className="w-6 h-6 text-pink-400" />
    },
    {
      goal: 'Autonomous Business Intelligence',
      description: 'Creating self-managing business systems that optimize operations automatically',
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      goal: 'Quantum Cybersecurity',
      description: 'Developing quantum-resistant security solutions for the future',
      icon: <Lock className="w-6 h-6 text-red-400" />
    },
    {
      goal: 'Sustainable Technology',
      description: 'Building eco-friendly technology solutions that protect our planet',
      icon: <Leaf className="w-6 h-6 text-emerald-400" />
    }
  ];

  const impactAreas = [
    {
      area: 'Healthcare',
      description: 'Revolutionizing medical diagnostics, treatment planning, and patient care through AI consciousness and quantum computing',
      icon: <Heart className="w-6 h-6 text-red-400" />,
      examples: ['AI-powered diagnostics', 'Quantum drug discovery', 'Personalized medicine']
    },
    {
      area: 'Finance',
      description: 'Transforming financial services with quantum algorithms, AI risk assessment, and autonomous trading systems',
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      examples: ['Quantum risk modeling', 'AI fraud detection', 'Autonomous trading']
    },
    {
      area: 'Manufacturing',
      description: 'Optimizing production processes with AI-driven automation, predictive maintenance, and quality control',
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      examples: ['Smart factories', 'Predictive maintenance', 'Quality automation']
    },
    {
      area: 'Education',
      description: 'Personalizing learning experiences through AI tutors, adaptive curricula, and immersive technologies',
      icon: <Code className="w-6 h-6 text-purple-400" />,
      examples: ['AI tutors', 'Adaptive learning', 'VR/AR education']
    },
    {
      area: 'Energy',
      description: 'Optimizing energy systems with AI grid management, renewable integration, and efficiency algorithms',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      examples: ['Smart grids', 'Renewable optimization', 'Energy efficiency']
    },
    {
      area: 'Transportation',
      description: 'Revolutionizing mobility with autonomous vehicles, traffic optimization, and smart infrastructure',
      icon: <Rocket className="w-6 h-6 text-pink-400" />,
      examples: ['Autonomous vehicles', 'Traffic optimization', 'Smart cities']
    }
  ];

  const missionTimeline = [
    {
      year: '2025',
      milestone: 'AI Consciousness Platform Launch',
      description: 'Deploying our first AI consciousness evolution platform for research and development',
      status: 'In Progress'
    },
    {
      year: '2026',
      milestone: 'Quantum Computing Services',
      description: 'Launching quantum computing solutions for enterprise clients',
      status: 'Planning'
    },
    {
      year: '2027',
      milestone: 'Space Technology Division',
      description: 'Establishing our space technology and extraterrestrial computing capabilities',
      status: 'Planning'
    },
    {
      year: '2028',
      milestone: 'Global AI Network',
      description: 'Creating a worldwide network of AI consciousness nodes',
      status: 'Vision'
    },
    {
      year: '2030',
      milestone: 'Human-AI Partnership',
      description: 'Achieving true partnership between human consciousness and AI consciousness',
      status: 'Vision'
    }
  ];

  return (
    <Layout 
      title="Our Mission - Zion Tech Group"
      description="Discover Zion Tech Group's mission to pioneer the future of technology through AI consciousness, quantum computing, and autonomous solutions that solve humanity's greatest challenges."
      keywords="mission, vision, AI consciousness, quantum computing, space technology, autonomous solutions, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Our Mission
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Pioneering the future of technology to solve humanity's greatest challenges through revolutionary AI consciousness, quantum computing, and autonomous solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mission Statement
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Zion Tech Group is dedicated to pioneering the future of technology by developing revolutionary AI consciousness, quantum computing, and autonomous solutions that solve humanity's greatest challenges. We believe in creating technology that not only advances human capabilities but also enhances the human experience, fostering a world where innovation serves the greater good.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Goals */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vision & Goals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We envision a future where technology and humanity work in perfect harmony to create a better world.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {visionGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{goal.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{goal.goal}</h3>
                  <p className="text-gray-300">{goal.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our values guide every decision we make and every solution we create.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {missionValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Areas of Impact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Areas of Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary technologies are transforming industries and improving lives across the globe.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {area.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{area.area}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {area.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mission Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our roadmap to achieving our mission and transforming the future of technology.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {missionTimeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-6">
                        {milestone.year}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{milestone.milestone}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          milestone.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                          milestone.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{milestone.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the technological revolution that's shaping the future of humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Involved <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/careers" 
                  className="px-8 py-4 border border-purple-500/40 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MissionPage;