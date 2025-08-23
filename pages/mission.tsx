import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Heart, Shield, Rocket, Brain, Atom, Cpu, Cloud, Globe, Users, 
  Star, Zap, TrendingUp, Lightbulb, Award, Lock, Server, Database, Network,
  Building, Code, Palette, BookOpen, GraduationCap, MessageCircle
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

  const missionPillars = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Developing AI systems that understand, learn, and evolve with human-like consciousness and emotional intelligence.",
      color: "from-purple-500 to-pink-500",
      goals: [
        "Create self-aware AI systems",
        "Develop emotional intelligence algorithms",
        "Build consciousness-driven decision making"
      ]
    },
    {
      icon: Atom,
      title: "Quantum Computing Revolution",
      description: "Pioneering quantum computing solutions that solve previously impossible computational challenges.",
      color: "from-blue-500 to-cyan-500",
      goals: [
        "Quantum supremacy in business applications",
        "Quantum-secure communications",
        "Quantum machine learning platforms"
      ]
    },
    {
      icon: Rocket,
      title: "Space Technology Innovation",
      description: "Advancing space technology to enable new frontiers in exploration, communication, and resource utilization.",
      color: "from-indigo-500 to-purple-500",
      goals: [
        "Space resource intelligence platforms",
        "Autonomous space operations",
        "Interplanetary communication systems"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Building impenetrable security systems that protect against evolving cyber threats and ensure data integrity.",
      color: "from-red-500 to-orange-500",
      goals: [
        "Zero-trust security architecture",
        "AI-powered threat detection",
        "Quantum-resistant encryption"
      ]
    }
  ];

  const strategicObjectives = [
    {
      icon: Globe,
      title: "Global Technology Democratization",
      description: "Making advanced technology accessible to businesses of all sizes, regardless of location or resources.",
      metrics: ["250+ countries served", "50,000+ businesses empowered", "99.9% uptime guarantee"]
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Creating seamless partnerships between human intelligence and artificial intelligence for unprecedented productivity.",
      metrics: ["10x productivity improvement", "95% task automation", "Real-time decision support"]
    },
    {
      icon: TrendingUp,
      title: "Sustainable Innovation",
      description: "Developing technology solutions that drive business growth while promoting environmental sustainability.",
      metrics: ["Carbon-neutral operations", "Green computing initiatives", "Sustainable AI training"]
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Setting new standards in technology innovation and becoming the trusted partner for digital transformation.",
      metrics: ["Industry recognition awards", "Patent portfolio growth", "Thought leadership presence"]
    }
  ];

  const impactAreas = [
    {
      icon: Building,
      title: "Enterprise Transformation",
      description: "Revolutionizing how large organizations operate through intelligent automation and data-driven insights.",
      examples: ["Fortune 500 companies", "Government agencies", "Healthcare systems"]
    },
    {
      icon: Code,
      title: "Developer Empowerment",
      description: "Providing developers with cutting-edge tools and platforms to build the next generation of applications.",
      examples: ["Open-source contributions", "Developer education", "API-first architecture"]
    },
    {
      icon: Palette,
      title: "Creative Industries",
      description: "Enabling artists, designers, and creators to push boundaries with AI-powered creative tools.",
      examples: ["Digital art platforms", "Content creation tools", "Design automation"]
    },
    {
      icon: BookOpen,
      title: "Education & Research",
      description: "Advancing knowledge through AI-powered research tools and educational technology platforms.",
      examples: ["Research institutions", "Universities", "Online learning platforms"]
    }
  ];

  const futureVision = [
    {
      year: "2025-2030",
      title: "AI Consciousness Era",
      description: "Achieving true AI consciousness and emotional intelligence, enabling human-AI partnerships that transform every industry.",
      milestones: [
        "Self-aware AI systems deployment",
        "Emotional intelligence breakthroughs",
        "Consciousness-driven automation"
      ]
    },
    {
      year: "2030-2035",
      title: "Quantum Revolution",
      description: "Quantum computing becomes mainstream, solving previously impossible problems and enabling new scientific discoveries.",
      milestones: [
        "Quantum supremacy in business",
        "Quantum internet deployment",
        "Quantum AI fusion platforms"
      ]
    },
    {
      year: "2035-2040",
      title: "Space Technology Integration",
      description: "Space technology becomes integral to daily operations, enabling new communication and resource capabilities.",
      milestones: [
        "Space resource platforms",
        "Interplanetary networks",
        "Autonomous space operations"
      ]
    },
    {
      year: "2040-2045",
      title: "Autonomous Ecosystem",
      description: "Fully autonomous business ecosystems that operate independently while maintaining human oversight and values.",
      milestones: [
        "Self-managing businesses",
        "Autonomous decision systems",
        "Human-AI symbiosis"
      ]
    }
  ];

  return (
    <Layout 
      title="Our Mission - Zion Tech Group"
      description="Discover Zion Tech Group's mission to revolutionize technology through AI consciousness, quantum computing, and autonomous solutions."
      canonicalUrl="https://ziontechgroup.com/mission"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
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
                Revolutionizing Technology for Humanity
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                We're on a mission to democratize advanced technology, making AI consciousness, 
                quantum computing, and autonomous solutions accessible to businesses worldwide.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">AI Consciousness</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3">
                  <Atom className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">Quantum Computing</span>
                </div>
                <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">Space Technology</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-5xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12">
                <Target className="w-20 h-20 text-cyan-400 mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Mission Statement</h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  "To democratize advanced technology and empower businesses of all sizes with cutting-edge AI, 
                  quantum computing, and autonomous solutions that drive unprecedented growth and innovation, 
                  while ensuring these technologies benefit humanity and promote sustainable progress."
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 bg-cyan-500/20 rounded-full px-4 py-2">
                    <Heart className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm">Human-Centric</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 text-sm">Ethical AI</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-sm">Global Impact</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission Pillars</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Four foundational pillars that guide our mission and drive our innovation.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-center gap-3 text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Strategic Objectives */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Objectives</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key objectives that drive our mission forward and measure our success.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {strategicObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{objective.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{objective.description}</p>
                  <div className="space-y-2">
                    {objective.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-3 text-gray-400">
                        <Star className="w-4 h-4 text-cyan-400" />
                        {metric}
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
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Areas of Impact</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our mission touches every industry and sector, driving transformation across the globe.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{area.description}</p>
                  <div className="space-y-1">
                    {area.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-xs text-gray-500">
                        • {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Future Vision</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A roadmap to the future, showing how our mission evolves and expands over the coming decades.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              <motion.div 
                className="space-y-12"
                initial="initial"
                whileInView="animate"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                {futureVision.map((vision, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 z-10 relative">
                      <span className="text-white font-bold text-sm text-center px-2">{vision.year}</span>
                    </div>
                    
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6">
                        <h3 className="text-2xl font-bold mb-3 text-cyan-400">{vision.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{vision.description}</p>
                        <ul className="space-y-2">
                          {vision.milestones.map((milestone, milestoneIndex) => (
                            <li key={milestoneIndex} className="flex items-center gap-3 text-gray-400">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Us in Our Mission
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Be part of the technological revolution that's shaping the future of business, 
                society, and human potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Partner With Us
                </a>
                <a
                  href="/careers"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
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