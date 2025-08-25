import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Shield, Cloud, Zap, Users, Settings, TrendingUp, Globe, Smartphone, Building } from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Development & Integration',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Consulting & Strategy'
      ],
      href: '/ai-services',
      featured: true
    },
    {
      id: 'software-development',
      name: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Web Application Development',
        'Mobile App Development',
        'API Development & Integration',
        'Database Design & Management',
        'DevOps & CI/CD',
        'Legacy System Modernization'
      ],
      href: '/software-development',
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      services: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Incident Response',
        'Compliance & Governance',
        'Security Training',
        'Threat Intelligence'
      ],
      href: '/cybersecurity',
      featured: false
    },
    {
      id: 'cloud-services',
      name: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation solutions',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      services: [
        'Cloud Migration & Strategy',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Cost Optimization',
        'Multi-Cloud Management'
      ],
      href: '/cloud-services',
      featured: true
    },
    {
      id: 'data-science',
      name: 'Data Science & Analytics',
      description: 'Transform your data into actionable business insights',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Data Strategy & Architecture',
        'Business Intelligence',
        'Data Visualization',
        'Statistical Analysis',
        'Big Data Processing',
        'Data Quality Management'
      ],
      href: '/data-science',
      featured: false
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation services',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      services: [
        'Process Automation',
        'Customer Experience Design',
        'Innovation Labs',
        'Change Management',
        'Technology Roadmapping',
        'Digital Strategy Consulting'
      ],
      href: '/digital-transformation',
      featured: true
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting and advisory services',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'Technology Strategy',
        'IT Infrastructure Planning',
        'Vendor Selection',
        'Project Management',
        'Risk Assessment',
        'Performance Optimization'
      ],
      href: '/it-consulting',
      featured: false
    },
    {
      id: 'managed-services',
      name: 'Managed IT Services',
      description: 'Comprehensive IT management and support',
      icon: Settings,
      color: 'from-teal-500 to-green-500',
      services: [
        '24/7 IT Support',
        'Network Management',
        'Backup & Recovery',
        'Security Monitoring',
        'Performance Management',
        'Compliance Management'
      ],
      href: '/managed-services',
      featured: false
    },
    {
      id: 'web-development',
      name: 'Web & E-commerce',
      description: 'Modern web solutions and online business platforms',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'Custom Website Development',
        'E-commerce Platforms',
        'Progressive Web Apps',
        'SEO & Digital Marketing',
        'Content Management Systems',
        'Website Maintenance'
      ],
      href: '/web-development',
      featured: false
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      services: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'App Store Optimization',
        'Mobile App Testing',
        'App Maintenance & Updates'
      ],
      href: '/mobile-development',
      featured: false
    },
    {
      id: 'enterprise-solutions',
      name: 'Enterprise Solutions',
      description: 'Scalable solutions for large organizations',
      icon: Building,
      color: 'from-slate-500 to-gray-500',
      services: [
        'Enterprise Architecture',
        'System Integration',
        'Workflow Automation',
        'Enterprise Security',
        'Scalability Planning',
        'Performance Optimization'
      ],
      href: '/enterprise-solutions',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: '🚀' },
    { label: 'Happy Clients', value: '200+', icon: '😊' },
    { label: 'Team Members', value: '50+', icon: '👥' },
    { label: 'Years Experience', value: '10+', icon: '⏰' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-blue/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
              Tech Services
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            From AI development to cybersecurity, we provide end-to-end technology solutions 
            that drive innovation and business growth. Discover how we can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-zion-cyan/30 transition-all duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-zion-cyan mb-1">{stat.value}</div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Service Categories
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Explore our comprehensive range of technology services designed to meet 
            every aspect of your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-105 ${
                category.featured 
                  ? 'border-zion-cyan/50 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5' 
                  : 'border-white/10 bg-white/5 hover:border-zion-cyan/30 hover:bg-white/10'
              }`}
            >
              {/* Featured Badge */}
              {category.featured && (
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-zinc-400 mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 4).map((service, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                  {category.services.length > 4 && (
                    <li className="text-zinc-500 text-sm">
                      +{category.services.length - 4} more services
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link
                  to={category.href}
                  className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300 group-hover:translate-x-1"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our technology services can help you achieve your goals. 
            Get in touch for a free consultation and personalized solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
            >
              <span>Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}