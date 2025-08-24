import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Network,
  Smartphone,
  CreditCard,
  Clock,
  Award,
  BarChart3,
  FileText,
  Server,
  Database,
  Key,
  Search,
  Monitor,
  AlertCircle,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { ENHANCED_SERVICES } from '@/data/enhancedServices';

// Filter cybersecurity services
const CYBERSECURITY_SERVICES = ENHANCED_SERVICES.filter(service => 
  service.category.includes('Cybersecurity') || 
  service.category.includes('Security') ||
  service.category.includes('Zero Trust')
);

export default function CybersecurityServicesPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-zion-cyan mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Cybersecurity Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Protect Your Business with Enterprise-Grade Security Solutions
          </p>
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
            From threat detection to compliance management, we provide comprehensive cybersecurity that keeps your business safe in an evolving digital landscape.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>

          {/* Security Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-cyan-light">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan-light">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-cyan-light">Breach Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-cyan-light">Compliance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Services
            </TabsTrigger>
            <TabsTrigger value="compliance" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Compliance
            </TabsTrigger>
            <TabsTrigger value="threats" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Threats
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Cybersecurity is Critical</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                In today's interconnected world, cybersecurity is not just about protecting data—it's about protecting your business, reputation, and future.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Threat Protection</h3>
                  <p className="text-zion-cyan-light">
                    Advanced threat detection and prevention systems that identify and neutralize cyber attacks before they can cause damage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Lock className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                  <p className="text-zion-cyan-light">
                    Comprehensive data protection including encryption, access controls, and secure backup solutions to safeguard your critical information.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Compliance & Risk</h3>
                  <p className="text-zion-cyan-light">
                    Ensure regulatory compliance and minimize risk exposure with our comprehensive security frameworks and audit support.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Security Framework */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Security Framework</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Eye className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Detect</h4>
                  <p className="text-sm text-zion-cyan-light">Advanced threat detection and monitoring</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Protect</h4>
                  <p className="text-sm text-zion-cyan-light">Multi-layered defense systems</p>
                </div>
                <div className="text-center">
                  <AlertCircle className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Respond</h4>
                  <p className="text-sm text-zion-cyan-light">Rapid incident response and recovery</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Recover</h4>
                  <p className="text-sm text-zion-cyan-light">Business continuity and resilience</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your business from modern cyber threats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CYBERSECURITY_SERVICES.map((service) => (
                <SecurityServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Additional Security Services */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Search className="h-6 w-6 text-zion-cyan" />
                    Penetration Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-cyan-light mb-4">
                    Comprehensive security assessments to identify vulnerabilities before attackers do.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Network penetration testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Web application testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Social engineering assessments</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Monitor className="h-6 w-6 text-zion-cyan" />
                    Security Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-cyan-light mb-4">
                    24/7 security monitoring and threat intelligence to detect and respond to incidents in real-time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">SIEM implementation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Threat intelligence feeds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Incident response automation</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="h-6 w-6 text-zion-cyan" />
                    Security Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-cyan-light mb-4">
                    Employee security awareness training to create a human firewall against social engineering attacks.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Phishing simulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Security best practices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Compliance training</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Compliance & Regulatory Standards</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Ensure your business meets industry standards and regulatory requirements with our comprehensive compliance solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ComplianceCard
                icon={<FileText className="h-8 w-8" />}
                title="GDPR Compliance"
                description="European data protection regulation compliance with privacy-by-design principles."
                requirements={["Data protection", "Privacy rights", "Breach notification", "Data processing"]}
                industries={["All EU businesses", "Healthcare", "Finance", "E-commerce"]}
              />
              <ComplianceCard
                icon={<Shield className="h-8 w-8" />}
                title="SOC 2 Type II"
                description="Service Organization Control 2 certification for security, availability, and confidentiality."
                requirements={["Security controls", "Availability monitoring", "Confidentiality", "Processing integrity"]}
                industries={["SaaS companies", "Cloud providers", "Data centers", "IT services"]}
              />
              <ComplianceCard
                icon={<Lock className="h-8 w-8" />}
                title="HIPAA Compliance"
                description="Health Insurance Portability and Accountability Act compliance for healthcare organizations."
                requirements={["Patient privacy", "Data security", "Access controls", "Audit trails"]}
                industries={["Healthcare", "Medical devices", "Health insurance", "Telemedicine"]}
              />
              <ComplianceCard
                icon={<CreditCard className="h-8 w-8" />}
                title="PCI DSS"
                description="Payment Card Industry Data Security Standard for payment processing security."
                requirements={["Card data protection", "Network security", "Access control", "Regular testing"]}
                industries={["Retail", "E-commerce", "Payment processing", "Financial services"]}
              />
              <ComplianceCard
                icon={<Server className="h-8 w-8" />}
                title="ISO 27001"
                description="International standard for information security management systems."
                requirements={["Risk assessment", "Security controls", "Management system", "Continuous improvement"]}
                industries={["Technology", "Manufacturing", "Financial services", "Government"]}
              />
              <ComplianceCard
                icon={<Database className="h-8 w-8" />}
                title="CCPA Compliance"
                description="California Consumer Privacy Act compliance for consumer data protection."
                requirements={["Consumer rights", "Data transparency", "Opt-out mechanisms", "Data security"]}
                industries={["California businesses", "Online services", "Data brokers", "Large corporations"]}
              />
            </div>
          </TabsContent>

          {/* Threats Tab */}
          <TabsContent value="threats" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Modern Cyber Threats</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Understanding the threat landscape is the first step in building effective cybersecurity defenses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ThreatCard
                icon={<AlertTriangle className="h-8 w-8" />}
                title="Ransomware Attacks"
                description="Malicious software that encrypts files and demands payment for decryption."
                impact="High - Data loss, business disruption, financial loss"
                prevention={["Regular backups", "Email filtering", "User training", "Patch management"]}
                trend="Increasing 150% annually"
              />
              <ThreatCard
                icon={<Users className="h-8 w-8" />}
                title="Social Engineering"
                description="Manipulation tactics to trick users into revealing sensitive information."
                impact="Medium - Data breaches, unauthorized access, reputation damage"
                prevention={["Security training", "Multi-factor authentication", "Verification procedures", "Incident reporting"]}
                trend="Most common attack vector"
              />
              <ThreatCard
                icon={<Network className="h-8 w-8" />}
                title="DDoS Attacks"
                description="Distributed denial-of-service attacks that overwhelm systems with traffic."
                impact="Medium - Service disruption, revenue loss, customer dissatisfaction"
                prevention={["Traffic filtering", "CDN protection", "Rate limiting", "Incident response"]}
                trend="Increasing in sophistication"
              />
              <ThreatCard
                icon={<Database className="h-8 w-8" />}
                title="Data Breaches"
                description="Unauthorized access to sensitive information and intellectual property."
                impact="High - Financial loss, legal consequences, brand damage"
                prevention={["Access controls", "Encryption", "Monitoring", "Regular audits"]}
                trend="Costing $4.35M average"
              />
              <ThreatCard
                icon={<Smartphone className="h-8 w-8" />}
                title="Mobile Threats"
                description="Attacks targeting mobile devices and applications."
                impact="Medium - Data theft, device compromise, privacy violations"
                prevention={["Mobile device management", "App security", "User training", "Regular updates"]}
                trend="Growing with mobile adoption"
              />
                             <ThreatCard
                 icon={<Network className="h-8 w-8" />}
                 title="Supply Chain Attacks"
                 description="Compromising software or hardware through third-party vendors."
                 impact="High - Widespread compromise, trust erosion, regulatory scrutiny"
                 prevention={["Vendor assessment", "Code signing", "Supply chain monitoring", "Incident response"]}
                 trend="Increasingly sophisticated"
               />
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Pricing</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Transparent pricing for comprehensive cybersecurity solutions that fit your business needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Essential Security"
                price="$3,999"
                description="Basic cybersecurity protection for small businesses"
                features={[
                  "Security assessment",
                  "Basic monitoring",
                  "Employee training",
                  "Incident response",
                  "Email support"
                ]}
                popular={false}
              />
              <PricingCard
                title="Professional Security"
                price="$9,999"
                description="Comprehensive security solution for growing businesses"
                features={[
                  "Advanced threat detection",
                  "24/7 monitoring",
                  "Penetration testing",
                  "Compliance support",
                  "Priority support",
                  "Security training"
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise Security"
                price="$24,999"
                description="Full-scale security transformation for large organizations"
                features={[
                  "Custom security architecture",
                  "Advanced threat hunting",
                  "Full compliance suite",
                  "Dedicated security team",
                  "24/7 support",
                  "Custom training programs",
                  "Ongoing optimization"
                ]}
                popular={false}
              />
            </div>

            {/* ROI Calculator */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Security Investment ROI</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Cost of Breach Prevention</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Average breach cost:</span>
                      <span className="text-white font-semibold">$4.35M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Security investment:</span>
                      <span className="text-white font-semibold">$9,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">ROI ratio:</span>
                      <span className="text-white font-semibold">435:1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Risk reduction:</span>
                      <span className="text-white font-semibold">90%+</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Additional Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Compliance cost savings:</span>
                      <span className="text-white font-semibold">$50K-200K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Insurance premium reduction:</span>
                      <span className="text-white font-semibold">20-40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Customer trust increase:</span>
                      <span className="text-white font-semibold">Significant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Competitive advantage:</span>
                      <span className="text-white font-semibold">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Shield className="mr-2 h-5 w-5" />
              Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-zion-blue-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Ready to strengthen your cybersecurity posture? Contact our security experts today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-cyan-light">24/7 Response</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
              <p className="text-sm text-zion-cyan-light">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Security Service Card Component
function SecurityServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          {service.featured && (
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan-light">Security Score:</span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-zion-blue-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light">
                {tag}
              </Badge>
            ))}
          </div>

          <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Compliance Card Component
function ComplianceCard({ icon, title, description, requirements, industries }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  requirements: string[];
  industries: string[];
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 text-zion-cyan">
          {icon}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
            <div className="space-y-1">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span className="text-sm text-zion-cyan-light">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Industries:</h4>
            <div className="flex flex-wrap gap-1">
              {industries.map((industry, index) => (
                <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Threat Card Component
function ThreatCard({ icon, title, description, impact, prevention, trend }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  prevention: string[];
  trend: string;
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 text-zion-cyan">
          {icon}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">Impact:</h4>
            <p className="text-sm text-zion-cyan-light">{impact}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Prevention:</h4>
            <div className="space-y-1">
              {prevention.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span className="text-sm text-zion-cyan-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Trend:</h4>
            <p className="text-sm text-zion-cyan-light">{trend}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Pricing Card Component
function PricingCard({ title, price, description, features, popular }: {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <Card className={`relative ${popular ? 'border-zion-cyan border-2' : 'border-zion-cyan/30'} bg-white/10 backdrop-blur-sm hover:border-zion-cyan/60 transition-all duration-300`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-zion-cyan text-white px-4 py-1">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
        <div className="text-4xl font-bold text-zion-cyan mt-4">{price}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-zion-cyan-light">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark text-white">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}