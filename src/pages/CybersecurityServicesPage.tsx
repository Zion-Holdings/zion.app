import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
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

const cybersecurityServices = COMPREHENSIVE_SERVICES.filter(service => 
  service.category.toLowerCase().includes('cybersecurity') || 
  service.tags.some(tag => tag.toLowerCase().includes('security'))
);

const SecurityServiceCard: React.FC<{ service: any }> = ({ service }) => {
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Benefits
                </h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}