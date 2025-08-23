import React from 'react';
import Layout from '../components/layout/Layout';
import { Shield, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Brain, Scale } from 'lucide-react';

export default function AIEthicsGovernance2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Ethics & Governance
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of responsible AI with comprehensive ethics frameworks and 
                governance systems that ensure AI operates safely and ethically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Implement Ethics
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300">
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
                Revolutionary AI Ethics & Governance Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI ethics and governance platform represents the pinnacle of responsible AI, 
                combining advanced frameworks with comprehensive oversight and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Ethical Framework",
                  description: "Comprehensive ethical guidelines and principles for AI development and deployment.",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Scale className="w-8 h-8" />,
                  title: "Governance Systems",
                  description: "Advanced oversight and control mechanisms for AI operations and decision-making.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Compliance Monitoring",
                  description: "Real-time monitoring and enforcement of ethical standards and regulations.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Stakeholder Engagement",
                  description: "Inclusive processes for involving diverse perspectives in AI governance.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Transparency & Accountability",
                  description: "Clear visibility into AI decision-making processes and outcomes.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Continuous Improvement",
                  description: "Ongoing refinement of ethical frameworks based on real-world outcomes.",
                  color: "from-pink-500 to-red-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethics Principles */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Ethical Principles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our comprehensive ethical framework is built on fundamental principles that ensure 
                AI systems operate safely, fairly, and responsibly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Beneficence", description: "AI must benefit humanity and avoid harm" },
                { name: "Non-maleficence", description: "AI must not cause harm to humans or society" },
                { name: "Autonomy", description: "Respect human autonomy and decision-making" },
                { name: "Justice", description: "Ensure fairness and avoid discrimination" },
                { name: "Transparency", description: "Clear understanding of AI processes" },
                { name: "Accountability", description: "Responsibility for AI actions and outcomes" },
                { name: "Privacy", description: "Protect individual privacy and data rights" },
                { name: "Sustainability", description: "Long-term environmental and social responsibility" }
              ].map((principle, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{principle.name}</h3>
                  <p className="text-gray-400 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Governance Framework
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multi-layered governance structure that ensures ethical AI development, 
                deployment, and ongoing operation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Policy Development",
                  description: "Creation of comprehensive AI policies and guidelines."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Risk Assessment",
                  description: "Systematic evaluation of AI risks and mitigation strategies."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Compliance Monitoring",
                  description: "Continuous oversight of AI operations and adherence to standards."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Stakeholder Engagement",
                  description: "Inclusive processes for diverse perspectives and input."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Incident Response",
                  description: "Rapid response and resolution of ethical violations."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Continuous Improvement",
                  description: "Ongoing refinement of governance processes and frameworks."
                }
              ].map((component, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-start space-x-4">
                    {component.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{component.title}</h3>
                      <p className="text-gray-400 text-sm">{component.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits of Ethical AI Governance
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Build trust, ensure compliance, and create sustainable AI systems that 
                benefit society while protecting individual rights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Trust & Confidence",
                  description: "Build stakeholder trust through transparent and ethical AI practices."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Regulatory Compliance",
                  description: "Meet and exceed regulatory requirements for AI systems."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Risk Mitigation",
                  description: "Identify and address potential AI risks before they materialize."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Innovation Enablement",
                  description: "Enable responsible AI innovation within ethical boundaries."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Social Responsibility",
                  description: "Demonstrate commitment to social responsibility and sustainability."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Competitive Advantage",
                  description: "Differentiate through ethical AI practices and governance."
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-start space-x-4">
                    {benefit.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Implement Ethical AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the movement toward responsible AI development and ensure your systems 
              operate ethically and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Implementation Today
              </button>
              <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}