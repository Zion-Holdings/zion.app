import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Lock, 
  Users, 
  Globe, 
  Award,
  Monitor,
  AlertTriangle,
  TrendingUp,
  Zap,
  Database
} from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for data security and privacy',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Security controls assessment',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality protection',
        'Privacy controls'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification',
      icon: <Lock className="w-8 h-8" />,
      features: [
        'Risk assessment & treatment',
        'Security policies & procedures',
        'Asset management',
        'Access control',
        'Incident management'
      ]
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data protection',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Data protection impact assessment',
        'Privacy by design',
        'Data subject rights',
        'Breach notification',
        'Data processing agreements'
      ]
    },
    {
      name: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Privacy rule compliance',
        'Security rule implementation',
        'Breach notification',
        'Business associate agreements',
        'Training & awareness'
      ]
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Network security',
        'Vulnerability management',
        'Access control',
        'Security monitoring',
        'Incident response'
      ]
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program compliance',
      icon: <Award className="w-8 h-8" />,
      features: [
        'Security assessment',
        'Authorization process',
        'Continuous monitoring',
        'Risk management',
        'Compliance reporting'
      ]
    }
  ];

  const automatedServices = [
    {
      name: 'Continuous Monitoring',
      description: 'Real-time compliance monitoring and alerting',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: 'Automated Auditing',
      description: 'AI-powered compliance assessment and reporting',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'Risk Assessment',
      description: 'Automated risk identification and mitigation',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      name: 'Policy Management',
      description: 'Centralized policy creation and enforcement',
      icon: <FileText className="w-6 h-6" />
    },
    {
      name: 'Training Automation',
      description: 'Automated compliance training and certification',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Reporting Dashboard',
      description: 'Real-time compliance metrics and insights',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: 'Reduced Risk',
      description: 'Minimize compliance violations and associated penalties',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Automate manual compliance processes to reduce costs',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Faster Audits',
      description: 'Streamlined audit processes with automated evidence collection',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Continuous Compliance',
      description: 'Maintain compliance status with real-time monitoring',
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  return (
    <Layout
      title="Enterprise Compliance Solutions | Zion Tech Group"
      description="Comprehensive enterprise compliance solutions including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS. Automated compliance management and monitoring."
      keywords="enterprise compliance, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, FedRAMP, compliance automation, risk management"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Enterprise Compliance Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Automated Enterprise Compliance
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Streamline your compliance journey with our automated solutions. From SOC 2 to GDPR, 
                we help you achieve and maintain compliance with global standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Get Compliance Assessment
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Compliance Frameworks
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our solutions cover all major compliance standards, ensuring your organization 
                meets regulatory requirements across industries and geographies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                    {framework.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {framework.name}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {framework.description}
                  </p>
                  <ul className="space-y-2">
                    {framework.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Automated Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Automated Compliance Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Leverage AI and automation to streamline your compliance processes, 
                reduce manual effort, and ensure continuous compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automatedServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {service.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Compliance Solutions?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our automated compliance platform delivers measurable benefits that 
                transform how your organization manages regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Compliance Process?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join leading organizations that trust us to automate and streamline their compliance journey. 
              Let's build a more efficient, compliant future together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Your Compliance Transformation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CompliancePage;