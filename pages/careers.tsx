import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Atom, Shield, Zap, 
  Heart, Lightbulb, Star, TrendingUp, CheckCircle, 
  ArrowRight, MapPin, Clock, DollarSign, Briefcase,
  GraduationCap, Globe, Code, Database, Network
} from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI, quantum computing, and emerging technologies'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI Research & Development',
      description: 'Contribute to groundbreaking research in AI consciousness and autonomous systems'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules and global collaboration'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Rapid Growth',
      description: 'Accelerate your career with exponential learning and advancement opportunities'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-400" />,
      title: 'Competitive Compensation',
      description: 'Top-tier salaries, equity options, and performance-based bonuses'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Research Engineer',
      department: 'AI Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $250K',
      description: 'Lead research in AI consciousness, emotional intelligence, and autonomous decision-making systems.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Background in cognitive science or psychology',
        'Published research in top AI conferences'
      ],
      skills: ['Python', 'PyTorch', 'TensorFlow', 'NLP', 'Cognitive AI']
    },
    {
      title: 'Quantum Computing Engineer',
      department: 'Quantum Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $200K',
      description: 'Build quantum-secure infrastructure and quantum-enhanced applications.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum algorithms and quantum programming',
        'Knowledge of quantum cryptography and security',
        'Familiarity with Qiskit, Cirq, or similar frameworks'
      ],
      skills: ['Python', 'Qiskit', 'Quantum Algorithms', 'Cryptography', 'Linear Algebra']
    },
    {
      title: 'Full-Stack AI Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $180K',
      description: 'Develop AI-powered applications and autonomous business systems.',
      requirements: [
        'BS/MS in Computer Science or related field',
        'Experience with React, Node.js, and Python',
        'Background in machine learning and AI integration',
        'Experience with cloud platforms (AWS, GCP, Azure)'
      ],
      skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'Cloud Computing']
    },
    {
      title: 'DevOps Automation Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110K - $190K',
      description: 'Build and maintain autonomous infrastructure and CI/CD systems.',
      requirements: [
        'BS/MS in Computer Science or related field',
        'Experience with Kubernetes, Docker, and cloud infrastructure',
        'Background in automation and infrastructure as code',
        'Experience with monitoring and observability tools'
      ],
      skills: ['Kubernetes', 'Docker', 'Terraform', 'Python', 'Monitoring']
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$130K - $220K',
      description: 'Lead product strategy for AI-powered solutions and autonomous systems.',
      requirements: [
        'BS/MS in Business, Engineering, or related field',
        'Experience in AI/ML product management',
        'Background in enterprise software or SaaS',
        'Strong analytical and strategic thinking skills'
      ],
      skills: ['Product Strategy', 'AI/ML', 'Market Research', 'Agile', 'Data Analysis']
    }
  ];

  const culture = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation-Driven',
      description: 'We encourage experimentation and push the boundaries of what\'s possible'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Collaborative',
      description: 'Work with brilliant minds across disciplines to solve complex challenges'
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: 'Fast-Paced',
      description: 'Move quickly, iterate rapidly, and ship groundbreaking features'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'People-First',
      description: 'Your growth, well-being, and success are our top priorities'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Join the Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Help us build the future of AI consciousness, quantum computing, and autonomous systems. 
              Work with cutting-edge technology and shape the world of tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Brain className="w-6 h-6" />
                <span>AI Research</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Atom className="w-6 h-6" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Rocket className="w-6 h-6" />
                <span>Autonomous Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-400">Join a team that values innovation, collaboration, and human potential</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400">Comprehensive benefits and opportunities for growth</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400">Join our team and help build the future</p>
          </motion.div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-cyan-400 font-semibold">{position.department}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      <Briefcase className="w-4 h-4" />
                      {position.type}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {position.experience}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      <DollarSign className="w-4 h-4" />
                      {position.salary}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Application Process
            </h2>
            <p className="text-xl text-gray-400">Simple steps to join our team</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply',
                description: 'Submit your application with resume and portfolio'
              },
              {
                step: '02',
                title: 'Review',
                description: 'Our team reviews your application and experience'
              },
              {
                step: '03',
                title: 'Interview',
                description: 'Technical and cultural fit discussions'
              },
              {
                step: '04',
                title: 'Join',
                description: 'Welcome to the team and start building the future'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals 
              who are passionate about AI, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}