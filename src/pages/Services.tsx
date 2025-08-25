<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      services: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Machine Learning Models",
        "AI Chatbots",
        "Process Automation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Security Audits",
        "Incident Response",
        "Compliance Management",
        "Security Training"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and efficient development operations",
      services: [
        "Cloud Migration",
        "Infrastructure as Code",
        "CI/CD Pipelines",
        "Container Orchestration",
        "Monitoring & Logging",
        "Performance Optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      services: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "System Integration",
        "Legacy Modernization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies and implementation",
      services: [
        "Digital Strategy",
        "Process Optimization",
        "Change Management",
        "Technology Assessment",
        "Digital Roadmap",
        "Success Metrics"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Emerging Technologies",
      description: "Innovative solutions using the latest cutting-edge technologies",
      services: [
        "Blockchain Solutions",
        "IoT Integration",
        "AR/VR Applications",
        "Quantum Computing",
        "Edge Computing",
        "5G Solutions"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cybersecurity, cloud solutions, and digital transformation."
        keywords="AI services, cybersecurity, cloud solutions, software development, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions including predictive analytics, natural language processing, and computer vision.",
      features: ["Machine Learning Models", "Predictive Analytics", "NLP Solutions", "Computer Vision"],
      category: "AI/ML"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, compliance, and risk management.",
      features: ["Threat Detection", "Compliance & Audit", "Risk Assessment", "Security Monitoring"],
      category: "Security"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & Infrastructure",
      description: "Cloud migration, infrastructure management, and scalable solutions for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Management", "Scalable Solutions", "DevOps"],
      category: "Cloud"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      features: ["Process Automation", "Digital Workflows", "Legacy Modernization", "Change Management"],
      category: "Transformation"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives.",
      features: ["Technology Strategy", "Architecture Design", "Implementation Planning", "Performance Optimization"],
      category: "Consulting"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Solutions",
      description: "Worldwide technology solutions with local expertise and 24/7 support.",
      features: ["Global Deployment", "Local Expertise", "24/7 Support", "Multi-language Support"],
      category: "Global"
    }
  ];

  const industries = [
    "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Government"
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cybersecurity, cloud infrastructure, and digital transformation solutions." />
        <meta name="keywords" content="IT services, AI solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation.
              From AI to cybersecurity, we deliver the expertise you need to succeed.
            </p>
>>>>>>> main
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-zion-cyan mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/services/${service.category.toLowerCase()}`}
                    className="text-zion-cyan hover:text-zion-cyan-light flex items-center group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div key={industry} className="bg-zion-blue-light/10 rounded-lg p-6 text-center border border-zion-purple/20 hover:border-zion-cyan/40 transition-colors">
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
<<<<<<< HEAD
              </div>

              {/* Service Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-zion-slate-light">
                    {service.pricingModel}
                  </span>
                </div>
                {service.marketPrice && (
                  <p className="text-sm text-zion-slate-light mt-1">
                    Market: {service.marketPrice}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-purple mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
=======
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative bg-zion-blue/30 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{category.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zion-blue/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </motion.div>

<<<<<<< HEAD
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-lg font-bold text-zion-cyan mb-2">Call Us</h3>
                <p className="text-zion-slate-light text-sm mb-2">Available 24/7</p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-lg font-bold text-zion-cyan mb-2">Email Us</h3>
                <p className="text-zion-slate-light text-sm mb-2">Quick response</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-zion-cyan mb-2">Visit Us</h3>
                <p className="text-zion-slate-light text-sm mb-2">Main office</p>
                <p className="text-zion-slate-light text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
=======
              ))}
>>>>>>> main
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business. Contact our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
              >
<<<<<<< HEAD
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </a>
                  <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Services
                  </a>
                  <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </a>
                  <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro SAAS Services
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
=======
                Contact Us
              </Link>
>>>>>>> main
            </div>
=======
import React from 'react';

export function Services() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8">
          Our Services
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Comprehensive AI, IT, and technology solutions to transform your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-zion-cyan">AI & Machine Learning</h3>
            <p className="text-zion-slate-light">Custom AI development, ML model training, and strategic consulting</p>
          </div>
          <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-zion-cyan">Cloud & Infrastructure</h3>
            <p className="text-zion-slate-light">Migration, DevOps, Kubernetes management, and optimization</p>
          </div>
          <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-zion-cyan">Cybersecurity</h3>
            <p className="text-zion-slate-light">Security audits, compliance, threat protection, and monitoring</p>
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
          </div>
        </section>
      </div>
<<<<<<< HEAD
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified professionals with years of experience in cutting-edge technologies"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
              },
              {
                icon: Users,
                title: "Client Focused",
                description: "Dedicated to understanding your business needs and delivering tailored solutions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan p-5 mx-auto mb-6">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
    </div>
=======
    </>
>>>>>>> main
  );
};

export default Services;