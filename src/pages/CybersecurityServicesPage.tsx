import { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple security service data structure
interface SecurityService {
  id: string;
  title: string;
  description: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  tags: string[];
  rating: number;
  securityScore: number;
}

const SECURITY_SERVICES: SecurityService[] = [
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection",
    description: "Next-generation cybersecurity platform using artificial intelligence to detect and prevent advanced threats in real-time.",
    subcategory: "Threat Detection",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Real-time threat monitoring", "AI-powered anomaly detection", "Automated incident response", "Threat intelligence feeds", "Compliance reporting", "24/7 SOC support"],
    benefits: ["99.9% threat detection rate", "Reduced false positives", "Faster incident response", "Compliance assurance", "Cost-effective security"],
    tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance", "SOC"],
    rating: 4.9,
    securityScore: 97
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Framework",
    description: "Comprehensive zero trust security implementation with identity verification, micro-segmentation, and continuous monitoring.",
    subcategory: "Access Control",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-factor authentication", "Identity governance", "Network segmentation", "Continuous monitoring", "Compliance automation", "Expert implementation"],
    benefits: ["Enhanced security posture", "Reduced attack surface", "Compliance readiness", "Simplified access management", "Audit trail visibility"],
    tags: ["Cybersecurity", "Zero Trust", "Identity Management", "Compliance", "Network Security"],
    rating: 4.7,
    securityScore: 94
  },
  {
    id: "endpoint-security",
    title: "Advanced Endpoint Security",
    description: "Comprehensive endpoint protection platform with EDR, behavioral analysis, and automated threat response capabilities.",
    subcategory: "Endpoint Protection",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["EDR capabilities", "Behavioral analysis", "Threat hunting", "Automated response", "Centralized management", "Real-time monitoring"],
    benefits: ["Comprehensive endpoint protection", "Reduced incident response time", "Better threat visibility", "Automated security operations", "Cost optimization"],
    tags: ["Cybersecurity", "Endpoint Security", "EDR", "Threat Hunting", "Automation"],
    rating: 4.8,
    securityScore: 95
  },
  {
    id: "network-security",
    title: "Network Security & Firewall",
    description: "Advanced network security solutions with next-generation firewalls, intrusion prevention, and traffic analysis.",
    subcategory: "Network Security",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Next-gen firewall", "Intrusion prevention", "Traffic analysis", "VPN management", "Threat intelligence", "24/7 monitoring"],
    benefits: ["Enhanced network protection", "Improved threat visibility", "Better performance", "Simplified management", "Cost-effective security"],
    tags: ["Cybersecurity", "Network Security", "Firewall", "IPS", "VPN"],
    rating: 4.7,
    securityScore: 93
  },
  {
    id: "cloud-security",
    title: "Cloud Security Platform",
    description: "Comprehensive cloud security solution for AWS, Azure, and GCP with compliance monitoring and threat protection.",
    subcategory: "Cloud Security",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-cloud security", "Compliance monitoring", "Threat protection", "Identity management", "Data protection", "Security automation"],
    benefits: ["Unified cloud security", "Compliance assurance", "Reduced risks", "Better visibility", "Cost optimization"],
    tags: ["Cybersecurity", "Cloud Security", "AWS", "Azure", "GCP", "Compliance"],
    rating: 4.8,
    securityScore: 94
  },
  {
    id: "data-protection",
    title: "Data Protection & Encryption",
    description: "Enterprise data protection platform with encryption, data loss prevention, and privacy management capabilities.",
    subcategory: "Data Protection",
    price: 349,
    currency: "$",
    pricingModel: "monthly",
    features: ["Data encryption", "DLP policies", "Privacy management", "Compliance reporting", "Audit trails", "Expert consultation"],
    benefits: ["Enhanced data security", "Compliance readiness", "Reduced breach risks", "Better privacy management", "Audit compliance"],
    tags: ["Cybersecurity", "Data Protection", "Encryption", "DLP", "Privacy"],
    rating: 4.7,
    securityScore: 93
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    description: "Comprehensive vulnerability assessment and management platform with automated scanning and remediation guidance.",
    subcategory: "Vulnerability Assessment",
    price: 249,
    currency: "$",
    pricingModel: "monthly",
    features: ["Automated scanning", "Vulnerability assessment", "Remediation guidance", "Risk scoring", "Compliance reporting", "Expert support"],
    benefits: ["Proactive security", "Reduced attack surface", "Better risk management", "Compliance assurance", "Cost-effective security"],
    tags: ["Cybersecurity", "Vulnerability Management", "Risk Assessment", "Compliance", "Automation"],
    rating: 4.6,
    securityScore: 91
  },
  {
    id: "security-operations",
    title: "Security Operations Center",
    description: "24/7 security operations center with threat monitoring, incident response, and security analytics capabilities.",
    subcategory: "SOC Services",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: ["24/7 monitoring", "Incident response", "Threat hunting", "Security analytics", "Compliance reporting", "Expert analysts"],
    benefits: ["Continuous protection", "Faster incident response", "Better threat visibility", "Compliance assurance", "Reduced security risks"],
    tags: ["Cybersecurity", "SOC", "Incident Response", "Threat Hunting", "Monitoring"],
    rating: 4.9,
    securityScore: 96
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing Services",
    description: "Comprehensive penetration testing services including web applications, networks, and social engineering assessments.",
    subcategory: "Security Testing",
    price: 1999,
    currency: "$",
    pricingModel: "project",
    features: ["Web application testing", "Network testing", "Social engineering", "Physical security", "Detailed reporting", "Remediation guidance"],
    benefits: ["Identify security weaknesses", "Improve security posture", "Compliance readiness", "Risk reduction", "Expert insights"],
    tags: ["Cybersecurity", "Penetration Testing", "Security Assessment", "Compliance", "Testing"],
    rating: 4.8,
    securityScore: 95
  },
  {
    id: "security-awareness",
    title: "Security Awareness Training",
    description: "Comprehensive security awareness training program to educate employees and reduce human security risks.",
    subcategory: "Security Training",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: ["Interactive training modules", "Phishing simulations", "Security assessments", "Progress tracking", "Compliance reporting", "Expert support"],
    benefits: ["Reduced human risks", "Better security culture", "Compliance readiness", "Incident prevention", "Cost-effective security"],
    tags: ["Cybersecurity", "Security Training", "Awareness", "Compliance", "Human Risk"],
    rating: 4.6,
    securityScore: 90
  },
  {
    id: "incident-response",
    title: "Incident Response Services",
    description: "Professional incident response services with rapid response, forensic analysis, and recovery support.",
    subcategory: "Incident Response",
    price: 1499,
    currency: "$",
    pricingModel: "project",
    features: ["Rapid response", "Forensic analysis", "Recovery support", "Legal assistance", "Communication support", "Post-incident review"],
    benefits: ["Faster recovery", "Reduced damage", "Better preparation", "Expert assistance", "Cost optimization"],
    tags: ["Cybersecurity", "Incident Response", "Forensics", "Recovery", "Legal"],
    rating: 4.8,
    securityScore: 94
  },
  {
    id: "compliance-management",
    title: "Compliance Management Platform",
    description: "Comprehensive compliance management platform for GDPR, HIPAA, SOC 2, and industry-specific regulations.",
    subcategory: "Compliance",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Compliance monitoring", "Automated reporting", "Audit preparation", "Policy management", "Risk assessment", "Expert consultation"],
    benefits: ["Compliance assurance", "Reduced audit costs", "Better risk management", "Automated processes", "Expert guidance"],
    tags: ["Cybersecurity", "Compliance", "GDPR", "HIPAA", "SOC 2", "Audit"],
    rating: 4.7,
    securityScore: 93
  },
  {
    id: "identity-governance",
    title: "Identity Governance & Administration",
    description: "Comprehensive identity governance platform with access management, role-based access control, and compliance automation.",
    subcategory: "Identity Management",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Access management", "Role-based access control", "Compliance automation", "Audit trails", "Policy enforcement", "Expert implementation"],
    benefits: ["Enhanced access control", "Compliance automation", "Reduced security risks", "Better audit trails", "Simplified management"],
    tags: ["Cybersecurity", "Identity Management", "Access Control", "Compliance", "Governance"],
    rating: 4.7,
    securityScore: 93
  },
  {
    id: "security-consulting",
    title: "Security Strategy Consulting",
    description: "Expert security consulting services for strategy development, risk assessment, and security program optimization.",
    subcategory: "Security Consulting",
    price: 299,
    currency: "$",
    pricingModel: "hourly",
    features: ["Security assessment", "Strategy development", "Risk management", "Implementation guidance", "Team training", "Ongoing support"],
    benefits: ["Clear security strategy", "Risk reduction", "Compliance readiness", "Team upskilling", "Cost optimization"],
    tags: ["Cybersecurity", "Security Consulting", "Strategy", "Risk Management", "Training"],
    rating: 4.8,
    securityScore: 94
  },
  {
    id: "threat-intelligence",
    title: "Threat Intelligence Platform",
    description: "Advanced threat intelligence platform with real-time threat feeds, analysis tools, and actionable intelligence.",
    subcategory: "Threat Intelligence",
    price: 349,
    currency: "$",
    pricingModel: "monthly",
    features: ["Real-time threat feeds", "Intelligence analysis", "Threat hunting", "Automated alerts", "Custom intelligence", "Expert analysis"],
    benefits: ["Proactive threat detection", "Better incident response", "Reduced false positives", "Competitive advantage", "Cost-effective security"],
    tags: ["Cybersecurity", "Threat Intelligence", "Threat Hunting", "Analysis", "Automation"],
    rating: 4.7,
    securityScore: 92
  },
  {
    id: "security-automation",
    title: "Security Automation Platform",
    description: "Intelligent security automation platform for orchestration, response automation, and security workflow optimization.",
    subcategory: "Security Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Security orchestration", "Response automation", "Workflow optimization", "Integration capabilities", "Analytics dashboard", "Expert support"],
    benefits: ["Faster incident response", "Reduced manual effort", "Better efficiency", "Cost optimization", "Improved security"],
    tags: ["Cybersecurity", "Security Automation", "Orchestration", "Automation", "Efficiency"],
    rating: 4.6,
    securityScore: 91
  },
  {
    id: "mobile-security",
    title: "Mobile Security Solutions",
    description: "Comprehensive mobile security platform for device management, app security, and data protection.",
    subcategory: "Mobile Security",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Device management", "App security", "Data protection", "Threat detection", "Compliance monitoring", "Expert support"],
    benefits: ["Enhanced mobile security", "Better device management", "Compliance assurance", "Reduced risks", "Cost optimization"],
    tags: ["Cybersecurity", "Mobile Security", "Device Management", "App Security", "Compliance"],
    rating: 4.6,
    securityScore: 91
  },
  {
    id: "iot-security",
    title: "IoT Security Platform",
    description: "Comprehensive IoT security solution for device protection, network security, and threat detection.",
    subcategory: "IoT Security",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Device protection", "Network security", "Threat detection", "Vulnerability management", "Compliance monitoring", "Expert consultation"],
    benefits: ["Enhanced IoT security", "Better device protection", "Reduced risks", "Compliance assurance", "Cost optimization"],
    tags: ["Cybersecurity", "IoT Security", "Device Protection", "Network Security", "Compliance"],
    rating: 4.7,
    securityScore: 92
  },
  {
    id: "supply-chain-security",
    title: "Supply Chain Security",
    description: "Comprehensive supply chain security solution for vendor assessment, risk management, and compliance monitoring.",
    subcategory: "Supply Chain Security",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Vendor assessment", "Risk management", "Compliance monitoring", "Threat detection", "Incident response", "Expert consultation"],
    benefits: ["Enhanced supply chain security", "Better risk management", "Compliance assurance", "Reduced risks", "Cost optimization"],
    tags: ["Cybersecurity", "Supply Chain Security", "Vendor Management", "Risk Management", "Compliance"],
    rating: 4.8,
    securityScore: 94
  },
  {
    id: "crisis-management",
    title: "Crisis Management Services",
    description: "Professional crisis management services for cybersecurity incidents, business continuity, and disaster recovery.",
    subcategory: "Crisis Management",
    price: 2499,
    currency: "$",
    pricingModel: "project",
    features: ["Crisis planning", "Incident response", "Business continuity", "Disaster recovery", "Communication support", "Post-crisis review"],
    benefits: ["Faster recovery", "Reduced damage", "Better preparation", "Expert assistance", "Cost optimization"],
    tags: ["Cybersecurity", "Crisis Management", "Business Continuity", "Disaster Recovery", "Planning"],
    rating: 4.9,
    securityScore: 96
  }
];

