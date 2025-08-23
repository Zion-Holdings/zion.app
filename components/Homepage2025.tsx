import React, { Suspense, lazy, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, ChevronDown, Play, Pause, CheckCircle
} from 'lucide-react';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2025: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Enhanced animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotating testimonials
  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "TechCorp Industries"
    },
    {
      quote: "Their quantum computing expertise gave us a competitive edge in the market. Highly recommended!",
      author: "Michael Rodriguez",
      role: "VP Engineering",
      company: "Quantum Solutions Inc."
    },
    {
      quote: "The autonomous systems they implemented increased our efficiency by 300%. Game-changing technology.",
      author: "Dr. Emily Watson",
      role: "Head of Innovation",
      company: "FutureTech Labs"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const statsData = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services'
    },
    {
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      title: 'Quantum Computing',
      description: 'Next-generation quantum technology solutions'
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: 'Space Technology',
      description: 'Innovative space exploration and mining solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      title: 'Enterprise IT',
      description: 'Scalable enterprise infrastructure and solutions'
    }
  ];

  const serviceOptions = [
    { id: 'ai-ml', name: 'AI & Machine Learning', baseCost: 5000, description: 'Advanced AI solutions for enterprise automation' },
    { id: 'quantum', name: 'Quantum Computing', baseCost: 15000, description: 'Next-generation computational power' },
    { id: 'cybersecurity', name: 'Cybersecurity', baseCost: 8000, description: 'Military-grade protection for digital assets' },
    { id: 'cloud', name: 'Cloud Infrastructure', baseCost: 6000, description: 'Scalable cloud solutions for growth' },
    { id: 'analytics', name: 'Data Analytics', baseCost: 4000, description: 'Transform data into actionable insights' },
    { id: 'blockchain', name: 'Blockchain Solutions', baseCost: 7000, description: 'Secure, transparent digital infrastructure' }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  useEffect(() => {
    const total = selectedServices.reduce((sum, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return sum + (service?.baseCost || 0);
    }, 0);
    setEstimatedCost(total);
  }, [selectedServices]);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. The AI solutions alone increased our efficiency by 300%.",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering, InnovateLab",
      content: "Their quantum computing platform solved problems we thought were impossible. Game-changing technology.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, BioTech Solutions",
      content: "The cybersecurity implementation was seamless and robust. We feel completely protected.",
      rating: 5,
      company: "BioTech Solutions"
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <StructuredData type="organization" data={{}} />
      <StructuredData type="website" data={{}} />
      <Layout>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>

      {/* Main Content */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Elements with reduced animation for better performance */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ y }}
          >
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </motion.div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Leading Technology Innovation 2025
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {statsData.map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div className="p-6 rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                id="services-heading"
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our most innovative and cutting-edge technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 h-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {service.tagline}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.id}`}>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="py-20 px-4 bg-black/30 relative"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                id="testimonials-heading"
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by industry leaders worldwide
              </p>
            </motion.div>

            {/* Testimonial Controls */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 hover:bg-cyan-500/30 transition-colors"
                aria-label={isPlaying ? 'Pause testimonials' : 'Play testimonials'}
              >
                {isPlaying ? <Pause className="w-5 h-5 text-cyan-400" /> : <Play className="w-5 h-5 text-cyan-400" />}
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Display */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl text-white mb-8 italic leading-relaxed">
                "{testimonials[currentSlide].quote}"
              </blockquote>
              <div className="text-center">
                <div className="text-lg font-semibold text-cyan-400">
                  {testimonials[currentSlide].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions to stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Start Free Trial
                </motion.button>
                
                <motion.button 
                  className="px-10 py-5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <NewsletterSubscription />
      </main>
      </Layout>
    </>
  );
};

export default Homepage2025;