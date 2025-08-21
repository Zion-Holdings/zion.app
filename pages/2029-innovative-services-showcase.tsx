import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Target, ArrowRight, CheckCircle, Star, 
  Phone, Mail, MapPin
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import { aiAutonomousEcosystemServices2029 } from '../data/2029-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices2029 } from '../data/2029-emerging-tech-breakthroughs';
import { practicalBusinessSolutionServices2029 } from '../data/2029-practical-business-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function InnovativeServicesShowcase2029() {
  const allServices = [
    ...aiAutonomousEcosystemServices2029,
    ...emergingTechBreakthroughServices2029,
    ...practicalBusinessSolutionServices2029
  ];

  const serviceCategories = [
    {
      title: '🚀 AI Autonomous Ecosystem',
      icon: Brain,
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      services: aiAutonomousEcosystemServices2029
    },
    {
      title: '⚛️ Emerging Tech Breakthroughs',
      icon: Atom,
      color: 'from-indigo-600 via-blue-600 to-cyan-600',
      services: emergingTechBreakthroughServices2029
    },
    {
      title: '🎯 Practical Business Solutions',
      icon: Target,
      color: 'from-cyan-600 via-teal-600 to-emerald-600',
      services: practicalBusinessSolutionServices2029
    }
  ];

  return (
    <>
      <Head>
        <title>2029 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 2029 innovative services including AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2029 services, AI autonomous, emerging technology, business solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-innovative-services-showcase" />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        <UltraFuturisticNavigation2029 />

        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
                2029 Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary AI autonomous ecosystems, 
                emerging tech breakthroughs, and practical business solutions that will transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2029 services are organized into three cutting-edge categories, each designed to 
                revolutionize different aspects of business and technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-500">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-300 mb-6">
                      {category.services.length} cutting-edge services designed to transform your business 
                      and accelerate your success in the digital age.
                    </p>
                    <div className="text-sm text-gray-400">
                      Starting from ${Math.min(...category.services.map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))}/month
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most innovative and transformative services that are reshaping industries 
                and creating new possibilities for businesses worldwide.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {allServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Starting Price</div>
                      <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Market Size</div>
                      <div className="text-lg font-semibold text-blue-400">{service.marketSize}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.category.slice(0, 3).map((cat, catIndex) => (
                      <span
                        key={catIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/services/${service.id}`} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact" className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mt-16">
              <Link
                href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg">
                View All Services
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join the future of technology with our innovative 2029 services. 
                Contact us today to discover how we can revolutionize your business operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2029 />
      </div>
    </>
  );
}