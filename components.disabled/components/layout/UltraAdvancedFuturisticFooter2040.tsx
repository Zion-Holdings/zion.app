import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  ArrowRight,
  Star,
  Sparkles,
  Infinity,
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
  Eye,
  Car,
  TestTube,
  Globe as PlanetIcon,
  Lock,
  Palette,
  Heart,
  Truck,
  Cpu,
  Users,
  Building,
  Target,
  FileText,
  Video,
  Handshake,
  BookOpen,
  Code,
  BarChart3,
  Lightbulb,
  Settings
} from 'lucide-react';

const UltraAdvancedFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Revolutionary Services",
      links: [
        { name: "AI & Machine Learning", href: "/services?category=ai-ml", icon: Brain },
        { name: "Quantum Computing", href: "/services?category=quantum", icon: Atom },
        { name: "Space Technology", href: "/services?category=space-tech", icon: Rocket },
        { name: "Cybersecurity", href: "/services?category=cybersecurity", icon: Shield },
        { name: "Emerging Tech", href: "/services?category=emerging-tech", icon: Lightbulb },
        { name: "Holographic & VR", href: "/services?category=holographic", icon: Eye },
        { name: "Autonomous Systems", href: "/services?category=autonomous", icon: Car },
        { name: "Synthetic Biology", href: "/services?category=synthetic-biology", icon: TestTube }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { name: "Healthcare", href: "/solutions/healthcare", icon: Heart },
        { name: "Finance", href: "/solutions/finance", icon: BarChart3 },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Settings },
        { name: "Logistics", href: "/solutions/logistics", icon: Truck },
        { name: "Education", href: "/solutions/education", icon: BookOpen },
        { name: "Government", href: "/solutions/government", icon: Building },
        { name: "Retail", href: "/solutions/retail", icon: Target },
        { name: "Energy", href: "/solutions/energy", icon: Zap }
      ]
    },
    {
      title: "Resources & Support",
      links: [
        { name: "Documentation", href: "/docs", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Training", href: "/training", icon: Users },
        { name: "Support", href: "/support", icon: ShieldCheck },
        { name: "Status", href: "/status", icon: TrendingUp }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", icon: Building },
        { name: "Leadership", href: "/leadership", icon: Users },
        { name: "Careers", href: "/careers", icon: Target },
        { name: "News", href: "/news", icon: FileText },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "Investors", href: "/investors", icon: TrendingUp },
        { name: "Contact", href: "/contact", icon: Mail },
        { name: "Locations", href: "/locations", icon: MapPin }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:text-blue-400" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github, color: "hover:text-gray-400" },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube, color: "hover:text-red-400" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown, DE 19709"
  };

  const certifications = [
    "SOC 2 Type II Certified",
    "ISO 27001 Compliant",
    "GDPR Compliant",
    "HIPAA Compliant",
    "NIST Framework",
    "Zero Trust Architecture"
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-400/20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-400 font-medium">Innovation 2040</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Pioneering the future of technology with revolutionary AI, quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-gray-400 ${social.color} transition-colors duration-200 rounded-lg hover:bg-white/5`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Middle Section */}
        <div className="border-t border-gray-700/50 pt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>Certifications & Compliance</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Company Stats</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Services</span>
                  <span className="text-cyan-400 font-bold">100+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Customers</span>
                  <span className="text-purple-400 font-bold">10,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Countries</span>
                  <span className="text-green-400 font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Uptime</span>
                  <span className="text-yellow-400 font-bold">99.99%</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest insights on AI, quantum computing, and emerging technologies.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Infrastructure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: -1,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2040;