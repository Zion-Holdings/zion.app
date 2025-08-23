import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Clock, ArrowRight, Star, CheckCircle, Target, Zap, Building } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const featuredCaseStudies = [
    {
      title: 'Global Bank AI Transformation',
      company: 'Fortune 500 Financial Institution',
      industry: 'Financial Services',
      challenge: 'Legacy systems unable to handle increasing transaction volumes and regulatory requirements',
      solution: 'Implemented AI-powered transaction processing and automated compliance monitoring',
      results: [
        '300% increase in transaction processing speed',
        '99.9% compliance accuracy rate',
        '$50M annual cost savings',
        'Real-time fraud detection'
      ],
      duration: '18 months',
      teamSize: '25 engineers',
      rating: 5,
      logo: '🏦'
    },
    {
      title: 'Manufacturing AI Optimization',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes leading to 20% waste and delayed deliveries',
      solution: 'AI-powered predictive maintenance and production optimization system',
      results: [
        '40% reduction in production waste',
        '25% improvement in delivery times',
        '15% increase in overall efficiency',
        'Predictive maintenance alerts'
      ],
      duration: '12 months',
      teamSize: '15 engineers',
      rating: 5,
      logo: '🏭'
    },
    {
      title: 'Healthcare AI Diagnostics',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Long wait times for diagnostic results and limited specialist availability',
      solution: 'AI-powered diagnostic imaging analysis and patient triage system',
      results: [
        '60% faster diagnostic results',
        '90% accuracy in preliminary screening',
        'Reduced specialist workload by 40%',
        'Improved patient satisfaction'
      ],
      duration: '14 months',
      teamSize: '20 engineers',
      rating: 5,
      logo: '🏥'
    }
  ];

  const industryCaseStudies = [
    {
      industry: 'Financial Services',
      count: 12,
      icon: <Building className="w-8 h-8 text-green-400" />,
      description: 'AI-powered trading, risk management, and compliance solutions'
    },
    {
      industry: 'Healthcare',
      count: 8,
      icon: <Target className="w-8 h-8 text-blue-400" />,
      description: 'Diagnostic AI, patient care optimization, and research automation'
    },
    {
      industry: 'Manufacturing',
      count: 15,
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'Predictive maintenance, quality control, and supply chain optimization'
    },
    {
      industry: 'Retail & E-commerce',
      count: 10,
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      description: 'Customer personalization, inventory management, and demand forecasting'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented have given us a competitive edge we never thought possible.",
      author: "Sarah Johnson",
      title: "CTO",
      company: "Global Financial Services"
    },
    {
      quote: "Working with Zion Tech Group was a game-changer. Their quantum computing expertise helped us solve problems that were previously impossible.",
      author: "Dr. Michael Chen",
      title: "Head of Research",
      company: "Advanced Materials Lab"
    },
    {
      quote: "The team at Zion Tech Group delivered exceptional results. Their AI-powered solutions increased our efficiency by 40% in just 6 months.",
      author: "Robert Martinez",
      title: "Operations Director",
      company: "Manufacturing Solutions Inc"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped organizations across industries achieve breakthrough results with cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  View All Case Studies
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Start Your Success Story
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real results from real clients across diverse industries
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-6xl mb-4">{study.logo}</div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{study.title}</h3>
                      <p className="text-gray-400 mb-4">{study.company}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(study.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Breakdown */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Success Across Industries
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We've delivered transformative results across diverse sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryCaseStudies.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{industry.industry}</h3>
                  <p className="text-gray-400 mb-4">{industry.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{industry.count}</div>
                  <div className="text-sm text-gray-500">Case Studies</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Hear directly from our clients about their experience and results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the ranks of successful organizations that have transformed their business with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;