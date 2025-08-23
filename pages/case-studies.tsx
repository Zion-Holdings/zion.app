import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, User, Tag, ArrowRight,
  Search, Filter, TrendingUp, Lightbulb, Zap,
  Brain, Rocket, Shield, Globe, ChevronRight,
  CheckCircle, Star, Award, Target, Users
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const CaseStudiesPage: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Complex patient data analysis and predictive modeling for improved care outcomes',
      solution: 'Custom AI platform with machine learning algorithms for patient risk assessment',
      results: [
        '30% improvement in early disease detection',
        '25% reduction in readmission rates',
        '40% faster diagnosis processing',
        '$2M annual cost savings'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Healthcare APIs', 'Cloud Infrastructure'],
      image: '🏥',
      featured: true,
      duration: '6 months',
      teamSize: '8 engineers'
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading System',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge: 'Implement quantum-resistant cryptography for high-frequency trading security',
      solution: 'Advanced quantum-safe encryption with real-time threat detection',
      results: [
        '100% quantum-resistant security implementation',
        '99.99% system uptime achieved',
        '50% faster trade execution',
        'Zero security breaches since deployment'
      ],
      technologies: ['Quantum Cryptography', 'Real-time Analytics', 'Blockchain', 'High-frequency Trading'],
      image: '💹',
      featured: true,
      duration: '8 months',
      teamSize: '12 engineers'
    },
    {
      id: 3,
      title: 'Space Resource Mining AI Platform',
      client: 'Space Exploration Corporation',
      industry: 'Space Technology',
      challenge: 'Autonomous resource identification and extraction from asteroids',
      solution: 'AI-powered satellite system with autonomous decision-making capabilities',
      results: [
        '90% accuracy in resource identification',
        '60% reduction in exploration costs',
        'Real-time autonomous operations',
        'Successful extraction from 3 asteroid targets'
      ],
      technologies: ['AI/ML', 'Satellite Technology', 'Autonomous Systems', 'Space Robotics'],
      image: '🚀',
      featured: true,
      duration: '18 months',
      teamSize: '15 engineers'
    }
  ];

  const caseStudies = [
    {
      id: 4,
      title: 'Enterprise AI Transformation for Manufacturing',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Digital transformation of legacy manufacturing processes',
      solution: 'Comprehensive AI-powered automation and predictive maintenance system',
      results: [
        '35% increase in production efficiency',
        '45% reduction in downtime',
        'Predictive maintenance with 95% accuracy',
        '$5M annual cost savings'
      ],
      technologies: ['IoT', 'Predictive Analytics', 'Machine Learning', 'Cloud Computing'],
      image: '🏭',
      duration: '12 months',
      teamSize: '10 engineers'
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Intelligence Platform',
      client: 'Government Defense Agency',
      industry: 'Government',
      challenge: 'Advanced threat detection and response for critical infrastructure',
      solution: 'AI-powered cybersecurity platform with real-time threat analysis',
      results: [
        '99.9% threat detection accuracy',
        'Real-time response within 30 seconds',
        'Zero successful attacks since deployment',
        'Automated incident response workflows'
      ],
      technologies: ['AI/ML', 'Threat Intelligence', 'Automation', 'Real-time Analytics'],
      image: '🛡️',
      duration: '10 months',
      teamSize: '14 engineers'
    },
    {
      id: 6,
      title: 'Retail AI Personalization Engine',
      client: 'E-commerce Retailer',
      industry: 'Retail',
      challenge: 'Personalized customer experience and recommendation system',
      solution: 'AI-powered personalization engine with behavioral analysis',
      results: [
        '40% increase in conversion rates',
        '35% improvement in customer retention',
        'Personalized recommendations with 85% accuracy',
        '$3M additional revenue generated'
      ],
      technologies: ['Machine Learning', 'Recommendation Systems', 'Big Data', 'Cloud Platform'],
      image: '🛒',
      duration: '7 months',
      teamSize: '9 engineers'
    },
    {
      id: 7,
      title: 'DevOps Automation Platform',
      client: 'Technology Startup',
      industry: 'Technology',
      challenge: 'Streamlining development and deployment processes',
      solution: 'Comprehensive DevOps automation with CI/CD pipelines',
      results: [
        '80% reduction in deployment time',
        '90% decrease in deployment errors',
        'Automated testing and quality gates',
        '24/7 continuous deployment capability'
      ],
      technologies: ['DevOps', 'CI/CD', 'Automation', 'Cloud Infrastructure'],
      image: '⚙️',
      duration: '5 months',
      teamSize: '6 engineers'
    },
    {
      id: 8,
      title: 'Cloud Migration and Optimization',
      client: 'Enterprise Software Company',
      industry: 'Technology',
      challenge: 'Legacy system migration to cloud with performance optimization',
      solution: 'Multi-cloud strategy with automated scaling and optimization',
      results: [
        '60% reduction in infrastructure costs',
        '3x improvement in application performance',
        '99.9% availability achieved',
        'Automated scaling and optimization'
      ],
      technologies: ['Cloud Computing', 'Microservices', 'Automation', 'Performance Optimization'],
      image: '☁️',
      duration: '14 months',
      teamSize: '16 engineers'
    }
  ];

  const industries = [
    { name: 'Healthcare', count: 8, icon: '🏥' },
    { name: 'Financial Services', count: 12, icon: '💹' },
    { name: 'Manufacturing', count: 6, icon: '🏭' },
    { name: 'Government', count: 4, icon: '🏛️' },
    { name: 'Retail', count: 5, icon: '🛒' },
    { name: 'Technology', count: 15, icon: '💻' },
    { name: 'Space Technology', count: 3, icon: '🚀' },
    { name: 'Education', count: 4, icon: '🎓' }
  ];

  const technologies = [
    'AI/ML', 'Quantum Computing', 'Cloud Computing', 'Cybersecurity', 'IoT',
    'Blockchain', 'DevOps', 'Big Data', 'Automation', 'Robotics',
    'Satellite Technology', 'Predictive Analytics', 'Real-time Systems'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <BookOpen className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success <span className="text-blue-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how Zion Tech Group has transformed businesses across industries 
                with cutting-edge AI, quantum computing, and space technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full sm:w-80"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transformative solutions that delivered exceptional results for our clients
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{study.image}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Industries */}
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Industries</h3>
                    <div className="space-y-3">
                      {industries.map((industry, index) => (
                        <Link
                          key={industry.name}
                          href={`/case-studies?industry=${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between text-gray-300 hover:text-white transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">{industry.icon}</span>
                            {industry.name}
                          </div>
                          <span className="text-sm text-gray-500">({industry.count})</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Link
                          key={tech}
                          href={`/case-studies?technology=${tech.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                        >
                          {tech}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-3">Ready to Start?</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Let's discuss how we can transform your business
                    </p>
                    <Link 
                      href="/contact"
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors inline-block text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Case Studies List */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-6">All Case Studies</h2>
                </motion.div>
                
                <div className="space-y-6">
                  {caseStudies.map((study, index) => (
                    <motion.article
                      key={study.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="flex gap-6">
                        <div className="text-4xl flex-shrink-0">{study.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                              {study.industry}
                            </span>
                            <span className="text-gray-400 text-sm">{study.duration}</span>
                            <span className="text-gray-400 text-sm">{study.teamSize}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {study.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            <strong>Client:</strong> {study.client}
                          </p>
                          <p className="text-gray-300 mb-4">
                            <strong>Challenge:</strong> {study.challenge}
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-white mb-2">Key Results:</h4>
                              <ul className="space-y-1">
                                {study.results.slice(0, 2).map((result, resultIndex) => (
                                  <li key={resultIndex} className="flex items-start text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.slice(0, 4).map((tech, techIndex) => (
                                  <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Link 
                              href={`/case-studies/${study.id}`}
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                            >
                              Read Full Case Study
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Load More */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                    Load More Case Studies
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of successful companies that have transformed their business 
                with Zion Tech Group's innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
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