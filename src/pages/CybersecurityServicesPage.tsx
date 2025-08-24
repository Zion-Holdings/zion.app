import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  AlertTriangle,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Network,
  Database,
  Smartphone,
  TrendingUp as Activity,
  Users
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const cybersecurityServices = [
  {
    id: "threat-detection",
    title: "AI-Powered Threat Detection",
    description: "Advanced cybersecurity using machine learning to detect and prevent sophisticated cyber threats in real-time.",
    price: 1200,
    currency: "$",
    period: "/month",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Compliance monitoring",
      "24/7 SOC support"
    ],
    icon: <Eye className="h-8 w-8" />,
    category: "Threat Detection",
    badge: "Popular",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security Framework",
    description: "Implementation of zero-trust security architecture with identity verification, micro-segmentation, and continuous monitoring.",
    price: 4200,
    currency: "$",
    period: "/month",
    features: [
      "Identity verification",
      "Micro-segmentation",
      "Continuous monitoring",
      "Access control",
      "Network isolation",
      "Security policies"
    ],
    icon: <Lock className="h-8 w-8" />,
    category: "Architecture",
    badge: "Enterprise",
    link: "/services",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Comprehensive security testing to identify vulnerabilities and assess your security posture.",
    price: 2500,
    currency: "$",
    period: "/assessment",
    features: [
      "External penetration testing",
      "Internal security assessment",
      "Web application testing",
      "Social engineering",
      "Detailed reporting",
      "Remediation guidance"
    ],
    icon: <AlertTriangle className="h-8 w-8" />,
    category: "Testing",
    badge: "Critical",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    description: "Rapid response to security incidents with digital forensics and recovery services.",
    price: 3500,
    currency: "$",
    period: "/incident",
    features: [
      "24/7 incident response",
      "Digital forensics",
      "Evidence preservation",
      "Recovery planning",
      "Legal support",
      "Post-incident analysis"
    ],
    icon: <Activity className="h-8 w-8" />,
    category: "Response",
    badge: "Emergency",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "compliance-audit",
    title: "Compliance & Audit Services",
    description: "Ensure compliance with industry standards including SOC 2, ISO 27001, GDPR, and HIPAA.",
    price: 1800,
    currency: "$",
    period: "/month",
    features: [
      "Compliance assessment",
      "Policy development",
      "Audit preparation",
      "Gap analysis",
      "Training programs",
      "Ongoing support"
    ],
    icon: <Shield className="h-8 w-8" />,
    category: "Compliance",
    badge: "Required",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "security-training",
    title: "Security Awareness Training",
    description: "Comprehensive training programs to educate employees on cybersecurity best practices and threat awareness.",
    price: 450,
    currency: "$",
    period: "/user/month",
    features: [
      "Interactive training modules",
      "Phishing simulations",
      "Security assessments",
      "Progress tracking",
      "Compliance reporting",
      "Custom content"
    ],
    icon: <Users className="h-8 w-8" />,
    category: "Training",
    badge: "Essential",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  }
];

const securityBenefits = [
  {
    title: "Proactive Protection",
    description: "Identify and prevent threats before they can cause damage to your business",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Compliance Assurance",
    description: "Meet industry standards and regulatory requirements with confidence",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock security monitoring and incident response capabilities",
    icon: <Eye className="h-6 w-6" />
  },
  {
    title: "Cost Reduction",
    description: "Prevent costly security breaches and minimize financial impact",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const securityThreats = [
  {
    title: "Ransomware Attacks",
    description: "Protect against encryption-based attacks that can cripple your business operations",
    icon: <AlertTriangle className="h-6 w-6" />
  },
  {
    title: "Data Breaches",
    description: "Safeguard sensitive information from unauthorized access and exfiltration",
    icon: <Database className="h-6 w-6" />
  },
  {
    title: "Phishing Scams",
    description: "Train employees to recognize and avoid sophisticated social engineering attacks",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Insider Threats",
    description: "Monitor and control access to prevent malicious or accidental insider incidents",
    icon: <Network className="h-6 w-6" />
  }
];

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions. From threat detection to compliance, 
              we deliver comprehensive security services that keep your assets safe and your business compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Secure Your Business
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Security Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Cybersecurity?</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive protection that adapts to evolving threats and business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Modern Security Threats</h2>
            <p className="text-zion-slate-light text-lg">
              Stay protected against evolving cyber threats and attack vectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityThreats.map((threat, index) => (
              <div key={index} className="text-center p-6 border border-zion-blue-light rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple rounded-full mb-4">
                  <div className="text-white">
                    {threat.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{threat.title}</h3>
                <p className="text-zion-slate-light">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cybersecurity Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of security solutions designed to protect your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybersecurityServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                      {service.category}
                    </Badge>
                    {service.badge && (
                      <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Don't wait for a breach to happen. Protect your business with proactive cybersecurity solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Security Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Security Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}