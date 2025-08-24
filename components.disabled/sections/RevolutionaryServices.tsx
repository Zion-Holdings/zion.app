import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Rocket, Star, TrendingUp, Users, Globe, Shield } from 'lucide-react';
import RevolutionaryServiceCard from '../ui/RevolutionaryServiceCard';
import { revolutionaryMicroSaasServices } from '../../data/revolutionary-micro-saas-services';

const RevolutionaryServices: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const stats = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      value: '15+',
      label: 'Revolutionary Services',
      description: 'Cutting-edge AI & Quantum solutions'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      value: '$500B+',
      label: 'Combined Market Value',
      description: 'Across all service categories'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      value: '500+',
      label: 'Enterprise Customers',
      description: 'Fortune 500 & government agencies'
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      value: '1000%+',
      label: 'Average ROI',
      description: 'Proven business impact'
    }
  ];

  const categories = [
    {
      name: 'Quantum AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      count: 4
    },
    {
      name: 'AI Manufacturing',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      count: 3
    },
    {
      name: 'Blockchain Finance',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      count: 2
    },
    {
      name: 'Space Technology',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      count: 2
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4" />
            Revolutionary Micro SAAS Services
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Business Technology</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of micro SAAS solutions powered by quantum computing, 
            artificial intelligence, and cutting-edge technology. Transform your business with 
            services that were once only available to Fortune 100 companies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center group hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  {stat.icon}
                </motion.div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-200 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Service Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-lg p-4 text-center hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg mb-3 text-white`}>
                  {category.icon}
                </div>
                <div className="text-white font-semibold mb-1">{category.name}</div>
                <div className="text-gray-400 text-sm">{category.count} services</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revolutionary Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {revolutionaryMicroSaasServices.map((service, index) => (
            <RevolutionaryServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises already using our revolutionary micro SAAS services. 
              Start your free trial today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Start Free Trial
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300"
              >
                View All Services
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryServices;