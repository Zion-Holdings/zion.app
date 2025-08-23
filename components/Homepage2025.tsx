import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3, Star, Zap, X } from 'lucide-react';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate features for better engagement
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence driving business transformation", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Enterprise Security", description: "Military-grade cybersecurity protecting your digital assets", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Innovation First", description: "Pioneering the future with breakthrough technologies", color: "from-cyan-500 to-blue-500" },
    { icon: Globe, title: "Global Reach", description: "Serving clients worldwide with localized expertise", color: "from-emerald-500 to-teal-500" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power for complex problems", color: "from-indigo-500 to-purple-500" },
    { icon: Database, title: "Data Intelligence", description: "Transform raw data into actionable business insights", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "500+", label: "Clients Worldwide", icon: Users, color: "from-cyan-500 to-blue-500" },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Support Available", icon: Shield, color: "from-purple-500 to-pink-500" },
    { number: "50+", label: "Countries Served", icon: Globe, color: "from-orange-500 to-red-500" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. 40% efficiency improvement in just 3 months.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "Their quantum computing expertise helped us solve complex optimization problems that were previously impossible.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, BioTech Labs",
      content: "The cybersecurity implementation exceeded our expectations. We feel completely protected against modern threats.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              <motion.div
                className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
            <p className="text-gray-400">Preparing the future...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/50 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.h1
              id="hero-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering the future of technology with cutting-edge AI, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started Today
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Watch demo of Zion Tech Group solutions"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 inline" />
              </button>
            </motion.div>

            {/* Interactive Feature Showcase */}
            <motion.div
              className="mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-lg font-medium text-gray-300 mb-2">Featured Technology</h3>
                <div className="flex justify-center space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeFeature ? 'bg-cyan-400 scale-125' : 'bg-gray-600'
                      }`}
                      aria-label={`View ${features[index].title} feature`}
                    />
                  ))}
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} p-4`}>
                      {(() => {
                        const IconComponent = features[activeFeature].icon;
                        return <IconComponent className="w-full h-full text-white" />;
                      })()}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{features[activeFeature].title}</h4>
                  <p className="text-gray-300 text-lg">{features[activeFeature].description}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Social Proof Section */}
        <section className="py-20 px-4" aria-labelledby="stats-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join hundreds of companies already transforming their business with our solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our comprehensive suite of cutting-edge technologies and services sets us apart in the industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setActiveFeature(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveFeature(index);
                    }
                  }}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from industry leaders who trust us with their technology transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-4" />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="py-20 px-4" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From AI-powered automation to quantum computing solutions, we're building the future today
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "AI & Machine Learning", description: "Advanced AI solutions for enterprise automation", color: "from-purple-500 to-pink-500" },
                { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power", color: "from-cyan-500 to-blue-500" },
                { icon: Shield, title: "Cybersecurity", description: "Military-grade protection for digital assets", color: "from-red-500 to-orange-500" },
                { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions for growth", color: "from-emerald-500 to-teal-500" },
                { icon: BarChart3, title: "Data Analytics", description: "Transform data into actionable insights", color: "from-indigo-500 to-purple-500" },
                { icon: Lock, title: "Blockchain Solutions", description: "Secure, transparent digital infrastructure", color: "from-yellow-500 to-orange-500" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Navigate to service page
                    }
                  }}
                  aria-label={`Learn more about ${service.title} services`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  aria-label="Start your business transformation journey"
                >
                  Start Your Journey
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  aria-label="Schedule a demo of our solutions"
                >
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <AnimatePresence>
          {showNewsletter && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 z-50"
            >
              <div className="bg-gradient-to-r from-cyan-500/95 to-blue-500/95 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/50 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Stay Updated</h3>
                  <button
                    onClick={() => setShowNewsletter(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close newsletter signup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Get the latest insights on AI, quantum computing, and emerging technologies.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-cyan-600 rounded-lg font-medium hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Newsletter Button */}
        <motion.button
          className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 z-40"
          onClick={() => setShowNewsletter(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open newsletter signup"
        >
          <Zap className="w-6 h-6 text-white mx-auto" />
        </motion.button>
      </main>
    </Layout>
  );
};

export default Homepage2025;