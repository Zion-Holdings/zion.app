import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Shield, 
  Cloud, 
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Star,
  Globe,
  Lightbulb,
  Award,
  TrendingUp,
  Code,
  Atom
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5 },
    { id: 'sales', name: 'Sales & Business', count: 3 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 8 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Consciousness Engineer',
      department: 'ai-research',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead the development of next-generation AI consciousness systems that can think, feel, and reason like humans.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '5+ years experience in AI/ML development',
        'Expertise in neural networks and consciousness research',
        'Experience with large language models and transformers',
        'Strong background in cognitive science and philosophy'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Cutting-edge technology stack',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: true,
      tags: ['AI Consciousness', 'Machine Learning', 'Neural Networks', 'Research']
    },
    {
      id: 2,
      title: 'Quantum Computing Architect',
      department: 'quantum',
      location: 'middletown-de',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$180K - $250K',
      description: 'Design and implement quantum computing solutions for complex optimization problems and cryptography applications.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '7+ years experience in quantum computing',
        'Expertise in quantum algorithms and error correction',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum cryptography and security'
      ],
      benefits: [
        'Competitive salary and equity',
        'On-site quantum computing lab access',
        'Conference and research funding',
        'Collaboration with leading quantum researchers',
        'Comprehensive benefits package'
      ],
      featured: true,
      tags: ['Quantum Computing', 'Architecture', 'Algorithms', 'Cryptography']
    },
    {
      id: 3,
      title: 'Cybersecurity Engineer',
      department: 'cybersecurity',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$120K - $160K',
      description: 'Develop and implement advanced cybersecurity solutions including zero-trust architecture and quantum-resistant cryptography.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in cybersecurity',
        'Expertise in zero-trust architecture',
        'Experience with penetration testing and vulnerability assessment',
        'Knowledge of quantum-resistant cryptography'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Security certifications support',
        'Latest security tools and technologies',
        'Health and wellness benefits'
      ],
      featured: false,
      tags: ['Cybersecurity', 'Zero Trust', 'Penetration Testing', 'Cryptography']
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $140K',
      description: 'Build scalable web applications and APIs using modern technologies like Next.js, React, and Node.js.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Expertise in React, Next.js, and Node.js',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of database design and optimization'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work options',
        'Modern development tools and equipment',
        'Professional development opportunities',
        'Flexible work hours'
      ],
      featured: false,
      tags: ['Full Stack', 'React', 'Next.js', 'Node.js', 'Cloud']
    },
    {
      id: 5,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$140K - $180K',
      description: 'Conduct cutting-edge research in artificial intelligence, machine learning, and autonomous systems.',
      requirements: [
        'PhD in AI, Machine Learning, or related field',
        '3+ years research experience',
        'Published papers in top AI conferences',
        'Experience with deep learning frameworks',
        'Background in autonomous systems research'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research funding and resources',
        'Collaboration with leading AI researchers',
        'Conference and publication support',
        'Beautiful San Francisco office'
      ],
      featured: false,
      tags: ['AI Research', 'Machine Learning', 'Deep Learning', 'Autonomous Systems']
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$70K - $90K + Commission',
      description: 'Drive business growth by identifying and qualifying potential clients for our AI and quantum technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '2+ years experience in B2B sales',
        'Interest in technology and innovation',
        'Strong communication and presentation skills',
        'Experience with CRM systems (Salesforce preferred)'
      ],
      benefits: [
        'Competitive base salary + commission',
        'Remote work flexibility',
        'Sales training and development',
        'Performance-based bonuses',
        'Career advancement opportunities'
      ],
      featured: false,
      tags: ['Sales', 'B2B', 'Technology', 'Business Development']
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'engineering': return Code;
      case 'ai-research': return Brain;
      case 'quantum': return Atom;
      case 'cybersecurity': return Shield;
      case 'sales': return Target;
      default: return Briefcase;
    }
  };

  const getLocationIcon = (location: string) => {
    switch (location) {
      case 'remote': return Globe;
      case 'middletown-de': return MapPin;
      case 'san-francisco': return MapPin;
      default: return MapPin;
    }
  };

  const cultureValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible and encourage creative thinking.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in your growth with ongoing education and skill development.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from working together as a team.',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Impact',
      description: 'We work on projects that have real-world impact and make a difference.',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity, and performance bonuses',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Professional Growth',
      description: 'Training, conferences, and career development',
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us pioneer the future of technology with AI consciousness, quantum computing, 
                and autonomous solutions that transform the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-400">
                The principles that guide how we work and grow together
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-400">
                We take care of our team so you can focus on changing the world
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Filters */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Department Filter */}
              <div className="flex items-center space-x-2">
                <Briefcase className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name} ({location.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        {filteredJobs.filter(job => job.featured).length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Opportunities
                </h2>
                <p className="text-lg text-gray-400">
                  Our most exciting and impactful roles
                </p>
              </motion.div>

              {filteredJobs.filter(job => job.featured).map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 mb-8"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                            Featured
                          </span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                            {job.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{departments.find(d => d.id === job.department)?.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{locations.find(l => l.id === job.location)?.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={`/careers/${job.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                        >
                          View Full Job Description
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                      
                      <div className="lg:w-80">
                        <div className="bg-gray-800 p-6 rounded-xl">
                          <h4 className="text-lg font-semibold text-white mb-4">Quick Apply</h4>
                          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                            Apply Now
                          </button>
                          <p className="text-xs text-gray-400 mt-2 text-center">
                            Takes less than 5 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* All Job Openings */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Open Positions
              </h2>
              <p className="text-lg text-gray-400">
                Explore all available opportunities to join our team
              </p>
            </motion.div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredJobs.filter(job => !job.featured).map((job, index) => {
                  const DepartmentIcon = getDepartmentIcon(job.department);
                  const LocationIcon = getLocationIcon(job.location);
                  return (
                    <motion.article
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">
                            {job.type}
                          </span>
                          <span className="text-cyan-400 text-sm font-semibold">{job.salary}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {job.title}
                        </h3>
                        
                        <div className="space-y-3 mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <DepartmentIcon className="w-4 h-4" />
                            <span>{departments.find(d => d.id === job.department)?.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <LocationIcon className="w-4 h-4" />
                            <span>{locations.find(l => l.id === job.location)?.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-3">
                          <a
                            href={`/careers/${job.id}`}
                            className="flex-1 inline-flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                            Quick Apply
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Your Resume
                </a>
                <a
                  href="/about"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Learn More About Us
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