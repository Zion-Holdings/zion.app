import React, { useState, useEffect } from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Zap, Info, Phone, Search, Globe, Rocket, Shield, Brain, Cloud, Code, Lock, Database, Target, ArrowRight, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
  };
}

export function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const title = seo?.title || 'Zion Tech Group - Revolutionary Technology Solutions';
  const description = seo?.description || 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.';
  const keywords = seo?.keywords || 'AI, artificial intelligence, quantum computing, blockchain, cybersecurity, cloud computing, IoT, machine learning, automation, technology solutions';
  const canonicalUrl = seo?.canonicalUrl || 'https://ziontechgroup.com';
  const ogImage = seo?.ogImage || 'https://ziontechgroup.com/og-image.jpg';

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSidebarOpen(false);
    }
  };

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home, description: 'Welcome to Zion Tech Group' },
    { path: '/services', label: 'Services', icon: Zap, description: 'Our comprehensive service offerings' },
    { path: '/about', label: 'About', icon: Info, description: 'Learn about our company and team' },
    { path: '/contact', label: 'Contact', icon: Phone, description: 'Get in touch with us' }
  ];

  const serviceCategories = [
    { icon: Brain, label: 'AI & Machine Learning', color: 'text-zion-cyan' },
    { icon: Shield, label: 'Cybersecurity', color: 'text-zion-purple' },
    { icon: Cloud, label: 'Cloud Computing', color: 'text-zion-cyan' },
    { icon: Code, label: 'Web Development', color: 'text-zion-purple' },
    { icon: Database, label: 'Data Analytics', color: 'text-zion-cyan' },
    { icon: Rocket, label: 'DevOps & Automation', color: 'text-zion-purple' },
    { icon: Lock, label: 'Blockchain', color: 'text-zion-cyan' },
    { icon: Target, label: 'IoT Solutions', color: 'text-zion-purple' }
  ];

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Zion Tech Group Application"
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#06b6d4" />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl || "https://ziontechgroup.com"} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
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
              "description": description,
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
            })
          }}
        />
      </Helmet>

      {/* Header */}
      <Header onMenuToggle={() => setSidebarOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-l border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20 z-50 overflow-hidden"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20 bg-zion-blue-dark/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech
                </h2>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Sidebar Content */}
            <div className="h-full overflow-y-auto">
              {/* Main Navigation */}
              <div className="p-6">
                <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300 group"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-zion-slate-light/70">{item.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Service Categories */}
              <div className="px-6 pb-6">
                <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                  Service Categories
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-3 rounded-lg bg-zion-blue-light/10 border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300 cursor-pointer group"
                      onClick={() => {
                        setSidebarOpen(false);
                        window.location.href = '/services';
                      }}
                    >
                      <category.icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-xs text-center mt-2 text-zion-slate-light group-hover:text-white transition-colors duration-300">
                        {category.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-6 pb-6">
                <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <a
                    href="/contact"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Get Quote</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/services"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 group"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Browse Services</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="px-6 pb-6 border-t border-zion-cyan/20 pt-6">
                <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-cyan" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-cyan" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Globe className="w-4 h-4 text-zion-cyan" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}