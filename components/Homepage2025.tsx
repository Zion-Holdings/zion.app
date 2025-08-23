import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, TrendingUp, Globe,
  Play, Pause, ChevronLeft, ChevronRight, CheckCircle,
  Clock, Target, Rocket
} from 'lucide-react';

const Homepage2025: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp",
      content: "Zion Tech Group transformed our AI infrastructure, reducing costs by 40% while improving performance by 300%.",
      avatar: "/images/testimonials/sarah.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering",
      company: "InnovateLab",
      content: "Their quantum computing solutions helped us solve complex problems that were previously impossible to tackle.",
      avatar: "/images/testimonials/michael.jpg",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      company: "SpaceTech Institute",
      content: "Zion's space technology platform accelerated our research by 5x, enabling breakthrough discoveries.",
      avatar: "/images/testimonials/emily.jpg",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "AI Services", description: "Cutting-edge solutions", icon: Brain, color: "text-cyan-400" },
    { number: "100+", label: "Quantum Solutions", description: "Next-gen computing", icon: Atom, color: "text-blue-400" },
    { number: "24/7", label: "Autonomous Operations", description: "Always available", icon: Clock, color: "text-purple-400" },
    { number: "∞", label: "Future Possibilities", description: "Unlimited potential", icon: Target, color: "text-green-400" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Advanced machine learning and artificial intelligence solutions tailored to your business needs.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Next-generation quantum computing services for complex problem-solving and optimization.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Innovative space technology solutions for research, exploration, and commercial applications.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive cybersecurity and compliance solutions for enterprise-level protection.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/get-started">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </span>
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                  <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UltraFuturisticServiceCard2026
                service={{
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
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
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
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
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
                }}
                variant="automation"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/services">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  View All Services
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from real businesses that trust Zion Tech Group
              </p>
            </motion.div>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <div className="flex justify-center mb-4">
                      {testimonials.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full mx-1 ${
                            index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                        <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</div>
                        <div className="text-cyan-400 text-sm">{testimonials[currentTestimonial].company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={togglePlayPause}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging Zion Tech Group's innovative solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Schedule Demo
                  </button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;