import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Star, Loader2
} from 'lucide-react';
import Head from 'next/head';

// Lazy load components for better performance
const TestimonialSection = lazy(() => import('./TestimonialSection'));

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
    <span className="ml-2 text-cyan-400">Loading...</span>
  </div>
);

const Homepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const initializePage = async () => {
      try {
        setIsVisible(true);
        setIsLoading(false);
        
        // Auto-rotate featured services
        const interval = setInterval(() => {
          setCurrentServiceIndex((prev) => (prev + 1) % 6);
        }, 6000);
        
        return () => {
          clearInterval(interval);
        };
      } catch {
        setError('Failed to initialize page');
        setIsLoading(false);
      }
    };

    initializePage();
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2044", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2044", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2044", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2044", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2044", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2044", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2044", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2044", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2044", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2044", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2044", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2044", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2044-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - Revolutionary 2044 Technology",
    "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of revolutionary 2044 technology solutions",
      "url": "https://ziontechgroup.com",
      "foundingDate": "2024",
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
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error Loading Page</h1>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2044 Technology</title>
        <meta name="description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2044 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2044 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Layout>
        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{ 
                  duration: 20,
                  repeat: -1,
                  ease: "linear"
                }}
                className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
              />
              <motion.div
                animate={{ 
                  x: [0, -100, 0],
                  y: [0, 100, 0],
                  rotate: [0, -360, 0]
                }}
                transition={{ 
                  duration: 25,
                  repeat: -1,
                  ease: "linear"
                }}
                className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
              />
              <motion.div
                animate={{ 
                  x: [0, 150, 0],
                  y: [0, -150, 0],
                  rotate: [0, 720, 0]
                }}
                transition={{ 
                  duration: 30,
                  repeat: -1,
                  ease: "linear"
                }}
                className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
              />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWatchDemo}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary 2044 Technology
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the next generation of technology with our cutting-edge solutions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => window.location.href = feature.href}
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Showcase */}
          <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our revolutionary services that are shaping the future
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">🚀</span>
                          <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                        </div>
                        {service.pricing?.enterprise && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                            ENTERPRISE
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="text-2xl font-bold text-cyan-400">{service.pricing?.starter || 'Contact for pricing'}</div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-auto">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                          <span className="flex items-center justify-center space-x-2">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Services Button */}
              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/services'}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <span className="flex items-center space-x-2">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <stat.icon className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <Suspense fallback={<LoadingSpinner />}>
            <TestimonialSection />
          </Suspense>

          {/* Call to Action */}
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12"
                style={{
                  boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)',
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the future of technology with our revolutionary 2044 services. 
                  Experience AI consciousness, quantum computing, and autonomous solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetStarted}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  >
                    Get Started Today
                  </button>
                  <button
                    onClick={handleWatchDemo}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    Watch Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Homepage2044;