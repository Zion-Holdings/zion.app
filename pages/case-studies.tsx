import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Shield, Brain, Cpu, Database, Globe } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Healthcare AI Transformation',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Improve patient outcomes and reduce readmission rates',
      solution: 'AI-powered predictive analytics platform',
      results: ['30% reduction in readmissions', '25% improvement in patient outcomes', '40% cost savings'],
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Manufacturing Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Reduce downtime and optimize production processes',
      solution: 'IoT sensors and AI predictive maintenance',
      results: ['45% reduction in downtime', '30% increase in production', '25% cost reduction'],
      icon: <Cpu className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Financial Security Enhancement',
      client: 'National Bank',
      industry: 'Financial Services',
      challenge: 'Strengthen cybersecurity and fraud detection',
      solution: 'AI-powered threat detection and zero trust architecture',
      results: ['99.9% threat detection rate', '60% faster response time', '100% compliance'],
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Cloud Migration Success',
      client: 'Technology Startup',
      industry: 'Technology',
      challenge: 'Scale infrastructure and improve performance',
      solution: 'Multi-cloud strategy and DevOps automation',
      results: ['50% cost reduction', '99.9% uptime', '3x faster deployment'],
      icon: <Globe className="w-8 h-8 text-purple-400" />
    }
  ];

  const industries = [
    'Healthcare', 'Manufacturing', 'Financial Services', 'Technology', 'Government', 'Education'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-400">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries transform their operations 
            with innovative technology solutions. Real results, measurable impact.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {study.icon}
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  <p className="text-gray-400">{study.client} • {study.industry}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                <p className="text-gray-300">{study.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300">{study.solution}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                <ul className="space-y-1">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$50M+</div>
            <div className="text-gray-300">Value Delivered</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our technology solutions can transform your organization and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;