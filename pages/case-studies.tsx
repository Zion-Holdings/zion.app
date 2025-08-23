import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cloud, 
  Target, 
  Zap,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  ExternalLink,
  Building,
  Globe,
  Cpu,
  Database
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Diagnostics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'High misdiagnosis rates and long wait times for medical imaging analysis',
      solution: 'Implemented AI-powered diagnostic system with 95% accuracy and real-time processing',
      results: [
        '95% reduction in misdiagnosis rates',
        '60% faster diagnosis time',
        '30% increase in patient satisfaction',
        '$2M annual cost savings'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing for Financial Modeling',
      company: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Complex risk modeling taking days to complete, limiting real-time decision making',
      solution: 'Deployed quantum computing platform for portfolio optimization and risk assessment',
      results: [
        '1000x faster risk calculations',
        '25% improvement in portfolio returns',
        'Real-time risk monitoring',
        'Competitive advantage in trading'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      readTime: '7 min read'
    },
    {
      title: 'Space-Based Computing Infrastructure',
      company: 'Satellite Solutions Inc',
      industry: 'Space Technology',
      challenge: 'Need for global computing infrastructure with low-latency access worldwide',
      solution: 'Deployed orbital computing platforms with satellite-based data centers',
      results: [
        'Global coverage with 99.9% uptime',
        '50% reduction in latency',
        'Redundant infrastructure',
        'Innovation leadership position'
      ],
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      readTime: '6 min read'
    },
    {
      title: 'Zero Trust Security Implementation',
      company: 'CyberDefense Systems',
      industry: 'Cybersecurity',
      challenge: 'Increasing cyber threats and need for comprehensive security architecture',
      solution: 'Implemented zero trust security framework with AI-powered threat detection',
      results: [
        '99.99% threat detection rate',
        'Zero security breaches',
        'Automated incident response',
        'Regulatory compliance achieved'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
      readTime: '4 min read'
    },
    {
      title: 'Smart Manufacturing Transformation',
      company: 'AutoTech Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and high defect rates',
      solution: 'Deployed IoT sensors, AI analytics, and predictive maintenance systems',
      results: [
        '30% increase in production efficiency',
        '50% reduction in defects',
        'Predictive maintenance savings',
        'Real-time quality control'
      ],
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      readTime: '5 min read'
    },
    {
      title: 'Cloud-Native Application Migration',
      company: 'TechStart Solutions',
      industry: 'Technology',
      challenge: 'Legacy systems limiting scalability and increasing operational costs',
      solution: 'Migrated to cloud-native architecture with containerization and microservices',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Auto-scaling capabilities',
        'Faster time to market'
      ],
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      readTime: '6 min read'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Users,
      count: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      count: 8,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Manufacturing',
      icon: Building,
      count: 15,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Technology',
      icon: Cpu,
      count: 20,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Space & Aerospace',
      icon: Rocket,
      count: 6,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      count: 10,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI solutions transformed our diagnostic accuracy and patient care. The results exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      title: "CTO, MedTech Innovations",
      company: "MedTech Innovations"
    },
    {
      quote: "The quantum computing platform gave us a competitive edge in financial modeling that was impossible before.",
      author: "Michael Chen",
      title: "Head of Risk Management",
      company: "Global Finance Corp"
    },
    {
      quote: "Our space-based computing infrastructure provides global coverage with unmatched reliability and performance.",
      author: "Dr. Elena Rodriguez",
      title: "Chief Technology Officer",
      company: "Satellite Solutions Inc"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Case Studies & Success Stories - Zion Tech Group"
        description="Explore real-world case studies and success stories showcasing how Zion Tech Group's technology solutions transform businesses across industries."
        keywords={["case studies", "success stories", "customer testimonials", "business transformation", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-6">
                Case Studies & Success Stories
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover how organizations across industries are transforming their businesses 
                with Zion Tech Group's cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#case-studies"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Start Your Success Story
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Success Across Industries
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our technology solutions have delivered measurable results across diverse industries and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {industry.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-400">
                        {industry.count}
                      </span>
                      <span className="text-gray-400">Case Studies</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section id="case-studies" className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                In-depth analysis of how our solutions deliver transformative results for leading organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20 ${
                    study.featured ? 'ring-2 ring-blue-400/30' : ''
                  }`}>
                    {study.featured && (
                      <div className="absolute -top-3 left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Featured
                      </div>
                    )}
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                        <study.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-400">{study.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-lg text-blue-400 mb-1">{study.company}</p>
                    <p className="text-gray-400 mb-6">{study.industry}</p>
                    
                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                          Challenge
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                          Solution
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Hear directly from the organizations that have transformed their businesses with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                    <div className="mb-6">
                      <Star className="w-6 h-6 text-yellow-400 mb-4" />
                      <blockquote className="text-gray-300 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="font-semibold text-white mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-blue-400 text-sm mb-1">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Let's discuss how our technology solutions can transform your business 
                and deliver measurable results like the organizations featured here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
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

export default CaseStudiesPage;