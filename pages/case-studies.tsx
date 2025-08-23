import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette,
  FileText, Building, TrendingUp as Chart, DollarSign,
  Clock, Users as Team, Target as Goal, CheckCircle as Success
} from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: <Building className="w-5 h-5" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Shield className="w-5 h-5" /> },
    { id: 'finance', name: 'Financial Services', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Cpu className="w-5 h-5" /> },
    { id: 'retail', name: 'Retail & E-commerce', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'government', name: 'Government', icon: <Building className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology', icon: <Rocket className="w-5 h-5" /> }
  ];

  const technologies = [
    { id: 'all', name: 'All Technologies', icon: <Star className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Care Optimization',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      technology: 'ai',
      challenge: 'MedTech Solutions faced challenges with patient care coordination, leading to increased wait times and reduced patient satisfaction scores.',
      solution: 'Implemented Zion Tech Group\'s AI consciousness platform to optimize patient scheduling, resource allocation, and care coordination.',
      results: [
        '40% reduction in patient wait times',
        '25% improvement in patient satisfaction scores',
        '30% increase in operational efficiency',
        '$2.5M annual cost savings'
      ],
      duration: '6 months',
      teamSize: '15 people',
      roi: '350%',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading Platform',
      company: 'Global Finance Corp.',
      industry: 'finance',
      technology: 'quantum',
      challenge: 'Global Finance Corp. needed to implement quantum-resistant security for their high-frequency trading platform to protect against future quantum attacks.',
      solution: 'Deployed Zion Tech Group\'s quantum cybersecurity platform with post-quantum cryptography and quantum-resistant algorithms.',
      results: [
        '100% quantum-resistant security implementation',
        'Zero security breaches in 18 months',
        '15% improvement in trading performance',
        'Regulatory compliance achieved'
      ],
      duration: '8 months',
      teamSize: '20 people',
      roi: '280%',
      featured: false
    },
    {
      id: 3,
      title: 'Space Resource Intelligence for Mining Operations',
      company: 'Asteroid Mining Ltd.',
      industry: 'technology',
      technology: 'space',
      challenge: 'Asteroid Mining Ltd. required advanced space resource intelligence to identify and analyze potential mining targets in near-Earth space.',
      solution: 'Integrated Zion Tech Group\'s space resource intelligence platform with AI-powered analysis and autonomous satellite systems.',
      results: [
        '90% accuracy in resource identification',
        '60% reduction in exploration costs',
        '3 new viable mining sites discovered',
        '$50M in potential resource value identified'
      ],
      duration: '12 months',
      teamSize: '25 people',
      roi: '420%',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      company: 'Manufacturing Plus Co.',
      industry: 'manufacturing',
      technology: 'ai',
      challenge: 'Manufacturing Plus struggled with supply chain inefficiencies, leading to production delays and increased operational costs.',
      solution: 'Deployed Zion Tech Group\'s AI-powered supply chain optimization platform with predictive analytics and autonomous decision-making.',
      results: [
        '35% reduction in supply chain costs',
        '50% improvement in delivery times',
        '20% increase in production efficiency',
        '$1.8M annual savings'
      ],
      duration: '7 months',
      teamSize: '18 people',
      roi: '320%',
      featured: false
    },
    {
      id: 5,
      title: 'Zero-Trust Security Implementation',
      company: 'Government Data Services',
      industry: 'government',
      technology: 'security',
      challenge: 'Government Data Services needed to implement comprehensive zero-trust security architecture to protect sensitive government data.',
      solution: 'Implemented Zion Tech Group\'s zero-trust security platform with continuous monitoring and adaptive security policies.',
      results: [
        '100% zero-trust architecture implementation',
        '99.9% security incident reduction',
        'Compliance with all government security standards',
        'Enhanced data protection capabilities'
      ],
      duration: '10 months',
      teamSize: '22 people',
      roi: '250%',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Modernization',
      company: 'TechStart Innovations',
      industry: 'technology',
      technology: 'cloud',
      challenge: 'TechStart Innovations needed to modernize their legacy infrastructure to support rapid scaling and improved performance.',
      solution: 'Migrated to Zion Tech Group\'s quantum-secure cloud infrastructure with AI-powered optimization and automated scaling.',
      results: [
        '300% improvement in system performance',
        '80% reduction in infrastructure costs',
        '99.99% uptime achieved',
        'Seamless scaling to 10x user base'
      ],
      duration: '9 months',
      teamSize: '16 people',
      roi: '400%',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const technologyMatch = selectedTechnology === 'all' || study.technology === selectedTechnology;
    return industryMatch && technologyMatch;
  });

  const featuredStudy = caseStudies.find(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <Layout seo={{
      title: 'Case Studies - Zion Tech Group | Customer Success Stories',
      description: 'Explore real-world case studies showcasing how Zion Tech Group solutions drive business transformation and deliver measurable ROI.',
      keywords: 'case studies, customer success, ROI, business transformation, AI success stories, quantum computing case studies',
      url: 'https://ziontechgroup.com/case-studies'
    }}>
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
                Customer Success Stories
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how organizations across industries are transforming their businesses 
                with Zion Tech Group's cutting-edge AI, quantum, and space technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#featured" className="btn-primary">
                  <FileText className="w-5 h-5 mr-2" />
                  Read Featured Case
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Start Your Success Story
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredStudy && (
          <section id="featured" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">Featured Case Study</h2>
                <p className="text-gray-400">Our most impactful customer success story</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {industries.find(i => i.id === featuredStudy.industry)?.name}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {technologies.find(t => t.id === featuredStudy.technology)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {featuredStudy.title}
                      </h3>
                      
                      <p className="text-cyan-400 text-lg mb-4">{featuredStudy.company}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                          <p className="text-gray-300 leading-relaxed">{featuredStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{featuredStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Results & Impact</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {featuredStudy.results.map((result, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/30">
                        <h4 className="text-lg font-semibold text-white mb-4">Project Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Duration:</span>
                            <span className="text-white font-medium">{featuredStudy.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Team Size:</span>
                            <span className="text-white font-medium">{featuredStudy.teamSize}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 font-bold">{featuredStudy.roi}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full btn-primary">
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Industry Filters */}
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                    }`}
                  >
                    {industry.icon}
                    {industry.name}
                  </button>
                ))}
              </div>
              
              {/* Technology Filters */}
              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <button
                    key={technology.id}
                    onClick={() => setSelectedTechnology(technology.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedTechnology === technology.id
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-purple-500/30'
                    }`}
                  >
                    {technology.icon}
                    {technology.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
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
                All Case Studies
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore comprehensive case studies across industries and technologies
              </p>
            </motion.div>
            
            {regularStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {industries.find(i => i.id === study.industry)?.name}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {technologies.find(t => t.id === study.technology)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-cyan-400 text-sm mb-4">{study.company}</p>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {study.challenge}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {study.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Team className="w-3 h-3" />
                          {study.teamSize}
                        </span>
                        <span className="flex items-center gap-1">
                          <Chart className="w-3 h-3" />
                          {study.roi} ROI
                        </span>
                      </div>
                      
                      <button className="w-full btn-primary text-sm">
                        Read Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No case studies match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedTechnology('all');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Success Metrics */}
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
                Proven Results
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our solutions consistently deliver measurable business impact
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Successful Implementations', icon: <CheckCircle className="w-8 h-8" /> },
                { number: '300%', label: 'Average ROI', icon: <Chart className="w-8 h-8" /> },
                { number: '99.9%', label: 'Customer Satisfaction', icon: <Star className="w-8 h-8" /> },
                { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" /> }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                  <div className="text-gray-400">{metric.label}</div>
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations that have transformed their businesses 
                with Zion Tech Group's innovative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                <Link href="/services" className="btn-secondary">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;