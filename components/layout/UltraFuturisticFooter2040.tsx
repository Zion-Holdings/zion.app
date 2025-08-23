import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  Brain, Atom, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowRight, Server, Users, Zap
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040', featured: true },
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', featured: true },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040', featured: true },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', featured: true },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', featured: true },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', featured: true },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform' },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Autonomous Business Process Automation', href: '/ai-autonomous-business-process-automation' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040' },
      { name: 'AI Emotional Intelligence 2040', href: '/ai-emotional-intelligence-2040' },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'AI Content Personalization 2041', href: '/ai-content-personalization-2041' },
      { name: 'AI Ethics & Governance 2041', href: '/ai-ethics-governance-2041' },
      { name: 'AI Autonomous Ecosystem 2041', href: '/ai-autonomous-ecosystem-2041' },
      { name: 'AI Predictive Maintenance 2041', href: '/ai-predictive-maintenance-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040' },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041' },
      { name: 'Quantum Bio-Computing 2041', href: '/quantum-bio-computing-2041' },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040' },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040' },
      { name: 'Autonomous Vehicle AI 2040', href: '/autonomous-vehicle-ai-2040' },
      { name: 'Quantum Materials Discovery 2040', href: '/quantum-materials-discovery-2040' },
      { name: 'Quantum Financial Intelligence 2040', href: '/quantum-financial-intelligence-2040' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Support', href: '/support' },
      { name: 'Training', href: '/training' },
      { name: 'Resources', href: '/resources' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyan-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-16">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                {section.title === 'Featured Revolutionary Services' && <Star className="w-5 h-5 text-yellow-400" />}
                {section.title === 'AI & Consciousness' && <Brain className="w-5 h-5 text-purple-400" />}
                {section.title === 'Quantum & Emerging Tech' && <Atom className="w-5 h-5 text-cyan-400" />}
                {section.title === 'Enterprise Solutions' && <Server className="w-5 h-5 text-blue-400" />}
                {section.title === 'Company & Resources' && <Users className="w-5 h-5 text-green-400" />}
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.links.map((item, itemIndex) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0">
                        <Star className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                        {item.name}
                      </span>
                      {item.featured && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                          Featured
                        </span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our innovative services can drive your success and propel you into the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="flex items-center justify-center gap-3 text-cyan-400 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-200">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Mobile</div>
                <div className="font-semibold">{contactInfo.mobile}</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-purple-400 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-semibold">{contactInfo.email}</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-pink-400 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors duration-200">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Address</div>
                <div className="font-semibold text-sm">{contactInfo.address}</div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
            >
              Request Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Company Info */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">2040 Future Technology</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-gray-800">
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;