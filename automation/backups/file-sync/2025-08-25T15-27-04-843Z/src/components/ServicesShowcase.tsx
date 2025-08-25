import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Lock, 
  Rocket, 
  Shield,
  ArrowRight,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';

export const ServicesShowcase = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation, predictive analytics, and custom AI solutions that transform your business operations.',
      features: ['Custom AI Models', 'Predictive Analytics', 'Natural Language Processing'],
      color: 'from-blue-500 to-cyan-500',
      path: '/ai-services',
      badge: 'Popular'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automated deployments, and robust DevOps practices for modern applications.',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code'],
      color: 'from-purple-500 to-pink-500',
      path: '/cloud-devops-solutions',
      badge: 'Trending'
    },
    {
      icon: Code,
      title: 'Micro SAAS Development',
      description: 'Custom software solutions designed to solve specific business problems with rapid development cycles.',
      features: ['Custom Applications', 'API Development', 'Third-party Integrations'],
      color: 'from-green-500 to-emerald-500',
      path: '/micro-saas-services',
      badge: 'New'
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Comprehensive data management, analytics, and business intelligence solutions for data-driven decisions.',
      features: ['Data Warehousing', 'Business Intelligence', 'Data Analytics'],
      color: 'from-orange-500 to-red-500',
      path: '/data-solutions',
      badge: 'Featured'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy'],
      color: 'from-indigo-500 to-blue-500',
      path: '/digital-transformation',
      badge: 'Hot'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Compliance Management', 'Threat Detection'],
      color: 'from-red-500 to-pink-500',
      path: '/cybersecurity',
      badge: 'Critical'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Rocket, value: '24/7', label: 'Support' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            Our Comprehensive Services
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Solutions That Drive
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology solutions that 
            accelerate your business transformation and competitive advantage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold rounded-full shadow-lg">
                      {service.badge}
                    </span>
                  </div>
                )}
                
                <div className="h-full bg-zion-blue-light/5 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-zion-blue-light/5 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-zion-cyan/20 group-hover:border-zion-cyan/40 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};