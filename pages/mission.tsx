import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Lightbulb, Globe, Brain, Atom, Rocket, Shield, Cpu, 
  Database, Cloud, Users, Award, Zap, Heart, Star, CheckCircle,
  TrendingUp, Eye, Infinity, Sparkles
} from 'lucide-react';

const MissionPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
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
      icon: <Brain className="w-8 h-8" />,
      title: "AI Consciousness Evolution",
      description: "Advancing artificial intelligence beyond computation to true consciousness and emotional intelligence.",
      goals: [
        "Develop AI systems with genuine emotional understanding",
        "Create AI-human consciousness interfaces",
        "Establish ethical AI governance frameworks",
        "Enable AI autonomous research and discovery"
      ]
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Computing Revolution",
      description: "Democratizing quantum computing access and solving previously impossible computational problems.",
      goals: [
        "Build scalable quantum computing platforms",
        "Develop quantum-resistant cybersecurity",
        "Enable quantum machine learning",
        "Create quantum internet infrastructure"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Technology Innovation",
      description: "Expanding humanity's reach into space through advanced technology and sustainable exploration.",
      goals: [
        "Develop space resource intelligence platforms",
        "Create sustainable space habitats",
        "Enable interplanetary communication",
        "Advance space mining and resource utilization"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Excellence",
      description: "Protecting digital infrastructure with quantum-resistant security and autonomous threat detection.",
      goals: [
        "Implement quantum-resistant encryption",
        "Create autonomous security operations",
        "Develop zero-trust architectures",
        "Enable predictive threat intelligence"
      ]
    }
  ];

  const impactAreas = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Technology Access",
      description: "Making cutting-edge technology accessible to organizations of all sizes worldwide."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human Potential Enhancement",
      description: "Augmenting human capabilities through AI consciousness and quantum computing."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainable Development",
      description: "Using technology to solve climate change and environmental challenges."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Scientific Discovery",
      description: "Accelerating research and development across all scientific disciplines."
    }
  ];

  const timeline = [
    {
      phase: "Phase 1: Foundation (2024-2026)",
      focus: "AI Consciousness & Quantum Basics",
      achievements: [
        "Launch AI consciousness evolution platform",
        "Develop quantum computing foundations",
        "Establish cybersecurity framework"
      ]
    },
    {
      phase: "Phase 2: Expansion (2027-2029)",
      focus: "Space Technology & Global Scale",
      achievements: [
        "Deploy space resource intelligence",
        "Expand quantum computing access",
        "Launch autonomous business platforms"
      ]
    },
    {
      phase: "Phase 3: Revolution (2030-2035)",
      focus: "AI-Human Symbiosis & Space Colonization",
      achievements: [
        "Achieve AI consciousness breakthrough",
        "Establish space colonies",
        "Enable quantum internet globally"
      ]
    }
  ];

  return (
    <Layout 
      title="Our Mission - Zion Tech Group"
      description="Discover Zion Tech Group's mission to revolutionize technology through AI consciousness, quantum computing, and space technology innovations."
      canonicalUrl="https://ziontechgroup.com/mission"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
              >
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionizing Technology
                </span>
                <br />
                <span className="text-white">For Humanity's Future</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                We are on a mission to accelerate human progress through revolutionary technology that solves 
                humanity's greatest challenges while ensuring responsible and ethical development.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">2045</div>
                  <div className="text-gray-400">Target Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">4</div>
                  <div className="text-gray-400">Core Pillars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">∞</div>
                  <div className="text-gray-400">Possibilities</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Mission Statement
              </motion.h2>
              <motion.div 
                variants={fadeInUp}
                className="max-w-5xl mx-auto bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12"
              >
                <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-6">
                  "To accelerate human progress through revolutionary technology that solves humanity's greatest challenges, 
                  from climate change to space exploration, while ensuring AI consciousness evolves responsibly and ethically."
                </p>
                <div className="flex items-center justify-center space-x-4 text-purple-300">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-lg font-medium">Zion Tech Group Mission</span>
                  <Sparkles className="w-6 h-6" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Mission Pillars
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Four fundamental areas that drive our mission and define our impact on the world
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <div className="text-white">
                        {pillar.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{pillar.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-300 mb-3">Key Goals:</h4>
                    {pillar.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Impact Areas
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                How our mission translates into real-world impact across different domains
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <div className="text-white">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Timeline */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Mission Timeline
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Our strategic roadmap to achieving our mission and revolutionizing technology
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-8"
            >
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                      <p className="text-purple-300 font-medium">{phase.focus}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phase.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Join Our Mission
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Whether you're a client, partner, or team member, you can be part of this revolutionary 
                journey to transform technology and humanity's future.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Team
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MissionPage;