import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Atom, Shield, Zap, Cpu, CheckCircle, ArrowRight, Brain, Lock } from 'lucide-react';

export default function QuantumComplianceAutomationPage() {
  const quantumFeatures = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Quantum-Safe Encryption',
      description: 'Post-quantum cryptography resistant to quantum attacks',
      features: ['Lattice-based cryptography', 'Hash-based signatures', 'Code-based encryption', 'Multivariate cryptography']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quantum Threat Detection',
      description: 'Advanced monitoring for quantum-based security threats',
      features: ['Quantum attack simulation', 'Vulnerability assessment', 'Real-time monitoring', 'Threat intelligence']
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Automated Compliance',
      description: 'AI-driven compliance monitoring and reporting',
      features: ['Continuous monitoring', 'Automated reporting', 'Policy enforcement', 'Audit preparation']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Intelligent Risk Assessment',
      description: 'Machine learning-based risk analysis and mitigation',
      features: ['Risk scoring', 'Predictive analytics', 'Mitigation strategies', 'Trend analysis']
    }
  ];

  const complianceAreas = [
    {
      area: 'Financial Services',
      standards: ['PCI DSS', 'SOX', 'GLBA', 'Basel III', 'Quantum Risk Framework']
    },
    {
      area: 'Healthcare',
      standards: ['HIPAA', 'HITECH', 'FDA Cybersecurity', 'NIST Framework', 'Quantum Security']
    },
    {
      area: 'Government',
      standards: ['FedRAMP', 'FISMA', 'CJIS', 'State Standards', 'Quantum Readiness']
    },
    {
      area: 'Critical Infrastructure',
      standards: ['NERC CIP', 'NIST CSF', 'ISO 27001', 'Quantum Resilience', 'Zero Trust']
    }
  ];

  const automationCapabilities = [
    'Real-time Compliance Monitoring',
    'Automated Policy Enforcement',
    'Intelligent Risk Assessment',
    'Quantum Threat Detection',
    'Compliance Reporting',
    'Audit Trail Management',
    'Incident Response Automation',
    'Continuous Improvement'
  ];

  const quantumTechnologies = [
    'Post-Quantum Cryptography',
    'Quantum Key Distribution',
    'Quantum Random Number Generation',
    'Quantum-Safe Algorithms',
    'Hybrid Encryption Systems',
    'Quantum-Resistant Protocols',
    'Quantum Security Frameworks',
    'Quantum Risk Assessment'
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Quantum Compliance Automation | Zion Tech Group</title>
        <meta name="description" content="Future-proof your compliance with quantum-safe automation. Advanced AI-driven compliance monitoring, quantum threat detection, and automated risk assessment." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-compliance-automation" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
              <Atom className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent mb-6">
              Quantum Compliance Automation
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Future-proof your compliance infrastructure with quantum-safe automation. Our AI-driven platform 
              combines advanced compliance monitoring with quantum threat detection for unparalleled security.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Get Protected</Button>
              <Button href="/quantum-services" variant="outline" className="px-8 py-4">Learn More</Button>
            </div>
          </header>

          {/* Quantum Features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Quantum-Safe Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quantumFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Areas */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Industry Compliance Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-blue-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.standards.map((standard, idx) => (
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

          {/* Automation Capabilities */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Automation Capabilities
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {automationCapabilities.map((capability, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-indigo-500/40 transition-all duration-300 text-center">
                    <Zap className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quantum Technologies */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Quantum Technologies
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quantumTechnologies.map((tech, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center">
                    <Atom className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Key Benefits
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    Future-Proof Security
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Quantum-resistant encryption</li>
                    <li>• Advanced threat detection</li>
                    <li>• Automated compliance</li>
                    <li>• Continuous monitoring</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-400" />
                    Intelligent Automation
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI-driven insights</li>
                    <li>• Predictive analytics</li>
                    <li>• Automated reporting</li>
                    <li>• Risk optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Implementation Process
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: '1', title: 'Assessment', desc: 'Current state and quantum risk analysis' },
                  { step: '2', title: 'Strategy', desc: 'Quantum-safe compliance roadmap' },
                  { step: '3', title: 'Implementation', desc: 'Platform deployment and integration' },
                  { step: '4', title: 'Validation', desc: 'Testing and compliance verification' },
                  { step: '5', title: 'Optimization', desc: 'Continuous improvement and monitoring' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready for Quantum-Safe Compliance?
              </h2>
              <p className="text-gray-300 mb-6">
                Don't wait for quantum threats to become reality. Secure your compliance infrastructure 
                with our advanced quantum-safe automation platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" className="px-8 py-4">Get Started</Button>
                <Button href="/quantum-services" variant="outline" className="px-8 py-4">Learn More</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}