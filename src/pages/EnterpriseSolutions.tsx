import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Building, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Server,
  Network,
  Code,
  Settings,
  Lock,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseSolutions = () => {
  const solutions = [
    {
      icon: Building,
      title: "Enterprise AI Platform",
      description: "Comprehensive AI platform for enterprise-scale machine learning and automation.",
      features: ["Scalable ML infrastructure", "AutoML capabilities", "Model governance", "Enterprise security"],
      price: "From $50,000",
      industry: "Technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Optimization",
      description: "End-to-end cloud migration with optimization for performance, cost, and security.",
      features: ["Multi-cloud strategy", "Performance optimization", "Cost optimization", "Security implementation"],
      price: "From $75,000",
      industry: "All Industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance Suite",
      description: "Comprehensive cybersecurity solutions with regulatory compliance management.",
      features: ["Threat detection", "Vulnerability assessment", "Compliance monitoring", "Incident response"],
      price: "From $45,000",
      industry: "Finance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance for enterprise digital transformation initiatives.",
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management"],
      price: "From $300/hour",
      industry: "All Industries",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Enterprise Data Platform",
      description: "Scalable data platform for enterprise data management and analytics.",
      features: ["Data governance", "Real-time analytics", "Data integration", "Scalable architecture"],
      price: "From $60,000",
      industry: "Technology",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Network,
      title: "Enterprise Integration Platform",
      description: "Comprehensive platform for integrating enterprise systems and applications.",
      features: ["API management", "System integration", "Workflow automation", "Real-time sync"],
      price: "From $55,000",
      industry: "Manufacturing",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Scalable Solutions",
      description: "Enterprise-grade solutions that grow with your business needs and requirements."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of experience delivering complex enterprise solutions across industries."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international standards and best practices for enterprise solutions."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance frameworks for enterprise environments."
    }
  ];

  const stats = [
    { label: "Enterprise Clients", value: "100+", icon: Building },
    { label: "Projects Delivered", value: "300+", icon: CheckCircle },
    { label: "Industries Served", value: "15+", icon: Globe },
    { label: "Client Satisfaction", value: "99%", icon: Star }
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
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive business technology solutions designed for enterprise-scale operations and digital transformation."
        keywords="enterprise solutions, business technology, digital transformation, enterprise software, Zion Tech Group"
        canonical="https://ziontechgroup.com/enterprise-solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-green opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-green opacity-60 blur-sm"
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
              <span className="bg-gradient-to-r from-zion-green via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive business technology solutions designed for enterprise-scale operations 
              and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-green to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-green/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-green/30 text-zion-green font-semibold rounded-xl hover:bg-zion-green hover:text-white transition-all duration-300"
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
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Solutions Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Enterprise Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to drive innovation and transform enterprise operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-green/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold bg-zion-green/20 text-zion-green rounded-full">
                      {solution.industry}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-green mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-green mb-4">{solution.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-green to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-green/25 transition-all duration-300"
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
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-green/50 transition-all duration-300"
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
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade technology solutions
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
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-r from-zion-green to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our enterprise solutions can drive innovation and growth for your organization
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

export default EnterpriseSolutions;