
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3, Rocket, CheckCircle, Play, Target, Clock, DollarSign, ShieldCheck, Mail, Phone, MapPin, Cpu, Wifi, Video, CpuIcon, Fingerprint, Globe2, Atom, Server, Bot, Mic, Eye, Network } from 'lucide-react';
import { FuturisticBackground } from '../components/ui/FuturisticBackground';

export function Home() {
  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI algorithms",
      icon: Brain,
      color: "from-zion-cyan to-zion-purple",
      features: ["Real-time processing", "Predictive analytics", "Custom dashboards"],
      price: "$199/month"
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description: "Protect your business with enterprise-grade security infrastructure",
      icon: Shield,
      color: "from-zion-cyan to-zion-purple",
      features: ["24/7 monitoring", "Threat detection", "Compliance ready"],
      price: "$299/month"
    },
    {
      id: 3,
      title: "Cloud Migration",
      description: "Seamlessly migrate to the cloud with zero downtime",
      icon: Cloud,
      color: "from-zion-cyan to-zion-purple",
      features: ["Automated migration", "Cost optimization", "Performance tuning"],
      price: "$399/month"
    }
  ];

  // Enhanced Micro SAAS Services
  const microSaasServices = [
    {
      id: 1,
      title: "AI Talent Matching Platform",
      description: "AI-powered recruitment platform that matches the perfect candidates with your company",
      icon: Users,
      price: "$299/month",
      features: ["AI candidate screening", "Skill matching algorithm", "Interview scheduling", "Analytics dashboard"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 2,
      title: "Cybersecurity Assessment Tool",
      description: "Comprehensive security audit and vulnerability assessment platform",
      icon: Shield,
      price: "$199/month",
      features: ["Automated security scans", "Compliance reporting", "Threat intelligence", "Remediation guides"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 3,
      title: "Cloud Migration Suite",
      description: "End-to-end cloud migration and optimization platform",
      icon: Cloud,
      price: "$399/month",
      features: ["Migration planning", "Cost optimization", "Performance monitoring", "Security compliance"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence and analytics platform",
      icon: BarChart3,
      price: "$149/month",
      features: ["Custom dashboards", "Real-time data", "Predictive analytics", "Export capabilities"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 5,
      title: "Network Infrastructure Manager",
      description: "Comprehensive network monitoring and management solution",
      icon: Wifi,
      price: "$179/month",
      features: ["Network monitoring", "Performance optimization", "Security alerts", "Automated maintenance"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 6,
      title: "Video Production Suite",
      description: "AI-powered video editing and production platform",
      icon: Video,
      price: "$89/month",
      features: ["AI video editing", "Template library", "Cloud rendering", "Collaboration tools"],
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  // Enhanced AI Services
  const aiServices = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "Advanced AI-powered content creation for blogs, social media, and marketing",
      icon: Brain,
      price: "$49/month",
      features: ["GPT-4 powered", "SEO optimization", "Multi-language", "Brand voice"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 2,
      title: "AI Model Training",
      description: "Custom AI model development and training services",
      icon: Cpu,
      price: "$999/month",
      features: ["Custom algorithms", "Data preprocessing", "Model optimization", "Deployment support"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 3,
      title: "Zion Hire AI",
      description: "Intelligent recruitment and HR automation platform",
      icon: Bot,
      price: "$199/month",
      features: ["AI screening", "Candidate matching", "Interview automation", "Analytics"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 4,
      title: "Voice AI Assistant",
      description: "Custom voice AI solutions for customer service and automation",
      icon: Mic,
      price: "$299/month",
      features: ["Voice recognition", "Natural language", "Multi-language", "Integration APIs"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 5,
      title: "Visual Recognition API",
      description: "Advanced computer vision and image recognition services",
      icon: Eye,
      price: "$149/month",
      features: ["Object detection", "Face recognition", "Image classification", "Real-time processing"],
      color: "from-zion-cyan to-zion-purple"
    }
  ];

  // Enhanced IT Services
  const itServices = [
    {
      id: 1,
      title: "API Gateway",
      description: "Enterprise-grade API management and gateway solution",
      icon: Network,
      price: "$129/month",
      features: ["Rate limiting", "Authentication", "Analytics", "Documentation"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 2,
      title: "IoT Device Management",
      description: "Comprehensive IoT platform for device monitoring and control",
      icon: CpuIcon,
      price: "$79/month",
      features: ["Device monitoring", "Remote control", "Data collection", "Security"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 3,
      title: "Blockchain Integration",
      description: "Blockchain development and integration services",
      icon: Atom,
      price: "$599/month",
      features: ["Smart contracts", "DApp development", "Integration", "Consulting"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 4,
      title: "Biometric Authentication",
      description: "Advanced biometric security solutions",
      icon: Fingerprint,
      price: "$199/month",
      features: ["Fingerprint", "Face recognition", "Voice biometrics", "Multi-factor"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 5,
      title: "Global CDN",
      description: "Worldwide content delivery network for optimal performance",
      icon: Globe2,
      price: "$89/month",
      features: ["Global coverage", "DDoS protection", "Analytics", "SSL certificates"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 6,
      title: "Quantum Computing API",
      description: "Access to quantum computing resources and algorithms",
      icon: Atom,
      price: "$299/month",
      features: ["Quantum algorithms", "Simulation tools", "API access", "Expert support"],
      color: "from-zion-cyan to-zion-purple"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-zion-cyan" },
    { icon: Award, value: "50+", label: "Awards Won", color: "text-zion-purple" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-zion-cyan" },
    { icon: Zap, value: "99.9%", label: "Uptime", color: "text-zion-purple" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution is powered by cutting-edge artificial intelligence",
      color: "text-zion-cyan"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols protect your data and systems",
      color: "text-zion-purple"
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Grow without limits with our cloud-native architecture",
      color: "text-zion-cyan"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions built specifically for your business needs",
      color: "text-zion-purple"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn your data into strategic insights and competitive advantages",
      color: "text-zion-cyan"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Get your solutions up and running in record time",
      color: "text-zion-purple"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The cybersecurity implementation was seamless. We feel completely protected and confident in our systems.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      content: "Outstanding service and support. The team at Zion Tech Group goes above and beyond every time.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes",
      color: "text-zion-cyan"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      color: "text-zion-purple"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Competitive pricing with maximum value delivery",
      color: "text-zion-cyan"
    },
    {
      icon: ShieldCheck,
      title: "Reliable Support",
      description: "24/7 technical support and maintenance services",
      color: "text-zion-purple"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 302 464 0950",
      description: "Available 24/7 for urgent matters",
      color: "text-zion-cyan"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "kleber@ziontechgroup.com",
      description: "Get a response within 2 hours",
      color: "text-zion-purple"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      description: "Schedule an in-person meeting",
      color: "text-zion-cyan"
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
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white relative overflow-hidden">
      {/* Futuristic Animated Background */}
      <FuturisticBackground>
        <div></div>
      </FuturisticBackground>
      
      {/* Additional Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-b border-zion-cyan/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-zion-slate-light text-sm">Visit us at:</span>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <Play className="w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* Pricing Highlights */}
            <motion.div 
              className="mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-6 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Competitive Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-zion-purple font-bold">Micro SAAS</div>
                    <div className="text-zion-slate-light">Starting from $49/month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zion-cyan font-bold">AI Services</div>
                    <div className="text-zion-slate-light">Starting from $99/month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zion-purple font-bold">IT Solutions</div>
                    <div className="text-zion-slate-light">Starting from $79/month</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses across industries
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service) => (
              <motion.div 
                key={service.id} 
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-zion-cyan font-bold text-lg">{service.price}</div>
                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300 group-hover:translate-x-1"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Comprehensive Services Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              From micro SAAS applications to enterprise AI solutions, we provide end-to-end technology services that drive innovation and growth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-6 border border-zion-cyan/30">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Micro SAAS</h3>
                <p className="text-zion-slate-light text-sm">Scalable, cost-effective software solutions for growing businesses</p>
                <div className="mt-3 text-zion-cyan font-semibold">6+ Solutions</div>
              </div>
              <div className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-6 border border-zion-purple/30">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Services</h3>
                <p className="text-zion-slate-light text-sm">Cutting-edge artificial intelligence and machine learning solutions</p>
                <div className="mt-3 text-zion-purple font-semibold">5+ Services</div>
              </div>
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-6 border border-zion-cyan/30">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IT Infrastructure</h3>
                <p className="text-zion-slate-light text-sm">Robust, secure, and scalable technology infrastructure solutions</p>
                <div className="mt-3 text-zion-cyan font-semibold">6+ Solutions</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Micro SAAS Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access a wide range of scalable and cost-effective SAAS solutions for your business needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {microSaasServices.map((service) => (
              <motion.div 
                key={service.id} 
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300 group-hover:translate-x-1">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* AI Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              AI & Automation Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Empower your business with cutting-edge AI and automation technologies.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aiServices.map((service) => (
              <motion.div 
                key={service.id} 
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-zion-cyan font-bold text-lg">{service.price}</div>
                  <div className="flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300 group-hover:translate-x-1">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* IT Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              IT Infrastructure & Security
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ensure your digital infrastructure is robust and your data is secure.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {itServices.map((service) => (
              <motion.div 
                key={service.id} 
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-zion-cyan font-bold text-lg">{service.price}</div>
                  <div className="flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300 group-hover:translate-x-1">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zion-blue-dark/30 rounded-3xl mx-4 lg:mx-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our unique approach and commitment to excellence make us the preferred choice for technology solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've transformed
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to transform your business? We're here to help you succeed
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-10 h-10 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{method.title}</h3>
                <p className="text-zion-cyan font-semibold mb-2">{method.value}</p>
                <p className="text-zion-slate-light text-sm leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 border border-zion-cyan/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with Zion Tech Group. 
              From micro SAAS solutions to enterprise AI platforms, we have the expertise to drive your success.
            </p>
            
            {/* Service Categories Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-zion-blue-light/10 rounded-xl p-4 border border-zion-cyan/20">
                <div className="text-zion-cyan font-bold text-lg mb-2">17+ Services</div>
                <div className="text-zion-slate-light text-sm">Comprehensive technology solutions</div>
              </div>
              <div className="bg-zion-blue-light/10 rounded-xl p-4 border border-zion-purple/20">
                <div className="text-zion-purple font-bold text-lg mb-2">Starting $49/month</div>
                <div className="text-zion-slate-light text-sm">Affordable pricing for all businesses</div>
              </div>
              <div className="bg-zion-blue-light/10 rounded-xl p-4 border border-zion-cyan/20">
                <div className="text-zion-cyan font-bold text-lg mb-2">24/7 Support</div>
                <div className="text-zion-slate-light text-sm">Expert assistance whenever you need it</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-zion-cyan/20">
              <p className="text-zion-slate-light mb-4">Get in touch with our experts:</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-cyan font-medium">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-cyan font-medium">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-cyan font-medium hover:text-zion-purple transition-colors duration-300"
                  >
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
