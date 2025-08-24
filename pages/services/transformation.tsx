import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Rocket, Zap, Shield, Cpu, Database, Users, 
  ArrowRight, CheckCircle, Star, Clock, TrendingUp, Globe
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function DigitalTransformationPage() {
  const services = [
    {
      title: "Digital Strategy & Roadmap",
      description: "Comprehensive digital transformation strategy and implementation planning",
      features: ["Technology Assessment", "Change Management", "ROI Planning", "Implementation Roadmap"],
      price: "From $15,000",
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable solutions",
      features: ["System Analysis", "Migration Planning", "Data Migration", "Performance Optimization"],
      price: "From $25,000",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Process Automation",
      description: "AI-powered automation for improved efficiency and productivity",
      features: ["Workflow Analysis", "RPA Implementation", "Integration", "Monitoring"],
      price: "From $12,000",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Change Management",
      description: "Comprehensive change management and training programs",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],
      price: "From $8,000",
      icon: Users,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Transformations Completed", icon: Rocket },
    { number: "40%", label: "Average Cost Reduction", icon: TrendingUp },
    { number: "300%", label: "ROI Improvement", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="End-to-end digital transformation solutions from Zion Tech Group. Strategy, modernization, automation, and change management services." />
        <meta property="og:title" content="Digital Transformation Services - Zion Tech Group" />
        <meta property="og:description" content="End-to-end digital transformation solutions for modern businesses." />
        <link rel="canonical" href="https://ziontechgroup.com/services/transformation" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              End-to-end digital transformation solutions that modernize your business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From strategy development to implementation, we guide businesses through complete 
              digital transformation journeys that drive innovation, efficiency, and growth.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Start Transformation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Digital Transformation Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive transformation solutions designed to modernize your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital transformation solutions can modernize your operations and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Transformation Assessment
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}