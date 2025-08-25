import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Cpu,
  Network,
  Server,
  Code,
  Palette,
  Rocket,
  Building2,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      services: [
        { name: 'AI-Powered Business Solutions', path: '/ai-business-solutions', description: 'Intelligent automation and decision-making systems' },
        { name: 'Machine Learning Models', path: '/ai-services', description: 'Custom ML models for your specific business needs' },
        { name: 'AI Research & Development', path: '/ai-services', description: 'Advanced AI research and custom algorithm development' },
        { name: 'Neural Network Platforms', path: '/ai-services', description: 'Scalable neural network infrastructure' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-devops-solutions', description: 'Multi-cloud deployment and management' },
        { name: 'DevOps Automation', path: '/cloud-devops-solutions', description: 'CI/CD pipelines and infrastructure as code' },
        { name: 'Container Orchestration', path: '/cloud-devops-solutions', description: 'Kubernetes and Docker management' },
        { name: 'Serverless Architecture', path: '/cloud-devops-solutions', description: 'Event-driven serverless solutions' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Building2,
      description: 'Comprehensive business transformation and enterprise-grade solutions',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'End-to-end business digitization' },
        { name: 'Enterprise Architecture', path: '/enterprise-solutions', description: 'Scalable enterprise system design' },
        { name: 'Legacy System Modernization', path: '/enterprise-solutions', description: 'Upgrade and modernize existing systems' },
        { name: 'Business Process Automation', path: '/enterprise-solutions', description: 'Streamline operations with automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions to protect your digital assets',
      services: [
        { name: 'Security Audits', path: '/advanced-cybersecurity-suite', description: 'Comprehensive security assessments' },
        { name: 'Threat Detection', path: '/advanced-cybersecurity-suite', description: 'AI-powered threat monitoring' },
        { name: 'Compliance Management', path: '/soc2-compliance-automation', description: 'SOC2, GDPR, and industry compliance' },
        { name: 'Incident Response', path: '/advanced-cybersecurity-suite', description: '24/7 security monitoring and response' }
      ]
    },
    {
      title: 'Micro SAAS Services',
      icon: Zap,
      description: 'Specialized software-as-a-service solutions for specific business needs',
      services: [
        { name: 'Micro SAAS Platforms', path: '/micro-saas-services', description: 'Custom micro-service applications' },
        { name: 'API Development', path: '/micro-saas-services', description: 'RESTful and GraphQL API services' },
        { name: 'Integration Services', path: '/micro-saas-services', description: 'Third-party system integrations' },
        { name: 'Custom Dashboards', path: '/micro-saas-services', description: 'Business intelligence and analytics' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Next-generation technology solutions for future-ready businesses',
      services: [
        { name: 'Quantum Computing', path: '/emerging-tech-services', description: 'Quantum algorithm development' },
        { name: 'Blockchain Solutions', path: '/emerging-tech-services', description: 'Distributed ledger technology' },
        { name: 'IoT Platforms', path: '/emerging-tech-services', description: 'Internet of Things infrastructure' },
        { name: 'Edge Computing', path: '/emerging-tech-services', description: 'Distributed computing solutions' }
      ]
    }
  ];

  const featuredServices = [
    {
      title: 'AI-Powered IT Asset Management',
      description: 'Intelligent tracking and management of your IT infrastructure',
      icon: Database,
      path: '/ai-powered-it-asset-management',
      features: ['Automated asset discovery', 'Predictive maintenance', 'Cost optimization', 'Compliance tracking']
    },
    {
      title: 'Advanced Research Automation',
      description: 'AI-driven research tools for faster insights and discoveries',
      icon: BarChart3,
      path: '/advanced-research-automation',
      features: ['Data mining automation', 'Literature review tools', 'Research workflow optimization', 'Collaborative platforms']
    },
    {
      title: '5G Enterprise Solutions',
      description: 'Next-generation network infrastructure for enterprise connectivity',
      icon: Network,
      path: '/5g-enterprise-solutions',
      features: ['Private 5G networks', 'Network optimization', 'Security protocols', 'Performance monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business, 
            from AI-powered automation to enterprise-grade infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Service Categories</h2>
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <category.icon className="w-12 h-12 text-zion-cyan mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                      <Link 
                        to={service.path}
                        className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Industry Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Building2 className="w-16 h-16 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Manufacturing</h3>
              <p className="text-zion-slate-light text-center mb-4">
                Smart factory solutions with IoT and AI-powered predictive maintenance
              </p>
              <Link 
                to="/industry-solutions"
                className="block text-center bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Globe className="w-16 h-16 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Healthcare</h3>
              <p className="text-zion-slate-light text-center mb-4">
                AI-powered diagnostic tools and patient care optimization systems
              </p>
              <Link 
                to="/industry-solutions"
                className="block text-center bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-16 h-16 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Finance</h3>
              <p className="text-zion-slate-light text-center mb-4">
                Blockchain solutions and AI-driven financial analytics platforms
              </p>
              <Link 
                to="/industry-solutions"
                className="block text-center bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/request-quote" 
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
