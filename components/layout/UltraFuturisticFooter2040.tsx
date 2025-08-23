import React from 'react';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket, Cpu, Target, Sparkles, 
  Heart, DollarSign, GraduationCap, Building, Truck, Zap,
  Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Youtube,
  ArrowRight, Star, CheckCircle, TrendingUp, Award, Clock
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ziontechgroup',
      icon: Github,
      color: 'hover:text-gray-400'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Consciousness Evolution', href: '/services/ai-consciousness' },
        { name: 'Neural Network Development', href: '/services/ai-consciousness' },
        { name: 'Machine Learning Solutions', href: '/services/ai-consciousness' },
        { name: 'Cognitive Computing', href: '/services/ai-consciousness' }
      ]
    },
    {
      name: 'Quantum Technology',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-technology' },
        { name: 'Quantum Cryptography', href: '/services/quantum-technology' },
        { name: 'Hybrid Quantum Systems', href: '/services/quantum-technology' },
        { name: 'Quantum Algorithms', href: '/services/quantum-technology' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Advanced Threat Protection', href: '/services/cybersecurity' },
        { name: 'Zero Trust Security', href: '/services/cybersecurity' },
        { name: 'Incident Response', href: '/services/cybersecurity' },
        { name: 'Security Audits', href: '/services/cybersecurity' }
      ]
    },
    {
      name: 'Business Solutions',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      services: [
        { name: 'Micro SAAS Development', href: '/services/business-solutions' },
        { name: 'Business Process Automation', href: '/services/business-solutions' },
        { name: 'Digital Transformation', href: '/services/business-solutions' },
        { name: 'Strategic Consulting', href: '/services/business-solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: Star },
    { name: 'Our Team', href: '/about#team', icon: CheckCircle },
    { name: 'Careers', href: '/careers', icon: TrendingUp },
    { name: 'Blog', href: '/blog', icon: Award },
    { name: 'Case Studies', href: '/case-studies', icon: Clock },
    { name: 'Webinars', href: '/webinars', icon: Star },
    { name: 'Documentation', href: '/docs', icon: CheckCircle },
    { name: 'Support', href: '/support', icon: TrendingUp }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare & Biotech',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      href: '/solutions/healthcare',
      description: 'AI-powered healthcare solutions'
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      href: '/solutions/financial',
      description: 'Fintech and banking solutions'
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      href: '/solutions/manufacturing',
      description: 'Smart manufacturing and automation'
    },
    {
      name: 'Retail & E-commerce',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      href: '/solutions/retail',
      description: 'Digital commerce solutions'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      href: '/solutions/education',
      description: 'Edtech and learning platforms'
    },
    {
      name: 'Government',
      icon: Building,
      color: 'from-gray-500 to-blue-500',
      href: '/solutions/government',
      description: 'Public sector technology'
    },
    {
      name: 'Energy & Utilities',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      href: '/solutions/energy',
      description: 'Smart energy and grid solutions'
    },
    {
      name: 'Transportation',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      href: '/solutions/transportation',
      description: 'Smart transportation and logistics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI, quantum technology, and innovative solutions that transform businesses and industries.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.hours}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.name} className="group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h5>
                    </div>
                    <div className="ml-11 space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-white/70 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Solutions */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Industry Solutions</h4>
              <div className="space-y-3">
                {industrySolutions.map((solution) => (
                  <Link
                    key={solution.name}
                    href={solution.href}
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {solution.name}
                      </div>
                      <div className="text-xs text-white/60">
                        {solution.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="grid grid-cols-1 gap-2 mb-8">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-sm text-white/70 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Newsletter */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h5 className="text-sm font-medium text-white mb-3">Stay Updated</h5>
                <p className="text-xs text-white/60 mb-3">
                  Get the latest insights on emerging technologies and industry trends.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our cutting-edge solutions. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-white/60">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-white/60 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link href="/sitemap" className="text-white/60 hover:text-white transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;