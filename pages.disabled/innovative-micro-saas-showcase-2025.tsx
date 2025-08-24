import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Heart, 
  Link, 
  DollarSign, 
  Cpu, 
  GraduationCap, 
  Building2, 
  Palette, 
  Lock 
} from 'lucide-react';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';

const InnovativeMicroSaasShowcase2025: NextPage = () => {
  const iconMap = {
    '⚖️': Brain,
    '🔒': Shield,
    '🏥': Heart,
    '🔗': Link,
    '💰': DollarSign,
    '🧮': Cpu,
    '🎓': GraduationCap,
    '🏙️': Building2,
    '🎨': Palette,
    '🔐': Lock
  };

  const getIconComponent = (icon: string) => {
    return iconMap[icon as keyof typeof iconMap] || Brain;
  };

  return (
    <>
      <Head>
        <title>Innovative Micro SAAS Services 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge micro SAAS services including AI legal analysis, quantum cybersecurity, healthcare AI, blockchain supply chain, and more. Transform your business with innovative technology solutions." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, healthcare AI, blockchain, fintech, IoT, smart cities, design AI" />
        <meta property="og:title" content="Innovative Micro SAAS Services 2025 | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our innovative micro SAAS services powered by AI, quantum computing, and cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-micro-saas-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-micro-saas-showcase-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative Micro SAAS Services 2025
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge micro SAAS solutions powered by AI, quantum computing, blockchain, and emerging technologies
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-y border-cyan-400/30 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Mobile</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">✉️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative services combine cutting-edge technology with practical business solutions to drive growth, efficiency, and competitive advantage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeMicroSaasExpansion2025.map((service, index) => {
                const IconComponent = getIconComponent(service.icon);
                return (
                  <motion.div
                    key={service.id}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-6 h-full group-hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${service.price.monthly}</div>
                          <div className="text-sm text-gray-400">/month</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs font-medium rounded-full">
                          {service.category}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mb-4 text-sm text-gray-400">
                        <p><strong>Setup:</strong> {service.setupTime}</p>
                        <p><strong>Trial:</strong> {service.trialDays} days</p>
                      </div>

                      <a 
                        href={service.link}
                        className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25 text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative micro SAAS solutions deliver measurable results and competitive advantages for businesses of all sizes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Cutting-Edge Technology',
                  description: 'Leverage the latest advancements in AI, quantum computing, blockchain, and IoT to stay ahead of the competition.'
                },
                {
                  icon: '💰',
                  title: 'Proven ROI',
                  description: 'Our services deliver measurable returns, with customers typically seeing 300-800% ROI within months of implementation.'
                },
                {
                  icon: '⚡',
                  title: 'Rapid Implementation',
                  description: 'Get up and running quickly with our streamlined setup processes and comprehensive support.'
                },
                {
                  icon: '🔒',
                  title: 'Enterprise Security',
                  description: 'Bank-grade security with SOC 2 Type II, ISO 27001, and industry-specific compliance certifications.'
                },
                {
                  icon: '🌐',
                  title: 'Global Support',
                  description: '24/7 support with dedicated specialists and comprehensive documentation in multiple languages.'
                },
                {
                  icon: '📈',
                  title: 'Scalable Solutions',
                  description: 'Grow with confidence knowing our solutions scale with your business needs and requirements.'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our innovative micro SAAS services can drive growth, efficiency, and competitive advantage for your organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Mobile:</strong> +1 302 464 0950</p>
                    <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
                    <p><strong>Website:</strong> https://ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Industry-leading technology expertise</li>
                    <li>• Proven track record of success</li>
                    <li>• Comprehensive support and training</li>
                    <li>• Competitive pricing and flexible plans</li>
                    <li>• Rapid implementation and deployment</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InnovativeMicroSaasShowcase2025;