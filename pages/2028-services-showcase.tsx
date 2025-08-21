import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles,
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    description: 'Beyond the future of technology',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    services: futuristic2028Services.slice(0, 4)
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    description: 'Intelligent urban solutions',
    icon: Building,
    color: 'from-blue-600 to-cyan-600',
    services: emergingTech2028Services.filter(s => s.category.includes('Smart City') || s.category.includes('Infrastructure')).slice(0, 4)
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, 4)
  },
  {
    title: '🤖 AI & Machine Learning',
    description: 'Next-generation AI solutions',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, 4)
  },
  {
    title: '⛓️ Blockchain & Web3',
    description: 'Decentralized solutions',
    icon: Globe,
    color: 'from-orange-600 to-red-600',
    services: emergingTech2028Services.filter(s => s.category.includes('Blockchain')).slice(0, 4)
  },
  {
    title: '🚗 Autonomous & Mobility',
    description: 'Self-driving and mobility solutions',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    services: futuristic2028Services.filter(s => s.category.includes('Autonomous')).slice(0, 4)
  }
];

export default function ServicesShowcase2028() {
  return (
    <>
      <Head>
        <title>2028 Futuristic Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge 2028 services including AI, quantum computing, autonomous systems, and futuristic innovations. Transform your business with next-generation technology." />
        <meta name="keywords" content="2028 technology, AI services, quantum computing, autonomous systems, futuristic innovations, Zion Tech Group" />
        <meta property="og:title" content="2028 Futuristic Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our cutting-edge 2028 services including AI, quantum computing, autonomous systems, and futuristic innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/2028-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2028-services-showcase" />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>2028 Future Technology</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Futuristic Services
              </span>
              <br />
              <span className="text-white">Showcase 2028</span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge AI, quantum computing, 
              autonomous systems, and revolutionary innovations that will transform your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-purple-500/30 text-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-purple-300">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-purple-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-purple-300">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500%</div>
                <div className="text-purple-300">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover our comprehensive range of futuristic services designed to propel your business into the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 h-full`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-purple-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div key={service.id} className="p-4 bg-black/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{service.name}</h4>
                          <span className="text-sm text-purple-400 font-medium">{service.price}</span>
                        </div>
                        <p className="text-sm text-purple-300 mb-3">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-purple-300">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{service.rating}</span>
                            <span>({service.reviews} reviews)</span>
                          </div>
                          <Link
                            href={service.link}
                            className="text-purple-400 hover:text-white transition-colors flex items-center space-x-1"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-purple-500/20">
                    <Link
                      href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="inline-flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
                    >
                      <span>View All {category.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Innovations</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Our most popular and revolutionary services that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futuristic2028Services.filter(s => s.popular).slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-purple-300">{service.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                      <div className="text-sm text-purple-300">{service.period}</div>
                    </div>
                  </div>

                  <p className="text-purple-200 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-purple-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-purple-300">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{service.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{service.reviews} reviews</span>
                      <span>•</span>
                      <span>{service.customers} customers</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-purple-300">
                      <div>Market Size: {service.marketSize}</div>
                      <div>Growth Rate: {service.growthRate}</div>
                    </div>
                    <Link
                      href={service.link}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Understanding the market landscape and competitive advantages of our futuristic services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-purple-900/20 border border-purple-500/30"
            >
              <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Market Growth</h3>
              <p className="text-purple-200 mb-6">
                Our services target the fastest-growing technology markets with projected annual growth rates of 25-80%.
              </p>
              <div className="text-3xl font-bold text-purple-400">$500B+</div>
              <div className="text-purple-300">Total Addressable Market</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-blue-900/20 border border-blue-500/30"
            >
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Advantage</h3>
              <p className="text-blue-200 mb-6">
                First-to-market solutions with proprietary technology and unmatched expertise in emerging fields.
              </p>
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-blue-300">Patent-Pending Technologies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-green-900/20 border border-green-500/30"
            >
              <Zap className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">ROI Performance</h3>
              <p className="text-green-200 mb-6">
                Our clients consistently achieve exceptional returns on investment through our innovative solutions.
              </p>
              <div className="text-3xl font-bold text-green-400">500%</div>
              <div className="text-green-300">Average Client ROI</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Business?</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join the future of technology with our cutting-edge services. Get started today and experience 
              the power of AI, quantum computing, and autonomous systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-purple-500/30 text-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-purple-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  );
}