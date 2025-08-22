import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronDown, 
  Brain, Atom, Shield, Rocket, 
  Palette, Microscope, Cpu, Database, Lock, BarChart3,
  Zap, Star, Sparkles, Target, BookOpen, Users,
  Phone, Mail, MapPin, Globe, ArrowRight,
  Home, Settings, HelpCircle, FileText, Award, Clock
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarSections = [
  {
    title: 'Main Navigation',
    icon: <Home className="w-5 h-5" />,
    items: [
      { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
      { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Target className="w-4 h-4" /> },
      { name: 'Pricing', href: '/pricing', icon: <Star className="w-4 h-4" /> },
      { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
      { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
      { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
    ]
  },
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    badge: 'New',
    items: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network-platform', description: 'Hybrid AI-Quantum computing' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-powered-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5" />,
    badge: 'Hot',
    items: [
      { name: 'Quantum Computing as a Service', href: '/quantum-computing-as-a-service', description: 'Cloud quantum computing access' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-ai-trading-platform', description: 'Quantum trading algorithms' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5" />,
    items: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-architecture', description: 'Never trust, always verify' },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'Self-healing infrastructure' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge orchestration' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform', description: 'Intelligent data processing' },
      { name: 'Quantum Communication', href: '/quantum-secure-communication-platform', description: 'Unbreakable encryption' },
      { name: 'Autonomous Network', href: '/autonomous-network-management-platform', description: 'Self-optimizing networks' },
      { name: 'AI IT Service Management', href: '/ai-powered-it-service-management', description: 'Intelligent service delivery' },
      { name: 'Quantum Database', href: '/quantum-database-management-system', description: 'Next-gen database system' },
      { name: 'Autonomous API Management', href: '/autonomous-api-management-platform', description: 'Intelligent API lifecycle' },
      { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics-engine', description: 'Future insights with AI' },
      { name: 'AI Computer Vision', href: '/ai-computer-vision-platform', description: 'See through AI eyes' },
      { name: 'AI NLP Suite', href: '/ai-nlp-suite', description: 'Understand human language' },
      { name: 'AI Fraud Detection', href: '/ai-fraud-detection-system', description: 'Protect with intelligent detection' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5" />,
    items: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Transform data into insights' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Create content in seconds' },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Automate support with AI' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Boost sales performance' },
      { name: 'AI Project Management', href: '/ai-project-management-suite', description: 'Streamline workflows' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Smarter financial decisions' },
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'Optimize HR operations' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Automate and optimize campaigns' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Optimize with AI insights' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'Unleash creativity with AI' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning experiences' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-powered-healthcare-diagnostics', description: 'Revolutionary medical diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Transform financial decision-making' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Drive environmental impact' }
    ]
  },
  {
    title: 'Creative & Design',
    icon: <Palette className="w-5 h-5" />,
    badge: 'New',
    items: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'AI-powered artistic tools' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Generate engaging content' },
      { name: 'AI Design Automation', href: '/ai-design-automation-platform', description: 'Automate design processes' },
      { name: 'AI Video Creation', href: '/ai-video-creation-platform', description: 'Create videos with AI' },
      { name: 'AI Music Generation', href: '/ai-music-generation-platform', description: 'Compose music with AI' },
      { name: 'AI 3D Modeling', href: '/ai-3d-modeling-platform', description: 'Generate 3D models' },
      { name: 'AI Brand Management', href: '/ai-brand-management-platform', description: 'Manage brand identity' },
      { name: 'AI Marketing Design', href: '/ai-marketing-design-platform', description: 'Design marketing materials' }
    ]
  },
  {
    title: 'Research & Development',
    icon: <Microscope className="w-5 h-5" />,
    badge: 'Hot',
    items: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'Quantum Computing', href: '/quantum-computing-as-a-service', description: 'Access quantum power' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Space Technology', href: '/space-technology-ai-platform', description: 'AI-powered space solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological AI research' },
      { name: 'AI Materials Science', href: '/ai-materials-science-platform', description: 'Accelerate materials discovery' },
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'Pharmaceutical AI research' },
      { name: 'AI Climate Research', href: '/ai-climate-research-platform', description: 'Environmental AI research' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: 'Manufacturing AI', href: '/ai-manufacturing-platform', description: 'Smart manufacturing solutions' },
      { name: 'Healthcare AI', href: '/ai-healthcare-solutions', description: 'Medical AI applications' },
      { name: 'Financial AI', href: '/ai-financial-solutions', description: 'Financial technology AI' },
      { name: 'Retail AI', href: '/ai-retail-solutions', description: 'Retail automation AI' },
      { name: 'Transportation AI', href: '/ai-transportation-solutions', description: 'Smart transportation AI' },
      { name: 'Energy AI', href: '/ai-energy-solutions', description: 'Energy optimization AI' },
      { name: 'Education AI', href: '/ai-education-solutions', description: 'Educational AI platforms' },
      { name: 'Government AI', href: '/ai-government-solutions', description: 'Public sector AI solutions' }
    ]
  },
  {
    title: 'Infrastructure',
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge orchestration' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'Self-healing infrastructure' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform', description: 'Intelligent data processing' },
      { name: 'Quantum Database', href: '/quantum-database-management-system', description: 'Next-gen database system' },
      { name: 'Autonomous Network', href: '/autonomous-network-management-platform', description: 'Self-optimizing networks' },
      { name: 'AI Service Management', href: '/ai-powered-it-service-management', description: 'Intelligent service delivery' },
      { name: 'Autonomous API Management', href: '/autonomous-api-management-platform', description: 'Intelligent API lifecycle' }
    ]
  },
  {
    title: 'Security & Privacy',
    icon: <Lock className="w-5 h-5" />,
    items: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-architecture', description: 'Never trust, always verify' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Communication', href: '/quantum-secure-communication-platform', description: 'Military-grade security' },
      { name: 'AI Fraud Detection', href: '/ai-fraud-detection-system', description: 'Intelligent fraud prevention' },
      { name: 'AI Threat Intelligence', href: '/ai-threat-intelligence-platform', description: 'Advanced threat detection' },
      { name: 'AI Security Analytics', href: '/ai-security-analytics-platform', description: 'Security insights with AI' },
      { name: 'Privacy-Preserving AI', href: '/privacy-preserving-ai-platform', description: 'AI without compromising privacy' },
      { name: 'AI Compliance Management', href: '/ai-compliance-management-platform', description: 'Automated compliance' }
    ]
  },
  {
    title: 'Analytics & Intelligence',
    icon: <BarChart3 className="w-5 h-5" />,
    items: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Transform data into insights' },
      { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics-engine', description: 'Future insights with AI' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform', description: 'Intelligent data processing' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized experiences' },
      { name: 'AI Customer Analytics', href: '/ai-customer-analytics-platform', description: 'Customer behavior insights' },
      { name: 'AI Market Intelligence', href: '/ai-market-intelligence-platform', description: 'Market trend analysis' },
      { name: 'AI Performance Analytics', href: '/ai-performance-analytics-platform', description: 'Performance optimization' },
      { name: 'AI Risk Analytics', href: '/ai-risk-analytics-platform', description: 'Risk assessment and management' }
    ]
  }
];

