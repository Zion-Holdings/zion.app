import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, Star, TrendingUp, CheckCircle, Phone, Mail, MapPin, ArrowRight, Zap, Cpu, Database, Cloud, Palette, Handshake, Building, Network, Code, Server, Lock } from 'lucide-react';
import Link from 'next/link';

const PartnersPage: React.FC = () => {
  const partnerCategories = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Leading technology companies and platforms',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      description: 'Cloud providers and infrastructure solutions',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Cybersecurity and regulatory compliance partners',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai',
      name: 'AI & Research',
      description: 'AI research institutions and technology leaders',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const technologyPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      description: 'Azure cloud services and enterprise solutions',
      category: 'technology',
      partnership: 'Strategic Cloud Partner',
      benefits: ['Azure credits', 'Joint go-to-market', 'Technical support']
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      description: 'Cloud infrastructure and AI services',
      category: 'cloud',
      partnership: 'Premier Consulting Partner',
      benefits: ['AWS credits', 'Training programs', 'Solution architect support']
    },
    {
      name: 'Google Cloud',
      logo: 'GC',
      description: 'AI/ML platforms and cloud services',
      category: 'cloud',
      partnership: 'Technology Partner',
      benefits: ['GCP credits', 'AI/ML expertise', 'Marketplace listing']
    },
    {
      name: 'IBM',
      logo: 'IBM',
      description: 'Quantum computing and enterprise AI',
      category: 'ai',
      partnership: 'Quantum Research Partner',
      benefits: ['Quantum access', 'Research collaboration', 'Enterprise solutions']
    },
    {
      name: 'NVIDIA',
      logo: 'NV',
      description: 'GPU computing and AI acceleration',
      category: 'technology',
      partnership: 'AI Technology Partner',
      benefits: ['GPU resources', 'AI frameworks', 'Developer support']
    },
    {
      name: 'Intel',
      logo: 'INT',
      description: 'CPU optimization and AI acceleration',
      category: 'technology',
      partnership: 'Hardware Partner',
      benefits: ['Hardware access', 'Optimization tools', 'Technical training']
    }
  ];

  const securityPartners = [
    {
      name: 'CrowdStrike',
      logo: 'CS',
      description: 'Endpoint security and threat intelligence',
      category: 'security',
      partnership: 'Security Partner',
      benefits: ['Security tools', 'Threat intelligence', 'Joint solutions']
    },
    {
      name: 'Palo Alto Networks',
      logo: 'PAN',
      description: 'Network security and cloud protection',
      category: 'security',
      partnership: 'Cybersecurity Partner',
      benefits: ['Security platforms', 'Threat prevention', 'Compliance tools']
    },
    {
      name: 'Okta',
      logo: 'OK',
      description: 'Identity and access management',
      category: 'security',
      partnership: 'Identity Partner',
      benefits: ['SSO solutions', 'MFA tools', 'Compliance support']
    }
  ];

  const researchPartners = [
    {
      name: 'MIT',
      logo: 'MIT',
      description: 'AI research and quantum computing',
      category: 'ai',
      partnership: 'Research Institution Partner',
      benefits: ['Research collaboration', 'Student programs', 'Technology transfer']
    },
    {
      name: 'Stanford University',
      logo: 'SU',
      description: 'Machine learning and space technology',
      category: 'ai',
      partnership: 'Academic Partner',
      benefits: ['Research projects', 'Talent pipeline', 'Innovation labs']
    },
    {
      name: 'NASA',
      logo: 'NASA',
      description: 'Space technology and research',
      category: 'ai',
      partnership: 'Government Partner',
      benefits: ['Space research', 'Technology licensing', 'Mission support']
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customer networks through our partner ecosystem.'
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Innovation Acceleration',
      description: 'Collaborate on cutting-edge research and development projects.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Expert Network',
      description: 'Connect with industry experts and thought leaders across technology domains.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Market Credibility',
      description: 'Enhance your market position through strategic partnerships and joint solutions.'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Technology Integration',
      description: 'Integrate your technology with our AI and quantum platforms',
      benefits: ['API access', 'Technical documentation', 'Developer support'],
      icon: <Code className="w-8 h-8" />
    },
    {
      type: 'Joint Go-to-Market',
      description: 'Collaborate on sales and marketing initiatives',
      benefits: ['Joint marketing campaigns', 'Sales enablement', 'Market expansion'],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      type: 'Research & Development',
      description: 'Partner on innovative research projects',
      benefits: ['Research funding', 'IP sharing', 'Publication opportunities'],
      icon: <Brain className="w-8 h-8" />
    },
    {
      type: 'Channel Partnership',
      description: 'Resell and distribute our solutions',
      benefits: ['Margin opportunities', 'Training programs', 'Marketing support'],
      icon: <Network className="w-8 h-8" />
    }
  ];

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
                Our Partners
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Building the future together through strategic partnerships with leading technology companies, 
                research institutions, and innovative organizations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#partnerships" className="btn-primary">
                  <Handshake className="w-5 h-5 mr-2" />
                  Explore Partnerships
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Become a Partner
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Categories */}
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
                Partnership Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We partner across multiple technology domains to create comprehensive solutions
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section id="partnerships" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Leading technology companies powering our innovative solutions
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{partner.name}</h3>
                    <p className="text-cyan-400 text-sm">{partner.partnership}</p>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-4">{partner.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Partners */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Security & Compliance Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Ensuring enterprise-grade security and regulatory compliance
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{partner.name}</h3>
                    <p className="text-purple-400 text-sm">{partner.partnership}</p>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-4">{partner.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 text-purple-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Partners */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Research & Academic Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Collaborating with leading research institutions and universities
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{partner.name}</h3>
                    <p className="text-pink-400 text-sm">{partner.partnership}</p>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-4">{partner.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 text-pink-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
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
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
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
                Partnership Types
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Multiple ways to collaborate and grow together
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-cyan-400">{type.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{type.type}</h3>
                      <p className="text-gray-300 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {benefit}
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
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's explore how we can work together to create innovative solutions 
                and drive technological advancement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Handshake className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                </Link>
                <a href="mailto:partnerships@ziontechgroup.com" className="btn-secondary">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Partnerships Users
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