import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Services", path: "/comprehensive-services?category=AI Services" },
        { label: "Micro SAAS", path: "/comprehensive-services?category=Micro SAAS" },
        { label: "IT Services", path: "/comprehensive-services?category=IT Services" },
        { label: "Blockchain & Web3", path: "/comprehensive-services?category=Blockchain & Web3" },
        { label: "IoT & Edge Computing", path: "/comprehensive-services?category=IoT & Edge Computing" },
        { label: "Cybersecurity", path: "/comprehensive-services?category=Cybersecurity Services" },
        { label: "Data Science", path: "/comprehensive-services?category=Data Science & Analytics" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/" },
        { label: "Services Overview", path: "/services" },
        { label: "Service Comparison", path: "/services-comparison" },
        { label: "Onsite IT Services", path: "/it-onsite-services" },
        { label: "Contact", path: "/" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Technology Blog", path: "/" },
        { label: "Case Studies", path: "/" },
        { label: "White Papers", path: "/" },
        { label: "API Documentation", path: "/" },
        { label: "Support Center", path: "/" }
      ]
    },
    {
      title: "Industries",
      links: [
        { label: "Healthcare", path: "/" },
        { label: "Finance", path: "/" },
        { label: "Manufacturing", path: "/" },
        { label: "Retail", path: "/" },
        { label: "Education", path: "/" },
        { label: "Government", path: "/" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-bg opacity-20"></div>

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

      {/* Quantum Field Effect */}
      <div className="absolute inset-0 quantum-field opacity-10"></div>

      {/* Enhanced Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 neon-button p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-20"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50 animate-quantum-float">
                  Z
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50"></div>
                
                {/* Holographic Ring Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-cyan-400/30 animate-neon-border"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold holographic-text">
                  Zion Tech Group
                </h3>
                <p className="text-gray-400 text-sm">The Tech & AI Marketplace</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, Micro SAAS, and IT solutions. 
              We transform ideas into innovative digital solutions that drive growth and efficiency.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300 cyber-card px-3 py-2 border-cyan-500/30">
                <Mail className="w-4 h-4 neon-text" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 cyber-card px-3 py-2 border-cyan-500/30">
                <Phone className="w-4 h-4 neon-text" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 cyber-card px-3 py-2 border-cyan-500/30">
                <MapPin className="w-4 h-4 neon-text" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/ziontechgroup" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/zion-tech-group" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/ziontechgroup" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/ziontechgroup" },
                { icon: Github, label: "GitHub", href: "https://github.com/ziontechgroup" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card w-10 h-10 border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all duration-300 group animate-quantum-float"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h4 className="text-lg font-semibold neon-text mb-4 border-b border-cyan-500/30 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block cyber-card px-2 py-1 rounded border-transparent hover:border-cyan-500/30"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Contact & CTA Section */}
        <div className="border-t border-cyan-500/30 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Enhanced Contact Info */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold neon-text">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center space-x-2 cyber-card px-3 py-2 border-cyan-500/30">
                  <span className="neon-text">📱</span>
                  <span>+1 302 464 0950</span>
                </p>
                <p className="flex items-center space-x-2 cyber-card px-3 py-2 border-cyan-500/30">
                  <span className="neon-text">✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </p>
                <p className="flex items-center space-x-2 cyber-card px-3 py-2 border-cyan-500/30">
                  <span className="neon-text">📍</span>
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </p>
              </div>
            </div>

            {/* Enhanced Newsletter */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold neon-text">Stay Updated</h4>
              <p className="text-sm text-gray-300">Get the latest tech insights and service updates</p>
              <FooterNewsletter />
            </div>

            {/* Enhanced CTA */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-semibold neon-text mb-3">Ready to Get Started?</h4>
              <p className="text-sm text-gray-300 mb-4">Transform your business with our innovative solutions</p>
              <button className="neon-button px-6 py-3 text-white rounded-lg font-medium transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/" className="hover:text-cyan-400 transition-colors duration-200 cyber-card px-2 py-1 rounded border-transparent hover:border-cyan-500/30">Privacy Policy</Link>
              <Link to="/" className="hover:text-cyan-400 transition-colors duration-200 cyber-card px-2 py-1 rounded border-transparent hover:border-cyan-500/30">Terms of Service</Link>
              <Link to="/" className="hover:text-cyan-400 transition-colors duration-200 cyber-card px-2 py-1 rounded border-transparent hover:border-cyan-500/30">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
      
      {/* New Futuristic Elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-300 rounded-full animate-cyber-spin"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-neon-breathe"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-quantum-shift"></div>
    </footer>
  );
}