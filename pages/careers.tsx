import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, Cloud, Network, FileText, GraduationCap, DollarSign, Clock, Target,
  MapPin, Calendar, ExternalLink, Heart, Zap, Award
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Consciousness Engineer",
      department: "AI Research & Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of AI consciousness systems and neural network architectures.",
      requirements: ["PhD in Computer Science or related field", "Experience with neural networks", "Knowledge of consciousness research", "Strong Python skills"],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Flexible work hours"]
    },
    {
      title: "Quantum Computing Specialist",
      department: "Quantum Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop quantum algorithms and hybrid quantum-classical systems.",
      requirements: ["MS/PhD in Physics or Computer Science", "Quantum computing experience", "Python/Julia programming", "Algorithm development"],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Professional development"]
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement zero trust security architectures and threat detection systems.",
      requirements: ["BS/MS in Cybersecurity or related field", "Zero trust implementation", "Threat detection experience", "Security certifications"],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Security training"]
    },
    {
      title: "Space Technology Engineer",
      department: "Space Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Develop satellite systems and space resource management technologies.",
      requirements: ["BS/MS in Aerospace Engineering", "Satellite systems experience", "Orbital mechanics knowledge", "Systems engineering"],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Space industry exposure"]
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "Technology should serve humanity and improve lives",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions address challenges that affect the entire world",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in everything we do",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Above-market compensation packages" },
    { icon: Star, title: "Stock Options", description: "Ownership stake in the company" },
    { icon: Heart, title: "Health Insurance", description: "Comprehensive health and dental coverage" },
    { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" },
    { icon: Globe, title: "Remote Work", description: "Work from anywhere in the world" },
    { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses and conferences" }
  ];

  return (
    <Layout 
      title="Careers - Zion Tech Group"
      description="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, Zion Tech Group, technology jobs, AI, quantum computing"
      canonicalUrl="https://ziontechgroup.com/careers"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Revolution</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Help us pioneer the future of technology with AI consciousness, quantum computing, 
                and space technology that will transform the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#open-positions"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
                >
                  View Open Positions <ArrowRight className="ml-2" />
                </a>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" /> Watch Company Video
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and the culture we're building.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team so they can focus on changing the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help us build the future of technology.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                          {position.experience}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <a
                        href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      >
                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Make History?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our team of innovators and help us build the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  Contact Us
                </a>
                <a 
                  href="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
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