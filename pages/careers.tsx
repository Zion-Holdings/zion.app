import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Users, Target, Award, Globe, Zap, ArrowRight, Mail, MapPin, Clock, DollarSign, Heart, Lightbulb, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2, Palette, Music, Film, BookOpenCheck, Building, MessageCircle } from 'lucide-react';
import { Layout } from '../components/layout/Layout';

const openPositions = [
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    department: 'AI & Consciousness',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$150K - $250K',
    description: 'Lead research in AI consciousness, emotional intelligence, and autonomous systems. Develop breakthrough algorithms that push the boundaries of artificial intelligence.',
    requirements: [
      'PhD in Computer Science, AI, or related field',
      'Expertise in deep learning, NLP, and consciousness research',
      'Experience with large language models and neural networks',
      'Published research in top AI conferences',
      'Passion for ethical AI development'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Flexible remote work environment',
      'Cutting-edge research opportunities',
      'Conference and publication support',
      'Health, dental, and vision coverage'
    ],
    icon: <Brain className="w-8 h-8" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20'
  },
  {
    id: 'quantum-computing-engineer',
    title: 'Quantum Computing Engineer',
    department: 'Quantum & Emerging Tech',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$120K - $200K',
    description: 'Develop quantum algorithms and quantum-resistant security solutions. Work on breakthrough quantum computing applications for real-world problems.',
    requirements: [
      'MS/PhD in Physics, Computer Science, or Quantum Computing',
      'Experience with quantum programming languages (Qiskit, Cirq)',
      'Knowledge of quantum algorithms and quantum cryptography',
      'Understanding of quantum error correction',
      'Experience with quantum simulators and hardware'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Access to quantum computing resources',
      'Collaboration with leading quantum researchers',
      'Professional development opportunities',
      'Comprehensive benefits package'
    ],
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    id: 'autonomous-systems-engineer',
    title: 'Autonomous Systems Engineer',
    department: 'Enterprise IT',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$130K - $220K',
    description: 'Build self-managing, autonomous IT infrastructure systems. Develop AI-powered automation for enterprise operations and security.',
    requirements: [
      'BS/MS in Computer Science or Engineering',
      'Experience with DevOps, Kubernetes, and cloud platforms',
      'Knowledge of AI/ML for automation',
      'Experience with monitoring and observability tools',
      'Understanding of enterprise security and compliance'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Remote-first work environment',
      'Latest technology and tools',
      'Professional certification support',
      'Flexible PTO and work hours'
    ],
    icon: <Shield className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  },
  {
    id: 'space-technology-researcher',
    title: 'Space Technology Researcher',
    department: 'Quantum & Emerging Tech',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '6+ years',
    salary: '$160K - $280K',
    description: 'Research and develop revolutionary space technologies including resource mining, autonomous navigation, and AI-powered space systems.',
    requirements: [
      'PhD in Aerospace Engineering, Physics, or related field',
      'Experience with space systems and satellite technology',
      'Knowledge of orbital mechanics and space robotics',
      'Experience with AI for space applications',
      'Published research in space technology'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Collaboration with space agencies and companies',
      'Access to space technology resources',
      'Conference and publication support',
      'Comprehensive benefits and equity'
    ],
    icon: <Globe className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20'
  }
];

const companyValues = [
  {
    icon: <Brain className="w-12 h-12 text-cyan-400" />,
    title: "AI Consciousness First",
    description: "We prioritize the development of conscious, ethical AI systems that enhance human capabilities."
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-400" />,
    title: "Revolutionary Innovation",
    description: "We push boundaries and create technologies that were once thought impossible."
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-400" />,
    title: "Ethical Responsibility",
    description: "Every innovation is guided by strong ethical principles and human safety."
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Human-Centric Design",
    description: "Technology serves humanity, not the other way around."
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    title: "Exponential Growth",
    description: "We accelerate progress through autonomous systems and AI augmentation."
  },
  {
    icon: <Award className="w-12 h-12 text-pink-400" />,
    title: "Excellence in Execution",
    description: "We deliver world-class solutions with precision and reliability."
  }
];

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-cyan-400" />,
    title: "Competitive Compensation",
    description: "Above-market salaries with equity options and performance bonuses"
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-400" />,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, vision, and mental health coverage"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
    title: "Learning & Development",
    description: "Continuous learning opportunities, conferences, and skill development"
  },
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and work-life balance"
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Collaborative Environment",
    description: "Work with brilliant minds in AI, quantum computing, and emerging tech"
  },
  {
    icon: <Rocket className="w-8 h-8 text-pink-400" />,
    title: "Innovation Projects",
    description: "Work on cutting-edge technologies that will shape the future"
  }
];

export default function Careers() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Join the Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Build revolutionary AI consciousness, quantum computing, and autonomous systems 
                that will transform humanity. Join our team of visionaries and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide our revolutionary journey</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
              <p className="text-xl text-gray-300">Comprehensive benefits and opportunities for growth</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300">Join our team of innovators and visionaries</p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl border ${position.borderColor} bg-black/40 hover:bg-black/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10`}>
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Position Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`${position.bgColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
                            {position.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {position.title}
                            </h3>
                            <p className="text-cyan-400 font-medium">{position.department}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">
                          {position.description}
                        </p>

                        {/* Requirements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {position.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Position Details */}
                      <div className="space-y-6">
                        <div className="p-6 bg-gray-800/30 rounded-xl">
                          <h4 className="text-lg font-semibold text-white mb-4">Position Details</h4>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-cyan-400" />
                              <span className="text-gray-300">{position.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-blue-400" />
                              <span className="text-gray-300">{position.type}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-purple-400" />
                              <span className="text-gray-300">{position.experience}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <DollarSign className="w-5 h-5 text-green-400" />
                              <span className="text-gray-300">{position.salary}</span>
                            </div>
                          </div>
                        </div>

                        <a
                          href={`/contact?position=${position.id}`}
                          className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          Apply Now
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Team */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
              <p className="text-xl text-gray-300">Building the future together with innovation and collaboration</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Innovation at the Core</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At Zion Tech Group, innovation isn't just a buzzword—it's our DNA. We encourage 
                  creative thinking, experimentation, and pushing the boundaries of what's possible.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our team members have the freedom to explore new ideas, work on cutting-edge projects, 
                  and contribute to technologies that will shape the future of humanity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">20% time for personal projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Hackathons and innovation challenges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Research publication support</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Collaborative Excellence</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We believe that the best solutions come from diverse perspectives and collaborative effort. 
                  Our team includes experts from various fields working together to solve complex challenges.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  From AI researchers to quantum physicists, from space engineers to ethicists, 
                  we bring together the brightest minds to create revolutionary technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Cross-functional project teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Regular knowledge sharing sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Mentorship and learning programs</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team of visionaries and help create technologies that will transform humanity. 
                We're looking for brilliant minds who share our passion for innovation and ethical technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Email Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}