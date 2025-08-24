import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Code, Cloud, Brain, Shield, Zap, Globe } from 'lucide-react';
import AdvancedHero from '../components/AdvancedHero';
import AdvancedServicesShowcase from '../components/AdvancedServicesShowcase';
import AdvancedTestimonials from '../components/AdvancedTestimonials';
import AdvancedContactForm from '../components/AdvancedContactForm';
import AdvancedStats from '../components/AdvancedStats';
import AdvancedFeaturesShowcase from '../components/AdvancedFeaturesShowcase';
import AdvancedPricing from '../components/AdvancedPricing';
import AdvancedTeamShowcase from '../components/AdvancedTeamShowcase';
import AdvancedCaseStudies from '../components/AdvancedCaseStudies';
import AdvancedNewsletter from '../components/AdvancedNewsletter';
import AdvancedFAQ from '../components/AdvancedFAQ';
import AdvancedBlog from '../components/AdvancedBlog';
import AdvancedAnalytics from '../components/AdvancedAnalytics';
import AdvancedCustomerSuccess from '../components/AdvancedCustomerSuccess';
import AdvancedProjectManagement from '../components/AdvancedProjectManagement';
import AdvancedClientPortal from '../components/AdvancedClientPortal';
import AdvancedTimeTracking from '../components/AdvancedTimeTracking';
import AdvancedInvoiceManagement from '../components/AdvancedInvoiceManagement';
import AdvancedTeamScheduling from '../components/AdvancedTeamScheduling';
import AdvancedPerformanceDashboard from '../components/AdvancedPerformanceDashboard';
import AdvancedWorkflowAutomation from '../components/AdvancedWorkflowAutomation';
import AdvancedAnalyticsDashboard from '../components/AdvancedAnalyticsDashboard';
import AdvancedProjectHub from '../components/AdvancedProjectHub';
import AdvancedAIAssistant from '../components/AdvancedAIAssistant';
import AdvancedPerformanceOptimizer from '../components/AdvancedPerformanceOptimizer';
import FinalIntegrationHub from '../components/FinalIntegrationHub';
import EnhancedPerformanceMetrics from '../components/EnhancedPerformanceMetrics';
import EnhancedSecurityDashboard from '../components/EnhancedSecurityDashboard';

export default function HomePage() {
  const [_isMenuOpen, _setIsMenuOpen] = useState(false);
  const [_activeSection, _setActiveSection] = useState('hero');
  const [_isLoaded, _setIsLoaded] = useState(false);

  useEffect(() => {
    _setIsLoaded(true);
  }, []);

  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: '🚀' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: '🛡️' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: '⏰' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: '🤖' },
  ];

  const services = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable, focused software solutions for specific business needs',
      icon: '💼',
      features: ['Custom Development', 'API Integration', 'Cloud Deployment', '24/7 Support']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business automation',
      icon: '🧠',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions for scalability and reliability',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Disaster Recovery']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: '🔒',
      features: ['Threat Detection', 'Penetration Testing', 'Compliance Auditing', 'Incident Response']
    }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️' },
    { name: 'Node.js & Python', icon: '🐍' },
    { name: 'AWS & Azure', icon: '☁️' },
    { name: 'Docker & Kubernetes', icon: '🐳' },
    { name: 'TensorFlow & PyTorch', icon: '🤖' },
    { name: 'Blockchain & Web3', icon: '⛓️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions | Micro SaaS & AI Services</title>
        <meta name="description" content="Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services. Transform your business with our innovative solutions. 200+ services, 99.99% uptime guarantee." />
        <meta name="keywords" content="micro SaaS, AI services, technology solutions, Zion Tech Group, cloud infrastructure, cybersecurity, machine learning, software development, Delaware tech company" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-label="Hero">
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
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our comprehensive suite of cutting-edge micro SaaS services, IT solutions, and AI innovations. 
              From quantum computing to space technology, we&apos;re building the future today.
            </motion.p>

        {/* Enhanced Performance Metrics Section */}
        <EnhancedPerformanceMetrics 
          title="Advanced Performance Analytics"
          subtitle="Real-time monitoring and intelligent insights for optimal system performance"
          showCharts={true}
          autoRefresh={true}
        />

        {/* Enhanced Security Dashboard Section */}
        <EnhancedSecurityDashboard 
          title="Enterprise Security Monitoring"
          subtitle="Comprehensive threat detection and security analytics for your infrastructure"
          showThreats={true}
          autoRefresh={true}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&rsquo;s discuss how our technology solutions can drive growth, efficiency, and innovation 
              for your organization.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="Explore our services"
              >
                Explore Services
              </Link>
              <Link 
                href="#contact" 
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Contact us"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce" aria-hidden="true">🚀</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse" aria-hidden="true">⚛️</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin" aria-hidden="true">🤖</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-bounce" aria-hidden="true">💎</div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800" aria-label="Company Statistics">
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
                <div className="flex justify-center mb-4" aria-hidden="true">
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900" aria-label="Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive business transformation and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center" aria-hidden="true">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-800" aria-label="Technologies We Use">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{tech.icon}</div>
                <div className="text-white font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-16" aria-label="Contact Information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">📱</div>
                <div className="font-semibold text-lg mb-2">Mobile</div>
                <a 
                  href="tel:+13024640950" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  aria-label="Call us at +1 302 464 0950"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">✉️</div>
                <div className="font-semibold text-lg mb-2">Email</div>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">📍</div>
                <div className="font-semibold text-lg mb-2">Address</div>
                <address className="text-blue-100 not-italic">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </address>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Link 
                href="#contact" 
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Get started with us"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
