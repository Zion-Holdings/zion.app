import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Shield, Globe, Lock, TrendingUp, Building, Star, Eye, Database, Network, Server } from 'lucide-react';

export default function PrivacyPolicy() {
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
                Data Protection
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
                <br />
                <span className="text-white">Your Data, Your Privacy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                We are committed to protecting your privacy and ensuring the security 
                of your personal information. Learn how we collect, use, and protect your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Download PDF
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, we believe that privacy is a fundamental human right. 
                We are committed to transparency and protecting your personal information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Data Security",
                  description: "We implement industry-leading security measures to protect your data from unauthorized access, disclosure, or misuse.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Eye className="w-12 h-12" />,
                  title: "Transparency",
                  description: "We are transparent about what data we collect, how we use it, and who we share it with.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Lock className="w-12 h-12" />,
                  title: "User Control",
                  description: "You have full control over your data, including the right to access, modify, or delete your information.",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((principle, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${principle.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve 
                your experience. Here's what we collect and why.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Information You Provide",
                  data: [
                    "Name and contact information",
                    "Company and job title",
                    "Service preferences",
                    "Communication history"
                  ],
                  purpose: "To provide personalized services and support",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Automatically Collected Data",
                  data: [
                    "Device and browser information",
                    "Usage patterns and analytics",
                    "IP address and location",
                    "Cookies and similar technologies"
                  ],
                  purpose: "To improve our services and user experience",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((category, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Data Collected:</h4>
                    <ul className="space-y-2">
                      {category.data.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Purpose:</h4>
                    <p className="text-gray-400">{category.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Usage */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Use Your Data
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We use your data responsibly and only for purposes that benefit you 
                and improve our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Server className="w-12 h-12" />,
                  title: "Service Delivery",
                  description: "Provide and maintain our AI consciousness, quantum computing, and autonomous systems services.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Network className="w-12 h-12" />,
                  title: "Communication",
                  description: "Send important updates, support responses, and service notifications.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Database className="w-12 h-12" />,
                  title: "Service Improvement",
                  description: "Analyze usage patterns to improve our services and develop new features.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Security & Compliance",
                  description: "Ensure the security of our services and comply with legal obligations.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Customer Support",
                  description: "Provide personalized support and resolve technical issues.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Business Operations",
                  description: "Manage our business operations and improve customer relationships.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((usage, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${usage.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {usage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{usage.title}</h3>
                  <p className="text-gray-400">{usage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We implement comprehensive security measures to ensure your data 
                remains safe and secure at all times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Security Measures</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Encryption",
                      description: "All data is encrypted in transit and at rest using industry-standard encryption protocols."
                    },
                    {
                      title: "Access Controls",
                      description: "Strict access controls ensure only authorized personnel can access your data."
                    },
                    {
                      title: "Regular Audits",
                      description: "We conduct regular security audits and penetration testing to identify and fix vulnerabilities."
                    },
                    {
                      title: "Compliance",
                      description: "We maintain compliance with industry standards and regulations including GDPR, CCPA, and SOC 2."
                    }
                  ].map((measure, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{measure.title}</h4>
                        <p className="text-gray-400">{measure.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-32 h-32 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                You have complete control over your personal data. Here are your rights 
                and how to exercise them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye className="w-12 h-12" />,
                  title: "Right to Access",
                  description: "Request a copy of all personal data we hold about you.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <CheckCircle className="w-12 h-12" />,
                  title: "Right to Rectification",
                  description: "Request correction of inaccurate or incomplete personal data.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Lock className="w-12 h-12" />,
                  title: "Right to Erasure",
                  description: "Request deletion of your personal data under certain circumstances.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Network className="w-12 h-12" />,
                  title: "Right to Portability",
                  description: "Receive your data in a structured, machine-readable format.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Right to Restriction",
                  description: "Request limitation of processing under certain circumstances.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Right to Object",
                  description: "Object to processing of your data for specific purposes.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((right, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${right.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {right.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{right.title}</h3>
                  <p className="text-gray-400">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Contact Privacy Team
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Request Data Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}