<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

export function Services() {
  const microSaasServices = [
    {
      icon: '🚀',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights and custom reporting',
      price: '$299/month',
      features: ['Machine Learning Models', 'Custom Reports', 'API Integration', 'Real-time Updates', 'Mobile Responsive'],
      category: 'Analytics',
      delivery: '2-3 weeks',
      support: '24/7 Priority Support'
    },
    {
      icon: '💼',
      title: 'Smart Project Management',
      description: 'AI-driven task prioritization and team collaboration platform',
      price: '$199/month',
      features: ['Automated Scheduling', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration', 'Integration APIs'],
      category: 'Productivity',
      delivery: '1-2 weeks',
      support: 'Business Hours Support'
    },
    {
      icon: '📊',
      title: 'Customer Relationship Hub',
      description: '360-degree customer view with sentiment analysis and automation',
      price: '$399/month',
      features: ['Lead Scoring', 'Email Automation', 'Sales Forecasting', 'Customer Analytics', 'CRM Integration'],
      category: 'Sales & Marketing',
      delivery: '3-4 weeks',
      support: '24/7 Priority Support'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Compliance Suite',
      description: 'Automated security audits and compliance reporting for enterprises',
      price: '$599/month',
      features: ['GDPR Compliance', 'SOC 2 Reports', 'Threat Detection', 'Security Monitoring', 'Compliance Dashboard'],
      category: 'Security',
      delivery: '4-6 weeks',
      support: '24/7 Emergency Support'
    },
    {
      icon: '📱',
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform with cross-platform support',
      price: '$149/month',
      features: ['Drag & Drop Builder', 'Cross-Platform', 'App Store Ready', 'Custom Templates', 'Analytics Integration'],
      category: 'Development',
      delivery: '2-3 weeks',
      support: 'Business Hours Support'
    },
    {
      icon: '🌐',
      title: 'E-commerce Optimization',
      description: 'AI-powered conversion rate optimization and revenue analytics',
      price: '$249/month',
      features: ['A/B Testing', 'Personalization', 'Revenue Analytics', 'Customer Segmentation', 'Performance Tracking'],
      category: 'E-commerce',
      delivery: '2-3 weeks',
      support: 'Business Hours Support'
    }
  ];

  const itServices = [
    {
      icon: '☁️',
      title: 'Cloud Migration & Optimization',
      description: 'Seamless cloud transition with cost optimization and performance tuning',
      price: 'From $5,000',
      features: ['AWS/Azure/GCP Migration', 'Performance Tuning', 'Cost Management', 'Security Implementation', 'Monitoring Setup'],
      category: 'Cloud',
      delivery: '4-8 weeks',
      support: '24/7 Cloud Support'
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity Implementation',
      description: 'Comprehensive security infrastructure setup and threat protection',
      price: 'From $8,000',
      features: ['Firewall Setup', 'VPN Configuration', 'Security Audits', 'Incident Response', 'Security Training'],
      category: 'Security',
      delivery: '6-10 weeks',
      support: '24/7 Security Support'
    },
    {
      icon: '⚙️',
      title: 'DevOps Automation',
      description: 'CI/CD pipeline optimization and infrastructure automation',
      price: 'From $6,000',
      features: ['Jenkins/GitLab CI', 'Docker/Kubernetes', 'Monitoring & Alerting', 'Infrastructure as Code', 'Performance Testing'],
      category: 'DevOps',
      delivery: '4-6 weeks',
      support: '24/7 DevOps Support'
    },
    {
      icon: '🗄️',
      title: 'Database Optimization',
      description: 'Performance tuning and scalability improvements for databases',
      price: 'From $4,000',
      features: ['Query Optimization', 'Indexing Strategy', 'Backup Strategies', 'Performance Monitoring', 'Scalability Planning'],
      category: 'Database',
      delivery: '2-4 weeks',
      support: 'Business Hours Support'
    },
    {
      icon: '🖥️',
      title: 'On-Site IT Support',
      description: '24/7 technical support and preventive maintenance services',
      price: 'From $150/hour',
      features: ['Emergency Response', 'Preventive Maintenance', 'Hardware Support', 'Software Installation', 'Network Troubleshooting'],
      category: 'Support',
      delivery: 'Same Day',
      support: '24/7 On-Site Support'
    },
    {
      icon: '🔧',
      title: 'Equipment Procurement',
      description: 'Strategic technology purchasing and professional setup services',
      price: 'From $2,000',
      features: ['Vendor Management', 'Professional Installation', 'Warranty Support', 'Training & Documentation', 'Ongoing Support'],
      category: 'Procurement',
      delivery: '2-4 weeks',
      support: 'Business Hours Support'
    }
  ];

  const aiServices = [
    {
      icon: '🤖',
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communications',
      price: '$199/month',
      features: ['Blog Posts', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Content Analytics'],
      category: 'Content',
      delivery: '1-2 weeks',
      support: 'Business Hours Support'
    },
    {
      icon: '📈',
      title: 'Predictive Analytics',
      description: 'Machine learning for business forecasting and risk assessment',
      price: '$499/month',
      features: ['Sales Forecasting', 'Risk Assessment', 'Trend Analysis', 'Custom Models', 'Real-time Insights'],
      category: 'Analytics',
      delivery: '3-4 weeks',
      support: '24/7 Priority Support'
    },
    {
      icon: '💬',
      title: 'AI Chatbot Development',
      description: 'Intelligent customer service automation with natural language processing',
      price: '$299/month',
      features: ['Natural Language Processing', 'Multi-Platform Support', 'Analytics Dashboard', 'Custom Training', 'Integration APIs'],
      category: 'Automation',
      delivery: '2-3 weeks',
      support: 'Business Hours Support'
    },
    {
      icon: '🎯',
      title: 'Talent Matching AI',
      description: 'AI-powered recruitment and skill matching platform',
      price: '$399/month',
      features: ['Resume Analysis', 'Skill Assessment', 'Cultural Fit Analysis', 'Interview Scheduling', 'Performance Tracking'],
      category: 'HR',
      delivery: '3-4 weeks',
      support: '24/7 Priority Support'
    },
    {
      icon: '🔍',
      title: 'AI-Powered Search',
      description: 'Intelligent search and recommendation engine with personalization',
      price: '$249/month',
      features: ['Semantic Search', 'Personalization', 'Analytics Dashboard', 'Custom Algorithms', 'API Integration'],
      category: 'Search',
      delivery: '2-3 weeks',
      support: 'Business Hours Support'
    },
    {
      icon: '📊',
      title: 'Data Intelligence Platform',
      description: 'Transform raw data into actionable insights with real-time processing',
      price: '$599/month',
      features: ['Data Mining', 'Advanced Visualization', 'Real-time Processing', 'Custom Dashboards', 'Machine Learning Models'],
      category: 'Data',
      delivery: '4-6 weeks',
      support: '24/7 Priority Support'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-cyan-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan-light bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI, IT, and technology solutions designed to transform your business. 
            From micro SAAS applications to enterprise infrastructure, we deliver results that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
            >
              Get a Quote
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Scalable, focused software solutions that grow with your business. 
              Each service is designed to solve specific challenges and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zion-blue/50 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zion-slate-light">Delivery:</span>
                    <span className="text-zion-cyan">{service.delivery}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zion-slate-light">Support:</span>
                    <span className="text-zion-cyan">{service.support}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-zion-blue/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
                IT Infrastructure & Services
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive IT solutions from cloud migration to on-site support. 
              We ensure your technology infrastructure is robust, secure, and scalable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zion-purple/20 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-purple/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs bg-zion-purple/20 text-zion-purple-light px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-zion-purple-light mb-4">{service.price}</div>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-zion-purple-light">✓</span>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zion-purple/20 pt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zion-slate-light">Delivery:</span>
                    <span className="text-zion-purple-light">{service.delivery}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zion-slate-light">Support:</span>
                    <span className="text-zion-purple-light">{service.support}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-cyan-light to-zion-purple bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, 
              gain insights, and create competitive advantages for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs bg-zion-cyan/20 text-zion-cyan-light px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-zion-cyan-light mb-4">{service.price}</div>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-zion-cyan-light">✓</span>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zion-slate-light">Delivery:</span>
                    <span className="text-zion-cyan-light">{service.delivery}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zion-slate-light">Support:</span>
                    <span className="text-zion-cyan-light">{service.support}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 border border-zion-cyan/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a customized quote. 
              Our team of experts is ready to help you transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-zion-cyan text-zion-blue-dark font-bold rounded-lg hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
              >
                Get a Quote
              </Link>
              <Link
                to="/about"
                className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Link } from 'react-router-dom';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [...COMPREHENSIVE_SERVICES];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
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
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-neon'
                    : 'bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-blue-light/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>

          {/* Quick Navigation to Comprehensive Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-zion-cyan mb-6 text-center">Explore Our Service Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Comprehensive Services",
                  description: "Full portfolio of IT & AI services",
                  link: "/comprehensive-services",
                  icon: "🚀",
                  color: "from-zion-cyan to-zion-blue-light"
                },
                {
                  title: "AI Services",
                  description: "AI-powered solutions & consulting",
                  link: "/ai-services",
                  icon: "🤖",
                  color: "from-zion-purple to-zion-cyan"
                },
                {
                  title: "Enterprise Solutions",
                  description: "Large-scale business transformation",
                  link: "/enterprise-solutions",
                  icon: "🏢",
                  color: "from-zion-cyan to-zion-purple"
                },
                {
                  title: "IT Onsite Services",
                  description: "Global IT support & maintenance",
                  link: "/it-onsite-services",
                  icon: "🌍",
                  color: "from-zion-purple to-zion-cyan"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-quantum text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-zion-cyan mb-2 group-hover:text-neon-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                      Explore
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-quantum"
            >
              {/* Service Card Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zion-cyan mb-2 group-hover:text-neon-green transition-colors">
                  {service.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30">
                    {service.category}
                  </span>
                  {service.subcategory && (
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                      {service.subcategory}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-zion-slate-light">
                    {service.pricingModel}
                  </span>
                </div>
                {service.marketPrice && (
                  <p className="text-sm text-zion-slate-light mt-1">
                    Market: {service.marketPrice}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-purple mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded border border-zion-blue-light/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <p>📧 {service.contactInfo.email}</p>
                    <p>📱 {service.contactInfo.phone}</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <div className="bg-gradient-to-r from-zion-blue-light/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-zion-cyan mb-6">Ready to Transform Your Business?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts can create tailored solutions to meet your specific business requirements.
              Let's discuss how we can help transform your business.
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-lg font-bold text-zion-cyan mb-2">Call Us</h3>
                <p className="text-zion-slate-light text-sm mb-2">Available 24/7</p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-lg font-bold text-zion-cyan mb-2">Email Us</h3>
                <p className="text-zion-slate-light text-sm mb-2">Quick response</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-zion-cyan mb-2">Visit Us</h3>
                <p className="text-zion-slate-light text-sm mb-2">Main office</p>
                <p className="text-zion-slate-light text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Solution Consultation"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 rounded-lg text-lg font-semibold hover:bg-zion-blue-light/30 transition-all duration-300"
              >
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </a>
                  <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Services
                  </a>
                  <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </a>
                  <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro SAAS Services
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
