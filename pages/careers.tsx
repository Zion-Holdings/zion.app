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
  Globe,
  Star,
  Send,
  Search,
  Filter,
  Code,
  Atom,
  Building
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'ai-research', name: 'AI Research', count: 3 },
    { id: 'quantum', name: 'Quantum Computing', count: 2 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 3 },
    { id: 'new-york', name: 'New York, NY', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Research Engineer',
      department: 'ai-research',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Lead research in AI consciousness, neural networks, and autonomous systems. Develop cutting-edge algorithms and contribute to breakthrough innovations.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Expertise in deep learning, neural networks, and consciousness research',
        'Experience with large language models and AI ethics',
        'Strong publication record in top AI conferences',
        'Leadership experience in research teams'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work environment',
        'Access to cutting-edge AI infrastructure',
        'Conference and research budget',
        'Health, dental, and vision insurance'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Software Engineer',
      department: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100k - $150k',
      description: 'Develop quantum algorithms and software for our quantum computing platform. Work on quantum machine learning and quantum-resistant cryptography.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum machine learning',
        'Programming skills in Python, C++, or similar',
        'Understanding of quantum mechanics and linear algebra'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Access to quantum computing resources',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Architect',
      department: 'cybersecurity',
      location: 'middletown-de',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$130k - $200k',
      description: 'Design and implement zero-trust security architectures. Lead security initiatives and ensure compliance with industry standards.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, Computer Science, or related field',
        'Expertise in zero-trust architecture and security frameworks',
        'Experience with cloud security and compliance (SOC2, ISO27001)',
        'Knowledge of threat detection and incident response',
        'Security certifications (CISSP, CISM, etc.) preferred'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Hybrid work environment',
        'Professional certification support',
        'Health and wellness benefits',
        '401(k) with company match'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Build scalable web applications and APIs. Work with modern technologies and contribute to our platform development.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with React, Node.js, and TypeScript',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Understanding of database design and optimization',
        'Experience with DevOps and CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Modern development tools and equipment',
        'Professional development budget',
        'Flexible PTO and holidays'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'AI Ethics Specialist',
      department: 'ai-research',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Develop ethical frameworks for AI systems. Ensure responsible AI development and compliance with ethical guidelines.',
      requirements: [
        'Master\'s degree in Ethics, Philosophy, or related field',
        'Experience in AI ethics and responsible AI development',
        'Knowledge of AI governance and policy frameworks',
        'Strong analytical and communication skills',
        'Experience working with cross-functional teams'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work environment',
        'Conference and research opportunities',
        'Health and wellness benefits',
        'Professional development support'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'new-york',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100k - $150k',
      description: 'Build and maintain our cloud infrastructure. Implement automation and ensure high availability of our systems.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with AWS, Kubernetes, and Docker',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with monitoring and logging tools',
        'Understanding of security best practices'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Hybrid work environment',
        'Modern tools and equipment',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ],
      featured: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const cultureValues = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore the unknown, constantly seeking breakthrough solutions.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in your growth with ongoing education, training, and development opportunities.',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Impact',
      description: 'We work on projects that have real-world impact and transform industries.',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Dental and vision coverage', 'Mental health support', 'Wellness programs'],
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Work-Life Balance',
      items: ['Flexible remote work', 'Unlimited PTO', 'Flexible hours', 'Parental leave'],
      icon: Clock,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Growth & Development',
      items: ['Professional development budget', 'Conference attendance', 'Training programs', 'Career advancement'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Financial Security',
      items: ['Competitive salaries', 'Equity options', '401(k) matching', 'Performance bonuses'],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'engineering': return Code;
      case 'ai-research': return Brain;
      case 'quantum': return Atom;
      case 'cybersecurity': return Shield;
      default: return Briefcase;
    }
  };

  const getLocationIcon = (location: string) => {
    switch (location) {
      case 'remote': return Globe;
      case 'middletown-de': return MapPin;
      case 'new-york': return Building;
      default: return MapPin;
    }
  };

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
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us pioneer the future of technology. Join a team of innovators, 
                researchers, and engineers building the next generation of AI, quantum computing, 
                and autonomous systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
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
                The principles that guide everything we do
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
                We take care of our team so you can focus on innovation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <ul className="space-y-2">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Search Section */}
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
                Open Positions
              </h2>
              <p className="text-lg text-gray-400">
                Find your next opportunity to make an impact
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="mb-12 bg-gray-900/50 p-6 rounded-2xl border border-gray-700">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>

                {/* Department Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
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
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} ({loc.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Jobs */}
            {filteredJobs.filter(job => job.featured).length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8">Featured Positions</h3>
                <div className="space-y-6">
                  {filteredJobs.filter(job => job.featured).map((job, index) => {
                    const DepartmentIcon = getDepartmentIcon(job.department);
                    const LocationIcon = getLocationIcon(job.location);
                    return (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="p-8">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                            <div>
                              <div className="flex items-center space-x-4 mb-4">
                                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                                  Featured
                                </span>
                                <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                                  {job.type}
                                </span>
                              </div>
                              
                              <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-300">
                                {job.title}
                              </h3>
                              
                              <p className="text-gray-300 leading-relaxed mb-4">
                                {job.description}
                              </p>
                            </div>
                            
                            <div className="lg:text-right space-y-2">
                              <div className="text-2xl font-bold text-cyan-400">{job.salary}</div>
                              <div className="text-gray-400">{job.experience}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="flex items-center space-x-2">
                              <DepartmentIcon className="w-5 h-5 text-cyan-400" />
                              <span className="text-gray-300 capitalize">{job.department.replace('-', ' ')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <LocationIcon className="w-5 h-5 text-cyan-400" />
                              <span className="text-gray-300 capitalize">{job.location.replace('-', ' ')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-5 h-5 text-cyan-400" />
                              <span className="text-gray-300">{job.type}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:flex-row gap-4">
                            <a
                              href={`/careers/${job.id}`}
                              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                            >
                              Apply Now
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                              href={`/careers/${job.id}`}
                              className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Jobs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">All Open Positions</h3>
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredJobs.filter(job => !job.featured).map((job, index) => {
                    const DepartmentIcon = getDepartmentIcon(job.department);
                    const LocationIcon = getLocationIcon(job.location);
                    return (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                              {job.type}
                            </span>
                            <span className="text-cyan-400 font-semibold">{job.salary}</span>
                          </div>
                          
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {job.title}
                          </h4>
                          
                          <p className="text-gray-400 mb-4 line-clamp-2">
                            {job.description}
                          </p>
                          
                          <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <DepartmentIcon className="w-4 h-4" />
                              <span className="capitalize">{job.department.replace('-', ' ')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <LocationIcon className="w-4 h-4" />
                              <span className="capitalize">{job.location.replace('-', ' ')}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">{job.experience}</span>
                            <a
                              href={`/careers/${job.id}`}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                            >
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
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
                    <Search className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No jobs found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search criteria or check back later for new opportunities.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
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
                Don't See the Right Fit?
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