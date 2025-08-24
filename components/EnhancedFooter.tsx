import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Twitter, Linkedin, Github, Facebook, Instagram,
  CheckCircle, Star, Users, Award
} from 'lucide-react';

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Analytics',
      services: [
        { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence' },
        { name: 'AI Customer Experience', href: 'https://ziontechgroup.com/ai-customer-experience' },
        { name: 'AI Supply Chain Optimization', href: 'https://ziontechgroup.com/ai-supply-chain' },
        { name: 'AI Legal Document Automation', href: 'https://ziontechgroup.com/ai-legal-automation' }
      ]
    },
    {
      title: 'AI & Healthcare',
      services: [
        { name: 'AI Healthcare Analytics', href: 'https://ziontechgroup.com/ai-healthcare-analytics' },
        { name: 'Patient Outcome Prediction', href: 'https://ziontechgroup.com/ai-healthcare-analytics' },
        { name: 'Treatment Optimization', href: 'https://ziontechgroup.com/ai-healthcare-analytics' },
        { name: 'Population Health Insights', href: 'https://ziontechgroup.com/ai-healthcare-analytics' }
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      services: [
        { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity' },
        { name: 'Quantum AI Research', href: 'https://ziontechgroup.com/quantum-ai-research' },
        { name: 'Quantum Financial Modeling', href: 'https://ziontechgroup.com/quantum-financial-modeling' },
        { name: 'Quantum Machine Learning', href: 'https://ziontechgroup.com/quantum-machine-learning' }
      ]
    },
    {
      title: 'Edge Computing & IoT',
      services: [
        { name: 'Edge Computing Orchestration', href: 'https://ziontechgroup.com/edge-computing-orchestration' },
        { name: 'Edge AI Video Processing', href: 'https://ziontechgroup.com/edge-ai-video-processing' },
        { name: 'IoT Device Management', href: 'https://ziontechgroup.com/iot-device-management' },
        { name: 'Real-time Analytics', href: 'https://ziontechgroup.com/real-time-analytics' }
      ]
    },
    {
      title: 'AI & Robotics',
      services: [
        { name: 'Autonomous Supply Chain Robotics', href: 'https://ziontechgroup.com/autonomous-supply-chain-robotics' },
        { name: 'Warehouse Automation', href: 'https://ziontechgroup.com/autonomous-supply-chain-robotics' },
        { name: 'AI-Powered Route Optimization', href: 'https://ziontechgroup.com/autonomous-supply-chain-robotics' },
        { name: 'Multi-Robot Coordination', href: 'https://ziontechgroup.com/autonomous-supply-chain-robotics' }
      ]
    }
  ];

  const companyInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' },
    { icon: Globe, text: 'https://ziontechgroup.com', href: 'https://ziontechgroup.com' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Stats Section */}
      <section className="py-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Delivering cutting-edge technology solutions that drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                <p className="text-white/70 mb-6 max-w-md">
                  Leading-edge technology solutions and autonomous innovation platform. 
                  Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
                  and digital transformation solutions.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  {companyInfo.map((info, index) => (
                    <motion.a
                      key={info.text}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
                    >
                      <info.icon className="w-4 h-4 text-blue-400" />
                      <span>{info.text}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white/60 text-sm"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}