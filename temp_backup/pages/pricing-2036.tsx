import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, CheckCircle, X, ArrowRight, Brain, Atom, 
  Rocket, Shield, MessageCircle, Globe, Zap, Users,
  TrendingUp, Award, Clock, DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { innovativeMicroSaasServices2036 } from '../data/innovative-2036-micro-saas-services';

const Pricing2036: React.FC = () => {
  const popularServices = innovativeMicroSaasServices2036.filter(service => service.popular);
  const allServices = innovativeMicroSaasServices2036;

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Pricing Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 rounded-full text-green-400 text-lg font-medium"
              >
                <DollarSign className="w-5 h-5" />
                <span>Competitive Pricing 2036</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Transparent Pricing
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary technology solutions at competitive market prices. No hidden fees, no surprises.
              </p>
              
              {/* Pricing Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                  <div className="text-gray-300 text-sm">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">30%</div>
                  <div className="text-gray-300 text-sm">Below Market</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support Included</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                  <div className="text-gray-300 text-sm">ROI Potential</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Popular Services Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our flagship solutions that deliver exceptional value and ROI
              </p>
            </motion.div>

            {/* Popular Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-3xl hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Popular Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-semibold rounded-full">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                    
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Service Header */}
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300">{service.tagline}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits?.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Core Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/30 rounded-xl">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.marketSize}</div>
                          <div className="text-gray-400 text-xs">Market Size</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.growthRate}</div>
                          <div className="text-gray-400 text-xs">Growth Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.roi.split(' ')[0]}</div>
                          <div className="text-gray-400 text-xs">ROI</div>
                        </div>
                      </div>

                      {/* Pricing and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-sm">per {service.period}</div>
                          <div className="text-xs text-gray-500 mt-1">{service.trialDays} days free trial</div>
                        </div>
                        <Link href={service.link}>
                          <button className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center space-x-2`}>
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Pricing Grid */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our entire range of innovative solutions with transparent pricing
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.link}>
                    <div className="p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-2xl hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                      {/* Service Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                        {service.icon}
                      </div>
                      
                      {/* Service Info */}
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      
                      {/* Key Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-xs">per {service.period}</div>
                        </div>
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Market Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our pricing compares to industry standards
              </p>
            </motion.div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-2xl">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left p-6 text-white font-semibold">Service Category</th>
                    <th className="text-center p-6 text-white font-semibold">Zion Tech Group</th>
                    <th className="text-center p-6 text-gray-300 font-semibold">Market Average</th>
                    <th className="text-center p-6 text-gray-300 font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: 'AI & Machine Learning', zion: '$2,499', market: '$3,500', savings: '29%' },
                    { category: 'Quantum Technology', zion: '$5,999', market: '$8,200', savings: '27%' },
                    { category: 'Space Technology', zion: '$12,999', market: '$18,000', savings: '28%' },
                    { category: 'Cybersecurity', zion: '$3,999', market: '$5,800', savings: '31%' },
                    { category: 'Business Automation', zion: '$1,899', market: '$2,600', savings: '27%' },
                    { category: 'Financial Technology', zion: '$8,999', market: '$12,500', savings: '28%' },
                    { category: 'Supply Chain', zion: '$4,499', market: '$6,200', savings: '27%' },
                    { category: 'Metaverse Development', zion: '$3,299', market: '$4,800', savings: '31%' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-800/20 transition-colors">
                      <td className="p-6 text-white font-medium">{row.category}</td>
                      <td className="p-6 text-center">
                        <span className="text-2xl font-bold text-green-400">{row.zion}</span>
                        <div className="text-gray-400 text-sm">per month</div>
                      </td>
                      <td className="p-6 text-center text-gray-300">
                        <span className="text-xl font-semibold">{row.market}</span>
                        <div className="text-gray-500 text-sm">per month</div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                          Save {row.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Our Pricing is Unbeatable
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver premium technology solutions at competitive prices
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Market Leading',
                  description: '30% below industry average pricing',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Award,
                  title: 'Premium Quality',
                  description: 'Enterprise-grade solutions at startup prices',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: Clock,
                  title: 'Fast ROI',
                  description: 'See returns within 3-6 months',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  icon: Users,
                  title: '24/7 Support',
                  description: 'Included with every plan',
                  color: 'from-cyan-500 to-teal-600'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already transforming their business with our innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/innovative-2036-services-showcase">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                    Explore Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Get Custom Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Pricing2036;