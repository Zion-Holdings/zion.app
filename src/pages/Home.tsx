
import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { AdvancedServicesShowcase } from '../components/AdvancedServicesShowcase';
import { QuantumMatrixBackground } from '../components/QuantumMatrixBackground';
import { Button } from '../components/ui/button';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Target,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  Lock,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  BarChart3,
  Lightbulb,
  Award,
  Clock,
  Wifi,
  Palette,
  FileText,
  MessageCircle,

  Building,
  Heart,
  BookOpen,
  Video,
  Headphones,
  HelpCircle,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export const Home: React.FC = () => {
  const stats = [
    { label: 'AI Solutions Deployed', value: '500+', icon: Brain, color: 'from-zion-cyan to-zion-blue' },
    { label: 'Quantum Projects', value: '50+', icon: Cpu, color: 'from-zion-purple to-zion-cyan' },
    { label: 'Global Clients', value: '200+', icon: Globe, color: 'from-zion-blue to-zion-purple' },
    { label: 'Success Rate', value: '99.8%', icon: Award, color: 'from-zion-cyan to-zion-green' },
    { label: 'Services Delivered', value: '1000+', icon: Rocket, color: 'from-zion-purple to-zion-blue' },
    { label: 'Team Members', value: '25+', icon: Users, color: 'from-zion-cyan to-zion-purple' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that learns and adapts to your business needs',
      color: 'from-zion-cyan to-zion-blue',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Next-generation cybersecurity with quantum-resistant encryption and AI threat detection',
      color: 'from-zion-purple to-zion-cyan',
      features: ['Threat Detection', 'Encryption', 'Compliance', 'Incident Response']
    },
    {
      icon: Cloud,
      title: 'Cloud Innovation',
      description: 'Revolutionary cloud infrastructure built on quantum computing principles',
      color: 'from-zion-blue to-zion-purple',
      features: ['Infrastructure', 'Migration', 'Optimization', 'Scalability']
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Complete business transformation with intelligent automation and optimization',
      color: 'from-zion-cyan to-zion-green',
      features: ['Automation', 'Process Optimization', 'Change Management', 'Training']
    },
    {
      icon: Code,
      title: 'Development Excellence',
      description: 'Full-stack development services with modern technologies and best practices',
      color: 'from-zion-green to-zion-cyan',
      features: ['Web Development', 'Mobile Apps', 'API Development', 'DevOps']
    },
    {
      icon: BarChart3,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization',
      color: 'from-zion-purple to-zion-green',
      features: ['Analytics', 'Business Intelligence', 'Data Mining', 'Reporting']
    }
  ];

  const serviceCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business automation and intelligence',
      services: ['Content Generation', 'Chatbots', 'Data Analytics', 'Process Automation'],
      href: '/ai-services-showcase',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for modern businesses',
      services: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      href: '/services',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      services: ['AWS/Azure/GCP', 'Migration', 'Optimization', 'Management'],
      href: '/services',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom software development and digital solutions',
      services: ['Web Apps', 'Mobile Apps', 'APIs', 'DevOps'],
      href: '/services',
      color: 'from-zion-green to-zion-cyan'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Business intelligence and data-driven insights',
      services: ['Reporting', 'Dashboards', 'Predictive Analytics', 'Data Mining'],
      href: '/analytics',
      color: 'from-zion-purple to-zion-green'
    },
    {
      icon: Wifi,
      title: 'IoT Solutions',
      description: 'Connected devices and smart system integration',
      services: ['Device Management', 'Data Collection', 'Automation', 'Analytics'],
      href: '/services',
      color: 'from-zion-cyan to-zion-green'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp Global',
      content: 'Zion Tech Group revolutionized our AI infrastructure. Their quantum computing solutions gave us a 10x performance boost.',
      rating: 5,
      avatar: 'SC',
      company: 'TechCorp Global',
      industry: 'Technology'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP Engineering, InnovateTech',
      content: 'The cybersecurity suite is incredible. We\'ve seen zero breaches since implementation, and the AI threat detection is remarkable.',
      rating: 5,
      avatar: 'MR',
      company: 'InnovateTech',
      industry: 'Fintech'
    },
    {
      name: 'Jennifer Kim',
      role: 'CEO, DataFlow Systems',
      content: 'Their cloud infrastructure transformed our data processing capabilities. The quantum acceleration is game-changing.',
      rating: 5,
      avatar: 'JK',
      company: 'DataFlow Systems',
      industry: 'Data Analytics'
    },
    {
      name: 'David Thompson',
      role: 'CTO, SecureBank',
      content: 'The security implementation exceeded our expectations. We\'re now the benchmark for cybersecurity in our industry.',
      rating: 5,
      avatar: 'DT',
      company: 'SecureBank',
      industry: 'Banking'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      {/* Quantum Background */}
      <QuantumMatrixBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <section className="relative z-10 py-20">
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
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our track record speaks for itself. We've helped hundreds of businesses achieve remarkable results through innovative technology solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
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
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
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
                key={feature.title}
                className="group"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-zion-slate-light">
                        <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="relative z-10 py-20">
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
                Our Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI and cybersecurity to cloud solutions and development, we offer comprehensive services to meet all your technology needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3 uppercase tracking-wider">
                      Key Services
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                  >
                    <a href={category.href}>
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Services Showcase */}
      <AdvancedServicesShowcase />

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
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
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-zion-cyan font-medium">{testimonial.role}</p>
                        <p className="text-sm text-zion-slate-light">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-zion-slate-light leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-cyan font-medium">{testimonial.industry}</span>
                    <div className="flex items-center space-x-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Verified Client</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have already revolutionized their operations with Zion Tech Group's innovative solutions.
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
                  Schedule a Consultation
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-6 text-zion-slate-light">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative z-10 py-20">
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
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to start your digital transformation journey? Contact us today for a free consultation.
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
  );
};
