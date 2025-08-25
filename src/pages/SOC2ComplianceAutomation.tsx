import React from 'react';
import { Link } from 'react-router-dom';

export default function SOC2ComplianceAutomation() {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type I',
      description: 'Point-in-time assessment of security controls',
      timeframe: '3-6 months',
      deliverables: ['Security assessment report', 'Control documentation', 'Gap analysis']
    },
    {
      name: 'SOC 2 Type II',
      description: 'Continuous monitoring over 6-12 months',
      timeframe: '6-12 months',
      deliverables: ['Ongoing monitoring', 'Periodic reports', 'Control effectiveness']
    },
    {
      name: 'SOC 2 +',
      description: 'Enhanced controls with additional criteria',
      timeframe: '6-12 months',
      deliverables: ['Extended controls', 'Industry-specific compliance', 'Enhanced reporting']
    }
  ];

  const automationFeatures = [
    {
      title: 'Automated Control Monitoring',
      description: 'Real-time monitoring of security controls and compliance status',
      icon: '🔒',
      benefits: ['24/7 monitoring', 'Instant alerts', 'Automated reporting']
    },
    {
      title: 'Policy Management',
      description: 'Centralized policy creation, distribution, and enforcement',
      icon: '📋',
      benefits: ['Template library', 'Version control', 'Automated distribution']
    },
    {
      title: 'Risk Assessment',
      description: 'Automated risk identification and assessment processes',
      icon: '⚠️',
      benefits: ['Risk scoring', 'Trend analysis', 'Mitigation tracking']
    },
    {
      title: 'Audit Trail',
      description: 'Comprehensive logging and audit trail management',
      icon: '📊',
      benefits: ['Complete visibility', 'Compliance evidence', 'Forensic analysis']
    }
    ];

  const tools = [
    { 
      name: 'Vanta', 
      url: 'https://www.vanta.com/', 
      description: 'Automated compliance monitoring and reporting',
      features: ['SOC 2 automation', 'GDPR compliance', 'HIPAA compliance']
    },
    { 
      name: 'Drata', 
      url: 'https://drata.com/', 
      description: 'Continuous compliance monitoring platform',
      features: ['Real-time monitoring', 'Automated evidence collection', 'Compliance scoring']
    },
    { 
      name: 'SecurityScorecard', 
      url: 'https://securityscorecard.com/', 
      description: 'Security ratings and compliance monitoring',
      features: ['Security ratings', 'Vendor monitoring', 'Compliance tracking']
    }
  ];

  const complianceCriteria = [
    {
      category: 'Security',
      controls: ['Access controls', 'Network security', 'Data encryption', 'Vulnerability management']
    },
    {
      category: 'Availability',
      controls: ['System monitoring', 'Backup and recovery', 'Disaster recovery', 'Performance monitoring']
    },
    {
      category: 'Processing Integrity',
      controls: ['Data validation', 'Error handling', 'Processing accuracy', 'Quality assurance']
    },
    {
      category: 'Confidentiality',
      controls: ['Data classification', 'Access restrictions', 'Data handling', 'Privacy controls']
    },
    {
      category: 'Privacy',
      controls: ['Data minimization', 'Consent management', 'Data subject rights', 'Breach notification']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            SOC 2 Compliance Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your SOC 2 compliance journey with AI-powered automation. 
            Reduce manual effort, eliminate compliance gaps, and maintain continuous compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Compliance Journey
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Schedule Assessment
            </button>
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">SOC 2 Compliance Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{framework.name}</h3>
                <p className="text-gray-300 mb-6">{framework.description}</p>
                <div className="mb-6">
                  <span className="text-sm text-cyan-400 font-semibold">Timeline: {framework.timeframe}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Deliverables:</h4>
                <ul className="space-y-2">
                  {framework.deliverables.map((deliverable, delIndex) => (
                    <li key={delIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Automation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">SOC 2 Trust Service Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{criteria.category}</h3>
                <ul className="space-y-2">
                  {criteria.controls.map((control, controlIndex) => (
                    <li key={controlIndex} className="text-sm text-gray-300">
                      • {control}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Integration & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{tool.name}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <ul className="mb-4 space-y-1">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Compliance?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join organizations that have reduced compliance costs by 60% and achieved 
              SOC 2 certification in record time with our automation platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services/cybersecurity"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More About Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}