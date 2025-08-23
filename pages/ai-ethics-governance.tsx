import React from 'react';
import Head from 'next/head';
import { Shield, Scale, Users, Globe, Brain, Heart, Target, Zap } from 'lucide-react';

const AIEthicsGovernancePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI Ethics & Governance - Zion Tech Group</title>
        <meta name="description" content="Ensure responsible AI development with Zion Tech Group's AI ethics and governance framework. Ethical AI principles, compliance, and responsible innovation." />
        <meta name="keywords" content="AI ethics, AI governance, responsible AI, ethical AI development, AI compliance, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-ethics-governance" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="mx-auto h-16 w-16 text-amber-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Ethics & Governance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building responsible AI systems with ethical principles, 
              transparent governance, and human-centered design.
            </p>
          </div>
        </section>

        {/* Framework Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ethical AI Framework
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our comprehensive framework ensures AI systems are developed and deployed 
                with ethical considerations, transparency, and human welfare at the core.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Scale className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Ethical Principles</h3>
                <p className="text-gray-300">
                  Core ethical principles guiding AI development: 
                  fairness, transparency, accountability, and human dignity.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Human-Centered Design</h3>
                <p className="text-gray-300">
                  AI systems designed to enhance human capabilities 
                  and well-being while respecting human rights.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Globe className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Standards</h3>
                <p className="text-gray-300">
                  Alignment with international AI ethics standards 
                  and regulatory frameworks across jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Core Ethical Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Fairness & Non-Discrimination</h3>
                  <p className="text-gray-300">
                    AI systems that treat all individuals fairly, 
                    avoiding bias and discrimination based on protected characteristics.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Transparency & Explainability</h3>
                  <p className="text-gray-300">
                    Clear understanding of how AI systems make decisions 
                    and operate, enabling human oversight and accountability.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Privacy & Data Protection</h3>
                  <p className="text-gray-300">
                    Robust protection of personal data and privacy, 
                    with clear consent mechanisms and data governance.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Safety & Reliability</h3>
                  <p className="text-gray-300">
                    AI systems that are safe, reliable, and robust, 
                    with appropriate safeguards and risk mitigation.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Accountability & Oversight</h3>
                  <p className="text-gray-300">
                    Clear lines of responsibility and human oversight 
                    for AI system decisions and outcomes.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Human Agency & Control</h3>
                  <p className="text-gray-300">
                    AI systems that enhance human capabilities while 
                    preserving human autonomy and decision-making authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Governance & Compliance
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Ethics Review Boards</h3>
                <p className="text-gray-300">
                  Independent review processes for AI projects, 
                  ensuring ethical considerations are addressed.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Risk Assessment</h3>
                <p className="text-gray-300">
                  Comprehensive risk assessment frameworks for 
                  AI system development and deployment.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Compliance Monitoring</h3>
                <p className="text-gray-300">
                  Ongoing monitoring and auditing of AI systems 
                  for compliance with ethical standards.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Stakeholder Engagement</h3>
                <p className="text-gray-300">
                  Inclusive engagement with diverse stakeholders 
                  in AI development and governance processes.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
                <p className="text-gray-300">
                  Clear protocols for responding to AI-related 
                  incidents and ethical violations.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Continuous Improvement</h3>
                <p className="text-gray-300">
                  Regular review and updates of ethical frameworks 
                  based on lessons learned and emerging challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Implementation Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Design Phase</h3>
                  <p className="text-gray-300">
                    Ethical considerations integrated into AI system 
                    design from the earliest stages of development.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Development Phase</h3>
                  <p className="text-gray-300">
                    Ethical testing and validation throughout 
                    the AI development lifecycle.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Deployment Phase</h3>
                  <p className="text-gray-300">
                    Ethical monitoring and oversight during 
                    AI system deployment and operation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Training & Education</h3>
                  <p className="text-gray-300">
                    Comprehensive training for teams on ethical 
                    AI principles and governance practices.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
                  <p className="text-gray-300">
                    Clear documentation of ethical decisions, 
                    processes, and compliance measures.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Audit & Review</h3>
                  <p className="text-gray-300">
                    Regular audits and reviews to ensure 
                    ongoing compliance with ethical standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Applications & Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Healthcare AI</h3>
                  <p className="text-gray-300">
                    Ethical AI systems for medical diagnosis, 
                    treatment planning, and patient care.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                  <p className="text-gray-300">
                    Ethical AI for credit scoring, fraud detection, 
                    and financial decision-making.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Criminal Justice</h3>
                  <p className="text-gray-300">
                    Ethical AI systems for risk assessment, 
                    sentencing recommendations, and parole decisions.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Education Technology</h3>
                  <p className="text-gray-300">
                    Ethical AI for personalized learning, 
                    student assessment, and educational outcomes.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Employment & HR</h3>
                  <p className="text-gray-300">
                    Ethical AI for hiring, performance evaluation, 
                    and workplace decision-making.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Social Media</h3>
                  <p className="text-gray-300">
                    Ethical AI for content moderation, 
                    recommendation systems, and user safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Technology & Tools
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Bias Detection</h3>
                  <p className="text-gray-300">
                    AI tools for detecting and mitigating bias 
                    in machine learning models and datasets.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Explainability Tools</h3>
                  <p className="text-gray-300">
                    Technologies for making AI decisions 
                    interpretable and explainable to humans.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Privacy-Preserving AI</h3>
                  <p className="text-gray-300">
                    Techniques like federated learning and 
                    differential privacy for data protection.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Ethical Testing</h3>
                  <p className="text-gray-300">
                    Automated testing frameworks for evaluating 
                    AI system behavior and ethical compliance.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Monitoring Systems</h3>
                  <p className="text-gray-300">
                    Real-time monitoring of AI systems for 
                    ethical violations and compliance issues.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Governance Platforms</h3>
                  <p className="text-gray-300">
                    Integrated platforms for managing AI ethics, 
                    compliance, and governance processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Benefits & Impact
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Trust & Confidence</h3>
                  <p className="text-gray-300">
                    Building trust with users, customers, and 
                    stakeholders through ethical AI practices.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Risk Mitigation</h3>
                  <p className="text-gray-300">
                    Reducing risks associated with AI bias, 
                    discrimination, and unintended consequences.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Regulatory Compliance</h3>
                  <p className="text-gray-300">
                    Ensuring compliance with emerging AI 
                    regulations and ethical standards.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation Leadership</h3>
                  <p className="text-gray-300">
                    Positioning as a leader in responsible 
                    AI development and ethical innovation.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Sustainable Growth</h3>
                  <p className="text-gray-300">
                    Building sustainable AI systems that 
                    benefit society and avoid harmful impacts.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Human Well-being</h3>
                  <p className="text-gray-300">
                    Ensuring AI systems enhance human 
                    capabilities and contribute to well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Build Ethical AI Systems
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to implement ethical AI governance? Our framework will help you 
              build responsible AI systems that benefit society.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Shield className="mx-auto h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">For Organizations</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Ethics framework implementation</li>
                    <li>• Governance structure design</li>
                    <li>• Team training and education</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For AI Teams</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Ethical design principles</li>
                    <li>• Bias detection tools</li>
                    <li>• Testing frameworks</li>
                    <li>• Documentation templates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEthicsGovernancePage;