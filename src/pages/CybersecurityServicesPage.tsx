import React from 'react';
import { getServicesByCategory } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Clock, MapPin, Mail, Phone, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Globe, Zap } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function CybersecurityServicesPage() {
  const cyberServices = getServicesByCategory('cybersecurity-services');

  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and real-time response capabilities."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: "Zero Trust Architecture",
      description: "Implement least-privilege access controls and continuous verification for enhanced security."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security operations center with real-time threat intelligence and incident response."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: "Proactive Risk Assessment",
      description: "Comprehensive vulnerability assessments and penetration testing to identify security gaps."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Security Training",
      description: "Employee security awareness training and phishing simulation programs."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Incident Response",
      description: "Rapid incident response with forensic analysis and recovery planning."
    }
  ];

  const complianceFrameworks = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data handling",
      icon: "🇪🇺",
      requirements: ["Data Protection Impact Assessment", "Privacy by Design", "Data Subject Rights", "Breach Notification"]
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance for California residents",
      icon: "🇺🇸",
      requirements: ["Consumer Rights Management", "Data Inventory", "Opt-out Mechanisms", "Privacy Policy Updates"]
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for service providers",
      icon: "🏢",
      requirements: ["Security Controls", "Availability Monitoring", "Processing Integrity", "Confidentiality"]
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System certification",
      icon: "🌐",
      requirements: ["Risk Assessment", "Security Controls", "Continuous Improvement", "Documentation"]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      icon: "🏥",
      requirements: ["Privacy Rule", "Security Rule", "Breach Notification", "Business Associate Agreements"]
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      icon: "💳",
      requirements: ["Network Security", "Access Control", "Vulnerability Management", "Security Monitoring"]
    }
  ];

  const securitySolutions = [
    {
      category: "Network Security",
      solutions: ["Firewall Management", "Intrusion Detection/Prevention", "VPN Solutions", "Network Segmentation", "DDoS Protection"]
    },
    {
      category: "Application Security",
      solutions: ["Web Application Firewall", "Code Security Review", "API Security Testing", "Container Security", "DevSecOps Integration"]
    },
    {
      category: "Endpoint Security",
      solutions: ["Antivirus/Antimalware", "Endpoint Detection & Response", "Device Management", "Data Loss Prevention", "Mobile Security"]
    },
    {
      category: "Cloud Security",
      solutions: ["Cloud Access Security Broker", "Identity & Access Management", "Cloud Security Posture Management", "Data Encryption", "Compliance Monitoring"]
    },
    {
      category: "Data Security",
      solutions: ["Data Encryption", "Data Classification", "Backup & Recovery", "Data Loss Prevention", "Privacy Controls"]
    },
    {
      category: "Identity Security",
      solutions: ["Multi-Factor Authentication", "Single Sign-On", "Privileged Access Management", "Identity Governance", "Federation Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity Services & Solutions - Zion Tech Group" 
        description="Protect your business with comprehensive cybersecurity services including penetration testing, compliance audits, threat intelligence, and security consulting. Expert security solutions with competitive pricing."
        keywords="cybersecurity services, penetration testing, compliance audit, threat intelligence, security consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/cybersecurity-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-purple-600 text-6xl mb-8">
            🔒
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your digital assets with enterprise-grade cybersecurity solutions. From penetration testing to compliance audits, 
            we safeguard your business against evolving cyber threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Shield className="w-5 h-5 mr-2" />
              Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </Button>
          </div>
        </div>
        
        {/* Floating Security Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🛡️</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🔐</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-spin">⚔️</div>
        <div className="absolute bottom-40 right-1/4 text-3xl animate-bounce">🚨</div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our security solutions combine cutting-edge technology with industry expertise to provide comprehensive protection for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Our Cybersecurity Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect your business from modern cyber threats and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cyberServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white">
                      {service.subcategory || service.category}
                    </Badge>
                  </div>
                  {service.aiScore && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-zion-cyan text-white">
                        AI Score: {service.aiScore}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-zion-slate group-hover:text-red-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                    {service.rating && (
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.rating}</span>
                        </div>
                        <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-red-600">
                      {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 group-hover:bg-red-700">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zion-blue-light">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Mail className="w-4 h-4" />
                      <span>{service.author.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Regulatory Support
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Ensure your business meets industry standards and regulatory requirements with our compliance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{framework.icon}</div>
                  <CardTitle className="text-xl">{framework.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">{framework.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {framework.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Protect every aspect of your digital infrastructure with our multi-layered security approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (
              <Card key={index} className="border-zion-blue-light hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-slate">{solution.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <li key={solIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Statistics */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself - protecting businesses worldwide with proven security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-lg">Uptime Guarantee</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-lg">Security Monitoring</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-lg">Businesses Protected</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-green-400 mb-2">15min</div>
              <div className="text-lg">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Don't wait until it's too late. Get in touch with our cybersecurity experts for a comprehensive security assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Shield className="w-5 h-5 mr-2" />
              Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 302 464 0950
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}