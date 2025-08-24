import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Brain, Cloud } from 'lucide-react';

export default function EnhancedHero() {
  const features = [
    { icon: <Zap className="w-6 h-6" />, text: "Lightning Fast" },
    { icon: <Shield className="w-6 h-6" />, text: "Secure & Reliable" },
    { icon: <Brain className="w-6 h-6" />, text: "AI-Powered" },
    { icon: <Cloud className="w-6 h-6" />, text: "Cloud-Native" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-quantum-mesh"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-holographic-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zion Tech Group
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading the future of technology with innovative solutions, cutting-edge expertise, 
            and transformative digital experiences that drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-zion-blue-dark border-2 border-zion-cyan text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-zion-purple hover:bg-zion-blue-dark/80 transition-all duration-300">
              View Services
            </button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-zion-blue-dark/50 border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {feature.icon}
                </div>
                <p className="text-zion-slate-light font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zion-purple mb-2">50+</div>
              <div className="text-zion-slate-light">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zion-blue mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}