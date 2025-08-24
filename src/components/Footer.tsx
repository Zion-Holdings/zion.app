import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap, Brain, Shield, Cloud, Code, Database, Monitor, Link as LinkIcon, PenTool, Globe, Smartphone, CheckCircle, Award, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Footer() {
  const serviceCategories = [
    { name: 'AI & Chatbots', icon: Brain, link: '/micro-saas-services?category=ai-chatbots' },
    { name: 'Cybersecurity', icon: Shield, link: '/micro-saas-services?category=cybersecurity' },
    { name: 'Cloud Management', icon: Cloud, link: '/micro-saas-services?category=cloud-management' },
    { name: 'DevOps & Automation', icon: Code, link: '/micro-saas-services?category=devops-automation' },
    { name: 'Data & Analytics', icon: Database, link: '/micro-saas-services?category=data-analytics' },
    { name: 'IoT & Edge Computing', icon: Monitor, link: '/micro-saas-services?category=iot-edge' },
    { name: 'Blockchain & Web3', icon: LinkIcon, link: '/micro-saas-services?category=blockchain-web3' },
    { name: 'Quantum Computing', icon: Zap, link: '/micro-saas-services?category=quantum-computing' },
    { name: 'Content Creation', icon: PenTool, link: '/micro-saas-services?category=content-creation' },
    { name: 'API Management', icon: Globe, link: '/micro-saas-services?category=api-management' }
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Marketplace', link: '/marketplace' },
    { name: 'Talent', link: '/talent' },
    { name: 'Equipment', link: '/equipment' },
    { name: 'Community', link: '/community' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' }
  ];

  const companyLinks = [
    { name: 'About Zion Tech Group', link: '/about' },
    { name: 'Our Mission', link: '/about#mission' },
    { name: 'Team', link: '/about#team' },
    { name: 'Careers', link: '/careers' },
    { name: 'Partners', link: '/partners' },
    { name: 'Press Kit', link: '/press' }
  ];

  const supportLinks = [
    { name: 'Help Center', link: '/help' },
    { name: 'Documentation', link: '/docs' },
    { name: 'API Reference', link: '/api' },
    { name: 'Status Page', link: '/status' },
    { name: 'Contact Support', link: '/contact' },
    { name: 'Feedback', link: '/feedback' }
  ];

  const achievements = [
    { icon: Award, text: "500+ Happy Customers", color: "text-yellow-400" },
    { icon: CheckCircle, text: "99.9% Uptime", color: "text-green-400" },
    { icon: Clock, text: "24/7 Support", color: "text-blue-400" },
    { icon: TrendingUp, text: "10+ Services", color: "text-purple-400" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue border-t border-zion-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Your comprehensive marketplace for all things technology and AI. 
              Discover top AI and tech talent, services, and equipment in one place.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 text-zion-slate-light group hover:text-white transition-colors">
                  <achievement.icon className={`w-4 h-4 ${achievement.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm">{achievement.text}</span>
                </div>
              ))}
            </div>
            
            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <MapPin className="w-4 h-4 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-zion-cyan" />
              <span>Our Services</span>
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {serviceCategories.map((service) => (
                <Link
                  key={service.name}
                  to={service.link}
                  className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                >
                  <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform">{service.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/micro-saas-services">
                <Button variant="outline" size="sm" className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/50 group">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block transition-transform group"
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company & Support</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-zion-cyan font-medium mb-2 text-sm">Company</h4>
                <ul className="space-y-1">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.link} 
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-xs group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-zion-cyan font-medium mb-2 text-sm">Support</h4>
                <ul className="space-y-1">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.link} 
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-xs group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light/30">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold mb-2 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-4">
              Get the latest updates on new services, features, and tech insights from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
              <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-blue-light/20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
