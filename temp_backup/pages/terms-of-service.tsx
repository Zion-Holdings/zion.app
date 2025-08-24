import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Shield, Globe, Lock, TrendingUp, Building, Star, FileText, Scale, Gavel, Handshake } from 'lucide-react';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Legal Terms
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Terms of Service
                </span>
                <br />
                <span className="text-white">Understanding Our Agreement</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                These terms govern your use of Zion Tech Group services. Please read them 
                carefully to understand your rights and responsibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Download PDF
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Contact Legal Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Terms & Conditions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our terms of service outline the rules, rights, and responsibilities 
                for using our AI consciousness, quantum computing, and autonomous systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Handshake className="w-12 h-12" />,
                  title: "Acceptance of Terms",
                  description: "By using our services, you agree to be bound by these terms and conditions.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Service Usage",
                  description: "Our services are provided for lawful purposes and must be used in compliance with applicable laws.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Scale className="w-12 h-12" />,
                  title: "Legal Compliance",
                  description: "Users must comply with all applicable laws, regulations, and industry standards.",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((term, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${term.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {term.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{term.title}</h3>
                  <p className="text-gray-400">{term.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Zion Tech Group provides cutting-edge technology services in AI consciousness, 
                quantum computing, and autonomous systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Consciousness Systems",
                  description: "Advanced artificial intelligence systems with consciousness and emotional intelligence capabilities.",
                  features: [
                    "AI model training and deployment",
                    "Consciousness framework implementation",
                    "Ethical AI development",
                    "Performance optimization"
                  ],
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Quantum Computing Solutions",
                  description: "Quantum computing services for complex computational problems and optimization.",
                  features: [
                    "Quantum algorithm development",
                    "Quantum simulation services",
                    "Quantum cryptography",
                    "Hardware integration"
                  ],
                  color: "from-purple-500 to-pink-500"
                }
              ].map((service, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                User Responsibilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                As a user of our services, you have certain responsibilities to ensure 
                safe and compliant usage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-12 h-12" />,
                  title: "Account Security",
                  description: "Maintain the security of your account credentials and notify us of any unauthorized access.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Compliance",
                  description: "Use our services in compliance with all applicable laws, regulations, and ethical guidelines.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Respectful Use",
                  description: "Use our services responsibly and respect the rights of other users and third parties.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <FileText className="w-12 h-12" />,
                  title: "Accurate Information",
                  description: "Provide accurate and truthful information when using our services.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Gavel className="w-12 h-12" />,
                  title: "Legal Use",
                  description: "Ensure your use of our services does not violate any laws or regulations.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Performance",
                  description: "Use our services efficiently and avoid activities that could degrade performance.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((responsibility, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${responsibility.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {responsibility.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{responsibility.title}</h3>
                  <p className="text-gray-400">{responsibility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                To ensure the safety and integrity of our services, certain activities 
                are strictly prohibited.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Security Violations",
                  activities: [
                    "Attempting to gain unauthorized access to systems",
                    "Interfering with service availability",
                    "Introducing malware or harmful code",
                    "Circumventing security measures"
                  ],
                  consequences: "Immediate account suspension and legal action",
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "Illegal Activities",
                  activities: [
                    "Using services for illegal purposes",
                    "Violating intellectual property rights",
                    "Engaging in fraud or deception",
                    "Violating privacy laws or regulations"
                  ],
                  consequences: "Account termination and reporting to authorities",
                  color: "from-orange-500 to-red-500"
                }
              ].map((category, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-4">Prohibited Activities:</h4>
                    <ul className="space-y-2">
                      {category.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Consequences:</h4>
                    <p className="text-gray-400">{category.consequences}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intellectual Property Rights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the ownership and usage rights of intellectual property 
                related to our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">IP Rights & Usage</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Our IP",
                      description: "Zion Tech Group retains all rights to our technology, software, and proprietary systems."
                    },
                    {
                      title: "Your Content",
                      description: "You retain ownership of content you create using our services, subject to our terms."
                    },
                    {
                      title: "Licenses",
                      description: "We grant you limited licenses to use our services for their intended purposes."
                    },
                    {
                      title: "Restrictions",
                      description: "You may not reverse engineer, copy, or redistribute our proprietary technology."
                    }
                  ].map((right, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{right.title}</h4>
                        <p className="text-gray-400">{right.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                  <FileText className="w-32 h-32 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Limitation of Liability
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our liability is limited as outlined in these terms. We provide services 
              "as is" and disclaim certain warranties.
            </p>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, 
                data, or use, arising out of or relating to these terms or your use of our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              If you have questions about these terms of service or need clarification 
              on any provision, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Contact Legal Team
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Request Clarification
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}