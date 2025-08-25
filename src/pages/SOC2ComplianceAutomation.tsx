import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, BarChart3, Zap, Users, Globe, Database, Settings } from 'lucide-react';

const SOC2ComplianceAutomation: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring and automated compliance checks across all systems and processes."
    },
    {
      icon: CheckCircle,
      title: "Policy Enforcement",
      description: "Automated enforcement of security policies and compliance requirements."
    },
    {
      icon: BarChart3,
      title: "Real-time Reporting",
      description: "Instant compliance reports and dashboards for stakeholders and auditors."
    },
    {
      icon: Zap,
      title: "Automated Remediation",
      description: "AI-powered identification and automatic fixing of compliance violations."
    },
    {
      icon: Users,
      title: "Role-based Access Control",
      description: "Comprehensive user access management with automated permission reviews."
    },
    {
      icon: Globe,
      title: "Multi-Environment Support",
      description: "Unified compliance management across cloud, on-premises, and hybrid environments."
    }
  ];

  const complianceAreas = [
    {
      title: "Security Controls",
      description: "Automated monitoring and enforcement of security policies, access controls, and threat detection."
    },
    {
      title: "Availability Monitoring",
      description: "Continuous monitoring of system availability, performance, and disaster recovery capabilities."
    },
    {
      title: "Processing Integrity",
      description: "Validation of data processing accuracy, completeness, and authorization controls."
    },
    {
      title: "Confidentiality Protection",
      description: "Automated encryption, data classification, and access control enforcement."
    },
    {
      title: "Privacy Controls",
      description: "Compliance with privacy regulations and automated data protection measures."
    },
    {
      title: "Change Management",
      description: "Automated tracking and approval of system changes with compliance validation."
    }
  ];

  const benefits = [
    {
      metric: "90%",
      label: "Time Savings",
      description: "Automated compliance processes save significant time and resources"
    },
    {
      metric: "24/7",
      label: "Continuous Monitoring",
      description: "Round-the-clock compliance monitoring and alerting"
    },
    {
      metric: "100%",
      label: "Audit Ready",
      description: "Always prepared for compliance audits and assessments"
    },
    {
      metric: "Real-time",
      label: "Violation Detection",
      description: "Instant identification and remediation of compliance issues"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              SOC2 Compliance Automation
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              SOC2 Compliance Automation Platform
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your SOC2 compliance process with AI-powered automation. Achieve continuous compliance with minimal effort and maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Compliance Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in SOC2 compliance with our automated platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform provides comprehensive SOC2 compliance automation designed for modern enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cover all SOC2 Trust Service Criteria with automated monitoring and enforcement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your SOC2 Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that trust our platform for automated compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOC2ComplianceAutomation;