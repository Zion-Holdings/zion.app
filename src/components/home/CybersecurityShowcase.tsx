import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Zap,
  Database,
  Network,
  FileText,
  Clock,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

export function CybersecurityShowcase() {
  const [selectedThreat, setSelectedThreat] = useState<string | null>(null);
  const [complianceLevel, setComplianceLevel] = useState("basic");

  const securityServices = [
    {
      id: "security-audit",
      title: "Comprehensive Security Audit",
      description: "Full security assessment and vulnerability analysis",
      icon: <Shield className="h-8 w-8" />,
      price: 8000,
      duration: "2-4 weeks",
      features: [
        "Network security assessment",
        "Application security testing",
        "Infrastructure vulnerability scan",
        "Social engineering testing",
        "Detailed security report"
      ],
      compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
      riskLevel: "Critical",
      color: "from-red-500 to-pink-600"
    },
    {
      id: "penetration-testing",
      title: "Penetration Testing",
      description: "Real-world attack simulation and vulnerability discovery",
      icon: <Eye className="h-8 w-8" />,
      price: 12000,
      duration: "3-5 weeks",
      features: [
        "External network penetration",
        "Web application testing",
        "Social engineering assessment",
        "Physical security testing",
        "Remediation guidance"
      ],
      compliance: ["OWASP", "NIST", "ISO 27001"],
      riskLevel: "High",
      color: "from-orange-500 to-red-600"
    },
    {
      id: "compliance-framework",
      title: "Compliance Framework",
      description: "Regulatory compliance implementation and certification",
      icon: <FileText className="h-8 w-8" />,
      price: 15000,
      duration: "8-12 weeks",
      features: [
        "Compliance gap analysis",
        "Policy development",
        "Process documentation",
        "Training programs",
        "Audit preparation"
      ],
      compliance: ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "PCI DSS"],
      riskLevel: "Medium",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "incident-response",
      title: "Incident Response",
      description: "24/7 security incident management and recovery",
      icon: <AlertTriangle className="h-8 w-8" />,
      price: 10000,
      duration: "Ongoing",
      features: [
        "24/7 monitoring",
        "Incident detection",
        "Response coordination",
        "Forensic analysis",
        "Recovery planning"
      ],
      compliance: ["NIST", "ISO 27035"],
      riskLevel: "High",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: "security-training",
      title: "Security Awareness Training",
      description: "Employee security education and phishing simulation",
      icon: <Users className="h-8 w-8" />,
      price: 3000,
      duration: "1-2 weeks",
      features: [
        "Security awareness training",
        "Phishing simulation",
        "Social engineering awareness",
        "Password security",
        "Data protection training"
      ],
      compliance: ["ISO 27001", "SOC 2"],
      riskLevel: "Low",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "threat-intelligence",
      title: "Threat Intelligence",
      description: "Proactive threat monitoring and intelligence gathering",
      icon: <TrendingUp className="h-8 w-8" />,
      price: 6000,
      duration: "Ongoing",
      features: [
        "Threat monitoring",
        "Intelligence gathering",
        "Risk assessment",
        "Alert system",
        "Trend analysis"
      ],
      compliance: ["NIST", "ISO 27001"],
      riskLevel: "Medium",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const threatLandscape = [
    {
      type: "Ransomware",
      description: "Malicious software that encrypts files and demands payment",
      frequency: "Very High",
      impact: "Critical",
      mitigation: "Regular backups, employee training, endpoint protection",
      color: "text-red-500"
    },
    {
      type: "Phishing",
      description: "Deceptive emails designed to steal credentials",
      frequency: "High",
      impact: "High",
      mitigation: "Security awareness training, email filtering, MFA",
      color: "text-orange-500"
    },
    {
      type: "Data Breaches",
      description: "Unauthorized access to sensitive information",
      frequency: "High",
      impact: "Critical",
      mitigation: "Access controls, encryption, monitoring",
      color: "text-pink-500"
    },
    {
      type: "Insider Threats",
      description: "Malicious or negligent actions by employees",
      frequency: "Medium",
      impact: "High",
      mitigation: "Background checks, monitoring, access controls",
      color: "text-yellow-500"
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance",
      requirements: ["Security", "Availability", "Processing Integrity", "Confidentiality", "Privacy"],
      timeframe: "6-12 months",
      cost: "$15,000 - $25,000"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      requirements: ["Risk Assessment", "Security Controls", "Management System", "Continuous Improvement"],
      timeframe: "8-18 months",
      cost: "$20,000 - $35,000"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      requirements: ["Privacy Rule", "Security Rule", "Breach Notification", "Administrative Safeguards"],
      timeframe: "3-6 months",
      cost: "$8,000 - $15,000"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      requirements: ["Network Security", "Access Control", "Monitoring", "Security Policy"],
      timeframe: "4-8 months",
      cost: "$10,000 - $20,000"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Enterprise Cybersecurity Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Protect your business with comprehensive cybersecurity services. 
            From security audits to compliance frameworks, we ensure your digital assets are secure.
          </p>
          
          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-red-400">
                <Shield className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-zion-slate-light">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-orange-400">
                <Clock className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">&lt;15min</div>
              <div className="text-sm text-zion-slate-light">Response Time</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-yellow-400">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-zion-slate-light">Protected Companies</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-zion-slate-light">Compliance Success</div>
            </div>
          </div>
        </div>

        {/* Security Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Security Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map((service) => (
              <Card 
                key={service.id} 
                className="group overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan mb-2">
                        ${service.price.toLocaleString()}
                      </Badge>
                      <div className={`text-xs font-medium ${getRiskColor(service.riskLevel)}`}>
                        {service.riskLevel} Risk
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">Duration:</span>
                      <span className="text-white font-medium">{service.duration}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-zion-cyan">Key Features:</h4>
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                  >
                    <Link to={`/services?category=cybersecurity&service=${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Threat Landscape & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Threat Landscape */}
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Current Threat Landscape</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Stay informed about the latest cybersecurity threats and mitigation strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threatLandscape.map((threat, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedThreat === threat.type 
                        ? 'border-red-500 bg-red-500/10' 
                        : 'border-zion-purple/30 hover:border-red-500/50'
                    }`}
                    onClick={() => setSelectedThreat(selectedThreat === threat.type ? null : threat.type)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-semibold ${threat.color}`}>{threat.type}</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
                          {threat.frequency}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-400">
                          {threat.impact}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-zion-slate-light mb-2">{threat.description}</p>
                    {selectedThreat === threat.type && (
                      <div className="mt-3 p-3 bg-zion-blue-dark/50 rounded border border-red-500/30">
                        <h5 className="text-sm font-medium text-zion-cyan mb-1">Mitigation Strategies:</h5>
                        <p className="text-xs text-zion-slate-light">{threat.mitigation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Standards */}
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Compliance Standards</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Achieve and maintain regulatory compliance with our expert guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="p-4 bg-zion-blue-dark/50 rounded-lg border border-zion-purple/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{standard.name}</h4>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        {standard.timeframe}
                      </Badge>
                    </div>
                    <p className="text-sm text-zion-slate-light mb-2">{standard.description}</p>
                    <div className="text-xs text-zion-cyan font-medium mb-2">
                      Cost: {standard.cost}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {standard.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Assessment CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Your Free Security Assessment
            </h3>
            <p className="text-zion-slate-light mb-6">
              Don't wait for a breach to discover your vulnerabilities. 
              Our security experts will assess your current security posture and provide actionable recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                asChild
              >
                <Link to="/request-quote">
                  <Shield className="mr-2 h-5 w-5" />
                  Free Security Assessment
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-red-400 text-red-400 hover:bg-red-400/10"
                asChild
              >
                <Link to="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Speak with Security Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}