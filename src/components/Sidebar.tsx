<<<<<<< HEAD
import React from 'react';
=======
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield } from 'lucide-react';
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  Info, 
  Shield, 
  Briefcase,
  Globe,
  Leaf,
  MessageSquare,
  Search,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
<<<<<<< HEAD
        { name: 'Home', href: '/', icon: Home },
        { name: 'Marketplace', href: '/marketplace', icon: Home },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Talent', href: '/talent', icon: Users },
        { name: 'Equipment', href: '/equipment', icon: Briefcase },
        { name: 'Categories', href: '/categories', icon: Globe },
      ]
    },
    {
      title: 'AI & Tools',
      items: [
        { name: 'AI Matcher', href: '/match', icon: Search },
        { name: 'Hire AI', href: '/zion-hire-ai', icon: MessageSquare },
        { name: 'Green IT', href: '/green-it', icon: Leaf },
        { name: 'Analytics', href: '/analytics', icon: BarChart3 },
=======
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'AI & Machine Learning', path: '/services?category=AI%20%26%20Machine%20Learning', icon: Briefcase },
        { name: 'Cybersecurity', path: '/services?category=Cybersecurity', icon: Shield },
        { name: 'Micro SAAS Solutions', path: '/services?category=Micro%20SAAS%20Solutions', icon: Globe },
        { name: 'Space Technology', path: '/services?category=Space%20Technology', icon: Globe },
        { name: 'Healthcare AI', path: '/services?category=Healthcare%20AI', icon: Users },
        { name: 'Manufacturing AI', path: '/services?category=Manufacturing%20AI', icon: Briefcase },
        { name: 'Emerging Technology', path: '/services?category=Emerging%20Technology', icon: Globe },
        { name: 'Autonomous Systems', path: '/services?category=AI%20%26%20Autonomous%20Systems', icon: Users }
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
      ]
    },
    {
      title: 'Company',
      items: [
<<<<<<< HEAD
        { name: 'About Us', href: '/about', icon: Info },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
=======
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'News & Updates', path: '/news', icon: Globe }
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
      ]
    },
    {
      title: 'Support',
      items: [
<<<<<<< HEAD
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Request Quote', href: '/request-quote', icon: FileText },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Privacy', href: '/privacy', icon: Shield },
        { name: 'Terms', href: '/terms', icon: FileText },
=======
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe }
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
      ]
    }
  ];

  return (
<<<<<<< HEAD
    <aside className={cn("w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4", className)}>
      <div className="mb-6">
        <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
          ZION
        </span>
      </div>
      
      <nav className="space-y-6">
        {navigationItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || 
                               (item.href !== '/' && location.pathname.startsWith(item.href));
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-zion-purple/20 text-zion-cyan"
                          : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                      )}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
=======
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] z-50 overflow-hidden"
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 futuristic-bg opacity-80"></div>
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            
            {/* Neural Network Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-line" style={{ top: '20%', width: '60%', left: '20%', animationDelay: '0s' }}></div>
              <div className="neural-line" style={{ top: '40%', width: '40%', left: '10%', animationDelay: '1s' }}></div>
              <div className="neural-line" style={{ top: '60%', width: '70%', left: '15%', animationDelay: '2s' }}></div>
              <div className="neural-line" style={{ top: '80%', width: '50%', left: '25%', animationDelay: '3s' }}></div>
            </div>

            {/* Floating Quantum Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="quantum-particle" style={{ top: '15%', left: '80%', animationDelay: '0s' }}></div>
              <div className="quantum-particle" style={{ top: '35%', left: '85%', animationDelay: '1s' }}></div>
              <div className="quantum-particle" style={{ top: '55%', left: '90%', animationDelay: '2s' }}></div>
              <div className="quantum-particle" style={{ top: '75%', left: '88%', animationDelay: '3s' }}></div>
            </div>

            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center animate-quantum-float">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold neon-text">Zion Tech</h2>
                    <p className="text-sm text-zion-slate-light">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-zion-slate-light group-hover:neon-text transition-colors" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                              isActive
                                ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${
                              isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                            }`} />
                            <span className="flex-1">{item.name}</span>
                            {isActive && (
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform">
                      Get Free Quote
                    </button>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-zion-cyan/30 p-6 space-y-4">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Contact Info</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-sm text-zion-slate-light hover:neon-text transition-colors group"
                        >
                          <Icon className="w-4 h-4 text-zion-cyan group-hover:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4 text-zion-slate-light group-hover:neon-text transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2024 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
>>>>>>> c29bead6b13f8ea7191a916e452a8526b40ccd76
  );
}