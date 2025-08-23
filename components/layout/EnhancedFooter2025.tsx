import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Users, Award, Clock, Globe, Phone, Mail, Globe as GlobeIcon,
  Linkedin, Twitter, Github, Youtube, Facebook, Instagram, ArrowRight
} from 'lucide-react';

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ziontechgroup", label: "Twitter" },
    { icon: Github, href: "https://github.com/Zion-Holdings", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/@ziontechgroup", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/ziontechgroup", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ziontechgroup", label: "Instagram" }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    // console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "500+", label: "Clients Worldwide", icon: Users },
            { number: "50+", label: "Industry Awards", icon: Award },
            { number: "24/7", label: "Support Available", icon: Clock },
            { number: "50+", label: "Countries Served", icon: Globe }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                <GlobeIcon className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm group flex items-center gap-2"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 mb-12 border border-cyan-500/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with the Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
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
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" aria-label="Security status indicator"></div>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" aria-label="Performance status indicator"></div>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Made with ❤️ by Zion Tech Group</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" aria-label="Company status indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter2025;