import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Shield, CheckCircle, FileText, Lock, Users, Globe, Award, ArrowRight } from 'lucide-react';

export default function CompliancePage() {
  const complianceFrameworks = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
      features: ['Security controls', 'Availability monitoring', 'Confidentiality protection', 'Annual audits']
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'ISO 27001',
      description: 'Information Security Management System certification',
      features: ['Risk management', 'Security policies', 'Incident response', 'Continuous improvement']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data protection',
      features: ['Data privacy', 'User consent', 'Data portability', 'Right to be forgotten']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance',
      features: ['PHI protection', 'Security safeguards', 'Privacy rules', 'Breach notification']
    }
  ];

  const industryCompliance = [
    {
      industry: 'Financial Services',
      standards: ['PCI DSS', 'SOX', 'GLBA', 'FFIEC Guidelines']
    },
    {
      industry: 'Healthcare',
      standards: ['HIPAA', 'HITECH', 'FDA Regulations', 'State Privacy Laws']
    },
    {
      industry: 'Government',
      standards: ['FedRAMP', 'FISMA', 'CJIS', 'State Security Standards']
    },
    {
      industry: 'Education',
      standards: ['FERPA', 'COPPA', 'State Education Laws', 'Campus Security']
    }
  ];

  const complianceServices = [
    'Compliance Assessment & Gap Analysis',
    'Policy Development & Implementation',
    'Security Control Design',
    'Audit Preparation & Support',
    'Compliance Monitoring & Reporting',
    'Staff Training & Awareness',
    'Incident Response Planning',
    'Continuous Compliance Management'
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Compliance Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive compliance solutions including SOC 2, ISO 27001, GDPR, HIPAA, and industry-specific standards. Ensure your organization meets all regulatory requirements." />
        <link rel="canonical" href="https://ziontechgroup.com/compliance" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Compliance Solutions
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive compliance solutions that ensure your organization meets all regulatory requirements. 
              From SOC 2 to GDPR, we help you build robust compliance frameworks that protect your business and customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Get Compliant</Button>
              <Button href="/compliance-assessment" variant="outline" className="px-8 py-4">Free Assessment</Button>
            </div>
          </header>

          {/* Compliance Frameworks */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Major Compliance Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center">
                      {framework.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{framework.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{framework.description}</p>
                  <ul className="space-y-2">
                    {framework.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Compliance */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Industry-Specific Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryCompliance.map((industry, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-blue-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">{industry.industry}</h3>
                  <ul className="space-y-2">
                    {industry.standards.map((standard, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-blue-400" />
                        {standard}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Services */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Compliance Services
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {complianceServices.map((service, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center">
                    <Award className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Process */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Compliance Process
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: '1', title: 'Assessment', desc: 'Gap analysis and risk assessment' },
                  { step: '2', title: 'Planning', desc: 'Compliance roadmap development' },
                  { step: '3', title: 'Implementation', desc: 'Control deployment and testing' },
                  { step: '4', title: 'Validation', desc: 'Audit preparation and execution' },
                  { step: '5', title: 'Maintenance', desc: 'Ongoing compliance monitoring' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Benefits of Compliance
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    Risk Mitigation
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Reduced security risks</li>
                    <li>• Regulatory penalty avoidance</li>
                    <li>• Enhanced customer trust</li>
                    <li>• Improved business continuity</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    Business Advantages
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Competitive differentiation</li>
                    <li>• Market access expansion</li>
                    <li>• Operational efficiency</li>
                    <li>• Stakeholder confidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Achieve Compliance?
              </h2>
              <p className="text-gray-300 mb-6">
                Let our compliance experts help you navigate the complex regulatory landscape 
                and build a robust compliance framework for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" className="px-8 py-4">Get Started</Button>
                <Button href="/compliance-assessment" variant="outline" className="px-8 py-4">Free Assessment</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}