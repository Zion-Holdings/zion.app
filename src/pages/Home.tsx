
<<<<<<< HEAD
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { AnimatedBackground, FloatingOrbs } from "@/components/ui/AnimatedBackground";
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c75

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      {/* Futuristic Animated Backgrounds */}
      <AnimatedBackground variant="grid" intensity="low" />
      <FloatingOrbs count={8} />

      <ITServiceRequestHero />

        {/* Featured Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Featured Services
=======
import React, { useEffect, useRef } from 'react';
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      {/* Futuristic Background Elements */}
      <div className="quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>
      
      <div className="neural-lines">
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 futuristic-bg">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With AI & Tech</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
              designed to propel your business into the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="quantum-button text-lg px-8 py-4">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border animate-neon-border-glow">
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "100+", label: "AI Services", icon: "🤖", color: "from-cyan-400 to-blue-400" },
                { number: "150+", label: "Micro SAAS Solutions", icon: "💻", color: "from-blue-400 to-purple-400" },
                { number: "24/7", label: "IT Support", icon: "🔧", color: "from-purple-400 to-pink-400" },
                { number: "Global", label: "Service Coverage", icon: "🌍", color: "from-green-400 to-teal-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative mb-4">
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Stay ahead with the latest AI and emerging technologies",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                color: "from-pink-500 to-red-500"
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
>>>>>>> main
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our cutting-edge technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-zion-purple/20 rounded-lg ${feature.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "📱",
                title: "Phone",
                contact: "+1 302 464 0950",
                description: "Call us anytime for immediate assistance",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "✉️",
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                description: "Send us a detailed message",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "📍",
                title: "Address",
                contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                description: "Visit our office for in-person consultation",
                color: "from-purple-500 to-pink-500"
              }
            ].map((method, index) => (
              <div key={index} className="group text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{method.title}</h3>
                <p className="text-cyan-400 font-medium mb-3 whitespace-pre-line group-hover:text-cyan-300 transition-colors duration-300">{method.contact}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{method.description}</p>
              </div>
>>>>>>> main
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <CheckCircle className="w-5 h-5" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
=======
          <div className="text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* New Technologies Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative solutions that drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤖",
                title: "Artificial Intelligence",
                description: "Machine learning, NLP, computer vision, and predictive analytics",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🔗",
                title: "Blockchain",
                description: "Smart contracts, decentralized applications, and secure transactions",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "☁️",
                title: "Cloud Computing",
                description: "AWS, Azure, Google Cloud, and hybrid cloud solutions",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🌐",
                title: "IoT & Edge",
                description: "Connected devices, edge computing, and real-time analytics",
                color: "from-green-500 to-teal-500"
              }
            ].map((tech, index) => (
              <div key={index} className="group text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{tech.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> main
    </div>
  );
}
