import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Zap, Brain, Atom, Rocket, Shield, Cpu, 
  Database, Cloud, Target, Star, CheckCircle, ArrowRight,
  MapPin, Clock, DollarSign, GraduationCap, Briefcase,
  Heart, Globe, Lightbulb, TrendingUp, Send, MessageCircle, Mail
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'space', name: 'Space Technology', icon: Rocket },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'engineering', name: 'Engineering', icon: Cpu },
    { id: 'data', name: 'Data Science', icon: Database },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Globe },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin },
    { id: 'hybrid', name: 'Hybrid', icon: MapPin }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Consciousness Engineer',
      department: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead the development of next-generation AI consciousness systems with emotional intelligence capabilities.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with neural networks and consciousness research',
        'Knowledge of cognitive science and psychology',
        'Strong Python and PyTorch skills'
      ],
      benefits: [
        'Competitive salary with equity',
        'Flexible remote work',
        'Cutting-edge technology access',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Scientist',
      department: 'quantum',
      location: 'hybrid',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130K - $180K',
      description: 'Research and develop quantum computing algorithms for solving complex computational problems.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum algorithms and quantum circuits',
        'Knowledge of quantum mechanics and information theory',
        'Programming experience in Python, Qiskit, or similar'
      ],
      benefits: [
        'Access to quantum computing resources',
        'Collaboration with leading researchers',
        'Conference and publication support',
        'Health and wellness benefits'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$140K - $190K',
      description: 'Design and develop innovative space technology solutions for resource intelligence and exploration.',
      requirements: [
        'Bachelor\'s degree in Aerospace, Mechanical, or Electrical Engineering',
        'Experience with satellite systems and space missions',
        'Knowledge of orbital mechanics and space environment',
        'CAD and simulation software proficiency'
      ],
      benefits: [
        'Work on cutting-edge space projects',
        'Collaboration with space agencies',
        'Professional certification support',
        'Generous PTO and holidays'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Architect',
      department: 'security',
      location: 'hybrid',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$160K - $220K',
      description: 'Design and implement quantum-resistant cybersecurity architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with zero-trust architectures',
        'Knowledge of quantum cryptography and post-quantum algorithms',
        'Security certifications (CISSP, CISM, etc.)'
      ],
      benefits: [
        'Work with Fortune 500 clients',
        'Advanced security training',
        'Conference attendance',
        'Performance bonuses'
      ]
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $160K',
      description: 'Build scalable web applications and microservices for our revolutionary technology platforms.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with React, Node.js, and TypeScript',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with microservices architecture'
      ],
      benefits: [
        'Modern tech stack',
        'Remote-first culture',
        'Code review and mentorship',
        'Open source contributions'
      ]
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'data',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130K - $170K',
      description: 'Develop machine learning models and data analytics solutions for business intelligence.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        'Experience with Python, R, and SQL',
        'Knowledge of machine learning algorithms',
        'Experience with big data technologies'
      ],
      benefits: [
        'Work with cutting-edge AI models',
        'Data science community',
        'Research publication opportunities',
        'Competitive benefits package'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centric",
      description: "Technology should enhance human potential, not replace it"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We solve problems that affect humanity worldwide"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Continuous education and skill development"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Environment",
      description: "Work with brilliant minds from around the world"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Projects",
      description: "Work on cutting-edge technology that changes the world"
    }
  ];

  return (
    <Layout 
      title="Careers - Join Zion Tech Group"
      description="Join Zion Tech Group's mission to revolutionize technology through AI consciousness, quantum computing, and space technology innovations."
      canonicalUrl="https://ziontechgroup.com/careers"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6"
              >
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Build the Future
                </span>
                <br />
                <span className="text-white">With Us</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Join a team of visionaries, innovators, and problem-solvers who are shaping the future 
                of technology. Help us revolutionize AI consciousness, quantum computing, and space exploration.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-400">Open Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">25+</div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-400">Remote-Friendly</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Values
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                These core values guide everything we do and define the culture we're building
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 text-center hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Why Work With Us?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We offer more than just a job - we offer a mission, a community, and opportunities to grow
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Open Positions
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Find the perfect role to match your skills and passion for innovation
              </motion.p>
            </motion.div>

            {/* Filters */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                >
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                >
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Job Cards */}
            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-300 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2 text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-300 mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2 text-gray-300 text-sm">
                                <Star className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:flex-shrink-0">
                      <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredJobs.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No positions match your current filters. Try adjusting your selection.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Don't See the Perfect Role?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                We're always looking for talented individuals who share our passion for innovation. 
                Send us your resume and let's explore how we can work together.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;