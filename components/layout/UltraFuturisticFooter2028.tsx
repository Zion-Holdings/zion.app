import React from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Rocket, Brain, Atom, Shield, Factory, 
  Building2, LockKeyhole, Eye, Car, Leaf,
  Wifi, Zap, Cpu, Cloud, TrendingUp,
  Users, Briefcase, BookOpen, MessageCircle,
  Star, Target, Layers, Database, ShieldCheck
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall' },
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech',
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' },
      { name: 'Space Debris Management AI', href: '/space-debris-management-ai-platform' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation' }
    ]
  },
  {
    title: '🏭 Autonomous & Manufacturing',
    services: [
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' },
      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system' },
      { name: 'Automated HR Recruitment', href: '/automated-hr-recruitment-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Case Studies', href: '/case-studies', icon: Target },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'Terms', href: '/terms', icon: Shield },
  { name: 'Privacy', href: '/privacy', icon: LockKeyhole }
];

const solutionCategories = [
  {
    title: '🔧 IT Solutions',
    solutions: [
      { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: Cloud },
      { name: 'Cybersecurity', href: '/security', icon: Shield },
      { name: 'Data Analytics', href: '/analytics', icon: TrendingUp },
      { name: 'DevOps Automation', href: '/automation', icon: Layers }
    ]
  },
  {
    title: '🤖 AI Solutions',
    solutions: [
      { name: 'Machine Learning', href: '/ai-services', icon: Brain },
      { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
      { name: 'Natural Language Processing', href: '/nlp-services', icon: MessageCircle },
      { name: 'Predictive Analytics', href: '/predictive-analytics', icon: TrendingUp }
    ]
  },
  {
    title: '☁️ Cloud Solutions',
    solutions: [
      { name: 'AWS Consulting', href: '/aws-consulting', icon: Cloud },
      { name: 'Azure Services', href: '/azure-services', icon: Cloud },
      { name: 'Google Cloud', href: '/google-cloud', icon: Cloud },
      { name: 'Multi-Cloud Strategy', href: '/multi-cloud-strategy', icon: Cloud }
    ]
  }
];

const quickLinks = [
  { name: 'AI Climate Prediction', href: '/ai-climate-prediction-platform', icon: Leaf, color: 'from-emerald-500 to-teal-500' },
  { name: 'Quantum Security', href: '/quantum-cybersecurity-firewall', icon: ShieldCheck, color: 'from-purple-500 to-indigo-500' },
  { name: 'Drone Delivery', href: '/autonomous-drone-delivery-network', icon: Car, color: 'from-blue-500 to-cyan-500' },
  { name: 'AI Healthcare', href: '/ai-healthcare-diagnosis-platform', icon: Eye, color: 'from-red-500 to-pink-500' },
  { name: 'Smart Cities', href: '/smart-city-infrastructure-management', icon: Building2, color: 'from-gray-500 to-slate-500' },
  { name: '5G Optimization', href: '/5g-network-optimization-platform', icon: Wifi, color: 'from-green-500 to-emerald-500' }
];

export default function UltraFuturisticFooter2028() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-b border-purple-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-50"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-purple-300 text-sm">2028 Futuristic Innovations</p>
                  </div>
                </div>
                
                <p className="text-purple-200 mb-6 leading-relaxed">
                  Leading the future of technology with cutting-edge AI, quantum computing, and autonomous systems. 
                  Transforming businesses through innovative solutions and unparalleled expertise.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-purple-200">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-purple-200">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-purple-200">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Service Categories */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {serviceCategories.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-lg font-bold text-white mb-4">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              className="text-purple-300 hover:text-purple-200 transition-colors duration-200 flex items-center group"
                            >
                              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Solutions */}
        <div className="border-b border-purple-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Solutions</h2>
              <p className="text-purple-300 text-lg max-w-2xl mx-auto">
                From cutting-edge AI to quantum computing, we provide end-to-end solutions that drive innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutionCategories.map((category) => (
                <div key={category.title} className="bg-purple-900/20 border border-purple-500/30 rounded-2xl p-6 hover:bg-purple-800/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="flex items-center space-x-3 text-purple-300 hover:text-purple-200 transition-colors duration-200 group"
                      >
                        <solution.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                        <span>{solution.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Services Section */}
        <div className="border-b border-purple-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Popular Services</h2>
              <p className="text-purple-300 text-lg">
                Our most requested futuristic solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={`p-4 rounded-xl bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300 text-white text-center group`}
                >
                  <service.icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium block">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.slice(0, 5).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200 flex items-center group"
                      >
                        <link.icon className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  {companyLinks.slice(5).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200 flex items-center group"
                      >
                        <link.icon className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-2">
                <h4 className="text-lg font-bold text-white mb-4">Stay Updated</h4>
                <p className="text-purple-300 mb-4">
                  Get the latest updates on futuristic technologies and innovations.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black/50 border-t border-purple-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-purple-300 text-sm">
                © 2028 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-purple-200 transition-colors duration-200 ml-2">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="hover:text-purple-200 transition-colors duration-200 ml-2">
                  Terms of Service
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-purple-300">
                <span className="text-sm">Powered by</span>
                <div className="flex items-center space-x-2">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span className="font-bold text-purple-200">Zion Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link
          href="/contact"
          className="flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full shadow-2xl shadow-purple-500/30 hover:scale-110 transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Contact Us</span>
        </Link>
      </div>
    </footer>
  );
}