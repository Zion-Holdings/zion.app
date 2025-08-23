import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Homepage2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

  const services = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      tagline: 'Advanced artificial intelligence solutions',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      price: '$999',
      period: 'month',
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      popular: true,
      category: 'AI',
      icon: '🧠'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      tagline: 'Next-generation computing solutions',
      description: 'Next-generation computing solutions for complex problems',
      price: '$1999',
      period: 'month',
      features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation'],
      popular: false,
      category: 'Quantum',
      icon: '⚛️'
    },
    {
      id: 'process-automation',
      name: 'Process Automation',
      tagline: 'Intelligent automation solutions',
      description: 'Intelligent automation to streamline your operations',
      price: '$799',
      period: 'month',
      features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics'],
      popular: true,
      category: 'Automation',
      icon: '⚡'
    }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="Zion Tech Group homepage">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <motion.div 
            className="text-center max-w-4xl mx-auto relative z-10"
            variants={heroVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the future of technology with innovative solutions that drive business transformation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Learn more about Zion Tech Group"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Trusted by 500+ Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>24/7 Expert Support</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section 
          ref={servicesRef}
          className="py-20 px-4 relative"
          aria-labelledby="services-heading"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed to accelerate your business growth and innovation
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  <UltraFuturisticServiceCard2026
                    service={service}
                    variant={service.category.toLowerCase() as any}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-center mt-16"
            >
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View all Zion Tech Group services"
              >
                View All Services
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;