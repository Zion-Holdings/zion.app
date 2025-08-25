import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
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
              <div className="space-y-4">
                <div className="group p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      ✉️
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      📍
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <span className="text-white font-medium">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-400 neon-text">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 flex items-center space-x-3"
                    aria-label={social.name}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-white group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mb-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with Tech Trends</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Get the latest insights on AI, emerging technologies, and industry innovations delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
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