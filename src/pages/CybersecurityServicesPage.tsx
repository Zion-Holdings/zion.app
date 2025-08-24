import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple cybersecurity service data structure
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
    id: "threat-detection-response",
    title: "Advanced Threat Detection & Response",
    description: "24/7 cybersecurity monitoring with AI-powered threat detection, automated incident response, and real-time security analytics.",
    subcategory: "Cybersecurity",
    price: 12999,
    currency: "$",
    pricingModel: "project-based",
    features: ["AI-powered threat detection", "Automated incident response", "Real-time security analytics", "Penetration testing", "Vulnerability assessment", "Compliance reporting"],
    benefits: ["Proactive threat prevention", "Rapid incident response", "Reduced breach risk", "Compliance assurance", "Cost-effective security"],
    tags: ["Threat Detection", "Incident Response", "Penetration Testing", "Compliance", "AI Security"],
    rating: 4.9,
    securityScore: 98
  },
  {
    id: "compliance-audit",
    title: "Compliance & Regulatory Audit",
    description: "Comprehensive compliance framework for SOC 2, ISO 27001, HIPAA, GDPR, and industry-specific regulations with detailed reporting.",
    subcategory: "Compliance",
    price: 8999,
    currency: "$",
    pricingModel: "project-based",
    features: ["SOC 2 compliance", "ISO 27001 certification", "HIPAA compliance", "GDPR compliance", "Industry regulations", "Audit preparation"],
    benefits: ["Meet compliance requirements", "Reduce audit risk", "Build customer trust", "Avoid penalties", "Streamline processes"],
    tags: ["Compliance", "SOC 2", "ISO 27001", "HIPAA", "GDPR", "Audit"],
    rating: 4.8,
    securityScore: 95
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Comprehensive security testing including network, web application, and social engineering assessments with detailed remediation guidance.",
    subcategory: "Penetration Testing",
    price: 5999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Network penetration testing", "Web application testing", "Social engineering", "Physical security", "Wireless security", "Remediation guidance"],
    benefits: ["Identify security gaps", "Validate security controls", "Meet compliance requirements", "Improve security posture", "Reduce breach risk"],
    tags: ["Penetration Testing", "Vulnerability Assessment", "Security Testing", "Network Security", "Web Security"],
    rating: 4.7,
    securityScore: 93
  },
  {
    id: "security-audit",
    title: "Security Architecture Audit",
    description: "Comprehensive security architecture review and assessment for enterprise organizations with optimization recommendations.",
    subcategory: "Security Audits",
    price: 7499,
    currency: "$",
    pricingModel: "project-based",
    features: ["Architecture review", "Security assessment", "Risk analysis", "Optimization recommendations", "Implementation roadmap", "Best practices"],
    benefits: ["Optimize security architecture", "Reduce security gaps", "Improve efficiency", "Cost optimization", "Future-proof design"],
    tags: ["Security Architecture", "Security Audit", "Risk Analysis", "Best Practices", "Enterprise Security"],
    rating: 4.8,
    securityScore: 94
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    description: "Rapid incident response services with digital forensics, evidence collection, and post-incident analysis and reporting.",
    subcategory: "Incident Response",
    price: 9999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Rapid response team", "Digital forensics", "Evidence collection", "Incident analysis", "Recovery planning", "Lessons learned"],
    benefits: ["Minimize incident impact", "Preserve evidence", "Accelerate recovery", "Prevent future incidents", "Compliance support"],
    tags: ["Incident Response", "Digital Forensics", "Evidence Collection", "Recovery", "Security"],
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
      'Cybersecurity': '🛡️',
      'Compliance': '📋',
      'Penetration Testing': '🔍',
      'Security Audits': '🔐',
      'Incident Response': '🚨'
    };
    return icons[subcategory] || '🔒';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Cybersecurity Services & Solutions
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Protect your business with enterprise-grade cybersecurity solutions. 
          From threat detection to compliance, we deliver comprehensive security services.
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

      {/* Security Statistics */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">98%</div>
            <div className="text-white text-sm">Threat Detection Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
            <div className="text-white text-sm">Security Monitoring</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">15min</div>
            <div className="text-white text-sm">Response Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">100%</div>
            <div className="text-white text-sm">Compliance Success</div>
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
                Comprehensive {subcategory.toLowerCase()} solutions for enterprise security
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

      {/* Why Choose Zion for Security */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Zion for Security Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Security Team</h3>
                <p className="text-zion-slate-light">
                  Certified security professionals with decades of experience in enterprise cybersecurity
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
                  15-minute response time for critical security incidents with 24/7 monitoring
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
                  Deep knowledge of SOC 2, ISO 27001, HIPAA, GDPR, and industry regulations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Coverage</h3>
                <p className="text-zion-slate-light">
                  Security services available worldwide with local compliance expertise
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
            Let our cybersecurity experts help you build a robust security foundation. 
            Get started today with a comprehensive security assessment.
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