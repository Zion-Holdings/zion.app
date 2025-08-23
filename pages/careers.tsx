import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Atom, 
  Globe,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Zap,
  Star,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Research Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead cutting-edge research in AI consciousness and neural network development.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Published research in top AI conferences',
        'Strong Python, PyTorch, and TensorFlow skills'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work', 'Health insurance']
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130K - $180K',
      description: 'Develop quantum algorithms and quantum-resistant security solutions.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or Quantum Computing',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and cryptography',
        'Strong mathematical and analytical skills'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work', 'Health insurance']
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Houston, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$140K - $190K',
      description: 'Design and develop innovative space computing and communication systems.',
      requirements: [
        'BS/MS in Aerospace Engineering, Computer Science, or related field',
        'Experience with satellite systems and space technology',
        'Knowledge of orbital mechanics and space communications',
        'Strong programming skills in Python, C++, or Rust'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work', 'Health insurance']
    },
    {
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$160K - $220K',
      description: 'Design and implement zero-trust security architectures and quantum-resistant encryption.',
      requirements: [
        'BS/MS in Computer Science, Cybersecurity, or related field',
        'Experience with zero-trust architecture and security frameworks',
        'Knowledge of quantum cryptography and post-quantum algorithms',
        'Certifications: CISSP, CISM, or equivalent'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work', 'Health insurance']
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Teamwork and diverse perspectives drive our success.'
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'Continuous learning and personal development are core to our culture.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We support your well-being and personal growth.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family.'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support your lifestyle.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Budget for conferences, courses, and continuous education.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on technologies that will shape the future of humanity.'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us revolutionize technology and shape the future of AI, quantum computing, 
                and space technology. Be part of something extraordinary.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="#culture"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Learn About Culture
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section id="culture" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building more than technology – we're building a culture of innovation, 
                collaboration, and purpose-driven work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We invest in our people because they're the foundation of our success. 
                Here's what makes Zion Tech Group special.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to join our team? Explore our current openings and find the perfect role for your skills and passion.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                          {position.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <DollarSign className="w-4 h-4" />
                          <span>{position.salary}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Requirements</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-400/20"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <a
                        href={`/contact?position=${encodeURIComponent(position.title)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's explore opportunities together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Resume
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;