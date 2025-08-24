<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredServices = [
    {
      title: "AI Development & Machine Learning",
      description: "Custom AI models, predictive analytics, and intelligent automation solutions",
      icon: "🤖",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      price: "Starting at $5,000",
      href: "/services"
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Seamless cloud migration, optimization, and multi-cloud management",
      icon: "☁️",
      features: ["Cloud Migration", "Cost Optimization", "Performance Tuning", "Security Management"],
      price: "Starting at $10,000",
      href: "/services"
    },
    {
      title: "Web & Mobile Development",
      description: "Full-stack web applications and native mobile apps for all platforms",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "API Development", "UI/UX Design"],
      price: "Starting at $8,000",
      href: "/services"
    }
  ];

  const featuredProducts = [
    {
      name: "SmartDoc AI",
      description: "AI-powered document processing and automation platform",
      price: "$99/month",
      category: "AI Automation",
      href: "/products"
    },
    {
      name: "DataViz Pro",
      description: "Advanced business intelligence and data visualization",
      price: "$149/month",
      category: "Business Intelligence",
      href: "/products"
    },
    {
      name: "CloudSync Manager",
      description: "Multi-cloud management and optimization platform",
      price: "$199/month",
      category: "Cloud Management",
      href: "/products"
    }
  ];

  const whyChooseUs = [
    {
      title: "10+ Years Experience",
      description: "Deep expertise in cutting-edge technologies and industry best practices",
      icon: "🎓"
    },
    {
      title: "500+ Projects Delivered",
      description: "Proven track record of successful implementations across various industries",
      icon: "✅"
    },
    {
      title: "99.9% Client Satisfaction",
      description: "Consistent delivery of high-quality solutions that exceed expectations",
      icon: "⭐"
    },
    {
      title: "24/7 Support Available",
      description: "Round-the-clock technical support and maintenance for enterprise clients",
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud & Digital Transformation</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with innovative micro SAAS solutions." />
        <meta name="keywords" content="technology solutions, AI services, cloud migration, web development, mobile apps, cybersecurity, micro SAAS, digital transformation" />
      </Head>
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative micro SAAS services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Our Services
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View Products
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-sm md:text-base opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm md:text-base opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-80">Support Available</div>
            </div>
          </div>
        </div>
        
        {/* Featured Services */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Featured Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-blue-400">{service.price}</span>
                  <Link href={service.href} className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More →
                  </Link>
                </div>
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Innovative Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-400">{product.price}</span>
                  <Link href={product.href} className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More →
                  </Link>
                </div>
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block">
                  Schedule Demo
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{reason.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technologies We Master
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "React & Next.js", "Python & Django", "Node.js & Express", "AWS & Azure", "Docker & Kubernetes",
                "TensorFlow & PyTorch", "PostgreSQL & MongoDB", "Redis & Elasticsearch", "GraphQL & REST APIs",
                "Jenkins & GitLab CI", "Terraform & Ansible", "Prometheus & Grafana"
              ].map((tech, index) => (
                <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how our innovative solutions can drive your digital transformation and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-lg font-semibold mb-2">Phone</div>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Address</div>
              <div className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </div>
            </div>
          </div>
        </div>
      </main>
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: '🚀' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: '🛡️' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: '⏰' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: '🤖' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, technology solutions, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations. 
              From quantum computing to space technology, we're building the future today.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🚀</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse">⚛️</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin">🤖</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-bounce">💎</div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`text-4xl ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">Mobile</div>
                <div className="text-blue-100">+1 302 464 0950</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-semibold">Email</div>
                <div className="text-blue-100">kleber@ziontechgroup.com</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-semibold">Address</div>
                <div className="text-blue-100">364 E Main St STE 1008</div>
                <div className="text-blue-100">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> a8e698aa2a3f65846644470f902bc566286f2743
    </div>
  );
};

export default Home;