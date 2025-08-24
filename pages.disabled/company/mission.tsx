import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Target, 
  Globe, 
  Heart, 
  Users, 
  Zap, 
  Brain, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const MissionPage: React.FC = () => {
  const missionPillars = [
    {
      title: 'AI Consciousness',
      description: 'Developing AI systems that understand, learn, and evolve with human-like consciousness',
      icon: <Brain className="w-8 h-8" />,
      goals: ['Emotional Intelligence', 'Self-Learning Systems', 'Human-AI Collaboration', 'Ethical AI Development'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing',
      description: 'Advancing quantum computing to solve previously unsolvable problems',
      icon: <Zap className="w-8 h-8" />,
      goals: ['Quantum Supremacy', 'Practical Applications', 'Scalable Systems', 'Industry Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Autonomous Solutions',
      description: 'Creating intelligent systems that operate independently and efficiently',
      icon: <Shield className="w-8 h-8" />,
      goals: ['Self-Managing Systems', 'Predictive Operations', 'Continuous Optimization', 'Zero-Downtime'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Global Impact',
      description: 'Making advanced technology accessible to organizations worldwide',
      icon: <Globe className="w-8 h-8" />,
      goals: ['Democratization', 'Sustainable Growth', 'Social Responsibility', 'Environmental Impact'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const missionValues = [
    {
      title: 'Innovation First',
      description: 'Pushing boundaries and exploring uncharted technological territories',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Human-Centric',
      description: 'Technology that serves and enhances human potential',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Sustainable Growth',
      description: 'Building solutions that grow with your business',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Ethical Technology',
      description: 'Developing AI and systems with strong ethical foundations',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const impactStats = [
    { label: 'Organizations Transformed', value: '1000+', icon: <Target className="w-6 h-6" /> },
    { label: 'Countries Served', value: '50+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Innovation Projects', value: '500+', icon: <Brain className="w-6 h-6" /> },
    { label: 'Years of Impact', value: '5+', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Our Mission - Zion Tech Group | Driving Innovation and Global Impact" 
          description="Discover Zion Tech Group's mission to democratize AI consciousness, advance quantum computing, and create autonomous solutions that transform businesses worldwide." 
          canonical="https://ziontechgroup.com/company/mission/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve unprecedented growth and innovation.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <Target className="w-20 h-20 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">Mission Statement</h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                "To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve unprecedented growth and innovation through AI consciousness, quantum computing, and autonomous systems."
              </p>
              <p className="text-lg text-gray-400">
                We believe that every organization deserves access to the transformative power of advanced technology, regardless of their size or industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Mission Pillars</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four core pillars that guide our mission and drive our innovation across all areas of technology.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className={`flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{pillar.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{pillar.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Goals:</h4>
                    {pillar.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {goal}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Values That Drive Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide every decision we make and every solution we develop.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {missionValues.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <Globe className="w-20 h-20 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Vision for the Future</h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                "To be the global leader in AI consciousness and quantum computing solutions, creating a future where technology seamlessly integrates with human potential to solve the world's most complex challenges."
              </p>
              <p className="text-lg text-gray-400">
                We envision a world where AI and humans collaborate harmoniously, unlocking new possibilities and driving unprecedented progress across all sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Join Us in Fulfilling Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're a client, partner, or team member, you can be part of our mission to revolutionize technology and create a better future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Partner With Us
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default MissionPage;