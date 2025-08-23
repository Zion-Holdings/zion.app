import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  Briefcase, GraduationCap, Clock, MapPin, DollarSign
} from 'lucide-react';

export default function CareersPage() {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-First Learning',
      description: 'Access to cutting-edge AI tools and continuous learning opportunities',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Innovation',
      description: 'Work on breakthrough quantum computing and space technology projects',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Fast-track career advancement with mentorship and skill development',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Contribute to technologies that will shape the future of humanity',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Diverse Team',
      description: 'Collaborate with brilliant minds from around the world',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Consciousness Researcher',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead research into AI consciousness evolution and ethical AI development',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and consciousness research',
        'Published research in top AI conferences',
        'Strong ethical framework for AI development'
      ],
      responsibilities: [
        'Design and implement consciousness-aware AI systems',
        'Lead ethical AI research initiatives',
        'Collaborate with international AI research teams',
        'Mentor junior researchers'
      ]
    },
    {
      title: 'Quantum Computing Engineer',
      department: 'Quantum Technology',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and quantum computing infrastructure',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum error correction',
        'Background in quantum mechanics and linear algebra'
      ],
      responsibilities: [
        'Design quantum algorithms for real-world problems',
        'Implement quantum error correction protocols',
        'Optimize quantum circuit performance',
        'Collaborate with quantum hardware teams'
      ]
    },
    {
      title: 'Space Technology Architect',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design next-generation space exploration and resource intelligence systems',
      requirements: [
        'MS/PhD in Aerospace Engineering, Physics, or related field',
        'Experience with satellite systems and space missions',
        'Knowledge of AI/ML for space applications',
        'Background in robotics and autonomous systems'
      ],
      responsibilities: [
        'Design autonomous space exploration systems',
        'Develop AI-powered space resource intelligence',
        'Lead space technology innovation projects',
        'Coordinate with space agencies and partners'
      ]
    },
    {
      title: 'AI Ethics & Governance Specialist',
      department: 'AI Ethics',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop and implement AI ethics frameworks and governance policies',
      requirements: [
        'MS/PhD in Ethics, Philosophy, AI Safety, or related field',
        'Experience with AI ethics frameworks and policy development',
        'Knowledge of AI safety research and best practices',
        'Strong background in ethical philosophy and governance'
      ],
      responsibilities: [
        'Develop AI ethics guidelines and policies',
        'Conduct AI safety audits and assessments',
        'Advise on ethical AI development practices',
        'Represent company in AI ethics forums and discussions'
      ]
    },
    {
      title: 'Full-Stack Developer (AI Focus)',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build AI-powered web applications and platforms',
      requirements: [
        'Strong experience with React, Node.js, and Python',
        'Experience with AI/ML integration and API development',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Background in modern web development practices'
      ],
      responsibilities: [
        'Develop AI-powered web applications',
        'Integrate AI services and APIs',
        'Build scalable backend systems',
        'Collaborate with AI research teams'
      ]
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage bold ideas and experimental approaches to solving complex problems.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Continuous Learning',
      description: 'Lifelong learning is core to our culture, with dedicated time for skill development.',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Impact-Driven',
      description: 'Every project must contribute to positive human progress and technological advancement.',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Help us build the future of AI consciousness, quantum computing, and space technology. 
              Your next breakthrough starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's literally building the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The values and principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-black/30 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our mission to advance AI consciousness and quantum technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{position.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent. Send us your resume and let's discuss 
              how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Send Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}