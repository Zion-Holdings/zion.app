
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Code, 
  Shield, 
  Sparkles,
  Play,
  ChevronDown
} from 'lucide-react';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your business"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Advanced IT Services",
      description: "Comprehensive technology infrastructure and support"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS Platform",
      description: "Scalable software solutions for modern businesses"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum-Ready Security",
      description: "Future-proof cybersecurity and encryption"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-500 rounded-full blur-sm"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Leading the Future of Technology
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech
                </span>
                <br />
                <span className="text-white">
                  Group
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Transform your business with cutting-edge AI, advanced IT infrastructure, 
                and innovative micro SAAS solutions. We're not just building the future—we're living it.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
                
                <button className="group px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {[
                  { number: "500+", label: "Services Delivered" },
                  { number: "50+", label: "AI Solutions" },
                  { number: "24/7", label: "Support Available" },
                  { number: "99.9%", label: "Uptime Guarantee" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We combine cutting-edge technology with proven expertise to deliver 
                  solutions that drive real business transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                    className={`text-center p-6 rounded-xl transition-all duration-300 ${
                      currentFeature === idx
                        ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 scale-105'
                        : 'bg-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 hover:scale-105'
                    }`}
                  >
                    <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                      currentFeature === idx
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-gray-700 text-cyan-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center mt-16"
          >
            <button
              onClick={scrollToServices}
              className="group flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-sm font-medium">Explore Our Services</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
