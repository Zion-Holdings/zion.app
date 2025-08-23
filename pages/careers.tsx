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
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Send,
  Building,
  Zap,
  Target,
  Award
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'space-tech', name: 'Space Technology', count: 3 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 6 },
    { id: 'new-york', name: 'New York, NY', count: 2 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 2 }
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
        'Deep expertise in neural networks and consciousness modeling',
        'Experience with large language models and cognitive architectures',
        'Strong background in ethics and AI safety'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work environment',
        'Cutting-edge technology stack',
        'Professional development opportunities'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Research Scientist',
      department: 'quantum',
      location: 'middletown-de',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms for real-world applications in finance, healthcare, and cybersecurity.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum error correction and quantum algorithms',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'State-of-the-art quantum computing resources',
        'Collaboration with leading researchers',
        'Conference and publication support',
        'Competitive benefits package'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Space Technology Platform Engineer',
      department: 'space-tech',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build scalable platforms for space resource intelligence, satellite data processing, and space exploration applications.',
      requirements: [
        'Experience with distributed systems and cloud platforms',
        'Knowledge of satellite communications and orbital mechanics',
        'Proficiency in Python, Go, or Rust',
        'Background in aerospace or space technology'
      ],
      benefits: [
        'Work on cutting-edge space technology',
        'Remote-first culture',
        'Generous PTO and flexible hours',
        'Health and wellness benefits'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Architect',
      department: 'engineering',
      location: 'new-york',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement zero-trust security architectures for enterprise clients across multiple industries.',
      requirements: [
        'Expertise in zero-trust security principles',
        'Experience with identity and access management',
        'Knowledge of compliance frameworks (SOC2, ISO 27001)',
        'Strong understanding of threat modeling and risk assessment'
      ],
      benefits: [
        'High-impact security projects',
        'Professional certification support',
        'Competitive salary and bonuses',
        'Modern office in NYC'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Automate and optimize our infrastructure deployment, monitoring, and scaling processes.',
      requirements: [
        'Experience with Kubernetes and container orchestration',
        'Knowledge of CI/CD pipelines and automation',
        'Proficiency in Python, Bash, or Go',
        'Experience with cloud platforms (AWS, GCP, Azure)'
      ],
      benefits: [
        'Remote work flexibility',
        'Latest DevOps tools and technologies',
        'Career growth opportunities',
        'Competitive compensation'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'AI Ethics & Governance Specialist',
      department: 'ai-ml',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop and implement ethical AI frameworks and governance policies for our AI consciousness platforms.',
      requirements: [
        'Background in AI ethics, philosophy, or policy',
        'Experience with AI governance frameworks',
        'Understanding of regulatory requirements',
        'Strong communication and stakeholder management skills'
      ],
      benefits: [
        'Shape the future of AI ethics',
        'Work with leading AI researchers',
        'Competitive Bay Area salary',
        'Comprehensive benefits package'
      ],
      featured: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const companyValues = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to transform the world for the better.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours and asynchronous collaboration.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Access to the latest AI, quantum, and space technology tools and platforms.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Professional development budget, conference attendance, and learning resources.'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity options, and performance-based bonuses.'
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
                Join Our Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us pioneer the future of technology. Work on cutting-edge AI consciousness, 
                quantum computing, and space technology solutions that transform industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
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
                We foster an environment of innovation, collaboration, and continuous learning
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
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
                We offer competitive benefits and opportunities for growth and development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filters */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Department Filter */}
              <div className="flex items-center space-x-2">
                <Briefcase className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
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
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
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

        {/* Featured Job Openings */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Opportunities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most exciting and impactful roles that are shaping the future of technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {filteredJobs.filter(job => job.featured).map((job, index) => (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden"
                >
                  <div className="p-8 lg:p-12">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                            {departments.find(d => d.id === job.department)?.name}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                            {locations.find(l => l.id === job.location)?.name}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <div className="lg:text-right">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full mb-2">
                          <Star className="w-4 h-4 mr-2" />
                          Featured Role
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Requirements and Benefits */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-semibold text-cyan-400 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-purple-400 mb-4">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                      Apply for This Position
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Job Openings Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">All Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore all available opportunities across our organization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.filter(job => !job.featured).map((job, index) => (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                          {departments.find(d => d.id === job.department)?.name}
                        </span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                          {locations.find(l => l.id === job.location)?.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {job.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>

                      {/* Description Preview */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {job.description}
                      </p>

                      {/* Apply */}
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">Apply Now</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* General Application Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Resume
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                We'll review your profile and reach out if there's a good match.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our team of innovators and help us build the technologies that will transform the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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