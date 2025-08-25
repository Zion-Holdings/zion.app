import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Users, 
  Globe, 
  Database, 
  Server, 
  Network, 
  Key, 
  Fingerprint, 
  ArrowRight, 
  Star, 
  Award, 
  TrendingUp, 
  Clock, 
  Target, 
  Heart
} from 'lucide-react';

const securityStandards = [
  {
    name: "ISO 27001",
    category: "Information Security Management",
    logo: "/logos/iso27001.svg",
    description: "International standard for information security management systems",
    status: "Certified",
    validUntil: "2026-12-31",
    scope: "Global Operations",
    features: ["Risk Assessment", "Security Controls", "Incident Management", "Business Continuity"],
    benefits: ["Enhanced Security Posture", "Regulatory Compliance", "Customer Trust", "Risk Mitigation"]
  },
  {
    name: "SOC 2 Type II",
    category: "Service Organization Control",
    logo: "/logos/soc2.svg",
    description: "AICPA standard for service organizations' security, availability, and confidentiality",
    status: "Certified",
    validUntil: "2025-06-30",
    scope: "Cloud Services & Data Processing",
    features: ["Security Controls", "Availability Monitoring", "Confidentiality Protection", "Privacy Controls"],
    benefits: ["Third-party Validation", "Customer Assurance", "Competitive Advantage", "Operational Excellence"]
  },
  {
    name: "GDPR Compliance",
    category: "Data Protection Regulation",
    logo: "/logos/gdpr.svg",
    description: "European Union's General Data Protection Regulation compliance",
    status: "Compliant",
    validUntil: "Ongoing",
    scope: "EU Data Processing",
    features: ["Data Minimization", "Consent Management", "Right to Erasure", "Data Portability"],
    benefits: ["Legal Compliance", "Customer Rights Protection", "Data Transparency", "Global Operations"]
  },
  {
    name: "HIPAA",
    category: "Healthcare Data Protection",
    logo: "/logos/hipaa.svg",
    description: "Health Insurance Portability and Accountability Act compliance",
    status: "Compliant",
    validUntil: "Ongoing",
    scope: "Healthcare Solutions",
    features: ["PHI Protection", "Access Controls", "Audit Logging", "Encryption Standards"],
    benefits: ["Healthcare Market Access", "Patient Privacy", "Regulatory Compliance", "Trust Building"]
  }
];

const complianceFrameworks = [
  {
    name: "NIST Cybersecurity Framework",
    category: "Cybersecurity Standards",
    description: "Voluntary framework for managing and reducing cybersecurity risk",
    implementation: "Fully Implemented",
    maturity: "Tier 4 - Adaptive",
    controls: ["Identify", "Protect", "Detect", "Respond", "Recover"],
    benefits: ["Risk-based Approach", "Industry Best Practices", "Continuous Improvement", "Stakeholder Confidence"]
  },
  {
    name: "OWASP Top 10",
    category: "Web Application Security",
    description: "Standard awareness document for developers and web application security",
    implementation: "Fully Implemented",
    maturity: "Advanced",
    controls: ["Input Validation", "Authentication", "Session Management", "Data Protection"],
    benefits: ["Secure Development", "Vulnerability Prevention", "Code Quality", "Security Training"]
  },
  {
    name: "PCI DSS",
    category: "Payment Card Security",
    description: "Payment Card Industry Data Security Standard compliance",
    implementation: "Compliant",
    maturity: "Level 1",
    controls: ["Network Security", "Access Control", "Data Encryption", "Vulnerability Management"],
    benefits: ["Payment Processing", "Customer Trust", "Fraud Prevention", "Industry Standards"]
  },
  {
    name: "FedRAMP",
    category: "Federal Cloud Security",
    description: "Federal Risk and Authorization Management Program compliance",
    implementation: "In Progress",
    maturity: "Authorization Phase",
    controls: ["Access Control", "Audit & Accountability", "Configuration Management", "Incident Response"],
    benefits: ["Federal Contracts", "Cloud Security", "Government Trust", "Market Expansion"]
  }
];

