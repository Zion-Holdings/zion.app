import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, TrendingUp, CheckCircle, Users, Globe, Shield } from 'lucide-react';
import Link from 'next/link';
import { innovative2026AIServicesV2 } from '../../data/innovative-2026-ai-services-v2';
import { innovative2026ITServicesV2 } from '../../data/innovative-2026-it-services-v2';
import { innovative2026MicroSaasV3 } from '../../data/innovative-2026-micro-saas-v3';

const Enhanced2026ServicesShowcaseV2: React.FC = () => {
  const allServices = [
    ...innovative2026AIServicesV2,
    ...innovative2026ITServicesV2,
    ...innovative2026MicroSaasV3
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => (
    <motion.div
      variants={itemVariants}
      className="group relative"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      {/* Main card */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 hover:border-purple-500/40 transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
              {service.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white leading-tight">{service.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{service.tagline}</p>
            </div>
          </div>
          {service.popular && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              <Star className="w-3 h-3" />
              <span>Popular</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features preview */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Key Features:</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span className="text-xs text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4 text-center">
          <div className="bg-black/20 rounded-lg p-2">
            <div className="text-lg font-bold text-purple-400">{service.customers.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Users</div>
          </div>
          <div className="bg-black/20 rounded-lg p-2">
            <div className="text-lg font-bold text-cyan-400">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="bg-black/20 rounded-lg p-2">
            <div className="text-lg font-bold text-green-400">{service.trialDays}</div>
            <div className="text-xs text-gray-400">Days Trial</div>
          </div>
        </div>

        {/* Pricing and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <Link 
            href={service.link}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-black/30 backdrop-blur-sm`}>
            {service.category}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">2026 Innovation Showcase</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Services
            </span>
            <br />
            <span className="text-white">for the Future</span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the next generation of AI, IT, and SaaS solutions designed to transform your business and drive unprecedented growth
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-400">Services</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000%</div>
              <div className="text-gray-400">ROI Guarantee</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">Global</div>
              <div className="text-gray-400">Reach</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already experiencing the future with our revolutionary services. 
              Start your transformation today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5" />
                <span>Free Consultation</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center space-x-2 border border-purple-500/50 text-purple-300 px-8 py-4 rounded-xl font-medium text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <span>View All Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcaseV2;