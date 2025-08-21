import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  ArrowRight, Star, TrendingUp, CheckCircle,
  Play, Users, Award, Globe
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { number: '1000+', label: 'Revolutionary Services', icon: Rocket },
  { number: '1000%', label: 'Average ROI', icon: TrendingUp },
  { number: '24/7', label: 'AI-Powered Support', icon: Brain },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
];

const heroFeatures = [
  '🧠 AI Consciousness & Emotional Intelligence',
  '⚛️ Quantum Computing & DNA Computing',
  '🚀 Space Mining & Metaverse Development',
  '🔐 Quantum-Secure Communication',
  '🤖 Autonomous Business Management',
  '🧬 Neuromorphic & Photonic Computing'
];

export default function UltraFuturisticHero2032() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8"
        >
          <span className="text-cyan-400">🚀</span>
          <span className="text-white font-medium">2032 Revolutionary Technology</span>
          <span className="text-pink-400">⚡</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          The Future of
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technology is Here
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          Experience 1000+ revolutionary AI, quantum computing, and emerging technology services. 
          From AI consciousness to space mining automation, we're building tomorrow's solutions today.
        </motion.p>

        {/* Hero Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12"
        >
          {heroFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
            >
              <span className="text-lg">{feature.split(' ')[0]}</span>
              <span className="text-sm">{feature.split(' ').slice(1).join(' ')}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-2xl font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Link>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {heroStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="space-y-6"
        >
          <div className="text-gray-400 text-sm mb-4">Trusted by leading organizations worldwide</div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe className="w-5 h-5 text-purple-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>5.0/5.0 Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our team of technology experts to discuss how our revolutionary 2032 services can drive your business forward with unprecedented ROI and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-cyan-400">
              <span>📱</span>
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <span>✉️</span>
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-pink-400">
              <span>📍</span>
              <span className="text-sm">{contactInfo.address}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-purple-500/20 text-6xl animate-float">⚛️</div>
        <div className="absolute top-1/3 right-1/4 text-cyan-500/20 text-5xl animate-float-delayed">🧠</div>
        <div className="absolute bottom-1/4 left-1/3 text-emerald-500/20 text-4xl animate-float">🚀</div>
        <div className="absolute bottom-1/3 right-1/3 text-pink-500/20 text-5xl animate-float-delayed">⚡</div>
      </div>
    </section>
  );
}

// Custom animations
const floatAnimation = {
  animation: 'float 6s ease-in-out infinite',
};

const floatDelayedAnimation = {
  animation: 'float 6s ease-in-out infinite 3s',
};

// Add custom CSS for floating animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float 6s ease-in-out infinite 3s;
    }
  `;
  document.head.appendChild(style);
}