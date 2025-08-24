import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network, Calendar
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import SEOHead from '../components/SEOHead';
import { ToastContainer, useToast } from '../components/ui/Toast';
import { Service, Feature, Stat, UpdateItem } from '../types';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
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

  const services: Service[] = [
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
      features: ["Threat Detection", "Compliance Reporting", "Penetration Testing", "Security Training"]
    }
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const updates: UpdateItem[] = [
    {
      title: "Autonomous Update — 2025: 08: 15: 0508",
      href: "/reports/updates/update-2025-08-15-0508",
      description: "Freshly published by autonomous agents.",
      date: "2025-08-15"
    },
    {
      title: "Autonomous Update — 2025: 08: 15: 0507",
      href: "/reports/updates/update-2025-08-15-0507",
      description: "Freshly published by autonomous agents.",
      date: "2025-08-15"
    },
    {
      title: "Autonomous Update — 2025: 08: 15: 0457",
      href: "/reports/updates/update-2025-08-15-0457",
      description: "Freshly published by autonomous agents.",
      date: "2025-08-15"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <SEOHead
        title="Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform"
        description="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation."
        keywords="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions"
        url="https://ziontechgroup.com"
        type="website"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {/* Header */}
        <header className="relative z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-sm text-white/60">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">Services</Link>
                <Link href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">About</Link>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link 
                  href="#contact"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With AI & Technology</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Zion Tech Group delivers cutting-edge AI solutions, innovative micro SAAS platforms, and comprehensive IT services to drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link 
                href="#contact"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
            
            {/* Hero Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {heroServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-white/60 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <motion.a
                key={update.href}
                href={update.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                <p className="mt-1 text-sm text-white/75">{update.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                  Open <span aria-hidden>→</span>
                </div>
              </motion.a>
            ))}
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

        {/* Micro SAAS Services */}
        <section id="services" className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Innovative, scalable software-as-a-service solutions designed to solve specific business challenges
              </p>
            </div>

            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-fuchsia-400">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-xl flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{service.name}</h4>
                          <div className="text-cyan-400 font-bold">{service.price}</div>
                        </div>
                      </div>
                      <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  IT Services & Solutions
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive IT consulting, infrastructure management, and digital transformation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/60 flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* AI Solutions */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-8 text-green-400">AI & Machine Learning Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiSolutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center mb-6">
                      {solution.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">{solution.name}</h4>
                    <p className="text-white/70 mb-6">{solution.description}</p>
                    <div className="text-3xl font-bold text-green-400 mb-6">{solution.price}</div>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-white/60 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={solution.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trusted by businesses worldwide for innovative technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-white/60 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="https://ziontechgroup.com" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Visit Our Website →
                    </Link>
                    <Link href="/ai-solutions" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      AI Solutions →
                    </Link>
                    <Link href="/services-2024" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      All Services →
                    </Link>
                    <Link href="/about" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      About Us →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="https://ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Visit Zion Tech Group
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950/90 border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                </div>
                <p className="text-white/60 text-sm">
                  Leading provider of AI solutions, IT services, and innovative micro SAAS platforms.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link href="/services-2024" className="hover:text-white transition-colors">IT Services</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                  <li><Link href="#solutions" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <p>Mobile: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  ziontechgroup.com
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
=======
    <QuantumHolographicMatrixBackground>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
          <meta name="description" content="Discover 500+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms. Achieve 1200% ROI with our innovative services." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, blockchain, cybersecurity, space technology, biotech AI, financial trading, metaverse, IoT, cloud computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="500+ revolutionary micro SaaS services with quantum AI and cutting-edge technology" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

              <UltraFuturisticBackground2029>
        {/* Ultra Advanced Navigation */}
        <UltraFuturisticNavigation2029 />

                                      {/* Ultra Futuristic Hero Section 2029 */}
                    <UltraFuturisticHero2029 />

        {/* Revolutionary 2027 Hero Section */}
        <Revolutionary2027Hero />

        {/* Revolutionary 2027 Services Showcase */}
        <Revolutionary2027ServicesShowcase />

        {/* Enhanced 2026 Services Showcase */}
        <Enhanced2026ServicesShowcase />

        {/* Revolutionary 2026 Services Showcase */}
        <Revolutionary2026ServiceShowcase />

        {/* Enhanced Services Showcase */}
        <EnhancedServiceShowcase 
          services={allServices.filter(service => 'variant' in service).slice(0, 12)}
          title="Enhanced Services Showcase"
          subtitle="Discover our comprehensive range of innovative solutions"
          maxServices={12}
        />

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our most innovative and disruptive micro SaaS services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-br ${service.color} p-8 h-full`}>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-100 mb-4">{service.description}</p>
                      <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-100">
                            <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 space-y-3">
                      <div className="bg-black/20 rounded-lg p-3">
                        <span className="text-sm font-semibold text-white">Market Data:</span>
                        <span className="text-sm text-gray-200 ml-2">{service.marketData}</span>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <span className="text-sm font-semibold text-white">Competitors:</span>
                        <span className="text-sm text-gray-200 ml-2">{service.competitors}</span>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <span className="text-sm font-semibold text-white">Savings:</span>
                        <span className="text-sm text-gray-200 ml-2">{service.savings}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                      >
                        Get Started
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of revolutionary micro SaaS services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </motion.a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
=======
import Layout from '../components/layout/Layout';
import Homepage2025 from '../components/Homepage2025';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title>Zion Tech Group | Micro SaaS, AI, IT & Quantum Solutions</title>
				<meta name="description" content="Real micro SaaS, AI, and IT services with transparent pricing and fast onboarding. Contact +1 302 464 0950 or kleber@ziontechgroup.com." />
				<link rel="canonical" href="https://ziontechgroup.com/" />
			</Head>
			<Homepage2025 />
		</Layout>
	);
}
