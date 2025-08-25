import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', path: '/services#ai-ml' },
        { name: 'Cybersecurity', path: '/services#cybersecurity' },
        { name: 'Cloud & Infrastructure', path: '/services#cloud' },
        { name: 'Blockchain Solutions', path: '/services#blockchain' },
        { name: 'Quantum Computing', path: '/services#quantum' },
        { name: 'IoT & Edge Computing', path: '/services#iot' },
        { name: 'IT Consulting', path: '/services#consulting' },
        { name: 'Managed Services', path: '/services#managed' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Business Intelligence', path: '/solutions#bi' },
        { name: 'Marketing Automation', path: '/solutions#marketing' },
        { name: 'HR & Recruitment', path: '/solutions#hr' },
        { name: 'Legal Tech', path: '/solutions#legal' },
        { name: 'Supply Chain', path: '/solutions#supply-chain' },
        { name: 'Smart Buildings', path: '/solutions#smart-buildings' },
        { name: 'Data Protection', path: '/solutions#data-protection' },
        { name: 'Network Security', path: '/solutions#network-security' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Updates', path: '/news' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
        { name: 'Developer Portal', path: '/developer' },
        { name: 'Knowledge Base', path: '/knowledge-base' },
        { name: 'Blog', path: '/blog' },
        { name: 'Webinars', path: '/webinars' },
        { name: 'Training', path: '/training' },
        { name: 'Support Center', path: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/ziontechgroup' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/ziontechgroup' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@ziontechgroup' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ziontechgroup' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50">
                  Z
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">The Tech & AI Marketplace</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through cutting-edge AI services, innovative micro SAAS solutions, 
                and comprehensive IT services. We help organizations stay ahead in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-cyan-400">📱</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-cyan-400">✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
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
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group"
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
                <h4 className="text-lg font-semibold text-white mb-4 border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for insights on AI, emerging technologies, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
    </footer>
  );
}