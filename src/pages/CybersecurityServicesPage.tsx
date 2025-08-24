import React, { useState } from 'react';
<<<<<<< HEAD
import { 
  MICRO_SERVICES, 
  MicroService,
  getServicesByCategory
} from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Award,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  BarChart3,
  Key,
  Network
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const cybersecurityServices = getServicesByCategory('cybersecurity');

const SecurityServiceCard: React.FC<{ service: MicroService }> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text-zion-slate-light text-sm line-clamp-2">
              {service.description}
            </CardDescription>
          </div>
          {service.featured && (
            <Badge variant="secondary" className="bg-zion-purple text-white text-xs">
              <Award className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{service.rating}</span>
            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
          </div>
          <Badge variant="outline" className="border-zion-purple text-zion-cyan text-xs">
            AI Score: {service.aiScore}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-white font-semibold">
                ${service.price.toLocaleString()}
              </span>
              <span className="text-zion-slate-light text-sm">
                {service.pricingModel === 'monthly' ? '/month' : 'one-time'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-zion-slate-light text-sm">
              <Clock className="w-3 h-3" />
              {service.deliveryTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <TrendingUp className="w-4 h-4 text-zion-purple" />
              <span>Market Price: {service.marketPrice}</span>
            </div>
            
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Users className="w-4 h-4 text-zion-cyan" />
              <span>{service.author.name}</span>
              {service.author.verified && (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
            </div>
          </div>

          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan transition-colors"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </Button>

          {showDetails && (
            <div className="space-y-4 pt-3 border-t border-zion-blue-light">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-purple" />
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
=======
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
>>>>>>> 00d51a7221a0391df0e2b7f12fcb54d7369c373b
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Benefits
                </h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
=======
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-blue-400">→</span>
>>>>>>> 00d51a7221a0391df0e2b7f12fcb54d7369c373b
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD

              <div className="bg-zion-blue p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const SecurityFeatureSection: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Threat Protection</h3>
      <p className="text-zion-slate-light text-sm">Advanced protection against cyber threats and attacks</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Eye className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">24/7 Monitoring</h3>
      <p className="text-zion-slate-light text-sm">Round-the-clock security monitoring and alerting</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Lock className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Compliance</h3>
      <p className="text-zion-slate-light text-sm">Meet industry standards and regulatory requirements</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Incident Response</h3>
      <p className="text-zion-slate-light text-sm">Rapid response and recovery from security incidents</p>
    </div>
  </div>
);

const SecurityBenefitsSection: React.FC = () => (
  <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-12">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Cybersecurity Services?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Proactive Defense</h3>
          <p className="text-zion-slate-light text-sm">Identify and prevent threats before they become incidents</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Rapid Response</h3>
          <p className="text-zion-slate-light text-sm">Immediate action to minimize damage and downtime</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Risk Reduction</h3>
          <p className="text-zion-slate-light text-sm">Comprehensive risk assessment and mitigation strategies</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Expert Team</h3>
          <p className="text-zion-slate-light text-sm">Certified security professionals with years of experience</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Continuous Monitoring</h3>
          <p className="text-zion-slate-light text-sm">Real-time threat detection and security analytics</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Key className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Compliance Ready</h3>
          <p className="text-zion-slate-light text-sm">Meet SOC2, ISO27001, GDPR, and other standards</p>
        </div>
      </div>
    </div>
  </div>
);

const SecurityThreatsSection: React.FC = () => (
  <div className="space-y-6 mb-12">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Common Cybersecurity Threats We Protect Against</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
            <Network className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Ransomware Attacks</h3>
            <p className="text-zion-slate-light text-sm">Data encryption and extortion</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm">
          Protect against ransomware with advanced threat detection, backup solutions, and rapid recovery procedures.
        </p>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Phishing Scams</h3>
            <p className="text-zion-slate-light text-sm">Social engineering attacks</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm">
          Employee training, email filtering, and advanced threat protection to prevent phishing attacks.
        </p>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Data Breaches</h3>
            <p className="text-zion-slate-light text-sm">Unauthorized data access</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm">
          Comprehensive data protection with encryption, access controls, and continuous monitoring.
        </p>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Insider Threats</h3>
            <p className="text-zion-slate-light text-sm">Internal security risks</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm">
          User behavior analytics and access controls to detect and prevent insider threats.
        </p>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">DDoS Attacks</h3>
            <p className="text-zion-slate-light text-sm">Service disruption</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm">
          Advanced DDoS protection and traffic filtering to maintain service availability.
        </p>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Zero-Day Exploits</h3>
            <p className="text-zion-slate-light text-sm">Unknown vulnerabilities</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm">
          Proactive vulnerability management and threat intelligence to stay ahead of emerging threats.
        </p>
      </div>
    </div>
  </div>
);

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Cybersecurity Services - Zion Tech Group" 
        description="Comprehensive cybersecurity solutions including security audits, incident response, and threat protection. Protect your business with expert security services."
        keywords="cybersecurity, security audit, penetration testing, incident response, threat protection, compliance, SOC2, ISO27001"
        canonical="https://ziontechgroup.com/cybersecurity-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark to-zion-blue py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Protect your business with comprehensive cybersecurity solutions. From security audits to 24/7 monitoring, 
            we provide the expertise and tools to defend against evolving cyber threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Security Assessment
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency Response
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <SecurityFeatureSection />
        <SecurityBenefitsSection />
        <SecurityThreatsSection />
        
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Security Services</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business assets, data, and reputation. 
              Each service is delivered by certified security professionals with proven expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybersecurityServices.map((service) => (
              <SecurityServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-zion-blue-dark border-t border-zion-blue-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Don't wait until it's too late. Contact our cybersecurity experts to assess your security posture 
            and implement comprehensive protection measures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Security Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Security Team
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Mobile: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
=======
              
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
>>>>>>> 00d51a7221a0391df0e2b7f12fcb54d7369c373b
          </div>
        </div>
      </div>
    </div>
  );
}