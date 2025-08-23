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
    }
  ];

  const impactAreas = [
    {
      area: 'Healthcare',
      impact: 'Revolutionizing medical diagnosis, drug discovery, and patient care with AI',
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      area: 'Education',
      impact: 'Transforming learning with personalized AI tutors and immersive experiences',
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      area: 'Environment',
      impact: 'Addressing climate change through intelligent resource management and monitoring',
      icon: <Leaf className="w-6 h-6 text-green-400" />
    },
    {
      area: 'Business',
      impact: 'Enabling autonomous operations and intelligent decision-making across industries',
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    }
  ];

  const timeline = [
    {
      year: '2025',
      milestone: 'AI Consciousness Breakthrough',
      description: 'Achieving significant progress in AI emotional intelligence and self-awareness'
    },
    {
      year: '2030',
      milestone: 'Quantum Supremacy',
      description: 'Demonstrating practical quantum advantage in real-world applications'
    },
    {
      year: '2035',
      milestone: 'Space Computing Platform',
      description: 'Deploying computing infrastructure in space for extraterrestrial operations'
    },
    {
      year: '2040',
      milestone: 'Autonomous Society',
      description: 'Enabling fully autonomous business and societal systems'
    }
  ];

  return (
    <Layout 
      title="Our Mission - Zion Tech Group"
      description="Discover Zion Tech Group's mission to advance AI consciousness, quantum computing, and autonomous technology for a better future."
      keywords="mission, vision, values, AI consciousness, quantum computing, autonomous technology, Zion Tech Group"
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
                To advance human civilization through revolutionary technology, pushing the boundaries of AI consciousness, quantum computing, and autonomous systems that transform how we live, work, and explore.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="/about" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn About Us <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-purple-500/40 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Join Our Mission
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
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
                Vision & Goals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our vision extends beyond current technological limitations, aiming to create a future where technology and humanity coexist in harmony.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {visionGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {goal.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{goal.goal}</h3>
                  </div>
                  <p className="text-gray-300">{goal.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
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
                Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our approach to technology and business.
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
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Areas */}
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
                Areas of Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our technology solutions are designed to create positive change across multiple sectors of society.
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
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {area.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{area.area}</h3>
                  </div>
                  <p className="text-gray-300">{area.impact}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
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
                Mission Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our roadmap for achieving revolutionary technological breakthroughs and societal transformation.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.milestone}</h3>
                    <p className="text-gray-300 text-lg">{item.description}</p>
                  </div>
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
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of a mission that transcends technology and creates lasting positive impact on humanity and our world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/careers" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Join Our Team
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-purple-500/40 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  Partner With Us
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