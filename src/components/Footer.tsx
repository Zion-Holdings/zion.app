import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "AI-Powered IT Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Advanced Research Automation", path: "/advanced-research-automation" },
        { label: "AI Solutions", path: "/ai-solutions" },
        { label: "Machine Learning", path: "/services#ai-ml" }
      ]
    },
    {
      title: "Business Solutions",
      links: [
        { label: "Autonomous Business Operations", path: "/autonomous-business-operations-platform" },
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" }
      ]
    },
    {
      title: "Security & Infrastructure",
      links: [
        { label: "Advanced Cybersecurity Suite", path: "/advanced-cybersecurity-suite" },
        { label: "Cybersecurity Services", path: "/services/cybersecurity" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Cloud & DevOps", path: "/services/cloud-devops" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" }
      ]
    },
    {
      title: "Specialized Services",
      links: [
        { label: "Affiliate Attribution Hub", path: "/affiliate-attribution-hub" },
        { label: "Agentic RAG Helpdesk", path: "/agentic-rag-helpdesk" },
        { label: "Accessibility Auditor", path: "/accessibility-auditor" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "Industry Solutions", path: "/services/industry-solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support", path: "/support" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Discord', 
      url: 'https://discord.gg/ziontechgroup', 
      icon: '🎮',
      fallback: 'https://discord.com'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">The Tech & AI Marketplace</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions, cybersecurity, and digital transformation services. 
                We help organizations thrive in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick('phone')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">📞</span>
                  {contactInfo.phone}
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">✉️</span>
                  {contactInfo.email}
                </button>
                <div className="flex items-start text-gray-300">
                  <span className="mr-3 mt-1">📍</span>
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
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

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-md transition-all duration-200"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}