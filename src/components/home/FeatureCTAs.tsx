import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe, Users } from 'lucide-react';

export function FeatureCTAs() {
  const features = [
    {
      title: 'AI-Powered Matching',
      description: 'Our advanced AI connects you with the perfect tech solutions and talent.',
      icon: Sparkles,
      href: '/ai-services',
      color: 'from-zion-cyan to-zion-purple',
      gradient: 'from-zion-cyan/20 to-zion-purple/20'
    },
    {
      title: 'Global Network',
      description: 'Access tech experts and services from over 150 countries worldwide.',
      icon: Globe,
      href: '/talent',
      color: 'from-zion-blue to-zion-cyan',
      gradient: 'from-zion-blue/20 to-zion-cyan/20'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable solutions for large organizations and complex projects.',
      icon: Users,
      href: '/enterprise-solutions',
      color: 'from-zion-purple to-zion-blue',
      gradient: 'from-zion-purple/20 to-zion-blue/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Key Features
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the future of tech marketplace with our cutting-edge features and global network
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                to={feature.href}
                className="block bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full"
              >
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl px-8 py-8 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-zion-slate-light">Join thousands of businesses already using Zion Tech Group</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="bg-zion-blue-light/10 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/40 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}