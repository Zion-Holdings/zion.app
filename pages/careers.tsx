import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, Heart, Zap, Star, Globe, Brain, Atom, Rocket, Shield,
  Cpu, Database, Cloud, Target, Award, Clock, MapPin, DollarSign, GraduationCap,
  ArrowRight, ExternalLink, CheckCircle, TrendingUp, Lightbulb, Code
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Consciousness",
      description: "Pioneering the future of artificial intelligence with consciousness and emotional intelligence"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Innovation",
      description: "Breaking boundaries with quantum computing and next-generation technology"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Technology",
      description: "Advancing humanity's reach into space with cutting-edge solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Excellence",
      description: "Protecting digital assets with quantum-resistant security solutions"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and advancement opportunities"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Work on projects that shape the future of technology worldwide"
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Consciousness Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      category: "AI & Machine Learning",
      description: "Lead the development of next-generation AI consciousness systems",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Experience with consciousness modeling and emotional AI",
        "Proficiency in Python, PyTorch, and quantum computing frameworks",
        "Published research in AI consciousness or related areas"
      ]
    },
    {
      title: "Quantum Computing Architect",
      department: "Quantum Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      category: "Quantum Computing",
      description: "Design and implement quantum computing solutions for enterprise clients",
      requirements: [
        "MS/PhD in Physics, Computer Science, or Quantum Computing",
        "Experience with quantum algorithms and quantum error correction",
        "Knowledge of Qiskit, Cirq, or similar quantum frameworks",
        "Background in quantum cryptography and security"
      ]
    },
    {
      title: "Space Technology Solutions Engineer",
      department: "Space Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      category: "Space Technology",
      description: "Develop innovative solutions for space exploration and resource management",
      requirements: [
        "BS/MS in Aerospace Engineering, Physics, or related field",
        "Experience with satellite systems and space technology",
        "Knowledge of orbital mechanics and space resource utilization",
        "Familiarity with AI and automation in space applications"
      ]
    },
    {
      title: "Cybersecurity Threat Intelligence Analyst",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      category: "Cybersecurity",
      description: "Analyze and respond to advanced cybersecurity threats using AI and quantum methods",
      requirements: [
        "BS/MS in Cybersecurity, Computer Science, or related field",
        "Experience with threat hunting and incident response",
        "Knowledge of AI-powered security tools and quantum-resistant cryptography",
        "Certifications: CISSP, CEH, or similar"
      ]
    },
    {
      title: "DevOps Platform Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      category: "IT Infrastructure",
      description: "Build and maintain autonomous DevOps platforms with AI integration",
      requirements: [
        "BS/MS in Computer Science or related field",
        "Experience with Kubernetes, Docker, and cloud platforms",
        "Knowledge of AI/ML operations and MLOps",
        "Proficiency in Python, Go, and infrastructure as code"
      ]
    },
    {
      title: "Business Intelligence Consultant",
      department: "Consulting",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      category: "Business Solutions",
      description: "Help clients implement AI-powered business intelligence solutions",
      requirements: [
        "BS/MS in Business, Data Science, or related field",
        "Experience with BI tools and data analytics platforms",
        "Knowledge of AI and machine learning applications in business",
        "Strong consulting and client relationship skills"
      ]
    }
  ];

  const departments = [
    { name: "AI & Machine Learning", count: 12, icon: <Brain className="w-5 h-5" /> },
    { name: "Quantum Computing", count: 8, icon: <Atom className="w-5 h-5" /> },
    { name: "Space Technology", count: 6, icon: <Rocket className="w-5 h-5" /> },
    { name: "Cybersecurity", count: 10, icon: <Shield className="w-5 h-5" /> },
    { name: "Cloud Infrastructure", count: 15, icon: <Cloud className="w-5 h-5" /> },
    { name: "Business Solutions", count: 9, icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <Layout 
      title="Careers at Zion Tech Group - Join the Future of Technology"
      description="Join our team of innovators working on AI consciousness, quantum computing, and space technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, Zion Tech Group, AI consciousness, quantum computing, space technology, cybersecurity, remote work"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Join the Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Be part of the team that's revolutionizing technology with AI consciousness, 
                quantum computing, and space technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300">50+ Open Positions</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300">Remote-First Culture</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300">Industry Leader</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values & Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're driven by innovation, consciousness, and the belief that technology 
                should serve humanity's highest potential.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team so they can focus on 
                building the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-cyan-400 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join one of our specialized teams working on cutting-edge technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {dept.icon}
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {dept.count} positions
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {dept.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                    <span>View positions</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to join the future? Explore our current openings and find your perfect role.
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                          {position.category}
                        </span>
                        <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                          {position.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {position.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {position.description}
                      </p>
                    </div>
                    <div className="lg:ml-8 lg:text-right">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <DollarSign className="w-4 h-4 text-cyan-400" />
                      <span>Competitive</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team of innovators and help us build the next generation of technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View All Positions</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Recruiting
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;