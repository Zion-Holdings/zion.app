import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"]
    },
    {
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      icon: "🔒",
      color: "from-red-500 to-orange-500",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
    },
    {
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences with intelligent automation",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      link: "https://ziontechgroup.com/ai-customer-experience",
      price: "$599/month",
      features: ["Chatbot automation", "Personalized recommendations", "Customer journey optimization"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: "✅" },
    { number: "50+", label: "Enterprise Clients", icon: "👥" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "🔒" },
    { number: "24/7", label: "Support Available", icon: "⏰" }
  ];

  const features = [
    {
      title: "Cutting-Edge Technology",
      description: "Leverage the latest advancements in AI, quantum computing, and cybersecurity",
      icon: "🚀"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance and regular penetration testing",
      icon: "🛡️"
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business, from startup to enterprise",
      icon: "📈"
    },
    {
      title: "Expert Support",
      description: "24/7 technical support with dedicated account managers",
      icon: "💬"
    }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <>
      <UltraFuturisticBackground2029>
        <Head>
          <title>Zion Tech Group - 2029 Revolutionary Technology Services | AI, Quantum Computing, Space Tech</title>
          <meta name="description" content="Leading provider of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology. Transform your business with cutting-edge solutions." />
          <meta name="keywords" content="AI consciousness, quantum computing, space mining, biotechnology, 2029 technology, revolutionary services, Zion Tech Group" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - 2029 Revolutionary Technology Services" />
          <meta property="og:description" content="Leading provider of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - 2029 Revolutionary Technology Services" />
          <meta name="twitter:description" content="Leading provider of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />
          <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
          
          {/* Additional Meta Tags */}
          <meta name="theme-color" content="#8b5cf6" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Leading provider of revolutionary 2029 technology services",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              }
            })}
          </script>
        </Head>

        {/* Navigation */}
        <UltraFuturisticNavigation2029 />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                The Future of
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
                Built for the modern enterprise, powered by innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Get Started
                </a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm"
            >
              <span>Trusted by Fortune 500 companies</span>
              <span>•</span>
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>24/7 Enterprise Support</span>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Core Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-white/50">Starting price</div>
                    </div>
                    
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <span className="text-cyan-400">✅</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">{stat.icon}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Experience the
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Future of Technology?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team of technology experts to discuss how our revolutionary 2029 services can transform your business and propel you into the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
                    Schedule Consultation
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105">
                    View Pricing
                  </button>
                </Link>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>📍</span>
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Showcase */}
        <div id="services">
          <EnhancedServicesShowcase />
        </div>

        {/* Enhanced Testimonials Section */}
        <EnhancedTestimonialsSection />

        {/* Enhanced Footer */}
        <EnhancedFooter />
      </UltraFuturisticBackground2029>
    </>
  );
}
