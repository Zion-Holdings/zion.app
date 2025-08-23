import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const successStories = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and AI integration',
      solution: 'Implemented our AI-powered enterprise architecture platform',
      results: [
        '40% reduction in operational costs',
        '60% faster transaction processing',
        '99.9% system uptime achieved'
      ],
      testimonial: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      contact: 'Sarah Johnson, CTO'
    },
    {
      id: 2,
      company: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Supply chain optimization and predictive maintenance',
      solution: 'Deployed quantum supply chain optimizer and AI predictive maintenance',
      results: [
        '35% improvement in supply chain efficiency',
        '50% reduction in unplanned downtime',
        '25% cost savings in operations'
      ],
      testimonial: 'The quantum-powered solutions gave us insights we never had before.',
      contact: 'Michael Chen, Operations Director'
    },
    {
      id: 3,
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Patient data security and AI diagnostics',
      solution: 'Implemented quantum-secure communication and AI healthcare diagnostics',
      results: [
        '100% compliance with healthcare regulations',
        '30% faster diagnosis accuracy',
        'Enhanced patient data protection'
      ],
      testimonial: 'Zion Tech Group helped us achieve the highest standards in healthcare technology.',
      contact: 'Dr. Emily Rodriguez, Chief Medical Officer'
    },
    {
      id: 4,
      company: 'Retail Dynamics',
      industry: 'Retail',
      challenge: 'Customer experience optimization and inventory management',
      solution: 'AI-powered customer intelligence platform and autonomous inventory system',
      results: [
        '45% increase in customer satisfaction',
        '20% reduction in inventory costs',
        'Real-time inventory optimization'
      ],
      testimonial: 'Our customer experience has been completely transformed.',
      contact: 'David Kim, VP of Operations'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Success Stories | Zion Tech Group" 
        description="Discover how our innovative technology solutions have transformed businesses across industries. Real success stories from our clients."
        canonical="https://ziontechgroup.com/success-stories/"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real transformations, measurable results, and satisfied clients. See how our innovative solutions are reshaping industries.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>500+ Clients Served</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Industry Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                >
                  {/* Company Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {story.industry}
                    </span>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{story.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-gray-300 italic">"{story.testimonial}"</p>
                    <p className="text-cyan-400 font-medium mt-2">— {story.contact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies that have transformed their business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SuccessStories;