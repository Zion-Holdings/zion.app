import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Building,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Globe,
  Server
} from 'lucide-react';

const securityServices = [
  {
    id: 'zero-trust-network-architecture',
    title: 'Zero Trust Network Architecture',
    description: 'Comprehensive security framework that assumes no trust and verifies every access attempt',
    icon: Lock,
    color: 'from-red-500 to-pink-600',
    features: [
      'Identity verification',
      'Access control',
      'Network segmentation',
      'Continuous monitoring',
      'Threat prevention'
    ],
    pricing: '$799/month',
    href: '/zero-trust-network-architecture'
  },
  {
    id: 'threat-intelligence-platform',
    title: 'Threat Intelligence Platform',
    description: 'Advanced threat detection and intelligence gathering system for proactive security',
    icon: Eye,
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Real-time threat detection',
      'Intelligence gathering',
      'Risk assessment',
      'Incident response',
      'Security analytics'
    ],
    pricing: '$599/month',
    href: '/threat-intelligence-platform'
  },
  {
    id: 'compliance-automation',
    title: 'Compliance Automation',
    description: 'Automated compliance management for various industry standards and regulations',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-600',
    features: [
      'Regulatory compliance',
      'Automated reporting',
      'Audit trails',
      'Policy management',
      'Risk assessment'
    ],
    pricing: '$499/month',
    href: '/compliance-automation'
  },
  {
    id: 'soc2-compliance-automation',
    title: 'SOC2 Compliance Automation',
    description: 'Specialized automation for SOC2 Type I and Type II compliance requirements',
    icon: Shield,
    color: 'from-purple-500 to-indigo-600',
    features: [
      'SOC2 Type I & II',
      'Control automation',
      'Evidence collection',
      'Continuous monitoring',
      'Audit preparation'
    ],
    pricing: '$899/month',
    href: '/soc2-compliance-automation'
  },
  {
    id: 'vulnerability-assessment-penetration-testing',
    title: 'Vulnerability Assessment & Penetration Testing',
    description: 'Comprehensive security testing to identify and remediate vulnerabilities',
    icon: AlertTriangle,
    color: 'from-orange-500 to-red-600',
    features: [
      'Vulnerability scanning',
      'Penetration testing',
      'Security assessment',
      'Remediation guidance',
      'Ongoing monitoring'
    ],
    pricing: '$1,299/month',
    href: '/vulnerability-assessment-penetration-testing'
  }
];

const benefits = [
  {
    title: 'Proactive Protection',
    description: 'Identify and prevent threats before they impact your business',
    icon: Shield
  },
  {
    title: 'Compliance Ready',
    description: 'Meet industry standards and regulatory requirements',
    icon: CheckCircle2
  },
  {
    title: '24/7 Monitoring',
    description: 'Continuous security monitoring and threat detection',
    icon: Eye
  },
  {
    title: 'Expert Support',
    description: 'Access to cybersecurity experts and rapid response teams',
    icon: Users
  }
];

const industries = [
  {
    industry: 'Healthcare',
    description: 'HIPAA compliance and patient data protection',
    icon: Shield
  },
  {
    industry: 'Finance',
    description: 'PCI DSS and financial data security',
    icon: Lock
  },
  {
    industry: 'Government',
    description: 'FedRAMP and government security standards',
    icon: Globe
  },
  {
    industry: 'Manufacturing',
    description: 'Industrial control system security',
    icon: Server
  },
  {
    industry: 'Retail',
    description: 'E-commerce and payment security',
    icon: CheckCircle
  },
  {
    industry: 'Technology',
    description: 'Cloud and application security',
    icon: Zap
  }
];

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity - Zion Tech Group" 
        description="Advanced security and protection solutions for digital assets with comprehensive threat detection and compliance automation."
        keywords="cybersecurity, zero trust, threat intelligence, compliance automation, SOC2, penetration testing"
        url="https://ziontechgroup.com/services/cybersecurity"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-black to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              Cybersecurity
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced security and protection solutions that safeguard your digital assets, 
            ensure compliance, and provide peace of mind in an evolving threat landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Security Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business from evolving threats
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-red-400">{service.pricing}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our security solutions deliver exceptional protection through advanced technology and expert support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized cybersecurity solutions for various industries and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{industry.industry}</h3>
                </div>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your digital assets with our comprehensive cybersecurity solutions. 
            Get expert protection and peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Security Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}