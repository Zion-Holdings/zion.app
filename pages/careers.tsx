import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Globe,
  Award,
  Heart,
  Zap,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  ArrowRight,
  Send,
  CheckCircle,
  TrendingUp,
  Building,
  Target
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 45 },
    { id: 'engineering', name: 'Engineering', count: 20 },
    { id: 'ai-research', name: 'AI Research', count: 12 },
    { id: 'quantum', name: 'Quantum Computing', count: 8 },
    { id: 'space-tech', name: 'Space Technology', count: 5 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 45 },
    { id: 'remote', name: 'Remote', count: 25 },
    { id: 'middletown', name: 'Middletown, DE', count: 15 },
    { id: 'global', name: 'Global Offices', count: 5 }
  ];

  const experienceLevels = [
    { id: 'all', name: 'All Levels', count: 45 },
    { id: 'entry', name: 'Entry Level', count: 15 },
    { id: 'mid', name: 'Mid Level', count: 20 },
    { id: 'senior', name: 'Senior Level', count: 10 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Consciousness Engineer',
      department: 'ai-research',
      location: 'remote',
      experience: 'senior',
      type: 'Full-time',
      description: 'Lead the development of next-generation AI consciousness systems and autonomous decision-making algorithms.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '5+ years experience in AI/ML development',
        'Expertise in neural networks and consciousness modeling',
        'Experience with large language models and transformers'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work arrangements',
        'Cutting-edge technology exposure',
        'Professional development opportunities'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'middletown',
      experience: 'mid',
      type: 'Full-time',
      description: 'Research and develop quantum algorithms for cybersecurity, optimization, and machine learning applications.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        '3+ years experience in quantum computing',
        'Knowledge of quantum algorithms and quantum programming',
        'Experience with Qiskit or similar quantum frameworks'
      ],
      benefits: [
        'State-of-the-art quantum computing access',
        'Collaboration with leading researchers',
        'Conference and publication support',
        'Health and wellness benefits'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space-tech',
      location: 'global',
      experience: 'senior',
      type: 'Full-time',
      description: 'Design and develop advanced space technology solutions for resource intelligence and exploration systems.',
      requirements: [
        'BS/MS in Aerospace Engineering or related field',
        '7+ years experience in space systems',
        'Knowledge of satellite technology and orbital mechanics',
        'Experience with space mission planning and execution'
      ],
      benefits: [
        'Work on cutting-edge space projects',
        'International travel opportunities',
        'Competitive compensation package',
        'Innovation-driven environment'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      experience: 'mid',
      type: 'Full-time',
      description: 'Build scalable web applications and platforms that power our AI and quantum computing solutions.',
      requirements: [
        'BS in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, and cloud platforms',
        'Experience with AI/ML integration and APIs'
      ],
      benefits: [
        'Remote-first work environment',
        'Modern tech stack and tools',
        'Continuous learning opportunities',
        'Flexible working hours'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'AI Ethics Specialist',
      department: 'ai-research',
      location: 'remote',
      experience: 'mid',
      type: 'Full-time',
      description: 'Ensure responsible AI development by implementing ethical guidelines and governance frameworks.',
      requirements: [
        'MS/PhD in Ethics, Philosophy, or related field',
        '3+ years experience in AI ethics and governance',
        'Understanding of AI bias and fairness',
        'Experience with ethical AI frameworks and guidelines'
      ],
      benefits: [
        'Shape the future of responsible AI',
        'Collaboration with global experts',
        'Thought leadership opportunities',
        'Competitive benefits package'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'middletown',
      experience: 'entry',
      type: 'Full-time',
      description: 'Build and maintain infrastructure for our AI and quantum computing platforms.',
      requirements: [
        'BS in Computer Science or related field',
        '1+ years experience in DevOps or infrastructure',
        'Knowledge of Docker, Kubernetes, and cloud platforms',
        'Experience with CI/CD pipelines and automation'
      ],
      benefits: [
        'Hands-on experience with cutting-edge tech',
        'Mentorship from senior engineers',
        'Career growth opportunities',
        'Competitive entry-level salary'
      ],
      featured: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    const experienceMatch = selectedExperience === 'all' || job.experience === selectedExperience;
    return departmentMatch && locationMatch && experienceMatch;
  });

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      icon: Rocket,
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
      title: 'Global Impact',
      description: 'We create positive change across industries and communities worldwide.',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first environment with flexible hours and work-life balance',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, conferences, and skill development',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
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
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us pioneer the future of technology. Join a team of innovators, researchers, and 
                engineers who are building the next generation of AI consciousness, quantum computing, 
                and space technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Open Positions', value: '45+', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
                { label: 'Team Members', value: '150+', icon: Users, color: 'from-purple-500 to-pink-500' },
                { label: 'Countries', value: '25+', icon: Globe, color: 'from-green-500 to-emerald-500' },
                { label: 'Innovation Projects', value: '200+', icon: Rocket, color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment of innovation, collaboration, and continuous learning where 
                brilliant minds come together to solve the world's most complex challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and opportunities that support your growth, 
                well-being, and career advancement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filters */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Department Filter */}
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Department:</span>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Location:</span>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name} ({location.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Experience:</span>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {experienceLevels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your perfect role and join our team of innovators and problem-solvers.
              </p>
            </motion.div>

            <div className="space-y-8">
              {filteredJobs.map((job, index) => (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Job Details */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            {job.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </span>
                            )}
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                              {departments.find(dept => dept.id === job.department)?.name}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                              {locations.find(loc => loc.id === job.location)?.name}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <p className="text-gray-300">{job.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">{job.type}</div>
                          <div className="text-sm text-gray-400">{experienceLevels.find(exp => exp.id === job.experience)?.name}</div>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Section */}
                    <div className="lg:w-80">
                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/50">
                        <h4 className="text-lg font-semibold text-white mb-4">Ready to Apply?</h4>
                        <p className="text-gray-300 text-sm mb-6">
                          Join our team and help shape the future of technology.
                        </p>
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                        <div className="mt-4 text-center">
                          <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                            Save for Later
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No positions match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                    setSelectedExperience('all');
                  }}
                  className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-xl hover:bg-cyan-500 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* General Application */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume 
                and let's discuss how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Submit General Application
                  <Send className="ml-2 w-5 h-5 inline" />
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                We'll keep your information on file for future opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join Zion Tech Group and be part of a team that's revolutionizing technology 
                and shaping the future of AI, quantum computing, and space exploration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                  <Users className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
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