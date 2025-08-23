import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Users, Award, Clock, Globe, Phone, Mail, 
  Linkedin, Twitter, Github, Youtube, Facebook, Instagram,
  ArrowRight, Shield, Zap, Heart, ChevronUp
} from 'lucide-react';

const EnhancedFooter2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail('');
    // Show success message
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { number: "500+", label: "Clients Worldwide", icon: Users, color: "from-cyan-500 to-blue-500" },
    { number: "50+", label: "Industry Awards", icon: Award, color: "from-yellow-500 to-orange-500" },
    { number: "24/7", label: "Support Available", icon: Clock, color: "from-purple-500 to-pink-500" },
    { number: "50+", label: "Countries Served", icon: Globe, color: "from-emerald-500 to-teal-500" }
  ];

  const socialLinks = [
    { href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
    { href: "https://twitter.com/ziontechgroup", icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
    { href: "https://github.com/ziontechgroup", icon: Github, label: "GitHub", color: "hover:bg-gray-700" },
    { href: "https://youtube.com/@ziontechgroup", icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
    { href: "https://facebook.com/ziontechgroup", icon: Facebook, label: "Facebook", color: "hover:bg-blue-700" },
    { href: "https://instagram.com/ziontechgroup", icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" }
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI & Machine Learning", href: "/ai-services" },
        { label: "Quantum Computing", href: "/quantum-computing" },
        { label: "Cybersecurity", href: "/cybersecurity" },
        { label: "Cloud Infrastructure", href: "/cloud-platform" },
        { label: "Data Analytics", href: "/data-analytics" },
        { label: "Process Automation", href: "/process-automation" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", href: "/enterprise-solutions" },
        { label: "Startup Solutions", href: "/startup-solutions" },
        { label: "Government Solutions", href: "/government-solutions" },
        { label: "Healthcare Solutions", href: "/healthcare-solutions" },
        { label: "Financial Services", href: "/financial-solutions" },
        { label: "Manufacturing AI", href: "/manufacturing-ai-solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Careers", href: "/careers" },
        { label: "News & Press", href: "/news" },
        { label: "Partners", href: "/partners" },
        { label: "Investors", href: "/investors" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "White Papers", href: "/white-papers" },
        { label: "Documentation", href: "/docs" },
        { label: "Support", href: "/support" },
        { label: "Training", href: "/training" }
      ]
    }
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-cyan-400">Pioneering the Future</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses and unlock human potential.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>+1 (800) ZION-TECH</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm group/link flex items-center gap-2"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all duration-200 transform group-hover/link:translate-x-1" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 mb-12 border border-cyan-500/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with the Latest Tech Trends</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  aria-label="Email address for newsletter subscription"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800/50 ${social.color} rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2 py-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2 py-1"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2 py-1"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-950/50 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" aria-hidden="true" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>Made with <Heart className="w-4 h-4 text-red-400 inline" aria-hidden="true" /> by Zion Tech Group</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" aria-label="System status: Active" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top of page"
      >
        <ChevronUp className="w-6 h-6 text-white mx-auto" />
      </motion.button>
    </>
  );
};

export default EnhancedFooter2025;