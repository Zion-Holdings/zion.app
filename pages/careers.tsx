import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Globe,
  Award,
  Zap,
  Star,
  CheckCircle,
  TrendingUp,
  Heart,
  Lightbulb,
  Target,
  BookOpen,
  Coffee
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI Research Engineer',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      icon: <Brain className="w-8 h-8" />,
      description: 'Lead breakthrough research in AI consciousness and quantum neural networks.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Background in quantum computing or consciousness studies',
        'Strong research publication record'
      ]
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      icon: <Atom className="w-8 h-8" />,
      description: 'Develop quantum computing solutions for enterprise applications.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum algorithms and quantum programming',
        'Knowledge of quantum error correction and optimization',
        'Familiarity with quantum cloud platforms'
      ]
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Design and develop space resource mining and exploration technologies.',
      requirements: [
        'MS/PhD in Aerospace Engineering or related field',
        'Experience with satellite systems and space robotics',
        'Knowledge of resource extraction and processing',
        'Background in autonomous systems and AI'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      icon: <Shield className="w-8 h-8" />,
      description: 'Build and maintain our quantum-secure cloud infrastructure.',
      requirements: [
        'Experience with Kubernetes, Docker, and cloud platforms',
        'Knowledge of security best practices and compliance',
        'Experience with CI/CD pipelines and automation',
        'Background in infrastructure as code'
      ]
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '6+ years',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Design AI-powered solutions for enterprise clients.',
      requirements: [
        'Experience designing AI/ML solutions for enterprises',
        'Strong understanding of business processes and workflows',
        'Experience with cloud platforms and AI services',
        'Excellent communication and presentation skills'
      ]
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Lead marketing initiatives for our cutting-edge technology solutions.',
      requirements: [
        'Experience in B2B technology marketing',
        'Knowledge of AI, quantum computing, or space technology',
        'Experience with digital marketing and content strategy',
        'Strong analytical and creative skills'
      ]
    }
  ];

  const companyCulture = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough ideas that push technological boundaries.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Human-Centric',
      description: 'Technology serves humanity. We prioritize ethical development and human well-being.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our work has the potential to transform industries and improve lives worldwide.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Excellence',
      description: 'We believe the best solutions come from diverse teams working together.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Purpose-Driven',
      description: 'Every project contributes to our mission of accelerating human progress.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'We invest in your growth with ongoing education and skill development.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules and work-life balance.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Learning & Development',
      description: 'Unlimited learning budget, conference attendance, and skill development programs.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Modern Tools',
      description: 'Latest technology and tools to help you do your best work.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and leadership opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Help us build the future of technology. Work on cutting-edge AI, quantum computing, 
              and space technology solutions that will transform humanity.
            </p>
            <div className="flex items-center justify-center gap-4 text-cyan-400">
              <Rocket className="w-8 h-8" />
              <span className="text-lg font-semibold">Shape the Future with Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building more than technology - we're building a culture of innovation, 
              collaboration, and human progress.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyCulture.map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {culture.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{culture.title}</h3>
                <p className="text-gray-300">{culture.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We invest in our team with comprehensive benefits and opportunities for growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team of innovators and help us build the technologies of tomorrow.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-cyan-400">
                    {position.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      📍 {position.location}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Apply for This Position
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Growth & Development
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your career growth is our priority. We provide clear paths for advancement and skill development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: 'Learning Paths',
                description: 'Structured learning programs for technical and leadership skills.'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Mentorship',
                description: 'One-on-one guidance from experienced leaders and technical experts.'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Career Advancement',
                description: 'Clear promotion paths and opportunities to lead projects and teams.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals 
              who share our passion for innovation and human progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Send Your Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}