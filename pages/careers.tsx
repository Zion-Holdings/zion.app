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
  Target,
  Globe,
  ArrowRight,
  CheckCircle,
  MapPin,
  Briefcase,
  Zap,
  Heart,
  TrendingUp,
  Award,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users },
    { id: 'ai-research', name: 'AI Research', icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud-infrastructure', name: 'Cloud Infrastructure', icon: Cloud },
    { id: 'engineering', name: 'Engineering', icon: Zap },
    { id: 'product', name: 'Product Management', icon: Target }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Globe },
    { id: 'middletown-de', name: 'Middletown, DE', icon: MapPin },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin },
    { id: 'new-york', name: 'New York, NY', icon: MapPin },
    { id: 'london', name: 'London, UK', icon: MapPin },
    { id: 'tokyo', name: 'Tokyo, Japan', icon: MapPin }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Consciousness Engineer",
      department: "ai-research",
      location: "remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of next-generation AI consciousness systems that can think, feel, and reason like humans.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Deep expertise in neural networks and consciousness research",
        "Experience with large language models and emotional AI",
        "Strong background in cognitive science and philosophy of mind"
      ],
      responsibilities: [
        "Design and implement AI consciousness architectures",
        "Research and develop emotional intelligence algorithms",
        "Collaborate with cognitive scientists and philosophers",
        "Lead a team of AI researchers and engineers"
      ],
      benefits: [
        "Competitive salary with equity",
        "Flexible remote work options",
        "Cutting-edge research environment",
        "Health, dental, and vision coverage"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Research Scientist",
      department: "quantum-computing",
      location: "san-francisco",
      type: "Full-time",
      experience: "3+ years",
      description: "Research and develop quantum algorithms for AI, cryptography, and optimization problems.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Experience with quantum computing frameworks",
        "Knowledge of quantum algorithms and quantum machine learning",
        "Strong mathematical and analytical skills"
      ],
      responsibilities: [
        "Develop quantum algorithms for real-world applications",
        "Research quantum machine learning techniques",
        "Collaborate with quantum hardware teams",
        "Publish research papers and patents"
      ],
      benefits: [
        "Competitive salary with equity",
        "State-of-the-art quantum computing access",
        "Conference and research funding",
        "Comprehensive benefits package"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Space Technology Platform Engineer",
      department: "space-technology",
      location: "remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build platforms for space resource intelligence, satellite operations, and interplanetary communication.",
      requirements: [
        "Bachelor's degree in Aerospace, Computer Science, or related field",
        "Experience with satellite systems and space technology",
        "Knowledge of orbital mechanics and space operations",
        "Strong software engineering skills"
      ],
      responsibilities: [
        "Develop space resource intelligence platforms",
        "Build satellite communication systems",
        "Implement autonomous space operations",
        "Collaborate with space agencies and partners"
      ],
      benefits: [
        "Competitive salary with equity",
        "Work on cutting-edge space technology",
        "Remote work flexibility",
        "Health and wellness benefits"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Quantum Cybersecurity Architect",
      department: "cybersecurity",
      location: "new-york",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement quantum-resistant security systems for enterprise and government clients.",
      requirements: [
        "Bachelor's degree in Computer Science, Cybersecurity, or related field",
        "Deep expertise in cryptography and security protocols",
        "Knowledge of quantum-resistant algorithms",
        "Experience with enterprise security systems"
      ],
      responsibilities: [
        "Design quantum-resistant security architectures",
        "Implement post-quantum cryptography",
        "Conduct security audits and assessments",
        "Lead security implementation teams"
      ],
      benefits: [
        "Competitive salary with equity",
        "Work with government and enterprise clients",
        "Professional development opportunities",
        "Comprehensive benefits package"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Cloud Infrastructure Engineer",
      department: "cloud-infrastructure",
      location: "remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain quantum-secure cloud infrastructure for our global platform.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of containerization and orchestration",
        "Understanding of security and compliance"
      ],
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Ensure security and compliance standards",
        "Optimize performance and scalability",
        "Monitor and maintain system health"
      ],
      benefits: [
        "Competitive salary with equity",
        "Remote work flexibility",
        "Cloud certification opportunities",
        "Health and wellness benefits"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Product Manager - AI Platforms",
      department: "product",
      location: "london",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead product strategy and development for our AI consciousness and autonomous systems platforms.",
      requirements: [
        "Bachelor's degree in Business, Computer Science, or related field",
        "Experience in AI/ML product management",
        "Strong analytical and strategic thinking",
        "Excellent communication and leadership skills"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize requirements",
        "Work with engineering and design teams",
        "Analyze market trends and competition"
      ],
      benefits: [
        "Competitive salary with equity",
        "International work opportunities",
        "Professional development budget",
        "Comprehensive benefits package"
      ],
      featured: false
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const departmentMatch = selectedDepartment === 'all' || position.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || position.location === locationMatch;
    return departmentMatch && locationMatch;
  });

  const featuredPositions = openPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);

  const values = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "We believe AI consciousness will revolutionize how humans and machines interact, creating a more intelligent and compassionate world."
    },
    {
      icon: Rocket,
      title: "Bold Exploration",
      description: "We push the boundaries of what's possible, from quantum computing to space technology, always aiming for the stars."
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description: "Our technology enhances human capabilities, creating symbiotic relationships between humans and AI systems."
    },
    {
      icon: Shield,
      title: "Ethical Responsibility",
      description: "We build technology with ethics and safety at the core, ensuring our innovations benefit humanity."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family."
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules to support your work-life balance."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities, mentorship, and clear career progression paths."
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Competitive salaries, equity packages, and performance-based bonuses."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on technology that will transform industries and improve lives worldwide."
    },
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "Collaborate with brilliant minds in an environment that encourages creativity and experimentation."
    }
  ];

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Join Our Mission
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us pioneer the future of technology with AI consciousness, quantum computing, 
                and autonomous solutions that will transform the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The principles that guide our work and shape our culture of innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We offer more than just a job - we offer a mission, a community, and opportunities 
                to shape the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Department Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <span className="text-gray-300 font-medium whitespace-nowrap">Department:</span>
                {departments.map((department) => (
                  <button
                    key={department.id}
                    onClick={() => setSelectedDepartment(department.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedDepartment === department.id
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white border-transparent'
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                    }`}
                  >
                    <department.icon className="w-4 h-4" />
                    <span>{department.name}</span>
                  </button>
                ))}
              </div>

              {/* Location Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <span className="text-gray-300 font-medium whitespace-nowrap">Location:</span>
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedLocation === location.id
                        ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-white border-transparent'
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-purple-400/50'
                    }`}
                  >
                    <location.icon className="w-4 h-4" />
                    <span>{location.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Featured Openings
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join our team of innovators and help shape the future of technology.
              </p>
            </motion.div>

            <div className="space-y-8">
              {featuredPositions.map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                            {departments.find(d => d.id === position.department)?.name}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                            {locations.find(l => l.id === position.location)?.name}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                            {position.type}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {position.title}
                        </h3>

                        <div className="flex items-center space-x-6 text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{locations.find(l => l.id === position.location)?.name}</span>
                          </div>
                        </div>
                      </div>

                      <button className="lg:ml-8 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300">
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </button>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
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

        {/* Additional Positions */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                More Opportunities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Explore additional positions across our organization.
              </p>
            </motion.div>

            {regularPositions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPositions.map((position, index) => (
                  <motion.article
                    key={position.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                            {departments.find(d => d.id === position.department)?.name}
                          </span>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                            {locations.find(l => l.id === position.location)?.name}
                          </span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                            {position.type}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {position.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {position.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{locations.find(l => l.id === position.location)?.name}</span>
                          </div>
                        </div>

                        <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your department or location filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-3xl border border-cyan-400/20"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's explore opportunities together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CareersPage;