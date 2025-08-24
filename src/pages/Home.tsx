
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Users, Award, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3, Rocket, Target, TrendingUp } from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export function Home() {
  const featuredServices = COMPREHENSIVE_SERVICES.slice(0, 6);
  
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Global Clients', value: '50+', icon: Globe },
    { label: 'Team Members', value: '25+', icon: Users },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs by 40%.',
      rating: 5,
      avatar: '/avatars/sarah-j.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      company: 'InnovateLab',
      content: 'The cybersecurity audit they performed was eye-opening. Their team identified vulnerabilities we never knew existed and implemented robust solutions.',
      rating: 5,
      avatar: '/avatars/michael-c.jpg'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Research Director, BioTech Solutions',
      company: 'BioTech Solutions',
      content: 'Their quantum computing expertise helped us solve complex protein folding problems in days instead of months. Game-changing technology.',
      rating: 5,
      avatar: '/avatars/emily-r.jpg'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine Learning, Neural Networks, NLP' },
    { name: 'Quantum Computing', icon: Zap, description: 'Quantum Algorithms, Optimization, Simulation' },
    { name: 'Cybersecurity', icon: Shield, description: 'Threat Detection, Penetration Testing, Compliance' },
    { name: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure, Google Cloud, Hybrid Solutions' },
    { name: 'Web Development', icon: Code, description: 'React, Node.js, Full-Stack Solutions' },
    { name: 'Data Analytics', icon: BarChart3, description: 'Big Data, Predictive Analytics, BI' }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-887f

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
                  AI-Powered Solutions
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
                  Quantum Computing
                </span>
                <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
                  Global Expertise
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                      <div className="text-zion-slate-light text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We leverage the latest advancements in technology to deliver innovative solutions 
                that give your business a competitive edge.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                        <p className="text-zion-slate-light">{tech.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Featured Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover our most popular technology solutions that are transforming businesses 
                across industries worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-zion-cyan font-bold">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-zion-slate-light text-sm capitalize">
                      {service.pricingModel.replace('-', ' ')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say 
                about their experience with Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                      <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that have already revolutionized their operations 
                  with our cutting-edge technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Get Started Today
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
