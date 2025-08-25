import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Building, 
  Users, 
  Target, 
  Zap,
  Globe,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Star,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company" },
        { name: "Our Mission", path: "/mission", description: "What drives us forward" },
        { name: "Team", path: "/team", description: "Meet our experts" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "News", path: "/news", description: "Company updates and industry news" },
        { name: "Pricing", path: "/pricing", description: "Transparent pricing plans" }
      ]
    },
    {
      title: "AI & Autonomous Systems",
      icon: Brain,
      links: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Intelligent autonomous solutions" },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced analytics and insights" },
        { name: "AI Marketing Automation", path: "/services/ai-marketing-automation", description: "Smart marketing optimization" },
        { name: "AI HR & Recruitment", path: "/services/ai-hr-recruitment", description: "Intelligent talent management" },
        { name: "AI Legal Tech", path: "/services/ai-legal-tech", description: "Automated legal processes" },
        { name: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics", description: "Patient care optimization" },
        { name: "AI Financial Analytics", path: "/services/ai-financial-analytics", description: "Risk assessment and insights" },
        { name: "AI Supply Chain", path: "/services/ai-supply-chain", description: "Optimization and forecasting" },
        { name: "AI Manufacturing", path: "/services/ai-manufacturing", description: "Smart production systems" },
        { name: "AI Content Generation", path: "/services/ai-content-generation", description: "Automated content creation" },
        { name: "AI Code Review", path: "/services/ai-code-review", description: "Intelligent code analysis" },
        { name: "AI Autonomous Business Manager", path: "/services/ai-autonomous-business-manager", description: "AI-powered business management" },
        { name: "AI Autonomous Research Assistant", path: "/services/ai-autonomous-research-assistant", description: "Research automation" },
        { name: "AI Autonomous Decision Engine", path: "/services/ai-autonomous-decision-engine", description: "Intelligent decision making" },
        { name: "AI Autonomous Ecosystem", path: "/services/ai-autonomous-ecosystem", description: "Complete AI ecosystem management" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      links: [
        { name: "Cybersecurity Services", path: "/services/cybersecurity", description: "Comprehensive security solutions" },
        { name: "Quantum-Safe Security", path: "/services/quantum-safe-security", description: "Future-proof protection" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Comprehensive security audit" },
        { name: "Compliance & Audit", path: "/services/compliance-audit", description: "Regulatory compliance solutions" },
        { name: "Threat Detection", path: "/services/threat-detection", description: "Real-time security monitoring" },
        { name: "AI-Powered Enterprise Security", path: "/services/ai-powered-enterprise-security", description: "Intelligent security solutions" },
        { name: "AI Autonomous Security", path: "/services/ai-autonomous-security", description: "Automated security systems" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cpu,
      links: [
        { name: "Cloud & DevOps", path: "/cloud-devops", description: "Cloud migration and DevOps automation" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Robust infrastructure solutions" },
        { name: "Specialized IT Infrastructure", path: "/services/specialized-it-infrastructure", description: "Custom infrastructure solutions" },
        { name: "Cloud Migration", path: "/services/cloud-migration", description: "Seamless cloud transition" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" },
        { name: "Managed IT Services", path: "/services/managed-it-services", description: "24/7 IT support" },
        { name: "DevOps Automation", path: "/services/devops-automation", description: "Streamlined development" },
        { name: "Autonomous DevOps Platform", path: "/services/autonomous-devops-platform", description: "AI-powered DevOps" },
        { name: "AI Autonomous DevOps", path: "/services/ai-autonomous-devops", description: "Intelligent DevOps automation" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      links: [
        { name: "Emerging Technology", path: "/emerging-tech", description: "Cutting-edge technology solutions" },
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Next-generation computing" },
        { name: "Quantum Cloud Infrastructure", path: "/services/quantum-cloud-infrastructure", description: "Quantum-ready cloud solutions" },
        { name: "Quantum Financial Trading", path: "/services/quantum-financial-trading", description: "Quantum-powered trading" },
        { name: "Quantum Services", path: "/services/quantum-services", description: "Comprehensive quantum solutions" },
        { name: "Blockchain Solutions", path: "/services/blockchain-solutions", description: "Decentralized applications" },
        { name: "AI Blockchain Analytics", path: "/services/ai-blockchain-analytics", description: "Intelligent blockchain analysis" },
        { name: "AI Blockchain Governance", path: "/services/ai-blockchain-governance", description: "Smart governance solutions" },
        { name: "IoT Platforms", path: "/services/iot-platforms", description: "Connected device management" },
        { name: "AR/VR Solutions", path: "/services/ar-vr-solutions", description: "Immersive experiences" },
        { name: "AI Brain Computer Interface", path: "/services/ai-brain-computer-interface", description: "Neural interface technology" },
        { name: "AI Brain Interface", path: "/services/ai-brain-interface", description: "Advanced brain-computer interfaces" },
        { name: "AI Autonomous Robotics", path: "/services/ai-autonomous-robotics", description: "Intelligent robotic systems" },
        { name: "AI Autonomous Vehicle Platform", path: "/services/ai-autonomous-vehicle-platform", description: "Self-driving vehicle solutions" },
        { name: "AI Autonomous Vehicles", path: "/services/ai-autonomous-vehicles", description: "Autonomous transportation" },
        { name: "AI Autonomous Vehicle", path: "/services/ai-autonomous-vehicle", description: "Individual vehicle automation" },
        { name: "AI Autonomous Vehicles Platform", path: "/services/ai-autonomous-vehicles-platform", description: "Comprehensive vehicle automation" },
        { name: "AI Autonomous Testing", path: "/services/ai-autonomous-testing", description: "Automated testing solutions" },
        { name: "AI Autonomous Scientific Researcher", path: "/services/ai-autonomous-scientific-researcher", description: "Research automation" },
        { name: "AI Autonomous Research", path: "/services/ai-autonomous-research", description: "Comprehensive research automation" },
        { name: "AI Autonomous Learning System", path: "/services/ai-autonomous-learning-system", description: "Intelligent learning platforms" },
        { name: "AI Autonomous Education Professor", path: "/services/ai-autonomous-education-professor", description: "Educational AI systems" },
        { name: "AI Autonomous Healthcare Physician", path: "/services/ai-autonomous-healthcare-physician", description: "Medical AI assistance" },
        { name: "AI Autonomous Legal Counsel", path: "/services/ai-autonomous-legal-counsel", description: "Legal AI systems" },
        { name: "AI Autonomous Logistics", path: "/services/ai-autonomous-logistics", description: "Supply chain automation" },
        { name: "AI Autonomous Manufacturing", path: "/services/ai-autonomous-manufacturing", description: "Production automation" },
        { name: "AI Autonomous Systems Platform", path: "/services/ai-autonomous-systems-platform", description: "Complete autonomous platform" },
        { name: "AI Autonomous Venture Capitalist", path: "/services/ai-autonomous-venture-capitalist", description: "Investment AI systems" },
        { name: "AI Biomedical Research", path: "/services/ai-biomedical-research", description: "Medical research automation" },
        { name: "AI Biotech Drug Discovery", path: "/services/ai-biotech-drug-discovery", description: "Pharmaceutical AI" },
        { name: "AI Climate Prediction Engine", path: "/services/ai-climate-prediction-engine", description: "Climate modeling AI" },
        { name: "AI Climate Prediction Platform", path: "/services/ai-climate-prediction-platform", description: "Climate prediction systems" },
        { name: "AI Climate Prediction", path: "/services/ai-climate-prediction", description: "Environmental AI solutions" },
        { name: "AI Code Generation Enterprise", path: "/services/ai-code-generation-enterprise", description: "Enterprise code generation" },
        { name: "AI Code Review Copilot", path: "/services/ai-code-review-copilot", description: "AI-powered code review" },
        { name: "AI Code Review", path: "/services/ai-code-review", description: "Intelligent code analysis" },
        { name: "AI Compliance Automation", path: "/services/ai-compliance-automation", description: "Regulatory automation" },
        { name: "AI Computer Vision Platform", path: "/services/ai-computer-vision-platform", description: "Vision AI solutions" },
        { name: "AI Consciousness Evolution", path: "/services/ai-consciousness-evolution", description: "Consciousness research" },
        { name: "AI Consciousness Evolution 2025", path: "/services/ai-consciousness-evolution-2025", description: "2025 consciousness research" },
        { name: "AI Consciousness Evolution 2029", path: "/services/ai-consciousness-evolution-2029", description: "2029 consciousness research" },
        { name: "AI Consciousness Evolution Platform", path: "/services/ai-consciousness-evolution-platform", description: "Consciousness platform" },
        { name: "AI Consciousness Simulation Platform", path: "/services/ai-consciousness-simulation-platform", description: "Consciousness simulation" },
        { name: "AI Consciousness Simulation", path: "/services/ai-consciousness-simulation", description: "Consciousness AI" },
        { name: "AI Consciousness Simulator", path: "/services/ai-consciousness-simulator", description: "Consciousness simulation tools" },
        { name: "AI Content Creation Revolution", path: "/services/ai-content-creation-revolution", description: "Content creation AI" },
        { name: "AI Content Creation", path: "/services/ai-content-creation", description: "Content generation AI" },
        { name: "AI Content Factory", path: "/services/ai-content-factory", description: "Automated content production" },
        { name: "AI Content Generation Automation 2033", path: "/services/ai-content-generation-automation-2033", description: "2033 content automation" },
        { name: "AI Content Generation Pro 2029", path: "/services/ai-content-generation-pro-2029", description: "2029 content generation" },
        { name: "AI Content Generator", path: "/services/ai-content-generator", description: "Content generation tools" },
        { name: "AI Content Marketing Automation", path: "/services/ai-content-marketing-automation", description: "Marketing content AI" },
        { name: "AI Content Personalization Engine", path: "/services/ai-content-personalization-engine", description: "Personalized content AI" },
        { name: "AI Creativity Studio", path: "/services/ai-creativity-studio", description: "Creative AI tools" },
        { name: "AI Market Research", path: "/services/ai-market-research", description: "Market analysis AI" },
        { name: "AI Brand Personality Generator", path: "/services/ai-brand-personality-generator", description: "Brand AI tools" },
        { name: "AI Business Intelligence Elite 2026", path: "/services/ai-business-intelligence-elite-2026", description: "2026 elite BI" },
        { name: "AI Business Intelligence Pro", path: "/services/ai-business-intelligence-pro", description: "Professional BI" },
        { name: "AI Business Intelligence Suite 2029", path: "/services/ai-business-intelligence-suite-2029", description: "2029 BI suite" },
        { name: "AI Business Intelligence Suite", path: "/services/ai-business-intelligence-suite", description: "Comprehensive BI suite" },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Business intelligence AI" },
        { name: "AI Autonomous Creative Director", path: "/services/ai-autonomous-creative-director", description: "Creative direction AI" },
        { name: "AI Autonomous Data", path: "/services/ai-autonomous-data", description: "Data management AI" },
        { name: "AI Autonomous Decision Platform", path: "/services/ai-autonomous-decision-platform", description: "Decision platform AI" },
        { name: "AI Autonomous Ecosystem Manager", path: "/services/ai-autonomous-ecosystem-manager", description: "Ecosystem management AI" },
        { name: "AI Agent Orchestrator", path: "/services/ai-agent-orchestrator", description: "AI agent management" },
        { name: "AI Agents", path: "/services/ai-agents", description: "Intelligent AI agents" },
        { name: "AI Analytics Copilot", path: "/services/ai-analytics-copilot", description: "Analytics assistance AI" },
        { name: "AI Assistant", path: "/services/ai-assistant", description: "General AI assistance" },
        { name: "AI Automation Services", path: "/services/ai-automation-services", description: "Comprehensive automation" },
        { name: "AI Autonomous Business Operations", path: "/services/ai-autonomous-business-operations", description: "Business operations AI" },
        { name: "AI Autonomous Business Operations Platform", path: "/services/ai-autonomous-business-operations-platform", description: "Operations platform AI" },
        { name: "AI Autonomous Business Operations Platform 2026", path: "/services/ai-autonomous-business-operations-platform-2026", description: "2026 operations platform" },
        { name: "AI Autonomous Business Process Automation", path: "/services/ai-autonomous-business-process-automation", description: "Process automation AI" },
        { name: "AI Autonomous Business Platform", path: "/services/ai-autonomous-business-platform", description: "Business platform AI" },
        { name: "AI Autonomous Business Platform 2026", path: "/services/ai-autonomous-business-platform-2026", description: "2026 business platform" },
        { name: "AI Autonomous Business Manager 2029", path: "/services/ai-autonomous-business-manager-2029", description: "2029 business manager AI" },
        { name: "AI Autonomous Business Manager", path: "/services/ai-autonomous-business-manager", description: "Business management AI" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      links: [
        { name: "Industry Solutions", path: "/services/industry-solutions", description: "Tailored industry solutions" },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", description: "Large-scale business transformation" },
        { name: "Healthcare Solutions", path: "/solutions/healthcare", description: "Medical innovation solutions" },
        { name: "Financial Services", path: "/solutions/financial", description: "Fintech solutions" },
        { name: "Manufacturing Intelligence", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { name: "Retail Technology", path: "/solutions/retail", description: "Digital retail transformation" },
        { name: "Government Solutions", path: "/solutions/government", description: "Public sector innovation" },
        { name: "Education Technology", path: "/solutions/education", description: "Learning innovation" },
        { name: "Energy Management", path: "/solutions/energy", description: "Sustainable energy solutions" },
        { name: "Space Technology", path: "/services/space-tech", description: "Space innovation solutions" },
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Custom software solutions" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Complete business modernization" }
      ]
    },
    {
      title: "Support & Resources",
      icon: Users,
      links: [
        { name: "Help Center", path: "/help", description: "Customer support and help" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and examples" },
        { name: "White Papers", path: "/white-papers", description: "Industry insights and research" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Events", path: "/events", description: "Upcoming events and conferences" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Testimonials", path: "/testimonials", description: "Customer feedback and reviews" },
        { name: "Request Quote", path: "/request-quote", description: "Get a custom quote" },
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage policy" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Complete overview of all pages and services available on Zion Tech Group website
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                        {link.name}
                      </div>
                      <div className="text-sm text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-zion-slate-light">Get in touch with our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}