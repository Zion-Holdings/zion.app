import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/futuristic.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Services", path: "/ai-solutions", icon: "🤖" },
        { name: "Micro SAAS", path: "/micro-saas", icon: "💻" },
        { name: "IT Services", path: "/it-services", icon: "🖥️" },
        { name: "Cybersecurity", path: "/cybersecurity", icon: "🔒" },
        { name: "Blockchain", path: "/blockchain", icon: "⛓️" },
        { name: "Edge Computing", path: "/edge-computing", icon: "🌐" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Business Intelligence", path: "/solutions/bi", icon: "📊" },
        { name: "DevOps & Automation", path: "/solutions/devops", icon: "⚡" },
        { name: "Data Analytics", path: "/solutions/analytics", icon: "📈" },
        { name: "Cloud Infrastructure", path: "/solutions/cloud", icon: "☁️" },
        { name: "Machine Learning", path: "/solutions/ml", icon: "🧠" },
        { name: "Quantum Computing", path: "/solutions/quantum", icon: "🔮" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about", icon: "ℹ️" },
        { name: "Our Team", path: "/team", icon: "👥" },
        { name: "Careers", path: "/careers", icon: "💼" },
        { name: "News & Blog", path: "/blog", icon: "📰" },
        { name: "Case Studies", path: "/case-studies", icon: "📋" },
        { name: "Partners", path: "/partners", icon: "🤝" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help", icon: "❓" },
        { name: "Documentation", path: "/docs", icon: "📚" },
        { name: "API Reference", path: "/api", icon: "🔌" },
        { name: "Status Page", path: "/status", icon: "📊" },
        { name: "Contact Support", path: "/support", icon: "🆘" },
        { name: "Training", path: "/training", icon: "🎓" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/ziontechgroup", icon: "🐙" },
    { name: "YouTube", url: "https://youtube.com/@ziontechgroup", icon: "📺" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮" }
  ];

  return (
    <footer className="futuristic-footer relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="matrix-rain opacity-10"></div>
      
      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid-bg opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl font-bold neon-text">ZION</div>
                <div className="text-xl font-medium text-cyan-400">TECH GROUP</div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Transforming businesses through cutting-edge AI, innovative micro SAAS solutions, 
                and comprehensive IT services. We're your partner in the digital future.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">📍</span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-white mb-4 neon-text">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="futuristic-card p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 neon-text">
              Stay Updated
            </h3>
            <p className="text-gray-300">
              Get the latest insights on AI, technology trends, and business innovation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="futuristic-input flex-1"
            />
            <button className="futuristic-btn px-6 py-3 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
    </footer>
  );
}