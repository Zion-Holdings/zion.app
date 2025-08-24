import React from 'react';
import { Header } from "@/components/Header";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEO } from "@/components/SEO";
import { EnhancedServicesShowcase } from "@/components/services/EnhancedServicesShowcase";
import { FuturisticAnimatedBackground } from "@/components/ui/FuturisticAnimatedBackground";
import { motion } from "framer-motion";
import { 
  Zap, 
  Cloud, 
  Shield, 
  Brain, 
  Globe, 
  Rocket, 
  Star, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function EnhancedServicesPage() {
  const serviceHighlights = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning services",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and enterprise infrastructure management",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions with compliance and threat detection",
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end business transformation and innovation consulting",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    }
  ];

  const stats = [
    { label: "Services Available", value: "25+", icon: Zap },
    { label: "AI Score Average", value: "95%", icon: Brain },
    { label: "Global Reach", value: "150+ Countries", icon: Globe },
    { label: "Client Satisfaction", value: "98%", icon: Star }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group Services - AI, Cloud, Cybersecurity & Digital Transformation" 
        description="Discover Zion Tech Group's comprehensive suite of technology services including AI automation, cloud migration, cybersecurity, blockchain, quantum computing, and digital transformation solutions."
        keywords="AI services, cloud migration, cybersecurity, digital transformation, blockchain development, quantum computing, Zion Tech Group, technology consulting"
        canonical="https://ziontechgroup.com/services"
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark pt-24 pb-20">
          <FuturisticAnimatedBackground variant="cyberpunk" intensity="low" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI, cloud infrastructure, cybersecurity, 
                and digital transformation solutions designed for the future.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-zinc-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business strategies to deliver 
                exceptional results that drive growth and innovation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="text-center p-6 rounded-xl border border-zinc-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${highlight.bgColor} flex items-center justify-center`}>
                    <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                  <p className="text-zinc-400 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Showcase */}
        <EnhancedServicesShowcase />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-slate-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology services 
                to stay ahead of the competition and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TrendingUp className="w-5 h-5" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </>
  );
}