import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Rocket, Star } from 'lucide-react';
import Link from 'next/link';
import { formatServicePrice } from '../utils/servicePriceUtils';

// Disable static generation for this page
export const getServerSideProps = async () => {
  return {
    props: {}
  };
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" 
        description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." 
        canonical="https://ziontechgroup.com/services/" 
      />

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive technology solutions designed to transform your business and drive innovation
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  description: "Advanced artificial intelligence solutions for enterprise automation and decision-making",
                  color: "from-cyan-500 to-blue-600",
                  link: "/ai-services"
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Comprehensive security solutions to protect your digital assets and infrastructure",
                  color: "from-red-500 to-pink-600",
                  link: "/cybersecurity"
                },
                {
                  icon: Rocket,
                  title: "Space Technology",
                  description: "Innovative space solutions and satellite technology for modern businesses",
                  color: "from-purple-500 to-indigo-600",
                  link: "/space-tech"
                },
                {
                  icon: Star,
                  title: "Micro SaaS Solutions",
                  description: "Scalable software-as-a-service platforms for niche markets and specialized needs",
                  color: "from-green-500 to-emerald-600",
                  link: "/micro-saas"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Business?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our innovative solutions can drive your success and accelerate your digital transformation journey.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
                
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;