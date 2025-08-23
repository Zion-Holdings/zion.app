import React, { useEffect, useState, useCallback, memo } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3 } from 'lucide-react';

// Memoized feature components for better performance
const FeatureCard = memo(({ feature, index }: { feature: any; index: number }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -10, scale: 1.02 }}
    onClick={() => window.location.href = feature.href}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = feature.href;
      }
    }}
    aria-label={`Learn more about ${feature.title}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6">
        <feature.icon className="w-full h-full text-white" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
      <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

// Memoized service card component
const ServiceCard = memo(({ service, index }: { service: any; index: number }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5, scale: 1.02 }}
    onClick={() => window.location.href = service.href}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = service.href;
      }
    }}
    aria-label={`Learn more about ${service.title}`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    <div className="relative p-6">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>
        <service.icon className="w-full h-full text-white" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
));

ServiceCard.displayName = 'ServiceCard';

// Memoized stats component
const StatsCard = memo(({ stat, index }: { stat: any; index: number }) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5 }}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
    <div className="text-gray-400">{stat.label}</div>
  </motion.div>
));

StatsCard.displayName = 'StatsCard';

const Homepage2025: React.FC = () => {
  // Performance optimization: Reduce particle count and use useCallback
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence driving business transformation", href: "/ai-services" },
    { icon: Shield, title: "Enterprise Security", description: "Military-grade cybersecurity protecting your digital assets", href: "/cybersecurity" },
    { icon: Rocket, title: "Innovation First", description: "Pioneering the future with breakthrough technologies", href: "/solutions" },
    { icon: Globe, title: "Global Reach", description: "Serving clients worldwide with localized expertise", href: "/about" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power for complex problems", href: "/quantum-computing" },
    { icon: Database, title: "Data Intelligence", description: "Transform raw data into actionable business insights", href: "/data-analytics" }
  ];

  const stats = [
    { number: "500+", label: "Clients Worldwide", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/demo';
  }, []);

  const services = [
    { icon: Brain, title: "AI & Machine Learning", description: "Advanced AI solutions for enterprise automation", gradient: "from-purple-500 to-pink-500", href: "/ai-services" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power", gradient: "from-cyan-500 to-blue-500", href: "/quantum-computing" },
    { icon: Shield, title: "Cybersecurity", description: "Military-grade protection for digital assets", gradient: "from-red-500 to-orange-500", href: "/cybersecurity" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions for growth", gradient: "from-emerald-500 to-teal-500", href: "/cloud-platform" },
    { icon: BarChart3, title: "Data Analytics", description: "Transform data into actionable insights", gradient: "from-indigo-500 to-purple-500", href: "/data-analytics" },
    { icon: Lock, title: "Blockchain Solutions", description: "Secure, transparent digital infrastructure", gradient: "from-yellow-500 to-orange-500", href: "/blockchain" }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Optimized Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Reduced particle count for better performance */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
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
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with cutting-edge AI, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started Today
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
                onClick={handleWatchDemo}
                aria-label="Watch a demo of our services"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 inline" />
              </button>
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
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
                <StatsCard key={index} stat={stat} index={index} />
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
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
                <FeatureCard key={index} feature={feature} index={index} />
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From AI-powered automation to quantum computing solutions, we're building the future today
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
                  onClick={() => window.location.href = '/get-started'}
                  aria-label="Start your journey with Zion Tech Group"
                >
                  Start Your Journey
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
                  onClick={() => window.location.href = '/demo'}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;