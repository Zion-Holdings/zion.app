import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Mail, Phone, MapPin, Globe, ArrowUp, Users, Award, Code, Server, HelpCircle,
  Linkedin, Github, Twitter, Youtube, Facebook, Instagram
} from 'lucide-react';

const EnhancedFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Space Technology', href: '/space-technology', icon: Rocket },
        { name: 'DevOps & Cloud', href: '/devops-cloud', icon: Cpu },
        { name: 'Edge Computing', href: '/edge-computing', icon: Database }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise AI', href: '/enterprise-ai', icon: Brain },
        { name: 'Quantum Security', href: '/quantum-security', icon: Shield },
        { name: 'Space Innovation', href: '/space-innovation', icon: Rocket },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Cpu },
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Database },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: Atom }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Globe },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Award },
        { name: 'News & Insights', href: '/news', icon: Globe },
        { name: 'Case Studies', href: '/case-studies', icon: Award },
        { name: 'Partnerships', href: '/partnerships', icon: Users }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: Code },
        { name: 'API Reference', href: '/api', icon: Server },
        { name: 'Developer Tools', href: '/dev-tools', icon: Code },
        { name: 'Blog', href: '/blog', icon: Globe },
        { name: 'Webinars', href: '/webinars', icon: Users },
        { name: 'Support Center', href: '/support', icon: HelpCircle }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  Leading-edge technology solutions and autonomous innovation platform. 
                  Empowering businesses with cutting-edge AI, quantum computing, and cybersecurity solutions.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Delaware, United States</span>
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                      >
                        {link.icon && (
                          <link.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        )}
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-white/60 font-medium">Follow us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white/60 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-white/5`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-1 rounded-md text-sm font-medium transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm">Made with ❤️ by Zion Tech Group</span>
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;