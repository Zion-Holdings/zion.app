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
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "Marketplace", path: "/marketplace" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Leadership", path: "/leadership" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Training", path: "/training" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 futuristic-bg opacity-60">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neural-line" style={{ top: '15%', width: '25%', left: '10%', animationDelay: '0s' }}></div>
        <div className="neural-line" style={{ top: '35%', width: '35%', left: '25%', animationDelay: '1s' }}></div>
        <div className="neural-line" style={{ top: '55%', width: '30%', left: '15%', animationDelay: '2s' }}></div>
        <div className="neural-line" style={{ top: '75%', width: '40%', left: '20%', animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 p-3 quantum-button rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-20"
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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 animate-pulse"></div>
                {/* Quantum particles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold neon-text">
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
              <div className="flex items-center gap-3 text-gray-300 group">
                <Mail className="w-4 h-4 neon-text group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-cyan-400 transition-colors duration-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group">
                <Phone className="w-4 h-4 neon-text group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-cyan-400 transition-colors duration-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group">
                <MapPin className="w-4 h-4 neon-text group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-cyan-400 transition-colors duration-300">364 E Main St STE 1008, Middletown, DE 19709</span>
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
                  className="w-10 h-10 futuristic-card border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group hover:scale-110"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold neon-text mb-4 border-b border-cyan-500/30 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block group"
                    >
                      <span className="group-hover:neon-text transition-all duration-300">{link.label}</span>
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
                <p className="flex items-center space-x-2 group">
                  <span className="neon-text group-hover:scale-110 transition-transform duration-300">📱</span>
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">+1 302 464 0950</span>
                </p>
                <p className="flex items-center space-x-2 group">
                  <span className="neon-text group-hover:scale-110 transition-transform duration-300">✉️</span>
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">kleber@ziontechgroup.com</span>
                </p>
                <p className="flex items-center space-x-2 group">
                  <span className="neon-text group-hover:scale-110 transition-transform duration-300">📍</span>
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
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
              <button className="quantum-button px-6 py-3 font-medium transform hover:scale-105">
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
              <Link to="/privacy" className="hover:neon-text transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="hover:neon-text transition-colors duration-200">Terms of Service</Link>
              <Link to="/cookies" className="hover:neon-text transition-colors duration-200">Cookie Policy</Link>
              <Link to="/accessibility" className="hover:neon-text transition-colors duration-200">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping animate-energy-pulse"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse animate-energy-pulse"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce animate-energy-pulse"></div>
      
      {/* Additional Quantum Particles */}
      <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-ping animate-energy-pulse animation-delay-1000"></div>
      <div className="absolute bottom-40 right-40 w-1 h-1 bg-blue-400 rounded-full animate-ping animate-energy-pulse animation-delay-2000"></div>
      <div className="absolute top-1/3 left-40 w-1 h-1 bg-purple-400 rounded-full animate-ping animate-energy-pulse animation-delay-3000"></div>
    </footer>
  );
}