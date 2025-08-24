import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Define Your Needs',
      description: 'Tell us about your project requirements, timeline, and budget.',
      icon: CheckCircle,
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      number: '02',
      title: 'AI-Powered Matching',
      description: 'Our AI analyzes your needs and matches you with the perfect experts.',
      icon: Sparkles,
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      number: '03',
      title: 'Connect & Collaborate',
      description: 'Start working with your matched team and track progress in real-time.',
      icon: ArrowRight,
      color: 'from-zion-blue to-zion-purple'
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
              <Sparkles className="w-4 h-4 mr-2" />
              Simple Process
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get started with Zion Tech Group in just three simple steps. Our AI-powered platform 
            makes finding the right tech solutions faster and easier than ever before.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-zion-cyan/30 to-zion-purple/30 z-10 transform translate-x-1/2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}

              <div className="relative bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                {/* Step Number */}
                <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{step.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-zion-slate-light">Join thousands of businesses already using Zion Tech Group</p>
            </div>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}