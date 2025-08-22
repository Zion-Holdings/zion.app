import React, { Suspense, lazy } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Zap, Brain, Rocket, Shield, 
  Atom, Cpu, Cloud, Target, Users, Award,
  CheckCircle, TrendingUp, Globe, Sparkles,
  Phone, Mail, MapPin, ChevronDown,
  ArrowUpRight, Lightbulb, Code, Database, Server,
  Network, Palette, GraduationCap, DollarSign, Heart,
  DollarSign as Finance, Factory as Manufacturing, Scale as Legal
} from 'lucide-react';

// Lazy load components for better performance
const UltraAdvancedHeroSection2025 = lazy(() => import('../components/sections/UltraAdvancedHeroSection2025'));
const UltraAdvancedServicesShowcase2025 = lazy(() => import('../components/sections/UltraAdvancedServicesShowcase2025'));

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const whyChooseUs = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI-First Approach',
    description: 'Leading-edge AI consciousness and emotional intelligence that adapts to your business needs.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Atom className="w-8 h-8" />,
    title: 'Quantum Innovation',
    description: 'Breakthrough quantum computing solutions that solve previously impossible problems.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture and quantum-secured infrastructure for maximum protection.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Rapid Deployment',
    description: 'Micro SAAS solutions that deploy in minutes, not months, with instant ROI.',
    color: 'from-orange-500 to-red-500'
  }
];

const industrySolutions = [
  {
    name: 'Healthcare & Life Sciences',
    icon: <Heart className="w-8 h-8" />,
    description: 'AI-powered diagnostics, drug discovery, and patient care optimization',
    color: 'from-blue-500 to-cyan-500',
    services: ['Medical AI Diagnostics', 'Drug Discovery Platform', 'Patient Care Analytics']
  },
  {
    name: 'Financial Services',
    icon: <Finance className="w-8 h-8" />,
    description: 'Quantum-enhanced trading, risk assessment, and financial intelligence',
    color: 'from-green-500 to-emerald-500',
    services: ['Quantum Trading Platform', 'AI Risk Assessment', 'Financial Analytics']
  },
  {
    name: 'Manufacturing & Industry 4.0',
    icon: <Manufacturing className="w-8 h-8" />,
    description: 'Smart manufacturing, predictive maintenance, and supply chain optimization',
    color: 'from-orange-500 to-red-500',
    services: ['Predictive Maintenance AI', 'Supply Chain Optimization', 'Quality Control AI']
  },
  {
    name: 'Creative & Media',
    icon: <Palette className="w-8 h-8" />,
    description: 'AI-powered content creation, video editing, and creative automation',
    color: 'from-purple-500 to-pink-500',
    services: ['AI Content Generation', 'Video Editing AI', 'Creative Analytics']
  },
  {
    name: 'Education & Training',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Personalized learning, skill assessment, and educational AI platforms',
    color: 'from-indigo-500 to-purple-500',
    services: ['AI Learning Platform', 'Skill Assessment AI', 'Personalized Education']
  },
  {
    name: 'Legal & Compliance',
    icon: <Legal className="w-8 h-8" />,
    description: 'Document analysis, contract review, and regulatory compliance automation',
    color: 'from-teal-500 to-cyan-500',
    services: ['Legal Document AI', 'Contract Analysis', 'Compliance Automation']
  }
];

const featuredServices = [
  {
    id: 'ai-autonomous-business',
    name: 'AI-Powered Autonomous Business Operations',
    price: '2,500',
    description: 'Fully automated business processes with AI decision-making capabilities',
    features: ['24/7 Autonomous Operations', 'AI Decision Engine', 'Real-time Analytics', 'Custom Workflows'],
    popular: true
  },
  {
    id: 'quantum-cybersecurity',
    name: 'Quantum Cybersecurity Platform',
    price: '5,000',
    description: 'Next-generation security using quantum-resistant algorithms',
    features: ['Quantum Encryption', 'Threat Intelligence', 'Zero-Trust Architecture', 'Compliance Ready'],
    popular: true
  },
  {
    id: 'micro-saas-platform',
    name: 'Micro SAAS Development Platform',
    price: '1,500',
    description: 'Rapid development and deployment of micro SAAS applications',
    features: ['Template Library', 'One-Click Deployment', 'Scalable Infrastructure', 'Analytics Dashboard'],
    popular: true
  }
];

const stats = [
  { number: '500+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
  { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
  { number: '24/7', label: 'Support', icon: <Phone className="w-6 h-6" /> },
  { number: '50+', label: 'AI Services', icon: <Brain className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our business operations with their AI automation platform. ROI was achieved within 3 months.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'VP Engineering, InnovateLab',
    content: 'The quantum cybersecurity solution exceeded our expectations. Implementation was seamless and security posture improved dramatically.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of IT, HealthTech Solutions',
    content: 'Their micro SAAS platform enabled us to launch new products in weeks instead of months. Game-changing technology.',
    rating: 5
  }
];

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, Quantum & Micro SAAS Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI automation, quantum cybersecurity, and micro SAAS platforms. Enterprise-grade solutions with rapid deployment." />
        <meta name="keywords" content="AI automation, quantum cybersecurity, micro SAAS, enterprise IT, business automation, AI services, quantum computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Leading AI, Quantum & Micro SAAS Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI automation, quantum cybersecurity, and micro SAAS platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading AI, Quantum & Micro SAAS Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI automation, quantum cybersecurity, and micro SAAS platforms." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
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
              "description": "Leading provider of AI automation, quantum cybersecurity, and micro SAAS solutions",
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
                "https://github.com/Zion-Holdings"
              ]
            })
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <UltraAdvancedHeroSection2025 />
        </Suspense>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section id="industry-solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored solutions for every industry, powered by cutting-edge AI and quantum technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section id="featured-services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular solutions that are transforming businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full relative">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        ${service.price}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8 text-left">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say about Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology to stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <Suspense fallback={<LoadingSpinner />}>
          <UltraAdvancedServicesShowcase2025 />
        </Suspense>
      </main>
    </>
  );
}
