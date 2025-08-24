
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const microSaasServices = [
    {
      icon: '🚀',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights',
      price: '$299/month',
      features: ['Machine Learning', 'Custom Reports', 'API Integration']
    },
    {
      icon: '💼',
      title: 'Smart Project Management',
      description: 'AI-driven task prioritization and team collaboration',
      price: '$199/month',
      features: ['Automated Scheduling', 'Resource Optimization', 'Progress Tracking']
    },
    {
      icon: '📊',
      title: 'Customer Relationship Hub',
      description: '360-degree customer view with sentiment analysis',
      price: '$399/month',
      features: ['Lead Scoring', 'Email Automation', 'Sales Forecasting']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Compliance Suite',
      description: 'Automated security audits and compliance reporting',
      price: '$599/month',
      features: ['GDPR Compliance', 'SOC 2 Reports', 'Threat Detection']
    },
    {
      icon: '📱',
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform',
      price: '$149/month',
      features: ['Drag & Drop', 'Cross-Platform', 'App Store Ready']
    },
    {
      icon: '🌐',
      title: 'E-commerce Optimization',
      description: 'AI-powered conversion rate optimization',
      price: '$249/month',
      features: ['A/B Testing', 'Personalization', 'Revenue Analytics']
    }
  ];

  const itServices = [
    {
      icon: '☁️',
      title: 'Cloud Migration & Optimization',
      description: 'Seamless cloud transition with cost optimization',
      price: 'From $5,000',
      features: ['AWS/Azure/GCP', 'Performance Tuning', 'Cost Management']
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity Implementation',
      description: 'Comprehensive security infrastructure setup',
      price: 'From $8,000',
      features: ['Firewall Setup', 'VPN Configuration', 'Security Audits']
    },
    {
      icon: '⚙️',
      title: 'DevOps Automation',
      description: 'CI/CD pipeline optimization and automation',
      price: 'From $6,000',
      features: ['Jenkins/GitLab CI', 'Docker/Kubernetes', 'Monitoring']
    },
    {
      icon: '🗄️',
      title: 'Database Optimization',
      description: 'Performance tuning and scalability improvements',
      price: 'From $4,000',
      features: ['Query Optimization', 'Indexing', 'Backup Strategies']
    },
    {
      icon: '🖥️',
      title: 'On-Site IT Support',
      description: '24/7 technical support and maintenance',
      price: 'From $150/hour',
      features: ['Emergency Response', 'Preventive Maintenance', 'Hardware Support']
    },
    {
      icon: '🔧',
      title: 'Equipment Procurement',
      description: 'Strategic technology purchasing and setup',
      price: 'From $2,000',
      features: ['Vendor Management', 'Installation', 'Warranty Support']
    }
  ];

  const aiServices = [
    {
      icon: '🤖',
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing',
      price: '$199/month',
      features: ['Blog Posts', 'Social Media', 'Email Campaigns']
    },
    {
      icon: '📈',
      title: 'Predictive Analytics',
      description: 'Machine learning for business forecasting',
      price: '$499/month',
      features: ['Sales Forecasting', 'Risk Assessment', 'Trend Analysis']
    },
    {
      icon: '💬',
      title: 'AI Chatbot Development',
      description: 'Intelligent customer service automation',
      price: '$299/month',
      features: ['Natural Language', 'Multi-Platform', 'Analytics']
    },
    {
      icon: '🎯',
      title: 'Talent Matching AI',
      description: 'AI-powered recruitment and skill matching',
      price: '$399/month',
      features: ['Resume Analysis', 'Skill Assessment', 'Cultural Fit']
    },
    {
      icon: '🔍',
      title: 'AI-Powered Search',
      description: 'Intelligent search and recommendation engine',
      price: '$249/month',
      features: ['Semantic Search', 'Personalization', 'Analytics']
    },
    {
      icon: '📊',
      title: 'Data Intelligence Platform',
      description: 'Transform raw data into actionable insights',
      price: '$599/month',
      features: ['Data Mining', 'Visualization', 'Real-time Processing']
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
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through innovative micro SAAS solutions, cutting-edge IT services, 
            and advanced AI technologies. We're your strategic technology partner for the digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
            >
              Get Started Today
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

      {/* Contact Info Banner */}
      <section className="relative z-10 py-8 px-4 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-zion-slate-light text-sm">Call Us</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-zion-slate-light text-sm">Email Us</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-zion-slate-light text-sm">Visit Us</p>
                <p className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
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
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
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
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-zion-purple-light mb-4">{service.price}</div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-zion-purple-light">✓</span>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
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
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-zion-cyan-light mb-4">{service.price}</div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-zion-cyan-light">✓</span>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-zion-blue/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', description: 'Rapid deployment and implementation' },
              { icon: '🔒', title: 'Enterprise Security', description: 'Bank-level security and compliance' },
              { icon: '📈', title: 'Scalable Solutions', description: 'Grow with your business needs' },
              { icon: '🎯', title: 'Results Driven', description: 'Measurable ROI and performance metrics' },
              { icon: '🌍', title: 'Global Support', description: '24/7 technical support worldwide' },
              { icon: '🚀', title: 'Innovation First', description: 'Cutting-edge technology adoption' },
              { icon: '🤝', title: 'Partnership Focus', description: 'Long-term strategic relationships' },
              { icon: '💡', title: 'Expert Team', description: 'Certified professionals and specialists' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already accelerated their growth 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-zion-cyan text-zion-blue-dark font-bold rounded-lg hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
              >
                Start Your Journey
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
};

export default Home;
