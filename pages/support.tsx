import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, MessageCircle, Globe, Shield, TrendingUp, Building, Star, Search, Phone, Mail, HelpCircle, BookOpen, Video, FileText } from 'lucide-react';

export default function Support() {
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
                Expert Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Support
                </span>
                <br />
                <span className="text-white">We're Here to Help</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Get expert help with implementation, troubleshooting, and optimization. 
                Our team is ready to support your success with our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Browse Documentation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support option that best fits your needs. We're committed 
                to providing you with the assistance you need to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="w-12 h-12" />,
                  title: "Live Chat Support",
                  description: "Get instant help from our technical experts through our live chat system.",
                  availability: "24/7",
                  responseTime: "Instant",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Phone className="w-12 h-12" />,
                  title: "Phone Support",
                  description: "Speak directly with our support engineers for complex technical issues.",
                  availability: "Business Hours",
                  responseTime: "Immediate",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Mail className="w-12 h-12" />,
                  title: "Email Support",
                  description: "Submit detailed support tickets for comprehensive issue resolution.",
                  availability: "24/7",
                  responseTime: "4 hours",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <BookOpen className="w-12 h-12" />,
                  title: "Documentation",
                  description: "Comprehensive guides, tutorials, and reference materials for self-service support.",
                  availability: "24/7",
                  responseTime: "Instant",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Video className="w-12 h-12" />,
                  title: "Video Tutorials",
                  description: "Step-by-step video guides for common tasks and troubleshooting.",
                  availability: "24/7",
                  responseTime: "Instant",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Community Forum",
                  description: "Connect with other users and share solutions in our community forum.",
                  availability: "24/7",
                  responseTime: "Varies",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((option, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${option.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-blue-400 font-medium">{option.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-green-400 font-medium">{option.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Common Issues & Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find quick solutions to frequently encountered issues and learn 
                how to prevent them in the future.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Consciousness System Integration",
                  issues: [
                    "API authentication errors",
                    "Model training failures",
                    "Performance optimization",
                    "Ethical compliance setup"
                  ],
                  solutions: [
                    "Verify API keys and permissions",
                    "Check training data quality",
                    "Optimize model parameters",
                    "Implement ethical guidelines"
                  ],
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Quantum Computing Services",
                  issues: [
                    "Quantum circuit errors",
                    "Simulation timeouts",
                    "Result interpretation",
                    "Hardware compatibility"
                  ],
                  solutions: [
                    "Validate circuit design",
                    "Optimize circuit depth",
                    "Use result analyzers",
                    "Check system requirements"
                  ],
                  color: "from-purple-500 to-pink-500"
                }
              ].map((category, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-4">Common Issues</h4>
                      <ul className="space-y-2">
                        {category.issues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="flex items-start gap-2 text-gray-400">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-4">Solutions</h4>
                      <ul className="space-y-2">
                        {category.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-gray-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support Tiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support level that matches your needs and business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic Support",
                  description: "Essential support for getting started and basic troubleshooting.",
                  features: [
                    "Email support (24/7)",
                    "Documentation access",
                    "Community forum access",
                    "4-hour response time"
                  ],
                  price: "Included",
                  color: "from-gray-500 to-gray-600",
                  recommended: false
                },
                {
                  name: "Professional Support",
                  description: "Enhanced support for production environments and business-critical applications.",
                  features: [
                    "All Basic features",
                    "Live chat support",
                    "Phone support (business hours)",
                    "2-hour response time",
                    "Priority ticket handling"
                  ],
                  price: "$500/month",
                  color: "from-blue-500 to-indigo-500",
                  recommended: true
                },
                {
                  name: "Enterprise Support",
                  description: "Premium support with dedicated engineers and custom solutions.",
                  features: [
                    "All Professional features",
                    "Dedicated support engineer",
                    "24/7 phone support",
                    "1-hour response time",
                    "Custom training sessions",
                    "SLA guarantees"
                  ],
                  price: "$2,000/month",
                  color: "from-purple-500 to-pink-500",
                  recommended: false
                }
              ].map((tier, index) => (
                <div key={index} className={`relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl ${tier.recommended ? 'ring-2 ring-blue-500/50' : ''}`}>
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full">
                      Recommended
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} p-4 mx-auto mb-6`}>
                    <Shield className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 text-center">{tier.name}</h3>
                  <p className="text-gray-400 mb-6 text-center">{tier.description}</p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.recommended 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                  }`}>
                    {tier.recommended ? 'Get Started' : 'Learn More'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our support team is ready to assist you with any questions or issues. 
              Don't hesitate to reach out - we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Contact Support Now
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}