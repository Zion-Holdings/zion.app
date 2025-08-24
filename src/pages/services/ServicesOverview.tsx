import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Building, 
  Cloud, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'ai-autonomous-systems',
    title: 'AI & Autonomous Systems',
    description: 'Revolutionary AI systems that operate independently and transform business operations',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    services: [
      'AI Legal Research Assistant',
      'AI Financial Risk Manager',
      'AI Healthcare Diagnostics Pro',
      'AI Supply Chain Optimizer',
      'AI Cybersecurity Sentinel'
    ],
    href: '/services/ai-autonomous-systems'
  },
  {
    id: 'quantum-technology',
    title: 'Quantum Technology',
    description: 'Next-generation quantum computing solutions for unprecedented performance',
    icon: Building,
    color: 'from-blue-500 to-indigo-600',
    services: [
      'Quantum Edge Computing Platform',
      'Neuromorphic Computing Infrastructure',
      'Holographic Data Center Platform',
      'Bio-Computing Infrastructure',
      'Quantum Internet Backbone'
    ],
    href: '/services/quantum-technology'
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    description: 'Cutting-edge infrastructure solutions for modern enterprises',
    icon: Cloud,
    color: 'from-green-500 to-teal-600',
    services: [
      'Cloud Migration Services',
      'DevOps Automation',
      'Edge Computing Solutions',
      'Data Center Optimization',
      '5G Private Network Solutions'
    ],
    href: '/services/it-infrastructure'
  },
  {
    id: 'micro-saas-solutions',
    title: 'Micro SAAS Solutions',
    description: 'Innovative software-as-a-service solutions for specific business needs',
    icon: Building,
    color: 'from-orange-500 to-red-600',
    services: [
      'AI Content Factory Pro',
      'Quantum CRM Intelligence Suite',
      'AI HR Platform',
      'Quantum Financial Intelligence Platform',
      'AI Education Platform'
    ],
    href: '/services/micro-saas-solutions'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Advanced security and protection solutions for digital assets',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    services: [
      'Zero Trust Network Architecture',
      'Threat Intelligence Platform',
      'Compliance Automation',
      'SOC2 Compliance Automation',
      'Vulnerability Assessment & Penetration Testing'
    ],
    href: '/services/cybersecurity'
  },
  {
    id: 'industry-solutions',
    title: 'Industry Solutions',
    description: 'Industry-specific technology solutions for specialized sectors',
    icon: Building,
    color: 'from-yellow-500 to-orange-600',
    services: [
      'Healthcare AI Solutions',
      'Financial Technology Solutions',
      'Manufacturing AI Solutions',
      'Retail Technology Solutions',
      'Energy & Utilities Solutions'
    ],
    href: '/services/industry-solutions'
  }
];

const benefits = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI, quantum computing, and infrastructure innovations',
    icon: Zap
  },
  {
    title: 'Industry Expertise',
    description: 'Deep knowledge across multiple sectors with proven track records',
    icon: Building
  },
  {
    title: 'Scalable Solutions',
    description: 'Flexible solutions that grow with your business needs',
    icon: CheckCircle
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services',
    icon: CheckCircle
  }
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services - Zion Tech Group" 
        description="Comprehensive technology services including AI, quantum computing, cybersecurity, and industry solutions."
        keywords="AI services, quantum computing, cybersecurity, IT infrastructure, industry solutions"
        url="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-black to-zion-purple-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions that drive innovation and transform businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {category.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to={category.href}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss how our innovative solutions can drive your success and position you at the forefront of technological advancement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}