const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
];

export default function EnhancedSidebar2025() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Main Navigation']));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  if (!isVisible) return null;

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
    >
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50"></div>
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h2>
            <p className="text-xs text-gray-400">Navigation</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.website}</span>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="p-4 space-y-2">
        {sidebarSections.map((section) => (
          <div key={section.title} className="space-y-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {section.icon}
                </div>
                <span className="font-medium">{section.title}</span>
                {section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    {section.badge}
                  </span>
                )}
              </div>
              {expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              )}
            </button>

            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-8 space-y-1"
                >
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded transition-all duration-200 group"
                    >
                      <div className="flex items-start space-x-2">
                        {item.icon && (
                          <div className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-200 mt-0.5">
                            {item.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Resources Section */}
        <div className="pt-4 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-gray-300 mb-3 px-3">Resources</h3>
          <div className="space-y-1">
            {resources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.href}
                className="flex items-center space-x-3 p-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded transition-all duration-200 group"
              >
                <div className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-200">
                  {resource.icon}
                </div>
                <span>{resource.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="pt-4 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-gray-300 mb-3 px-3">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3 px-3">
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-cyan-400">500+</div>
              <div className="text-xs text-gray-400">Services</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-blue-400">1000+</div>
              <div className="text-xs text-gray-400">Clients</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-green-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
    </motion.aside>
  );
}