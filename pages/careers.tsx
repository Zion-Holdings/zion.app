import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Star, 
  Globe,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Award
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'ai', name: 'AI & Research', count: 3 },
    { id: 'business', name: 'Business', count: 2 },
    { id: 'design', name: 'Design', count: 1 }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      category: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of AI consciousness evolution platforms and quantum neural networks.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Quantum Computing', 'Machine Learning'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 2,
      title: 'Quantum Computing Specialist',
      category: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and quantum-safe cybersecurity solutions.',
      skills: ['Quantum Computing', 'Qiskit', 'Python', 'Cryptography', 'Linear Algebra'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      category: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and microservices for our AI platforms.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      category: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines for autonomous systems.',
      skills: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Monitoring'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 5,
      title: 'AI Research Scientist',
      category: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Research and develop next-generation AI consciousness and autonomous systems.',
      skills: ['AI Research', 'Neuroscience', 'Machine Learning', 'Python', 'Research'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 6,
      title: 'Product Manager',
      category: 'business',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for AI and quantum technology solutions.',
      skills: ['Product Management', 'AI/ML', 'Agile', 'User Research', 'Strategy'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-blue-400'
    },
    {
      title: 'Human-Centric',
      description: 'Technology serves humanity, enhancing human capabilities and consciousness',
      icon: <Heart className="w-8 h-8" />,
      color: 'text-pink-400'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do',
      icon: <Star className="w-8 h-8" />,
      color: 'text-yellow-400'
    },
    {
      title: 'Collaboration',
      description: 'Great achievements come from working together as a team',
      icon: <Users className="w-8 h-8" />,
      color: 'text-green-400'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity and performance bonuses',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: <Heart className="w-6 h-6" />,
      color: 'text-red-400'
    },
    {
      title: 'Remote Work',
      description: 'Work from anywhere with flexible schedules',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development',
      icon: <Award className="w-6 h-6" />,
      color: 'text-purple-400'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? openPositions 
    : openPositions.filter(job => job.category === selectedCategory);

  return (
    <Layout>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Help us build the future of AI consciousness, quantum computing, and autonomous systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className={`flex justify-center mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment for your growth
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className={`flex justify-center mb-4 ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our mission to revolutionize technology and human consciousness
              </p>
            </motion.div>

            {/* Job Categories Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
            
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-pink-900/30 text-pink-300 text-sm rounded-full border border-pink-500/30">
                          {job.category.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">
                          {job.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <span
                              key={benefitIndex}
                              className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <a
                        href={`/contact?position=${encodeURIComponent(job.title)}`}
                        className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-400">No positions available in this category at the moment.</p>
                <p className="text-gray-500 mt-2">Check back later or contact us for general inquiries.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  Contact Us
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300"
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