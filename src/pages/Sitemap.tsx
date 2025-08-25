import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  const sitemapStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Our Mission', path: '/mission', description: 'Our vision and mission' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Our partnerships' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Testimonials', path: '/testimonials', description: 'Client success stories' },
        { name: 'Case Studies', path: '/case-studies', description: 'Detailed case studies' },
        { name: 'Events', path: '/events', description: 'Upcoming events and webinars' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry insights' },
        { name: 'Help Center', path: '/help-center', description: 'Support and documentation' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      title: 'AI & Technology Services',
      links: [
        { name: 'AI Services Overview', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Autonomous AI systems' },
        { name: 'AI Business Solutions', path: '/ai-business-solutions', description: 'AI for business transformation' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', description: 'Marketing automation with AI' },
        { name: 'AI HR & Recruitment', path: '/ai-hr-recruitment', description: 'AI-powered HR solutions' },
        { name: 'AI Legal Tech', path: '/ai-legal-tech', description: 'Legal technology solutions' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', description: 'Business intelligence with AI' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'IT asset management with AI' },
        { name: 'Advanced AI Automation', path: '/advanced-ai-automation-services', description: 'Advanced automation services' },
        { name: 'Research Automation', path: '/advanced-research-automation', description: 'Automated research processes' },
        { name: 'Agentic RAG', path: '/agentic-rag', description: 'Retrieval-augmented generation' },
        { name: 'Agentic RAG Helpdesk', path: '/agentic-rag-helpdesk', description: 'AI-powered helpdesk' },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', description: 'Affiliate marketing tools' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      links: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', description: 'Enterprise security suite' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Compliance automation' },
        { name: 'Security Assessment', path: '/security-assessment', description: 'Security evaluation services' },
        { name: 'Compliance & Audit', path: '/compliance-audit', description: 'Compliance services' },
        { name: 'Data Protection', path: '/data-protection', description: 'Data security solutions' },
        { name: 'Network Security', path: '/network-security', description: 'Network protection' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      links: [
        { name: 'Cloud & DevOps', path: '/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'IT infrastructure solutions' },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', description: 'Specialized infrastructure' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration services' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network solutions' },
        { name: 'Managed IT Services', path: '/managed-it-services', description: 'Managed IT support' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: '5G enterprise solutions' },
        { name: '5G Network Optimization', path: '/5g-network-optimization', description: '5G network optimization' },
        { name: '5G Private Network Solutions', path: '/5g-private-network-solutions', description: 'Private 5G networks' }
      ]
    },
    {
      title: 'Quantum Technology',
      links: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', description: 'Quantum neural networks' },
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing services' },
        { name: 'Quantum-Safe Security', path: '/quantum-safe-security', description: 'Post-quantum cryptography' }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Industry Solutions', path: '/services/industry-solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Financial technology' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Manufacturing technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Digital transformation services' },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', description: 'Business automation' }
      ]
    },
    {
      title: 'Micro SAAS & Innovation',
      links: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', description: 'Micro software solutions' },
        { name: 'Innovative New Services', path: '/services/innovative-new-services', description: 'Cutting-edge services' },
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase', description: 'Service showcase' },
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Emerging tech solutions' },
        { name: 'Blockchain Solutions', path: '/blockchain-solutions', description: 'Blockchain technology' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'IoT solutions' },
        { name: 'Space Technology', path: '/space-technology', description: 'Space tech solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology' }
      ]
    },
    {
      title: 'Talent & Resources',
      links: [
        { name: 'Talent Directory', path: '/talent', description: 'Find top talent' },
        { name: 'AI Matcher', path: '/match', description: 'AI-powered matching' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' },
        { name: 'Developer Portal', path: '/developer-portal', description: 'Developer resources' },
        { name: 'Community', path: '/community', description: 'Community platform' },
        { name: 'Leadership', path: '/leadership', description: 'Leadership insights' },
        { name: 'Analytics', path: '/analytics', description: 'Analytics dashboard' }
      ]
    },
    {
      title: 'Support & Documentation',
      links: [
        { name: 'Help Center', path: '/help-center', description: 'Support center' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Support', path: '/support', description: 'Technical support' },
        { name: 'Status Page', path: '/status', description: 'Service status' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility information' },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', description: 'Accessibility tools' },
        { name: 'Accessibility Scanner', path: '/accessibility-scanner', description: 'Accessibility scanning' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site structure.
          </p>
        </div>

        {/* Sitemap Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 neon-text">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="group">
                    <Link
                      to={link.path}
                      className="block p-3 rounded-lg bg-gray-700/50 hover:bg-cyan-500/20 border border-transparent hover:border-cyan-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                    >
                      <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Navigation</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Use our quick navigation tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Browse Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/help-center"
                className="px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/20 transition-all duration-300"
              >
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}