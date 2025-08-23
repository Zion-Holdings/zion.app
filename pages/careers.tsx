import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette,
  Briefcase, GraduationCap, Heart, Zap as Lightning, Globe as World,
  Clock, DollarSign, Coffee, Gamepad2, BookOpen, Users2
} from 'lucide-react';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'engineering', name: 'Engineering', icon: <Cpu className="w-5 h-5" /> },
    { id: 'sales', name: 'Sales & Marketing', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'operations', name: 'Operations', icon: <Shield className="w-5 h-5" /> }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: <World className="w-5 h-5" /> },
    { id: 'middletown', name: 'Middletown, DE', icon: <MapPin className="w-5 h-5" /> },
    { id: 'remote', name: 'Remote', icon: <Globe className="w-5 h-5" /> },
    { id: 'sf', name: 'San Francisco, CA', icon: <MapPin className="w-5 h-5" /> },
    { id: 'london', name: 'London, UK', icon: <MapPin className="w-5 h-5" /> }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Research Engineer',
      department: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead cutting-edge AI research in consciousness evolution and neural network development.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Published research in top AI conferences',
        'Experience with PyTorch, TensorFlow, or similar frameworks'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work arrangements', 'Conference attendance']
    },
    {
      id: 2,
      title: 'Quantum Software Engineer',
      department: 'quantum',
      location: 'middletown',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and software for enterprise quantum computing solutions.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum error correction',
        'Strong programming skills in Python, C++, or Rust'
      ],
      benefits: ['Competitive salary', 'Health benefits', 'Professional development', 'Stock options']
    },
    {
      id: 3,
      title: 'Space Systems Engineer',
      department: 'space',
      location: 'sf',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop space technology platforms for resource intelligence and exploration.',
      requirements: [
        'BS/MS in Aerospace Engineering or related field',
        'Experience with satellite systems and space missions',
        'Knowledge of orbital mechanics and space environment',
        'Experience with CAD software and simulation tools'
      ],
      benefits: ['Competitive salary', 'Health benefits', '401k matching', 'Flexible PTO']
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build scalable web applications and microservices for our technology platforms.',
      requirements: [
        'Experience with React, Node.js, and TypeScript',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with databases and API design',
        'Understanding of DevOps and CI/CD practices'
      ],
      benefits: ['Competitive salary', 'Remote work', 'Learning budget', 'Flexible hours']
    },
    {
      id: 5,
      title: 'Enterprise Sales Executive',
      department: 'sales',
      location: 'london',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive enterprise sales for our AI and quantum computing solutions in the EMEA market.',
      requirements: [
        'Proven track record in enterprise software sales',
        'Experience with AI, ML, or enterprise technology',
        'Strong network in enterprise IT decision makers',
        'Excellent communication and presentation skills'
      ],
      benefits: ['Competitive commission', 'Base salary', 'Travel opportunities', 'Performance bonuses']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'operations',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Kubernetes, Docker, and cloud platforms',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with monitoring and logging tools',
        'Understanding of security best practices'
      ],
      benefits: ['Competitive salary', 'Remote work', 'Health benefits', 'Professional development'"
    }
  ];

  const culture = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and experimentation. Every team member has the freedom to explore new ideas and push boundaries.'
    },
    {
      icon: <Users2 className="w-12 h-12" />,
      title: 'Collaborative Environment',
      description: 'Work with brilliant minds across disciplines. We believe the best solutions come from diverse perspectives and teamwork.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Fast-Paced Growth',
      description: 'Join a rapidly growing company where you can make a real impact and accelerate your career development.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Work-Life Balance',
      description: 'We value your well-being with flexible schedules, unlimited PTO, and a supportive work environment.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and professional development programs'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and unlimited PTO'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Fun & Culture',
      description: 'Team events, hackathons, and a vibrant company culture'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and internal promotion opportunities'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Help us build the future of AI consciousness, quantum computing, and space technology. 
                Join a team of innovators, dreamers, and problem-solvers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#openings" className="btn-primary">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Culture
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We're building more than technology - we're building a community of innovators
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We take care of our team so you can focus on building amazing things
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find the perfect role to grow your career and make an impact
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 flex flex-wrap gap-4 justify-center"
            >
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {departments.find(d => d.id === job.department)?.name}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {locations.find(l => l.id === job.location)?.name}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <span
                              key={benefitIndex}
                              className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <button className="btn-primary">
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-xl text-gray-400 mb-4">No positions match your current filters.</p>
                  <button
                    onClick={() => {
                      setSelectedDepartment('all');
                      setSelectedLocation('all');
                    }}
                    className="btn-secondary"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's discuss 
                how you can contribute to our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Resume
                </Link>
                <a href="mailto:careers@ziontechgroup.com" className="btn-secondary">
                  <Users className="w-5 h-5 mr-2" />
                  Contact HR
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