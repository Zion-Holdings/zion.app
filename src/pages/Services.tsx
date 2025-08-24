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