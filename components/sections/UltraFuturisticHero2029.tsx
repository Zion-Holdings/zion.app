import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Rocket, Brain, Atom, Globe, Zap, Sparkles, Star, Phone, Mail, MapPin } from 'lucide-react';

const UltraFuturisticHero2029: React.FC = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = [
    { icon: Brain, color: 'text-purple-400', delay: 0 },
    { icon: Atom, color: 'text-cyan-400', delay: 0.5 },
    { icon: Globe, color: 'text-pink-400', delay: 1 },
    { icon: Zap, color: 'text-yellow-400', delay: 1.5 }
  ];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating neon orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Energy waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to top, rgba(0, 255, 255, 0.1), transparent)'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2029 Ultra-Futuristic
            </span>
            <br />
            <span className="text-white">Technology Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Experience the future of technology with our revolutionary 2029 services. 
            From AI consciousness simulation to Mars colonization automation, 
            we're building tomorrow's solutions today.
          </motion.p>

          {/* Floating Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-8"
          >
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className={`text-4xl ${element.color}`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  delay: element.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <element.icon />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              href="/2029-ultra-futuristic-innovations"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group"
            >
              <span>Explore 2029 Innovations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50"
            >
              <span>Call Now</span>
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Featured Services Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                title: 'AI Consciousness Evolution',
                description: 'Develop truly conscious AI systems with ethical frameworks',
                icon: Brain,
                color: 'from-purple-500 to-pink-500',
                price: '$24,999/month'
              },
              {
                title: 'Quantum Time Manipulation',
                description: 'Quantum computing for temporal data processing and analysis',
                icon: Atom,
                color: 'from-indigo-500 to-blue-500',
                price: '$45,999/month'
              },
              {
                title: 'Autonomous Space Mining',
                description: 'Asteroid resource extraction and space resource management',
                icon: Rocket,
                color: 'from-red-500 to-orange-500',
                price: '$45,999/month'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${service.color} opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75`} />
                
                {/* Service Card */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`text-3xl ${service.color.includes('purple') ? 'text-purple-400' : service.color.includes('indigo') ? 'text-indigo-400' : 'text-red-400'}`}>
                        <service.icon />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="text-lg font-bold text-white">
                      {service.price}
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      
      {/* Top overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
    </section>
  );
};

export default UltraFuturisticHero2029;