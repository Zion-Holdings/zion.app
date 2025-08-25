import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology Services",
      links: [
        { label: "AI Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "AI Business Intelligence", path: "/ai-business-intelligence" },
        { label: "AI Content Generation", path: "/ai-content-generator" },
        { label: "AI Marketing Automation", path: "/ai-content-marketing-automation" },
        { label: "AI Code Review", path: "/ai-code-review" },
        { label: "AI Agents", path: "/ai-agents" },
        { label: "AI Analytics Copilot", path: "/ai-analytics-copilot" }
      ]
    },
    {
      title: "Infrastructure & Security",
      links: [
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Cloud & DevOps", path: "/cloud-devops" },
        { label: "AI-Powered Security", path: "/ai-powered-enterprise-security" },
        { label: "Autonomous DevOps", path: "/autonomous-devops-platform" },
        { label: "Enterprise IT", path: "/enterprise-it" },
        { label: "Quantum Cloud Infrastructure", path: "/quantum-cloud-infrastructure" },
        { label: "AI Autonomous Security", path: "/ai-autonomous-security" }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { label: "Healthcare AI", path: "/ai-autonomous-healthcare-physician" },
        { label: "Manufacturing AI", path: "/ai-autonomous-manufacturing" },
        { label: "Financial Services", path: "/ai-autonomous-business-operations" },
        { label: "Retail Solutions", path: "/ai-market-research" },
        { label: "Government Tech", path: "/ai-autonomous-ecosystem" },
        { label: "Education AI", path: "/ai-autonomous-education-professor" },
        { label: "Legal AI", path: "/ai-autonomous-legal-counsel" },
        { label: "Logistics AI", path: "/ai-autonomous-logistics" }
      ]
    },
    {
      title: "Company & Resources",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Documentation", path: "/docs" },
        { label: "Blog", path: "/blog" },
        { label: "News", path: "/news" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Advanced AI Solutions",
      links: [
        { label: "AI Autonomous Research", path: "/ai-autonomous-research" },
        { label: "AI Autonomous Robotics", path: "/ai-autonomous-robotics" },
        { label: "AI Autonomous Vehicles", path: "/ai-autonomous-vehicle" },
        { label: "AI Brain Interface", path: "/ai-brain-interface" },
        { label: "AI Consciousness Evolution", path: "/ai-consciousness-evolution" },
        { label: "AI Climate Prediction", path: "/ai-climate-prediction" },
        { label: "AI Biomedical Research", path: "/ai-biomedical-research" },
        { label: "AI Blockchain Analytics", path: "/ai-blockchain-analytics" }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'Facebook', url: 'https://www.facebook.com/ziontechgroup', icon: '📘' },
    { name: 'Instagram', url: 'https://www.instagram.com/ziontechgroup', icon: '📷' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ziontechgroup', icon: '📺' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: '💻' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const quickLinks = [
    { label: "Get Started", path: "/contact" },
    { label: "Request Quote", path: "/contact" },
    { label: "Support", path: "/docs" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Cookie Policy", path: "/cookies" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50">
                    Z
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">The Tech & AI Marketplace</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming businesses through cutting-edge AI, quantum technology, and innovative solutions. 
                  We help organizations achieve digital transformation and competitive advantage.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <span className="text-cyan-400">📞</span>
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors duration-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <span className="text-cyan-400">✉️</span>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">📍</span>
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-200 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links & Social */}
        <div className="py-8 border-t border-cyan-500/30">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:from-cyan-400/30 hover:to-blue-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for innovation</span>
              <span>•</span>
              <span>Powered by AI & Quantum Tech</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping animate-energy-pulse"></div>
      <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse animate-energy-pulse"></div>
      <div className="absolute bottom-40 left-40 w-1 h-1 bg-purple-400 rounded-full animate-bounce animate-energy-pulse"></div>
    </footer>
  );
}