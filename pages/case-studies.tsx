import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Trophy, TrendingUp, Users, Building, 
  ArrowRight, CheckCircle, Globe, Brain, Atom,
  Shield, Rocket, Star, BarChart3
} from 'lucide-react';
import Link from 'next/link';

const CaseStudies: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'Global Bank Achieves 300% ROI with AI-Powered Risk Management',
      client: 'Fortune 500 Global Bank',
      industry: 'Financial Services',
      challenge: 'Complex risk assessment processes causing delays and compliance issues',
      solution: 'AI consciousness platform for autonomous risk analysis and decision-making',
      results: [
        '300% ROI within 18 months',
        '90% reduction in risk assessment time',
        '99.9% compliance accuracy',
        '$50M+ in annual cost savings'
      ],
      technologies: ['AI Consciousness', 'Quantum Computing', 'Machine Learning'],
      duration: '18 months',
      teamSize: '25 people',
      icon: <Brain className="w-8 h-8" />,
      featured: true
    },
    {
      id: 2,
      title: 'Manufacturing Giant Reduces Downtime by 85% with Predictive AI',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Unplanned equipment downtime costing millions annually',
      solution: 'AI predictive maintenance platform with quantum-enhanced analytics',
      results: [
        '85% reduction in unplanned downtime',
        '40% increase in equipment efficiency',
        '$75M in annual cost savings',
        'Predictive accuracy of 95%'
      ],
      technologies: ['AI Predictive Analytics', 'Quantum Computing', 'IoT Integration'],
      duration: '12 months',
      teamSize: '18 people',
      icon: <Atom className="w-8 h-8" />,
      featured: true
    },
    {
      id: 3,
      title: 'Space Mining Company Achieves First Autonomous Asteroid Extraction',
      client: 'Asteroid Resources Inc',
      industry: 'Space Technology',
      challenge: 'Manual space operations too dangerous and inefficient for resource extraction',
      solution: 'Autonomous AI systems for space resource mining and navigation',
      results: [
        'First successful autonomous asteroid mining',
        '100% autonomous operation capability',
        '50% reduction in mission costs',
        'Zero human safety incidents'
      ],
      technologies: ['Autonomous AI', 'Space Robotics', 'Quantum Navigation'],
      duration: '24 months',
      teamSize: '35 people',
      icon: <Rocket className="w-8 h-8" />,
      featured: true
    }
  ];

  const successMetrics = [
    {
      id: 4,
      title: 'Healthcare Provider Improves Diagnosis Accuracy by 40%',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'High misdiagnosis rates and long diagnosis times',
      solution: 'AI-powered diagnostic platform with consciousness capabilities',
      results: ['40% improvement in diagnosis accuracy', '60% faster diagnosis times'],
      technologies: ['AI Diagnostics', 'Medical Imaging', 'Machine Learning'],
      duration: '9 months',
      teamSize: '12 people',
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Retail Chain Increases Sales by 35% with AI Personalization',
      client: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Generic customer experiences leading to low conversion rates',
      solution: 'AI emotional intelligence platform for personalized customer interactions',
      results: ['35% increase in sales', '45% improvement in customer satisfaction'],
      technologies: ['AI Emotional Intelligence', 'Customer Analytics', 'Personalization'],
      duration: '6 months',
      teamSize: '15 people',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: 'Technology Adoption',
      value: '89%',
      description: 'Clients who expanded their engagement',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our security posture completely. Their AI consciousness platform detected threats we didn't even know existed.",
      author: "Sarah Chen",
      title: "CTO, SecureNet Solutions",
      company: "SecureNet Solutions"
    },
    {
      quote: "The quantum computing solution reduced our research time from weeks to hours. It's like having a supercomputer that thinks.",
      author: "Dr. Michael Rodriguez",
      title: "Lead Researcher",
      company: "Quantum Dynamics Inc."
    },
    {
      quote: "Working with Zion Tech Group was like having an extension of our own team. They understood our business and delivered beyond expectations.",
      author: "Jennifer Park",
      title: "VP of Technology",
      company: "TechCorp Global"
    }
  ];

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories and transformative results achieved with Zion Tech Group's AI consciousness and quantum computing solutions."
      keywords="case studies, success stories, client results, AI consciousness, quantum computing, cybersecurity, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Case Studies
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                  Real results from real clients
                </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover how organizations across industries are achieving breakthrough results 
                with our revolutionary AI consciousness and quantum computing technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Success by the Numbers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results that speak for themselves
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{metric.metric}</h3>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

        {/* Featured Case Studies */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transformative implementations that set new industry standards
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-4`}>
                        {study.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                      <div className="text-purple-400 font-semibold mb-4">{study.industry}</div>
                      <div className="space-y-3 text-sm">
                        <div>
                          <div className="text-gray-400">Duration:</div>
                          <div className="text-white">{study.duration}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Team Size:</div>
                          <div className="text-white">{study.teamSize}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Results Achieved</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
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

        {/* Industry Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Industry Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results across diverse sectors and use cases
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industryCaseStudies.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-6 text-center">{industry.industry}</h3>
                  <div className="space-y-6">
                    {industry.caseStudies.map((study, studyIndex) => (
                      <div key={studyIndex} className="border-l-2 border-blue-500/30 pl-4">
                        <h4 className="text-lg font-bold text-white mb-2">{study.client}</h4>
                        <div className="mb-3">
                          <div className="text-gray-400 text-sm mb-1">Challenge:</div>
                          <p className="text-gray-300 text-sm">{study.challenge}</p>
                        </div>
                        <div className="mb-3">
                          <div className="text-gray-400 text-sm mb-1">Solution:</div>
                          <p className="text-gray-300 text-sm">{study.solution}</p>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Results:</div>
                          <p className="text-green-400 text-sm font-semibold">{study.results}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Direct feedback from the organizations we've transformed
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">
                      <span className="font-medium">{study.client}</span> • {study.industry}
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <div className="space-y-1">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    <div className="text-blue-400 text-sm">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join the organizations that have already transformed their business with our revolutionary technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Explore Our Services
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