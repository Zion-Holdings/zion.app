"use client";

import { useState } from "react";

interface ITService {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  technologies: string[];
  industries: string[];
}

const itServices: ITService[] = [
  {
    id: "cloud-migration-complete",
    name: "Complete Cloud Migration & DevOps",
    description: "End-to-end cloud migration services with DevOps implementation, ensuring smooth transitions and optimal performance.",
    deliverables: [
      "Cloud architecture design",
      "Migration strategy and planning",
      "Infrastructure as Code (IaC)",
      "CI/CD pipeline setup",
      "Performance optimization",
      "Security and compliance",
      "24/7 monitoring and support"
    ],
    timeline: "4-12 weeks depending on complexity",
    pricing: "Starting at $15,000",
    startingPrice: 15000,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Cloud%20Migration%20Inquiry",
    icon: "☁️",
    features: [
      "Multi-cloud strategy planning",
      "Infrastructure as Code (IaC)",
      "CI/CD pipeline setup",
      "Performance optimization",
      "Security and compliance",
      "24/7 monitoring and support",
      "Disaster recovery planning",
      "Cost optimization analysis"
    ],
    technologies: [
      "AWS, Azure, Google Cloud",
      "Terraform, CloudFormation",
      "Docker, Kubernetes",
      "Jenkins, GitLab CI",
      "Prometheus, Grafana",
      "Ansible, Chef"
    ],
    industries: [
      "Financial Services",
      "Healthcare",
      "E-commerce",
      "Manufacturing",
      "Education",
      "Government"
    ]
  },
  {
    id: "cybersecurity-comprehensive",
    name: "Comprehensive Cybersecurity & Compliance",
    description: "Full-spectrum cybersecurity solutions including penetration testing, compliance audits, and security infrastructure setup.",
    deliverables: [
      "Security assessment report",
      "Penetration testing results",
      "Compliance audit findings",
      "Security policy documentation",
      "Incident response plan",
      "Security awareness training",
      "Ongoing monitoring setup"
    ],
    timeline: "2-8 weeks depending on scope",
    pricing: "Starting at $8,500",
    startingPrice: 8500,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Cybersecurity%20Inquiry",
    icon: "🔒",
    features: [
      "Penetration testing",
      "Security audits and assessments",
      "Compliance frameworks (SOC2, ISO27001)",
      "Incident response planning",
      "Security awareness training",
      "Ongoing monitoring and support",
      "Vulnerability management",
      "Threat intelligence"
    ],
    technologies: [
      "Nessus, OpenVAS",
      "Metasploit, Burp Suite",
      "SIEM platforms",
      "EDR solutions",
      "Firewall management",
      "Identity management"
    ],
    industries: [
      "Financial Services",
      "Healthcare",
      "Government",
      "Technology",
      "Manufacturing",
      "Retail"
    ]
  },
  {
    id: "network-infrastructure-enterprise",
    name: "Enterprise Network Infrastructure",
    description: "Design, implementation, and maintenance of enterprise-grade network infrastructure and connectivity solutions.",
    deliverables: [
      "Network design documentation",
      "Hardware procurement and setup",
      "Configuration and optimization",
      "Security implementation",
      "Performance testing",
      "Documentation and training",
      "Ongoing maintenance plan"
    ],
    timeline: "3-10 weeks depending on size",
    pricing: "Starting at $6,500",
    startingPrice: 6500,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Network%20Infrastructure%20Inquiry",
    icon: "🌐",
    features: [
      "Network design and planning",
      "Hardware procurement and setup",
      "Wireless network optimization",
      "VPN and remote access",
      "Network security implementation",
      "Ongoing maintenance and support",
      "Performance monitoring",
      "Capacity planning"
    ],
    technologies: [
      "Cisco, Juniper, Aruba",
      "VMware NSX",
      "SD-WAN solutions",
      "Network monitoring tools",
      "Load balancers",
      "Firewall appliances"
    ],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Education",
      "Retail",
      "Financial Services",
      "Government"
    ]
  },
  {
    id: "it-strategy-consulting",
    name: "IT Strategy & Digital Transformation",
    description: "Strategic IT consulting services to help organizations align technology with business objectives and digital transformation goals.",
    deliverables: [
      "Technology roadmap",
      "Digital transformation strategy",
      "Vendor evaluation report",
      "Cost optimization analysis",
      "Risk assessment report",
      "Implementation timeline",
      "Change management plan"
    ],
    timeline: "2-6 weeks depending on scope",
    pricing: "Starting at $200/hour",
    startingPrice: 200,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=IT%20Strategy%20Inquiry",
    icon: "💡",
    features: [
      "Technology roadmap planning",
      "Digital transformation strategy",
      "Vendor selection and management",
      "Cost optimization analysis",
      "Risk assessment and mitigation",
      "Change management support",
      "Technology evaluation",
      "Performance benchmarking"
    ],
    technologies: [
      "Enterprise architecture tools",
      "Project management platforms",
      "Business process modeling",
      "Data analytics tools",
      "Cloud cost management",
      "Performance monitoring"
    ],
    industries: [
      "All Industries",
      "Cross-sector expertise",
      "Enterprise focus",
      "SMB optimization",
      "Startup guidance",
      "Non-profit support"
    ]
  },
  {
    id: "data-center-solutions",
    name: "Data Center & Colocation Services",
    description: "Complete data center solutions including design, build, migration, and ongoing management services.",
    deliverables: [
      "Data center design",
      "Infrastructure setup",
      "Migration services",
      "Monitoring and management",
      "Disaster recovery setup",
      "Documentation and training",
      "Ongoing support"
    ],
    timeline: "8-20 weeks depending on complexity",
    pricing: "Starting at $25,000",
    startingPrice: 25000,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Data%20Center%20Inquiry",
    icon: "🏢",
    features: [
      "Data center design and planning",
      "Infrastructure procurement",
      "Power and cooling systems",
      "Security and access control",
      "Monitoring and management",
      "Disaster recovery planning",
      "Compliance and certification",
      "Ongoing maintenance"
    ],
    technologies: [
      "Server hardware",
      "Storage solutions",
      "Network infrastructure",
      "Power systems",
      "Cooling systems",
      "Security systems"
    ],
    industries: [
      "Financial Services",
      "Healthcare",
      "Government",
      "Technology",
      "Manufacturing",
      "Telecommunications"
    ]
  },
  {
    id: "managed-it-services",
    name: "Managed IT Services",
    description: "Comprehensive managed IT services including 24/7 monitoring, help desk support, and proactive maintenance.",
    deliverables: [
      "24/7 monitoring setup",
      "Help desk implementation",
      "Proactive maintenance",
      "Security management",
      "Backup and recovery",
      "Performance optimization",
      "Monthly reporting"
    ],
    timeline: "2-4 weeks for setup",
    pricing: "Starting at $2,500/month",
    startingPrice: 2500,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Managed%20IT%20Services%20Inquiry",
    icon: "🔄",
    features: [
      "24/7 monitoring and alerting",
      "Help desk support",
      "Proactive maintenance",
      "Security management",
      "Backup and recovery",
      "Performance optimization",
      "Monthly reporting",
      "Strategic planning"
    ],
    technologies: [
      "RMM platforms",
      "PSA tools",
      "Monitoring solutions",
      "Backup systems",
      "Security tools",
      "Documentation platforms"
    ],
    industries: [
      "All Industries",
      "SMB focus",
      "Enterprise support",
      "Healthcare",
      "Legal",
      "Financial Services"
    ]
  }
];

export default function ITSolutionsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">IT Solutions & Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Enterprise-grade IT solutions designed to modernize your infrastructure, 
          enhance security, and drive operational efficiency across your organization.
        </p>
      </div>

      {/* IT Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {itServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p className="opacity-80">{service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
              <div className="text-sm opacity-60">Timeline: {service.timeline}</div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Deliverables</h3>
              <div className="grid grid-cols-1 gap-2">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⚙️</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">🔧</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Industries Served</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🏢</span>
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* IT Capabilities Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">IT Capabilities Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-sm opacity-80">Multi-cloud strategy, migration, and optimization</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Cybersecurity</h3>
            <p className="text-sm opacity-80">Comprehensive security and compliance solutions</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold mb-2">Infrastructure</h3>
            <p className="text-sm opacity-80">Network design, implementation, and management</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-semibold mb-2">Strategy</h3>
            <p className="text-sm opacity-80">IT strategy and digital transformation consulting</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our IT solutions can transform your technology landscape, 
          enhance security, and drive operational efficiency. Get in touch for a comprehensive IT assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT%20Solutions%20Consultation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>

      {/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </a>
      </div>
    </div>
  );
}