import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: 'data', name: 'Data & Analytics', icon: '📊' },
    { id: 'consulting', name: 'Consulting', icon: '💼' }
  ];

  const services = [
    {
      id: 'ai-development',
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs',
      category: 'ai',
      icon: '🤖',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'From $15,000',
      duration: '8-12 weeks',
      complexity: 'Advanced'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and DevOps services for modern businesses',
      category: 'cloud',
      icon: '☁️',
      features: ['AWS/Azure/GCP Setup', 'Container Orchestration', 'CI/CD Pipelines', 'Monitoring & Logging'],
      price: 'From $8,000',
      duration: '4-8 weeks',
      complexity: 'Intermediate'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      category: 'security',
      icon: '🔒',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance Management'],
      price: 'From $12,000',
      duration: '6-10 weeks',
      complexity: 'Advanced'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics',
      category: 'data',
      icon: '📊',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Predictive Modeling'],
      price: 'From $10,000',
      duration: '6-12 weeks',
      complexity: 'Intermediate'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization and digital strategy',
      category: 'consulting',
      icon: '🔄',
      features: ['Process Analysis', 'Technology Roadmap', 'Change Management', 'Training & Support'],
      price: 'From $25,000',
      duration: '12-20 weeks',
      complexity: 'Advanced'
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Bespoke software solutions designed for your unique requirements',
      category: 'consulting',
      icon: '💻',
      features: ['Requirements Analysis', 'UI/UX Design', 'Full-stack Development', 'Testing & Deployment'],
      price: 'From $20,000',
      duration: '10-16 weeks',
      complexity: 'Advanced'
    },
    {
      id: 'blockchain-solutions',
      title: 'Blockchain Solutions',
      description: 'Innovative blockchain applications for secure and transparent operations',
      category: 'ai',
      icon: '⛓️',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Supply Chain Tracking'],
      price: 'From $30,000',
      duration: '16-24 weeks',
      complexity: 'Expert'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation computing solutions for complex problem-solving',
      category: 'ai',
      icon: '⚛️',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
      price: 'From $50,000',
      duration: '20-32 weeks',
      complexity: 'Expert'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'text-zion-emerald';
      case 'Intermediate': return 'text-zion-cyan';
      case 'Advanced': return 'text-zion-blue';
      case 'Expert': return 'text-zion-purple';
      default: return 'text-zion-slate-light';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-cyan-dark text-zion-slate-dark shadow-2xl'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group p-8 rounded-2xl glass-morphism border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:animate-float">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                    <span className={`text-sm font-semibold ${getComplexityColor(service.complexity)}`}>
                      {service.complexity}
                    </span>
                  </div>
                  
                  <div className="text-center text-zion-slate-light text-sm">
                    Duration: {service.duration}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-zion-slate-light text-sm flex items-center">
                          <span className="text-zion-cyan mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="w-full px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-zion-slate-dark/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
              <p className="text-zion-slate-light">
                We analyze your requirements and understand your business objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
              <p className="text-zion-slate-light">
                We create a detailed roadmap and technical architecture
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-cyan-dark rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Development</h3>
              <p className="text-zion-slate-light">
                Our expert team builds your solution with regular updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-emerald to-zion-emerald-dark rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Delivery</h3>
              <p className="text-zion-slate-light">
                We deploy your solution and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose <span className="text-gradient">Zion</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-cyan-dark rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                    <p className="text-zion-slate-light">
                      Our team consists of industry experts with proven track records in delivering complex solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
                    <p className="text-zion-slate-light">
                      We pride ourselves on delivering high-quality solutions within agreed timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-blue to-zion-blue-dark rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🔒
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                    <p className="text-zion-slate-light">
                      Security is built into every solution we deliver, ensuring your data and systems are protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl glass-morphism border border-zion-cyan/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-float">🚀</div>
                  <p className="text-zion-slate-light text-lg">Ready to Launch?</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-gold rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl glass-morphism border border-zion-cyan/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-xl font-semibold transition-all duration-300"
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