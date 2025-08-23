import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Atom, Shield, Globe, 
  Target, Star, CheckCircle, ArrowRight, Mail, 
  Phone, MapPin, Calendar, Briefcase, GraduationCap,
  Heart, Zap, Award, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Research Engineer',
      department: 'AI Research Division',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead research in AI consciousness and autonomous systems. Develop cutting-edge neural networks and consciousness simulation platforms.',
      requirements: [
          'PhD in Computer Science, AI, or related field',
          'Experience with large language models and consciousness research',
          'Strong background in neuroscience and cognitive science',
          'Proficiency in Python, PyTorch, and distributed systems'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'Quantum Computing Engineer',
      department: 'Quantum Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design and implement quantum computing solutions for cybersecurity, communications, and computational applications.',
      requirements: [
          'MS/PhD in Physics, Computer Science, or Quantum Engineering',
          'Experience with quantum algorithms and quantum programming',
          'Knowledge of quantum error correction and quantum networks',
          'Familiarity with Qiskit, Cirq, or similar frameworks'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Cutting-edge technology', 'Research opportunities']
    },
    {
      title: 'Enterprise Solutions Architect',
      department: 'Enterprise Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement enterprise-scale AI and quantum solutions for Fortune 500 companies.',
      requirements: [
          'Bachelor\'s degree in Computer Science or related field',
          'Experience with enterprise architecture and digital transformation',
          'Knowledge of AI/ML platforms and cloud infrastructure',
          'Strong client relationship and project management skills'
      ],
      benefits: ['Competitive salary', 'Performance bonuses', 'Travel opportunities', 'Client exposure']
    },
    {
      title: 'Autonomous Systems Developer',
      department: 'Autonomous Systems',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build autonomous business operations systems, decision engines, and self-managing infrastructure.',
      requirements: [
          'Bachelor\'s degree in Computer Science or Engineering',
          'Experience with autonomous systems and process automation',
          'Knowledge of decision intelligence and optimization algorithms',
          'Proficiency in Python, Java, or similar languages'
      ],
      benefits: ['Competitive salary', 'Innovation projects', 'Learning opportunities', 'Team collaboration']
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and pushing boundaries. Every team member has the freedom to explore new ideas.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Continuous Learning',
      description: 'Access to cutting-edge technology, conferences, and continuous education to stay ahead of the curve.',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and a focus on mental health and well-being.',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Global Impact',
      description: 'Work on technologies that will change the world and benefit humanity as a whole.',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Mental health support', 'Gym memberships', 'Wellness programs']
    },
    {
      category: 'Professional Growth',
      items: ['Conference attendance', 'Training budgets', 'Mentorship programs', 'Career advancement']
    },
    {
      category: 'Work Environment',
      items: ['Remote-first culture', 'Flexible hours', 'Modern equipment', 'Collaborative spaces']
    },
    {
      category: 'Financial',
      items: ['Competitive salaries', 'Equity options', 'Performance bonuses', '401(k) matching']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Join Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Help us build the future of AI consciousness, quantum computing, and autonomous systems. 
            Your next breakthrough starts here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#openings"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Culture
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Benefits & Perks
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Open Positions
          </motion.h2>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-2xl font-bold">
                        {position.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                            <Award className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent. Send us your resume and let's discuss 
              how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a 
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
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