export default function CybersecurityServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const filteredServices = SECURITY_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  const subcategories = ['all', ...Array.from(new Set(SECURITY_SERVICES.map(s => s.subcategory)))];

  const getSubcategoryIcon = (subcategory: string) => {
    const icons: { [key: string]: string } = {
      'Threat Detection': '🛡️',
      'Security Assessment': '🔍',
      'Compliance': '📋',
      'Cloud Security': '☁️',
      'Incident Response': '🚨',
      'Training': '🎓'
    };
    return icons[subcategory] || '🔒';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Protect your business with enterprise-grade cybersecurity solutions.
          From threat detection to compliance management, we secure your digital assets.
        </p>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Capabilities Overview */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.filter(cat => cat !== 'all').map((subcategory) => (
            <div key={subcategory} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">{getSubcategoryIcon(subcategory)}</div>
              <h3 className="text-xl font-bold text-white mb-2">{subcategory}</h3>
              <p className="text-zion-slate-light text-sm">
                Comprehensive {subcategory.toLowerCase()} solutions
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search security services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-zion-cyan"
            />
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan"
            >
              {subcategories.map(subcategory => (
                <option key={subcategory} value={subcategory} className="bg-zion-slate-dark text-white">
                  {subcategory === 'all' ? 'All Security Services' : subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Security Services Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white text-sm">{service.rating}</span>
                </div>
              </div>

              <p className="text-zion-slate-light mb-4">{service.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-zion-cyan font-semibold">
                  {service.currency}{service.price}
                  <span className="text-sm text-zion-slate-light ml-1">
                    /{service.pricingModel}
                  </span>
                </span>
                <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">
                  Security Score: {service.securityScore}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Learn More
                </button>
                <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Statistics */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Security by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <p className="text-zion-slate-light">Threat Detection Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">24/7</div>
              <p className="text-zion-slate-light">Security Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">15min</div>
              <p className="text-zion-slate-light">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">100%</div>
              <p className="text-zion-slate-light">Compliance Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Zion Security */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Zion for Cybersecurity?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Security Team</h3>
                <p className="text-zion-slate-light">
                  Certified security professionals with experience in Fortune 500 companies and government agencies
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Response</h3>
                <p className="text-zion-slate-light">
                  15-minute average response time with 24/7 security operations center
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Compliance Expertise</h3>
                <p className="text-zion-slate-light">
                  Deep knowledge of GDPR, SOC 2, HIPAA, and other regulatory requirements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Security</h3>
                <p className="text-zion-slate-light">
                  Advanced AI and machine learning for proactive threat detection and prevention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Don't wait for a security breach. Let our cybersecurity experts help you build 
            a robust security foundation that protects your business and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Security Assessment
            </Link>
            <a href="https://ziontechgroup.com" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}