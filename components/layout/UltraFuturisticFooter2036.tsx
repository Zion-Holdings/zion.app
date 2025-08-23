import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Star,
  Brain,
  Atom,
  Shield,
  Target,
  Rocket,
  Github,
  MessageCircle,
  Clock,
  Award,
  Users,
  Building,
  FileText,
  BookOpen,
  LifeBuoy,
  TrendingUp,
  Lightbulb,
  Heart,
  DollarSign,
  Truck,
  Cloud,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Innovation Showcase',
    description: 'Cutting-edge future technology services',
    icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: '2037-2038 Services', href: '/innovative-2037-2038-showcase', featured: true },
      { name: 'Quantum AI Consciousness', href: '/quantum-ai-cognitive', featured: true },
      { name: 'Holographic Metaverse AI', href: '/holographic-metaverse-ai-platform', featured: true },
      { name: 'Neural Interface Development', href: '/neural-interface-development-kit' },
      { name: 'Quantum Space Mining', href: '/quantum-space-mining-automation' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Holographic Healthcare AI', href: '/holographic-healthcare-ai' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite' },
      { name: 'Autonomous Logistics AI', href: '/autonomous-logistics-ai' },
      { name: 'Quantum Climate Modeling', href: '/quantum-climate-modeling' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'AI Assistant Platform', href: '/ai-assistant' },
      { name: 'Sales Copilot AI', href: '/sales-copilot' },
      { name: 'Incident Copilot AI', href: '/incident-copilot' },
      { name: 'AI Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'AI HR Analytics', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'LLM Gateway Platform', href: '/llm-gateway' },
      { name: 'MLOps Starter Platform', href: '/mlops-starter' },
      { name: 'AI Business Solutions', href: '/innovative-business-solutions' }
    ]
  },
  {
    title: 'Quantum & Space Technology',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum AI Cognitive Platform', href: '/quantum-ai-cognitive' },
      { name: 'Quantum Secure Communication', href: '/quantum-secure-communication' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Space Technology Solutions', href: '/space-technology' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development-platform' },
      { name: 'Quantum Advanced Services', href: '/quantum-advanced-services' },
      { name: 'Quantum AI Services 2025', href: '/quantum-ai-services-2025' },
      { name: 'Quantum Space Services', href: '/quantum-space-services' },
      { name: 'Quantum Computing Solutions', href: '/quantum-computing' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'IT Services Overview', href: '/it-services' },
      { name: 'Mobile Device Management', href: '/mobile-device-management' },
      { name: 'Multi-Cloud Disaster Recovery', href: '/multi-cloud-disaster-recovery' },
      { name: 'Infrastructure Drift Detection', href: '/infrastructure-drift-detector' },
      { name: 'Managed PostgreSQL HA', href: '/managed-postgres-ha' },
      { name: 'Kubernetes RBAC Auditor', href: '/kubernetes-rbac-auditor' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions for key industries',
    icon: <Target className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions' },
      { name: 'Healthcare Technology', href: '/healthcare-solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
      { name: 'Government Technology', href: '/government-technology-solutions' },
      { name: 'Financial Technology', href: '/fintech-solutions' },
      { name: 'Education Technology', href: '/education-solutions' },
      { name: 'Energy Technology', href: '/energy-solutions' },
      { name: 'Transportation Technology', href: '/transportation-solutions' },
      { name: 'Supply Chain AI', href: '/supply-chain-ai' }
    ]
  },
  {
    title: 'Business Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-orange-400" />,
    links: [
      { name: 'Micro SAAS Platform', href: '/micro-saas' },
      { name: 'Business Intelligence Suite', href: '/ai-business-intelligence' },
      { name: 'Smart CRM Intelligence', href: '/smart-crm-intelligence-suite' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite' },
      { name: 'Incident Response Retainer', href: '/incident-response-retainer' },
      { name: 'Status Pages & SLO Monitoring', href: '/status-pages-slo' },
      { name: 'Uptime SLO Monitor', href: '/uptime-slo-monitor' },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' },
  { name: 'Blog', href: '/news' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

export default function UltraFuturisticFooter2036() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Zion Tech Group</h3>
                  <p className="text-gray-400 text-sm">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <h4 className="text-white font-semibold text-lg mb-4">Contact Information</h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+1 302 464 0950" className="text-sm">+1 302 464 0950</a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                </div>
                
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown, DE 19709</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-sm">ziontechgroup.com</a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Sections */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {section.icon}
                    <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`text-sm transition-colors duration-200 hover:text-cyan-400 ${
                            link.featured ? 'text-cyan-400 font-medium' : 'text-gray-400'
                          }`}
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
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">4.9/5 (200+ Reviews)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
}