import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Cloud,
  Star,
  Award,
  Globe,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Send,
  Search,
  Filter,
  Building,
  TrendingUp,
  Lightbulb,
  Coffee,
  Code
} from 'lucide-react';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', label: 'All Departments', icon: Building, count: 25 },
    { id: 'engineering', label: 'Engineering', icon: Code, count: 12 },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', label: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'space-tech', label: 'Space Technology', icon: Rocket, count: 3 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'cloud', label: 'Cloud Infrastructure', icon: Cloud, count: 6 },
    { id: 'research', label: 'Research & Development', icon: Lightbulb, count: 4 }
  ];

  const locations = [
    { id: 'all', label: 'All Locations', icon: Globe, count: 25 },
    { id: 'remote', label: 'Remote', icon: Globe, count: 15 },
    { id: 'middletown-de', label: 'Middletown, DE', icon: MapPin, count: 8 },
    { id: 'san-francisco', label: 'San Francisco, CA', icon: MapPin, count: 5 },
    { id: 'new-york', label: 'New York, NY', icon: MapPin, count: 4 },
    { id: 'london', label: 'London, UK', icon: MapPin, count: 3 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Consciousness Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of next-generation AI consciousness systems that can truly understand and reason like humans.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Deep expertise in neural networks, consciousness modeling, and ethical AI',
        'Experience with large language models and cognitive architectures',
        'Strong background in neuroscience and psychology',
        'Leadership experience in AI research teams'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work arrangements',
        'Cutting-edge technology and research opportunities',
        'Health, dental, and vision insurance',
        'Professional development and conference attendance'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Research Scientist',
      department: 'quantum',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum-resistant solutions for next-generation computing.',
      requirements: [
        'PhD in Physics, Computer Science, or Quantum Information',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum error correction and quantum algorithms',
        'Strong mathematical and theoretical background',
        'Experience with quantum hardware and simulators'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to state-of-the-art quantum hardware',
        'Collaboration with leading quantum researchers',
        'Health, dental, and vision insurance',
        'Conference and research publication support'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space-tech',
      location: 'middletown-de',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop innovative space technology solutions for resource intelligence and exploration.',
      requirements: [
        'Bachelor\'s degree in Aerospace, Mechanical, or Electrical Engineering',
        'Experience with satellite systems and space instrumentation',
        'Knowledge of orbital mechanics and space environment',
        'Experience with AI/ML for space applications',
        'Familiarity with space industry standards and regulations'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Work on cutting-edge space technology',
        'Collaboration with space agencies and companies',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Architect',
      department: 'cybersecurity',
      location: 'remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement zero-trust security architectures for enterprise and government clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science, Cybersecurity, or related field',
        'Expertise in zero-trust security frameworks and implementation',
        'Experience with threat detection and response systems',
        'Knowledge of compliance frameworks (SOC2, ISO 27001, NIST)',
        'Experience with cloud security and identity management'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Work with high-profile government and enterprise clients',
        'Health, dental, and vision insurance',
        'Professional certifications and training'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Engineer',
      department: 'cloud',
      location: 'new-york',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure for AI and quantum computing workloads.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with AWS, Azure, or Google Cloud Platform',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Understanding of distributed systems and microservices'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Work with cutting-edge cloud technologies',
        'Collaboration with AI and quantum teams',
        'Health, dental, and vision insurance',
        'Cloud certification support'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'AI Research Intern',
      department: 'research',
      location: 'london',
      type: 'Internship',
      experience: 'Graduate Student',
      description: 'Join our research team to explore the frontiers of AI consciousness and autonomous systems.',
      requirements: [
        'Currently pursuing Master\'s or PhD in AI, Computer Science, or related field',
        'Strong background in machine learning and neural networks',
        'Research experience in AI consciousness or cognitive science',
        'Programming skills in Python, PyTorch, or TensorFlow',
        'Strong analytical and problem-solving abilities'
      ],
      benefits: [
        'Competitive internship stipend',
        'Mentorship from leading AI researchers',
        'Access to cutting-edge research facilities',
        'Potential for full-time employment',
        'Conference presentation opportunities'
      ],
      featured: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    const searchMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return departmentMatch && locationMatch && searchMatch;
  });

  const featuredJobs = jobOpenings.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Impact',
      description: 'We focus on solutions that create meaningful, positive change in the world.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses',
      icon: Star
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance',
      icon: Globe
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance coverage',
      icon: Heart
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning, conference attendance, and career development',
      icon: TrendingUp
    },
    {
      title: 'Cutting-Edge Tech',
      description: 'Access to the latest AI, quantum, and space technology',
      icon: Zap
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with brilliant minds and innovative projects',
      icon: Users
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                Join Our Mission
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Help us pioneer the future of technology with AI consciousness, quantum computing, 
                and space technology solutions that transform the world.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for jobs, skills, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-400">Open Positions</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400">Team Members</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400">Countries</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Department Filter */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Filter by Department</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                        selectedDepartment === dept.id
                          ? 'border-cyan-400 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <dept.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-white">{dept.label}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{dept.count} positions</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Filter by Location</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                        selectedLocation === location.id
                          ? 'border-purple-400 bg-purple-900/20'
                          : 'border-gray-700 bg-gray-800/30 hover:border-purple-400/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <location.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{location.label}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{location.count} positions</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Opportunities
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Join Our Elite Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most exciting and impactful roles that will shape the future of technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-900/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                            {departments.find(d => d.id === job.department)?.label}
                          </span>
                          <span className="px-3 py-1 bg-purple-900/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                            {locations.find(l => l.id === job.location)?.label}
                          </span>
                          <span className="px-3 py-1 bg-green-900/20 text-green-400 text-sm rounded-full border border-green-400/30">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                          {job.title}
                        </h3>

                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.slice(0, 3).map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-3 text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {job.benefits.slice(0, 3).map((benefit, benIndex) => (
                                <li key={benIndex} className="flex items-start gap-3 text-gray-300">
                                  <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                          <span className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>

                        <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                          Apply Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Culture & Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment where innovation thrives, collaboration flourishes, and impact matters
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-8">Why Work With Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* More Job Openings */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">More Opportunities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore additional positions across our diverse teams and locations
              </p>
            </motion.div>

            {regularJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                          {departments.find(d => d.id === job.department)?.label}
                        </span>
                        <span className="px-2 py-1 bg-purple-900/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                          {locations.find(l => l.id === job.location)?.label}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {job.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {job.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>

                      <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 text-sm">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">No positions match your current filters</h3>
                <p className="text-gray-500">Try adjusting your department or location filters to see more opportunities.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team of innovators and help us build the technologies that will transform tomorrow
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Team
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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