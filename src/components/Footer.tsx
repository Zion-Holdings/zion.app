import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Autonomous Systems",
      links: [
        { label: "AI Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Services", path: "/ai-services" },
        { label: "AI Solutions", path: "/ai-solutions" },
        { label: "AI Matcher", path: "/match" },
        { label: "Emerging Technology", path: "/emerging-tech" }
      ]
    },
    {
      title: "Quantum & Advanced Tech",
      links: [
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "Innovative New Services", path: "/services/innovative-new-services" },
        { label: "Space Technology", path: "/services/innovative-new-services" },
        { label: "AI Consciousness Evolution", path: "/services/innovative-new-services" }
      ]
    },
    {
      title: "Infrastructure & Security",
      links: [
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Specialized IT Infrastructure", path: "/services/specialized-it-infrastructure" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Cloud & DevOps", path: "/cloud-devops" }
      ]
    },
    {
      title: "Solutions & Services",
      links: [
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "News", path: "/news" },
        { label: "Webinars", path: "/webinars" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Help Center", path: "/help-center" }
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400 border-b border-cyan-500/30 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
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
        <div className="border-t border-gray-700/50 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">📞</span>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">✉️</span>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-400">📍</span>
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">Stay Updated</h3>
              <p className="text-sm text-gray-300">
                Get the latest insights and updates from Zion Tech Group
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                Z
              </div>
              <span className="text-gray-300 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}