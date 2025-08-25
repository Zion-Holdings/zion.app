import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Innovative Services",
      links: [
        { label: "AI Content Factory Pro", path: "/innovative-services#ai-content-factory" },
        { label: "Quantum-Safe Cyber Shield", path: "/innovative-services#quantum-safe-cyber-shield" },
        { label: "Autonomous Business Ops", path: "/innovative-services#autonomous-business-ops" },
        { label: "Blockchain Supply Chain", path: "/innovative-services#blockchain-supply-chain" },
        { label: "AI Healthcare Diagnostics", path: "/innovative-services#ai-healthcare-diagnostics" },
        { label: "Quantum ML Platform", path: "/innovative-services#quantum-ml-platform" },
        { label: "Edge AI Computing", path: "/innovative-services#edge-ai-computing" },
        { label: "Autonomous Trading", path: "/innovative-services#autonomous-financial-trading" }
      ]
    },
    {
      title: "AI & Micro SAAS",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "Marketplace", path: "/marketplace" },
        { label: "AI & Machine Learning", path: "/services#ai-ml" },
        { label: "Cloud & Infrastructure", path: "/services#cloud" },
        { label: "Blockchain Solutions", path: "/services#blockchain" },
        { label: "IoT & Edge Computing", path: "/services#iot" },
        { label: "IT Consulting", path: "/services#consulting" },
        { label: "Managed Services", path: "/services#managed" }
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
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/solutions#bi" },
        { label: "Marketing Automation", path: "/solutions#marketing" },
        { label: "HR & Recruitment", path: "/solutions#hr" },
        { label: "Legal Tech", path: "/solutions#legal" },
        { label: "Supply Chain", path: "/solutions#supply-chain" },
        { label: "Smart Buildings", path: "/solutions#smart-buildings" },
        { label: "Data Protection", path: "/solutions#data-protection" },
        { label: "Network Security", path: "/solutions#network-security" }
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
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Leadership", path: "/leadership" },
        { label: "All Services", path: "/comprehensive-services" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Our Team", path: "/team" },
        { label: "News & Updates", path: "/news" },
        { label: "Testimonials", path: "/testimonials" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Technology Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "White Papers", path: "/white-papers" },
        { label: "API Documentation", path: "/api-docs" },
        { label: "Webinars", path: "/webinars" },
        { label: "Training", path: "/training" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'Facebook', url: 'https://www.facebook.com/ziontechgroup', icon: '📘' },
    { name: 'Instagram', url: 'https://www.instagram.com/ziontechgroup', icon: '📷' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ziontechgroup', icon: '📺' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 neon-text">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:neon-text"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pt-8 border-t border-gray-700/50">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-400 neon-text">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📞</span>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">✉️</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 mt-1">📍</span>
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-400 neon-text">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 transition-transform duration-300 hover:neon-text"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mb-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Tech Trends</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, emerging technologies, and industry innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Transforming businesses through innovative technology solutions
                </p>
              </div>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}