import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight,
  Sparkles,
  Brain,
  Atom,
  Shield,
  DollarSign,
  FileText,
  BarChart3,
  MessageSquare,
  Truck,
  Users,
  Database,
  Cpu,
  Cloud,
  Play,
  Search,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Zap,
  Check,
  Star,
  Clock,
  Target,
  Building,
  Award,
  ChartBar,
  Lock,
  Smartphone,
  Palette,
  Calendar,
  CreditCard,
  Settings,
  Code,
  BookOpen,
  Activity,
  Bot,
  ChevronRight as ChevronRightIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ExternalLink
} from 'lucide-react';
import Button from '../ui/Button';

export default function NeoFuturisticFooter() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions',
      icon: <Atom className="w-5 h-5" />,
      services: [
        { name: 'Quantum AI Platform', href: '/services?category=Quantum%20Computing' },
        { name: 'Quantum Optimization', href: '/services?category=Quantum%20Computing' },
        { name: 'Quantum Simulation', href: '/services?category=Quantum%20Computing' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI and ML platforms',
      icon: <Brain className="w-5 h-5" />,
      services: [
        { name: 'AI Content Creation', href: '/services?category=AI%20%26%20Machine%20Learning' },
        { name: 'ML Model Training', href: '/services?category=AI%20%26%20Machine%20Learning' },
        { name: 'AI Analytics', href: '/services?category=Analytics%20%26%20Business%20Intelligence' }
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Next-generation security solutions',
      icon: <Shield className="w-5 h-5" />,
      services: [
        { name: 'Quantum Security', href: '/services?category=Cybersecurity' },
        { name: 'AI Threat Detection', href: '/services?category=Cybersecurity' },
        { name: 'Zero Trust Security', href: '/services?category=Cybersecurity' }
      ]
    },
    {
      name: 'Biomedical & Healthcare',
      description: 'AI-powered healthcare solutions',
      icon: <Brain className="w-5 h-5" />,
      services: [
        { name: 'Drug Discovery AI', href: '/services?category=Biotechnology%20%26%20Healthcare' },
        { name: 'Genomic Analysis', href: '/services?category=Biotechnology%20%26%20Healthcare' },
        { name: 'Clinical Trial AI', href: '/services?category=Biotechnology%20%26%20Healthcare' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Support Center', href: '/support' },
    { name: 'Resources', href: '/resources' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://ziontechgroup.com', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://ziontechgroup.com', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://ziontechgroup.com', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://ziontechgroup.com', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://ziontechgroup.com', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://ziontechgroup.com', icon: <Github className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '500+', label: 'Revolutionary Services' },
    { number: '21', label: 'Day Free Trials' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'AI-Powered Support' },
    { number: '50+', label: 'Countries Served' },
    { number: '1M+', label: 'Happy Users' }
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="text-gray-400">Revolutionary Technology</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading the global micro SaaS revolution with patent-pending quantum AI and autonomous systems. 
              Transform your business with cutting-edge technology solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.website}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button href="/services" variant="quantum" size="lg" className="group">
              Explore 500+ Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Service Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Popular Services</h3>
            <div className="space-y-4">
              {serviceCategories.slice(0, 2).map((category, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="ml-8 space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              {companyLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <h3 className="text-white font-semibold text-lg mb-6 mt-8">Resources</h3>
            <div className="space-y-3">
              {resourceLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-700/50 pt-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
            <p className="text-gray-400">Transforming businesses worldwide with revolutionary technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-4 border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. Revolutionary technology solutions.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Revolutionary Technology
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and emerging technologies. 
              Join thousands of forward-thinking professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Button variant="quantum" size="lg">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-black/50 border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact our expert team today for a personalized consultation and demo of our revolutionary micro SaaS services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/services" variant="quantum" size="lg">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get Started Today
            </Button>
          </div>
          
          <div className="mt-6 text-gray-400 text-sm">
            <span className="text-cyan-400 font-semibold">500+</span> Revolutionary Services • 
            <span className="text-green-400 font-semibold"> 21-Day</span> Free Trials • 
            <span className="text-purple-400 font-semibold"> 24/7</span> Support
          </div>
        </div>
      </div>
    </footer>
  );
}