import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      links: [
        { label: "AI Business Manager", path: "/ai-autonomous-business-manager" },
        { label: "AI Business Platform", path: "/ai-autonomous-business-platform" },
        { label: "AI Code Review", path: "/ai-autonomous-code-review" },
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Industry Solutions", path: "/services/industry-solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/services/ai-autonomous-systems" },
        { label: "Healthcare Solutions", path: "/services/industry-solutions" },
        { label: "Financial Solutions", path: "/services/industry-solutions" },
        { label: "Manufacturing Solutions", path: "/services/industry-solutions" },
        { label: "Retail Solutions", path: "/services/industry-solutions" },
        { label: "Government Solutions", path: "/services/industry-solutions" },
        { label: "Business Intelligence", path: "/ai-autonomous-business-manager" },
        { label: "Marketing Automation", path: "/ai-autonomous-business-platform" },
        { label: "HR & Recruitment", path: "/ai-autonomous-business-platform" },
        { label: "Legal Tech", path: "/ai-autonomous-business-platform" },
        { label: "Supply Chain", path: "/ai-autonomous-business-platform" },
        { label: "Smart Buildings", path: "/services/industry-solutions" },
        { label: "Data Protection", path: "/services/cybersecurity" },
        { label: "Network Security", path: "/services/cybersecurity" }
      ]
    },
    {
      title: "Emerging Tech",
      links: [
        { label: "Quantum Computing", path: "/services/quantum-technology" },
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
        { label: "Leadership", path: "/team" },
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
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
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions, quantum technology, and innovative digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-cyan-400">📞</span>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-cyan-400">✉️</span>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-cyan-400">📍</span>
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
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
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}