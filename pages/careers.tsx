import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Zap, 
  Brain, Atom, Shield, Rocket, Star,
  CheckCircle, ArrowRight, MapPin, Clock, DollarSign,
  Briefcase, GraduationCap, Heart, Lightbulb
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'space', name: 'Space Technology' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'product', name: 'Product & Design' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Research Scientist',
      department: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150,000 - $200,000',
      description: 'Lead cutting-edge research in AI consciousness and autonomous systems.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Published research in top AI conferences',
        'Experience with PyTorch, TensorFlow, or similar frameworks'
      ],
      benefits: [
        'Competitive salary with equity',
        'Flexible remote work',
        'Conference attendance and research budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Engineer',
      department: 'quantum',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120,000 - $160,000',
      description: 'Develop quantum algorithms and quantum-resistant security solutions.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and cryptography',
        'Strong mathematical and programming skills'
      ],
      benefits: [
        'Competitive salary with equity',
        'Access to quantum computing resources',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Platform Developer',
      department: 'space',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130,000 - $180,000',
      description: 'Build next-generation space resource intelligence and mining platforms.',
      requirements: [
        'BS/MS in Aerospace Engineering, Computer Science, or related field',
        'Experience with satellite data processing and analysis',
        'Knowledge of orbital mechanics and space systems',
        'Proficiency in Python, C++, or similar languages'
      ],
      benefits: [
        'Competitive salary with equity',
        'Work on cutting-edge space technology',
        'Collaboration with space industry partners',
        'Professional development and training'
      ]
    },
    {
      id: 4,
      title: 'Senior Full-Stack Engineer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$130,000 - $170,000',
      description: 'Build scalable web applications and microservices for our platform.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture',
        'Experience with DevOps and CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary with equity',
        'Remote-first culture',
        'Latest development tools and equipment',
        'Health and wellness benefits'
      ]
    },
    {
      id: 5,
      title: 'Product Manager - AI Solutions',
      department: 'product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$120,000 - $160,000',
      description: 'Lead product strategy and development for AI-powered enterprise solutions.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Knowledge of AI/ML technologies and market trends',
        'Strong analytical and strategic thinking skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary with equity',
        'Product leadership opportunities',
        'Customer interaction and market research',
        'Professional development and mentorship'
      ]
    },
    {
      id: 6,
      title: 'Enterprise Sales Director',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$150,000 - $200,000 + Commission',
      description: 'Drive enterprise sales and strategic partnerships for our technology solutions.',
      requirements: [
        'Proven track record in enterprise B2B sales',
        'Experience selling complex technology solutions',
        'Strong network in enterprise technology',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Competitive base salary with uncapped commission',
        'Equity participation',
        'Expense account and travel opportunities',
        'Performance-based bonuses and incentives'
      ]
    }
  ];

  const culture = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough ideas that push the boundaries of what\'s possible.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Collaborative Excellence',
      description: 'Work with world-class talent in an environment that fosters collaboration and knowledge sharing.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: 'Rapid Growth',
      description: 'Fast-paced environment where you can make immediate impact and grow your career exponentially.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and policies that support your personal and professional life.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity participation and performance bonuses'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision, and life insurance with generous coverage'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: 'Professional Development',
      description: 'Conference attendance, training programs, and continuous learning opportunities'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO, paid holidays, and flexible work schedules'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <Layout seo={{
      title: 'Careers - Zion Tech Group | Join Our Revolutionary Team',
      description: 'Join Zion Tech Group and help build the future of technology. Explore career opportunities in AI, quantum computing, and space technology.',
      keywords: 'careers, jobs, Zion Tech Group, AI jobs, quantum computing, space technology',
      url: 'https://ziontechgroup.com/careers'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Join Our Revolutionary Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Help us build the future of technology. Work on cutting-edge AI, quantum computing, 
                and space technology solutions that will transform industries and change the world.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">50+ Open Positions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Remote First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Competitive Benefits</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Work at Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join a team that's not just building technology, but shaping the future of humanity.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {culture.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-8">Comprehensive Benefits</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find the perfect role to advance your career and make a lasting impact on the future of technology.
              </p>
            </motion.div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department.charAt(0).toUpperCase() + job.department.slice(1)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No positions available in this department at the moment.</p>
                <p className="text-gray-500 mt-2">Check back soon or contact us about future opportunities!</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Don't See the Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and let's discuss 
                how you can contribute to our mission of revolutionizing technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                >
                  Send Resume
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