import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, ArrowRight, Star,
  Shield, Rocket, Brain, Atom, DollarSign,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe as GlobeIcon, Cpu, Database, Lock,
  Target, BookOpen, Heart, Lightbulb,
  Sparkles, ArrowUpRight, ChevronRight,
  ArrowUp, ExternalLink
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-600',
    services: [
      { name: 'AI Consciousness Evolution 2030', href: '/ai-consciousness-evolution-2030' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-purple-600',
    services: [
      { name: 'Quantum AI Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Quantum Networking', href: '/quantum-networking' }
    ]
  },
  {
    title: 'Space Technology',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'Space Mining AI Platform', href: '/space-mining-ai-platform' },
      { name: 'Space Exploration AI', href: '/space-exploration-ai' },
      { name: 'Satellite AI Management', href: '/satellite-ai-management' },
      { name: 'Interplanetary Logistics', href: '/interplanetary-logistics' },
      { name: 'Space Safety Systems', href: '/space-safety-systems' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: <DollarSign className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-600',
    services: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'Quantum Financial Security', href: '/quantum-financial-security' },
      { name: 'AI Risk Assessment', href: '/ai-risk-assessment' }
    ]
  },
  {
    title: 'Content & Marketing',
    icon: <BookOpen className="w-5 h-5 text-pink-400" />,
    color: 'from-pink-500 to-rose-600',
    services: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'SEO Automation Suite', href: '/seo-automation' },
      { name: 'Social Media AI Manager', href: '/social-media-ai-manager' },
      { name: 'Content Analytics Platform', href: '/content-analytics-platform' }
    ]
  },
  {
    title: 'Cybersecurity',
    icon: <Shield className="w-5 h-5 text-red-400" />,
    color: 'from-red-500 to-orange-600',
    services: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite' },
      { name: 'Security Compliance Manager', href: '/security-compliance-manager' }
    ]
  },
  {
    title: 'Healthcare Technology',
    icon: <Heart className="w-5 h-5 text-teal-400" />,
    color: 'from-teal-500 to-cyan-600',
    services: [
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform' },
      { name: 'AI Medical Imaging', href: '/ai-medical-imaging' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai' },
      { name: 'Drug Discovery AI', href: '/drug-discovery-ai' },
      { name: 'Healthcare Analytics Platform', href: '/healthcare-analytics-platform' }
    ]
  },
  {
    title: 'Energy Technology',
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-600',
    services: [
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Smart Grid AI', href: '/smart-grid-ai' },
      { name: 'Renewable Energy AI', href: '/renewable-energy-ai' },
      { name: 'Energy Storage AI', href: '/energy-storage-ai' },
      { name: 'Climate Impact AI', href: '/climate-impact-ai' }
    ]
  },
  {
    title: 'Education Technology',
    icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
    color: 'from-indigo-500 to-purple-600',
    services: [
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'Adaptive Learning AI', href: '/adaptive-learning-ai' },
      { name: 'AI Tutoring System', href: '/ai-tutoring-system' },
      { name: 'Educational Content AI', href: '/educational-content-ai' },
      { name: 'Learning Analytics Platform', href: '/learning-analytics-platform' }
    ]
  },
  {
    title: 'Materials Science',
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-600',
    services: [
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Nanotechnology AI', href: '/nanotechnology-ai' },
      { name: 'Biomaterials AI', href: '/biomaterials-ai' },
      { name: 'Composite Materials AI', href: '/composite-materials-ai' },
      { name: 'Materials Testing AI', href: '/materials-testing-ai' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Leadership Team', href: '/leadership', description: 'Meet our executives' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
  { name: 'Investors', href: '/investors', description: 'Investment information' },
  { name: 'Research & Development', href: '/research-development', description: 'Innovation initiatives' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
  { name: 'API Reference', href: '/api', description: 'Developer resources' },
  { name: 'Training & Certification', href: '/training', description: 'Skill development' },
  { name: 'Community Forum', href: '/community', description: 'Connect with users' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Security Center', href: '/security', description: 'Security information' },
  { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' }
];

const resourcesLinks = [
  { name: 'Blog', href: '/blog', description: 'Industry insights' },
  { name: 'Whitepapers', href: '/whitepapers', description: 'Research papers' },
  { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
  { name: 'Events', href: '/events', description: 'Upcoming events' },
  { name: 'Podcast', href: '/podcast', description: 'Technology discussions' },
  { name: 'Newsletter', href: '/newsletter', description: 'Stay updated' },
  { name: 'Resource Library', href: '/resources', description: 'All resources' },
  { name: 'Glossary', href: '/glossary', description: 'Technical terms' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const stats = [
  { number: '15+', label: 'Revolutionary Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000%+', label: 'Average ROI', icon: TrendingUp, color: 'text-purple-400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Expert Support', icon: Clock, color: 'text-pink-400' }
];

export default function UltraAdvancedFooter2035() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Stats Section */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transforming the Future of Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary services are already delivering unprecedented results for forward-thinking organizations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-gray-400">Future Technology Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the future of technology with revolutionary AI consciousness, quantum computing, 
                space technology, and breakthrough innovations that transform businesses worldwide.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={contactInfo.website} className="hover:text-purple-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Our Revolutionary Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.slice(0, 6).map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <h4 className="font-medium text-white">{category.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                      {category.services.length > 3 && (
                        <Link
                          href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                        >
                          View All {category.title} Services →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Service Categories */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-6">All Service Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <h4 className="font-medium text-white text-sm">{category.title}</h4>
                  </div>
                  <div className="space-y-1">
                    {category.services.slice(0, 2).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.href}
                        className="block text-xs text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company, Support & Resources */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <div className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Support & Resources</h3>
                <div className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                <div className="space-y-2">
                  {resourcesLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 mr-4">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/20 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-64 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-md text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>© 2025 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-purple-400 transition-colors">Cookie Policy</Link>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}