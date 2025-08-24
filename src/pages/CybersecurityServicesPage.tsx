import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrustedBySection } from '@/components/TrustedBySection';
import { QuoteFormSection } from '@/components/QuoteFormSection';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Server,
  Network,
  Database,
  Smartphone
} from 'lucide-react';

const securityServices = [
  {
    id: 1,
    title: "Zero-Trust Security Architecture",
    description: "Implement modern zero-trust security models with continuous verification and least-privilege access controls.",
    features: [
      "Identity verification for every access request",
      "Micro-segmentation of network resources",
      "Continuous monitoring and threat detection",
      "Multi-factor authentication (MFA)",
      "Privileged access management (PAM)"
    ],
    price: 7200,
    currency: "$",
    duration: "8-12 weeks",
    icon: <Shield className="w-8 h-8" />,
    category: "Security Architecture",
    benefits: [
      "Reduce attack surface by 80%",
      "Comply with industry regulations",
      "Prevent lateral movement attacks",
      "Build customer trust and confidence"
    ]
  },
  {
    id: 2,
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Comprehensive security testing to identify and remediate vulnerabilities before attackers can exploit them.",
    features: [
      "External and internal penetration testing",
      "Web application security testing",
      "Social engineering assessments",
      "Physical security testing",
      "Detailed remediation guidance"
    ],
    price: 4500,
    currency: "$",
    duration: "2-4 weeks",
    icon: <Eye className="w-8 h-8" />,
    category: "Security Testing",
    benefits: [
      "Identify security weaknesses proactively",
      "Meet compliance requirements",
      "Improve security posture",
      "Protect brand reputation"
    ]
  },
  {
    id: 3,
    title: "Incident Response & Forensics",
    description: "Rapid response to security incidents with digital forensics to identify root causes and prevent future attacks.",
    features: [
      "24/7 incident response team",
      "Digital forensics and evidence collection",
      "Threat intelligence integration",
      "Incident documentation and reporting",
      "Post-incident lessons learned"
    ],
    price: 8500,
    currency: "$",
    duration: "Immediate response",
    icon: <AlertTriangle className="w-8 h-8" />,
    category: "Incident Response",
    benefits: [
      "Minimize incident impact and downtime",
      "Preserve evidence for legal proceedings",
      "Improve incident response capabilities",
      "Reduce recovery time and costs"
    ]
  },
  {
    id: 4,
    title: "Security Operations Center (SOC) Setup",
    description: "Establish a 24/7 security operations center to monitor, detect, and respond to security threats in real-time.",
    features: [
      "SOC infrastructure design and setup",
      "Security monitoring tools implementation",
      "Incident response procedures",
      "Threat hunting capabilities",
      "Security analyst training"
    ],
    price: 15000,
    currency: "$",
    duration: "12-16 weeks",
    icon: <Server className="w-8 h-8" />,
    category: "Security Operations",
    benefits: [
      "24/7 threat monitoring and response",
      "Proactive threat detection",
      "Centralized security management",
      "Improved incident response times"
    ]
  },
  {
    id: 5,
    title: "Cloud Security & Compliance",
    description: "Secure your cloud infrastructure and ensure compliance with industry standards and regulations.",
    features: [
      "Cloud security architecture review",
      "Identity and access management (IAM)",
      "Data encryption and key management",
      "Compliance assessment and remediation",
      "Security monitoring and alerting"
    ],
    price: 6800,
    currency: "$",
    duration: "6-10 weeks",
    icon: <Globe className="w-8 h-8" />,
    category: "Cloud Security",
    benefits: [
      "Secure cloud deployments",
      "Meet compliance requirements",
      "Protect sensitive data",
      "Reduce security risks"
    ]
  },
  {
    id: 6,
    title: "Network Security & Firewall Management",
    description: "Comprehensive network security solutions including firewall configuration, monitoring, and threat prevention.",
    features: [
      "Firewall design and configuration",
      "Intrusion detection and prevention",
      "Network segmentation",
      "Traffic monitoring and analysis",
      "Security policy management"
    ],
    price: 4200,
    currency: "$",
    duration: "4-6 weeks",
    icon: <Network className="w-8 h-8" />,
    category: "Network Security",
    benefits: [
      "Protect network infrastructure",
      "Prevent unauthorized access",
      "Monitor network traffic",
      "Comply with security policies"
    ]
  },
  {
    id: 7,
    title: "Data Protection & Privacy",
    description: "Implement comprehensive data protection measures including encryption, backup, and privacy compliance.",
    features: [
      "Data classification and mapping",
      "Encryption implementation",
      "Backup and recovery systems",
      "Privacy impact assessments",
      "GDPR/CCPA compliance"
    ],
    price: 5500,
    currency: "$",
    duration: "6-8 weeks",
    icon: <Database className="w-8 h-8" />,
    category: "Data Security",
    benefits: [
      "Protect sensitive data",
      "Meet privacy regulations",
      "Build customer trust",
      "Avoid data breach penalties"
    ]
  },
  {
    id: 8,
    title: "Mobile Device Security",
    description: "Secure mobile devices and implement mobile device management (MDM) solutions for enterprise environments.",
    features: [
      "Mobile device management (MDM)",
      "App security and vetting",
      "Device encryption and policies",
      "Remote wipe capabilities",
      "Security awareness training"
    ],
    price: 3800,
    currency: "$",
    duration: "4-6 weeks",
    icon: <Smartphone className="w-8 h-8" />,
    category: "Mobile Security",
    benefits: [
      "Secure mobile workforce",
      "Protect corporate data",
      "Comply with BYOD policies",
      "Reduce mobile security risks"
    ]
  }
];

