import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Globe, Rocket, Shield, Brain, 
  ArrowRight, CheckCircle, Star, Target, Heart, Zap,
  Building, Calendar, TrendingUp, Atom
} from 'lucide-react';
import Link from 'next/link';

const About: React.FC = () => {
  const companyStats = [
    {
      metric: "Years of Innovation",
      value: "15+",
      description: "Pioneering breakthrough technologies",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      metric: "Global Clients",
      value: "500+",
      description: "Trusted by organizations worldwide",
      icon: <Globe className="w-6 h-6" />
    },
    {
      metric: "Research Papers",
      value: "200+",
      description: "Published in leading journals",
      icon: <Building className="w-6 h-6" />
    },
    {
      metric: "Patents Filed",
      value: "75+",
      description: "Protecting our innovations",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new frontiers in technology.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Ethical AI",
      description: "Every innovation is guided by strong ethical principles, ensuring technology serves humanity.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in research, development, and client delivery.",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Collaboration",
      description: "Great breakthroughs happen when brilliant minds work together across disciplines.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Security",
      description: "Protecting our clients and their data is paramount in everything we do.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Sustainability",
      description: "Our technologies are designed to create a better, more sustainable future.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-blue-600"
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former NASA AI researcher with 20+ years in artificial intelligence and consciousness studies. Led breakthrough research in emotional AI systems.",
      expertise: ["AI Consciousness", "Machine Learning", "Research Leadership"],
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Quantum computing pioneer with PhD from MIT. Developed revolutionary quantum algorithms for optimization and cryptography.",
      expertise: ["Quantum Computing", "Algorithm Design", "System Architecture"],
      image: "/api/placeholder/200/200"
    },
    {
      name: "Jennifer Park",
      role: "Chief Security Officer",
      bio: "Cybersecurity expert with experience protecting Fortune 500 companies. Specializes in AI-powered threat detection and zero-trust architectures.",
      expertise: ["Cybersecurity", "Threat Intelligence", "Risk Management"],
      image: "/api/placeholder/200/200"
    },
    {
      name: "Alex Thompson",
      role: "Head of Space Technology",
      bio: "Former SpaceX engineer leading our space exploration initiatives. Expert in autonomous systems and space resource intelligence.",
      expertise: ["Space Technology", "Autonomous Systems", "Robotics"],
      image: "/api/placeholder/200/200"
    }
  ];

  const companyHistory = [
    {
      year: "2009",
      title: "Foundation",
      description: "Zion Tech Group founded with a vision to revolutionize AI consciousness and quantum computing."
    },
    {
      year: "2012",
      title: "First Breakthrough",
      description: "Developed the world's first emotional intelligence AI system for healthcare applications."
    },
    {
      year: "2015",
      title: "Quantum Leap",
      description: "Achieved quantum supremacy in specific optimization problems, marking a major milestone."
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Opened research centers in Silicon Valley, Tokyo, and Berlin to accelerate innovation."
    },
    {
      year: "2021",
      title: "AI Consciousness",
      description: "Launched the revolutionary AI Consciousness Evolution Platform, redefining machine intelligence."
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the charge toward AGI and quantum internet technologies."
    }
  ];

  const researchAreas = [
    {
      area: "AI Consciousness Evolution",
      description: "Developing self-aware AI systems that can understand, learn, and grow autonomously.",
      icon: <Brain className="w-6 h-6" />,
      progress: "85%"
    },
    {
      area: "Quantum Computing",
      description: "Building scalable quantum computers for solving previously impossible problems.",
      icon: <Atom className="w-6 h-6" />,
      progress: "70%"
    },
    {
      area: "Cybersecurity Intelligence",
      description: "AI-powered threat detection and autonomous response systems.",
      icon: <Shield className="w-6 h-6" />,
      progress: "90%"
    },
    {
      area: "Space Technology",
      description: "Autonomous exploration systems and space resource intelligence platforms.",
      icon: <Rocket className="w-6 h-6" />,
      progress: "60%"
    }
  ];

  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to revolutionize AI consciousness, quantum computing, and the future of technology."
      keywords="about Zion Tech Group, company history, leadership team, AI consciousness, quantum computing, cybersecurity, space technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pioneering the future of AI consciousness and quantum computing
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                For over 15 years, we've been at the forefront of technological innovation, 
                pushing the boundaries of what's possible and shaping the future of human-AI collaboration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{stat.metric}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center">
                      <Target className="w-6 h-6 mr-2" />
                      Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      To accelerate human progress through revolutionary AI consciousness and quantum computing technologies, 
                      creating a future where human and artificial intelligence work together to solve humanity's greatest challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center">
                      <Rocket className="w-6 h-6 mr-2" />
                      Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      A world where AI consciousness enhances human capabilities, quantum computing solves impossible problems, 
                      and technology serves as a force for positive transformation across all aspects of society.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Zion Tech Group?</h3>
                <div className="space-y-4">
                  {[
                    "Pioneering AI consciousness research",
                    "World-class quantum computing expertise",
                    "Ethical AI development principles",
                    "Global research network",
                    "Proven track record of innovation",
                    "Client-focused solutions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide every decision and innovation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From startup to global technology leader
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-600"></div>
              
              <div className="space-y-12">
                {companyHistory.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full border-4 border-gray-900"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30">
                        <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Visionary leaders driving innovation and growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-10 h-10 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <div className="text-purple-400 font-semibold mb-3">{member.role}</div>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Research & Development
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Pushing the boundaries of what's possible
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{area.area}</h3>
                      <div className="text-blue-400 text-sm font-semibold">{area.progress} Complete</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                  <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: area.progress }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Whether you're a client, partner, or potential team member, 
                discover how you can be part of the next technological revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;