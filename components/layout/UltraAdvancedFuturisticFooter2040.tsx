import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, ArrowRight, 
  Facebook, Twitter, Linkedin, Github, Youtube,
  Heart, Shield, Users, Award, TrendingUp,
  Star, Brain, Atom, Rocket, Cloud, Shield as ShieldIcon,
  Building, Target, BookOpen, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
  icon?: React.ReactNode;
}

const footerSections: FooterSection[] = [
  {
    title: 'Core Services',
    icon: <Star className="w-5 h-5" />,
    links: [
      { label: 'AI & Machine Learning', href: '/services?category=ai-ml', description: 'Advanced AI solutions', icon: <Brain className="w-4 h-4" /> },
      { label: 'Quantum Computing', href: '/services?category=quantum', description: 'Next-gen quantum tech', icon: <Atom className="w-4 h-4" /> },
      { label: 'Space Technology', href: '/services?category=space-tech', description: 'Innovative space solutions', icon: <Rocket className="w-4 h-4" /> },
      { label: 'Cybersecurity', href: '/services?category=cybersecurity', description: 'Enterprise security', icon: <ShieldIcon className="w-4 h-4" /> },
      { label: 'Cloud Solutions', href: '/services?category=cloud', description: 'Scalable cloud infrastructure', icon: <Cloud className="w-4 h-4" /> },
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    icon: <Building className="w-5 h-5" />,
    links: [
      { label: 'Enterprise AI Platform', href: '/quantum-enterprise-ai-platform', description: 'Quantum-enhanced AI' },
      { label: 'Autonomous Security', href: '/autonomous-enterprise-security-suite', description: 'Self-defending enterprise' },
      { label: 'Quantum Cloud', href: '/quantum-cloud-infrastructure-platform', description: 'Next-gen cloud infrastructure' },
      { label: 'Enterprise Automation', href: '/ai-powered-enterprise-automation-suite', description: 'Intelligent automation' },
      { label: 'Data Analytics', href: '/quantum-data-analytics-platform', description: 'Quantum-powered insights' },
      { label: 'Resource Management', href: '/autonomous-enterprise-resource-manager', description: 'Self-optimizing resources' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Target className="w-5 h-5" />,
    links: [
      { label: 'Healthcare', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Finance', href: '/financial-solutions', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/manufacturing-ai-solutions', description: 'Industry 4.0' },
      { label: 'Retail', href: '/retail-technology-solutions', description: 'E-commerce tech' },
      { label: 'Government', href: '/government-technology-solutions', description: 'Public sector' },
      { label: 'Education', href: '/education-technology-solutions', description: 'EdTech solutions' }
    ]
  },
  {
    title: 'Innovations & Research',
    icon: <Lightbulb className="w-5 h-5" />,
    links: [
      { label: 'Quantum AI', href: '/quantum-ai', description: 'AI powered by quantum computing' },
      { label: 'Space Tech', href: '/space-technology', description: 'Space exploration technology' },
      { label: 'Brain-Computer Interface', href: '/brain-computer-interface-2040', description: 'Neural interface tech' },
      { label: 'Metaverse Platform', href: '/metaverse-platform', description: 'Virtual reality solutions' },
      { label: 'Research & Development', href: '/research-development', description: 'Cutting-edge research' },
      { label: 'Innovation Lab', href: '/innovation-lab', description: 'Experimental projects' }
    ]
  },
  {
    title: 'Resources & Support',
    icon: <BookOpen className="w-5 h-5" />,
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'Whitepapers', href: '/white-papers', description: 'In-depth research' },
      { label: 'Webinars', href: '/webinars', description: 'Educational content' },
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },
      { label: 'API Reference', href: '/api-documentation', description: 'Developer resources' },
      { label: 'Support Center', href: '/support', description: 'Help & assistance' }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5" />,
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Leadership', href: '/about#leadership', description: 'Meet our team' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'News & Updates', href: '/news', description: 'Latest company news' },
      { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { label: 'Partners', href: '/partners', description: 'Strategic partnerships' }
    ]
  }
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
  { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' }
];

const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com'
};

const quickLinks = [
  { label: 'Get Started', href: '/contact', description: 'Start your journey with us' },
  { label: 'Request Demo', href: '/demo', description: 'See our solutions in action' },
  { label: 'Pricing', href: '/pricing', description: 'Transparent pricing plans' },
  { label: 'Status', href: '/status', description: 'System status and uptime' },
  { label: 'Security', href: '/security', description: 'Our security practices' },
  { label: 'Privacy', href: '/privacy', description: 'Privacy policy and compliance' }
];

const UltraAdvancedFuturisticFooter2040: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    setSubscriptionStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to subscribe
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Top section with newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Innovation Leader 2025</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock new possibilities.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </a>
              </div>
            </div>

            {/* Newsletter subscription */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-300">
                  Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </button>

                {subscriptionStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm"
                  >
                    Successfully subscribed! Welcome to our community.
                  </motion.p>
                )}

                {subscriptionStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>

              {/* Social links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer sections grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-start space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.icon && (
                          <span className="mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            {link.icon}
                          </span>
                        )}
                        <div>
                          <span className="hover:underline">{link.label}</span>
                          {link.description && (
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {link.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick links bar */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <span className="hover:underline">{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-sm">for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2040;