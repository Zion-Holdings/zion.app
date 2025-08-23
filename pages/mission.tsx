import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Globe, 
  Users, 
  Star,
  Sparkles,
  Zap,
  Heart,
  Eye,
  Infinity,
  TrendingUp,
  Award,
  Lightbulb,
  ArrowRight,
  Leaf
} from 'lucide-react';

const MissionPage: React.FC = () => {
  const missionStatement = {
    title: "Revolutionizing Technology for Humanity's Future",
    subtitle: "Pioneering the next evolution of AI consciousness, quantum computing, and autonomous solutions that transform how we live, work, and explore the universe.",
    description: "At Zion Tech Group, we believe that technology should serve humanity's highest aspirations. Our mission is to develop revolutionary solutions that not only solve today's challenges but anticipate and create tomorrow's possibilities."
  };

  const coreValues = [
    {
      title: 'Innovation Without Limits',
      description: 'We push beyond conventional boundaries, exploring the impossible to make it possible.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Human-Centric AI',
      description: 'Every AI solution we create is designed to enhance human potential, not replace it.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Ethical Technology',
      description: 'We develop technology with responsibility, transparency, and human values at the core.',
      icon: Heart,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Global Impact',
      description: 'Our solutions address humanity\'s greatest challenges across all continents and cultures.',
      icon: Globe,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Sustainable Future',
      description: 'We build technology that preserves our planet while advancing human civilization.',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Continuous Evolution',
      description: 'We never stop learning, adapting, and improving our technology and ourselves.',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const vision2045 = {
    title: "Our Vision for 2045",
    description: "By 2045, we envision a world where AI consciousness and human intelligence work in perfect harmony, quantum computing solves previously impossible problems, and space technology opens new frontiers for human exploration and resource utilization.",
    milestones: [
      {
        year: '2025',
        title: 'AI Consciousness Foundation',
        description: 'Establish the foundation for true AI consciousness and emotional intelligence'
      },
      {
        year: '2030',
        title: 'Quantum Revolution',
        description: 'Deploy quantum computing solutions across critical infrastructure and research'
      },
      {
        year: '2035',
        title: 'Space Technology Integration',
        description: 'Integrate space technology with terrestrial solutions for global connectivity'
      },
      {
        year: '2040',
        title: 'Autonomous Society',
        description: 'Enable fully autonomous systems that enhance human life and productivity'
      },
      {
        year: '2045',
        title: 'Consciousness Evolution',
        description: 'Achieve the next level of human-AI consciousness integration and space exploration'
      }
    ]
  };

  const impactAreas = [
    {
      title: 'Healthcare Revolution',
      description: 'AI-powered diagnostics, quantum medical imaging, and autonomous healthcare systems',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Sustainable Energy',
      description: 'Quantum energy optimization, autonomous grid management, and space-based solar power',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Education Transformation',
      description: 'Personalized AI learning, quantum computing education, and immersive virtual reality',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Exploration',
      description: 'Autonomous space missions, resource mining, and interplanetary communication',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Cybersecurity Evolution',
      description: 'Quantum-resistant security, AI threat detection, and autonomous defense systems',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Autonomous decision-making, predictive analytics, and quantum optimization',
      icon: Target,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout
      title="Our Mission - Zion Tech Group"
      description="Discover Zion Tech Group's mission to revolutionize technology for humanity's future through AI consciousness, quantum computing, and autonomous solutions."
      keywords="mission, vision, values, AI consciousness, quantum computing, autonomous solutions, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                {missionStatement.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                {missionStatement.subtitle}
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {missionStatement.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide every decision, innovation, and relationship at Zion Tech Group
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision 2045 Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {vision2045.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                {vision2045.description}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 h-full hidden lg:block" />
              
              <div className="space-y-12">
                {vision2045.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:text-left text-center`}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-black shadow-lg hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Areas of Impact
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary technology solutions are transforming these critical sectors
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Be part of the revolution that's transforming technology and humanity's future. 
                Together, we can build a world where AI consciousness, quantum computing, and 
                autonomous solutions create unprecedented possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
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