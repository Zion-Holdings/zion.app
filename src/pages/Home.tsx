
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, BarChart3, Bot, Globe, Sparkles, Star, TrendingUp, Building, Settings, Code } from 'lucide-react';

export function Home() {
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
      title: 'Custom AI Model Development',
      description: 'Tailored machine learning solutions for your business',
      price: 'From $15,000',
      features: ['Data Analysis', 'Model Training', 'API Integration']
    },
    {
      icon: '📈',
      title: 'Predictive Analytics',
      description: 'Forecast trends and optimize business decisions',
      price: 'From $8,000',
      features: ['Data Mining', 'Statistical Modeling', 'Visualization']
    },
    {
      icon: '🔍',
      title: 'Natural Language Processing',
      description: 'Text analysis and language understanding systems',
      price: 'From $12,000',
      features: ['Sentiment Analysis', 'Text Classification', 'Chatbots']
    },
    {
      icon: '🖼️',
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis for automation',
      price: 'From $10,000',
      features: ['Object Detection', 'Image Recognition', 'Video Processing']
    },
    {
      icon: '⚡',
      title: 'Process Automation',
      description: 'Intelligent workflow automation with AI',
      price: 'From $6,000',
      features: ['RPA Integration', 'Smart Workflows', 'Error Handling']
    },
    {
      icon: '🧠',
      title: 'AI Consulting & Strategy',
      description: 'Strategic guidance for AI implementation',
      price: 'From $200/hour',
      features: ['Technology Assessment', 'Roadmap Planning', 'Implementation Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Business with
              <span className="block">Next-Gen Technology</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of AI, micro SAAS solutions, and cutting-edge IT services. 
              Drive innovation, efficiency, and growth with Zion Tech Group.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From micro SAAS applications to enterprise AI solutions, we provide the tools and expertise 
              to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SAAS */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SAAS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Scalable, focused software solutions that solve specific business problems with 
                modern technology and AI integration.
              </p>
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">IT Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT solutions including cloud migration, cybersecurity, DevOps automation, 
                and on-site support services.
              </p>
              <Link
                to="/it-onsite-services"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Custom AI solutions, predictive analytics, and intelligent automation to 
                transform your business processes and decision-making.
              </p>
              <Link
                to="/ai-services"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready-to-deploy software solutions that scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions to modernize and secure your technology infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI & Machine Learning Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Intelligent solutions that learn, adapt, and optimize your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Brain className="w-4 h-4 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started Today
            </Link>
            <div className="text-gray-400">
              <p>📞 +1 302 464 0950</p>
              <p>✉️ kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
