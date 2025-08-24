import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Star, 
  ArrowRight, 
  Filter,
  Search,
  Building,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    'All',
    'AI & Machine Learning',
    'Cloud & Infrastructure',
    'Cybersecurity',
    'Engineering',
    'Sales & Marketing',
    'Product Management'
  ];

  const locations = [
    'All',
    'Remote',
    'San Francisco, CA',
    'New York, NY',
    'Austin, TX',
    'Seattle, WA',
    'Hybrid'
  ];

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses across industries.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        '5+ years experience in machine learning and AI development',
        'Expertise in Python, TensorFlow, PyTorch, and cloud platforms',
        'Experience with large language models and computer vision',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions for client projects',
        'Lead technical architecture decisions for AI systems',
        'Mentor junior engineers and conduct code reviews',
        'Collaborate with cross-functional teams on AI initiatives',
        'Stay current with latest AI research and technologies'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work', 'Professional development'],
      featured: true,
      postedDate: '2024-01-15'
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$140,000 - $200,000',
      description: 'Lead cloud architecture design and implementation for enterprise clients, ensuring scalability, security, and cost optimization.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture and design',
        'Expertise in AWS, Azure, and Google Cloud platforms',
        'Experience with Kubernetes, Docker, and infrastructure as code',
        'Strong understanding of security and compliance requirements'
      ],
      responsibilities: [
        'Design scalable cloud architectures for enterprise clients',
        'Lead cloud migration and optimization projects',
        'Develop infrastructure as code and automation solutions',
        'Provide technical leadership and mentorship',
        'Collaborate with sales and delivery teams'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work', 'Certification support'],
      featured: true,
      postedDate: '2024-01-14'
    },
    {
      id: 'cybersecurity-specialist',
      title: 'Cybersecurity Specialist',
      department: 'Cybersecurity',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Protect our clients from evolving cyber threats by implementing advanced security solutions and conducting security assessments.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity operations',
        'Certifications: CISSP, CEH, or equivalent',
        'Experience with SIEM, EDR, and security tools',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      responsibilities: [
        'Conduct security assessments and penetration testing',
        'Implement and manage security monitoring solutions',
        'Develop security policies and procedures',
        'Respond to security incidents and threats',
        'Provide security consulting to clients'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Security training', 'Conference attendance'],
      featured: false,
      postedDate: '2024-01-13'
    },
    {
      id: 'frontend-developer',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $140,000',
      description: 'Build exceptional user experiences with modern web technologies and contribute to our product development efforts.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in frontend development',
        'Expertise in React, TypeScript, and modern CSS',
        'Experience with state management and testing frameworks',
        'Strong understanding of web performance and accessibility'
      ],
      responsibilities: [
        'Develop responsive and accessible user interfaces',
        'Collaborate with designers and backend developers',
        'Write clean, maintainable, and tested code',
        'Participate in code reviews and technical discussions',
        'Stay current with frontend best practices and trends'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Professional development', 'Flexible hours'],
      featured: false,
      postedDate: '2024-01-12'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-200"
              >
                Learn About Culture
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Department Filter */}
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-300 mb-3">
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      {job.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Posted {job.postedDate}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center space-x-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">No jobs found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                  setSelectedLocation('All');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work at
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building a culture of innovation, collaboration, and continuous learning. Join us in shaping the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Innovation First',
                description: 'Work on cutting-edge technologies and be part of groundbreaking solutions that transform industries.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Collaborative Culture',
                description: 'Join a team of passionate professionals who support each other and celebrate success together.'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Impact',
                description: 'Make a difference in the world through technology that solves real problems for real people.'
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Continuous Learning',
                description: 'Access to training, conferences, and resources to keep growing your skills and knowledge.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Work-Life Balance',
                description: 'Flexible schedules, remote work options, and policies that respect your personal time.'
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: 'Modern Tech Stack',
                description: 'Work with the latest technologies and tools in a cloud-native, agile environment.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                Submit Application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-200"
              >
                Contact Recruiting
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
