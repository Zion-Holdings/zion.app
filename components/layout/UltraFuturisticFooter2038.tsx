import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Brain, Rocket, Target, Atom, Shield,
  Globe, Star, Users, Award, TrendingUp, Cpu, Cloud, Settings, Monitor,
  Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle,
  HelpCircle, Building, Zap, Eye, ChevronRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const footerSections = [
  {
    title: 'Revolutionary Services',
    links: [
      { name: 'All Services', href: '/services' },
      { name: 'AI & Consciousness', href: '/ai-services' },
      { name: 'Quantum Technology', href: '/quantum-services' },
      { name: 'IT Solutions', href: '/it-services' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: 'Space Technology', href: '/space-technology' }
    ]
  },
  {
    title: 'AI & Consciousness',
    links: [
      { name: 'Quantum AI Consciousness', href: '/quantum-ai-consciousness-platform' },
      { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence' },
      { name: 'Quantum Predictive Analytics', href: '/quantum-predictive-analytics' },
      { name: 'Autonomous Customer Service', href: '/autonomous-customer-service-ai' },
      { name: 'Quantum Computer Vision', href: '/quantum-computer-vision-suite' },
      { name: 'Autonomous Process Automation', href: '/autonomous-process-automation' }
    ]
  },
  {
    title: 'IT & Infrastructure',
    links: [
      { name: 'Quantum Edge Computing', href: '/quantum-edge-computing-platform' },
      { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
      { name: 'Quantum Database Platform', href: '/quantum-database-platform' },
      { name: 'Autonomous Network Security', href: '/autonomous-network-security' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot-platform' },
      { name: 'Autonomous Data Center', href: '/autonomous-data-center' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    links: [
      { name: 'Quantum AI Content Factory', href: '/quantum-ai-content-factory' },
      { name: 'Autonomous Customer Success', href: '/autonomous-customer-success-platform' },
      { name: 'Quantum Financial Forecasting', href: '/quantum-financial-forecasting-engine' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-monitor' },
      { name: 'Autonomous Marketing AI', href: '/autonomous-marketing-ai' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '💻' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
];

const UltraFuturisticFooter2038: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 border-t border-cyan-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                  <Brain className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-400 font-medium">Leading the Quantum Revolution</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of technology with revolutionary quantum AI, autonomous systems, 
              and consciousness technology that transforms businesses worldwide.
            </p>
            
            <div className="space-y-3">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                <Phone className="w-4 h-4 group-hover:text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                <Mail className="w-4 h-4 group-hover:text-cyan-400" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-700/50 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: Brain, title: "1500+", description: "Revolutionary Services", color: "cyan" },
            { icon: Users, title: "50K+", description: "Happy Clients", color: "blue" },
            { icon: Award, title: "99.9%", description: "Satisfaction Rate", color: "purple" },
            { icon: TrendingUp, title: "200+", description: "Industries Served", color: "emerald" }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative inline-block mb-3">
                <stat.icon className={`w-8 h-8 mx-auto text-${stat.color}-400`} />
                <div className={`absolute inset-0 w-8 h-8 bg-${stat.color}-400/20 rounded-full blur-lg`}></div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.title}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center py-8 border-t border-gray-700/50 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of companies already leveraging our revolutionary quantum AI, 
            consciousness technology, and autonomous solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Zion Tech Group. All rights reserved. Leading the quantum revolution.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
            
            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2038;