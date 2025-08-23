import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Star, 
  Award, 
  TrendingUp, 
  Building,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Atom,
  Rocket,
  Cloud
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerCategories = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Leading technology companies providing cutting-edge solutions and infrastructure.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing Partners',
      description: 'Specialized partners in quantum computing hardware and software solutions.',
      icon: Atom,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'space',
      name: 'Space Technology Partners',
      description: 'Partners specializing in satellite technology, space exploration, and aerospace solutions.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'security',
      name: 'Cybersecurity Partners',
      description: 'Security experts providing advanced threat protection and compliance solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure Partners',
      description: 'Cloud providers offering scalable infrastructure and platform services.',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'consulting',
      name: 'Consulting Partners',
      description: 'Strategic consulting partners helping organizations implement our solutions.',
      icon: Users,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const featuredPartners = [
    {
      name: 'Microsoft Azure',
      category: 'cloud',
      logo: '/images/partners/microsoft-azure.png',
      description: 'Strategic cloud infrastructure partner providing scalable Azure services for our AI and quantum computing platforms.',
      benefits: ['Global infrastructure', 'AI/ML services', 'Quantum computing access', 'Enterprise support'],
      website: 'https://azure.microsoft.com',
      partnershipLevel: 'Strategic'
    },
    {
      name: 'IBM Quantum',
      category: 'quantum',
      logo: '/images/partners/ibm-quantum.png',
      description: 'Leading quantum computing partner providing access to quantum processors and quantum software development tools.',
      benefits: ['Quantum processors', 'Qiskit framework', 'Quantum education', 'Research collaboration'],
      website: 'https://quantum-computing.ibm.com',
      partnershipLevel: 'Strategic'
    },
    {
      name: 'SpaceX',
      category: 'space',
      logo: '/images/partners/spacex.png',
      description: 'Space technology partner for satellite launches and space infrastructure development.',
      benefits: ['Satellite launches', 'Space infrastructure', 'Innovation collaboration', 'Global reach'],
      website: 'https://www.spacex.com',
      partnershipLevel: 'Strategic'
    },
    {
      name: 'NVIDIA',
      category: 'technology',
      logo: '/images/partners/nvidia.png',
      description: 'AI and GPU technology partner providing cutting-edge hardware for our machine learning platforms.',
      benefits: ['GPU technology', 'AI frameworks', 'Performance optimization', 'Research partnership'],
      website: 'https://www.nvidia.com',
      partnershipLevel: 'Technology'
    },
    {
      name: 'CrowdStrike',
      category: 'security',
      logo: '/images/partners/crowdstrike.png',
      description: 'Cybersecurity partner providing advanced threat detection and response capabilities.',
      benefits: ['Threat intelligence', 'Endpoint protection', 'Incident response', 'Security expertise'],
      website: 'https://www.crowdstrike.com',
      partnershipLevel: 'Security'
    },
    {
      name: 'McKinsey & Company',
      category: 'consulting',
      logo: '/images/partners/mckinsey.png',
      description: 'Strategic consulting partner helping enterprises implement our technology solutions.',
      benefits: ['Strategic guidance', 'Change management', 'Industry expertise', 'Global reach'],
      website: 'https://www.mckinsey.com',
      partnershipLevel: 'Consulting'
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access to new markets and customers through our global partner network.'
    },
    {
      icon: Star,
      title: 'Innovation Leadership',
      description: 'Stay ahead with cutting-edge AI, quantum, and space technology solutions.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated technical and business support from our partnership team.'
    },
    {
      icon: Award,
      title: 'Market Recognition',
      description: 'Gain credibility and recognition in the technology industry.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your business globally through our international presence.'
    },
    {
      icon: Zap,
      title: 'Technology Access',
      description: 'Early access to our latest innovations and research developments.'
    }
  ];

  const partnershipLevels = [
    {
      name: 'Strategic Partner',
      description: 'Deep integration and joint go-to-market strategies',
      benefits: [
        'Exclusive market access',
        'Joint product development',
        'Revenue sharing agreements',
        'Dedicated partnership team',
        'Early technology access',
        'Co-marketing campaigns'
      ],
      requirements: [
        'Annual revenue commitment',
        'Technical integration',
        'Joint business planning',
        'Regular executive meetings'
      ]
    },
    {
      name: 'Technology Partner',
      description: 'Technical integration and solution development',
      benefits: [
        'API access and documentation',
        'Technical support',
        'Joint solution development',
        'Marketing support',
        'Training and certification'
      ],
      requirements: [
        'Technical integration',
        'Solution development',
        'Regular technical reviews'
      ]
    },
    {
      name: 'Reseller Partner',
      description: 'Sales and distribution partnership',
      benefits: [
        'Competitive pricing',
        'Sales training and support',
        'Marketing materials',
        'Lead generation support',
        'Commission structure'
      ],
      requirements: [
        'Sales commitment',
        'Customer support capability',
        'Regular business reviews'
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Partner With Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join our global partner ecosystem and help shape the future of AI, quantum computing, 
                and space technology. Together, we can achieve extraordinary results.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#partnership-opportunities"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Opportunities
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Become a Partner
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We partner with organizations across various sectors to deliver comprehensive solutions 
                and drive innovation in technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                      <p className="text-gray-400 leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet some of our strategic partners who are helping us revolutionize technology 
                and drive innovation across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-3 inline-block">
                            {partner.partnershipLevel}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {partner.name}
                          </h3>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{partner.description}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-400/20"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <span className="text-sm text-gray-500">
                          {partnerCategories.find(c => c.id === partner.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Discover the advantages of joining our partner ecosystem and how we can help 
                grow your business together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section id="partnership-opportunities" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Levels
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business goals and commitment level. 
                We offer flexible options to meet your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipLevels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3">{level.name}</h3>
                      <p className="text-gray-300 mb-6">{level.description}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Benefits</h4>
                        <ul className="space-y-2">
                          {level.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Requirements</h4>
                        <ul className="space-y-2">
                          {level.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-300">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href="/contact?partnership-level=${encodeURIComponent(level.name)}"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        Apply for Partnership
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our global partner ecosystem and help us revolutionize technology. 
                Let's discuss how we can grow together and create extraordinary value for our customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                </a>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Email Partnerships Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnersPage;