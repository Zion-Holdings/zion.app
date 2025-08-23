import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3, Star } from 'lucide-react';
import NewsletterSubscription from './NewsletterSubscription';
import StructuredData from './StructuredData';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence driving business transformation" },
    { icon: Shield, title: "Enterprise Security", description: "Military-grade cybersecurity protecting your digital assets" },
    { icon: Rocket, title: "Innovation First", description: "Pioneering the future with breakthrough technologies" },
    { icon: Globe, title: "Global Reach", description: "Serving clients worldwide with localized expertise" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power for complex problems" },
    { icon: Database, title: "Data Intelligence", description: "Transform raw data into actionable business insights" }
  ];

  const stats = [
    { number: "500+", label: "Clients Worldwide", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Countries Served", icon: Globe }
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
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Watch Demo
                <Play className="w-5 h-5 ml-2 inline" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Social Proof Section */}
        <section className="py-20 px-4" aria-labelledby="social-proof-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="social-proof-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Service Calculator Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50" aria-labelledby="calculator-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="calculator-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Cost Calculator
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Estimate the cost of your custom solution by selecting the services you need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Service Selection */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Select Services</h3>
                {serviceOptions.map((service) => (
                  <motion.div
                    key={service.id}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-pointer"
                    onClick={() => handleServiceToggle(service.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => {}}
                      className="w-5 h-5 text-cyan-500 rounded focus:ring-cyan-500 focus:ring-2"
                      aria-label={`Select ${service.name}`}
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">${service.baseCost.toLocaleString()}</div>
                      <div className="text-gray-500 text-sm">base cost</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cost Summary */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Cost Summary</h3>
                <div className="space-y-4 mb-8">
                  {selectedServices.map((serviceId) => {
                    const service = serviceOptions.find(s => s.id === serviceId);
                    return service ? (
                      <div key={serviceId} className="flex justify-between items-center">
                        <span className="text-gray-300">{service.name}</span>
                        <span className="text-cyan-400 font-semibold">${service.baseCost.toLocaleString()}</span>
                      </div>
                    ) : null;
                  })}
                  {selectedServices.length === 0 && (
                    <p className="text-gray-500 text-center py-8">Select services to see cost breakdown</p>
                  )}
                </div>
                
                {selectedServices.length > 0 && (
                  <>
                    <div className="border-t border-gray-600 pt-4 mb-6">
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span className="text-white">Estimated Total:</span>
                        <span className="text-cyan-400">${estimatedCost.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-400">
                      <p>• Custom solutions may vary in pricing</p>
                      <p>• Volume discounts available for enterprise</p>
                      <p>• Free consultation included</p>
                    </div>
                    
                    <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Get Detailed Quote
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20 px-4" aria-labelledby="testimonials-heading">
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real feedback from industry leaders who have transformed their businesses with our solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
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
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6">
                      <feature.icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
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
                { title: "AI & Machine Learning", description: "Advanced AI solutions for enterprise automation", icon: Brain, color: "from-purple-500 to-pink-500" },
                { title: "Quantum Computing", description: "Next-generation computational power", icon: Cpu, color: "from-cyan-500 to-blue-500" },
                { title: "Cybersecurity", description: "Military-grade protection for digital assets", icon: Shield, color: "from-red-500 to-orange-500" },
                { title: "Cloud Infrastructure", description: "Scalable cloud solutions for growth", icon: Cloud, color: "from-emerald-500 to-teal-500" },
                { title: "Data Analytics", description: "Transform data into actionable insights", icon: BarChart3, color: "from-indigo-500 to-purple-500" },
                { title: "Blockchain Solutions", description: "Secure, transparent digital infrastructure", icon: Lock, color: "from-yellow-500 to-orange-500" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4`}>
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
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Schedule a Demo
                </button>
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