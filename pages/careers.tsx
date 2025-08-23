import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Star,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Globe,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 4 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 3 },
    { id: 'space-technology', name: 'Space Technology', count: 2 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'engineering', name: 'Engineering', count: 3 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 3 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 1 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: 12 },
    { id: 'full-time', name: 'Full-time', count: 8 },
    { id: 'part-time', name: 'Part-time', count: 2 },
    { id: 'contract', name: 'Contract', count: 2 }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Consciousness Researcher',
      department: 'ai-research',
      location: 'remote',
      type: 'full-time',
      experience: '5+ years',
      description: 'Lead research in artificial consciousness, emotional intelligence, and autonomous AI systems. Develop breakthrough algorithms that push the boundaries of machine consciousness.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Deep expertise in neural networks and consciousness studies',
        'Experience with large language models and AI ethics',
        'Strong publication record in top AI conferences'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work environment',
        'Access to cutting-edge AI infrastructure',
        'Collaboration with world-class researchers'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Engineer',
      department: 'quantum-computing',
      location: 'middletown-de',
      type: 'full-time',
      experience: '3+ years',
      description: 'Design and implement quantum algorithms for financial modeling, cryptography, and optimization problems. Work with state-of-the-art quantum hardware and simulation tools.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or Engineering',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and error correction',
        'Background in quantum mechanics and linear algebra'
      ],
      benefits: [
        'Competitive salary with benefits',
        'On-site work with quantum hardware',
        'Professional development opportunities',
        'Health, dental, and vision insurance'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Space Technology Specialist',
      department: 'space-technology',
      location: 'remote',
      type: 'full-time',
      experience: '4+ years',
      description: 'Develop space resource intelligence platforms, satellite data analysis systems, and autonomous space exploration technologies.',
      requirements: [
        'BS/MS in Aerospace Engineering or related field',
        'Experience with satellite systems and orbital mechanics',
        'Knowledge of remote sensing and data analysis',
        'Familiarity with space industry regulations'
      ],
      benefits: [
        'Remote work flexibility',
        'Competitive compensation package',
        'Opportunity to work on cutting-edge space projects',
        'Professional growth and learning'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Architect',
      department: 'cybersecurity',
      location: 'san-francisco',
      type: 'full-time',
      experience: '6+ years',
      description: 'Design and implement quantum-resistant security architectures, zero-trust frameworks, and advanced threat detection systems.',
      requirements: [
        'BS/MS in Computer Science or Cybersecurity',
        'Expertise in cryptography and security protocols',
        'Experience with zero-trust architecture',
        'Knowledge of quantum-resistant algorithms'
      ],
      benefits: [
        'Competitive Bay Area salary',
        'Hybrid work environment',
        'Comprehensive benefits package',
        'Access to latest security tools'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'AI Ethics & Governance Specialist',
      department: 'ai-research',
      location: 'remote',
      type: 'full-time',
      experience: '3+ years',
      description: 'Develop ethical frameworks and governance policies for AI systems, ensuring responsible development and deployment of conscious AI.',
      requirements: [
        'MS/PhD in Ethics, Philosophy, or AI-related field',
        'Understanding of AI ethics and governance',
        'Experience with policy development',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Remote work flexibility',
        'Competitive salary',
        'Impact on AI development',
        'Professional development'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'full-time',
      experience: '4+ years',
      description: 'Build and maintain cloud infrastructure, implement CI/CD pipelines, and ensure high availability of our AI and quantum computing platforms.',
      requirements: [
        'BS in Computer Science or related field',
        'Experience with AWS, Azure, or GCP',
        'Knowledge of Docker, Kubernetes, and Terraform',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Remote work environment',
        'Competitive compensation',
        'Latest cloud technologies',
        'Professional growth opportunities'
      ],
      featured: false
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    const matchesType = selectedType === 'all' || position.type === selectedType;
    return matchesDepartment && matchesLocation && matchesType;
  });

  const getDepartmentIcon = (deptId: string) => {
    switch (deptId) {
      case 'ai-research': return <Brain className="w-5 h-5" />;
      case 'quantum-computing': return <Atom className="w-5 h-5" />;
      case 'space-technology': return <Rocket className="w-5 h-5" />;
      case 'cybersecurity': return <Shield className="w-5 h-5" />;
      case 'engineering': return <Cloud className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getLocationIcon = (locId: string) => {
    switch (locId) {
      case 'remote': return <Globe className="w-4 h-4" />;
      case 'middletown-de': return <MapPin className="w-4 h-4" />;
      case 'san-francisco': return <MapPin className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getJobTypeIcon = (typeId: string) => {
    switch (typeId) {
      case 'full-time': return <Clock className="w-4 h-4" />;
      case 'part-time': return <Clock className="w-4 h-4" />;
      case 'contract': return <Briefcase className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  const cultureValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough ideas that push the boundaries of what\'s possible.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Human-Centric',
      description: 'Our technology serves humanity, and we prioritize ethical development and human well-being.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We work on solutions that address global challenges and create positive change worldwide.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer experience.'
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible schedules and asynchronous collaboration.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Competitive Compensation',
      description: 'Attractive salaries, equity options, and comprehensive benefits packages.'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'Access to cutting-edge technologies, conferences, and professional development programs.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'World-Class Team',
      description: 'Collaborate with brilliant minds from diverse backgrounds and expertise areas.'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Careers | Zion Tech Group" 
        description="Join our team of innovators and help shape the future of AI consciousness, quantum computing, and space technology."
        canonical="https://ziontechgroup.com/careers/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us pioneer the future of technology. Join a team of brilliant minds working on 
                AI consciousness, quantum computing, and space technology that will transform humanity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Culture & Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building more than technology—we're building a culture of innovation, 
                collaboration, and positive impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job—we offer an opportunity to shape the future 
                while enjoying a supportive and innovative work environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                >
                  <div className="text-cyan-400 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filters Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Department Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Department:</span>
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'bg-cyan-400/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    {getDepartmentIcon(dept.id)}
                    <span>{dept.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {dept.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Location Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Location:</span>
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedLocation === location.id
                        ? 'bg-purple-400/20 border-purple-400/50 text-purple-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-purple-400/30 hover:text-purple-400'
                    }`}
                  >
                    {getLocationIcon(location.id)}
                    <span>{location.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {location.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Job Type Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 font-medium mr-2">Type:</span>
                {jobTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-green-400/20 border-green-400/50 text-green-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-green-400/30 hover:text-green-400'
                    }`}
                  >
                    {getJobTypeIcon(type.id)}
                    <span>{type.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {type.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Positions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our most critical teams and help us build the future of technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {filteredPositions.filter(position => position.featured).map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                            {departments.find(d => d.id === position.department)?.name}
                          </span>
                          <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                            {locations.find(l => l.id === position.location)?.name}
                          </span>
                          <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                            {jobTypes.find(t => t.id === position.type)?.name}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {position.title}
                        </h3>
                        
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {position.experience} experience
                          </span>
                          <span className="flex items-center">
                            {getLocationIcon(position.location)} 
                            <span className="ml-2">
                              {locations.find(l => l.id === position.location)?.name}
                            </span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0">
                        <a
                          href={`/careers/${position.id}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                        >
                          Apply Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Positions Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">More Opportunities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore additional positions across our organization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPositions.filter(position => !position.featured).map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                        {departments.find(d => d.id === position.department)?.name}
                      </span>
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                        {locations.find(l => l.id === position.location)?.name}
                      </span>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full border border-green-400/30">
                        {jobTypes.find(t => t.id === position.type)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {position.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {position.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {position.experience}
                      </span>
                      <span className="flex items-center">
                        {getLocationIcon(position.location)}
                        <span className="ml-1">
                          {locations.find(l => l.id === position.location)?.name}
                        </span>
                      </span>
                    </div>
                    
                    <a
                      href={`/careers/${position.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      View Position
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No positions found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                    setSelectedType('all');
                  }}
                  className="mt-4 px-6 py-2 bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/30 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* General Application Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Fit?</h2>
              <p className="text-xl text-gray-300">
                We're always looking for talented individuals. Send us your resume and let's discuss 
                how you can contribute to our mission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">
                    Department of Interest
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="">Select a department</option>
                    {departments.filter(d => d.id !== 'all').map((dept) => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Why are you interested in joining Zion Tech Group? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your interest and how you can contribute..."
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-cyan-400/20 file:text-cyan-400 hover:file:bg-cyan-400/30"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team of innovators and help us build technology that will transform 
                the world for the better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View All Positions
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