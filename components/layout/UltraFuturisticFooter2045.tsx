import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Globe,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Sparkles,
  Heart,
  Infinity,
  ArrowUp
} from 'lucide-react';

export default function UltraFuturisticFooter2045() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml' },
        { label: 'Enterprise AI Services', href: '/services?category=enterprise-ai' },
        { label: 'Quantum Computing', href: '/services?category=quantum' },
        { label: 'Space Technology', href: '/services?category=space-tech' },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity' },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud' },
        { label: 'Edge Computing', href: '/services?category=edge-computing' },
        { label: 'Data Management', href: '/services?category=data-management' }
      ]
    },
    {
      title: 'Micro SAAS',
      items: [
        { label: 'Content Creation Platform', href: '/services/ai-content-creation-platform-2025' },
        { label: 'Email Marketing Automation', href: '/services/intelligent-email-marketing-automation-2025' },
        { label: 'Social Media Management', href: '/services/smart-social-media-management-2025' },
        { label: 'Customer Support Platform', href: '/services/intelligent-customer-support-platform-2025' },
        { label: 'Project Management', href: '/services/smart-project-management-platform-2025' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Financial Services', href: '/solutions/financial-services' },
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' },
        { label: 'Retail & E-commerce', href: '/solutions/retail-ecommerce' },
        { label: 'Education', href: '/solutions/education' },
        { label: 'Government', href: '/solutions/government' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
        { label: 'Investors', href: '/investors' },
        { label: 'News & Press', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api-docs' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Training', href: '/training' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top section with logo and contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400 text-sm">Innovating Tomorrow</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative micro SAAS solutions. 
                Empowering businesses to thrive in the digital age.
              </p>

              {/* Contact information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-400">Get the latest insights on AI, quantum computing, and emerging technologies.</p>
              </div>
              
              <form className="space-y-4">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
              </form>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">2000+</div>
                  <div className="text-sm text-gray-400">Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-400">99.99%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                  {section.title === 'Services' && <Brain className="w-5 h-5 text-cyan-400" />}
                  {section.title === 'Micro SAAS' && <Sparkles className="w-5 h-5 text-purple-400" />}
                  {section.title === 'Solutions' && <Target className="w-5 h-5 text-emerald-400" />}
                  {section.title === 'Company' && <Building className="w-5 h-5 text-blue-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-orange-400" />}
                  <span>{section.title}</span>
                </h5>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-gray-700/50">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>for the future</span>
                <Infinity className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}