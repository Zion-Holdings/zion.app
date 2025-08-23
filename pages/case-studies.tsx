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
      client: 'TechCorp Global',
      industry: 'Financial Services',
      challenge: 'Legacy systems struggling with real-time fraud detection',
      solution: 'AI consciousness platform for behavioral analysis',
      results: [
        '99.7% fraud detection accuracy',
        '60% reduction in false positives',
        '$2.3M annual savings',
        'Real-time processing under 100ms'
      ],
      technologies: ['AI Consciousness', 'Machine Learning', 'Real-time Analytics'],
      duration: '6 months',
      teamSize: '8 engineers',
      icon: <Building className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      client: 'Quantum Dynamics Inc.',
      industry: 'Research & Development',
      challenge: 'Complex quantum algorithm optimization taking weeks',
      solution: 'Hybrid quantum-classical computing platform',
      results: [
        '1000x faster algorithm execution',
        '95% reduction in computation time',
        'Breakthrough in protein folding',
        'Published in Nature journal'
      ],
      technologies: ['Quantum Computing', 'Hybrid Algorithms', 'Optimization'],
      duration: '12 months',
      teamSize: '15 researchers',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      client: 'SecureNet Solutions',
      industry: 'Cybersecurity',
      challenge: 'Advanced persistent threats bypassing traditional security',
      solution: 'AI-powered threat intelligence and response system',
      results: [
        '99.9% threat detection rate',
        'Zero successful breaches in 18 months',
        '90% faster incident response',
        'SOC 2 Type II compliance achieved'
      ],
      technologies: ['AI Security', 'Threat Intelligence', 'Automated Response'],
      duration: '9 months',
      teamSize: '12 security experts',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const industryCaseStudies = [
    {
      industry: 'Healthcare',
      caseStudies: [
        {
          client: 'MedTech Innovations',
          challenge: 'Medical image analysis taking hours',
          solution: 'AI-powered diagnostic assistance',
          results: '85% faster diagnosis, 95% accuracy rate'
        },
        {
          client: 'HealthCare Plus',
          challenge: 'Patient data security compliance',
          solution: 'Zero-trust security architecture',
          results: 'HIPAA compliance achieved, zero breaches'
        }
      ]
    },
    {
      industry: 'Manufacturing',
      caseStudies: [
        {
          client: 'AutoTech Manufacturing',
          challenge: 'Production line inefficiencies',
          solution: 'IoT + AI predictive maintenance',
          results: '30% increase in production, 40% fewer breakdowns'
        },
        {
          client: 'SmartFactory Corp',
          challenge: 'Quality control inconsistencies',
          solution: 'Computer vision quality inspection',
          results: '99.5% defect detection, 25% cost reduction'
        }
      ]
    },
    {
      industry: 'Retail & E-commerce',
      caseStudies: [
        {
          client: 'RetailTech Solutions',
          challenge: 'Inventory management inefficiencies',
          solution: 'AI demand forecasting system',
          results: '20% reduction in stockouts, 15% cost savings'
        },
        {
          client: 'E-Commerce Pro',
          challenge: 'Customer churn and low engagement',
          solution: 'Personalized recommendation engine',
          results: '35% increase in conversion, 25% higher retention'
        }
      ]
    }
  ];

  const successMetrics = [
    {
      metric: 'Client Satisfaction',
      value: '98%',
      description: 'Average client satisfaction score',
      icon: <Star className="w-6 h-6" />
    },
    {
      metric: 'Project Success Rate',
      value: '96%',
      description: 'Projects delivered on time and budget',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      metric: 'ROI Delivered',
      value: '340%',
      description: 'Average return on investment for clients',
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
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
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

export default CaseStudies;