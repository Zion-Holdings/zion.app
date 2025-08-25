import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems.",
      features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Automation"],
      price: "From $2,500/month",
      color: "from-purple-500 to-pink-500",
      link: "/ai-services"
    },
    {
      icon: Cpu,
      title: "Micro SAAS Services",
      description: "Custom software solutions designed for modern businesses, from workflow automation to customer relationship management systems.",
      features: ["Custom Development", "Workflow Automation", "CRM Systems", "API Integration"],
      price: "From $15,000",
      color: "from-blue-500 to-cyan-500",
      link: "/micro-saas-services"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle.",
      features: ["Cloud Migration", "DevOps Automation", "Kubernetes", "Infrastructure as Code"],
      price: "From $35,000",
      color: "from-green-500 to-emerald-500",
      link: "/cloud-devops"
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions designed for enterprise-scale operations and digital transformation.",
      features: ["Digital Transformation", "Enterprise Security", "System Integration", "Compliance Management"],
      price: "From $50,000",
      color: "from-orange-500 to-red-500",
      link: "/enterprise-solutions"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end business modernization through strategic digital transformation, process optimization, and innovation management.",
      features: ["Strategy Development", "Process Optimization", "Change Management", "Innovation Labs"],
      price: "From $75,000",
      color: "from-indigo-500 to-purple-500",
      link: "/digital-transformation"
    },
    {
      icon: Zap,
      title: "Emerging Technology",
      description: "Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, and green technology.",
      features: ["Quantum Computing", "Blockchain Solutions", "IoT Platforms", "AR/VR Applications"],
      price: "From $75,000",
      color: "from-yellow-500 to-orange-500",
      link: "/emerging-tech"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored technology solutions designed specifically for your business needs and requirements."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of experience delivering complex technology solutions across industries."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with scalable, cloud-based solutions and global infrastructure."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance frameworks for enterprise environments."
    }
  ];

  const stats = [
    { label: "Services Delivered", value: "500+", icon: CheckCircle },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Success Rate", value: "99%", icon: Star },
    { label: "Years Experience", value: "15+", icon: Award }
  ];

  const industries = [
    { name: "Technology", icon: "💻", description: "Software companies, SaaS platforms, tech startups" },
    { name: "Finance", icon: "💰", description: "Banks, insurance companies, fintech firms" },
    { name: "Healthcare", icon: "🏥", description: "Hospitals, clinics, health tech companies" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial companies, factories, production facilities" },
    { name: "Retail", icon: "🛍️", description: "E-commerce, retail chains, online marketplaces" },
    { name: "Government", icon: "🏛️", description: "Federal, state, and local government agencies" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, micro SAAS, cloud DevOps, enterprise solutions, digital transformation, and emerging technologies."
        keywords="technology services, AI services, micro SAAS, cloud DevOps, enterprise solutions, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive technology services designed to drive innovation and transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to drive innovation and transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven expertise across diverse industries and business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of professional technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our technology services can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