const securityFeatures = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "End-to-End Encryption",
    description: "256-bit AES encryption for data in transit and at rest",
    features: ["TLS 1.3", "Database Encryption", "File-level Security", "API Security"],
    benefits: ["Data Protection", "Regulatory Compliance", "Customer Trust", "Risk Mitigation"]
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Multi-Factor Authentication",
    description: "Advanced authentication with biometric, hardware, and software tokens",
    features: ["Biometric Auth", "Hardware Tokens", "SMS/Email Codes", "SSO Integration"],
    benefits: ["Account Security", "Unauthorized Access Prevention", "Compliance", "User Experience"]
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Continuous Monitoring",
    description: "24/7 security monitoring with AI-powered threat detection",
    features: ["Real-time Alerts", "Threat Intelligence", "Behavioral Analysis", "Incident Response"],
    benefits: ["Proactive Security", "Quick Response", "Risk Reduction", "Compliance"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Role-Based Access Control",
    description: "Granular access control based on user roles and responsibilities",
    features: ["Permission Management", "Access Reviews", "Privilege Escalation", "Audit Logging"],
    benefits: ["Data Security", "Compliance", "Operational Efficiency", "Risk Management"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Loss Prevention",
    description: "Advanced DLP with content analysis and policy enforcement",
    features: ["Content Analysis", "Policy Enforcement", "Data Classification", "Incident Response"],
    benefits: ["Data Protection", "Compliance", "Risk Mitigation", "Customer Trust"]
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Network Security",
    description: "Comprehensive network protection with firewalls and intrusion detection",
    features: ["Next-gen Firewalls", "IDS/IPS", "VPN Access", "DDoS Protection"],
    benefits: ["Network Protection", "Unauthorized Access Prevention", "Business Continuity", "Compliance"]
  }
];

const securityStats = [
  { icon: <Shield className="w-6 h-6" />, value: "99.99%", label: "Uptime" },
  { icon: <Lock className="w-6 h-6" />, value: "256-bit", label: "Encryption" },
  { icon: <Eye className="w-6 h-6" />, value: "24/7", label: "Monitoring" },
  { icon: <CheckCircle className="w-6 h-6" />, value: "15+", label: "Certifications" },
  { icon: <Users className="w-6 h-6" />, value: "0", label: "Security Breaches" },
  { icon: <Award className="w-6 h-6" />, value: "100%", label: "Compliance" }
];

export function SecurityComplianceSection() {
  const [selectedStandard, setSelectedStandard] = useState<number | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<number | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Security & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Compliance</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Enterprise-grade security standards and compliance certifications that ensure your data, 
            applications, and infrastructure are protected by industry-leading security measures.
          </p>

          {/* Security stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
              >
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Standards */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Certifications & Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedStandard(selectedStandard === index ? null : index)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                          {standard.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{standard.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">{standard.status}</div>
                      <div className="text-zion-slate-light text-xs">Valid until {standard.validUntil}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {standard.description}
                  </p>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{standard.scope}</div>
                      <div className="text-zion-slate-light text-xs">Scope</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{standard.features.length}</div>
                      <div className="text-zion-slate-light text-xs">Features</div>
                    </div>
                  </div>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {standard.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feature}
                        </span>
                      ))}
                      {standard.features.length > 2 && (
                        <span className="text-zion-cyan/60 text-xs">
                          +{standard.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Certification Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedStandard === index && (
                      <motion.div 
                        className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Features:</h5>
                          <div className="flex flex-wrap gap-1">
                            {standard.features.map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Benefits:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {standard.benefits.join(", ")}
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{standard.status}</div>
                          <div className="text-zion-slate-light text-xs">Valid until {standard.validUntil}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Frameworks */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Compliance Frameworks & Controls
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedFramework(selectedFramework === index ? null : index)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                          {framework.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{framework.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">{framework.implementation}</div>
                      <div className="text-zion-slate-light text-xs">{framework.maturity}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {framework.description}
                  </p>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{framework.controls.length}</div>
                      <div className="text-zion-slate-light text-xs">Controls</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{framework.maturity}</div>
                      <div className="text-zion-slate-light text-xs">Maturity</div>
                    </div>
                  </div>

                  {/* Controls preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Controls:</div>
                    <div className="flex flex-wrap gap-1">
                      {framework.controls.slice(0, 2).map((control, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {control}
                        </span>
                      ))}
                      {framework.controls.length > 2 && (
                        <span className="text-zion-cyan/60 text-xs">
                          +{framework.controls.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Framework Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedFramework === index && (
                      <motion.div 
                        className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* All Controls */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Controls:</h5>
                          <div className="flex flex-wrap gap-1">
                            {framework.controls.map((control, idx) => (
                              <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {control}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Benefits:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {framework.benefits.join(", ")}
                          </div>
                        </div>

                        {/* Implementation Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{framework.implementation}</div>
                          <div className="text-zion-slate-light text-xs">Maturity: {framework.maturity}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Security Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                >
                  {/* Icon */}
                  <div className="text-zion-cyan mb-4 flex justify-center">
                    {feature.icon}
                  </div>

                  {/* Title and Description */}
                  <h4 className="text-xl font-bold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed text-center">
                    {feature.description}
                  </p>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {feature.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feat}
                        </span>
                      ))}
                      {feature.features.length > 2 && (
                        <span className="text-zion-cyan/60 text-xs">
                          +{feature.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      Learn More
                    </span>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedFeature === index && (
                      <motion.div 
                        className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Features:</h5>
                          <div className="flex flex-wrap gap-1">
                            {feature.features.map((feat, idx) => (
                              <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Benefits:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {feature.benefits.join(", ")}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Partner with Zion Tech Group for enterprise-grade security, compliance, 
                and data protection that meets the highest industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Security Assessment
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Certifications
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}