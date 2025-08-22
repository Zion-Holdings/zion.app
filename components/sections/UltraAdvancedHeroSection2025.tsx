import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  ArrowRight, Star, Zap, Brain, Rocket, Shield, 
  Atom, Cpu, Cloud, Target, Users, Award,
  CheckCircle, TrendingUp, Globe, Sparkles,
  Phone, Mail, MapPin, ChevronDown,
  ArrowUpRight, Lightbulb, Code, Database, Server
} from 'lucide-react';

// Lazy load heavy components
const LazyAnimatedBackground = dynamic(() => import('../effects/AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
});

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'AI Services', value: '50+', icon: <Brain className="w-6 h-6" aria-hidden="true" />, color: 'text-purple-400' },
  { label: 'Quantum Solutions', value: '25+', icon: <Atom className="w-6 h-6" aria-hidden="true" />, color: 'text-green-400' },
  { label: 'Micro SAAS', value: '100+', icon: <Rocket className="w-6 h-6" aria-hidden="true" />, color: 'text-orange-400' },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-6 h-6" aria-hidden="true" />, color: 'text-cyan-400' }
];

const keyFeatures = [
  'Revolutionary AI Consciousness & Emotional Intelligence',
  'Quantum Computing & Space Resource Mining',
  'Zero Trust Security & Edge Computing',
  'AI-Powered Business Automation & Analytics',
  'Healthcare AI & Manufacturing 4.0 Solutions',
  'Creative AI & Educational Technology Platforms'
];

const UltraAdvancedHeroSection2025: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Optimized feature rotation
  useEffect(() => {
    if (!isIntersecting) return;
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % keyFeatures.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isIntersecting]);

  // Memoized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleContactClick = useCallback((method: 'phone' | 'email' | 'address') => {
    switch (method) {
      case 'phone':
        window.location.href = `tel:${contactInfo.mobile}`;
        break;
      case 'email':
        window.location.href = `mailto:${contactInfo.email}`;
        break;
      case 'address':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`, '_blank');
        break;
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Performance-optimized background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />}>
        <LazyAnimatedBackground />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-gray-200">
              Future of Technology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering the next generation of AI consciousness, quantum computing, and autonomous business solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/services" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
                aria-label="Explore our services"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                aria-label="Get in touch with us"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Rotating Features */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-cyan-300 font-medium"
                aria-live="polite"
                aria-label={`Current feature: ${keyFeatures[currentFeature]}`}
              >
                {keyFeatures[currentFeature]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Phone, label: 'Call Us', value: contactInfo.mobile, action: () => handleContactClick('phone') },
              { icon: Mail, label: 'Email Us', value: contactInfo.email, action: () => handleContactClick('email') },
              { icon: MapPin, label: 'Visit Us', value: contactInfo.address, action: () => handleContactClick('address') }
            ].map((contact, index) => (
              <motion.button
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={contact.action}
                className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <contact.icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-400 mb-1">{contact.label}</span>
                <span className="text-white font-medium text-center">{contact.value}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to learn more"
          onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UltraAdvancedHeroSection2025;