const securityTechnologies = [
  "Next-Generation Firewalls (NGFW)",
  "Intrusion Detection Systems (IDS)",
  "Intrusion Prevention Systems (IPS)",
  "Security Information & Event Management (SIEM)",
  "Endpoint Detection & Response (EDR)",
  "Data Loss Prevention (DLP)",
  "Identity & Access Management (IAM)",
  "Multi-Factor Authentication (MFA)"
];

const complianceStandards = [
  "SOC 2 Type II",
  "ISO 27001",
  "PCI DSS",
  "HIPAA",
  "GDPR",
  "CCPA",
  "NIST Cybersecurity Framework",
  "FedRAMP"
];

const threatIntelligence = [
  "Real-time threat monitoring",
  "Vulnerability intelligence",
  "Malware analysis",
  "Threat hunting",
  "Security research",
  "Industry collaboration",
  "Custom threat feeds",
  "Risk assessment"
];

export default function CybersecurityServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise-Grade
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Cybersecurity Solutions
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Protect your business with comprehensive cybersecurity services designed to defend 
            against modern threats, ensure compliance, and build customer trust. Our expert 
            security team delivers enterprise-grade protection for businesses of all sizes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Get Security Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Security Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our range of cybersecurity services designed to address specific 
              security challenges and protect your business assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service) => (
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-zion-blue-light pt-4 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-zion-cyan">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Technologies */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We leverage cutting-edge security technologies and tools to deliver 
              comprehensive protection for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our security solutions help you meet industry standards and regulatory 
              requirements across multiple sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{standard}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Threat Intelligence & Monitoring
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Stay ahead of emerging threats with our comprehensive threat intelligence 
              and 24/7 security monitoring services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {threatIntelligence.map((intel, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{intel}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZionTech for Security */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ZionTech Group for Cybersecurity?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine deep security expertise with industry knowledge to deliver 
              solutions that protect your business and build customer trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Certified Experts</h3>
              <p className="text-zion-slate-light">
                CISSP, CISM, and CEH certified security professionals with 
                extensive experience in enterprise security.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully protected over 500+ businesses from cyber threats 
                with zero major security breaches.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock security monitoring and incident response 
                to protect your business at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Pricing */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Security Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Competitive pricing for enterprise-grade security solutions with 
              flexible payment options and comprehensive protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Essential Security</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $3,800<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Basic security assessment</li>
                <li>Vulnerability scanning</li>
                <li>Security policy review</li>
                <li>Email support</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Professional Security</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $7,200<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-white space-y-2 mb-8">
                <li>Comprehensive security audit</li>
                <li>Penetration testing</li>
                <li>Security architecture review</li>
                <li>Priority support</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise Security</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $15,000<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Full security transformation</li>
                <li>SOC setup and management</li>
                <li>24/7 monitoring and response</li>
                <li>Dedicated security team</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts today to discuss how we can help you 
            protect your business from evolving threats.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">
                +1 302 464 0950
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">
                kleber@ziontechgroup.com
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Request Security Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Schedule Security Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustedBySection />
      <QuoteFormSection />
    </>
  );
}