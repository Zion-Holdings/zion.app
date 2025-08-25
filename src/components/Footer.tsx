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
      title: "AI & Micro SAAS",
      links: [
        { label: "AI Business Intelligence", path: "/services" },
        { label: "AI Customer Service", path: "/services" },
        { label: "AI Sales Intelligence", path: "/services" },
        { label: "AI Content Creation", path: "/services" },
        { label: "AI Financial Analysis", path: "/services" },
        { label: "AI Healthcare Analytics", path: "/services" },
        { label: "AI Supply Chain", path: "/services" }
      ]
    },
    {
      title: "Emerging Tech",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "All Services", path: "/comprehensive-services" },
        { label: "Pricing", path: "/pricing" },
        { label: "Contact", path: "/contact" },
        { label: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Technology Blog", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "White Papers", path: "/white-papers" },
        { label: "API Documentation", path: "/api-docs" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-20"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50">
                Z
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-gray-400 text-sm">The Tech & AI Marketplace</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, Micro SAAS, and IT solutions. 
              We transform ideas into innovative digital solutions that drive growth and efficiency.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
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
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & CTA Section */}
        <div className="border-t border-cyan-500/30 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-cyan-400">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center space-x-2">
                  <span className="text-cyan-400">📱</span>
                  <span>+1 302 464 0950</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-cyan-400">✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-cyan-400">📍</span>
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-cyan-400">Stay Updated</h4>
              <p className="text-sm text-gray-300">Get the latest tech insights and service updates</p>
              <FooterNewsletter />
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Ready to Get Started?</h4>
              <p className="text-sm text-gray-300 mb-4">Transform your business with our innovative solutions</p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/" className="hover:text-cyan-400 transition-colors duration-200">Terms of Service</Link>
              <Link to="/" className="hover:text-cyan-400 transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
    </footer>
  );
}