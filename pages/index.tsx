import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network, Calendar
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Autonomous Ecosystem",
      description: "Revolutionary autonomous AI solutions that adapt and evolve",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum AI Neural Networks",
      description: "Quantum-powered AI with advanced consciousness capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Quantum-resistant security with AI-powered threat detection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Space Resource Intelligence",
      description: "AI-powered space resource discovery and optimization",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Autonomous DevOps",
      description: "AI-powered DevOps optimization and automation",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Edge Computing Orchestration",
      description: "Advanced edge computing optimization platform",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const services = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"]
    },
    {
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
    },
    {
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with AI",
      icon: Users,
      color: "from-green-500 to-teal-500",
      link: "https://ziontechgroup.com/ai-customer-experience",
      price: "$399/month",
      features: ["Customer journey mapping", "AI personalization", "Sentiment analysis"]
    },
    {
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration",
      icon: Network,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/edge-computing-orchestration",
      price: "$349/month",
      features: ["Edge node management", "IoT device management", "Real-time monitoring"]
    },
    {
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge technology solutions",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      link: "https://ziontechgroup.com/space-technology",
      price: "$2,499/month",
      features: ["Satellite management", "AI mission planning", "Quantum communication"]
    },
    {
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with neural interfaces",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      link: "https://ziontechgroup.com/neural-interface",
      price: "$899/month",
      features: ["BCI development tools", "Neural signal processing", "AI pattern recognition"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Leading-edge technology solutions and autonomous innovation platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our cutting-edge services that are transforming industries and driving the future of technology
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
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </a>
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
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/comprehensive-2025-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Latest Autonomous Content
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest innovations, insights, and autonomous system developments
            </p>
          </motion.div>

          {/* Content Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SEO & Analytics</h3>
              <p className="text-sm text-white/70 mb-4">Performance insights and optimization reports</p>
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-xs text-white/50">Latest Reports</div>
            </div>

            <div className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security & Compliance</h3>
              <p className="text-sm text-white/70 mb-4">Vulnerability scans and security assessments</p>
              <div className="text-2xl font-bold text-red-400">2</div>
              <div className="text-xs text-white/50">Security Updates</div>
            </div>

            <div className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & ML Insights</h3>
              <p className="text-sm text-white/70 mb-4">Model performance and AI optimization</p>
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-xs text-white/50">AI Reports</div>
            </div>

            <div className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">System Updates</h3>
              <p className="text-sm text-white/70 mb-4">Feature deployments and infrastructure</p>
              <div className="text-2xl font-bold text-yellow-400">5</div>
              <div className="text-xs text-white/50">Recent Updates</div>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <a href="/reports/structured-data-audit.json" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-green-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-green-500/0 via-green-400/10 to-green-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-2 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-xs text-white/60 uppercase tracking-wider">SEO & Analytics</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-200">
                Structured Data Audit Report
              </h3>
              <p className="text-sm text-white/75 mb-4">Comprehensive JSON-LD coverage analysis and optimization recommendations.</p>
              <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2025-08-19
                </span>
                <span className="text-green-400">High Priority</span>
              </div>
              <div className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors duration-200 text-sm font-medium">
                View Report <span aria-hidden>→</span>
              </div>
            </a>

            <a href="/reports/security-scan-2025-08-19" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-red-500/0 via-red-400/10 to-red-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 p-2 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-xs text-white/60 uppercase tracking-wider">Security</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors duration-200">
                Security Vulnerability Scan
              </h3>
              <p className="text-sm text-white/75 mb-4">Automated security assessment with vulnerability detection and remediation steps.</p>
              <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2025-08-19
                </span>
                <span className="text-red-400">High Priority</span>
              </div>
              <div className="inline-flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors duration-200 text-sm font-medium">
                View Report <span aria-hidden>→</span>
              </div>
            </a>

            <a href="/reports/ai-model-performance-2025-08-19" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-purple-500/0 via-purple-400/10 to-purple-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs text-white/60 uppercase tracking-wider">AI & ML</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                AI Model Performance Update
              </h3>
              <p className="text-sm text-white/75 mb-4">Latest performance metrics and optimization insights for deployed AI models.</p>
              <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2025-08-19
                </span>
                <span className="text-purple-400">High Priority</span>
              </div>
              <div className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200 text-sm font-medium">
                View Report <span aria-hidden>→</span>
              </div>
            </a>
          </div>

          {/* View All Content CTA */}
          <div className="text-center">
            <a
              href="/reports"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Explore All Autonomous Content
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/50 mt-3 text-sm">
              Access our complete library of reports, insights, and updates
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Let's discuss your project and explore how our cutting-edge technology solutions can transform your business
            </p>
          </motion.div>

          <EnhancedContactForm />
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
