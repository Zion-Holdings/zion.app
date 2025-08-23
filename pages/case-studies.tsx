import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, Users, TrendingUp, Brain, Atom, Rocket, Shield, 
  Cloud, Search, Filter, ExternalLink, ArrowRight, Star,
  Globe, Cpu, Database, Zap, Target, Building, Factory,
  Lightbulb, CheckCircle, BarChart3, Clock, DollarSign,
  ShoppingBag, Heart
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "AI Consciousness Platform Transforms Customer Service",
      client: "Global Retail Corporation",
      industry: "Retail",
      service: "AI & Consciousness",
      excerpt: "Implementation of AI consciousness platform resulted in 300% improvement in customer satisfaction and 85% reduction in support ticket resolution time.",
      challenge: "Global Retail Corporation was struggling with high customer service costs and declining satisfaction scores. Their traditional support system couldn't handle the volume of inquiries, leading to long wait times and frustrated customers.",
      solution: "We implemented our AI Consciousness Platform, which provides emotionally intelligent customer support that understands context, emotions, and customer needs. The system integrates with existing CRM systems and provides 24/7 support.",
      results: [
        "300% improvement in customer satisfaction scores",
        "85% reduction in support ticket resolution time",
        "60% decrease in customer service costs",
        "24/7 automated support coverage",
        "Real-time emotional intelligence analysis"
      ],
      metrics: {
        customerSatisfaction: 95,
        costReduction: 60,
        responseTime: 85,
        automationRate: 90
      },
      duration: "6 months",
      teamSize: "8 people",
      featured: true,
      image: "/api/placeholder/800/400",
      tags: ["AI Consciousness", "Customer Service", "Automation", "Cost Reduction"]
    },
    {
      id: 2,
      title: "Quantum Computing Accelerates Drug Discovery",
      client: "PharmaTech Solutions",
      industry: "Healthcare",
      service: "Quantum Computing",
      excerpt: "Quantum computing platform reduced drug discovery timeline from 5 years to 18 months, saving millions in research costs.",
      challenge: "PharmaTech Solutions was facing increasing pressure to accelerate drug discovery while reducing costs. Traditional computational methods were hitting limitations in simulating complex molecular interactions.",
      solution: "We deployed our Quantum Computing Platform with specialized algorithms for molecular simulation and drug discovery. The system integrates with existing research workflows and provides quantum-enhanced computational power.",
      results: [
        "70% reduction in drug discovery timeline",
        "500x faster molecular simulations",
        "40% improvement in drug efficacy prediction",
        "Significant cost savings in research",
        "Enhanced accuracy in clinical trials"
      ],
      metrics: {
        timeReduction: 70,
        performanceGain: 500,
        accuracyImprovement: 40,
        costSavings: 35
      },
      duration: "12 months",
      teamSize: "12 people",
      featured: false,
      image: "/api/placeholder/800/400",
      tags: ["Quantum Computing", "Drug Discovery", "Healthcare", "Research"]
    },
    {
      id: 3,
      title: "Space Resource Intelligence Optimizes Mining Operations",
      client: "Asteroid Mining Corp",
      industry: "Space Technology",
      service: "Space Technology",
      excerpt: "Space resource intelligence platform identified $2.5 billion worth of resources and optimized extraction strategies.",
      challenge: "Asteroid Mining Corp needed to identify valuable resources in near-Earth asteroids and develop efficient extraction strategies. Traditional methods were inefficient and costly.",
      solution: "We implemented our Space Resource Intelligence Platform, which combines satellite data, AI analysis, and resource optimization algorithms to identify and analyze space resources.",
      results: [
        "$2.5 billion in identified resources",
        "80% improvement in resource identification accuracy",
        "60% reduction in exploration costs",
        "Optimized extraction strategies",
        "Real-time resource monitoring"
      ],
      metrics: {
        resourceValue: 2500,
        accuracyImprovement: 80,
        costReduction: 60,
        efficiencyGain: 75
      },
      duration: "18 months",
      teamSize: "15 people",
      featured: false,
      image: "/api/placeholder/800/400",
      tags: ["Space Technology", "Resource Mining", "AI Analysis", "Optimization"]
    },
    {
      id: 4,
      title: "Zero Trust Security Architecture Protects Financial Data",
      client: "Global Bank International",
      industry: "Financial Services",
      service: "Cybersecurity",
      excerpt: "Zero trust security implementation achieved 99.99% threat detection rate and eliminated data breaches.",
      challenge: "Global Bank International was experiencing increasing cyber threats and needed a comprehensive security solution that could protect sensitive financial data while maintaining compliance.",
      solution: "We implemented our Zero Trust Security Architecture, which provides comprehensive threat detection, access control, and continuous monitoring across all systems and users.",
      results: [
        "99.99% threat detection rate",
        "Zero data breaches since implementation",
        "100% compliance with financial regulations",
        "Real-time threat response",
        "Enhanced customer trust"
      ],
      metrics: {
        threatDetection: 99.99,
        dataBreaches: 0,
        complianceRate: 100,
        responseTime: 95
      },
      duration: "9 months",
      teamSize: "10 people",
      featured: false,
      image: "/api/placeholder/800/400",
      tags: ["Cybersecurity", "Zero Trust", "Financial Services", "Compliance"]
    },
    {
      id: 5,
      title: "Quantum Cloud Infrastructure Scales Manufacturing",
      client: "Advanced Manufacturing Inc",
      industry: "Manufacturing",
      service: "Cloud Infrastructure",
      excerpt: "Quantum-enhanced cloud platform increased manufacturing efficiency by 150% and reduced operational costs by 40%.",
      challenge: "Advanced Manufacturing Inc needed to scale their operations while reducing costs and improving efficiency. Their existing infrastructure couldn't handle the increased load.",
      solution: "We deployed our Quantum Cloud Infrastructure, which provides quantum-enhanced computing power, AI-driven optimization, and scalable resources for manufacturing operations.",
      results: [
        "150% increase in manufacturing efficiency",
        "40% reduction in operational costs",
        "99.9% uptime guarantee",
        "Real-time optimization",
        "Scalable infrastructure"
      ],
      metrics: {
        efficiencyGain: 150,
        costReduction: 40,
        uptime: 99.9,
        scalability: 200
      },
      duration: "8 months",
      teamSize: "9 people",
      featured: false,
      image: "/api/placeholder/800/400",
      tags: ["Cloud Infrastructure", "Manufacturing", "Quantum Computing", "Optimization"]
    },
    {
      id: 6,
      title: "AI Autonomous Research Platform Accelerates Innovation",
      client: "Research Institute of Technology",
      industry: "Research & Development",
      service: "AI & Consciousness",
      excerpt: "Autonomous research platform increased research output by 300% and accelerated breakthrough discoveries.",
      challenge: "The Research Institute of Technology needed to accelerate research output and make breakthrough discoveries faster. Traditional research methods were slow and limited by human capacity.",
      solution: "We implemented our AI Autonomous Research Platform, which provides autonomous research capabilities, data analysis, and hypothesis generation across multiple domains.",
      results: [
        "300% increase in research output",
        "50% faster breakthrough discoveries",
        "Automated hypothesis generation",
        "Cross-domain research insights",
        "Enhanced collaboration capabilities"
      ],
      metrics: {
        researchOutput: 300,
        discoverySpeed: 50,
        automationRate: 85,
        collaborationEfficiency: 120
      },
      duration: "14 months",
      teamSize: "11 people",
      featured: false,
      image: "/api/placeholder/800/400",
      tags: ["AI Research", "Automation", "Innovation", "Collaboration"]
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: caseStudies.length },
    { id: 'retail', name: 'Retail', icon: ShoppingBag, count: caseStudies.filter(cs => cs.industry.toLowerCase().includes('retail')).length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: caseStudies.filter(cs => cs.industry.toLowerCase().includes('health')).length },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: caseStudies.filter(cs => cs.industry.toLowerCase().includes('space')).length },
    { id: 'financial', name: 'Financial Services', icon: DollarSign, count: caseStudies.filter(cs => cs.industry.toLowerCase().includes('financial')).length },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: caseStudies.filter(cs => cs.industry.toLowerCase().includes('manufacturing')).length },
    { id: 'research', name: 'Research & Development', icon: Lightbulb, count: caseStudies.filter(cs => cs.industry.toLowerCase().includes('research')).length }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Star, count: caseStudies.length },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, count: caseStudies.filter(cs => cs.service.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: caseStudies.filter(cs => cs.service.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: caseStudies.filter(cs => cs.service.toLowerCase().includes('space')).length },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: caseStudies.filter(cs => cs.service.toLowerCase().includes('cyber')).length },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: caseStudies.filter(cs => cs.service.toLowerCase().includes('cloud')).length }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || 
                           cs.industry.toLowerCase().includes(selectedIndustry.toLowerCase());
    const matchesService = selectedService === 'all' || 
                          cs.service.toLowerCase().includes(selectedService.toLowerCase());
    return matchesSearch && matchesIndustry && matchesService;
  });

  const featuredCaseStudy = filteredCaseStudies.find(cs => cs.featured);
  const regularCaseStudies = filteredCaseStudies.filter(cs => !cs.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-6">
                <Award className="w-full h-full text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover how Zion Tech Group's innovative solutions have transformed businesses across industries, delivering measurable results and breakthrough outcomes.
              </p>
              
              {/* Search and Filters */}
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-gray-400 text-sm font-medium">Industry:</span>
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 flex items-center space-x-1 ${
                          selectedIndustry === industry.id
                            ? 'bg-cyan-500 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }`}
                      >
                        <industry.icon className="w-3 h-3" />
                        <span>{industry.name}</span>
                        <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                          {industry.count}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-gray-400 text-sm font-medium">Service:</span>
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 flex items-center space-x-1 ${
                          selectedService === service.id
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }`}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                        <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                          {service.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Featured Success Story</h2>
                <p className="text-gray-400">Our most impactful transformation and breakthrough implementation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="w-full h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Globe className="w-32 h-32 text-cyan-400" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                        {featuredCaseStudy.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredCaseStudy.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{featuredCaseStudy.excerpt}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{featuredCaseStudy.metrics.customerSatisfaction}%</div>
                        <div className="text-gray-400 text-xs">Satisfaction</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">{featuredCaseStudy.metrics.costReduction}%</div>
                        <div className="text-gray-400 text-xs">Cost Reduction</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Client:</span> {featuredCaseStudy.client}
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Duration:</span> {featuredCaseStudy.duration}
                      </div>
                    </div>
                    
                    <a
                      href={`/case-studies/${featuredCaseStudy.id}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-gray-400">Explore our comprehensive portfolio of successful implementations</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Globe className="w-24 h-24 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {caseStudy.industry}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                        {caseStudy.service}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {caseStudy.excerpt}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-2 bg-gray-800/30 rounded-lg">
                        <div className="text-lg font-bold text-cyan-400">{caseStudy.metrics.customerSatisfaction || caseStudy.metrics.efficiencyGain || caseStudy.metrics.threatDetection}%</div>
                        <div className="text-gray-400 text-xs">Improvement</div>
                      </div>
                      <div className="text-center p-2 bg-gray-800/30 rounded-lg">
                        <div className="text-lg font-bold text-purple-400">{caseStudy.metrics.costReduction}%</div>
                        <div className="text-gray-400 text-xs">Cost Reduction</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <span><Building className="w-4 h-4 inline mr-1" />{caseStudy.client}</span>
                      <span><Clock className="w-4 h-4 inline mr-1" />{caseStudy.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {regularCaseStudies.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No case studies found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Collective Impact</h2>
              <p className="text-gray-400">The combined results of all our successful implementations</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'from-yellow-500 to-orange-500' },
                { label: 'Average Cost Reduction', value: '45%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
                { label: 'Performance Improvement', value: '200%', icon: Zap, color: 'from-blue-500 to-cyan-500' },
                { label: 'Implementation Success', value: '100%', icon: CheckCircle, color: 'from-purple-500 to-pink-500' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl p-5 mx-auto mb-4`}>
                    <metric.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the ranks of successful companies that have revolutionized their operations with Zion Tech Group's innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;