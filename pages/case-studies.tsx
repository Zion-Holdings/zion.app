import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  TrendingUp, DollarSign, Clock, BarChart3
} from 'lucide-react';

export default function CaseStudiesPage() {
  const featuredCaseStudies = [
    {
      title: 'AI Consciousness Evolution Platform',
      client: 'Global Tech Corporation',
      industry: 'Technology',
      challenge: 'Develop an AI system capable of understanding and responding to human emotions with genuine consciousness',
      solution: 'Implemented our revolutionary AI consciousness evolution platform with quantum neural networks',
      results: [
        '95% improvement in emotional intelligence accuracy',
        '40% reduction in customer service response time',
        '$2.5M annual cost savings',
        'Industry-leading AI consciousness benchmark'
      ],
      metrics: {
        accuracy: '95%',
        efficiency: '40%',
        savings: '$2.5M',
        timeline: '18 months'
      },
      image: '/images/case-studies/ai-consciousness-platform.jpg',
      slug: 'ai-consciousness-evolution-platform-case-study',
      featured: true
    },
    {
      title: 'Quantum Cybersecurity Infrastructure',
      client: 'Fortune 500 Financial Institution',
      industry: 'Financial Services',
      challenge: 'Protect critical financial data against quantum computing threats and advanced cyber attacks',
      solution: 'Deployed quantum-resistant cybersecurity platform with AI-powered threat detection',
      results: [
        '99.99% threat detection accuracy',
        'Zero security breaches in 2 years',
        '60% reduction in security operations costs',
        'Compliance with all regulatory requirements'
      ],
      metrics: {
        accuracy: '99.99%',
        efficiency: '60%',
        savings: '$1.8M',
        timeline: '12 months'
      },
      image: '/images/case-studies/quantum-cybersecurity.jpg',
      slug: 'quantum-cybersecurity-infrastructure-case-study',
      featured: true
    },
    {
      title: 'Space Resource Intelligence System',
      client: 'International Space Agency',
      industry: 'Space Technology',
      challenge: 'Develop AI-powered system for autonomous space resource mapping and extraction planning',
      solution: 'Built comprehensive space resource intelligence platform with autonomous decision-making capabilities',
      results: [
        '90% accuracy in resource identification',
        '3x faster mapping and analysis',
        'Autonomous operation in deep space',
        'Revolutionary space exploration capabilities'
      ],
      metrics: {
        accuracy: '90%',
        efficiency: '300%',
        savings: 'N/A',
        timeline: '24 months'
      },
      image: '/images/case-studies/space-resource-intelligence.jpg',
      slug: 'space-resource-intelligence-case-study',
      featured: true
    }
  ];

  const industryCaseStudies = [
    {
      title: 'Autonomous Business Intelligence Suite',
      client: 'Manufacturing Conglomerate',
      industry: 'Manufacturing',
      challenge: 'Transform traditional business intelligence into autonomous, consciousness-driven decision-making system',
      solution: 'Implemented AI autonomous business intelligence platform with predictive analytics',
      results: [
        '85% improvement in decision accuracy',
        '50% reduction in operational costs',
        'Real-time predictive insights',
        'Autonomous process optimization'
      ],
      metrics: {
        accuracy: '85%',
        efficiency: '50%',
        savings: '$3.2M',
        timeline: '15 months'
      },
      image: '/images/case-studies/autonomous-bi.jpg',
      slug: 'autonomous-business-intelligence-case-study'
    },
    {
      title: 'Brain-Computer Interface Platform',
      client: 'Medical Research Institute',
      industry: 'Healthcare',
      challenge: 'Develop neural interface technology for patients with severe mobility limitations',
      solution: 'Created advanced brain-computer interface with AI consciousness integration',
      results: [
        '80% success rate in neural communication',
        'Significant improvement in patient quality of life',
        'Breakthrough in neural interface technology',
        'Published in top medical journals'
      ],
      metrics: {
        accuracy: '80%',
        efficiency: 'N/A',
        savings: 'N/A',
        timeline: '30 months'
      },
      image: '/images/case-studies/brain-computer-interface.jpg',
      slug: 'brain-computer-interface-case-study'
    },
    {
      title: 'Quantum Neural Network Platform',
      client: 'Research University',
      industry: 'Education & Research',
      challenge: 'Build quantum-powered neural networks for advanced AI research and development',
      solution: 'Developed quantum neural network infrastructure with consciousness-aware algorithms',
      results: [
        '10x faster neural network training',
        'Breakthrough in quantum AI algorithms',
        'Multiple research publications',
        'Industry collaboration opportunities'
      ],
      metrics: {
        accuracy: 'N/A',
        efficiency: '1000%',
        savings: 'N/A',
        timeline: '20 months'
      },
      image: '/images/case-studies/quantum-neural-network.jpg',
      slug: 'quantum-neural-network-case-study'
    }
  ];

  const industries = [
    { name: 'Technology', count: 8, icon: <Code className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Financial Services', count: 6, icon: <DollarSign className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Healthcare', count: 5, icon: <Heart className="w-6 h-6" />, color: 'from-red-500 to-pink-500' },
    { name: 'Manufacturing', count: 4, icon: <Building className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Space Technology', count: 3, icon: <Rocket className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Education & Research', count: 4, icon: <Users className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing how our revolutionary AI consciousness, 
              quantum computing, and space technology solutions transform businesses and industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#featured-cases"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Start Your Success Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="featured-cases" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful implementations that demonstrate the transformative power of our technology
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredCaseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/case-studies/${caseStudy.slug}`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                            {caseStudy.industry}
                          </span>
                          <span className="text-sm text-gray-400">{caseStudy.client}</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                          {caseStudy.title}
                        </h3>
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-cyan-400 mb-2">Challenge</h4>
                            <p className="text-gray-300">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-cyan-400 mb-2">Solution</h4>
                            <p className="text-gray-300">{caseStudy.solution}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(caseStudy.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-black/30 rounded-xl border border-white/10">
                              <div className="text-2xl font-bold text-cyan-400">{value}</div>
                              <div className="text-xs text-gray-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="h-80 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                          <Star className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how our technology transforms different industries and sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-400">{industry.count} case studies</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional case studies demonstrating our technology's impact across various domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCaseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/case-studies/${caseStudy.slug}`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                          {caseStudy.industry}
                        </span>
                        <span className="text-xs text-gray-400">{caseStudy.client}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{caseStudy.challenge}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(caseStudy.metrics).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-black/30 rounded-lg border border-white/10">
                            <div className="text-lg font-bold text-cyan-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm">Read Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology consistently delivers measurable, transformative outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '95%', label: 'Average Accuracy Improvement', icon: <Target className="w-8 h-8" /> },
              { number: '60%', label: 'Average Cost Reduction', icon: <DollarSign className="w-8 h-8" /> },
              { number: '18', label: 'Average Implementation Months', icon: <Clock className="w-8 h-8" /> },
              { number: '100%', label: 'Client Satisfaction Rate', icon: <Star className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of organizations that have transformed their operations with our 
              revolutionary AI consciousness, quantum computing, and space technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}