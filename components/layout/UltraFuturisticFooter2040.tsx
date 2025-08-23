import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink, Sparkles, Heart, Shield, Zap,
  Clock, Award, Users, TrendingUp
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services 2043',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    badge: 'Featured',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', featured: true, description: 'Next-generation AI consciousness' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', featured: true, description: 'Quantum-powered AI networks' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', featured: true, description: 'AI-powered business insights' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', featured: true, description: 'Quantum-resistant security' },
      { name: 'Autonomous Customer Success 2043', href: '/autonomous-customer-success-2043', featured: true, description: 'AI-powered customer success' },
      { name: 'Space Resource Intelligence 2043', href: '/space-resource-intelligence-2043', description: 'AI-powered space resource management' },
      { name: 'Autonomous DevOps Platform 2043', href: '/autonomous-devops-2043', description: 'Fully autonomous DevOps' },
      { name: 'AI Healthcare Platform 2043', href: '/ai-healthcare-platform-2043', description: 'AI-powered healthcare solutions' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043', description: 'Quantum-powered trading' },
      { name: 'Autonomous Supply Chain 2043', href: '/autonomous-supply-chain-2043', description: 'AI-powered supply chain' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    badge: 'Hot',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', description: 'Next-generation AI consciousness' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', description: 'Quantum-powered AI networks' },
      { name: 'Autonomous AI Research 2043', href: '/autonomous-ai-research-2043', description: 'Fully autonomous AI research' },
      { name: 'AI Content Personalization 2043', href: '/ai-content-personalization-2043', description: 'Intelligent content personalization' },
      { name: 'AI Ethics & Governance 2043', href: '/ai-ethics-governance-2043', description: 'AI ethics and governance' },
      { name: 'AI Autonomous Ecosystem 2043', href: '/ai-autonomous-ecosystem-2043', description: 'Complete AI ecosystem' },
      { name: 'AI Predictive Maintenance 2043', href: '/ai-predictive-maintenance-2043', description: 'AI-powered maintenance' },
      { name: 'AI Customer Success 2043', href: '/ai-customer-success-2043', description: 'AI-powered customer success' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', description: 'AI-powered business insights' },
      { name: 'AI Marketing Automation 2043', href: '/ai-marketing-automation-2043', description: 'Intelligent marketing automation' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Trending',
    links: [
      { name: 'Quantum Cloud Infrastructure 2043', href: '/quantum-cloud-infrastructure-2043', description: 'Quantum-powered cloud infrastructure' },
      { name: 'Quantum Database Platform 2043', href: '/quantum-database-2043', description: 'Quantum-powered database' },
      { name: 'Quantum Edge Computing 2043', href: '/quantum-edge-computing-2043', description: 'Quantum-powered edge computing' },
      { name: 'Quantum API Gateway 2043', href: '/quantum-api-gateway-2043', description: 'Quantum-powered API gateway' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', description: 'Quantum-resistant security' },
      { name: 'Quantum Internet Security 2043', href: '/quantum-internet-security-2043', description: 'Quantum internet security' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043', description: 'Quantum-powered trading' },
      { name: 'Quantum Neural Network 2043', href: '/quantum-ai-neural-2043', description: 'Quantum-powered AI networks' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    badge: 'New',
    links: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Careers', href: '/careers', description: 'Join our revolutionary team' },
      { name: 'News & Updates', href: '/news', description: 'Latest insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' },
      { name: 'Blog', href: '/blog', description: 'Industry insights and trends' },
      { name: 'Resources', href: '/resources', description: 'Helpful tools and guides' },
      { name: 'Support', href: '/support', description: '24/7 technical support' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
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
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'from-blue-400 to-blue-600' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'from-blue-600 to-blue-800' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'from-red-500 to-red-700' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'from-gray-600 to-gray-800' }
];

const companyStats = [
  { number: '1500+', label: 'Revolutionary Services', icon: Star, color: 'from-yellow-500 to-orange-500' },
  { number: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },
  { number: '24/7', label: 'AI Support Available', icon: Brain, color: 'from-cyan-500 to-blue-500' },
  { number: '150+', label: 'Countries Served', icon: Globe, color: 'from-purple-500 to-pink-500' }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsNewsletterSubscribed(true);
      setNewsletterEmail('');
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter subscription:', newsletterEmail);
    }
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Company Stats Section */}
      <section className="py-16 px-4 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our revolutionary technology solutions are powering the future of business across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-700/20 border border-gray-600/30 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/20">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Stay Updated with Revolutionary Tech
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get Future-Ready Insights
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on AI consciousness, quantum computing, and revolutionary technology breakthroughs.
            </p>

            {!isNewsletterSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 rounded-xl"
              >
                <Heart className="w-5 h-5 mr-2" />
                Thank you for subscribing! Welcome to the future.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                    <div className="text-sm text-gray-400">Revolutionary Technology 2043</div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-sm">{contactInfo.mobile}</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-br ${social.color} text-white hover:scale-110 transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${section.color}`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white flex items-center">
                      {section.title}
                      {section.badge && (
                        <span className="ml-2 px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {section.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-400">{section.description}</p>
                  </div>
                </div>

                {/* Mobile Expandable Section */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300"
                    aria-expanded={expandedSection === section.title}
                  >
                    <span className="text-sm font-medium text-gray-300">View Links</span>
                    <ArrowRight 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                        expandedSection === section.title ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSection === section.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-2"
                      >
                        {section.links.slice(0, 5).map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-gray-800/30 transition-all duration-300"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:block space-y-2">
                  {section.links.slice(0, 6).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                    >
                      <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                          {link.name}
                        </div>
                        {link.description && (
                          <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                            {link.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-6 text-sm text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">Cookie Policy</Link>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;