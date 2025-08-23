import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Brain,
  Atom,
  Rocket,
  Shield,
  Heart,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  CheckCircle
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Research Scientist",
      department: "AI & Consciousness",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $180K",
      description: "Lead groundbreaking research in AI consciousness and emotional intelligence systems.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Experience with neural networks and consciousness research",
        "Published research in top AI conferences",
        "Strong background in cognitive science"
      ],
      benefits: ["Competitive salary", "Stock options", "Flexible work", "Health insurance"]
    },
    {
      title: "Quantum Computing Engineer",
      department: "Quantum Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100K - $150K",
      description: "Develop quantum algorithms and quantum-safe cybersecurity solutions.",
      requirements: [
        "MS/PhD in Physics, Computer Science, or related field",
        "Experience with quantum programming languages",
        "Knowledge of quantum error correction",
        "Background in cryptography"
      ],
      benefits: ["Competitive salary", "Stock options", "Remote work", "Health insurance"]
    },
    {
      title: "Space Technology Specialist",
      department: "Space Technology",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110K - $160K",
      description: "Design and implement space resource intelligence and mining platforms.",
      requirements: [
        "BS/MS in Aerospace Engineering or related field",
        "Experience with satellite systems and space missions",
        "Knowledge of resource extraction technologies",
        "Background in robotics and automation"
      ],
      benefits: ["Competitive salary", "Stock options", "Flexible work", "Health insurance"]
    },
    {
      title: "Senior DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$90K - $140K",
      description: "Build and maintain scalable cloud infrastructure and deployment pipelines.",
      requirements: [
        "BS in Computer Science or related field",
        "Expertise in AWS, Azure, or GCP",
        "Experience with Kubernetes and Docker",
        "Strong automation and scripting skills"
      ],
      benefits: ["Competitive salary", "Stock options", "Remote work", "Health insurance"]
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80K - $120K",
      description: "Protect our systems and develop quantum-resistant security solutions.",
      requirements: [
        "BS in Cybersecurity, Computer Science, or related field",
        "Experience with security tools and frameworks",
        "Knowledge of threat detection and response",
        "Certifications like CISSP, CEH preferred"
      ],
      benefits: ["Competitive salary", "Stock options", "Remote work", "Health insurance"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and explore uncharted territories in technology.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Collaboration",
      description: "Great ideas come from diverse teams working together.",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Global Impact",
      description: "Our work benefits people and businesses worldwide.",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity and performance bonuses",
      icon: DollarSign
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and locations",
      icon: Globe
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: Heart
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development",
      icon: GraduationCap
    },
    {
      title: "Innovation Time",
      description: "20% time to work on passion projects and research",
      icon: Brain
    },
    {
      title: "Team Events",
      description: "Regular team building and social events",
      icon: Users
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Be part of the future. Help us build revolutionary technology that transforms 
                businesses and advances human consciousness.
              </p>
              <div className="mt-8">
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Work at Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join a team that's pushing the boundaries of what's possible in technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We take care of our team with comprehensive benefits and a great work environment
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join our mission to revolutionize technology and advance human consciousness
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium">
                          {position.department}
                        </span>
                        <span className="text-sm text-gray-400">{position.type}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {position.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4">
                        {position.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <DollarSign className="w-4 h-4" />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                              <Star className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/30">
                        <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  Our team members are passionate about pushing the boundaries of technology and making a positive 
                  impact on the world.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Cutting-edge research and development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Collaborative and inclusive environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300">Fast-paced and dynamic work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Strong focus on ethics and responsibility</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Us?</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    If you're passionate about technology and want to work on projects that could change the world, 
                    we'd love to hear from you. Even if you don't see a perfect match in our current openings, 
                    feel free to send us your resume.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;