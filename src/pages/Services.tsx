import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Shield, 
  Zap,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
      services: [
        'Web Applications',
        'Mobile Apps',
        'Desktop Software',
        'API Development',
        'System Integration',
        'Legacy System Modernization'
      ],
      link: '/services/custom-software'
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.',
      services: [
        'Business Intelligence',
        'Predictive Analytics',
        'Machine Learning Models',
        'Data Visualization',
        'Big Data Processing',
        'AI-Powered Insights'
      ],
      link: '/services/data-analytics-ai'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and streamlined development processes for modern applications.',
      services: [
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Security'
      ],
      link: '/services/cloud-devops'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that automate processes and enhance decision-making.',
      services: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Modeling',
        'AI Automation',
        'Neural Networks',
        'AI Ethics & Governance'
      ],
      link: '/services/ai-machine-learning'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      services: [
        'Security Audits',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Threat Intelligence'
      ],
      link: '/services/cybersecurity'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      services: [
        'Process Automation',
        'Digital Strategy',
        'Change Management',
        'Technology Assessment',
        'Digital Maturity Analysis',
        'Implementation Support'
      ],
      link: '/services/digital-transformation'
    }
  ];

  const featuredServices = [
    {
      icon: Zap,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics platform that provides real-time insights and predictive capabilities.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data integration'],
      cta: 'Learn More',
      link: '/services/ai-business-intelligence'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Store optimization'],
      cta: 'Get Started',
      link: '/services/mobile-development'
    },
    {
      icon: Cpu,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise-grade solutions that grow with your business needs.',
      features: ['High availability', 'Scalable architecture', 'Enterprise security', '24/7 support'],
      cta: 'Contact Sales',
      link: '/services/enterprise-solutions'
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              every aspect of your digital transformation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-zion-slate mb-6 text-center leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={category.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our most popular and impactful solutions that are transforming businesses worldwide.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-dark to-zion-blue text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <service.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We have deep expertise across multiple industries and understand the unique 
              challenges and opportunities each sector presents.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real business value and sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Rapid Delivery
              </h3>
              <p className="text-zion-slate">
                Agile development methodologies ensure quick turnaround times without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Expert Team
              </h3>
              <p className="text-zion-slate">
                Skilled professionals with deep expertise in the latest technologies and industry best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Quality Assurance
              </h3>
              <p className="text-zion-slate">
                Rigorous testing and quality control processes ensure reliable and robust solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Continuous Support
              </h3>
              <p className="text-zion-slate">
                Ongoing maintenance, updates, and support to ensure your solutions evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and how our services can help 
            you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
