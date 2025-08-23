import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { 
  Zap, 
  Brain, 
  Atom, 
  Shield, 
  Rocket, 
  Cpu, 
  Database,
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';
import AccessibilityEnhancer from './AccessibilityEnhancer';
import PerformanceMonitor from './PerformanceMonitor';
import { 
  LoadingContent, 
  HeroSkeleton, 
  CategorySkeleton, 
  ServiceCardSkeleton 
} from './LoadingStates';

const EnhancedHomepage2045: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-400 mb-6">Please refresh the page to try again</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <AccessibilityEnhancer>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions & Innovation</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge technology solutions, AI integration, cybersecurity, and digital transformation services. Transform your business with our innovative tech expertise." />
        <meta name="keywords" content="technology solutions, AI integration, cybersecurity, digital transformation, software development, IT consulting" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions & Innovation" />
        <meta property="og:description" content="Transform your business with Zion Tech Group's cutting-edge technology solutions, AI integration, and cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading Technology Solutions & Innovation" />
        <meta name="twitter:description" content="Transform your business with Zion Tech Group's cutting-edge technology solutions, AI integration, and cybersecurity services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Leading technology solutions provider specializing in AI integration, cybersecurity, and digital transformation",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "areaServed": "Worldwide"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold text-cyan-400"
                >
                  Zion Tech
                </motion.div>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors focus-ring-cyan" aria-current="page">Home</a>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors focus-ring-cyan">Services</a>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors focus-ring-cyan">About</a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors focus-ring-cyan">Contact</a>
              </div>

              <div className="md:hidden">
                <button
                  className="text-gray-300 hover:text-cyan-400 transition-colors focus-ring-cyan"
                  aria-label="Toggle mobile menu"
                  aria-expanded="false"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Future of Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge AI solutions, cybersecurity expertise, and digital transformation strategies that drive innovation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 focus-ring-cyan shadow-glow"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 focus-ring-cyan"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-400">Expert Team</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "AI Integration",
                  description: "Seamlessly integrate artificial intelligence into your existing systems to automate processes and gain valuable insights.",
                  features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"]
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Protect your digital assets with enterprise-grade security solutions and threat intelligence.",
                  features: ["Threat Detection", "Incident Response", "Security Audits"]
                },
                {
                  icon: Rocket,
                  title: "Digital Transformation",
                  description: "Modernize your business operations with cutting-edge digital solutions and cloud infrastructure.",
                  features: ["Cloud Migration", "Process Automation", "Legacy Modernization"]
                },
                {
                  icon: Brain,
                  title: "Data Analytics",
                  description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
                  features: ["Business Intelligence", "Real-time Dashboards", "Data Mining"]
                },
                {
                  icon: Cpu,
                  title: "Software Development",
                  description: "Custom software solutions built with modern technologies and best practices.",
                  features: ["Web Applications", "Mobile Apps", "API Development"]
                },
                {
                  icon: Database,
                  title: "Cloud Solutions",
                  description: "Scalable cloud infrastructure and managed services for optimal performance and cost efficiency.",
                  features: ["AWS/Azure/GCP", "DevOps", "Infrastructure as Code"]
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We are a forward-thinking technology company dedicated to helping businesses thrive in the digital age. 
                  Our team of experts combines deep technical knowledge with innovative thinking to deliver solutions that 
                  drive real business value.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Industry-leading expertise in emerging technologies</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Dedicated team of certified professionals</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Proven track record of successful implementations</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Multiple industry awards and recognitions</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-xl border border-cyan-500/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                      <div className="text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                      <div className="text-gray-300">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                      <div className="text-gray-300">Technologies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-gray-300">Support</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Zion Tech Group can help you achieve your technology goals
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-xl text-xl font-semibold transition-all duration-200 focus-ring-cyan shadow-glow"
              >
                Contact Us Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading the future of technology with innovative solutions and expert guidance.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Integration</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Solutions</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Team</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">News</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>info@ziontechgroup.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>123 Tech Street</li>
                  <li>Innovation City, IC 12345</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Performance Monitor */}
        <PerformanceMonitor />
      </div>
    </AccessibilityEnhancer>
  );
};

export default EnhancedHomepage2045;