import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Heart, Globe, 
  Zap, Shield, Brain, Rocket, Building,
  CheckCircle, Star, TrendingUp, Lightbulb,
  ChevronRight, MapPin, Clock, DollarSign,
  Briefcase, GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Research Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead cutting-edge AI research and development projects',
      requirements: ['PhD in Computer Science or related field', 'Expertise in deep learning and NLP', 'Experience with large language models', 'Strong research background'],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and quantum computing solutions',
      requirements: ['MS/PhD in Physics or Computer Science', 'Experience with quantum programming', 'Knowledge of quantum algorithms', 'Strong mathematical background'],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop space technology applications and satellite solutions',
      requirements: ['BS/MS in Aerospace Engineering', 'Experience with satellite systems', 'Knowledge of space technology', 'Strong engineering background'],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design enterprise security architectures and threat protection systems',
      requirements: ['BS/MS in Computer Science or Cybersecurity', 'Experience with security frameworks', 'Knowledge of threat intelligence', 'Strong security background'],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain cloud infrastructure and deployment pipelines',
      requirements: ['BS in Computer Science or related field', 'Experience with cloud platforms', 'Knowledge of containerization', 'Strong automation skills'],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and development for AI and quantum solutions',
      requirements: ['BS/MS in Business or Technology', 'Experience in product management', 'Knowledge of AI/ML technologies', 'Strong analytical skills'],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work arrangements', 'Professional development']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance bonuses and equity options'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Growth',
      description: 'Professional development, training programs, and conference attendance'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Culture',
      description: 'Collaborative environment with diverse, talented professionals'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Work on cutting-edge technologies that shape the future'
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough ideas'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Honest, ethical behavior in everything we do'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Empathy',
      description: 'Understanding and supporting our team members'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Striving for the highest quality in all our work'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <Users className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-blue-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with Zion Tech Group. Join a team of innovators, 
                researchers, and engineers pushing the boundaries of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View Open Positions
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover what makes Zion Tech Group an exceptional place to grow your career
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
                  className="text-center p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
                >
                  <div className="flex justify-center mb-4 text-blue-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our culture and define who we are as a team
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex justify-center mb-4 text-blue-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help shape the future of technology
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-8 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <Link 
                      href="/contact"
                      className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Apply Now
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benIndex) => (
                          <li key={benIndex} className="flex items-start text-gray-300">
                            <Star className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and 
                let's discuss how you can contribute to our mission
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Send Your Resume
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;