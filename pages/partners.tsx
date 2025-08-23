import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, Target, TrendingUp, Users, Globe, 
  ArrowRight, Star, Shield, CheckCircle, Zap,
  Infinity, Eye, Sparkles, Clock, Brain, Atom,
  Rocket, Cpu, Database, Cloud, BarChart3, Building,
  Award, Lightbulb, Code, Server, Lock
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const strategicPartners = [
    {
      name: "Microsoft Azure",
      logo: "/api/placeholder/200/100",
      description: "Cloud infrastructure and AI services partnership",
      category: "Cloud & AI",
      benefits: [
        "Joint AI development initiatives",
        "Cloud infrastructure optimization",
        "Enterprise solution integration",
        "Go-to-market collaboration"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      description: "Cloud computing and machine learning partnership",
      category: "Cloud & ML",
      benefits: [
        "ML model deployment",
        "Serverless architecture",
        "Global infrastructure access",
        "Cost optimization solutions"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      description: "AI and quantum computing collaboration",
      category: "AI & Quantum",
      benefits: [
        "Quantum computing research",
        "AI model training",
        "Data analytics platform",
        "Innovation lab access"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "IBM",
      logo: "/api/placeholder/200/100",
      description: "Enterprise AI and quantum solutions",
      category: "Enterprise AI",
      benefits: [
        "Watson AI integration",
        "Quantum computing access",
        "Enterprise consulting",
        "Research collaboration"
      ],
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const technologyPartners = [
    {
      name: "NVIDIA",
      category: "AI Hardware",
      description: "GPU acceleration and AI computing",
      benefits: ["GPU optimization", "AI training acceleration", "Performance tuning"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Intel",
      category: "Processor Technology",
      description: "CPU optimization and AI acceleration",
      benefits: ["CPU optimization", "AI acceleration", "Performance tuning"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Oracle",
      category: "Database & Cloud",
      description: "Enterprise database solutions",
      benefits: ["Database optimization", "Cloud migration", "Enterprise support"],
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Cisco",
      category: "Networking",
      description: "Network infrastructure and security",
      benefits: ["Network optimization", "Security solutions", "Infrastructure design"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const startupPartners = [
    {
      name: "AI Startup Inc.",
      category: "AI Innovation",
      description: "Cutting-edge AI research and development",
      benefits: ["Joint R&D", "Technology licensing", "Market access"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Quantum Tech Labs",
      category: "Quantum Computing",
      description: "Next-generation quantum solutions",
      benefits: ["Quantum research", "Algorithm development", "Hardware access"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Space Innovations",
      category: "Space Technology",
      description: "Satellite and space resource technology",
      benefits: ["Satellite technology", "Space research", "Resource mapping"],
      color: "from-pink-500 to-red-500"
    }
  ];

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Strategic Collaboration",
      description: "Joint development of innovative solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Acceleration",
      description: "Faster time-to-market for new technologies",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expanded market access and distribution",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Enhanced product quality and reliability",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partnership",
      description: "Joint development of innovative technologies",
      benefits: ["Shared R&D", "Technology licensing", "Joint patents"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Go-to-Market Partnership",
      description: "Collaborative sales and marketing efforts",
      benefits: ["Joint marketing", "Sales collaboration", "Market expansion"],
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Channel Partnership",
      description: "Distribution and reseller relationships",
      benefits: ["Channel sales", "Training programs", "Support collaboration"],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Strategic Alliance",
      description: "Long-term strategic collaboration",
      benefits: ["Joint ventures", "Investment opportunities", "Strategic planning"],
      icon: Handshake,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Handshake className="w-4 h-4 mr-2" />
                Strategic Partnerships
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Our Partners
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Building the future of technology through strategic partnerships, 
                collaborative innovation, and shared success with industry leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strategic Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our flagship partnerships with industry leaders that drive innovation 
                and deliver exceptional value to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {strategicPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Building className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                      <p className="text-blue-400 font-semibold mb-3">{partner.category}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{partner.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Partnership Benefits</h4>
                        <ul className="space-y-2">
                          {partner.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Collaborating with technology leaders to deliver cutting-edge 
                solutions and optimize performance across all platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologyPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="space-y-1">
                    {partner.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <p key={benefitIndex} className="text-xs text-gray-400">
                        • {benefit}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Partners */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partnering with innovative startups to accelerate breakthrough 
                technologies and bring cutting-edge solutions to market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {startupPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{partner.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{partner.category}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{partner.description}</p>
                  
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <p key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of partnering with Zion Tech Group 
                and how we can accelerate your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Models
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible partnership models designed to meet your business needs 
                and drive mutual success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits</h4>
                        <ul className="space-y-1">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of strategic partners and discover how we can 
                accelerate innovation and drive mutual success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Handshake className="w-5 h-5 mr-2" />
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Partnership Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnersPage;