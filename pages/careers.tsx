import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Brain, Atom, Rocket, Shield, 
  Award, Heart, Zap, Globe, Mail, 
  Send, CheckCircle, Star, TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: 'Collaboration',
      description: 'Great ideas come from great teams. We foster an environment of open communication and mutual respect.',
      icon: <Users className="w-12 h-12 text-purple-400" />
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.',
      icon: <Award className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Growth Mindset',
      description: 'We believe in continuous learning and personal development. Your growth is our growth.',
      icon: <TrendingUp className="w-12 h-12 text-green-400" />
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation with regular reviews and performance bonuses',
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family',
      icon: <Heart className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance',
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and professional development',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Stock Options',
      description: 'Ownership in the company through our equity program',
      icon: <Award className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Team Events',
      description: 'Regular team building, hackathons, and social events',
      icon: <Users className="w-8 h-8 text-pink-400" />
    }
  ];

  const openPositions = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions including consciousness evolution, neural networks, and autonomous systems.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch, and ML frameworks',
        'Experience with large language models and neural networks',
        'Strong background in machine learning algorithms and optimization',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement advanced AI algorithms and models',
        'Lead research initiatives in AI consciousness and evolution',
        'Collaborate with cross-functional teams on AI solutions',
        'Mentor junior engineers and contribute to technical strategy',
        'Stay current with latest AI research and technologies'
      ]
    },
    {
      id: 'quantum-computing-specialist',
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum computing solutions and algorithms for financial trading, materials discovery, and cryptography.',
      requirements: [
        'Degree in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Understanding of quantum algorithms and quantum mechanics',
        'Knowledge of quantum error correction and optimization',
        'Experience with quantum simulators and hardware',
        'Strong mathematical and analytical skills'
      ],
      responsibilities: [
        'Develop quantum algorithms for specific use cases',
        'Optimize quantum circuits and error correction',
        'Collaborate with research partners and universities',
        'Contribute to quantum software development',
        'Stay current with quantum computing advancements'
      ]
    },
    {
      id: 'space-technology-engineer',
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop space technology solutions including resource mining, satellite systems, and space infrastructure.',
      requirements: [
        'Degree in Aerospace Engineering, Physics, or related field',
        'Experience with satellite systems and space technology',
        'Knowledge of orbital mechanics and space physics',
        'Experience with robotics and automation systems',
        'Understanding of space regulations and safety protocols',
        'Strong project management and technical skills'
      ],
      responsibilities: [
        'Design space technology systems and infrastructure',
        'Develop autonomous space mining and exploration systems',
        'Collaborate with space agencies and private companies',
        'Ensure compliance with space regulations',
        'Contribute to space technology innovation'
      ]
    },
    {
      id: 'enterprise-architect',
      title: 'Enterprise Solutions Architect',
      department: 'Enterprise IT',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement enterprise-scale IT solutions including cloud infrastructure, security, and digital transformation.',
      requirements: [
        'Advanced degree in Computer Science or related field',
        'Experience with enterprise architecture frameworks',
        'Expertise in cloud platforms and microservices',
        'Strong knowledge of security and compliance',
        'Experience with large-scale system design',
        'Excellent client relationship and presentation skills'
      ],
      responsibilities: [
        'Design enterprise IT solutions and architectures',
        'Lead digital transformation initiatives',
        'Consult with enterprise clients on technology strategy',
        'Ensure solutions meet security and compliance requirements',
        'Mentor technical teams and drive best practices'
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Careers | Zion Tech Group"
        description="Join Zion Tech Group and be part of the future of technology. Explore career opportunities in AI, quantum computing, space technology, and enterprise solutions."
        keywords={["careers", "jobs", "Zion Tech Group", "AI engineer", "quantum computing", "space technology", "enterprise IT", "remote work"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Join Our Team
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                Help us pioneer the future of technology. Work on cutting-edge AI, quantum computing, and space technology solutions that will transform the world.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">AI Innovation</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <Atom className="w-5 h-5 text-purple-400" />
                  <span className="text-white">Quantum Computing</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-indigo-400" />
                  <span className="text-white">Space Technology</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Company Culture</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We believe in fostering an environment where innovation thrives, collaboration flourishes, and every team member can reach their full potential.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Benefits & Perks</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We take care of our team with comprehensive benefits and perks that support your health, growth, and work-life balance.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white text-center">{benefit.title}</h3>
                  <p className="text-white/70 text-center text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Open Positions</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Ready to join our team? Explore our current openings and find the perfect role for your skills and passion.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                            {job.location}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="mt-4 lg:mt-0 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                      >
                        {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                    
                    <p className="text-white/80 mb-4">{job.description}</p>
                    
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/10 pt-4 mt-4"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                  <span className="text-white/70 text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                  <span className="text-white/70 text-sm">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                          <a
                            href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                          >
                            <Mail className="w-5 h-5 mr-2" />
                            Apply for this Position
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* General Application */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Don't See the Right Fit?</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">General Application</h3>
              <p className="text-white/70 mb-6">
                Send us your resume and cover letter. We'll keep your information on file and reach out when the right opportunity arises.
              </p>
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit General Application
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Questions About Working With Us?</h2>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                We'd love to hear from you. Reach out to learn more about our company culture, benefits, or any specific role.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;