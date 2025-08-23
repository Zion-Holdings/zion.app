import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Rocket, Brain, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function EnhancedHero2026V4() {
  const features = [
    { icon: Brain, text: 'AI-Powered Solutions', color: 'from-purple-400 to-pink-400' },
    { icon: Zap, text: 'Quantum Technology', color: 'from-blue-400 to-cyan-400' },
    { icon: Rocket, text: '2026 Innovation', color: 'from-green-400 to-emerald-400' },
    { icon: Star, text: 'Industry Leading', color: 'from-yellow-400 to-orange-400' }
  ];

  const stats = [
    { number: '1000+', label: 'Services & Solutions', icon: Sparkles },
    { number: '1000%', label: 'ROI Guarantee', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: CheckCircle }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              REVOLUTIONARY
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              2026
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              TECHNOLOGY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
            Transform your business with cutting-edge AI, quantum computing, and enterprise solutions 
            that are <span className="text-white font-semibold">years ahead of the competition</span>. 
            Experience the future of technology today.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-300 font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-8 h-8 text-purple-400 mr-3" />
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            href="https://ziontechgroup.com/enhanced-2026-services-showcase-v4"
            className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25"
          >
            Explore 2026 Services
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
          
          <Button
            href="tel:+13024640950"
            variant="outline"
            className="px-12 py-6 text-xl font-bold border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          >
            Call +1 302 464 0950
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-400">
                Join thousands of businesses already transforming with our technology
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}