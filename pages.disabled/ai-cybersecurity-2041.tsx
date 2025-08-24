import React from 'react';
import Layout from '../components/layout/Layout';
import { Shield, Sparkles, Zap, Target, Lock, Clock, CheckCircle, Brain, Eye, AlertTriangle } from 'lucide-react';

export default function AICybersecurity2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-red-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  AI Cybersecurity
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of cybersecurity with AI systems that predict, prevent, and 
                neutralize threats before they can compromise your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Secure Your Future
                </button>
                <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make AI Cybersecurity 2041 the most 
                advanced security platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Predictive Threat Intelligence",
                  description: "AI systems that analyze patterns and predict cyber threats before they materialize, enabling proactive defense.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Behavioral Analysis",
                  description: "Advanced AI that monitors user and system behavior to detect anomalies and potential security breaches.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Response",
                  description: "Instant threat detection and automated response systems that neutralize attacks in milliseconds.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Zero Trust Architecture",
                  description: "AI-powered zero trust security that continuously verifies every access attempt and connection.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "Threat Hunting",
                  description: "Proactive AI systems that actively search for and eliminate hidden threats within your network.",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Adaptive Defense",
                  description: "Self-learning security systems that adapt and evolve to counter new and emerging threats.",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-500/5 to-pink-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Layer Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security solutions that protect every layer of your digital infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Network Security", description: "AI-powered firewall and intrusion detection" },
                { name: "Endpoint Protection", description: "Advanced endpoint security and monitoring" },
                { name: "Cloud Security", description: "Comprehensive cloud infrastructure protection" },
                { name: "Application Security", description: "AI-driven application vulnerability scanning" },
                { name: "Data Protection", description: "Encryption and data loss prevention" },
                { name: "Identity Management", description: "Multi-factor authentication and access control" },
                { name: "Incident Response", description: "Automated threat response and recovery" },
                { name: "Compliance", description: "Regulatory compliance and audit support" }
              ].map((layer, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-red-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{layer.name}</h3>
                  <p className="text-gray-400 text-sm">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Security Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understand how our AI systems provide comprehensive protection through intelligent security processes.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Threat Detection",
                  description: "AI systems continuously monitor networks, systems, and applications for potential security threats",
                  features: ["Pattern recognition", "Anomaly detection", "Threat intelligence"]
                },
                {
                  phase: "Risk Assessment",
                  description: "Intelligent analysis of detected threats to assess risk levels and prioritize response actions",
                  features: ["Risk scoring", "Impact analysis", "Priority ranking"]
                },
                {
                  phase: "Automated Response",
                  description: "Instant automated response to neutralize threats and prevent security breaches",
                  features: ["Threat isolation", "Attack blocking", "System protection"]
                },
                {
                  phase: "Incident Analysis",
                  description: "Deep analysis of security incidents to understand attack vectors and improve defenses",
                  features: ["Forensic analysis", "Attack reconstruction", "Vulnerability identification"]
                },
                {
                  phase: "Continuous Learning",
                  description: "AI systems learn from every incident to improve threat detection and response capabilities",
                  features: ["Pattern learning", "Adaptive defense", "Threat evolution"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-500/5 to-pink-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive protection against the most sophisticated cyber threats and attack vectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  threat: "Malware & Ransomware",
                  description: "AI-powered detection and prevention of advanced malware, ransomware, and zero-day threats.",
                  protection: ["Behavioral analysis", "Sandboxing", "Real-time scanning"]
                },
                {
                  threat: "Phishing & Social Engineering",
                  description: "Intelligent detection of sophisticated phishing attempts and social engineering attacks.",
                  protection: ["URL analysis", "Content filtering", "User education"]
                },
                {
                  threat: "Advanced Persistent Threats",
                  description: "Detection and neutralization of sophisticated, long-term cyber espionage campaigns.",
                  protection: ["Threat hunting", "Network monitoring", "Incident response"]
                },
                {
                  threat: "DDoS Attacks",
                  description: "Real-time protection against distributed denial-of-service attacks and network flooding.",
                  protection: ["Traffic analysis", "Rate limiting", "Traffic filtering"]
                },
                {
                  threat: "Insider Threats",
                  description: "Detection of malicious activities and data exfiltration by internal users.",
                  protection: ["Behavioral monitoring", "Access control", "Data loss prevention"]
                },
                {
                  threat: "Supply Chain Attacks",
                  description: "Protection against attacks targeting third-party vendors and software dependencies.",
                  protection: ["Vendor assessment", "Code analysis", "Dependency scanning"]
                }
              ].map((threat, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-red-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{threat.threat}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{threat.description}</p>
                  <div className="space-y-2">
                    {threat.protection.map((protect, protectIndex) => (
                      <div key={protectIndex} className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{protect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI Cybersecurity 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Proactive Protection",
                  description: "Predict and prevent threats before they can cause damage or compromise your systems.",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "24/7 Monitoring",
                  description: "Continuous security monitoring and protection that never sleeps or takes breaks.",
                  icon: <Eye className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Reduced False Positives",
                  description: "AI-powered analysis that significantly reduces false alarms and alert fatigue.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Cost Savings",
                  description: "Prevent costly security breaches and reduce the need for extensive incident response.",
                  icon: <Lock className="w-8 h-8" />,
                  color: "from-purple-500 to-indigo-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-red-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your cybersecurity with AI-powered protection that delivers 
              unprecedented security, threat prevention, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}