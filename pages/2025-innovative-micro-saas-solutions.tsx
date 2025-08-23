import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Target, Zap, Star, Users, TrendingUp, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Brain, Shield, Globe, Cpu, Lock, Cloud
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'SAAS Solutions', value: '20+', icon: <Rocket className="w-6 h-6" /> },
  { label: 'Business Clients', value: '800+', icon: <Users className="w-6 h-6" /> },
  { label: 'Success Rate', value: '99.5%', icon: <Star className="w-6 h-6" /> },
  { label: 'ROI Average', value: '350%', icon: <TrendingUp className="w-6 h-6" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function InnovativeMicroSaasSolutions2025() {
  return (
    <Layout>
      <Head>
        <title>2025 Innovative Micro SAAS Solutions | Zion Tech Group - Business Transformation</title>
        <meta name="description" content="Discover our revolutionary 2025 innovative micro SAAS solutions including AI customer success, supply chain optimization, financial planning, HR analytics, and sales intelligence. Transform your business with cutting-edge SAAS technology." />
        <meta name="keywords" content="2025 micro SAAS, innovative SAAS solutions, AI customer success, supply chain optimization, financial planning, HR analytics, sales intelligence, Zion Tech Group" />
        <meta property="og:title" content="2025 Innovative Micro SAAS Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2025 innovative micro SAAS solutions for customer success, supply chain, financial planning, HR analytics, and sales intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2025-innovative-micro-saas-solutions" />
        <meta name="twitter:title" content="2025 Innovative Micro SAAS Solutions | Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary 2025 innovative micro SAAS solutions for customer success, supply chain, financial planning, HR analytics, and sales intelligence." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-600 bg-clip-text text-transparent neon-text">
              2025 Innovative Micro SAAS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary micro SAAS solutions that transform business operations. From AI-powered customer success to intelligent supply chain optimization, 
              experience the future of business technology today.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-teal-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#services" className="btn-futuristic neon-button bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-futuristic border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black">
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Business Transformation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business technology with our innovative micro SAAS solutions designed for modern enterprises.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {innovativeMicroSaasSolutions2025.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="service-card-futuristic group hover:scale-105 transition-all duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-teal-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free trial • {service.setupTime} setup
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={service.link}
                      className="btn-futuristic w-full text-center bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already leveraging our innovative micro SAAS solutions to achieve remarkable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-white mb-2">Call Us</div>
                <div className="text-gray-300">{contactInfo.mobile}</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-white mb-2">Email Us</div>
                <div className="text-gray-300">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-white mb-2">Visit Us</div>
                <div className="text-gray-300">{contactInfo.address}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-futuristic neon-button bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/comprehensive-services-showcase-2025" className="btn-futuristic border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}