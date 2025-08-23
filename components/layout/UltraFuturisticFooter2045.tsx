import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  const footerSections = [
    {
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: Brain },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045', icon: Atom },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: Cpu },
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
        { name: 'Quantum Cybersecurity 2045', href: '/quantum-cybersecurity-platform-2045', icon: Shield },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', icon: Rocket },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045', icon: Users }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', icon: Cloud },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', icon: Zap },
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', icon: Server },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', icon: Network },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', icon: Settings },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', icon: Lock }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: Brain },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045', icon: Atom },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', icon: Cpu },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', icon: Heart },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045', icon: Globe },
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: Target }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Mission', href: '/mission', icon: Star },
        { name: 'Leadership Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Code },
        { name: 'News & Updates', href: '/news', icon: Globe },
        { name: 'Press Kit', href: '/press', icon: Star }
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'from-purple-500 to-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700' }
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  ];

// Quick stats
const quickStats = [
  { number: '500+', label: 'Global Clients', icon: Globe, color: 'text-cyan-400' },
  { number: '99.9%', label: 'Uptime', icon: CheckCircle, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Clock, color: 'text-blue-400' },
  { number: '2045', label: 'Technology', icon: Sparkles, color: 'text-purple-400' }
];

// Newsletter signup component
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
  }, [email]);

  if (isSubscribed) {
    return (
      <motion.div
        className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-2">Thank you for subscribing!</h3>
        <p className="text-green-300">You'll receive our latest insights and updates.</p>
      </motion.div>
    );
  }

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
            required
            aria-label="Email address for newsletter"
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Subscribe to newsletter"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Subscribing...
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Subscribe Now
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </motion.button>
      </form>
      
      <p className="text-xs text-cyan-300/70 text-center mt-3">
        By subscribing, you agree to our privacy policy and terms of service.
      </p>
    </div>
  );
};

const UltraFuturisticFooter2045: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = useCallback((title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  }, [expandedSection]);

  // Memoize footer sections to prevent unnecessary re-renders
  const memoizedFooterSections = useMemo(() => footerSections, []);

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          {/* Top Section with Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-cyan-400/70 text-sm">Revolutionary Technology Solutions</p>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-200 group hover:translate-x-1"
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
                      >
                        <div className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                          <link.icon />
                        </div>
                        <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-cyan-500/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Innovation
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, and cutting-edge technology solutions delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Pioneering the future of technology since 2025</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-900/50 border border-cyan-500/20 text-gray-400 transition-all duration-200 hover:scale-110 hover:border-cyan-500/50"
                    aria-label={social.name}
                  >
<<<<<<< HEAD
                    {social.icon}
=======
                    <social.icon />
>>>>>>> origin/main
                  </Link>
                ))}
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/status" className="hover:text-cyan-400 transition-colors duration-200">
                  System Status
                </Link>
                <Link href="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                  Sitemap
                </Link>
                <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;