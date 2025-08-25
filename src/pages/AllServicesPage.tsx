
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3, 
  Wifi, 
  Lock, 
  Server,
  Smartphone,
  Target,
  Lightbulb,
  TrendingUp,
  Zap,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  Building,
  Heart,
  BookOpen,
  Globe,
  Rocket,
  Cpu,
  Database,
  Network,
  Palette,
  FileText,
  MessageCircle,
  Settings,
  UserPlus,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AllServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-zion-cyan to-zion-blue' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-cyan' },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud, color: 'from-zion-blue to-zion-purple' },
    { id: 'development', name: 'Development', icon: Code, color: 'from-zion-green to-zion-cyan' },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart3, color: 'from-zion-purple to-zion-green' },
    { id: 'iot', name: 'IoT Solutions', icon: Wifi, color: 'from-zion-cyan to-zion-green' },
    { id: 'automation', name: 'Automation', icon: Server, color: 'from-zion-blue to-zion-cyan' }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation.',
      category: 'ai',
      price: { monthly: 49, yearly: 490, currency: '$' },
      features: ['GPT-4 powered', 'SEO optimization', 'Multi-language support', 'Content templates'],
      badge: 'Popular',
      rating: 4.9,
      reviewCount: 1247,
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant Pro',
      description: 'Intelligent code completion, debugging, and optimization tool that learns from your coding patterns.',
      category: 'ai',
      price: { monthly: 39, yearly: 390, currency: '$' },
      features: ['AI-powered completion', 'Real-time error detection', 'Multi-language support', 'GitHub integration'],
      badge: 'New',
      rating: 4.8,
      reviewCount: 892,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive data analysis platform with AI-powered insights, predictive analytics, and automated reporting.',
      category: 'ai',
      price: { monthly: 89, yearly: 890, currency: '$' },
      features: ['AI-powered insights', 'Predictive analytics', 'Automated reporting', 'Real-time dashboards'],
      badge: 'Featured',
      rating: 4.7,
      reviewCount: 567,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder Suite',
      description: 'No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard.',
      category: 'ai',
      price: { monthly: 79, yearly: 790, currency: '$' },
      features: ['Drag-and-drop builder', 'Advanced NLP', 'Multi-language support', 'CRM integration'],
      badge: 'New',
      rating: 4.8,
      reviewCount: 892,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },

    // Cybersecurity Services
    {
      id: 'cybersecurity-monitoring',
      title: 'Cybersecurity Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform with real-time alerts and incident response.',
      category: 'security',
      price: { monthly: 129, yearly: 1290, currency: '$' },
      features: ['Real-time threat detection', 'Vulnerability scanning', 'Incident response automation', 'Compliance reporting'],
      badge: 'Premium',
      rating: 4.9,
      reviewCount: 445,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/cybersecurity-monitoring'
    },
    {
      id: 'managed-soc',
      title: 'Managed SOC Services',
      description: '24/7 Security Operations Center with expert analysts, advanced threat hunting, and incident response.',
      category: 'security',
      price: { monthly: 299, yearly: 2990, currency: '$' },
      features: ['24/7 monitoring', 'Expert analysts', 'Threat hunting', 'Incident response'],
      badge: 'Premium',
      rating: 4.9,
      reviewCount: 234,
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/managed-soc'
    },

    // Cloud Solutions
    {
      id: 'cloud-migration-platform',
      title: 'Cloud Migration Platform',
      description: 'Automated cloud migration and optimization platform supporting AWS, Azure, and Google Cloud.',
      category: 'cloud',
      price: { monthly: 199, yearly: 1990, currency: '$' },
      features: ['Multi-cloud support', 'Automated migration', 'Cost optimization', 'Performance monitoring'],
      badge: 'Enterprise',
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/cloud-migration'
    },

    // Development Services
    {
      id: 'web-development-platform',
      title: 'Web Development Platform',
      description: 'Full-stack web development platform with drag-and-drop builder, custom code editor, and deployment automation.',
      category: 'development',
      price: { monthly: 79, yearly: 790, currency: '$' },
      features: ['Drag-and-drop builder', 'Custom code editor', 'Responsive templates', 'SEO optimization'],
      badge: 'Popular',
      rating: 4.8,
      reviewCount: 1234,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development Suite',
      description: 'Cross-platform mobile app development platform with native performance, cloud backend, and automated testing.',
      category: 'development',
      price: { monthly: 149, yearly: 1490, currency: '$' },
      features: ['Cross-platform development', 'Native performance', 'Cloud backend', 'Automated testing'],
      badge: 'Featured',
      rating: 4.7,
      reviewCount: 890,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain Development Platform',
      description: 'Comprehensive blockchain development platform for creating smart contracts, DeFi applications, and NFT marketplaces.',
      category: 'development',
      price: { monthly: 199, yearly: 1990, currency: '$' },
      features: ['Smart contracts', 'DeFi applications', 'NFT marketplaces', 'Multi-blockchain support'],
      badge: 'New',
      rating: 4.6,
      reviewCount: 345,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/blockchain-development'
    },

    // DevOps & Automation
    {
      id: 'devops-automation-suite',
      title: 'DevOps Automation Suite',
      description: 'Comprehensive DevOps automation platform with CI/CD pipelines, infrastructure as code, and monitoring.',
      category: 'automation',
      price: { monthly: 149, yearly: 1490, currency: '$' },
      features: ['CI/CD automation', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & alerting'],
      badge: 'Popular',
      rating: 4.7,
      reviewCount: 678,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/devops-automation'
    },
    {
      id: 'business-process-automation',
      title: 'Business Process Automation Platform',
      description: 'Intelligent automation platform that streamlines workflows, reduces manual tasks, and improves efficiency.',
      category: 'automation',
      price: { monthly: 89, yearly: 890, currency: '$' },
      features: ['Workflow automation', 'RPA capabilities', 'Document processing', 'Process analytics'],
      badge: 'New',
      rating: 4.8,
      reviewCount: 567,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500',
      link: 'https://ziontechgroup.com/business-automation'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Complete Service Portfolio
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Discover our comprehensive range of cutting-edge technology services designed to transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-zion-cyan/20 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-zion-cyan/20 text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id} className="bg-zion-slate-dark text-white">
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className="group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                    {/* Service Image */}
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {service.badge && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                          {service.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zion-cyan mb-2 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Rating and Reviews */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-zion-slate-light'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-zion-slate-light">
                            {service.rating} ({service.reviewCount} reviews)
                          </span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-zion-slate-light font-normal">/month</span>
                        </div>
                        <div className="text-sm text-zion-slate-light">
                          {service.price.currency}{service.price.yearly} billed annually
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                    >
                      <a href={service.link}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                className="text-center py-20"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 border border-zion-cyan/20 backdrop-blur-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to help you choose the perfect services for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Sales
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center space-x-6 text-zion-slate-light">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                    <span>Custom Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Need Help Choosing?
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our technology experts are here to help you find the perfect solutions for your business needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center group"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
                  <p className="text-zion-slate-light mb-4">Speak with our experts</p>
                  <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 text-lg font-semibold">
                    +1 302 464 0950
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="text-center group"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                  <p className="text-zion-slate-light mb-4">Send us a message</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 text-lg font-semibold">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="text-center group"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                  <p className="text-zion-slate-light mb-4">Our headquarters</p>
                  <address className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 text-lg font-semibold not-italic">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </address>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};