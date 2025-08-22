import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  Briefcase, Clock, DollarSign, Heart, Coffee, Gamepad2, Palette,
  BookOpen, GraduationCap, Globe2, Zap as ZapIcon, Users as UsersIcon
} from 'lucide-react';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'product', name: 'Product & Design', count: 4 },
    { id: 'business', name: 'Business & Sales', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 25 },
    { id: 'remote', name: 'Remote', count: 20 },
    { id: 'middletown', name: 'Middletown, DE', count: 3 },
    { id: 'newyork', name: 'New York, NY', count: 2 }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Research Engineer',
      category: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead research in AI consciousness and emotional intelligence systems.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Background in cognitive science or psychology',
        'Strong publication record in AI research'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work hours', 'Conference attendance']
    },
    {
      id: 2,
      title: 'Quantum Software Engineer',
      category: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130K - $180K',
      description: 'Develop quantum algorithms and quantum-enhanced software solutions.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum machine learning',
        'Strong mathematical and computational skills'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Remote work', 'Learning budget']
    },
    {
      id: 3,
      title: 'DevOps Automation Engineer',
      category: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$120K - $160K',
      description: 'Build and maintain automated infrastructure and deployment pipelines.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Proficiency in Terraform, Ansible, or similar tools',
        'Knowledge of Kubernetes and containerization',
        'Experience with CI/CD pipelines and automation'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible PTO', 'Home office setup']
    },
    {
      id: 4,
      title: 'AI Product Manager',
      category: 'product',
      location: 'remote',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$140K - $190K',
      description: 'Lead product strategy for AI-powered business solutions.',
      requirements: [
        'Experience in AI/ML product management',
        'Background in enterprise software or B2B SaaS',
        'Strong analytical and strategic thinking skills',
        'Experience with agile development methodologies'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Remote work', 'Professional development']
    },
    {
      id: 5,
      title: 'Quantum Cryptography Specialist',
      category: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$140K - $190K',
      description: 'Develop quantum-resistant cryptographic solutions and security protocols.',
      requirements: [
        'MS/PhD in Cryptography, Mathematics, or related field',
        'Experience with post-quantum cryptography',
        'Knowledge of quantum key distribution',
        'Understanding of cybersecurity principles'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Conference attendance', 'Research opportunities']
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      category: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $140K',
      description: 'Build scalable web applications and microservices.',
      requirements: [
        'Experience with React, Node.js, and TypeScript',
        'Knowledge of cloud platforms and databases',
        'Experience with microservices architecture',
        'Strong problem-solving skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Learning budget']
    }
  ];

  const companyCulture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and experimentation. Every team member has the freedom to explore new ideas and push boundaries.',
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in your growth with learning budgets, conference attendance, and access to cutting-edge technologies and research.',
      icon: <GraduationCap className="w-12 h-12 text-blue-400" />
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work hours, unlimited PTO, and remote-first culture ensure you can work when and where you\'re most productive.',
      icon: <Heart className="w-12 h-12 text-pink-400" />
    },
    {
      title: 'Global Impact',
      description: 'Work on technologies that will shape the future of humanity, from AI consciousness to quantum computing breakthroughs.',
      icon: <Globe2 className="w-12 h-12 text-green-400" />
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Mental health support', 'Fitness reimbursement', 'Wellness programs']
    },
    {
      category: 'Financial',
      items: ['Competitive salary', 'Equity options', '401(k) matching', 'Performance bonuses']
    },
    {
      category: 'Professional Growth',
      items: ['Learning budget', 'Conference attendance', 'Certification programs', 'Mentorship opportunities']
    },
    {
      category: 'Work Environment',
      items: ['Remote-first culture', 'Flexible work hours', 'Home office setup', 'Collaborative tools']
    }
  ];

  const filteredJobs = openPositions.filter(job => {
    const categoryMatch = selectedCategory === 'all' || job.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  return (
    <Layout>
      <SEO 
        title="Careers at Zion Tech Group - Join Our Team"
        description="Join Zion Tech Group and help shape the future of technology. Explore career opportunities in AI, quantum computing, and innovative solutions."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Join Our Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Help us revolutionize technology and shape the future of AI consciousness, quantum computing, and innovative business solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span>25+ Open Positions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Remote-First Culture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Cutting-Edge Technology</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Work at Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400">
                Join a culture of innovation, growth, and meaningful impact
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {companyCulture.map((culture, index) => (
                <motion.div
                  key={culture.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {culture.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {culture.title}
                    </h3>
                    <p className="text-gray-300">
                      {culture.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive benefits designed to support your success and well-being
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {benefit.category}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400">
                Find your perfect role in revolutionizing technology
              </p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex flex-wrap gap-2">
                {jobCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedLocation === location.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {location.name} ({location.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location === 'remote' ? 'Remote' : job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">
                        {job.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
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
                    
                    <div className="flex-shrink-0">
                      <a
                        href={`/careers/apply/${job.id}`}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-block"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No positions match your current filters. Try adjusting your selection or check back later for new opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Resume
                </a>
                <a
                  href="/team"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}