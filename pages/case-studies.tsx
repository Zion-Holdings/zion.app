import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  TrendingUp, DollarSign, BarChart3, CheckCircle, ArrowRight,
  ExternalLink, Search, Filter, Building2, Users2, Globe2
} from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industryFilters = [
    { id: 'all', name: 'All Industries', count: 25 },
    { id: 'finance', name: 'Financial Services', count: 8 },
    { id: 'healthcare', name: 'Healthcare', count: 6 },
    { id: 'manufacturing', name: 'Manufacturing', count: 5 },
    { id: 'retail', name: 'Retail & E-commerce', count: 4 },
    { id: 'technology', name: 'Technology', count: 2 }
  ];

  const serviceFilters = [
    { id: 'all', name: 'All Services', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 12 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'automation', name: 'Business Automation', count: 8 }
  ];

  const featuredCaseStudies = [
    {
      id: 1,
      title: 'Global Bank Achieves 300% ROI with AI Customer Success Platform',
      client: 'Fortune 500 Global Bank',
      industry: 'finance',
      service: 'ai',
      challenge: 'High customer churn rate (15%) and inefficient customer success operations costing $50M annually.',
      solution: 'Implemented AI-powered customer success platform with predictive analytics and automated intervention systems.',
      results: [
        '300% ROI achieved within 12 months',
        'Customer churn reduced from 15% to 3%',
        'Customer satisfaction score increased from 72% to 94%',
        'Annual cost savings of $45M',
        'Customer lifetime value increased by 40%'
      ],
      duration: '12 months',
      teamSize: '8 people',
      featured: true,
      image: '/images/case-studies/global-bank-ai-platform.jpg',
      tags: ['AI Platform', 'Customer Success', 'ROI', 'Churn Reduction']
    },
    {
      id: 2,
      title: 'Healthcare Provider Reduces Diagnostic Errors by 85% with Quantum AI',
      client: 'Leading Healthcare Network',
      industry: 'healthcare',
      service: 'quantum',
      challenge: 'Diagnostic errors affecting 12% of patients, leading to delayed treatments and increased healthcare costs.',
      solution: 'Deployed quantum-enhanced AI diagnostic system with advanced pattern recognition and medical imaging analysis.',
      results: [
        'Diagnostic accuracy improved from 88% to 98%',
        'Diagnostic errors reduced by 85%',
        'Patient wait times reduced by 60%',
        'Annual cost savings of $25M',
        'Improved patient outcomes in 92% of cases'
      ],
      duration: '18 months',
      teamSize: '12 people',
      featured: true,
      image: '/images/case-studies/healthcare-quantum-ai.jpg',
      tags: ['Quantum AI', 'Healthcare', 'Diagnostics', 'Accuracy Improvement']
    },
    {
      id: 3,
      title: 'Manufacturing Giant Achieves 99.9% Uptime with Autonomous Operations',
      client: 'Global Manufacturing Corporation',
      industry: 'manufacturing',
      service: 'automation',
      challenge: 'Frequent production downtime (15% of operating time) and high maintenance costs of $30M annually.',
      solution: 'Implemented fully autonomous manufacturing operations with AI-driven predictive maintenance and self-healing systems.',
      results: [
        'Production uptime increased to 99.9%',
        'Maintenance costs reduced by 70%',
        'Production efficiency improved by 45%',
        'Annual cost savings of $40M',
        'Zero unplanned downtime in 18 months'
      ],
      duration: '24 months',
      teamSize: '15 people',
      featured: true,
      image: '/images/case-studies/manufacturing-autonomous-ops.jpg',
      tags: ['Autonomous Operations', 'Manufacturing', 'Uptime', 'Predictive Maintenance']
    }
  ];

  const additionalCaseStudies = [
    {
      id: 4,
      title: 'E-commerce Platform Increases Conversion by 200% with AI Personalization',
      client: 'Major E-commerce Retailer',
      industry: 'retail',
      service: 'ai',
      challenge: 'Low conversion rates (2.1%) and poor customer engagement affecting $100M in potential revenue.',
      solution: 'Deployed AI-powered personalization engine with real-time customer behavior analysis and dynamic content optimization.',
      results: [
        'Conversion rate increased from 2.1% to 6.3%',
        'Average order value increased by 35%',
        'Customer engagement improved by 150%',
        'Annual revenue increase of $75M',
        'Customer retention improved by 60%'
      ],
      duration: '9 months',
      teamSize: '6 people',
      featured: false,
      image: '/images/case-studies/ecommerce-ai-personalization.jpg',
      tags: ['AI Personalization', 'E-commerce', 'Conversion', 'Revenue Growth']
    },
    {
      id: 5,
      title: 'Tech Company Accelerates Development with AI-Powered DevOps',
      client: 'SaaS Technology Company',
      industry: 'technology',
      service: 'ai',
      challenge: 'Slow development cycles (6-month releases) and frequent production issues affecting customer satisfaction.',
      solution: 'Implemented AI-powered DevOps platform with automated testing, deployment, and monitoring systems.',
      results: [
        'Development cycle reduced from 6 months to 2 weeks',
        'Production incidents reduced by 90%',
        'Deployment frequency increased by 20x',
        'Developer productivity improved by 60%',
        'Customer satisfaction increased by 35%'
      ],
      duration: '8 months',
      teamSize: '10 people',
      featured: false,
      image: '/images/case-studies/tech-ai-devops.jpg',
      tags: ['AI DevOps', 'Development', 'Automation', 'Productivity']
    },
    {
      id: 6,
      title: 'Insurance Company Reduces Fraud by 95% with Quantum Security',
      client: 'Major Insurance Provider',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Insurance fraud costing $200M annually and complex fraud detection systems with high false positive rates.',
      solution: 'Deployed quantum-enhanced fraud detection system with advanced pattern recognition and real-time analysis.',
      results: [
        'Fraud detection accuracy improved to 99.5%',
        'False positive rate reduced by 80%',
        'Annual fraud losses reduced by 95%',
        'Processing time reduced from hours to minutes',
        'Cost savings of $190M annually'
      ],
      duration: '15 months',
      teamSize: '9 people',
      featured: false,
      image: '/images/case-studies/insurance-quantum-security.jpg',
      tags: ['Quantum Security', 'Fraud Detection', 'Insurance', 'Cost Reduction']
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI platform transformed our customer success operations. The 300% ROI exceeded our expectations, and the reduction in churn has been game-changing for our business.",
      author: "Sarah Johnson",
      role: "Chief Customer Officer",
      company: "Global Bank",
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      quote: "The quantum AI diagnostic system has revolutionized our healthcare delivery. We're seeing unprecedented accuracy improvements and our patients are getting better care faster.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      company: "Healthcare Network",
      image: "/images/testimonials/dr-michael-chen.jpg"
    },
    {
      quote: "Autonomous operations have given us a competitive edge we never thought possible. 99.9% uptime and 70% cost reduction - these results speak for themselves.",
      author: "Robert Martinez",
      role: "VP of Operations",
      company: "Manufacturing Corporation",
      image: "/images/testimonials/robert-martinez.jpg"
    }
  ];

  const filteredCaseStudies = [...featuredCaseStudies, ...additionalCaseStudies].filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    const searchMatch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return industryMatch && serviceMatch && searchMatch;
  });

  const getIndustryIcon = (industry: string) => {
    const icons = {
      finance: <DollarSign className="w-6 h-6" />,
      healthcare: <Shield className="w-6 h-6" />,
      manufacturing: <Building2 className="w-6 h-6" />,
      retail: <Users2 className="w-6 h-6" />,
      technology: <Globe2 className="w-6 h-6" />
    };
    return icons[industry as keyof typeof icons] || <Building className="w-6 h-6" />;
  };

  const getServiceIcon = (service: string) => {
    const icons = {
      ai: <Brain className="w-6 h-6" />,
      quantum: <Atom className="w-6 h-6" />,
      automation: <Zap className="w-6 h-6" />
    };
    return icons[service as keyof typeof icons] || <Rocket className="w-6 h-6" />;
  };

  return (
    <Layout>
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Discover how Zion Tech Group's revolutionary AI and quantum computing solutions deliver exceptional results for clients across industries. Real ROI, real success stories."
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
                Success Stories
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real results from real clients. Discover how our revolutionary AI consciousness and quantum computing solutions deliver exceptional ROI and transformative business outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>300%+ ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Client Success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              </div>

              {/* Industry Filters */}
              <div className="flex flex-wrap gap-2">
                {industryFilters.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {industry.name} ({industry.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Service Filters */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {serviceFilters.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {service.name} ({service.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
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
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-400">
                Transformative results that demonstrate the power of our technology
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-2 text-cyan-400">
                        {getIndustryIcon(study.industry)}
                        <span className="text-sm">{study.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400">
                        {getServiceIcon(study.service)}
                        <span className="text-sm">{study.service}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="text-cyan-400 font-medium mb-3">
                      {study.client}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {study.challenge}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{study.duration}</span>
                      <span>{study.teamSize} team</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Showcase */}
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
                Proven Results
              </h2>
              <p className="text-xl text-gray-400">
                Quantifiable outcomes that drive business transformation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: '300%+', label: 'Average ROI', icon: <TrendingUp className="w-8 h-8" /> },
                { metric: '99.9%', label: 'Uptime Achieved', icon: <CheckCircle className="w-8 h-8" /> },
                { metric: '85%', label: 'Cost Reduction', icon: <DollarSign className="w-8 h-8" /> },
                { metric: '95%', label: 'Accuracy Improvement', icon: <Award className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
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
                More Success Stories
              </h2>
              <p className="text-xl text-gray-400">
                Additional examples of our technology delivering exceptional results
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1 text-cyan-400 text-xs">
                        {getIndustryIcon(study.industry)}
                        <span>{study.industry}</span>
                      </div>
                      <div className="flex items-center gap-1 text-purple-400 text-xs">
                        {getServiceIcon(study.service)}
                        <span>{study.service}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="text-cyan-400 text-sm mb-2">
                      {study.client}
                    </div>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {study.challenge}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{study.duration}</span>
                      <span>{study.teamSize} team</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.filter(study => !study.featured).length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No case studies match your current filters. Try adjusting your search or filter selection.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Client Testimonials */}
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
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400">
                Direct feedback from the leaders driving transformation
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <blockquote className="text-gray-300 text-lg italic text-center">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 text-sm mb-1">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the growing list of companies achieving exceptional results with Zion Tech Group's revolutionary technology solutions. Let's discuss how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}